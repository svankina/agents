import { createHash } from "node:crypto";
import * as fs from "node:fs/promises";
import { join } from "node:path";
import type { PeerMessage } from "./peers-transport";
import type { PeerWorker } from "./peer-worker";
import type { PeerChannelRow } from "./peer-channel-ui";

interface Request { id: string; message: PeerMessage }
interface Channel extends PeerChannelRow {
	version: 1;
	pending: Request[];
	active?: Request;
}
interface Options {
	directory: string;
	permitDirectory: string;
	worker: (directory: string, message: PeerMessage, signal: AbortSignal, activity: (text: string) => void) => Promise<PeerWorker>;
	reply: (request: PeerMessage, answer: string) => Promise<void>;
	report: (rows: PeerChannelRow[]) => void;
}

const MAX_ACTIVE = 4;
const MAX_PENDING = 64;
const errorText = (error: unknown) => error instanceof Error ? error.message : String(error);

/** Kernel-owned locks cap workers across OMP processes and release on process death. */
async function acquirePermit(directory: string, signal: AbortSignal): Promise<() => Promise<void>> {
	await fs.mkdir(directory, { recursive: true, mode: 0o700 });
	while (!signal.aborted) {
		for (let slot = 0; slot < MAX_ACTIVE; slot++) {
			signal.throwIfAborted();
			const child = Bun.spawn(["flock", "-n", join(directory, `${slot}.lock`), "sh", "-c", "printf 'L'; cat >/dev/null"], {
				stdin: "pipe", stdout: "pipe", stderr: "pipe",
			});
			const abort = () => { child.stdin.end(); child.kill(); };
			signal.addEventListener("abort", abort, { once: true });
			if (signal.aborted) abort();
			const reader = child.stdout.getReader();
			const first = await reader.read();
			reader.releaseLock();
			if (!first.done && first.value[0] === 76 && !signal.aborted) {
				return async () => {
					signal.removeEventListener("abort", abort);
					child.stdin.end();
					await child.exited;
				};
			}
			child.stdin.end();
			const status = await child.exited;
			signal.removeEventListener("abort", abort);
			signal.throwIfAborted();
			if (status !== 1) throw new Error(`Cannot acquire channel worker permit: ${await new Response(child.stderr).text()}`);
		}
		await new Promise<void>((resolve, reject) => {
			const abort = () => { clearTimeout(timer); reject(signal.reason); };
			const timer = setTimeout(() => { signal.removeEventListener("abort", abort); resolve(); }, 1000);
			signal.addEventListener("abort", abort, { once: true });
			if (signal.aborted) abort();
		});
	}
	throw signal.reason;
}

/** Durable FIFO per sender; idle channels retain files, not live model sessions. */
export class PeerChannels {
	#options: Options;
	#channels = new Map<string, Channel>();
	#writes = new Map<string, Promise<void>>();
	#running = new Map<string, Promise<void>>();
	#abort = new AbortController();
	#started = false;
	#accepting = 0;

