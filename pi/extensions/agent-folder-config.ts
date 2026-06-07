import type { ExtensionContext } from "@earendil-works/pi-coding-agent";
import type { Model, ThinkingLevel } from "@earendil-works/pi-ai";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

export const CONFIG_FILE_NAME = "agent.json";

export type RawThinkingLevel = ThinkingLevel | "none";

export type FolderAgentConfig = {
  model?: string;
  provider?: string;
  defaultModel?: string;
  thinkingLevel?: RawThinkingLevel;
  defaultThinkingLevel?: RawThinkingLevel;
  fastMode?: boolean;
  fast?: boolean;
};

type Notifier = { notify: (message: string, type?: "info" | "warning" | "error") => void };

type ModelResolution = {
  model?: Model;
  token?: string;
  ambiguous?: boolean;
};

export type GlobalDefaultField = "defaultProvider" | "defaultModel" | "defaultThinkingLevel";

export type GlobalDefaultsSnapshot = {
  valid: boolean;
  path: string;
  values: Partial<Record<GlobalDefaultField, unknown>>;
  present: Record<GlobalDefaultField, boolean>;
};

export function folderAgentConfigPath(folder: string): string {
  return join(folder, CONFIG_FILE_NAME);
}

export function loadFolderAgentConfig(folder: string, notifier?: Notifier): FolderAgentConfig | undefined {
  const configPath = folderAgentConfigPath(folder);
  if (!existsSync(configPath)) {
    return undefined;
  }

  try {
    const parsed = JSON.parse(readFileSync(configPath, "utf8")) as FolderAgentConfig;
    return parsed;
  } catch {
    notifier?.notify(`Unable to parse ${CONFIG_FILE_NAME} in ${folder}. Expected valid JSON.`, "warning");
    return undefined;
  }
}

function loadMutableFolderAgentConfig(folder: string, notifier?: Notifier): Record<string, unknown> | undefined {
  const configPath = folderAgentConfigPath(folder);
  if (!existsSync(configPath)) {
    return {};
  }

  try {
    return JSON.parse(readFileSync(configPath, "utf8")) as Record<string, unknown>;
  } catch {
    notifier?.notify(`Unable to update ${CONFIG_FILE_NAME} in ${folder}: file is not valid JSON.`, "warning");
    return undefined;
  }
}

export function updateFolderAgentConfig(
  folder: string,
  patch: Record<string, unknown>,
  notifier?: Notifier,
): boolean {
  const config = loadMutableFolderAgentConfig(folder, notifier);
  if (!config) return false;

  let changed = false;
  for (const [key, value] of Object.entries(patch)) {
    if (value === undefined) {
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        delete config[key];
        changed = true;
      }
    } else if (!Object.is(config[key], value)) {
      config[key] = value;
      changed = true;
    }
  }

  if (!changed) return true;

  try {
    writeFileSync(folderAgentConfigPath(folder), `${JSON.stringify(config, null, 2)}\n`);
    return true;
  } catch (error) {
    notifier?.notify(
      `Unable to update ${CONFIG_FILE_NAME} in ${folder}: ${error instanceof Error ? error.message : String(error)}`,
      "warning",
    );
    return false;
  }
}

export function normalizeThinkingLevel(level?: RawThinkingLevel): ThinkingLevel | undefined {
  if (!level) return undefined;

  if (level === "none") return "off";
  if (["off", "minimal", "low", "medium", "high", "xhigh"].includes(level)) {
    return level;
  }

  return undefined;
}

export function resolveModel(ctx: ExtensionContext, config: FolderAgentConfig): ModelResolution {
  const token = (config.model ?? config.defaultModel)?.trim();
  if (!token) {
    return {};
  }

  if (token.includes("/")) {
    const [provider, ...modelParts] = token.split("/");
    if (!provider || modelParts.length === 0) {
      return { token };
    }
    return {
      token,
      model: ctx.modelRegistry.find(provider, modelParts.join("/")),
    };
  }

  if (config.provider) {
    const model = ctx.modelRegistry.find(config.provider.trim(), token);
    return { token, model };
  }

  const matches = ctx.modelRegistry.getAll().filter((model) => model.id === token);
  if (matches.length === 1) {
    return { token, model: matches[0] };
  }

  return {
    token,
    ambiguous: matches.length > 1,
  };
}

export function getFastMode(config: FolderAgentConfig | undefined): boolean {
  return config?.fastMode === true || config?.fast === true;
}

export function readGlobalDefaultsSnapshot(): GlobalDefaultsSnapshot {
  const path = join(homedir(), ".pi", "agent", "settings.json");
  const fields: GlobalDefaultField[] = ["defaultProvider", "defaultModel", "defaultThinkingLevel"];
  const emptyPresent = { defaultProvider: false, defaultModel: false, defaultThinkingLevel: false };

  if (!existsSync(path)) {
    return { valid: true, path, values: {}, present: emptyPresent };
  }

  try {
    const parsed = JSON.parse(readFileSync(path, "utf8")) as Record<string, unknown>;
    const values: Partial<Record<GlobalDefaultField, unknown>> = {};
    const present = { ...emptyPresent };
    for (const field of fields) {
      if (Object.prototype.hasOwnProperty.call(parsed, field)) {
        values[field] = parsed[field];
        present[field] = true;
      }
    }
    return { valid: true, path, values, present };
  } catch {
    return { valid: false, path, values: {}, present: emptyPresent };
  }
}

export function restoreGlobalDefaults(snapshot: GlobalDefaultsSnapshot, fields?: GlobalDefaultField[]): boolean {
  if (!snapshot.valid) return false;

  let parsed: Record<string, unknown> = {};
  if (existsSync(snapshot.path)) {
    try {
      parsed = JSON.parse(readFileSync(snapshot.path, "utf8")) as Record<string, unknown>;
    } catch {
      return false;
    }
  }

  const restoreFields = fields ?? ["defaultProvider", "defaultModel", "defaultThinkingLevel"];
  let changed = false;
  for (const field of restoreFields) {
    if (snapshot.present[field]) {
      if (!Object.is(parsed[field], snapshot.values[field])) {
        parsed[field] = snapshot.values[field];
        changed = true;
      }
    } else if (Object.prototype.hasOwnProperty.call(parsed, field)) {
      delete parsed[field];
      changed = true;
    }
  }

  if (!changed) return true;

  try {
    writeFileSync(snapshot.path, `${JSON.stringify(parsed, null, 2)}\n`);
    return true;
  } catch {
    return false;
  }
}

export async function restoreGlobalDefaultsAfterPiWrite(
  snapshot: GlobalDefaultsSnapshot,
  fields?: GlobalDefaultField[],
): Promise<boolean> {
  await Promise.resolve();
  await new Promise((resolve) => setTimeout(resolve, 0));
  return restoreGlobalDefaults(snapshot, fields);
}

// This module is a shared library for the agent-folder-config extensions
// (agent-folder-session, fast-command, thinking-command import its helpers),
// but it lives in the auto-discovered extensions directory, where pi loads
// every .ts file and requires each to export a factory function. Export a
// no-op factory so the loader accepts it instead of failing the whole session
// with "Extension does not export a valid factory function".
export default function agentFolderConfig(): void {}
