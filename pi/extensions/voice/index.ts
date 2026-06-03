import type { ExtensionAPI, ExtensionContext } from "@earendil-works/pi-coding-agent";
import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { once } from "node:events";
import { existsSync } from "node:fs";
import { createInterface } from "node:readline";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_HELPER_PYTHON = join(process.env.HOME ?? "", ".hermes/hermes-agent/venv/bin/python");
const DEFAULT_RECORD_KEY = "alt+r"; // Ctrl+B conflicts with pi's editor cursor-left binding.
const DEFAULT_TTS_REWRITE_MODEL = "openai-codex/gpt-5.4-mini";
const DEFAULT_TTS_REWRITE_TIMEOUT_MS = 45_000;
const DEFAULT_TTS_REWRITE_MAX_CHARS = 12_000;

const TTS_REWRITE_SYSTEM_PROMPT = `You rewrite assistant responses for text-to-speech.
The input may be a coding-agent answer with file paths, timestamps, logs, numbers, bullets, or dense status dumps.
Turn it into natural spoken language that is pleasant and easy to follow.
Keep the meaning, important conclusions, and user-facing next steps.
Do not invent new facts.
Do not read long file lists, hashes, raw logs, code blocks, JSON, tables, or stack traces verbatim; summarize them.
Say file paths only when they are important, and shorten them to the meaningful tail.
Convert dates, durations, and numbers into speech-friendly phrasing.
Remove markdown formatting that would sound awkward.
Return only the text to speak.`;

type Pending = {
	resolve: (value: any) => void;
	reject: (error: Error) => void;
};

class VoiceBridge {
	private proc: ChildProcessWithoutNullStreams | undefined;
	private nextId = 1;
	private pending = new Map<number, Pending>();
	private stderrTail: string[] = [];

	constructor(private helperPath: string) {}

	request<T = any>(cmd: string, payload: Record<string, unknown> = {}): Promise<T> {
		const proc = this.ensureProcess();
		const id = this.nextId++;
		const message = JSON.stringify({ id, cmd, ...payload }) + "\n";
		return new Promise<T>((resolve, reject) => {
			this.pending.set(id, { resolve, reject });
			proc.stdin.write(message, (error) => {
				if (!error) return;
				this.pending.delete(id);
				reject(error);
			});
		});
	}

	shutdown(): void {
		const proc = this.proc;
		if (!proc) return;
		void this.request("shutdown").catch(() => undefined).finally(() => {
			proc.kill();
		});
		this.proc = undefined;
	}

	private ensureProcess(): ChildProcessWithoutNullStreams {
		if (this.proc && !this.proc.killed) return this.proc;

		const python = process.env.PI_VOICE_PYTHON || (existsSync(DEFAULT_HELPER_PYTHON) ? DEFAULT_HELPER_PYTHON : "python3");
		this.stderrTail = [];
		const proc = spawn(python, [this.helperPath], {
			cwd: dirname(this.helperPath),
			env: { ...process.env, PYTHONUNBUFFERED: "1" },
			stdio: ["pipe", "pipe", "pipe"],
		});
		this.proc = proc;

		createInterface({ input: proc.stdout }).on("line", (line) => {
			let msg: any;
			try {
				msg = JSON.parse(line);
			} catch {
				return;
			}
			const id = Number(msg.id);
			const pending = this.pending.get(id);
			if (!pending) return;
			this.pending.delete(id);
			if (msg.ok) pending.resolve(msg);
			else pending.reject(new Error(msg.error || "voice helper failed"));
		});

		proc.stderr.on("data", (chunk) => {
			const text = String(chunk).trim();
			if (!text) return;
			this.stderrTail.push(text);
			this.stderrTail = this.stderrTail.slice(-20);
		});

		proc.on("error", (cause) => {
			this.proc = undefined;
			const error = new Error(`voice helper failed to start (${python}): ${cause.message}`);
			for (const pending of this.pending.values()) pending.reject(error);
			this.pending.clear();
		});

		proc.on("exit", (code, signal) => {
			this.proc = undefined;
			const detail = this.stderrTail.length ? `\n${this.stderrTail.join("\n")}` : "";
			const error = new Error(`voice helper exited (${code ?? signal})${detail}`);
			for (const pending of this.pending.values()) pending.reject(error);
			this.pending.clear();
		});

		return proc;
	}
}

function extensionDir(): string {
	try {
		return dirname(fileURLToPath(import.meta.url));
	} catch {
		return __dirname;
	}
}

function contentToSpeechText(message: any): string {
	const content = message?.content;
	if (typeof content === "string") return content;
	if (!Array.isArray(content)) return "";
	return content
		.filter((part) => part && part.type === "text" && typeof part.text === "string")
		.map((part) => part.text)
		.join("\n")
		.trim();
}

