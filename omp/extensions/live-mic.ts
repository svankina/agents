import { type ChildProcess, execFile, spawn } from "node:child_process";
import { promisify } from "node:util";
import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";

export const description =
	"Shows which microphone this OMP process is recording from (live mode, dictation) in the status line.";

const STATUS_KEY = "live-mic";
/** Coalesces the burst of PulseAudio events one stream start/stop emits. */
const REFRESH_DEBOUNCE_MS = 150;

const run = promisify(execFile);

interface PulseSourceOutput {
	source: number;
	properties?: Record<string, string>;
}

interface PulseSource {
	index: number;
	name: string;
	description?: string;
}

async function pactlJson<T>(...args: string[]): Promise<T> {
	const { stdout } = await run("pactl", ["-f", "json", ...args]);
	return JSON.parse(stdout) as T;
}

/** Descriptions of the sources this process is currently capturing from. */
async function capturedSources(pid: number): Promise<string[]> {
	const [outputs, sources] = await Promise.all([
		pactlJson<PulseSourceOutput[]>("list", "source-outputs"),
		pactlJson<PulseSource[]>("list", "sources"),
	]);
	const byIndex = new Map(sources.map(source => [source.index, source]));
	const names = new Set<string>();
	for (const output of outputs) {
		if (output.properties?.["application.process.id"] !== String(pid)) continue;
		const source = byIndex.get(output.source);
		names.add(source?.description || source?.name || `source #${output.source}`);
	}
	return [...names];
}

export default function liveMicExtension(pi: ExtensionAPI): void {
	pi.setLabel("Live Mic");
	let monitor: ChildProcess | undefined;
	let debounce: NodeJS.Timeout | undefined;
	let generation = 0;

	function stop(): void {
		generation++;
		clearTimeout(debounce);
		debounce = undefined;
		monitor?.kill();
		monitor = undefined;
	}

	async function refresh(ctx: ExtensionContext, token: number): Promise<void> {
		let names: string[];
		try {
			names = await capturedSources(process.pid);
		} catch {
			return; // pactl missing or the sound server restarting; keep the last state.
		}
		if (token !== generation) return;
		ctx.ui.setStatus(STATUS_KEY, names.length ? `mic: ${names.join(", ")}` : undefined);
	}

	function start(ctx: ExtensionContext): void {
		stop();
		if (!ctx.hasUI) return;
		const token = generation;
		const schedule = () => {
			clearTimeout(debounce);
			debounce = setTimeout(() => void refresh(ctx, token), REFRESH_DEBOUNCE_MS);
		};
		// Event-driven: the stream appears/moves/disappears only on these events,
		// so nothing polls while the mic is idle.
		const child = spawn("pactl", ["subscribe"], { stdio: ["ignore", "pipe", "ignore"] });
		child.on("error", () => {}); // No pactl: the indicator stays off.
		let pending = "";
		child.stdout?.setEncoding("utf8");
		child.stdout?.on("data", (chunk: string) => {
			pending += chunk;
			const lines = pending.split("\n");
			pending = lines.pop() ?? "";
			if (lines.some(line => /on (source-output|source|server) #/.test(line))) schedule();
		});
		child.unref();
		monitor = child;
		void refresh(ctx, token);
	}

	pi.on("session_start", (_event, ctx) => start(ctx));
	pi.on("session_switch", (_event, ctx) => start(ctx));
	pi.on("session_shutdown", stop);
}
