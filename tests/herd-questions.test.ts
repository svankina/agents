import { expect, test } from "bun:test";
import { chmodSync, lstatSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { ExtensionContext } from "@oh-my-pi/pi-coding-agent";
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

function modelSession(runtime: string, owner: symbol) {
	type Model = NonNullable<ExtensionContext["model"]>;
	const first = { provider: "one", id: "shared", name: "First" } as Model;
	const second = { provider: "two", id: "shared", name: "Second" } as Model;
	const state = {
		ref: join(runtime, "session.jsonl"),
		current: first,
		idle: true,
		pending: false,
		auth: async () => true,
	};
	const ctx = {
		hasUI: true,
		sessionManager: { getSessionFile: () => state.ref },
		models: { list: () => [first, second], current: () => state.current },
		isIdle: () => state.idle,
		hasPendingMessages: () => state.pending,
	} as unknown as ExtensionContext;
	const setModel = async (model: Model) => {
		if (!await state.auth()) return false;
		state.current = model;
		return true;
	};
	questionBridge.connect(owner);
	questionBridge.controlModels(owner, ctx, setModel);
	const unix = join(runtime, "omp-questions", `${process.pid}.sock`);
	const catalog = () => fetch("http://localhost/models", { unix });
	const send = (body: unknown = { ref: state.ref, provider: second.provider, id: second.id }) =>
		fetch("http://localhost/model", { unix, method: "POST", body: JSON.stringify(body) });
	return { state, ctx, first, second, setModel, catalog, send };
}

test("model switches use full identity and report the resulting session model", async () => {
	await isolated(async (runtime, owner) => {
		const session = modelSession(runtime, owner);
		expect(await (await session.catalog()).json()).toEqual({
			version: 1, pid: process.pid, ref: session.state.ref,
			current: session.first, models: [session.first, session.second], canChange: true,
		});
		const response = await session.send();
		expect(response.status).toBe(200);
		expect(await response.json()).toEqual({
			ok: true, version: 1, pid: process.pid, ref: session.state.ref, current: session.second,
		});
		expect((await (await session.catalog()).json()).current).toEqual(session.second);
	});
});

test("stale references, unknown models and busy sessions leave the model unchanged", async () => {
	await isolated(async (runtime, owner) => {
		const session = modelSession(runtime, owner);
		expect((await session.send({ ref: "/old.jsonl", provider: "two", id: "shared" })).status).toBe(409);
		expect((await session.send({ ref: session.state.ref, provider: "missing", id: "shared" })).status).toBe(400);
		session.state.idle = false;
		expect((await session.send()).status).toBe(409);
		expect((await (await session.catalog()).json()).canChange).toBe(false);
		session.state.idle = true;
		session.state.pending = true;
		expect((await session.send()).status).toBe(409);
		session.state.pending = false;
		session.state.auth = async () => false;
		expect((await session.send()).status).toBe(503);
		expect((await (await session.catalog()).json()).current).toEqual(session.first);
	});
});

test("a concurrent switch is rejected and a session race cannot report success", async () => {
	await isolated(async (runtime, owner) => {
		const session = modelSession(runtime, owner);
		const entered = Promise.withResolvers<void>();
		const release = Promise.withResolvers<boolean>();
		session.state.auth = () => {
			entered.resolve();
			return release.promise;
		};
		const first = session.send();
		await entered.promise;
		try {
			expect((await session.send()).status).toBe(409);
			expect((await (await session.catalog()).json()).canChange).toBe(false);
			session.state.ref = join(runtime, "new-session.jsonl");
		} finally {
			release.resolve(true);
		}
		expect((await first).status).toBe(409);
		// Public setModel cannot cancel its internal authentication await. The
		// bridge reports the race, never retries or rolls back another session.
		expect((await (await session.catalog()).json()).current).toEqual(session.second);
	});
});

test("a turn starting during authentication invalidates the switch even after it ends", async () => {
	await isolated(async (runtime, owner) => {
		const session = modelSession(runtime, owner);
		const entered = Promise.withResolvers<void>();
		const release = Promise.withResolvers<boolean>();
		session.state.auth = () => {
			entered.resolve();
			return release.promise;
		};
		const pending = session.send();
		await entered.promise;
		session.state.idle = false;
		questionBridge.controlModels(owner, session.ctx, session.setModel);
		session.state.idle = true;
		release.resolve(true);
		expect((await pending).status).toBe(409);
		expect((await (await session.catalog()).json()).current).toEqual(session.second);
	});
});

test("child extension instances cannot take over or disconnect interactive model control", async () => {
	await isolated(async (runtime, owner) => {
		const session = modelSession(runtime, owner);
		const child = Symbol("child");
		questionBridge.connect(child);
		try {
			questionBridge.controlModels(child, { ...session.ctx, hasUI: false }, async () => false);
			expect((await session.send()).status).toBe(200);
		} finally {
			questionBridge.disconnect(child);
		}
		expect((await (await session.catalog()).json()).current).toEqual(session.second);
	});
});

test("a setter that does not change the live model cannot produce a success response", async () => {
	await isolated(async (runtime, owner) => {
		const session = modelSession(runtime, owner);
		questionBridge.controlModels(owner, session.ctx, async () => true);
		expect((await session.send()).status).toBe(503);
		expect((await (await session.catalog()).json()).current).toEqual(session.first);
	});
});

test("a session becoming busy inside the public setter cannot report success", async () => {
	await isolated(async (runtime, owner) => {
		const session = modelSession(runtime, owner);
		const entered = Promise.withResolvers<void>();
		const release = Promise.withResolvers<boolean>();
		session.state.auth = () => {
			entered.resolve();
			return release.promise;
		};
		const pending = session.send();
		await entered.promise;
		session.state.idle = false;
		release.resolve(true);
		expect((await pending).status).toBe(409);
		expect(session.state.current).toEqual(session.second);
	});
});
