import { expect, test } from "bun:test";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";
import peersExtension from "../omp/extensions/peers";
import type { PeerDescriptor, PeerMessage } from "../omp/lib/peers-transport";

// Only the host boundary is simulated. Each extension owns its real PeerNetwork,
// discovery, correlation, delivery, and teardown. Never point this at live peers.
interface Params {
	op: string;
	to?: string;
	from?: string;
	message?: string;
	replyTo?: string;
	await?: boolean;
	timeoutMs?: number;
	ids?: string[];
	name?: string;
	peek?: boolean;
}
interface PeerData {
	self?: PeerDescriptor;
	peers?: PeerDescriptor[];
	reply?: { outcome: string; message?: PeerMessage };
	outcome?: string;
	message?: PeerMessage;
	native?: Result;
	error?: string;
}
interface Details {
	op?: string;
	peerHub?: PeerData;
	messages?: string[];
	jobs?: Array<{ id: string; status: string; output?: string }>;
	peers?: Array<{ id: string; parentId?: string }>;
	cancelled?: boolean | string[];
	delivered?: boolean;
}
type Result = { content: Array<{ type: "text"; text: string }>; details: Details; isError?: boolean };
type Definition = { name: string; execute: (id: string, params: Params, signal: AbortSignal | undefined, update: undefined, ctx: ExtensionContext) => Promise<Result> };
const result = (details: Details): Result => ({ content: [{ type: "text", text: JSON.stringify(details) }], details });
interface Session {
	asides: PeerMessage[];
	requests: PeerMessage[];
	onRequest: ((message: PeerMessage) => Promise<string>) | undefined;
	jobs: Set<string>;
	mailbox: string[];
	tools: Map<string, Definition>;
	waitStarted: { promise: Promise<void>; resolve: (value: void | PromiseLike<void>) => void };
	readonly activeWaits: number;
	onAside: ((message: PeerMessage) => void) | undefined;
	completeOnAbort: string | undefined;
	emptyWait: boolean;
	start(): Promise<void>;
	close(): Promise<void>;
	call(params: Params, signal?: AbortSignal): Promise<Result>;
}

