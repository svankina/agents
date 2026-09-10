/**
 * quit-session — lets the agent end the omp session itself, vim-:wq style.
 *
 * Registers a `quit_session` tool whose execute() calls ctx.shutdown().
 * In interactive mode this requests teardown at the next drained idle
 * boundary. The runtime's event subscription covers user, initial-prompt,
 * and background/peer turns; it waits for final output and scheduled
 * continuations before exiting. Calling it mid-turn is exactly right:
 * reply streams first, then the session exits like /quit.
 * Used by the /wrapup and /wq commands: call quit_session, then reply.
 * /wq additionally passes kill_terminal: true. On Linux, a detached watcher
 * closes a positively identified parent shell after omp exits. Both process
 * start times and the shell executable are fenced so a supervisor, reused
 * PID, or replacement process is never intentionally signaled.
 * If parent identity cannot be verified, only omp exits.
 * Loaded via `extensions: [~/src/agents/omp/extensions]` in each profile's config.yml.
 */
import { spawn } from "node:child_process";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";

const SHELLS: Record<string, true> = {
	sh: true,
	bash: true,
	dash: true,
	zsh: true,
	fish: true,
	ksh: true,
	mksh: true,
	csh: true,
	tcsh: true,
	nu: true,
};
// pidfds refer to the original processes even after PID reuse. Python's stdlib
// exposes these Linux syscalls; unavailable support fails closed before "ready".
const TERMINAL_WATCHER = `
import os, select, signal, sys
own_pid, own_start, parent_pid, parent_start, executable = sys.argv[1:]
send_signal = signal.pidfd_send_signal
own_pid, parent_pid = int(own_pid), int(parent_pid)
def same_process(pid, start, exe=None):
    try:
        with open(f"/proc/{pid}/stat") as stat:
            matches = stat.read().rsplit(")", 1)[1].split()[19] == start
        return matches and (exe is None or os.path.samefile(f"/proc/{pid}/exe", exe))
    except (OSError, IndexError):
        return False
own_fd = os.pidfd_open(own_pid)
parent_fd = os.pidfd_open(parent_pid)
if not same_process(own_pid, own_start) or not same_process(parent_pid, parent_start, executable):
    sys.exit(1)
print("ready", flush=True)
sys.stdout.close()
select.select([own_fd], [], [])
if same_process(parent_pid, parent_start, executable):
    try:
        send_signal(parent_fd, signal.SIGHUP)
    except ProcessLookupError:
        pass
`;

export const description =
	"Gives the agent a `quit_session` tool so it can end the session itself (`/wrapup`, `/wq`).";

export default function quitSession(pi: ExtensionAPI) {
	pi.setLabel("Quit Session");
	let terminalWatcherScheduled = false;

	const { z } = pi.zod;
	pi.registerTool({
		name: "quit_session",
		label: "Quit Session",
		description:
			"End this omp session gracefully after the current turn's final reply is delivered. " +
			"Call ONLY when the user explicitly asked to end the session (e.g. /wrapup, /wq), " +
			"as your last tool call before the final reply. " +
			"Set kill_terminal: true (used by /wq) to also close a safely verified parent shell after omp exits.",
		parameters: z.object({
			kill_terminal: z
				.boolean()
				.optional()
				.describe(
					"After omp exits, SIGHUP its parent shell only if its process identity can be safely verified.",
				),
		}),
		async execute(_id, params, _signal, _onUpdate, ctx) {
			let terminalNotice = "";
			if (params.kill_terminal) {
				if (
					!terminalWatcherScheduled &&
					process.platform === "linux" &&
					process.ppid > 1
				) {
					const ppid = process.ppid;
					try {
						const [ownStat, parentStat, parentExecutable] = await Promise.all([
							fs.readFile(`/proc/${process.pid}/stat`, "utf8"),
							fs.readFile(`/proc/${ppid}/stat`, "utf8"),
							fs.readlink(`/proc/${ppid}/exe`),
						]);
						// /proc comm may contain spaces and ')'; fields after its last
						// closing parenthesis begin at field 3. Start time is field 22.
						const startTimes = [ownStat, parentStat].map(
							(stat) =>
								stat
									.slice(stat.lastIndexOf(")") + 2)
									.trim()
									.split(/\s+/)[19],
						);
						if (
							SHELLS[path.basename(parentExecutable)] === true &&
							startTimes.every(
								(start) => start !== undefined && /^\d+$/.test(start),
							)
						) {
							const watcher = spawn(
								"python3",
								[
									"-c",
									TERMINAL_WATCHER,
									String(process.pid),
									startTimes[0]!,
									String(ppid),
									startTimes[1]!,
									parentExecutable,
								],
								{ detached: true, stdio: ["ignore", "pipe", "ignore"] },
							);
							const armed = Promise.withResolvers<void>();
							watcher.stdout?.once("data", (data) => {
								if (String(data).trim() === "ready") armed.resolve();
								else armed.reject(new Error("Terminal watcher did not arm"));
							});
							watcher.once("error", armed.reject);
							watcher.once("exit", () =>
								armed.reject(
									new Error("Terminal watcher exited before arming"),
								),
							);
							const timeout = setTimeout(() => {
								watcher.kill();
								armed.reject(new Error("Terminal watcher arming timed out"));
							}, 2000);
							try {
								await armed.promise;
							} finally {
								clearTimeout(timeout);
								watcher.stdout?.destroy();
							}
							watcher.unref();
							terminalWatcherScheduled = true;
						}
					} catch {
						// Verification/spawn failure must not signal an unknown supervisor
						// or prevent the requested graceful OMP shutdown.
					}
				}
				terminalNotice = terminalWatcherScheduled
					? " Parent shell will be closed after exit if its process identity is unchanged."
					: " Parent shell could not be safely verified; leaving the parent process running.";
			}
			ctx.shutdown();
			return {
				content: [
					{
						type: "text",
						text:
							"Session will exit once this turn settles." +
							terminalNotice +
							" Deliver your final reply now.",
					},
				],
			};
		},
	});
}
