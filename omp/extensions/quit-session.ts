/**
 * quit-session — lets the agent end the omp session itself, vim-:wq style.
 *
 * Registers a `quit_session` tool whose execute() calls ctx.shutdown().
 * In interactive mode that only sets `shutdownRequested`; the main loop
 * performs the actual teardown at the next idle boundary — after the current
 * turn's final reply has been delivered (see extension-ui-controller.ts,
 * "Defer the actual teardown to the main loop"). So calling it mid-turn is
 * exactly right: reply streams first, then the session exits like /quit.
 *
 * Used by the /wrapup command: post agent-status, call quit_session, reply.
 * Loaded via `extensions: [~/src/agents/omp/extensions]` in each profile's config.yml.
 */
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";

export default function quitSession(pi: ExtensionAPI) {
	pi.setLabel("Quit Session");

	const { z } = pi.zod;
	pi.registerTool({
		name: "quit_session",
		label: "Quit Session",
		description:
			"End this omp session gracefully after the current turn's final reply is delivered. " +
			"Call ONLY when the user explicitly asked to end the session (e.g. /wrapup), " +
			"as your last tool call before the final reply.",
		parameters: z.object({}),
		async execute(_id, _params, _signal, _onUpdate, ctx) {
			ctx.shutdown();
			return {
				content: [
					{ type: "text", text: "Session will exit once this turn settles. Deliver your final reply now." },
				],
			};
		},
	});
}