	constructor(options: Options) { this.#options = options; }

	async start(): Promise<void> {
		await fs.mkdir(this.#options.directory, { recursive: true, mode: 0o700 });
		for (const entry of await fs.readdir(this.#options.directory, { withFileTypes: true })) {
			if (!entry.isDirectory() || !/^[a-f0-9]{64}$/.test(entry.name)) continue;
			const file = join(this.#options.directory, entry.name, "channel.json");
			let channel: Channel;
			try { channel = JSON.parse(await fs.readFile(file, "utf8")); }
			catch (error) {
				if ((error as NodeJS.ErrnoException).code === "ENOENT") continue;
				throw new Error(`Cannot load channel ${entry.name}: ${errorText(error)}`);
			}
			if (channel.version !== 1 || channel.id !== entry.name || !Array.isArray(channel.pending)) throw new Error(`Invalid channel state: ${file}`);
			this.#channels.set(channel.id, channel);
			if (channel.active) {
				channel.state = "error";
				channel.result = "Worker interrupted before completion. Work may have partially executed; it was not retried. Send a new message to continue.";
				channel.active = undefined;
				await this.#save(channel);
			}
			if (channel.pending.length) channel.state = "queued";
		}
		this.#started = true;
		this.#report();
		this.#pump();
	}

	async accept(message: PeerMessage, peerName: string): Promise<void> {
		if (!this.#started || this.#abort.signal.aborted) throw new Error("Peer channel workers are unavailable");
		let pending = 0;
		for (const channel of this.#channels.values()) pending += channel.pending.length + (channel.active ? 1 : 0);
		if (pending >= MAX_PENDING) throw new Error("Peer channel queue is full (64 messages); message was not accepted");
		const localId = message.from.slice(message.from.indexOf("/"));
		const id = createHash("sha256").update(JSON.stringify([message.senderSessionId ?? message.from, localId])).digest("hex");
		let channel = this.#channels.get(id);
		if (!channel) {
			channel = { version: 1, id, peerName, state: "queued", task: message.body, queued: 0, pending: [] };
			this.#channels.set(id, channel);
		}
		const request = { id: crypto.randomUUID(), message };
		channel.peerName = peerName;
		channel.pending.push(request);
		channel.queued = channel.pending.length;
		if (!channel.active) { channel.state = "queued"; channel.task = channel.pending[0].message.body; }
		this.#accepting++;
		try { await this.#save(channel); }
		catch (error) { channel.pending = channel.pending.filter(item => item.id !== request.id); channel.queued = channel.pending.length; throw error; }
		finally { this.#accepting--; }
		this.#report();
		this.#pump();
	}

	async close(): Promise<void> {
		this.#abort.abort(new Error("Receiving session closed"));
		await Promise.allSettled(this.#running.values());
		await Promise.allSettled(this.#writes.values());
	}

	refresh(): void { this.#report(); }

	#report() {
		try {
			this.#options.report([...this.#channels.values()].map(({ pending: _pending, active: _active, version: _version, ...row }) => ({ ...row })));
		} catch { /* UI failure must not interrupt accepted work. */ }
	}

	#save(channel: Channel): Promise<void> {
		const snapshot = JSON.stringify(channel);
		const directory = join(this.#options.directory, channel.id);
		const previous = this.#writes.get(channel.id) ?? Promise.resolve();
		const write = previous.catch(() => {}).then(async () => {
			await fs.mkdir(directory, { recursive: true, mode: 0o700 });
			const temporary = join(directory, `${crypto.randomUUID()}.tmp`);
			await fs.writeFile(temporary, snapshot, { mode: 0o600 });
			await fs.rename(temporary, join(directory, "channel.json"));
		});
		this.#writes.set(channel.id, write);
		return write;
	}

	#pump() {
		if (this.#abort.signal.aborted || this.#accepting) return;
		for (const channel of this.#channels.values()) {
			if (this.#running.size >= MAX_ACTIVE) break;
			if (!channel.pending.length || channel.state === "error" || this.#running.has(channel.id)) continue;
			// Put this sender behind the others before scheduling its next message.
			this.#channels.delete(channel.id);
			this.#channels.set(channel.id, channel);
			const running = this.#run(channel).finally(() => { this.#running.delete(channel.id); this.#pump(); });
			this.#running.set(channel.id, running);
		}
	}

	async #run(channel: Channel): Promise<void> {
		let release: (() => Promise<void>) | undefined;
		let worker: PeerWorker | undefined;
		try {
			channel.state = "queued";
			channel.activity = "Waiting for a worker slot";
			this.#report();
			release = await acquirePermit(this.#options.permitDirectory, this.#abort.signal);
			this.#abort.signal.throwIfAborted();
			const request = channel.pending.shift()!;
			channel.active = request;
			channel.queued = channel.pending.length;
			channel.state = "running";
			channel.task = request.message.body;
			channel.result = undefined;
			channel.activity = "Loading receiver context";
			await this.#save(channel);
			this.#report();
			worker = await this.#options.worker(join(this.#options.directory, channel.id), request.message, this.#abort.signal, activity => {
				channel.activity = activity;
				this.#report();
			});
			channel.sessionFile = worker.sessionFile;
			this.#report();
			const answer = await worker.run(request.message);
			channel.result = answer || "Handled; no reply needed.";
			channel.activity = undefined;
			channel.state = "idle";
			channel.active = undefined;
			await this.#save(channel);
			if (answer) await this.#options.reply(request.message, answer);
		} catch (error) {
			channel.state = "error";
			channel.activity = undefined;
			channel.result = `${channel.result ? `${channel.result}\n\n` : ""}${errorText(error)}. No automatic retry.`;
			channel.active = undefined;
			await this.#save(channel).catch(saveError => { channel.result += ` State persistence failed: ${errorText(saveError)}`; });
		} finally {
			await worker?.close().catch(error => { channel.state = "error"; channel.result = `Worker cleanup failed: ${errorText(error)}`; });
			await release?.().catch(error => { channel.state = "error"; channel.result = `Worker permit cleanup failed: ${errorText(error)}`; });
			this.#report();
		}
	}
}
