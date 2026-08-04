/*
 * `/safequit` — finish the active task, verify Git is safe, exit OMP, then
 * close the interactive shell (and therefore its terminal tab/pane).
 *
 * The shell is signalled only after OMP has exited and only when its Linux
 * process identity still matches the direct parent captured by the command.
 */

import { execFile } from "node:child_process";
import fs from "node:fs";
import type { ExtensionAPI, ExtensionCommandContext } from "@oh-my-pi/pi-coding-agent";

export const SAFEQUIT_READY_MARKER = "<safequit-ready/>";
export const SAFEQUIT_BLOCKED_MARKER = "<safequit-blocked/>";

const MAX_STOP_ATTEMPTS = 8;
const GIT_TIMEOUT_MS = 20_000;
const SHELL_CLOSE_TIMEOUT_MS = 60_000;
const SUPPORTED_SHELLS: Record<string, true> = {
	bash: true,
	dash: true,
	fish: true,
	nu: true,
	sh: true,
	zsh: true,
};

export const SAFEQUIT_WRAP_UP_PROMPT = `Safe quit is armed. Finish the current task completely now.

Before stopping:
- satisfy every active request and todo;
- run the specific verification that proves the changed behavior;
- stop every process, service, watcher, GUI, and background job you launched — but never shared infrastructure: the tmux server, any tmux session, window, or pane, other agents' processes, systemd services you did not start this session, or the triage panel;
- commit all intended changes with a clear commit message;
- push the current branch, setting its upstream when needed;
- leave no intended changes uncommitted.

End the final response with ${SAFEQUIT_READY_MARKER} on its own line only when the task is complete. If a blocker prevents completion, explain it and end with ${SAFEQUIT_BLOCKED_MARKER} instead. Do not emit either marker anywhere else.`;

interface CommandResult {
	code: number | null;
	stdout: string;
	stderr: string;
	error?: string;
}

export interface RepositoryReadiness {
	ready: boolean;
	root?: string;
	issues: string[];
}

export interface LinuxProcessIdentity {
	pid: number;
	command: string;
	startTime: string;
}

interface ArmedSafeQuit {
	attempts: number;
	cwd: string;
	parent: LinuxProcessIdentity;
	finish(ready: boolean): void;
}

function runGit(cwd: string, args: string[]): Promise<CommandResult> {
	const { promise, resolve } = Promise.withResolvers<CommandResult>();
	execFile(
		"git",
		args,
		{
			cwd,
			env: { ...process.env, GIT_TERMINAL_PROMPT: "0" },
			maxBuffer: 1024 * 1024,
			timeout: GIT_TIMEOUT_MS,
		},
		(error, stdout, stderr) => {
			resolve({
				code: error && typeof error.code === "number" ? error.code : error ? null : 0,
				stdout,
				stderr,
				error: error?.message,
			});
		},
	);
	return promise;
}

function commandFailure(label: string, result: CommandResult): string {
	const detail = result.stderr.trim() || result.stdout.trim() || result.error || "unknown error";
	return `${label}: ${detail}`;
}

