// agent-folder: per-folder model / thinking-level / fast-mode for omp (Oh My Pi).
//
// Mirrors the pi `agent-folder-config` workflow on omp. omp already applies
// `<cwd>/.omp/settings.json` (modelRoles.default, defaultThinkingLevel,
// serviceTier) natively when launched *from that folder* — but only the cwd,
// never an ancestor. This extension adds the two things native omp lacks:
//
//   1. ancestor-walk: when you launch omp from a subdirectory, it finds the
//      nearest ancestor `.omp/settings.json` and applies the model + thinking
//      level it declares (the cwd case is already handled natively).
//   2. slash commands to *save* the current session's settings into the folder
//      file, so you don't hand-edit JSON: `/folder save|model|thinking|fast`.
//
// Storage is the native `<folder>/.omp/settings.json`, so everything keeps
// working even with this extension disabled — omp reads it on launch.
//
// Limitation (omp API, not a bug): the extension API exposes setModel /
// setThinkingLevel but NOT service-tier. So `/folder fast` only *persists*
// serviceTier to the folder file; it takes effect the next time you launch omp
// from that folder. For a live toggle in the current session use the built-in
// `/fast`. At folder root, native config applies serviceTier on launch anyway.

import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";

const CONFIG_SUBDIR = ".omp";
const CONFIG_FILE = "settings.json";

type FolderSettings = {
	modelRoles?: { default?: string } & Record<string, unknown>;
	defaultThinkingLevel?: string;
	serviceTier?: string;
	[k: string]: unknown;
};

// Canonical thinking selectors (mirror @oh-my-pi/pi-agent-core ThinkingLevel).
type ApplicableThinkingLevel = "off" | "minimal" | "low" | "medium" | "high" | "xhigh";
type ThinkingChoice = ApplicableThinkingLevel | "inherit" | "auto";

// Friendly aliases -> canonical selector.
const THINKING_ALIASES: Record<string, ThinkingChoice> = {
	off: "off",
	none: "off",
	min: "minimal",
	minimal: "minimal",
	low: "low",
	med: "medium",
	medium: "medium",
	high: "high",
	xhigh: "xhigh",
	max: "xhigh",
	auto: "auto",
	inherit: "inherit",
};

// Type guard: only these can be applied live via pi.setThinkingLevel.
function isApplicableThinkingLevel(value: string): value is ApplicableThinkingLevel {
	return (
		value === "off" ||
		value === "minimal" ||
		value === "low" ||
		value === "medium" ||
		value === "high" ||
		value === "xhigh"
	);
}

function configPathFor(dir: string): string {
	return join(dir, CONFIG_SUBDIR, CONFIG_FILE);
}

/** Nearest dir at or above `from` that has a `.omp/settings.json`, else undefined. */
function findNearestConfigDir(from: string): string | undefined {
	const stop = homedir();
	let dir = from;
	for (;;) {
		if (existsSync(configPathFor(dir))) return dir;
		if (dir === stop || dir === "/") return undefined;
		const parent = dirname(dir);
		if (parent === dir) return undefined;
		dir = parent;
	}
}

function readSettings(path: string): FolderSettings {
	try {
		if (!existsSync(path)) return {};
		const parsed = JSON.parse(readFileSync(path, "utf8"));
		return parsed && typeof parsed === "object" ? (parsed as FolderSettings) : {};
	} catch {
		return {};
	}
}

function writeSettings(dir: string, patch: (s: FolderSettings) => void): string {
	const path = configPathFor(dir);
	mkdirSync(dirname(path), { recursive: true });
	const settings = readSettings(path);
	patch(settings);
	writeFileSync(path, `${JSON.stringify(settings, null, 2)}\n`);
	return path;
}

