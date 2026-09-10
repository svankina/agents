import { test, expect } from "bun:test";
import { createServer } from "node:net";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";
import herdLifecycle from "../omp/extensions/herd-lifecycle";

test("quit evidence waits for idle and excludes continuations, new sessions and cleanup", async () => {
	const root = mkdtempSync(join(tmpdir(), "herd-lifecycle-"));
	const oldPane = process.env.HERD_PANE, oldSocket = process.env.HERD_BROKER_SOCK;
	process.env.HERD_PANE = "p-test";
	process.env.HERD_BROKER_SOCK = join(root, "broker.sock");
	const observations: Array<{ intent: number; phase: string; seq: number; session: string }> = [];
	const handlers = new Map<string, Function>();
	let observed: (() => void) | undefined;
	const server = createServer(socket => {
		let buffer = "";
		socket.on("data", data => {
			buffer += data;
			if (!buffer.includes("\n")) return;
			observations.push(JSON.parse(buffer));
			socket.end('{"ok":true,"accepted":true}\n');
			observed?.();
		});
	});
	let idle = false, pending = false, id = "session-a";
	const ctx = { isIdle: () => idle, hasPendingMessages: () => pending,
		sessionManager: { getSessionId: () => id } };
	let callId = "quit-1";
	const emit = (name: string, event = {}) => handlers.get(name)!({
		source: "interactive", toolCallId: callId,
		messages: [{ role: "toolResult", toolCallId: callId, toolName: "write" }],
		...event,
	}, ctx);
	const latest = () => observations.at(-1)!;
	try {
		const ready = Promise.withResolvers<void>();
		server.listen(process.env.HERD_BROKER_SOCK, ready.resolve);
		await ready.promise;
		// This fixture implements only the extension's event registration surface.
		const api = { on: (name: string, fn: Function) => handlers.set(name, fn) } as unknown as ExtensionAPI;
		herdLifecycle(api);
		await emit("session_start");
		await emit("tool_result", { toolName: "quit_session", isError: true });
		expect(latest().intent).toBe(0);
		await emit("tool_result", { toolName: "write", isError: false,
			details: { xdev: { tool: "quit_session", mode: "execute", args: {}, tier: "exec" } } });
		const acceptedIntent = latest().intent;
		expect(acceptedIntent).toBeGreaterThan(0);
		// A continuation can start before its previous end hook is delivered.
		await emit("agent_start");
		expect(latest().intent).toBe(acceptedIntent);
		await emit("agent_end", { willContinue: undefined });
		expect(latest().phase).toBe("pending");
		idle = true; pending = true;
		const queued = Promise.withResolvers<void>();
		observed = queued.resolve;
		await queued.promise;
		expect(latest().phase).toBe("pending");
		pending = false;
		const settled = Promise.withResolvers<void>();
		observed = settled.resolve;
		await settled.promise;
		expect(latest().phase).toBe("settled");
		await emit("input", { source: "interactive" });
		await emit("agent_start");
		expect(latest().intent).toBe(0);
		await emit("tool_result", { toolName: "quit_session", isError: false });
		await emit("agent_end", { willContinue: true });
		expect(latest().phase).not.toBe("settled");
		const continuingIntent = latest().intent;
		await emit("agent_start");
		expect(latest().intent).toBe(continuingIntent);
		expect(latest().phase).not.toBe("settled");
		await emit("input", { source: "extension" });
		expect(latest().intent).toBe(continuingIntent);
		await emit("input");
		expect(latest().intent).toBe(0);
		id = "session-b";
		await emit("session_switch");
		expect(latest().intent).toBe(0);
		expect(latest().session).toBe(id);
		callId = "quit-2";
		await emit("tool_result", { toolName: "quit_session", isError: false });
		await emit("agent_end");
		expect(latest().phase).not.toBe("settled");
		await emit("agent_end", { willContinue: undefined,
			messages: [{ role: "toolResult", toolCallId: "quit-1" }] });
		expect(latest().phase).not.toBe("settled");
		await emit("agent_end", { willContinue: undefined });
		await emit("session_shutdown");
		expect(latest().phase).toBe("cleanup");
		for (let i = 1; i < observations.length; i++) expect(observations[i].seq).toBeGreaterThan(observations[i - 1].seq);
	} finally {
		if (handlers.has("session_shutdown")) await emit("session_shutdown");
		server.close();
		if (oldPane === undefined) delete process.env.HERD_PANE; else process.env.HERD_PANE = oldPane;
		if (oldSocket === undefined) delete process.env.HERD_BROKER_SOCK; else process.env.HERD_BROKER_SOCK = oldSocket;
		rmSync(root, { recursive: true, force: true });
	}
});