/** Check the invariants that make it safe to discard the current terminal. */
export async function inspectRepository(cwd: string): Promise<RepositoryReadiness> {
	const rootResult = await runGit(cwd, ["rev-parse", "--show-toplevel"]);
	if (rootResult.code !== 0) {
		const detail = `${rootResult.stderr}\n${rootResult.error ?? ""}`;
		if (detail.includes("not a git repository")) return { ready: true, issues: [] };
		return { ready: false, issues: [commandFailure("Could not inspect the repository", rootResult)] };
	}

	const root = rootResult.stdout.trim();
	const issues: string[] = [];
	const status = await runGit(root, ["status", "--porcelain=v1", "--untracked-files=all"]);
	if (status.code !== 0) {
		issues.push(commandFailure("Could not inspect the working tree", status));
	} else if (status.stdout.trim()) {
		issues.push("The working tree still has uncommitted or untracked changes.");
	}

	const branch = await runGit(root, ["symbolic-ref", "--quiet", "--short", "HEAD"]);
	if (branch.code !== 0) issues.push("HEAD is detached; preserve the work on a branch before quitting.");

	const remotes = await runGit(root, ["remote"]);
	if (remotes.code !== 0) {
		issues.push(commandFailure("Could not inspect Git remotes", remotes));
	} else if (remotes.stdout.trim() && branch.code === 0) {
		const upstream = await runGit(root, [
			"rev-parse",
			"--abbrev-ref",
			"--symbolic-full-name",
			"@{upstream}",
		]);
		if (upstream.code !== 0) {
			issues.push(`Branch ${branch.stdout.trim()} has no upstream; push it with --set-upstream.`);
		} else {
			const ahead = await runGit(root, ["rev-list", "--count", "@{upstream}..HEAD"]);
			if (ahead.code !== 0) {
				issues.push(commandFailure("Could not compare HEAD with its upstream", ahead));
			} else if (Number.parseInt(ahead.stdout.trim(), 10) > 0) {
				issues.push(`The branch is ${ahead.stdout.trim()} commit(s) ahead of ${upstream.stdout.trim()}.`);
			} else {
				const pushCheck = await runGit(root, ["push", "--dry-run", "--porcelain"]);
				if (pushCheck.code !== 0) issues.push(commandFailure("The upstream push check failed", pushCheck));
			}
		}
	}

	return { ready: issues.length === 0, root, issues };
}

export function messageText(message: unknown): string {
	if (!message || typeof message !== "object" || !("content" in message)) return "";
	const { content } = message;
	if (typeof content === "string") return content;
	if (!Array.isArray(content)) return "";
	return content
		.map(part => {
			if (!part || typeof part !== "object" || !("type" in part) || !("text" in part)) return "";
			return part.type === "text" && typeof part.text === "string" ? part.text : "";
		})
		.filter(Boolean)
		.join("\n");
}

/** Read enough of /proc to avoid signalling a recycled PID. */
export function readLinuxProcessIdentity(pid: number): LinuxProcessIdentity | undefined {
	try {
		const stat = fs.readFileSync(`/proc/${pid}/stat`, "utf8");
		const fieldsAfterCommand = stat.slice(stat.lastIndexOf(") ") + 2).trim().split(/\s+/);
		const startTime = fieldsAfterCommand[19];
		const command = fs.readFileSync(`/proc/${pid}/comm`, "utf8").trim();
		if (!startTime || !command) return undefined;
		return { pid, command, startTime };
	} catch {
		return undefined;
	}
}

/**
 * Spawn a detached watcher which HUPs the captured shell only after OMP exits.
 * Exported so the process lifecycle can be exercised without terminating OMP.
 */
export function spawnTerminalCloser(
	ompPid: number,
	parent: LinuxProcessIdentity,
	timeoutMs = SHELL_CLOSE_TIMEOUT_MS,
): number {
	const script = `
const fs = require("node:fs");
const ompPid = ${Math.trunc(ompPid)};
const shellPid = ${Math.trunc(parent.pid)};
const expectedStartTime = ${JSON.stringify(parent.startTime)};
const deadline = Date.now() + ${Math.trunc(timeoutMs)};
function identity(pid) {
  try {
    const stat = fs.readFileSync("/proc/" + pid + "/stat", "utf8");
    return stat.slice(stat.lastIndexOf(") ") + 2).trim().split(/\\s+/)[19];
  } catch { return undefined; }
}
const timer = setInterval(() => {
  if (identity(ompPid) !== undefined) {
    if (Date.now() >= deadline) { clearInterval(timer); process.exit(0); }
    return;
  }
  clearInterval(timer);
  if (identity(shellPid) === expectedStartTime) {
    try { process.kill(shellPid, "SIGHUP"); } catch {}
  }
  process.exit(0);
}, 50);
`;
	const watcher = Bun.spawn([process.execPath, "-e", script], {
		detached: true,
		stdin: "ignore",
		stdout: "ignore",
		stderr: "ignore",
	});
	watcher.unref();
	return watcher.pid;
}