function status(ctx: ExtensionContext, text: string): void {
	if (!ctx.hasUI) return;
	ctx.ui.setStatus("voice", text);
}

function envFlag(name: string, defaultValue: boolean): boolean {
	const value = process.env[name]?.trim().toLowerCase();
	if (!value) return defaultValue;
	return !["0", "false", "off", "no"].includes(value);
}

function numericEnv(name: string, defaultValue: number): number {
	const value = Number(process.env[name]);
	return Number.isFinite(value) && value > 0 ? value : defaultValue;
}

function speechRewriteModel(): string {
	return process.env.PI_VOICE_TTS_REWRITE_MODEL?.trim() || DEFAULT_TTS_REWRITE_MODEL;
}

async function collectChildOutput(proc: ChildProcessWithoutNullStreams, timeoutMs: number): Promise<{ stdout: string; stderr: string; code: number | null; signal: NodeJS.Signals | null }> {
	let stdout = "";
	let stderr = "";
	proc.stdout.on("data", (chunk) => { stdout += String(chunk); });
	proc.stderr.on("data", (chunk) => { stderr += String(chunk); });
	const timer = setTimeout(() => proc.kill("SIGTERM"), timeoutMs);
	try {
		const [code, signal] = await once(proc, "exit") as [number | null, NodeJS.Signals | null];
		return { stdout, stderr, code, signal };
	} finally {
		clearTimeout(timer);
	}
}

async function rewriteForSpeech(ctx: ExtensionContext, text: string, enabled = true): Promise<string> {
	if (!enabled) return text;
	const trimmed = text.trim();
	if (!trimmed) return text;

	const maxChars = numericEnv("PI_VOICE_TTS_REWRITE_MAX_CHARS", DEFAULT_TTS_REWRITE_MAX_CHARS);
	const timeoutMs = numericEnv("PI_VOICE_TTS_REWRITE_TIMEOUT_MS", DEFAULT_TTS_REWRITE_TIMEOUT_MS);
	const prompt = [
		"Rewrite this assistant response for pleasant spoken playback.",
		"Return only the speech-ready version.",
		"",
		"<assistant_response>",
		trimmed.length > maxChars ? `${trimmed.slice(0, maxChars)}\n\n[Response truncated before rewrite for length.]` : trimmed,
		"</assistant_response>",
	].join("\n");
	const args = [
		"--print",
		"--no-session",
		"--no-tools",
		"--no-extensions",
		"--no-skills",
		"--no-prompt-templates",
		"--no-context-files",
		"--thinking",
		"off",
		"--system-prompt",
		TTS_REWRITE_SYSTEM_PROMPT,
	];
	args.push("--model", speechRewriteModel());
	args.push(prompt);

	const proc = spawn(process.env.PI_VOICE_TTS_REWRITE_PI || "pi", args, {
		cwd: process.cwd(),
		env: { ...process.env, PI_VOICE_TTS_REWRITE: "0" },
		stdio: ["pipe", "pipe", "pipe"],
	});
	proc.stdin.end();
	const result = await collectChildOutput(proc, timeoutMs);
	const rewritten = result.stdout.trim();
	if (result.code !== 0 || !rewritten) {
		const detail = result.stderr.trim() || `exit ${result.code ?? result.signal ?? "unknown"}`;
		throw new Error(detail.split("\n").slice(-4).join("\n"));
	}
	return rewritten;
}

