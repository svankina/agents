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
	op: "list" | "send" | "wait";
	to?: string;
	from?: string;
	message?: string;
	replyTo?: string;
	await?: boolean;
	timeoutMs?: number;
}
interface PeerData {
	self?: PeerDescriptor;
	peers?: PeerDescriptor[];
	reply?: { outcome: string; message?: PeerMessage };
	outcome?: string;
	message?: PeerMessage;
	error?: string;
}
type Result = { content: Array<{ type: "text"; text: string }>; details: { peerHub?: PeerData }; isError?: boolean };
type Definition = { name: string; execute: (id: string, params: Params, signal: AbortSignal | undefined, update: undefined, ctx: ExtensionContext) => Promise<Result> };
interface Session {
	asides: PeerMessage[];
	requests: PeerMessage[];
	onRequest: ((message: PeerMessage) => Promise<string>) | undefined;
	tools: Map<string, Definition>;
	start(): Promise<void>;
	close(): Promise<void>;
	call(params: Params, signal?: AbortSignal): Promise<Result>;
}

// Schema construction is host-owned; delivery is exercised directly through execute.
const schema: unknown = new Proxy(function schema() {}, { get: () => schema, apply: () => schema });

function session(name: string, cwd: string): Session {
	const hooks = new Map<string, Array<(event: unknown, ctx: ExtensionContext) => unknown>>();
	const tools = new Map<string, Definition>();
	const asides: PeerMessage[] = [];
	const requests: PeerMessage[] = [];
	let onRequest: ((message: PeerMessage) => Promise<string>) | undefined;
	const ctx = {
		cwd, hasUI: false, isIdle: () => true,
		sessionManager: { getSessionId: () => name, getSessionName: () => name, getBranch: () => [] },
		model: { id: "test", provider: "test" },
		getSystemPrompt: () => ["Read-only design reviewer"],
	} as unknown as ExtensionContext;
	const pi = {
		setLabel() {},
		zod: { z: schema },
		pi: {
			Text: class {},
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
		// OMP 18.3.0 has no native `hub`; the extension must not depend on any builtin.
		getAllTools: () => [],
		registerTool: (definition: Definition) => { tools.set(definition.name, definition); },
		registerMessageRenderer() {},
		on(event: string, handler: (event: unknown, ctx: ExtensionContext) => unknown) {
			const handlers = hooks.get(event) ?? [];
			handlers.push(handler);
			hooks.set(event, handlers);
		},
		sendMessage(message: { details: PeerMessage }) {
			asides.push(message.details);
		},
	} as unknown as ExtensionAPI;
	peersExtension(pi);
	const emit = async (event: string) => {
		for (const handler of hooks.get(event) ?? []) await handler({}, ctx);
	};
	return {
		asides, requests, tools,
		set onRequest(handler: ((message: PeerMessage) => Promise<string>) | undefined) { onRequest = handler; },
		start: () => emit("session_start"), close: () => emit("session_shutdown"),
		call(params: Params, signal?: AbortSignal) {
			const tool = tools.get("peers");
			if (!tool) throw new Error("peers tool was not registered");
			return tool.execute(crypto.randomUUID(), params, signal, undefined, ctx);
		},
	};
}

async function isolated(run: (a: Session, b: Session, aId: string, bId: string) => Promise<void>) {
	const directory = mkdtempSync(join(tmpdir(), "peers-"));
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

test("empty optional strings from a model do not turn a request into an uncorrelated reply", async () => {
	await isolated(async (a, b, _aId, bId) => {
		b.onRequest = async () => "answer";
		const response = await a.call({ op: "send", to: bId, from: "", replyTo: "", message: "question", await: true, timeoutMs: 1000 });
		expect(response.details.peerHub?.reply).toMatchObject({ outcome: "message", message: { body: "answer" } });
		expect(b.requests.map(message => [message.body, message.kind])).toEqual([["question", "request"]]);
		expect(b.asides).toEqual([]);
	});
});

// A wait registers after microtasks only; every peer delivery and `list` needs socket
// or filesystem I/O. Starting the wait first therefore orders it before any delivery.
// The 1 ms wait timeouts below are the product's own timeout path: the only way to
// observe that nothing is replayed.
test("a pending wait consumes a peer reply instead of an aside, and a later wait does not replay it", async () => {
	await isolated(async (a, b, aId, bId) => {
		const waiting = a.call({ op: "wait", from: bId, timeoutMs: 1000 });
		await b.call({ op: "send", to: aId, message: "peer wake", replyTo: "pending-request" });
		expect((await waiting).details.peerHub).toMatchObject({ outcome: "message", message: { from: bId, body: "peer wake" } });
		expect(a.asides).toEqual([]);
		expect((await a.call({ op: "wait", timeoutMs: 1 })).details.peerHub?.outcome).toBe("timeout");
	});
});

test("a reply delivered before wait becomes one aside and is not replayed by wait", async () => {
	await isolated(async (a, b, aId) => {
		await b.call({ op: "send", to: aId, message: "already delivered", replyTo: "completed-request" });
		expect(a.asides.map(message => message.body)).toEqual(["already delivered"]);
		expect((await a.call({ op: "wait", timeoutMs: 1 })).details.peerHub?.outcome).toBe("timeout");
		expect(a.asides.map(message => message.body)).toEqual(["already delivered"]);
	});
});

test("abort and session shutdown release a registered unbounded wait", async () => {
	await isolated(async (a, b) => {
		const abort = new AbortController();
		const first = a.call({ op: "wait", timeoutMs: 0 }, abort.signal);
		await a.call({ op: "list" });
		abort.abort();
		expect((await first).details.peerHub?.outcome).toBe("cancelled");
		const second = b.call({ op: "wait", timeoutMs: 0 });
		await b.call({ op: "list" });
		await b.close();
		expect((await second).details.peerHub?.outcome).toBe("cancelled");
	});
});

test("unqualified and self addresses are refused without delivering anything", async () => {
	await isolated(async (a, b, aId) => {
		for (const params of [
			{ op: "send", to: "Main", message: "local id" },
			{ op: "send", to: "external:herd", message: "herd" },
			{ op: "send", to: aId, message: "self" },
			{ op: "wait", from: "Main", timeoutMs: 20 },
		] satisfies Params[]) {
			const refused = await a.call(params);
			expect(refused.isError).toBe(true);
			expect(refused.details.peerHub?.error).toBeString();
		}
		expect(b.requests).toEqual([]);
		expect(b.asides).toEqual([]);
	});
});