function captureParentShell(ctx: ExtensionCommandContext): LinuxProcessIdentity | undefined {
	const parent = readLinuxProcessIdentity(process.ppid);
	if (!parent) {
		ctx.ui.notify("/safequit: could not identify the parent shell; nothing was changed", "error");
		return undefined;
	}
	if (!SUPPORTED_SHELLS[parent.command]) {
		ctx.ui.notify(
			`/safequit: parent process ${parent.command} is not a supported interactive shell; refusing to signal it`,
			"error",
		);
		return undefined;
	}
	return parent;
}

export const SAFEQUIT_COMMAND_NAMES = ["safequit", "sq"] as const;

export default function safeQuit(api: ExtensionAPI): void {
	let armed: ArmedSafeQuit | undefined;

	api.setLabel("Safe quit");
	const command = {
		description: "Finish, commit, push, exit OMP, and close this terminal",
		handler: async (args: string, ctx: ExtensionCommandContext) => {
			if (args.trim()) {
				ctx.ui.notify("Usage: /safequit or /sq", "error");
				return;
			}
			if (!ctx.hasUI) {
				ctx.ui.notify("/safequit is available only in interactive sessions", "error");
				return;
			}
			if (armed) {
				ctx.ui.notify("Safe quit is already wrapping up this session", "warning");
				return;
			}

			await ctx.waitForIdle();
			const parent = captureParentShell(ctx);
			if (!parent) return;
			const completion = Promise.withResolvers<boolean>();
			armed = { attempts: 0, cwd: ctx.cwd, parent, finish: completion.resolve };
			ctx.ui.notify("Safe quit armed: finishing the task, then checking commit and push state", "info");
			api.sendUserMessage(SAFEQUIT_WRAP_UP_PROMPT);
			if (!(await completion.promise)) return;

			spawnTerminalCloser(process.pid, parent);
			ctx.ui.notify("Safe quit complete: closing OMP and this terminal", "info");
			ctx.shutdown();
		},
	};
	for (const name of SAFEQUIT_COMMAND_NAMES) api.registerCommand(name, command);

	api.on("session_stop", async (event, ctx) => {
		if (!armed) return;
		armed.attempts += 1;
		const text = messageText(event.last_assistant_message);

		if (text.includes(SAFEQUIT_BLOCKED_MARKER)) {
			const { finish } = armed;
			armed = undefined;
			ctx.ui.notify("Safe quit stopped: the agent reported a blocker; this terminal remains open", "warning");
			finish(false);
			return;
		}

		if (!text.includes(SAFEQUIT_READY_MARKER)) {
			if (armed.attempts >= MAX_STOP_ATTEMPTS) {
				const { finish } = armed;
				armed = undefined;
				ctx.ui.notify("Safe quit stopped after eight wrap-up attempts; this terminal remains open", "error");
				finish(false);
				return;
			}
			return {
				continue: true,
				additionalContext: `Safe quit is still armed. Continue the wrap-up. End with ${SAFEQUIT_READY_MARKER} only after every requested task is complete, committed, verified, and pushed; use ${SAFEQUIT_BLOCKED_MARKER} if completion is blocked.`,
			};
		}

		const repository = await inspectRepository(armed.cwd);
		if (!repository.ready) {
			if (armed.attempts >= MAX_STOP_ATTEMPTS) {
				const { finish } = armed;
				armed = undefined;
				ctx.ui.notify(
					`Safe quit stopped: ${repository.issues.join(" ")} This terminal remains open.`,
					"error",
				);
				finish(false);
				return;
			}
			return {
				continue: true,
				additionalContext: `Safe quit cannot close yet:\n- ${repository.issues.join("\n- ")}\nResolve these issues, verify again, and end with ${SAFEQUIT_READY_MARKER}.`,
			};
		}

		const { finish } = armed;
		armed = undefined;
		finish(true);
	});
}