export default function (pi: ExtensionAPI) {
	const helper = new VoiceBridge(join(extensionDir(), "helper.py"));
	const recordKey = process.env.PI_VOICE_RECORD_KEY || DEFAULT_RECORD_KEY;
	let mode = false;
	let recording = false;
	let tts = false;
	let ttsRewrite = envFlag("PI_VOICE_TTS_REWRITE", true);
	let speaking = false;

	async function toggleRecording(ctx: ExtensionContext): Promise<void> {
		if (!mode) {
			ctx.ui.notify(`voice: off; run /voice on (${recordKey} records)`, "warning");
			return;
		}

		if (!recording) {
			await helper.request("start");
			recording = true;
			status(ctx, ctx.ui.theme.fg("accent", "● rec"));
			ctx.ui.notify("voice: recording; press record key again to stop", "info");
			return;
		}

		status(ctx, ctx.ui.theme.fg("dim", "transcribing…"));
		const result = await helper.request<{ transcript?: string }>("stop");
		recording = false;
		const transcript = (result.transcript || "").trim();
		status(ctx, tts ? ctx.ui.theme.fg("accent", "voice+tts") : ctx.ui.theme.fg("dim", "voice"));

		if (!transcript) {
			ctx.ui.notify("voice: no speech detected", "warning");
			return;
		}

		ctx.ui.notify(`voice transcript: ${transcript}`, "info");
		if (ctx.isIdle()) pi.sendUserMessage(transcript);
		else pi.sendUserMessage(transcript, { deliverAs: "followUp" });
	}

	pi.on("session_start", async (_event, ctx) => {
		status(ctx, ctx.ui.theme.fg("dim", "voice off"));
	});

	pi.registerShortcut(recordKey, {
		description: "Toggle voice push-to-talk recording",
		handler: async (ctx) => {
			try {
				await toggleRecording(ctx);
			} catch (error: any) {
				recording = false;
				status(ctx, ctx.ui.theme.fg("error", "voice error"));
				ctx.ui.notify(`voice: ${error?.message || error}`, "error");
			}
		},
	});

	pi.registerCommand("voice", {
		description: `Voice input/output: /voice [on|off|tts|tts-rewrite|status|speak <text>] (${recordKey} records)`,
		handler: async (args, ctx) => {
			const raw = args.trim();
			const [sub = mode ? "off" : "on", ...rest] = raw.split(/\s+/);
			try {
				if (sub === "on") {
					const check = await helper.request<any>("check");
					if (!check.requirements?.available) {
						ctx.ui.notify(`voice unavailable:\n${check.requirements?.details || "unknown"}`, "error");
						return;
					}
					mode = true;
					status(ctx, tts ? ctx.ui.theme.fg("accent", "voice+tts") : ctx.ui.theme.fg("dim", "voice"));
					ctx.ui.notify(`voice on; ${recordKey} starts/stops recording`, "info");
					return;
				}

				if (sub === "off") {
					if (recording) await helper.request("stop").catch(() => undefined);
					await helper.request("stop_playback").catch(() => undefined);
					mode = false;
					recording = false;
					tts = false;
					status(ctx, ctx.ui.theme.fg("dim", "voice off"));
					ctx.ui.notify("voice off", "info");
					return;
				}

				if (sub === "tts") {
					tts = !tts;
					mode = true;
					status(ctx, tts ? ctx.ui.theme.fg("accent", "voice+tts") : ctx.ui.theme.fg("dim", "voice"));
					ctx.ui.notify(`voice TTS ${tts ? "on" : "off"}`, "info");
					return;
				}

				if (sub === "tts-rewrite") {
					ttsRewrite = !ttsRewrite;
					ctx.ui.notify(`voice TTS rewrite ${ttsRewrite ? "on" : "off"}`, "info");
					return;
				}

				if (sub === "status") {
					const check = await helper.request<any>("check");
					const micLine = check.pulse_source
						? `mic: ${check.pulse_source}`
						: "";
					ctx.ui.notify(
						[`mode: ${mode ? "ON" : "OFF"}`, `tts: ${tts ? "ON" : "OFF"}`, `tts rewrite: ${ttsRewrite ? "ON" : "OFF"}`, `recording: ${recording ? "YES" : "no"}`, `record key: ${recordKey}`, micLine, "", check.requirements?.details || ""].filter(Boolean).join("\n"),
						"info",
					);
					return;
				}

				if (sub === "speak") {
					const text = rest.join(" ");
					if (!text) {
						ctx.ui.notify("Usage: /voice speak <text>", "warning");
						return;
					}
					await helper.request("speak", { text });
					return;
				}

				ctx.ui.notify("Usage: /voice [on|off|tts|tts-rewrite|status|speak <text>]", "warning");
			} catch (error: any) {
				ctx.ui.notify(`voice: ${error?.message || error}`, "error");
			}
		},
	});

	pi.on("message_end", async (event, ctx) => {
		if (!tts || event.message?.role !== "assistant" || speaking) return;
		const text = contentToSpeechText(event.message);
		if (!text) return;
		speaking = true;
		status(ctx, ctx.ui.theme.fg("accent", "rewriting for speech…"));
		void rewriteForSpeech(ctx, text, ttsRewrite).catch((error) => {
			if (ctx.hasUI) ctx.ui.notify(`TTS rewrite failed; speaking original: ${error.message}`, "warning");
			return text;
		}).then((speechText) => {
			if (ctx.hasUI) status(ctx, ctx.ui.theme.fg("accent", "speaking…"));
			return helper.request("speak", { text: speechText });
		}).catch((error) => {
			if (ctx.hasUI) ctx.ui.notify(`TTS failed: ${error.message}`, "error");
		}).finally(() => {
			speaking = false;
			if (ctx.hasUI) status(ctx, ctx.ui.theme.fg("accent", "voice+tts"));
		});
	});

	pi.on("session_shutdown", async () => {
		helper.shutdown();
	});
}
