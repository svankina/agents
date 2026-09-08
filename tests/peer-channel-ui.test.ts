import { expect, test } from "bun:test";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";
import { createPeerChannelReporter } from "../omp/lib/peer-channel-ui";

test("channel browser reopens when the host only resolves custom UI and shows request/answer history", async () => {
	const directory = await mkdtemp(join(tmpdir(), "peer-channel-ui-"));
	try {
		const file = join(directory, "session.jsonl");
		await writeFile(file, [
			{ type: "custom_message", customType: "peer-channel-request", details: { peerMessage: { body: "Review the 2 mm wall." } } },
			{ type: "message", message: { role: "assistant", content: [{ type: "text", text: "Minimum wall: 3 mm." }] } },
		].map(entry => JSON.stringify(entry)).join("\n"));
		type Component = { render(width: number): string[]; handleInput(data: string): void };
		let command!: { handler(args: string, ctx: ExtensionContext): Promise<void> };
		let component!: Component;
		let opens = 0;
		const transcript = Promise.withResolvers<string>();
		const theme = { bold: (text: string) => text, fg: (_color: string, text: string) => text };
		const ctx = {
			hasUI: true,
			ui: {
				setWidget() {},
				custom(factory: (tui: { requestRender(): void }, theme: unknown, keys: unknown, done: () => void) => Component) {
					opens++;
					return new Promise<void>(resolve => {
						component = factory({ requestRender() {
							const text = component.render(100).join("\n");
							if (text.includes("Review the 2 mm wall.") && text.includes("[assistant]")) transcript.resolve(text);
						} }, theme, undefined, resolve);
						// The host is allowed to resolve done without calling component.dispose().
					});
				},
			},
		} as unknown as ExtensionContext;
		const pi = { registerCommand(_name: string, definition: typeof command) { command = definition; }, on() {} } as unknown as ExtensionAPI;
		const reporter = createPeerChannelReporter(pi);
		reporter.update(ctx, [{ id: "alpha", peerName: "Alpha", state: "idle", task: "Review wall", queued: 0, sessionFile: file }]);
		const first = command.handler("", ctx);
		component.handleInput("\u001b");
		await first;
		const second = command.handler("", ctx);
		expect(opens).toBe(2);
		component.handleInput("\r");
		component.handleInput("t");
		const text = await transcript.promise;
		expect(text).toContain("[peer request]\nReview the 2 mm wall.");
		expect(text).toContain("[assistant]\nMinimum wall: 3 mm.");
		reporter.clear(ctx);
		await second;
		const third = command.handler("", ctx);
		expect(component.render(100).join("\n")).toContain("No peer channels yet.");
		component.handleInput("\u001b");
		await third;
	} finally { await rm(directory, { recursive: true, force: true }); }
});

test("channel notifications become quiet only after reading details and survive repeated snapshots", async () => {
	type Component = { render(width: number): string[]; handleInput(data: string): void };
	let command!: { handler(args: string, ctx: ExtensionContext): Promise<void> };
	let browser!: Component;
	let widget: Pick<Component, "render"> | undefined;
	const theme = { bold: (text: string) => text, fg: (_color: string, text: string) => text };
	const ctx = {
		hasUI: true,
		ui: {
			setWidget(_key: string, factory: undefined | ((tui: unknown, theme: unknown) => typeof widget)) {
				widget = factory?.({}, theme);
			},
			custom(factory: (tui: unknown, theme: unknown, keys: unknown, done: () => void) => Component) {
				return new Promise<void>(resolve => {
					browser = factory({ requestRender() { browser.render(100); } }, theme, {}, resolve);
				});
			},
		},
	} as unknown as ExtensionContext;
	const pi = { registerCommand(_name: string, definition: typeof command) { command = definition; }, on() {} } as unknown as ExtensionAPI;
	const reporter = createPeerChannelReporter(pi);
	const row = { id: "alpha", peerName: "Alpha", state: "idle" as const, task: "Review wall", result: "Old answer", queued: 0 };
	const text = () => widget?.render(100).join("\n") ?? "";
	reporter.update(ctx, [row]);
	expect(widget?.render(100)).toHaveLength(1);
	expect(text()).not.toContain("Old answer");
	reporter.update(ctx, [{ ...row, state: "running", result: undefined, activity: "Checking wall" }]);
	expect(text()).toContain("Checking wall");
	const answer = { ...row, result: "**Use 3 mm.**" };
	reporter.update(ctx, [answer]);
	expect(text()).toContain("new reply");
	expect(text()).toContain("Use 3 mm.");
	expect(text()).not.toContain("**");
	reporter.update(ctx, [answer]);
	expect(text()).toContain("new reply");
	const opened = command.handler("", ctx);
	browser.render(100);
	expect(text()).toContain("new reply");
	browser.handleInput("\r");
	expect(browser.render(100).join("\n")).toContain("**Use 3 mm.**");
	expect(widget?.render(100)).toHaveLength(1);
	reporter.update(ctx, [answer]);
	expect(widget?.render(100)).toHaveLength(1);
	browser.handleInput("\u001b");
	browser.handleInput("\u001b");
	await opened;
	// An identical answer to a subsequent request is still a new completion.
	reporter.update(ctx, [{ ...answer, state: "running" }]);
	reporter.update(ctx, [answer]);
	expect(text()).toContain("new reply");
	reporter.update(ctx, [{ ...answer, state: "error", result: "Permission denied" }]);
	expect(text()).toContain("error");
	expect(text()).toContain("Permission denied");
	for (const width of [1, 20, 80]) expect(widget?.render(width).every(line => line.length <= width)).toBe(true);
	reporter.clear(ctx);
	expect(widget).toBeUndefined();
	reporter.update(ctx, [answer]);
	expect(widget?.render(100)).toHaveLength(1);
});