export default function agentFolder(pi: ExtensionAPI): void {
	// --- session_start: ancestor-walk apply (subdir-launch case) -------------
	pi.on("session_start", async (_event, ctx) => {
		try {
			const dir = findNearestConfigDir(ctx.cwd);
			// cwd itself is already handled natively by omp's project config load;
			// only step in when the config lives in a strict ancestor.
			if (!dir || dir === ctx.cwd) return;
			const settings = readSettings(configPathFor(dir));
			const applied: string[] = [];

			const modelSpec = settings.modelRoles?.default;
			if (typeof modelSpec === "string" && modelSpec) {
				const model = ctx.models.resolve(modelSpec);
				if (model && (await pi.setModel(model))) applied.push(`model=${modelSpec}`);
			}

			const level = settings.defaultThinkingLevel;
			if (typeof level === "string" && isApplicableThinkingLevel(level)) {
				pi.setThinkingLevel(level);
				applied.push(`thinking=${level}`);
			}

			if (applied.length) {
				let msg = `agent-folder: applied ${applied.join(", ")} from ${dir}/.omp/settings.json`;
				if (settings.serviceTier && settings.serviceTier !== "none") {
					msg += ` (serviceTier=${settings.serviceTier} only applies when launched from that folder)`;
				}
				ctx.ui.notify(msg, "info");
			}
		} catch (err) {
			ctx.ui.notify(`agent-folder: ${err instanceof Error ? err.message : String(err)}`, "warning");
		}
	});

	// --- /folder command -----------------------------------------------------
	pi.registerCommand("folder", {
		description: "Save/apply per-folder model, thinking level, and fast mode (.omp/settings.json)",
		handler: async (args, ctx) => {
			const [sub, ...rest] = args.trim().split(/\s+/).filter(Boolean);
			const arg = rest.join(" ").trim();
			const cwd = ctx.cwd;

			switch ((sub ?? "show").toLowerCase()) {
				case "show": {
					const dir = findNearestConfigDir(cwd);
					if (!dir) {
						ctx.ui.notify(`agent-folder: no .omp/settings.json at or above ${cwd}`, "info");
						return;
					}
					const s = readSettings(configPathFor(dir));
					const lines = [
						`folder config: ${configPathFor(dir)}`,
						`  model:    ${s.modelRoles?.default ?? "(unset)"}`,
						`  thinking: ${s.defaultThinkingLevel ?? "(unset)"}`,
						`  fast:     ${s.serviceTier && s.serviceTier !== "none" ? s.serviceTier : "off"}`,
					];
					ctx.ui.notify(lines.join("\n"), "info");
					return;
				}

				case "save": {
					const model = ctx.model ? `${ctx.model.provider}/${ctx.model.id}` : undefined;
					const level = pi.getThinkingLevel();
					const path = writeSettings(cwd, s => {
						if (model) s.modelRoles = { ...(s.modelRoles ?? {}), default: model };
						if (level) s.defaultThinkingLevel = level;
					});
					ctx.ui.notify(
						`agent-folder: saved ${model ? `model=${model} ` : ""}${level ? `thinking=${level} ` : ""}-> ${path}`,
						"info",
					);
					return;
				}

				case "model": {
					if (!arg) {
						ctx.ui.notify("usage: /folder model <provider/id | role>", "warning");
						return;
					}
					const model = ctx.models.resolve(arg);
					if (!model) {
						ctx.ui.notify(`agent-folder: could not resolve model "${arg}"`, "error");
						return;
					}
					const ok = await pi.setModel(model);
					const spec = `${model.provider}/${model.id}`;
					const path = writeSettings(cwd, s => {
						s.modelRoles = { ...(s.modelRoles ?? {}), default: spec };
					});
					ctx.ui.notify(
						`agent-folder: ${ok ? "applied + " : "(no api key, but) "}saved model=${spec} -> ${path}`,
						ok ? "info" : "warning",
					);
					return;
				}

				case "thinking": {
					const canon = THINKING_ALIASES[arg.toLowerCase()];
					if (!canon) {
						ctx.ui.notify("usage: /folder thinking off|minimal|low|medium|high|xhigh|auto", "warning");
						return;
					}
					if (isApplicableThinkingLevel(canon)) pi.setThinkingLevel(canon);
					const path = writeSettings(cwd, s => {
						s.defaultThinkingLevel = canon;
					});
					const note = canon === "auto" ? " (auto applies on next launch from this folder)" : "";
					ctx.ui.notify(`agent-folder: saved thinking=${canon} -> ${path}${note}`, "info");
					return;
				}

				case "fast": {
					const on = /^(on|true|1|yes|priority)$/i.test(arg);
					const off = /^(off|false|0|no|none)$/i.test(arg);
					if (!on && !off) {
						ctx.ui.notify("usage: /folder fast on|off", "warning");
						return;
					}
					const path = writeSettings(cwd, s => {
						s.serviceTier = on ? "priority" : "none";
					});
					ctx.ui.notify(
						`agent-folder: saved fast=${on ? "on" : "off"} -> ${path}\n` +
							"applies next time you launch omp from this folder; for the current session use /fast",
						"info",
					);
					return;
				}

				case "clear": {
					const path = writeSettings(cwd, s => {
						delete s.modelRoles;
						delete s.defaultThinkingLevel;
						delete s.serviceTier;
					});
					ctx.ui.notify(`agent-folder: cleared model/thinking/fast in ${path}`, "info");
					return;
				}

				default:
					ctx.ui.notify(
						"usage: /folder [show|save|model <m>|thinking <lvl>|fast on|off|clear]",
						"warning",
					);
			}
		},
	});
}
