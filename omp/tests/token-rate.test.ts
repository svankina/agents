import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import tokenRate, { createCalibrationLookup, TokenRateBuckets } from "../extensions/token-rate";

describe("TokenRateBuckets", () => {
	test("aggregates streamed bytes into 100 ms buckets", () => {
		const rate = new TokenRateBuckets(42);
		rate.ingest("12345678", 1_010);
		const sample = rate.ingest("abcd", 1_090);

		expect(sample).toEqual({
			version: 2,
			pid: 42,
			updatedAt: 1_090,
			buckets: [[1_000, 3]],
		});
	});

	test("retains only the live one-second window", () => {
		const rate = new TokenRateBuckets(42);
		rate.ingest("1234", 1_000);
		rate.ingest("5678", 1_500);

		expect(rate.snapshot(2_001).buckets).toEqual([[1_500, 1]]);
	});

	test("counts UTF-8 bytes rather than JavaScript code units", () => {
		const rate = new TokenRateBuckets(42);
		expect(rate.ingest("π", 1_000).buckets).toEqual([[1_000, 0.5]]);
	});

	test("stamps the model and provider the deltas came from", () => {
		const rate = new TokenRateBuckets(42);
		const sample = rate.ingest("1234", 1_000, { model: "claude-opus-5", provider: "anthropic" });

		expect(sample.model).toBe("claude-opus-5");
		expect(sample.provider).toBe("anthropic");
	});

	test("omits the keys entirely rather than naming a null model", () => {
		const rate = new TokenRateBuckets(42);
		const sample = rate.ingest("1234", 1_000);

		expect("model" in sample).toBe(false);
		expect("provider" in sample).toBe(false);
	});

	test("keeps the last named model when a later event names none", () => {
		const rate = new TokenRateBuckets(42);
		rate.ingest("1234", 1_000, { model: "qwen3.6-27b-uncensored", provider: "local-llama" });

		expect(rate.ingest("5678", 1_100).model).toBe("qwen3.6-27b-uncensored");
		expect(rate.snapshot(1_200).provider).toBe("local-llama");
	});
});

describe("createCalibrationLookup", () => {
	const state = (models: unknown): (() => string) => () => JSON.stringify({ version: 1, models });

	test("converts with the median ratio omp-tokrate learned for that model", () => {
		const lookup = createCalibrationLookup(state({
			"anthropic/claude-opus-5": { ratios: [2, 2.4, 3], samples: 3 },
		}));
		const rate = new TokenRateBuckets(42, lookup);

		// 12 bytes at the learned 2.4 bytes/token, not the seed 4.
		expect(rate.ingest("aaaaaaaaaaaa", 1_000, { model: "claude-opus-5", provider: "anthropic" })
			.buckets).toEqual([[1_000, 5]]);
	});

	test("falls back to a bare model id when the stream named no provider", () => {
		const lookup = createCalibrationLookup(state({ "claude-opus-5": { ratios: [2], samples: 1 } }));
		expect(new TokenRateBuckets(42, lookup).ingest("aaaa", 1_000, { model: "claude-opus-5" })
			.buckets).toEqual([[1_000, 2]]);
	});

	test("keeps the seed ratio for an unknown model", () => {
		const lookup = createCalibrationLookup(state({ "anthropic/other": { ratios: [2], samples: 1 } }));
		expect(new TokenRateBuckets(42, lookup).ingest("aaaa", 1_000, { model: "claude-opus-5" })
			.buckets).toEqual([[1_000, 1]]);
	});

	test("ignores implausible ratios rather than reporting an absurd rate", () => {
		const lookup = createCalibrationLookup(state({
			"anthropic/claude-opus-5": { ratios: [0, 0.001, 400], samples: 3 },
		}));
		expect(new TokenRateBuckets(42, lookup).ingest("aaaa", 1_000, { model: "claude-opus-5", provider: "anthropic" })
			.buckets).toEqual([[1_000, 1]]);
	});

	test("keeps the seed ratio when the plugin is absent or mid-write", () => {
		for (const read of [
			() => { throw Object.assign(new Error("ENOENT"), { code: "ENOENT" }); },
			() => "{\"version\":1,\"models\":{\"anthropic/claude-opus-5\":{\"rat",
			() => JSON.stringify({ version: 1, models: [] }),
		]) {
			const rate = new TokenRateBuckets(42, createCalibrationLookup(read));
			expect(rate.ingest("aaaa", 1_000, { model: "claude-opus-5", provider: "anthropic" })
				.buckets).toEqual([[1_000, 1]]);
		}
	});
});

describe("tokenRate extension", () => {
	let runtime: string;
	let directory: string;
	const savedRuntime = process.env.XDG_RUNTIME_DIR;
	const api = { logger: { warn: () => {} } };

	/** A fake ExtensionAPI: captures handlers so the test can fire them. */
	function load(): Record<string, (event: unknown) => void> {
		const handlers: Record<string, (event: unknown) => void> = {};
		tokenRate({ ...api, on: (name: string, handler: (event: unknown) => void) => (handlers[name] = handler) } as never);
		return handlers;
	}

	function stream(handlers: Record<string, (event: unknown) => void>, delta: string): void {
		handlers.message_update({ assistantMessageEvent: { type: "text_delta", delta, partial: { model: "m", provider: "p" } } });
		handlers.message_end({});
	}

	beforeEach(() => {
		runtime = fs.mkdtempSync(path.join(os.tmpdir(), "token-rate-"));
		directory = path.join(runtime, "herd-token-rate");
		process.env.XDG_RUNTIME_DIR = runtime;
	});
	afterEach(() => {
		process.env.XDG_RUNTIME_DIR = savedRuntime;
		fs.rmSync(runtime, { recursive: true, force: true });
	});

	test("two sessions in one process publish two files, so their rates add", () => {
		stream(load(), "12345678");
		stream(load(), "12345678");

		const files = fs.readdirSync(directory).filter(name => name.endsWith(".json"));
		expect(files).toHaveLength(2);
		for (const name of files) expect(name.startsWith(`${process.pid}-`)).toBe(true);
	});

	test("shutdown removes only this session's file", () => {
		const first = load();
		const second = load();
		stream(first, "1234");
		stream(second, "1234");
		first.session_shutdown({});

		expect(fs.readdirSync(directory).filter(name => name.endsWith(".json"))).toHaveLength(1);
	});

	test("loading sweeps files left by dead processes and keeps live ones", () => {
		fs.mkdirSync(directory, { recursive: true });
		// pid 2^22 is above pid_max on a default Linux box, so nobody owns it.
		fs.writeFileSync(path.join(directory, "4194304-deadbeef.json"), "{}");
		fs.writeFileSync(path.join(directory, "4194304.json.tmp"), "{}");
		fs.writeFileSync(path.join(directory, `${process.ppid}.json`), "{}");
		load();

		expect(fs.readdirSync(directory).sort()).toEqual([`${process.ppid}.json`]);
	});
});
