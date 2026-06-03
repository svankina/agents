import type { BashOperations, ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

function shellQuote(value: string): string {
  return `'${value.replaceAll("'", "'\\''")}'`;
}

function killProcess(proc: ChildProcessWithoutNullStreams) {
  if (!proc.pid) return;
  try {
    if (process.platform !== "win32") process.kill(-proc.pid, "SIGTERM");
    else proc.kill("SIGTERM");
  } catch {
    try {
      proc.kill("SIGTERM");
    } catch {
      // Ignore cleanup failures.
    }
  }
}

function shouldTrackAsTerminalAgent(command: string): boolean {
  const trimmed = command.trimStart();
  return trimmed.startsWith("codex exec") || trimmed.startsWith("python3 scripts/subagent_codex_launcher.py") || trimmed.startsWith("./scripts/agent_track.py");
}

function locateAgentTrackScript(start: string): string | null {
  let dir = resolve(start);
  for (let depth = 0; depth < 8; depth += 1) {
    const candidate = resolve(dir, "scripts", "agent_track.py");
    if (existsSync(candidate)) {
      return candidate;
    }

    const parent = resolve(dir, "..");
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

function wrapTerminalAgentCommand(command: string, cwd: string): string {
  if (!shouldTrackAsTerminalAgent(command)) {
    return command;
  }

  const trackScript = locateAgentTrackScript(cwd);
  if (!trackScript) {
    return command;
  }

  const model = process.env.SUBAGENT_TRACK_MODEL || process.env.SUBAGENT_DISPATCH_MODEL || "gpt-5.3-codex-spark";
  return [
    "python3",
    trackScript,
    "--name",
    "terminal-agent",
    "--model",
    model,
    "--cwd",
    cwd,
    "--",
    "bash",
    "-lc",
    command,
  ].map((part) => shellQuote(part)).join(" ");
}

function createAliasAwareBashOperations(): BashOperations {
  return {
    exec(command, cwd, { onData, signal, timeout, env }) {
      return new Promise((resolve, reject) => {
        if (!existsSync(cwd)) {
          reject(new Error(`Working directory does not exist: ${cwd}\nCannot execute bash commands.`));
          return;
        }

        const shell = process.env.PI_USER_BASH_SHELL || "/bin/bash";
        const init = process.env.PI_USER_BASH_INIT || "$HOME/.bash_aliases";
        const commandToRun = process.env.PI_TRACK_TERMINAL_AGENTS === "1"
          ? wrapTerminalAgentCommand(command, cwd)
          : command;
        const wrapper = [
          "shopt -s expand_aliases 2>/dev/null || true",
          `[ -f ${JSON.stringify(init)} ] && source ${JSON.stringify(init)}`,
          'eval "$PI_USER_COMMAND"',
        ].join("; ");

        const proc = spawn(shell, ["-c", wrapper], {
          cwd,
          detached: process.platform !== "win32",
          env: {
            ...(env ?? process.env),
            PI_USER_COMMAND: commandToRun,
          },
          stdio: ["ignore", "pipe", "pipe"],
        });

        let settled = false;
        let timedOut = false;
        let timeoutHandle: NodeJS.Timeout | undefined;

        const finish = (fn: () => void) => {
          if (settled) return;
          settled = true;
          if (timeoutHandle) clearTimeout(timeoutHandle);
          signal?.removeEventListener("abort", onAbort);
          fn();
        };

        const onAbort = () => {
          killProcess(proc);
        };

        if (timeout !== undefined && timeout > 0) {
          timeoutHandle = setTimeout(() => {
            timedOut = true;
            killProcess(proc);
          }, timeout * 1000);
        }

        if (signal) {
          if (signal.aborted) onAbort();
          else signal.addEventListener("abort", onAbort, { once: true });
        }

        proc.stdout.on("data", onData);
        proc.stderr.on("data", onData);
        proc.on("error", (error) => finish(() => reject(error)));
        proc.on("close", (exitCode) => {
          finish(() => {
            if (signal?.aborted) reject(new Error("aborted"));
            else if (timedOut) reject(new Error(`timeout:${timeout}`));
            else resolve({ exitCode });
          });
        });
      });
    },
  };
}

export default function (pi: ExtensionAPI) {
  const operations = createAliasAwareBashOperations();

  pi.on("user_bash", () => ({ operations }));
}