// Native mailbox and job ownership remain host-owned: the plugin may delegate
// operations, but must not enroll foreign peers or cancel remote jobs.
function session(name: string, cwd: string): Session {
	const hooks = new Map<string, Array<(event: unknown, ctx: ExtensionContext) => unknown>>();
	const tools = new Map<string, Definition>();
	const asides: PeerMessage[] = [];
	const requests: PeerMessage[] = [];
	let onRequest: ((message: PeerMessage) => Promise<string>) | undefined;
	const jobs = new Set([`${name}-job`]);
	const mailbox: string[] = [];
	const waitStarted = Promise.withResolvers<void>();
	let activeWaits = 0;
	let onAside: ((message: PeerMessage) => void) | undefined;
	let completeOnAbort: string | undefined;
	let emptyWait = false;
	const native = async (params: Params, options?: { signal?: AbortSignal }): Promise<Result> => {
		switch (params.op) {
			case "list": return result({ op: "list", peers: [{ id: "Main" }, { id: `${name}-child`, parentId: "Main" }] });
			case "jobs": return result({ op: "jobs", jobs: [...jobs].map(id => ({ id, status: "running" })) });
			case "cancel": {
				const cancelled = (params.ids ?? []).filter((id: string) => jobs.delete(id));
				return result({ op: "cancel", cancelled });
			}
			case "send":
				if (params.to !== `${name}-child`) throw new Error("Unknown local agent");
				if (params.message === undefined) throw new Error("Missing local message");
				mailbox.push(params.message);
				return result({ op: "send", delivered: true });
			case "inbox": {
				const messages = params.peek ? [...mailbox] : mailbox.splice(0);
				return result({ op: "inbox", messages });
			}
			case "wait": {
				waitStarted.resolve();
				if (emptyWait) return result({ op: "wait", jobs: [] });
				activeWaits++;
				const { promise, resolve } = Promise.withResolvers<Result>();
				const abort = () => {
					options?.signal?.removeEventListener("abort", abort);
					activeWaits--;
					if (completeOnAbort) {
						const id = completeOnAbort;
						completeOnAbort = undefined;
						jobs.delete(id);
						resolve(result({ op: "wait", jobs: [{ id, status: "completed", output: "native job finished" }] }));
					} else resolve({
						...result({ op: "wait", jobs: [], cancelled: true }),
						content: [{ type: "text", text: "Wait aborted" }],
						isError: true,
					});
				};
				options?.signal?.addEventListener("abort", abort, { once: true });
				if (options?.signal?.aborted) abort();
				return promise;
			}
			default: throw new Error(`Unexpected native operation ${params.op}`);
		}
	};
	const ctx = {
		cwd, hasUI: false, isIdle: () => true,
		sessionManager: { getSessionId: () => name, getSessionName: () => name, getBranch: () => [] },
		model: { id: "test", provider: "test" },
		getSystemPrompt: () => ["Read-only design reviewer"],
		invokeTool: native,
	} as unknown as ExtensionContext;
	const pi = {
		setLabel() {},
		// Stock-OMP smoke checks schema composition; these tests exercise delivery directly.
		arktype: (schema: unknown) => ({ and: () => schema }),
		pi: {
			hubToolRenderer: { renderCall() {}, renderResult() {} }, Text: class {},
			AgentRegistry: class {},
			SessionManager: { open: async () => ({ getSessionId: () => crypto.randomUUID(), close: async () => {}, flush: async () => {} }) },
			createAgentSession: async () => {
				let listener: (event: unknown) => void;
				return { session: {
					subscribe(fn: (event: unknown) => void) { listener = fn; return () => {}; },
					async sendCustomMessage(message: { details: { peerMessage: PeerMessage } }) {
						const request = message.details.peerMessage;
						requests.push(request);
						const answer = await onRequest?.(request) ?? "";
						listener({ type: "message_end", message: { role: "assistant", stopReason: "stop", content: [{ type: "text", text: answer }] } });
					},
					dispose: async () => {},
				} };
			},
		},
		getActiveTools: () => [],
		getThinkingLevel: () => "low",
		registerCommand() {},
		getAllTools: () => ["hub"],
		registerTool: (definition: Definition) => { tools.set(definition.name, definition); },
		registerMessageRenderer() {},
		on(event: string, handler: (event: unknown, ctx: ExtensionContext) => unknown) {
			const handlers = hooks.get(event) ?? [];
			handlers.push(handler);
			hooks.set(event, handlers);
		},
		sendMessage(message: { details: PeerMessage }) {
			asides.push(message.details);
			onAside?.(message.details);
		},
	} as unknown as ExtensionAPI;
	peersExtension(pi);
	const emit = async (event: string) => {
		for (const handler of hooks.get(event) ?? []) await handler({}, ctx);
	};
	return {
		asides, requests, jobs, mailbox, tools, waitStarted,
		set onRequest(handler: ((message: PeerMessage) => Promise<string>) | undefined) { onRequest = handler; },
		get activeWaits() { return activeWaits; },
		set onAside(handler: ((message: PeerMessage) => void) | undefined) { onAside = handler; },
		set completeOnAbort(id: string | undefined) { completeOnAbort = id; },
		set emptyWait(value: boolean) { emptyWait = value; },
		start: () => emit("session_start"), close: () => emit("session_shutdown"),
		call(params: Params, signal?: AbortSignal) {
			const tool = tools.get("hub");
			if (!tool) throw new Error("Unified hub was not registered at session start");
			return tool.execute(crypto.randomUUID(), params, signal, undefined, ctx);
		},
	};
}

async function isolated(run: (a: Session, b: Session, aId: string, bId: string) => Promise<void>) {
	const directory = mkdtempSync(join(tmpdir(), "peer-hub-"));
	const previous = process.env.OMP_PEERS_DIR;
	const previousState = process.env.XDG_STATE_HOME;
	const previousRuntime = process.env.XDG_RUNTIME_DIR;
	process.env.XDG_STATE_HOME = join(directory, "state");
	process.env.XDG_RUNTIME_DIR = join(directory, "runtime");
	process.env.OMP_PEERS_DIR = join(directory, "sockets");
	const a = session("Alpha", directory);
	const b = session("Beta", directory);
	try {
		await a.start();
		await b.start();
		const catalog = (await a.call({ op: "list" })).details.peerHub;
		const aId = catalog?.self?.id;
		const bId = catalog?.peers?.find(peer => peer.sessionId === "Beta")?.id;
		if (!aId || !bId) throw new Error("Socket discovery did not expose both isolated sessions");
		await run(a, b, aId, bId);
	} finally {
		await Promise.all([a.close(), b.close()]);
		if (previous === undefined) delete process.env.OMP_PEERS_DIR;
		else process.env.OMP_PEERS_DIR = previous;
		if (previousState === undefined) delete process.env.XDG_STATE_HOME; else process.env.XDG_STATE_HOME = previousState;
		if (previousRuntime === undefined) delete process.env.XDG_RUNTIME_DIR; else process.env.XDG_RUNTIME_DIR = previousRuntime;
		rmSync(directory, { recursive: true, force: true });
	}
}

