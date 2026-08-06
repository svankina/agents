import { describe, expect, test } from "bun:test";
import { TokenRateBuckets } from "../extensions/token-rate";

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
