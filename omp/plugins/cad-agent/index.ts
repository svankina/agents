import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";

// Explicitly loaded by cad-agent; never changes unrelated OMP sessions.
export default function cadAgent(pi: ExtensionAPI) {
  pi.setLabel("CAD");
  const setup = async (ctx: ExtensionContext) => {
    await pi.setSessionName("CAD");
    ctx.ui.setWidget("cad-agent", [
      "CAD · persistent mechanical CAD agent",
      `Model: ${ctx.model?.provider}/${ctx.model?.id}`,
      "Parts, assemblies, fit checks and fabrication preparation. Send a request here or through Conversation.",
    ]);
  };
  pi.on("session_start", (_event, ctx) => setup(ctx));
  pi.on("session_switch", (_event, ctx) => setup(ctx));
}
