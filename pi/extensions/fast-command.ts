import type { ExtensionAPI, ExtensionContext } from "@earendil-works/pi-coding-agent";
import type { AutocompleteItem } from "@earendil-works/pi-tui";
import { getFastMode, loadFolderAgentConfig, updateFolderAgentConfig } from "./agent-folder-config.ts";

const choices = ["on", "off", "toggle", "status"] as const;

type FastModeChoice = (typeof choices)[number];
type NotifyContext = { hasUI?: boolean; ui: { notify: (message: string, type?: "info" | "warning" | "error") => void } };
type FastStatusContext = Pick<ExtensionContext, "hasUI" | "ui">;

function notify(ctx: NotifyContext, message: string, type: "info" | "error" = "info") {
  try {
    ctx.ui.notify(message, type);
  } catch (error) {
    console.error(`[fast] notify failed: ${error instanceof Error ? error.message : String(error)}`);
  }

  // In print/non-interactive mode, ctx.ui.notify() is not visible to the caller.
  if (!ctx.hasUI) {
    console.error(message);
  }
}

function isOpenAIFastCandidate(provider: string | undefined, modelId: string | undefined): boolean {
  const providerName = (provider || "").toLowerCase();
  const raw = (modelId || "").toLowerCase();
  const base = raw.includes("/") ? raw.split("/").pop()! : raw;

  // OpenAI/Codex fast mode is Priority Processing:
  // request field service_tier="priority".
  // Pi's OpenAI and OpenAI Codex Responses providers forward service_tier in
  // the provider payload and account for priority service-tier pricing.
  if (providerName === "openai-codex") return true;
  if (providerName === "openai" || providerName === "azure-openai-responses") {
    return base.startsWith("gpt-") || base.startsWith("o1") || base.startsWith("o3") || base.startsWith("o4");
  }
  return false;
}

function status(ctx: FastStatusContext, enabled: boolean): void {
  if (!ctx.hasUI) return;
  const color = enabled ? "accent" : "dim";
  ctx.ui.setStatus("fast", ctx.ui.theme.fg(color, `fast ${enabled ? "on" : "off"}`));
}

export default function fastCommand(pi: ExtensionAPI) {
  let fastModeEnabled = false;
  let fastModeLoaded = false;

  function refreshFastMode(ctx: Pick<ExtensionContext, "cwd" | "hasUI" | "ui">): boolean {
    fastModeEnabled = getFastMode(loadFolderAgentConfig(ctx.cwd, ctx.ui));
    fastModeLoaded = true;
    status(ctx, fastModeEnabled);
    return fastModeEnabled;
  }

  pi.on("session_start", (_event, ctx) => {
    refreshFastMode(ctx);
  });

  pi.registerCommand("fast", {
    description: "Toggle cwd agent.json OpenAI/Codex Priority Processing fast mode: on|off|toggle|status",
    getArgumentCompletions: (prefix: string): AutocompleteItem[] | null => {
      const normalized = prefix.trim().toLowerCase();
      const items = choices
        .filter((choice) => choice.startsWith(normalized))
        .map((choice) => ({ value: choice, label: choice }));
      return items.length > 0 ? items : null;
    },
    handler: async (args, ctx) => {
      const arg = (args.trim().toLowerCase() || "toggle") as FastModeChoice;
      if (!choices.includes(arg)) {
        notify(ctx, "Usage: /fast [on|off|toggle|status]", "error");
        return;
      }

      const current = fastModeLoaded ? fastModeEnabled : refreshFastMode(ctx);
      if (arg === "status") {
        notify(ctx, `Fast mode is ${current ? "on" : "off"} for ${ctx.cwd}`, "info");
        return;
      }

      const enabled = arg === "toggle" ? !current : arg === "on";
      if (!updateFolderAgentConfig(ctx.cwd, { fastMode: enabled }, ctx.ui)) {
        notify(ctx, `Fast mode unchanged: could not update agent.json in ${ctx.cwd}`, "error");
        return;
      }
      fastModeEnabled = enabled;
      fastModeLoaded = true;
      status(ctx, enabled);
      notify(ctx, `Fast mode ${enabled ? "on" : "off"} for ${ctx.cwd}`, "info");
    },
  });

  pi.on("before_provider_request", (event, ctx) => {
    if (!fastModeLoaded) refreshFastMode(ctx);
    if (!fastModeEnabled) return;
    if (!isOpenAIFastCandidate(ctx.model?.provider, ctx.model?.id)) return;
    if (!event.payload || typeof event.payload !== "object" || Array.isArray(event.payload)) return;

    return {
      ...event.payload,
      service_tier: "priority",
    };
  });
}