// Environment isolation is process-global, so these tests intentionally do not
// opt into concurrent execution.
test("correlated await captures an immediate socket reply without stealing an unrelated message", async () => {
	await isolated(async (a, b, aId, bId) => {
		const replies = Promise.withResolvers<void>();
		const unrelated = Promise.withResolvers<void>();
		a.onRequest = async () => { unrelated.resolve(); return ""; };
		let replyError: unknown;
		b.onRequest = async message => {
			try {
				await b.call({ op: "send", to: message.from, message: "unrelated" });
				return "answer";
			} catch (error) { replyError = error; return ""; }
			finally { replies.resolve(); }
		};
		const response = await a.call({ op: "send", to: bId, message: "question", await: true, timeoutMs: 1000 });
		await replies.promise;
		expect(replyError).toBeUndefined();
		expect(response.details.peerHub?.reply).toMatchObject({ outcome: "message", message: { from: bId, to: aId, body: "answer" } });
		expect(b.requests.map(message => message.body)).toEqual(["question"]);
		expect(b.asides).toEqual([]);
		expect(a.asides).toEqual([]);
		await unrelated.promise;
		expect(a.requests.map(message => message.body)).toEqual(["unrelated"]);
	});
});

test("a reply delivered before wait is not replayed by wait or inbox", async () => {
	await isolated(async (a, b, aId, bId) => {
		await a.call({ op: "send", to: bId, message: "already delivered", replyTo: "completed-request" });
		expect(b.asides.map(message => message.body)).toEqual(["already delivered"]);
		const waited = await b.call({ op: "wait", from: aId, timeoutMs: 20 });
		expect(waited.details.peerHub?.outcome).toBe("timeout");
		expect((await b.call({ op: "inbox" })).details.messages).toEqual([]);
		expect(b.asides.map(message => message.body)).toEqual(["already delivered"]);
	});
});

test("abort and session shutdown release both legs of an unbounded wait", async () => {
	await isolated(async (a, b) => {
		const abort = new AbortController();
		const first = a.call({ op: "wait", timeoutMs: 0 }, abort.signal);
		await a.waitStarted.promise;
		abort.abort();
		expect(JSON.stringify(await first)).toContain("cancelled");
		expect(a.activeWaits).toBe(0);
		const second = b.call({ op: "wait", timeoutMs: 0 });
		await b.waitStarted.promise;
		await b.close();
		expect(JSON.stringify(await second)).toContain("cancelled");
		expect(b.activeWaits).toBe(0);
	});
});

test("a peer-winning wait retains a native completion consumed during cancellation", async () => {
	await isolated(async (a, b, aId, bId) => {
		a.completeOnAbort = "Alpha-job";
		const waiting = a.call({ op: "wait", timeoutMs: 1000 });
		await a.waitStarted.promise;
		await b.call({ op: "send", to: aId, message: "peer wake", replyTo: "pending-request" });
		const response = await waiting;
		expect(response.details.peerHub).toMatchObject({ outcome: "message", message: { from: bId, body: "peer wake" } });
		expect(response.details.peerHub?.native?.details.jobs).toEqual([{ id: "Alpha-job", status: "completed", output: "native job finished" }]);
		expect(a.jobs.has("Alpha-job")).toBe(false);
		expect(a.activeWaits).toBe(0);
		expect(a.asides).toEqual([]);
		a.emptyWait = true;
		const next = await a.call({ op: "wait", timeoutMs: 20 });
		expect(JSON.stringify(next)).not.toContain("native job finished");
		expect(JSON.stringify(next)).not.toContain("peer wake");
	});
});

test("a successful remote wake is not reported as its losing native wait's abort error", async () => {
	await isolated(async (a, b, aId) => {
		const waiting = a.call({ op: "wait", timeoutMs: 1000 });
		await a.waitStarted.promise;
		await b.call({ op: "send", to: aId, message: "remote result", replyTo: "pending-request" });
		const response = await waiting;
		expect(response.isError).not.toBe(true);
		expect(response.details.peerHub).toMatchObject({ outcome: "message", message: { body: "remote result" } });
		expect(a.activeWaits).toBe(0);
	});
});

test("remote lifecycle targets are refused while local jobs and messaging remain usable", async () => {
	await isolated(async (a, b, _aId, bId) => {
		expect(a.tools.has("peers")).toBe(false);
		for (const params of [{ op: "cancel", ids: [bId, "Alpha-job"] }, { op: "stop", name: bId }]) {
			const refused = await a.call(params);
			expect(Boolean(refused.isError || refused.details.peerHub?.error)).toBe(true);
		}
		expect(a.jobs.has("Alpha-job")).toBe(true);
		expect(b.jobs.has("Beta-job")).toBe(true);
		await a.call({ op: "cancel", ids: ["Alpha-job"] });
		expect(a.jobs.has("Alpha-job")).toBe(false);
		expect(b.jobs.has("Beta-job")).toBe(true);
		await a.call({ op: "send", to: "Alpha-child", message: "local delivery" });
		expect((await a.call({ op: "inbox" })).details.messages).toEqual(["local delivery"]);
		expect((await b.call({ op: "inbox" })).details.messages).toEqual([]);
		await a.call({ op: "send", to: bId, message: "remote still alive", replyTo: "completed-request" });
		expect(b.asides.map(message => message.body)).toEqual(["remote still alive"]);
	});
});
