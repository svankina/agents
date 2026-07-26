/**
 * `/mod` — pin a model as *this directory's* default.
 *
 * Writes `modelRoles.default` into `<cwd>/.omp/settings.json` (the project
 * settings layer, which beats `~/.omp/agent/config.yml`) and switches the live
 * session to it. The global default is left alone.
 *
 *   /mod                      fuzzy-pick a subscription model
 *   /mod opus                 resolve a spec (provider/id, bare id, @role)
 *   /mod off                  drop this directory's pin
 *
 * Lives as an extension on purpose: the same command patched into omp core was
 * thrown away by the next `omp update`.
 */

import fs from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import type { Model } from "@oh-my-pi/pi-ai/types";
import type { ExtensionAPI, ExtensionCommandContext } from "@oh-my-pi/pi-coding-agent";

/** OAuth/subscription providers worth offering in the picker. */
const SUBSCRIPTION_PROVIDERS: Record<string, true> = {
	anthropic: true,
	"openai-codex": true,
};

const CLEAR_ARGS: Record<string, true> = {
	off: true,
	clear: true,
	none: true,
	"-": true,
};

const ROLE = "default";

function abbreviate(target: string): string {
	const relative = path.relative(homedir(), target);
	return relative.startsWith("..") || path.isAbsolute(relative) ? target : `~/${relative}`;
}

function readSettings(file: string): Record<string, unknown> {
	if (!fs.existsSync(file)) return {};
	const parsed: unknown = JSON.parse(fs.readFileSync(file, "utf-8"));
	if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
		throw new Error(`${abbreviate(file)} is not a JSON object`);
	}
	return parsed as Record<string, unknown>;
}

/** Merge (or drop) `modelRoles.default`, preserving every other project setting. */
function persistRole(file: string, selector: string | null): void {
	const settings = readSettings(file);
	const existing: unknown = settings.modelRoles;
	const roles: Record<string, unknown> =
		existing && typeof existing === "object" && !Array.isArray(existing)
			? { ...(existing as Record<string, unknown>) }
			: {};

	if (selector === null) {
		delete roles[ROLE];
	} else {
		roles[ROLE] = selector;
	}

	if (Object.keys(roles).length > 0) {
		settings.modelRoles = roles;
	} else {
		delete settings.modelRoles;
	}

	if (Object.keys(settings).length === 0) {
		fs.rmSync(file, { force: true });
		return;
	}

	fs.mkdirSync(path.dirname(file), { recursive: true });
	fs.writeFileSync(file, `${JSON.stringify(settings, null, 2)}\n`);
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
		helpText: "Saved to .omp/settings.json for this directory only",
	});
	return chosen === undefined ? undefined : byLabel.get(chosen);
}

export default function modDirectoryModel(api: ExtensionAPI): void {
	api.registerCommand("mod", {
		description: "Set this directory's default model (.omp/settings.json)",
		handler: async (args: string, ctx: ExtensionCommandContext) => {
			const spec = args.trim();
			const file = path.join(ctx.cwd, ".omp", "settings.json");

			try {
				if (CLEAR_ARGS[spec.toLowerCase()]) {
					persistRole(file, null);
					ctx.ui.notify(
						`Cleared the directory model in ${abbreviate(file)}; the global default applies to new sessions`,
					);
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
				persistRole(file, selector);
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
