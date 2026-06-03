import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import http from "node:http";
import https from "node:https";
import { URL } from "node:url";

function toBool(v: string | undefined): boolean {
	if (!v) return false;
	const value = v.trim().toLowerCase();
	return value === "1" || value === "true" || value === "yes" || value === "on";
}

function normalizeEndpoint(value: string | undefined): string {
	if (!value || !value.trim()) {
		return "http://127.0.0.1:8769";
	}
	return value.replace(/\/$/, "");
}

async function postJson(
	url: string,
	token: string | undefined,
	body: Record<string, unknown>,
): Promise<void> {
	const target = new URL(url);
	const data = JSON.stringify(body);
	await new Promise<void>((resolve, reject) => {
		const req = (target.protocol === "https:" ? https : http).request(
			{
				method: "POST",
				hostname: target.hostname,
				port: target.port,
				path: `${target.pathname}${target.search}`,
				headers: {
					"content-type": "application/json",
					"content-length": Buffer.byteLength(data),
					...(token ? { authorization: `Bearer ${token}` } : {}),
				},
			},
			(res) => {
				res.resume();
				if (!res.statusCode || (res.statusCode < 200 || res.statusCode >= 300)) {
					reject(new Error(`dispatch server responded ${res.statusCode}`));
					return;
				}
				resolve();
			},
		);
		req.on("error", reject);
		req.write(data);
		req.end();
	});
}

function slugify(value: string): string {
	if (!value) return "pi-session";
	return value
		.replace(/[^a-zA-Z0-9_.-]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 80);
}

export default function dispatchSessionRegistrationExtension(pi: ExtensionAPI): void {
	const enabled = (() => {
		if (process.env.DISPATCH_SESSION_REGISTRATION_ENABLED !== undefined) {
			return toBool(process.env.DISPATCH_SESSION_REGISTRATION_ENABLED);
		}
		// Default: enabled if the subagent tracker is also enabled
		return toBool(process.env.SUBAGENT_TRACKER_ENABLED || "0");
	})();

	if (!enabled) return;

	const endpoint = normalizeEndpoint(
		process.env.SUBAGENT_DISPATCH_ENDPOINT ||
			process.env.SUBAGENT_TRACKER_ENDPOINT,
	);
	const token =
		process.env.SUBAGENT_DISPATCH_TOKEN || process.env.SUBAGENT_TRACKER_TOKEN;
	const trackerUrl = `${endpoint}/api/tasks`;

	let sessionFile: string | undefined;
	let taskId: string | undefined;
	let registered = false;

	const post = (runner: () => Promise<void>) => {
		void runner().catch((_err) => {
			// Silent failure — don't block pi startup or session flow
		});
	};

	pi.on("session_start", async (_event, ctx) => {
		if (registered) return;
		try {
			sessionFile = ctx.sessionManager.getSessionFile() ?? undefined;
		} catch {
			sessionFile = undefined;
		}

		// Build a descriptive session name
		const cwd = process.cwd();
		const dirName = cwd.split("/").pop() || "pi";

		// Try to get the user-assigned session name (e.g. from /name command)
		let sessionName: string | undefined;
		try {
			sessionName = ctx.sessionManager.getSessionName() ?? undefined;
		} catch {
			sessionName = undefined;
		}

		// Infer agent role from session context: check if this is a forked
		// subagent session (child sessions typically have the parent session
		// file path in the session data).
		let agentRole: string | undefined;
		try {
			const header = ctx.sessionManager.getHeader();
			if (header?.sessionInfo && typeof header.sessionInfo === "object") {
				const info = header.sessionInfo as Record<string, unknown>;
				agentRole = typeof info.contextLabel === "string" ? info.contextLabel : undefined;
			}
		} catch {
			// Fall back to detecting forked sessions via session label
			try {
				const label = ctx.sessionManager.getLabel();
				if (label && label !== "main") {
					agentRole = label;
				}
			} catch {
				// ignore
			}
		}

		// Build a rich title that shows project, session name, and agent role
		let title: string;
		if (sessionName && agentRole) {
			title = `${dirName} · ${sessionName} [${agentRole}]`;
		} else if (sessionName) {
			title = `${dirName} · ${sessionName}`;
		} else if (agentRole) {
			title = `${dirName} [${agentRole}]`;
		} else {
			title = `${dirName}`;
		}

		taskId = slugify(`pi-session-${dirName}-${Date.now()}`);

		post(async () => {
			// Create the task
			await postJson(trackerUrl, token, {
				id: taskId,
				name: taskId,
				title,
				model: "pi-session",
				objective: `Pi conversation in ${cwd}`,
				assignment: `Ongoing pi coding session.\nWorking directory: ${cwd}\nSession file: ${sessionFile || "ephemeral"}`,
				approval_required: false,
				metadata: {
					kind: "pi-session",
					session_file: sessionFile,
					cwd,
					dir_name: dirName,
					session_name: sessionName || null,
					agent_role: agentRole || null,
					started_at: new Date().toISOString(),
					source: "dispatch-session-registration extension",
				},
			});

			if (!taskId) return;

			// Dispatch immediately
			await postJson(`${trackerUrl}/${encodeURIComponent(taskId)}/dispatch`, token, {
				worker: `pi-${process.pid}`,
				worker_pid: process.pid,
				metadata: { stage: "session_start" },
			});

			// Set progress to indicate live session
			await postJson(
				`${trackerUrl}/${encodeURIComponent(taskId)}/progress`,
				token,
				{
					state: "running",
					progress: 10,
					current_step: "Pi session active",
					blocked_by: "-",
					worker: `pi-${process.pid}`,
					status: "SESSION_ACTIVE",
					metadata: {
						stage: "session_live",
						session_file: sessionFile,
					},
				},
			);

			registered = true;
		});
	});

	pi.on("session_shutdown", async (_event, _ctx) => {
		if (!registered || !taskId) return;

		post(async () => {
			await postJson(
				`${trackerUrl}/${encodeURIComponent(taskId)}/progress`,
				token,
				{
					state: "done",
					progress: 100,
					current_step: "Pi session ended",
					blocked_by: "-",
					worker: `pi-${process.pid}`,
					status: "SESSION_ENDED",
					metadata: {
						stage: "session_shutdown",
						ended_at: new Date().toISOString(),
					},
				},
			);
		});

		registered = false;
	});
}
