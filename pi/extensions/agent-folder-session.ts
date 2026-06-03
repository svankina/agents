import type { ExtensionAPI, ExtensionContext } from "@earendil-works/pi-coding-agent";
import {
  CONFIG_FILE_NAME,
  loadFolderAgentConfig,
  normalizeThinkingLevel,
  readGlobalDefaultsSnapshot,
  resolveModel,
  restoreGlobalDefaultsAfterPiWrite,
  updateFolderAgentConfig,
} from "./agent-folder-config.ts";

export default function agentFolderSession(pi: ExtensionAPI) {
  let applyingFolderConfig = false;

  async function applyFolderConfig(ctx: ExtensionContext): Promise<void> {
    const folderConfig = loadFolderAgentConfig(ctx.cwd, ctx.ui);
    if (!folderConfig) return;

    const resolution = resolveModel(ctx, folderConfig);
    const thinkingLevel = normalizeThinkingLevel(folderConfig.thinkingLevel ?? folderConfig.defaultThinkingLevel);
    const shouldSetModel = Boolean(
      resolution.model && (ctx.model?.provider !== resolution.model.provider || ctx.model?.id !== resolution.model.id),
    );
    const shouldSetThinking = Boolean(thinkingLevel && pi.getThinkingLevel() !== thinkingLevel);

    if (shouldSetModel || shouldSetThinking) {
      const globalDefaults = readGlobalDefaultsSnapshot();
      let touchedGlobalDefaults = false;
      applyingFolderConfig = true;
      try {
        if (shouldSetModel && resolution.model) {
          const ok = await pi.setModel(resolution.model);
          if (ok) {
            touchedGlobalDefaults = true;
          } else {
            ctx.ui.notify(`Could not switch model to ${resolution.model.provider}/${resolution.model.id}: missing auth`, "warning");
          }
        }

        if (shouldSetThinking && thinkingLevel) {
          pi.setThinkingLevel(thinkingLevel);
          touchedGlobalDefaults = true;
        }

        if (touchedGlobalDefaults) {
          await restoreGlobalDefaultsAfterPiWrite(globalDefaults);
        }
      } finally {
        applyingFolderConfig = false;
      }
    } else if (resolution.token && !resolution.model) {
      const warning = resolution.ambiguous
        ? `Multiple models named "${resolution.token}" found. Set explicit provider in ${CONFIG_FILE_NAME}.`
        : `Unknown model "${resolution.token}" in ${CONFIG_FILE_NAME}.`;
      ctx.ui.notify(warning, "warning");
    }
  }

  pi.on("session_start", async (_event, ctx) => {
    await applyFolderConfig(ctx);
  });

  pi.on("model_select", async (event, ctx) => {
    if (event.source === "restore" || applyingFolderConfig) return;

    const globalDefaults = readGlobalDefaultsSnapshot();
    updateFolderAgentConfig(
      ctx.cwd,
      {
        provider: event.model.provider,
        model: event.model.id,
        defaultModel: undefined,
      },
      ctx.ui,
    );

    await restoreGlobalDefaultsAfterPiWrite(globalDefaults, ["defaultProvider", "defaultModel", "defaultThinkingLevel"]);
  });

  pi.on("thinking_level_select", async (event, ctx) => {
    if (applyingFolderConfig) return;

    const globalDefaults = readGlobalDefaultsSnapshot();
    updateFolderAgentConfig(ctx.cwd, { thinkingLevel: event.level, defaultThinkingLevel: undefined }, ctx.ui);
    await restoreGlobalDefaultsAfterPiWrite(globalDefaults, ["defaultThinkingLevel"]);
  });
}
