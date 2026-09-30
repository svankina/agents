/**
 * `/mod` — pin a model as *this directory's* default.
 *
 * The extension owns its state in `<cwd>/.omp/directory-model.json`, rather
 * than OMP's project settings. At `session_start`, it applies that model unless
 * `OMP_DIRECTORY_MODEL=0` is set. That lets a profile keep its own default.
 *
 *   /mod                      pick a subscription model; abbreviations work (op55)
 *   /mod opus                 resolve a spec (provider/id, bare id, @role)
 *   /mod off                  drop this directory's pin
 */

import fs from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import type { Model } from "@oh-my-pi/pi-ai/types";
import type { ExtensionAPI, ExtensionCommandContext, ExtensionContext } from "@oh-my-pi/pi-coding-agent";
import { matchesKey, truncateToWidth, visibleWidth } from "@oh-my-pi/pi-tui";
import { rankByAbbreviation } from "../lib/model-match";

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
const MAX_PICKER_ROWS = 15;
const MAX_LABEL_WIDTH = 48;

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

/**
 * Bring the catalog up to date.
 *
 * `ctx.models.list()`/`.resolve()` read `ModelRegistry.getAvailable()`, a
 * snapshot built at session start. Core's `/model` hub re-fetches on open
 * (`ModelHubComponent` calls `registry.refresh("online")`), so without this
 * `/mod` keeps offering the startup list — a model published, discovered, or
 * added to `models.yml` after launch is missing until the session restarts.
 * A failed refresh is not fatal: the cached snapshot still works offline.
 */
async function refreshCatalog(api: ExtensionAPI, ctx: ExtensionContext, provider?: string): Promise<void> {
	const status = provider ? `refreshing ${provider} models…` : "refreshing models…";
	ctx.ui.setStatus("mod-refresh", status);
	try {
		if (provider) await ctx.modelRegistry.refreshProvider(provider, "online");
		else await ctx.modelRegistry.refresh("online");
	} catch (error) {
		api.logger.warn("/mod: model catalog refresh failed; using the cached catalog", {
			provider,
			error: error instanceof Error ? error.message : String(error),
		});
	} finally {
		ctx.ui.setStatus("mod-refresh", undefined);
	}
}

/** Subscription models when any are authenticated, otherwise every available model. */
function candidateModels(ctx: ExtensionContext): Model[] {
	const all = ctx.models.list();
	const subscribed = all.filter(model => SUBSCRIPTION_PROVIDERS[model.provider]);
	return subscribed.length > 0 ? subscribed : all;
}

/**
 * Open on the current catalog at once and swap in the refreshed one when it
 * lands. A full online refresh takes seconds; blocking on it made `/mod` slow.
 * Filtering uses `rankByAbbreviation`, not OMP's select matcher, which cannot
 * match abbreviations such as `op55`.
 */
