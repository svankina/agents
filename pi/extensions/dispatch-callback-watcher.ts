/**
 * dispatch-callback-watcher — Pi extension that surfaces dispatch-server
 * task-state notifications inside the active Pi conversation.
 *
 * When terminal-launched Codex workers (or any dispatch-tracked process)
 * reach a significant state (done / failed / cancelled / needs-review /
 * awaiting_approval), the local dispatch server appends a JSON line to a
 * shared notification file.  This extension polls that file every few seconds
 * and calls ctx.ui.notify() for each new event, so the user sees a non-
 * intrusive popup without having to open the dashboard or ask for status.
 *
 * ## Enable
 *
 * ```
 * export DISPATCH_CALLBACK_WATCHER_ENABLED=1
 * ```
 *
 * Alternatively, the extension activates automatically when
 * `SUBAGENT_TRACKER_ENABLED=1` is set (same flag used by the subagent-
 * tracking and dispatch-session-registration extensions).
 *
 * ## Notification file
 *
 * Default: `~/.pi/agent/dispatch-notifications.jsonl`
 * Override: `SUBAGENT_CALLBACK_EVENTS_FILE=/your/path.jsonl`
 *
 * The dispatch server writes to this file when started with the default
 * `--callback-events-file` setting (or `SUBAGENT_CALLBACK_EVENTS_FILE`).
 * You can also write events manually with `scripts/dispatch_notify.py`.
 *
 * ## Event format (one JSON object per line)
 *
 * ```json
 * {"ts":"…","event":"task_updated","task_id":"…","task_title":"…",
 *  "state":"done","summary":"…","current_step":"…"}
 * ```
 */

import type { ExtensionAPI, ExtensionUIContext } from "@earendil-works/pi-coding-agent";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

function toBool(v: string | undefined): boolean {
	if (!v) return false;
	const value = v.trim().toLowerCase();
	return value === "1" || value === "true" || value === "yes" || value === "on";
}

interface CallbackEvent {
	ts?: string;
	event?: string;
	task_id?: string;
	task_title?: string;
	state?: string;
	summary?: string;
	current_step?: string;
}

function formatNotification(ev: CallbackEvent): { message: string; type: "info" | "warning" | "error" } {
	const title = ev.task_title || ev.task_id || "dispatch task";
	const state = ev.state || "update";
	const extra = (ev.summary || ev.current_step || "").trim();

	let message: string;
	let type: "info" | "warning" | "error";

	switch (state) {
		case "done":
			message = `[dispatch] done: ${title}${extra ? ` — ${extra}` : ""}`;
			type = "info";
			break;
		case "failed":
			message = `[dispatch] failed: ${title}${extra ? ` — ${extra}` : ""}`;
			type = "error";
			break;
		case "cancelled":
			message = `[dispatch] cancelled: ${title}`;
			type = "info";
			break;
		case "needs-review":
			message = `[dispatch] needs review: ${title}${extra ? ` — ${extra}` : ""}`;
			type = "warning";
			break;
		case "awaiting_approval":
			message = `[dispatch] awaiting approval: ${title}`;
			type = "warning";
			break;
		default:
			message = `[dispatch] ${state}: ${title}${extra ? ` — ${extra}` : ""}`;
			type = "info";
	}

	return { message, type };
}

export default function dispatchCallbackWatcherExtension(pi: ExtensionAPI): void {
	const enabled = toBool(
		process.env.DISPATCH_CALLBACK_WATCHER_ENABLED ||
			process.env.SUBAGENT_TRACKER_ENABLED,
	);
	if (!enabled) return;

	const notificationsFile = (() => {
		const fromEnv = (process.env.SUBAGENT_CALLBACK_EVENTS_FILE || "").trim();
		if (fromEnv) return fromEnv;
		return path.join(os.homedir(), ".pi", "agent", "dispatch-notifications.jsonl");
	})();

	// Mutable state captured in closure — updated on each session_start.
	let uiCtx: ExtensionUIContext | null = null;
	let hasUI = false;
	let lastOffset = 0;
	let pollTimer: ReturnType<typeof setInterval> | null = null;

	function initFile(): void {
		try {
			const dir = path.dirname(notificationsFile);
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir, { recursive: true });
			}
			if (!fs.existsSync(notificationsFile)) {
				fs.writeFileSync(notificationsFile, "", "utf8");
			}
			lastOffset = fs.statSync(notificationsFile).size;
		} catch {
			// If file initialisation fails, polling will start from offset 0
			// and may re-show old events; acceptable for a best-effort notifier.
			lastOffset = 0;
		}
	}

	function poll(): void {
		if (!uiCtx || !hasUI) return;
		try {
			const stat = fs.statSync(notificationsFile);
			if (stat.size <= lastOffset) return;

			// Read only the new bytes.
			const buf = Buffer.alloc(stat.size - lastOffset);
			const fd = fs.openSync(notificationsFile, "r");
			fs.readSync(fd, buf, 0, buf.length, lastOffset);
			fs.closeSync(fd);
			lastOffset = stat.size;

			const lines = buf.toString("utf8").split("\n");
			for (const line of lines) {
				const trimmed = line.trim();
				if (!trimmed) continue;
				let ev: CallbackEvent;
				try {
					ev = JSON.parse(trimmed) as CallbackEvent;
				} catch {
					continue; // skip malformed lines
				}
				try {
					const { message, type } = formatNotification(ev);
					uiCtx.notify(message, type);
				} catch {
					// notify() may be unavailable in some contexts; ignore.
				}
			}
		} catch {
			// File may have been rotated or deleted; reset offset on next poll.
			try {
				lastOffset = fs.existsSync(notificationsFile) ? fs.statSync(notificationsFile).size : 0;
			} catch {
				lastOffset = 0;
			}
		}
	}

	function startPolling(ctx: { ui: ExtensionUIContext; hasUI: boolean }): void {
		uiCtx = ctx.ui;
		hasUI = ctx.hasUI;
		if (pollTimer !== null) {
			clearInterval(pollTimer);
		}
		initFile();
		// Poll every 4 seconds — responsive enough without being disruptive.
		pollTimer = setInterval(poll, 4000);
	}

	function stopPolling(): void {
		if (pollTimer !== null) {
			clearInterval(pollTimer);
			pollTimer = null;
		}
		uiCtx = null;
		hasUI = false;
	}

	pi.on("session_start", (_event, ctx) => {
		startPolling(ctx);
	});

	pi.on("session_shutdown", () => {
		stopPolling();
	});
}
