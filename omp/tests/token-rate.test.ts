import { describe, expect, test } from "bun:test";
import { TokenRateBuckets } from "../extensions/token-rate";

describe("TokenRateBuckets", () => {
	test("aggregates streamed bytes into 100 ms buckets", () => {
		const rate = new TokenRateBuckets(42);
		rate.ingest("12345678", 1_010);
		const sample = rate.ingest("abcd", 1_090);

		expect(sample).toEqual({
			version: 1,
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
});
