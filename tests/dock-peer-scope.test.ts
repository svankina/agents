import { test, expect } from "bun:test";
import { createServer } from "node:net";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";
import dockPeerScope from "../omp/dock-extensions/dock-peer-scope";

test("only a docked pane's hub list is widened, and only when it asked for less", async () => {
	const root = mkdtempSync(join(tmpdir(), "dock-peer-scope-"));
	const oldPane = process.env.HERD_PANE,
		oldSocket = process.env.HERD_BROKER_SOCK;
	process.env.HERD_BROKER_SOCK = join(root, "broker.sock");
	let panes = '[{"id":"p1","meta":{"dock":"bots"}},{"id":"p2","meta":{}}]';
	let requests = 0;
	const server = createServer((socket) => {
		socket.on("data", () => {
			requests++;
			socket.end(`{"ok":true,"panes":${panes}}\n`);
		});
	});
	let handler!: Function;
	const call = (input: object, toolName = "hub") => handler({ toolName, input });
	try {
		const ready = Promise.withResolvers<void>();
		server.listen(process.env.HERD_BROKER_SOCK, ready.resolve);
		await ready.promise;
		// This fixture implements only the extension's registration surface.
		dockPeerScope({
			setLabel: () => {},
			on: (name: string, fn: Function) => {
				if (name === "tool_call") handler = fn;
			},
		} as unknown as ExtensionAPI);

		process.env.HERD_PANE = "p1";
		expect(await call({ op: "list" })).toEqual({ input: { op: "list", scope: "all" } });
		expect(await call({ op: "list", scope: "project", limit: 5 })).toEqual({
			input: { op: "list", limit: 5, scope: "all" },
		});
		// Nothing else is rewritten, and unrelated calls never reach the broker.
		const before = requests;
		expect(await call({ op: "list", scope: "all" })).toBeUndefined();
		expect(await call({ op: "send", to: "Main", message: "hi" })).toBeUndefined();
		expect(await call({ op: "list" }, "task")).toBeUndefined();
		expect(requests).toBe(before);

		// A pane the broker does not report as docked keeps project scope.
		process.env.HERD_PANE = "p2";
		expect(await call({ op: "list" })).toBeUndefined();
		delete process.env.HERD_PANE;
		expect(await call({ op: "list" })).toBeUndefined();

		// A broker that answers with junk fails loudly instead of guessing.
		process.env.HERD_PANE = "p1";
		panes = "null";
		await expect(call({ op: "list" })).rejects.toThrow(/invalid broker pane list/);
	} finally {
		server.close();
		if (oldPane === undefined) delete process.env.HERD_PANE;
		else process.env.HERD_PANE = oldPane;
		if (oldSocket === undefined) delete process.env.HERD_BROKER_SOCK;
		else process.env.HERD_BROKER_SOCK = oldSocket;
		rmSync(root, { recursive: true, force: true });
	}
});
