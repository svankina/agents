import { readFileSync } from "node:fs";
import { createConnection } from "node:net";
import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";

/** Loaded by the existing ~/src/agents/omp/extensions directory discovery.
 * Full snapshots make broker reconnects independent of missed transitions.
 * No terminal parsing, new core hooks, or running broker are required.
 */
export default function herdLifecycle(pi: ExtensionAPI): void {
	const pane = process.env.HERD_PANE;
	if (!pane) return;
	let start: string;
	try {
		start = readFileSync(`/proc/${process.pid}/stat`, "utf8").split(")").at(-1)!.trim().split(/\s+/)[19];
	} catch { return; }
	const socketPath = process.env.HERD_BROKER_SOCK ||
		`${process.env.XDG_RUNTIME_DIR || `/tmp/herd-${process.getuid!()}`}/herd/broker.sock`;
	let context: ExtensionContext | undefined;
	let session = "";
	let seq = 0;
	let intent = 0;
	let final = false;
	let cleanup = false;
	let work = 0;
	let quitCall = "";
	let timer: NodeJS.Timeout | undefined;

	function publish(): Promise<void> {
		const ctx = context;
		if (!ctx || !session) return Promise.resolve();
		const busy = !ctx.isIdle() || ctx.hasPendingMessages();
		const phase = !intent ? (busy ? "active" : "idle") : cleanup ? "cleanup" :
			busy ? "pending" : final ? "settled" : "closing";
		const payload = JSON.stringify({ op: "lifecycle", id: pane, pid: process.pid,
			start, session, seq: ++seq, intent, phase, work }) + "\n";
		const { promise, resolve } = Promise.withResolvers<void>();
		const socket = createConnection(socketPath);
		const finish = () => { socket.destroy(); resolve(); };
		socket.setTimeout(250, finish);
		socket.once("error", finish);
		socket.once("end", finish);
		socket.once("data", finish);
		socket.once("connect", () => socket.write(payload));
		socket.unref();
		return promise;
	}
	function bind(ctx: ExtensionContext): Promise<void> {
		context = ctx;
		const id = ctx.sessionManager.getSessionId();
		if (id !== session) {
			session = id;
			intent = 0;
			final = false;
			cleanup = false;
		}
		if (!timer) {
			timer = setInterval(() => { void publish(); }, 500);
			timer.unref();
		}
		return publish();
	}
	pi.on("session_start", (_event, ctx) => bind(ctx));
	pi.on("session_switch", (_event, ctx) => bind(ctx));
	pi.on("session_branch", (_event, ctx) => bind(ctx));
	pi.on("session_tree", (_event, ctx) => bind(ctx));
	pi.on("agent_start", (_event, ctx) => {
		// This can precede a delayed end hook from an automatic continuation.
		// Only explicit external input/session changes supersede accepted quit.
		final = false;
		cleanup = false;
		return bind(ctx);
	});
	pi.on("input", (event, ctx) => {
		if (event.source === "extension") return;
		intent = 0;
		work++;
		final = false;
		return bind(ctx);
	});
	pi.on("tool_result", (event, ctx) => {
		const details = event.details;
		const mounted = details && typeof details === "object" && "xdev" in details ? details.xdev : undefined;
		const quit = event.toolName === "quit_session" || (
			event.toolName === "write" && mounted && typeof mounted === "object" &&
			"tool" in mounted && mounted.tool === "quit_session" &&
			"mode" in mounted && mounted.mode === "execute");
		if (!quit || event.isError) return;
		context = ctx;
		intent = Date.now() / 1000;
		quitCall = event.toolCallId;
		final = false;
		return publish();
	});
	pi.on("agent_end", (event, ctx) => {
		// An old fire-and-forget end notification must not settle a newer quit.
		if (!intent || !event.messages.some(message =>
			message.role === "toolResult" && message.toolCallId === quitCall)) return;
		context = ctx;
		final = "willContinue" in event && event.willContinue === false;
		// The notification is fire-and-forget; the agent may still be inside
		// prompt() here. The heartbeat rechecks actual idle/queue state later.
		return publish();
	});
	pi.on("session_shutdown", async () => {
		cleanup = true;
		clearInterval(timer);
		timer = undefined;
		await publish();
	});
}
