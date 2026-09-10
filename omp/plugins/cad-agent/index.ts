import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";

const IDENTITY = "CAD · parts, assemblies, fit checks, fabrication preparation";
const IDLE = "Idle · no requests yet — send one here or through Conversation";

/** One line, bounded: a widget line that wraps costs pane height every repaint. */
function collapse(said: string): string {
  const line = said.replace(/\s+/g, " ").trim();
  return line.length > 92 ? `${line.slice(0, 91)}\u2026` : line;
}

/** The newest user request in this conversation, for a resumed dock.
    Session entries cross a plugin boundary, so they are narrowed, not cast. */
function lastRequest(ctx: ExtensionContext): string {
  const branch: readonly unknown[] = ctx.sessionManager.getBranch();
  for (let index = branch.length - 1; index >= 0; index -= 1) {
    const entry = branch[index];
    if (!entry || typeof entry !== "object" || !("message" in entry)) continue;
    const message = entry.message;
    if (!message || typeof message !== "object" || !("role" in message) || message.role !== "user") continue;
    const content = "content" in message ? message.content : undefined;
    const parts = typeof content === "string"
      ? [content]
      : Array.isArray(content)
        ? content.map(part => (part && typeof part === "object" && "text" in part && typeof part.text === "string" ? part.text : ""))
        : [];
    const said = collapse(parts.join(" "));
    if (said) return said;
  }
  return "";
}

// Explicitly loaded by cad-agent; never changes unrelated OMP sessions.
export default function cadAgent(pi: ExtensionAPI) {
  pi.setLabel("CAD");
  // The submitted prompt reaches the pane before the turn does: `input` fires
  // ahead of `turn_start`, and the session branch does not carry the user
  // message until `turn_end`. A resumed dock reads it back off the branch.
  let request = "";
  // Two lines only: the model and the run state are already on the Herd dock
  // row, its profile header and the OMP footer. The second line is the one
  // fact none of them carries -- what this agent was last asked for.
  const widget = (ctx: ExtensionContext, working: boolean) => {
    ctx.ui.setWidget("cad-agent", [
      IDENTITY,
      request ? (working ? `Working \u00b7 ${request}` : `Idle \u00b7 last: ${request}`) : working ? "Working" : IDLE,
    ]);
  };
  const setup = async (ctx: ExtensionContext) => {
    await pi.setSessionName("CAD");
    request = lastRequest(ctx);
    widget(ctx, false);
  };
  pi.on("session_start", (_event, ctx) => setup(ctx));
  pi.on("session_switch", (_event, ctx) => setup(ctx));
  pi.on("input", (event, ctx) => {
    if (event.text.trim()) {
      request = collapse(event.text);
      widget(ctx, true);
    }
  });
  pi.on("turn_start", (_event, ctx) => { widget(ctx, true); });
  pi.on("turn_end", (_event, ctx) => { widget(ctx, false); });
}
