import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import type { AssistantMessageEvent } from "@oh-my-pi/pi-ai";
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";

const BUCKET_MS = 100;
const WINDOW_MS = 1_000;
const BYTES_PER_TOKEN = 4;

export interface TokenRateSample {
	version: 1;
	pid: number;
	updatedAt: number;
	buckets: Array<[number, number]>;
}

/** Rolling 100 ms output buckets; readers derive the live one-second rate. */
export class TokenRateBuckets {
	readonly #pid: number;
	#buckets: Array<[number, number]> = [];

	constructor(pid = process.pid) {
		this.#pid = pid;
	}

	ingest(delta: string, now = Date.now()): TokenRateSample {
		const bucketAt = Math.floor(now / BUCKET_MS) * BUCKET_MS;
		const tokens = Buffer.byteLength(delta, "utf8") / BYTES_PER_TOKEN;
		const last = this.#buckets.at(-1);
		if (last?.[0] === bucketAt) last[1] += tokens;
		else this.#buckets.push([bucketAt, tokens]);
		return this.snapshot(now);
	}

	snapshot(now = Date.now()): TokenRateSample {
		const cutoff = now - WINDOW_MS;
		while (this.#buckets[0]?.[0] < cutoff) this.#buckets.shift();
		return {
			version: 1,
			pid: this.#pid,
			updatedAt: now,
			buckets: this.#buckets.map(([at, tokens]) => [at, tokens]),
		};
	}
}

function runtimeDirectory(): string {
	const base = process.env.XDG_RUNTIME_DIR || os.tmpdir();
	return path.join(base, "triage-token-rate");
}

function streamDelta(event: AssistantMessageEvent): string | undefined {
	switch (event.type) {
		case "text_delta":
		case "thinking_delta":
		case "toolcall_delta":
			return event.delta;
		default:
			return undefined;
	}
}

export default function tokenRate(api: ExtensionAPI): void {
	const buckets = new TokenRateBuckets();
	const directory = runtimeDirectory();
	const target = path.join(directory, `${process.pid}.json`);
	const temporary = `${target}.tmp`;
	let lastWrittenAt = 0;
	let dirty = false;

	const remove = (): void => {
		for (const file of [temporary, target]) {
			try {
				fs.unlinkSync(file);
			} catch (error) {
				if ((error as NodeJS.ErrnoException).code !== "ENOENT") api.logger.warn(`token-rate: ${String(error)}`);
			}
		}
	};

	const publish = (now: number, force = false): void => {
		if (!dirty || (!force && now - lastWrittenAt < BUCKET_MS)) return;
		try {
			fs.mkdirSync(directory, { recursive: true, mode: 0o700 });
			fs.writeFileSync(temporary, JSON.stringify(buckets.snapshot(now)), { mode: 0o600 });
			fs.renameSync(temporary, target);
			lastWrittenAt = now;
			dirty = false;
		} catch (error) {
			api.logger.warn(`token-rate: ${String(error)}`);
		}
	};

	api.on("message_update", (event) => {
		const delta = streamDelta(event.assistantMessageEvent);
		if (!delta) return;
		const now = Date.now();
		buckets.ingest(delta, now);
		dirty = true;
		publish(now);
	});
	api.on("message_end", () => publish(Date.now(), true));
	api.on("session_shutdown", () => remove());
}
