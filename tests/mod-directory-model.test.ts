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
		ui: { notify: () => {} },
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

test("/mod picker offers live models and rejects unavailable explicit ids", async () => {
	const root = mkdtempSync(path.join(tmpdir(), "mod-directory-model-"));
	const gemini = { provider: "google-antigravity", id: "gemini-live", name: "Gemini Live" };
	const claude = { provider: "anthropic", id: "claude-live", name: "Claude Live" };
	const options: Array<{ label: string; description: string }> = [];
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
	};
	modDirectoryModel(extension as unknown as ExtensionAPI);
	const context = {
		cwd: root,
		hasUI: true,
		models: {
			list: () => [claude, gemini],
			current: () => undefined,
			resolve: (spec: string) => [claude, gemini].find(model => spec === `${model.provider}/${model.id}`),
		},
		ui: {
			select: async (_title: string, choices: Array<{ label: string; description: string }>) => {
				options.push(...choices);
				return "google-antigravity/gemini-live";
			},
			notify: (message: string, level: string) => notifications.push({ message, level }),
		},
	} as unknown as ExtensionCommandContext;

	try {
		await handler!("", context);
		expect(options).toEqual([
			{ label: "anthropic/claude-live", description: "Claude Live" },
			{ label: "google-antigravity/gemini-live", description: "Gemini Live" },
		]);
		expect(setModelCalls).toBe(1);
		await handler!("google-antigravity/gemini-unavailable", context);
		expect(notifications.at(-1)).toEqual({
			message: '/mod: no model matches "google-antigravity/gemini-unavailable"',
			level: "error",
		});
		expect(setModelCalls).toBe(1);
	} finally {
		rmSync(root, { recursive: true, force: true });
	}
});
