import { open } from "node:fs/promises";
import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";
import { matchesKey, truncateToWidth, wrapTextWithAnsi } from "@oh-my-pi/pi-tui";

export interface PeerChannelRow {
	id: string;
	peerName: string;
	state: "queued" | "running" | "idle" | "error";
	task: string;
	activity?: string;
	result?: string;
	sessionFile?: string;
	queued: number;
}

const WIDGET_KEY = "peer-channels";
const MAX_WIDGET_ROWS = 2;
const MAX_TEXT = 12_000;
const MAX_TRANSCRIPT_BYTES = 256 * 1024;

// Peer/model output is untrusted terminal text, including bidi and C1 controls.
function plain(value: string, limit = MAX_TEXT): string {
	const clipped = value.slice(0, limit);
	return clipped.replace(/[\x00-\x08\x0b-\x1f\x7f-\x9f\u202a-\u202e\u2066-\u2069]/g, "")
		.replace(/\t/g, "  ") + (value.length > limit ? "\n[display truncated]" : "");
}

function oneLine(value: string, limit = 240): string {
	return plain(value, limit).replace(/\s+/g, " ");
}

function preview(value: string): string {
	return oneLine(plain(value, 480).replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
		.replace(/[*`#>]/g, "")).trim();
}

function fit(value: string, width: number): string {
	return width > 0 ? truncateToWidth(value, width, "") : "";
}

function status(row: PeerChannelRow): string {
	return `${row.state} | queue ${row.queued}`;
}

function details(row: PeerChannelRow): string {
	return [
		`Peer: ${plain(row.peerName)}`,
		`Channel: ${plain(row.id)}`,
		`State: ${status(row)}`,
		"", "Task", plain(row.task),
		...(row.activity ? ["", "Activity", plain(row.activity)] : []),
		...(row.result ? ["", row.state === "error" ? "Error" : "Result", plain(row.result)] : []),
		"", `Session: ${row.sessionFile ? plain(row.sessionFile) : "Not yet persisted"}`,
		"", "Press t to inspect the persisted transcript read-only (latest 256 KiB).",
	].join("\n");
}

async function transcript(sessionFile: string): Promise<string> {
	const file = await open(sessionFile, "r");
	try {
		const { size } = await file.stat();
		const start = Math.max(0, size - MAX_TRANSCRIPT_BYTES);
		const buffer = Buffer.alloc(Math.min(size, MAX_TRANSCRIPT_BYTES));
		const { bytesRead } = await file.read(buffer, 0, buffer.length, start);
		let text = buffer.subarray(0, bytesRead).toString("utf8");
		if (start > 0) text = text.slice(text.indexOf("\n") + 1);
		const output = [plain(sessionFile), "Read-only persisted transcript; live output may not yet be saved."];
		if (start > 0) output.push("[Earlier entries omitted; showing latest 256 KiB.]");
		for (const line of text.split("\n")) {
			if (!line.trim()) continue;
			try {
				const entry = JSON.parse(line);
				if (entry.type === "custom_message" && entry.customType === "peer-channel-request") {
					const request = entry.details?.peerMessage;
					output.push("", "[peer request]", plain(typeof request?.body === "string" ? request.body : String(entry.content ?? "")));
					continue;
				}
				if (entry.type !== "message" || !entry.message) continue;
				const message = entry.message;
				output.push("", `[${oneLine(String(message.role))}${message.toolName ? `: ${oneLine(String(message.toolName))}` : ""}]`);
				if (typeof message.content === "string") output.push(plain(message.content));
				else if (Array.isArray(message.content)) {
					for (const block of message.content) {
						if (block?.type === "text" && typeof block.text === "string") output.push(plain(block.text));
						else if (block?.type === "toolCall") output.push(`Tool ${oneLine(String(block.name))}: ${plain(JSON.stringify(block.arguments) ?? "")}`);
						else if (block?.type === "thinking") output.push("[Thinking omitted]");
						else output.push(`[${oneLine(String(block?.type ?? "attachment"))}]`);
					}
				}
			} catch {
				output.push("[Incomplete or unreadable persisted entry]");
			}
		}
		if (output.length <= 3) output.push("No persisted messages in this window.");
		return output.join("\n");
	} finally {
		await file.close();
	}
}

export function createPeerChannelReporter(pi: ExtensionAPI): {
	update(ctx: ExtensionContext, rows: PeerChannelRow[]): void;
	clear(ctx: ExtensionContext): void;
} {
	let rows: PeerChannelRow[] = [];
	let activeUi: ExtensionContext["ui"] | undefined;
	let refreshBrowser: (() => void) | undefined;
	let closeBrowser: (() => void) | undefined;
	const unread = new Set<string>();

	const clear = (ctx: ExtensionContext): void => {
		closeBrowser?.();
		activeUi?.setWidget(WIDGET_KEY, undefined);
		if (ctx.hasUI && ctx.ui !== activeUi) ctx.ui.setWidget(WIDGET_KEY, undefined);
		activeUi = undefined;
		rows = [];
		unread.clear();
	};

	pi.registerCommand("channels", {
		description: "Inspect peer channels, results, errors and read-only worker transcripts",
		handler: async (_args, ctx) => {
			if (!ctx.hasUI) return;
			if (closeBrowser) return;
			let disposeBrowser: (() => void) | undefined;
			await ctx.ui.custom<void>((tui, theme, _keybindings, done) => {
				let selected = 0;
				let selectedId = rows[0]?.id;
				let view: "list" | "detail" | "transcript" = "list";
				let offset = 0;
				let totalLines = 0;
				let pageSize = 1;
				let transcriptText = "";
				let request = 0;
				let disposed = false;
				const close = () => { if (!disposed) done(); };
				closeBrowser = close;
				refreshBrowser = () => tui.requestRender();
				const current = () => {
					const index = rows.findIndex((row) => row.id === selectedId);
					selected = index >= 0 ? index : Math.max(0, Math.min(selected, rows.length - 1));
					selectedId = rows[selected]?.id;
					return rows[selected];
				};
				const dispose = () => {
					if (disposed) return;
					disposed = true;
					request++;
					if (closeBrowser === close) { closeBrowser = undefined; refreshBrowser = undefined; }
				};
				disposeBrowser = dispose;
				return {
					invalidate() {},
					dispose,
					render(width) {
						pageSize = Math.max(1, Math.min(24, (process.stdout.rows ?? 24) - 6));
						const row = current();
						const header = theme.bold(`Peer channels (${rows.length}) / ${view}`);
						const help = view === "list" ? "Up/Down select | Enter details | Esc close"
							: "Up/Down scroll | PgUp/PgDn | t transcript | Esc back";
						let body: string[];
						if (view === "list") {
							const start = Math.floor(selected / pageSize) * pageSize;
							body = rows.slice(start, start + pageSize).map((item, index) =>
								`${start + index === selected ? ">" : " "} ${start + index + 1}. ${unread.has(item.id) ? "[new] " : ""}${oneLine(item.peerName)} | ${status(item)} | ${oneLine(item.task)}`);
							if (!body.length) body = ["No peer channels yet."];
						} else {
							if (row) unread.delete(row.id);
							const text = view === "transcript" ? transcriptText : row ? details(row) : "Channel no longer available.";
							const lines = text.split("\n").flatMap((line) => line ? wrapTextWithAnsi(line, Math.max(1, width)) : [""]);
							totalLines = lines.length;
							offset = Math.max(0, Math.min(offset, totalLines - pageSize));
							body = lines.slice(offset, offset + pageSize);
							body.push(theme.fg("muted", `Lines ${offset + 1}-${Math.min(offset + pageSize, totalLines)} / ${totalLines}`));
						}
						return [header, theme.fg("muted", help), ...body].map((line) => fit(line, width));
					},
					handleInput(data) {
						const row = current();
						if (matchesKey(data, "escape") || matchesKey(data, "ctrl+c")) {
							request++;
							if (view === "list") { close(); return; }
							view = view === "transcript" ? "detail" : "list";
							offset = 0;
						} else if (view === "list" && matchesKey(data, "enter") && row) {
							view = "detail"; offset = 0;
						} else if (view !== "list" && data === "t" && row) {
							view = "transcript"; offset = 0;
							transcriptText = row.sessionFile ? "Loading persisted transcript…" : "No session file has been persisted yet.";
							const token = ++request;
							if (row.sessionFile) void transcript(row.sessionFile).then(
								(text) => { if (!disposed && request === token) { transcriptText = text; tui.requestRender(); } },
								(error) => { if (!disposed && request === token) { transcriptText = `Cannot read transcript: ${plain(String(error))}`; tui.requestRender(); } },
							);
						} else {
							const delta = matchesKey(data, "up") || data === "k" ? -1 : matchesKey(data, "down") || data === "j" ? 1
								: matchesKey(data, "pageUp") ? -pageSize : matchesKey(data, "pageDown") ? pageSize : 0;
							if (view === "list") {
								selected = Math.max(0, Math.min(rows.length - 1, selected + delta));
								selectedId = rows[selected]?.id;
							} else offset = Math.max(0, Math.min(Math.max(0, totalLines - pageSize), offset + delta));
						}
						tui.requestRender();
					},
				};
			}).finally(() => disposeBrowser?.());
		},
	});

	pi.on("session_shutdown", (_event, ctx) => clear(ctx));
	return {
		clear,
		update(ctx, nextRows) {
			const previous = new Map(rows.map((row) => [row.id, row]));
			const nextIds = new Set(nextRows.map((row) => row.id));
			for (const id of unread) if (!nextIds.has(id)) unread.delete(id);
			for (const row of nextRows) {
				const old = previous.get(row.id);
				if (row.state === "running" || row.state === "queued") unread.delete(row.id);
				else if ((row.state === "error" && (!old || old.state !== "error" || old.result !== row.result))
					|| (row.state === "idle" && old && (old.state === "running" || old.state === "queued"
						|| old.result !== row.result) && row.result)) unread.add(row.id);
			}
			rows = nextRows.map((row) => ({ ...row }));
			refreshBrowser?.();
			if (!ctx.hasUI) return;
			if (activeUi && activeUi !== ctx.ui) activeUi.setWidget(WIDGET_KEY, undefined);
			activeUi = ctx.ui;
			if (!rows.length) { ctx.ui.setWidget(WIDGET_KEY, undefined); return; }
			ctx.ui.setWidget(WIDGET_KEY, (_tui, theme) => ({
				invalidate() {},
				render(width) {
					const active = rows.filter((row) => row.state === "queued" || row.state === "running");
					const replies = rows.filter((row) => unread.has(row.id)).reverse();
					const attention = [...replies, ...active];
					const shown = attention.slice(0, MAX_WIDGET_ROWS);
					const counts = [
						...(active.length ? [`${active.length} working`] : []),
						...(replies.length ? [`${replies.length} new`] : []),
						...(!attention.length ? [`${rows.length} conversation${rows.length === 1 ? "" : "s"}`] : []),
					];
					const lines = [theme.fg(attention.length ? "accent" : "muted",
						`Channels · ${counts.join(" · ")} · /channels`)];
					for (const row of shown) {
						const isNew = unread.has(row.id);
						const color = row.state === "error" ? "error" : isNew ? "success" : "accent";
						const label = row.state === "error" ? "! error" : isNew ? "● new reply"
							: row.state === "queued" ? "◌ queued" : "◌ working";
						const name = fit(oneLine(row.peerName), Math.max(8, Math.min(32, Math.floor(width / 3))));
						const summary = isNew ? row.result || row.activity || "Worker failed" : row.activity || row.task;
						lines.push(`${theme.fg(color, `│ ${label}`)} · ${theme.bold(name)}  ${theme.fg("muted", preview(summary))}`);
					}
					if (attention.length > shown.length) lines.push(theme.fg("muted", `  +${attention.length - shown.length} more · /channels`));
					return lines.map((line) => fit(line, width));
				},
			}), { placement: "aboveEditor" });
		},
	};
}
