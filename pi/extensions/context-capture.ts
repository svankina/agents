import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { appendFile, mkdir } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";
import { setImmediate } from "node:timers";

function enabled(): boolean {
	const value = process.env.PI_CONTEXT_CAPTURE_ENABLED;
	if (value === undefined) return false;
	return !["0", "false", "no", "off"].includes(value.trim().toLowerCase());
}

function safeJson(value: unknown): unknown {
	return JSON.parse(
		JSON.stringify(value, (_key, v) => {
			if (typeof v === "bigint") return String(v);
			if (typeof v === "function") return `[Function ${v.name || "anonymous"}]`;
			return v;
		}),
	);
}

class CaptureWriter {
	private dirReady: Promise<void> | undefined;
	private chains = new Map<string, Promise<void>>();

	constructor(private readonly dir: string) {}

	private ensureDir(): Promise<void> {
		this.dirReady ??= mkdir(this.dir, { recursive: true }).then(() => undefined);
		return this.dirReady;
	}

	enqueue(sessionId: string, line: string): void {
		const file = join(this.dir, `${sessionId}.jsonl`);
		const previous = this.chains.get(sessionId) ?? Promise.resolve();
		const next = previous
			.then(() => this.ensureDir())
			.then(() => appendFile(file, line, "utf8"))
			.catch(() => {
				// Best-effort diagnostics only.
			});
		this.chains.set(sessionId, next);
	}
}

export default function contextCapture(pi: ExtensionAPI) {
	if (!enabled()) return;

	const dir = process.env.PI_CONTEXT_CAPTURES_DIR || join(homedir(), ".pi", "agent", "context-captures");
	const writer = new CaptureWriter(dir);

	pi.on("before_provider_request", (event, ctx) => {
		const payload = event.payload;
		const sessionId = (() => {
			try {
				return ctx.sessionManager?.getSessionId?.() || "unknown";
			} catch {
				return "unknown";
			}
		})();

		// Defer serialization and disk I/O to the next event-loop turn so the
		// provider request is never blocked on capture work.
		setImmediate(() => {
			const record = payload as { provider?: unknown; model?: unknown } | undefined;
			const entry = {
				type: "provider_request",
				timestamp: new Date().toISOString(),
				sessionId,
				provider: record?.provider,
				model: record?.model,
				payload: safeJson(payload),
			};
			writer.enqueue(sessionId, `${JSON.stringify(entry)}\n`);
		});
	});
}
