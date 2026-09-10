/**
 * `/mod` — pin a model as *this directory's* default.
 *
 * The extension owns its state in `<cwd>/.omp/directory-model.json`, rather
 * than OMP's project settings. At `session_start`, it applies that model unless
 * `OMP_DIRECTORY_MODEL=0` is set. That lets a profile keep its own default.
 *
 *   /mod                      fuzzy-pick a subscription model
 *   /mod opus                 resolve a spec (provider/id, bare id, @role)
 *   /mod off                  drop this directory's pin
 */

import fs from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import type { Model } from "@oh-my-pi/pi-ai/types";
import type { ExtensionAPI, ExtensionCommandContext, ExtensionContext } from "@oh-my-pi/pi-coding-agent";

/**
 * Provider identities are stable. Their models are supplied by ModelRegistry,
 * which refreshes subscription-backed catalogs from authenticated accounts.
 */
const SUBSCRIPTION_PROVIDERS: Record<string, true> = {
	anthropic: true,
	"google-antigravity": true,
	"openai-codex": true,
};

const CLEAR_ARGS: Record<string, true> = {
	off: true,
	clear: true,
	none: true,
	"-": true,
};

const ROLE = "default";
const STATE_FILE = "directory-model.json";

function abbreviate(target: string): string {
	const relative = path.relative(homedir(), target);
	return relative.startsWith("..") || path.isAbsolute(relative) ? target : `~/${relative}`;
}

function readJsonObject(file: string): Record<string, unknown> {
	if (!fs.existsSync(file)) return {};
	const parsed: unknown = JSON.parse(fs.readFileSync(file, "utf-8"));
	if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
		throw new Error(`${abbreviate(file)} is not a JSON object`);
	}
	return parsed as Record<string, unknown>;
}

function readDirectoryModel(file: string): string | undefined {
	const model = readJsonObject(file).model;
	return typeof model === "string" && model.trim() ? model : undefined;
}

function persistDirectoryModel(file: string, selector: string | null): void {
	if (selector === null) {
		fs.rmSync(file, { force: true });
		return;
	}
	fs.mkdirSync(path.dirname(file), { recursive: true });
	fs.writeFileSync(file, `${JSON.stringify({ model: selector }, null, 2)}\n`);
}

/**
 * Move the old extension-owned setting out of core configuration. Existing
 * directory state wins if both files are present. All unrelated settings and
 * model roles remain untouched.
 */
function migrateLegacyRole(cwd: string): string | undefined {
	const settingsFile = path.join(cwd, ".omp", "settings.json");
	const stateFile = path.join(cwd, ".omp", STATE_FILE);
	const settings = readJsonObject(settingsFile);
	const modelRoles = settings.modelRoles;
	if (!modelRoles || typeof modelRoles !== "object" || Array.isArray(modelRoles)) {
		return readDirectoryModel(stateFile);
	}

	const roles = { ...(modelRoles as Record<string, unknown>) };
	const legacy = typeof roles[ROLE] === "string" && roles[ROLE].trim() ? roles[ROLE] : undefined;
	if (!legacy) return readDirectoryModel(stateFile);

	const persisted = readDirectoryModel(stateFile);
	if (!persisted) persistDirectoryModel(stateFile, legacy);
	delete roles[ROLE];
	if (Object.keys(roles).length > 0) settings.modelRoles = roles;
	else delete settings.modelRoles;

	if (Object.keys(settings).length === 0) fs.rmSync(settingsFile, { force: true });
	else fs.writeFileSync(settingsFile, `${JSON.stringify(settings, null, 2)}\n`);
	return persisted ?? legacy;
}

async function pick(ctx: ExtensionCommandContext): Promise<Model | undefined> {
	const all = ctx.models.list();
	const subscribed = all.filter(model => SUBSCRIPTION_PROVIDERS[model.provider]);
	const candidates = subscribed.length > 0 ? subscribed : all;
	if (candidates.length === 0) {
		ctx.ui.notify("/mod: no authenticated models available", "error");
		return undefined;
	}

	const byLabel = new Map<string, Model>();
	const options: { label: string; description: string }[] = [];
	for (const model of candidates) {
		const label = `${model.provider}/${model.id}`;
		byLabel.set(label, model);
		options.push({ label, description: model.name ?? "" });
	}

	const current = ctx.models.current();
	const currentLabel = current ? `${current.provider}/${current.id}` : undefined;
	const currentIndex = options.findIndex(option => option.label === currentLabel);

	const chosen = await ctx.ui.select(`Default model for ${abbreviate(ctx.cwd)}`, options, {
		initialIndex: currentIndex >= 0 ? currentIndex : 0,
		helpText: "Saved to .omp/directory-model.json for this directory only",
	});
	return chosen === undefined ? undefined : byLabel.get(chosen);
}

async function applyDirectoryModel(api: ExtensionAPI, ctx: ExtensionContext): Promise<void> {
	const selector = migrateLegacyRole(ctx.cwd) ?? readDirectoryModel(path.join(ctx.cwd, ".omp", STATE_FILE));
	if (process.env.OMP_DIRECTORY_MODEL === "0" || !selector) return;
	const model = ctx.models.resolve(selector);
	if (model) await api.setModel(model);
}

export const description =
	"`/mod` pins a default model for this directory, stored in `.omp/directory-model.json`.";

export default function modDirectoryModel(api: ExtensionAPI): void {
	api.on("session_start", async (_event, ctx) => {
		try {
			await applyDirectoryModel(api, ctx);
		} catch (error) {
			api.logger.warn("Failed to apply directory model", {
				error: error instanceof Error ? error.message : String(error),
			});
		}
	});
	api.registerCommand("mod", {
		description: "Set this directory's default model (.omp/directory-model.json)",
		handler: async (args: string, ctx: ExtensionCommandContext) => {
			const spec = args.trim();
			const file = path.join(ctx.cwd, ".omp", STATE_FILE);

			try {
				if (CLEAR_ARGS[spec.toLowerCase()]) {
					persistDirectoryModel(file, null);
					ctx.ui.notify(`Cleared the directory model in ${abbreviate(file)}; the profile default applies to new sessions`);
					return;
				}

				if (!spec && !ctx.hasUI) {
					ctx.ui.notify("/mod: needs the interactive picker — pass a model, e.g. /mod opus", "error");
					return;
				}

				const model = spec ? ctx.models.resolve(spec) : await pick(ctx);
				if (!model) {
					if (spec) ctx.ui.notify(`/mod: no model matches "${spec}"`, "error");
					return;
				}

				const selector = `${model.provider}/${model.id}`;
				persistDirectoryModel(file, selector);
				const switched = await api.setModel(model);
				ctx.ui.notify(
					switched
						? `Directory model: ${selector} (${abbreviate(file)})`
						: `Saved ${selector} to ${abbreviate(file)}, but this session could not switch — no credentials for ${model.provider}`,
					switched ? "info" : "warning",
				);
			} catch (error) {
				ctx.ui.notify(`/mod failed: ${error instanceof Error ? error.message : String(error)}`, "error");
			}
		},
	});
}
