import { expect, test } from "bun:test";
import { chmodSync, lstatSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { questionBridge } from "../omp/lib/herd-questions";

async function isolated(
	run: (runtime: string, owner: symbol) => Promise<void>,
) {
	const runtime = mkdtempSync(join(tmpdir(), "herd-question-test-"));
	const previous = process.env.XDG_RUNTIME_DIR;
	const owner = Symbol("test");
	process.env.XDG_RUNTIME_DIR = runtime;
	try {
		await run(runtime, owner);
	} finally {
		questionBridge.disconnect(owner);
		if (previous === undefined) delete process.env.XDG_RUNTIME_DIR;
		else process.env.XDG_RUNTIME_DIR = previous;
		rmSync(runtime, { recursive: true });
	}
}

test("traversable runtime parents retain a private socket and exact-once answers", async () => {
	await isolated(async (runtime, owner) => {
		chmodSync(runtime, 0o710);
		questionBridge.connect(owner);
		const directory = join(runtime, "omp-questions");
		const unix = join(directory, `${process.pid}.sock`);
		expect(lstatSync(directory).mode & 0o777).toBe(0o700);
		expect(lstatSync(unix).mode & 0o777).toBe(0o600);
		const received: unknown[] = [];
		questionBridge.register(
			"call",
			[
				{
					id: "choice",
					question: "Choose",
					options: [{ label: "One" }, { label: "Two" }],
				},
			],
			(answers) => received.push(answers),
		);
		const state = await (
			await fetch("http://localhost/questions", { unix })
		).json();
		const identity = {
			requestId: state.questions[0].requestId,
			toolCallId: "call",
		};
		const send = (body: unknown) =>
			fetch("http://localhost/answers", {
				unix,
				method: "POST",
				body: JSON.stringify(body),
			});
		expect(
			(await send({ ...identity, toolCallId: "other", answers: [] })).status,
		).toBe(409);
		expect(
			(await send({ ...identity, answers: [{ id: "choice", selected: [9] }] }))
				.status,
		).toBe(400);
		expect(received).toEqual([]);
		const answer = { ...identity, answers: [{ id: "choice", selected: [1] }] };
		expect((await send(answer)).status).toBe(200);
		expect(received).toEqual([
			[
				{
					id: "choice",
					question: "Choose",
					options: ["One", "Two"],
					multi: false,
					selectedOptions: ["Two"],
				},
			],
		]);
		expect((await send(answer)).status).toBe(409);
		expect(received).toHaveLength(1);
	});
});

test("group-writable runtime parents cannot host the answer bridge", async () => {
	await isolated(async (runtime, owner) => {
		chmodSync(runtime, 0o770);
		expect(() => questionBridge.connect(owner)).toThrow(
			"Unsafe XDG runtime directory",
		);
	});
});