async function pick(api: ExtensionAPI, ctx: ExtensionCommandContext): Promise<Model | undefined> {
	let refresh: Promise<void> | undefined;
	if (candidateModels(ctx).length === 0) await refreshCatalog(api, ctx);
	else refresh = refreshCatalog(api, ctx);
	let models = candidateModels(ctx);
	if (models.length === 0) {
		ctx.ui.notify("/mod: no authenticated models available", "error");
		return undefined;
	}

	const labelOf = (model: Model): string => `${model.provider}/${model.id}`;
	const current = ctx.models.current();
	const title = `Default model for ${abbreviate(ctx.cwd)}`;

	return ctx.ui.custom<Model | undefined>((tui, theme, _keybindings, done) => {
		let query = "";
		let visible = models;
		let selected = 0;
		let top = 0;
		let pageRows = MAX_PICKER_ROWS;
		let closed = false;

		/** Re-rank for the query; `keep` pins the cursor to a label when it is still listed. */
		const refilter = (keep: string | undefined): void => {
			visible = rankByAbbreviation(models, query, labelOf);
			selected = Math.max(0, keep === undefined ? 0 : visible.findIndex(model => labelOf(model) === keep));
		};
		const finish = (model: Model | undefined): void => {
			if (closed) return;
			closed = true;
			done(model);
		};

		refilter(current ? labelOf(current) : undefined);
		void refresh?.then(() => {
			if (closed) return;
			const keep = visible[selected];
			models = candidateModels(ctx);
			refilter(keep ? labelOf(keep) : undefined);
			tui.requestRender();
		});

		return {
			invalidate() {},
			render(width: number): string[] {
				pageRows = Math.max(3, Math.min(MAX_PICKER_ROWS, (process.stdout.rows ?? 24) - 12));
				if (selected < top) top = selected;
				else if (selected >= top + pageRows) top = selected - pageRows + 1;
				top = Math.max(0, Math.min(top, visible.length - pageRows));

				const labelWidth = Math.min(
					MAX_LABEL_WIDTH,
					visible.reduce((widest, model) => Math.max(widest, labelOf(model).length), 0),
				);
				const lines = [
					theme.fg("accent", theme.bold(title)),
					query
						? `  Search: ${query}${theme.fg("accent", "▏")}`
						: theme.fg("muted", "  Type to search · abbreviations work, e.g. op55 → claude-opus-5-5"),
				];
				for (const [offset, model] of visible.slice(top, top + pageRows).entries()) {
					const isSelected = top + offset === selected;
					const row = truncateToWidth(
						`${isSelected ? theme.fg("accent", "❯") : " "} ${labelOf(model).padEnd(labelWidth)}  ${theme.fg("muted", model.name ?? "")}`,
						width,
					);
					lines.push(
						isSelected ? theme.bg("selectedBg", row + " ".repeat(Math.max(0, width - visibleWidth(row)))) : row,
					);
				}
				if (visible.length === 0) lines.push(theme.fg("muted", "  No matching models"));
				const position = visible.length === 0 ? 0 : selected + 1;
				const count = query ? `${position}/${visible.length} of ${models.length}` : `${position}/${visible.length}`;
				lines.push(
					theme.fg("dim", `  (${count}) ↑↓ select · enter confirm · esc ${query ? "clear" : "cancel"}`),
					theme.fg("dim", "  Saved to .omp/directory-model.json for this directory only"),
				);
				return lines.map(line => truncateToWidth(line, width));
			},
			handleInput(data: string): void {
				if (matchesKey(data, "ctrl+c")) return finish(undefined);
				if (matchesKey(data, "enter")) return finish(visible[selected]);
				if (matchesKey(data, "escape")) {
					if (!query) return finish(undefined);
					const keep = visible[selected];
					query = "";
					refilter(keep ? labelOf(keep) : undefined);
				} else if (matchesKey(data, "up") || matchesKey(data, "down")) {
					const step = matchesKey(data, "up") ? -1 : 1;
					if (visible.length > 0) selected = (selected + step + visible.length) % visible.length;
				} else if (matchesKey(data, "pageUp") || matchesKey(data, "pageDown")) {
					const step = matchesKey(data, "pageUp") ? -pageRows : pageRows;
					selected = Math.max(0, Math.min(visible.length - 1, selected + step));
				} else if (matchesKey(data, "backspace")) {
					query = query.slice(0, -1);
					refilter(undefined);
				} else if (matchesKey(data, "ctrl+w")) {
					query = query.replace(/\S*\s*$/, "");
					refilter(undefined);
				} else if (matchesKey(data, "ctrl+u")) {
					query = "";
					refilter(undefined);
				} else if (/^[\x20-\x7e]+$/.test(data)) {
					query += data;
					refilter(undefined);
				} else {
					return;
				}
				tui.requestRender();
			},
		};
	});
}

async function applyDirectoryModel(api: ExtensionAPI, ctx: ExtensionContext): Promise<void> {
	const selector = migrateLegacyRole(ctx.cwd) ?? readDirectoryModel(path.join(ctx.cwd, ".omp", STATE_FILE));
	if (process.env.OMP_DIRECTORY_MODEL === "0" || !selector) return;
	let model = ctx.models.resolve(selector);
	if (!model) {
		// Startup resolves against the pre-discovery catalog, so a pin that only
		// materializes through discovery would be dropped silently. Re-fetch the
		// pinned provider once — not the whole catalog — and retry.
		await refreshCatalog(api, ctx, selector.includes("/") ? selector.split("/")[0] : undefined);
		model = ctx.models.resolve(selector);
	}
	if (!model) {
		api.logger.warn("Directory model is not available", { selector, cwd: ctx.cwd });
		return;
	}
	await api.setModel(model);
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

				// A typed spec resolves against the refreshed catalog, so it cannot pick
				// an older model when a newer one was published after launch. The picker
				// opens at once and refreshes behind itself.
				const model = spec
					? await refreshCatalog(api, ctx).then(() => ctx.models.resolve(spec))
					: await pick(api, ctx);
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
