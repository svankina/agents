/**
 * quit-session — lets the agent end the omp session itself, vim-:wq style.
 *
 * Registers a `quit_session` tool whose execute() calls ctx.shutdown().
 * In interactive mode that only sets `shutdownRequested`; the main loop
 * performs the actual teardown at the next idle boundary — after the current
 * turn's final reply has been delivered (see extension-ui-controller.ts,
 * "Defer the actual teardown to the main loop"). So calling it mid-turn is
 * exactly right: reply streams first, then the session exits like /quit.
 * Used by the /wrapup and /wq commands: post agent-status, call quit_session,
 * reply. /wq additionally passes kill_terminal: true, which spawns a detached
 * watcher that waits for this omp process to exit and then SIGHUPs its parent
 * (the launching shell), closing the terminal window / tmux pane too.
 * Loaded via `extensions: [~/src/agents/omp/extensions]` in each profile's config.yml.
 */
import { spawn } from "node:child_process";
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";

export default function quitSession(pi: ExtensionAPI) {
	pi.setLabel("Quit Session");

	const { z } = pi.zod;
	pi.registerTool({
		name: "quit_session",
		label: "Quit Session",
		description:
			"End this omp session gracefully after the current turn's final reply is delivered. " +
			"Call ONLY when the user explicitly asked to end the session (e.g. /wrapup, /wq), " +
			"as your last tool call before the final reply. " +
			"Set kill_terminal: true (used by /wq) to also close the parent terminal after omp exits.",
		parameters: z.object({
			kill_terminal: z
				.boolean()
				.optional()
				.describe("After omp exits, SIGHUP the parent shell so the terminal window/pane closes too."),
		}),
		async execute(_id, params, _signal, _onUpdate, ctx) {
			if (params.kill_terminal) {
				const ppid = process.ppid;
				if (ppid > 1) {
					// Detached watcher: outlives omp, waits for it to exit, then
					// HUPs the parent shell. HUP (not TERM) so the shell tears
					// down like a closed terminal would.
					spawn(
						"bash",
						["-c", `while kill -0 ${process.pid} 2>/dev/null; do sleep 0.2; done; kill -HUP ${ppid} 2>/dev/null`],
						{ detached: true, stdio: "ignore" },
					).unref();
				}
			}
			ctx.shutdown();
			return {
				content: [
					{
						type: "text",
						text:
							"Session will exit once this turn settles." +
							(params.kill_terminal ? " Parent terminal will be closed after exit." : "") +
							" Deliver your final reply now.",
					},
				],
			};
		},
	});
}
