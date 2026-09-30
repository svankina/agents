import { expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import type { ExtensionAPI, ExtensionCommandContext } from "@oh-my-pi/pi-coding-agent";
import modDirectoryModel from "../omp/extensions/mod-directory-model";

test("/mod persists an extension-owned directory model and clears it", async () => {
	const root = mkdtempSync(path.join(tmpdir(), "mod-directory-model-"));
	const model = { provider: "google-antigravity", id: "gemini-live", name: "Gemini Live" };
	let handler: ((args: string, ctx: ExtensionCommandContext) => Promise<void>) | undefined;
	let setModelCalls = 0;
	const extension = {
		on: () => {},
		registerCommand: (_name: string, command: { handler: (args: string, ctx: ExtensionCommandContext) => Promise<void> }) => {
			handler = command.handler;
		},
		setModel: async () => {
			setModelCalls++;
			return true;
		},
	};
	modDirectoryModel(extension as unknown as ExtensionAPI);

	const context = {
		cwd: root,
		hasUI: false,
		models: {
			list: () => [model],
			current: () => undefined,
			resolve: (spec: string) => (spec === "gemini-live" ? model : undefined),
		},
		modelRegistry: { refresh: async () => {} },
		ui: { notify: () => {}, setStatus: () => {} },
	} as unknown as ExtensionCommandContext;

	try {
		await handler!("gemini-live", context);
		expect(JSON.parse(readFileSync(path.join(root, ".omp", "directory-model.json"), "utf8"))).toEqual({
			model: "google-antigravity/gemini-live",
		});
		expect(setModelCalls).toBe(1);

		await handler!("off", context);
		expect(() => readFileSync(path.join(root, ".omp", "directory-model.json"), "utf8")).toThrow();
	} finally {
		rmSync(root, { recursive: true, force: true });
	}
});

test("startup applies a saved directory model unless the environment opt-out is enabled", async () => {
	const root = mkdtempSync(path.join(tmpdir(), "mod-directory-model-"));
	const model = { provider: "google-antigravity", id: "gemini-live", name: "Gemini Live" };
	mkdirSync(path.join(root, ".omp"));
	writeFileSync(path.join(root, ".omp", "directory-model.json"), JSON.stringify({ model: "google-antigravity/gemini-live" }));
	let startup: ((event: unknown, ctx: unknown) => Promise<void>) | undefined;
	let setModelCalls = 0;
	const previousEnvironment = process.env.OMP_DIRECTORY_MODEL;
	const extension = {
		on: (_event: string, handler: (event: unknown, ctx: unknown) => Promise<void>) => {
			startup = handler;
		},
		registerCommand: () => {},
		setModel: async () => {
			setModelCalls++;
			return true;
		},
		logger: { warn: () => {} },
	};
	modDirectoryModel(extension as unknown as ExtensionAPI);
	const context = { cwd: root, models: { resolve: (selector: string) => (selector.endsWith("gemini-live") ? model : undefined) } };

	try {
		await startup!({}, context);
		expect(setModelCalls).toBe(1);

		process.env.OMP_DIRECTORY_MODEL = "0";
		await startup!({}, context);
		expect(setModelCalls).toBe(1);
	} finally {
		if (previousEnvironment === undefined) delete process.env.OMP_DIRECTORY_MODEL;
		else process.env.OMP_DIRECTORY_MODEL = previousEnvironment;
		rmSync(root, { recursive: true, force: true });
	}
});

test("startup migrates the legacy core setting without changing unrelated settings", async () => {
	const root = mkdtempSync(path.join(tmpdir(), "mod-directory-model-"));
	mkdirSync(path.join(root, ".omp"));
	writeFileSync(
		path.join(root, ".omp", "settings.json"),
		JSON.stringify({ custom: { keep: true }, modelRoles: { default: "openai-codex/gpt-5.6-sol", task: "openai-codex/gpt-5.6-terra" } }),
	);
	let startup: ((event: unknown, ctx: unknown) => Promise<void>) | undefined;
	const extension = {
		on: (_event: string, handler: (event: unknown, ctx: unknown) => Promise<void>) => {
			startup = handler;
		},
		registerCommand: () => {},
		setModel: async () => true,
		logger: { warn: () => {} },
	};
	modDirectoryModel(extension as unknown as ExtensionAPI);

	try {
		await startup!({}, { cwd: root, models: { resolve: () => undefined } });
		expect(JSON.parse(readFileSync(path.join(root, ".omp", "directory-model.json"), "utf8"))).toEqual({
			model: "openai-codex/gpt-5.6-sol",
		});
		expect(JSON.parse(readFileSync(path.join(root, ".omp", "settings.json"), "utf8"))).toEqual({
			custom: { keep: true },
			modelRoles: { task: "openai-codex/gpt-5.6-terra" },
		});
	} finally {
		rmSync(root, { recursive: true, force: true });
	}
});

test("/mod picker matches abbreviations and lists models refreshed while it is open", async () => {
	const root = mkdtempSync(path.join(tmpdir(), "mod-directory-model-"));
	const opus5 = { provider: "anthropic", id: "claude-opus-5", name: "Claude Opus 5" };
	const opus55 = { provider: "anthropic", id: "claude-opus-5-5", name: "Claude Opus 5.5" };
	const sonnet46 = { provider: "anthropic", id: "claude-sonnet-4-6", name: "Claude Sonnet 4.6" };
	let catalog = [opus5, opus55];
	let releaseRefresh: () => void = () => {};
	const notifications: Array<{ message: string; level: string }> = [];
	let handler: ((args: string, ctx: ExtensionCommandContext) => Promise<void>) | undefined;
	let setModelCalls = 0;
	const extension = {
		on: () => {},
		registerCommand: (_name: string, command: { handler: (args: string, ctx: ExtensionCommandContext) => Promise<void> }) => {
			handler = command.handler;
		},
		setModel: async () => {
			setModelCalls++;
			return true;
		},
		logger: { warn: () => {} },
	};
	modDirectoryModel(extension as unknown as ExtensionAPI);
	const theme = { fg: (_color: string, text: string) => text, bg: (_color: string, text: string) => text, bold: (text: string) => text };
	type Picker = { handleInput(data: string): void; render(width: number): string[] };
	let picker: Picker | undefined;
	let onRender = () => {};
	const context = {
		cwd: root,
		hasUI: true,
		models: {
			list: () => catalog,
			current: () => undefined,
			resolve: (spec: string) => catalog.find(model => spec === `${model.provider}/${model.id}`),
		},
		// Settles only when the test releases it, so the picker must open first.
		modelRegistry: {
			refresh: () => {
				const { promise, resolve } = Promise.withResolvers<void>();
				releaseRefresh = () => {
					catalog = [...catalog, sonnet46];
					resolve();
				};
				return promise;
			},
		},
		ui: {
			setStatus: () => {},
			notify: (message: string, level: string) => notifications.push({ message, level }),
			custom: (factory: (...args: unknown[]) => Picker) => {
				const { promise, resolve } = Promise.withResolvers<unknown>();
				picker = factory({ requestRender: () => onRender() }, theme, {}, resolve);
				return promise;
			},
		},
	} as unknown as ExtensionCommandContext;
	const selectedRow = () => picker!.render(120).find(line => line.startsWith("❯"));

	try {
		const picking = handler!("", context);
		expect(picker!.render(120).join("\n")).not.toContain("claude-sonnet-4-6");
		for (const key of "op55") picker!.handleInput(key);
		expect(selectedRow()).toContain("anthropic/claude-opus-5-5");
		picker!.handleInput("\x15");

		const { promise: swapped, resolve: rendered } = Promise.withResolvers<void>();
		onRender = rendered;
		releaseRefresh();
		await swapped;
		onRender = () => {};
		for (const key of "son46") picker!.handleInput(key);
		expect(selectedRow()).toContain("anthropic/claude-sonnet-4-6");
		picker!.handleInput("\r");
		await picking;
		expect(JSON.parse(readFileSync(path.join(root, ".omp", "directory-model.json"), "utf8"))).toEqual({
			model: "anthropic/claude-sonnet-4-6",
		});
		expect(setModelCalls).toBe(1);

		const explicit = handler!("anthropic/claude-unavailable", context);
		releaseRefresh();
		await explicit;
		expect(notifications.at(-1)).toEqual({ message: '/mod: no model matches "anthropic/claude-unavailable"', level: "error" });
		expect(setModelCalls).toBe(1);
	} finally {
		rmSync(root, { recursive: true, force: true });
	}
});
