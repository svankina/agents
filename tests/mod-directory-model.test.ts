import { expect, test } from "bun:test";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import type { ExtensionAPI, ExtensionCommandContext } from "@oh-my-pi/pi-coding-agent";
import modDirectoryModel from "../omp/extensions/mod-directory-model";

test("/mod offers dynamically available Antigravity models and rejects unavailable explicit ids", async () => {
	const root = mkdtempSync(path.join(tmpdir(), "mod-directory-model-"));
	const liveGemini = { provider: "google-antigravity", id: "gemini-live", name: "Gemini Live" };
	const claude = { provider: "anthropic", id: "claude-live", name: "Claude Live" };
	const options: Array<{ label: string; description: string }> = [];
	const notifications: Array<{ message: string; level: string }> = [];
	let handler: ((args: string, ctx: ExtensionCommandContext) => Promise<void>) | undefined;
	let setModelCalls = 0;
	const extension = {
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
			list: () => [claude, liveGemini],
			current: () => undefined,
			resolve: (spec: string) =>
				[claude, liveGemini].find(model => spec === `${model.provider}/${model.id}`),
		},
		ui: {
			select: async (_title: string, items: Array<{ label: string; description: string }>) => {
				options.push(...items);
				return "google-antigravity/gemini-live";
			},
			notify: (message: string, level: string) => notifications.push({ message, level }),
		},
	};
	// The command reads only the modeled picker/session fields in this fixture.
	const commandContext = context as unknown as ExtensionCommandContext;

	try {
		await handler!("", commandContext);
		expect(options).toEqual([
			{ label: "anthropic/claude-live", description: "Claude Live" },
			{ label: "google-antigravity/gemini-live", description: "Gemini Live" },
		]);
		expect(JSON.parse(readFileSync(path.join(root, ".omp", "settings.json"), "utf8"))).toEqual({
			modelRoles: { default: "google-antigravity/gemini-live" },
		});

		expect(setModelCalls).toBe(1);
		await handler!("google-antigravity/gemini-unavailable", commandContext);
		expect(notifications.at(-1)).toEqual({
			message: '/mod: no model matches "google-antigravity/gemini-unavailable"',
			level: "error",
		});
		expect(setModelCalls).toBe(1);
	} finally {
		rmSync(root, { recursive: true, force: true });
	}
});
