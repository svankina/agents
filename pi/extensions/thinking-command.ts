import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import type { AutocompleteItem } from "@earendil-works/pi-tui";
import { readGlobalDefaultsSnapshot, restoreGlobalDefaultsAfterPiWrite, updateFolderAgentConfig } from "./agent-folder-config.ts";

const aliases = {
  none: "off",
  low: "low",
  medium: "medium",
  high: "high",
  xhigh: "xhigh",
} as const;

type ThinkingAlias = keyof typeof aliases;
const choices = Object.keys(aliases) as ThinkingAlias[];

function report(ctx: { hasUI?: boolean; ui: { notify: (message: string, type?: "info" | "warning" | "error") => void } }, message: string, type: "info" | "error" = "info") {
  try {
    ctx.ui.notify(message, type);
  } catch (error) {
    console.error(`[thinking] notify failed: ${error instanceof Error ? error.message : String(error)}`);
  }

  // In print/non-interactive mode, ctx.ui.notify() is not visible to the caller.
  // Also write to stderr so command failures/status are not silent.
  if (!ctx.hasUI) {
    console.error(message);
  }
}

export default function (pi: ExtensionAPI) {
  pi.registerCommand("thinking", {
    description: "Set thinking level: none|low|medium|high|xhigh",
    getArgumentCompletions: (prefix: string): AutocompleteItem[] | null => {
      const normalized = prefix.trim().toLowerCase();
      const items = choices
        .filter((choice) => choice.startsWith(normalized))
        .map((choice) => ({
          value: choice,
          label: choice,
        }));
      return items.length > 0 ? items : null;
    },
    handler: async (args, ctx) => {
      const requested = args.trim().toLowerCase();

      if (!requested) {
        const current = pi.getThinkingLevel();
        const display = current === "off" ? "none" : current;
        report(ctx, `Current thinking level: ${display}`, "info");
        return;
      }

      if (!(requested in aliases)) {
        report(ctx, `Usage: /thinking ${choices.join("|")}`, "error");
        return;
      }

      const level = aliases[requested as ThinkingAlias];
      const globalDefaults = readGlobalDefaultsSnapshot();
      pi.setThinkingLevel(level);

      const actual = pi.getThinkingLevel();
      updateFolderAgentConfig(ctx.cwd, { thinkingLevel: actual, defaultThinkingLevel: undefined }, ctx.ui);
      await restoreGlobalDefaultsAfterPiWrite(globalDefaults, ["defaultThinkingLevel"]);

      const display = actual === "off" ? "none" : actual;
      const note = actual === level ? "" : ` (clamped by current model from ${requested})`;
      report(ctx, `Thinking level set to ${display}${note}`, "info");
    },
  });
}
