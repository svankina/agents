import type { BashOperations, ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

// Off by default. Only when PLAYGROUND_ROUTING_ENABLED=1 does this extension
// register a user_bash hook that transparently routes the Bash tool through the
// active tester playground for the session (so cd/export persist via the
// per-session supervisor). When no playground is active for the session, the
// hook falls through to an ordinary shell exec so non-playground sessions are
// byte-for-byte unaffected.

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

// Locate bin/playground: prefer PLAYGROUND_BIN, else walk up from cwd looking
// for a `.tester/playgrounds` dir and use its repo's sibling `bin/playground`.
function locatePlaygroundBin(start: string): string | null {
  const override = process.env.PLAYGROUND_BIN;
  if (override && existsSync(override)) {
    return override;
  }
  let dir = resolve(start);
  for (let depth = 0; depth < 12; depth += 1) {
    if (existsSync(resolve(dir, ".tester", "playgrounds"))) {
      const candidate = resolve(dir, "bin", "playground");
      if (existsSync(candidate)) {
        return candidate;
      }
    }
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

// Ordinary, NON-routed shell exec. Mirrors the user-bash-aliases.ts spawn
// pattern so a session without a playground behaves exactly like the default
// Pi Bash tool.
function execOnHost(
  command: string,
  cwd: string,
  opts: {
    onData: (chunk: Buffer) => void;
    signal?: AbortSignal;
    timeout?: number;
    env?: NodeJS.ProcessEnv;
  },
): Promise<{ exitCode: number | null }> {
  const { onData, signal, timeout, env } = opts;
  return new Promise((resolveP, reject) => {
    const shell = process.env.PI_USER_BASH_SHELL || "/bin/bash";
    const proc = spawn(shell, ["-c", command], {
      cwd,
      detached: process.platform !== "win32",
      env: { ...(env ?? process.env) },
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

    const onAbort = () => killProcess(proc);

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
        else resolveP({ exitCode });
      });
    });
  });
}

function createRoutingBashOperations(): BashOperations {
  return {
    exec(command, cwd, { onData, signal, timeout, env }) {
      const bin = locatePlaygroundBin(cwd);
      // If we cannot find bin/playground, we cannot route: behave like the
      // default Bash tool rather than erroring.
      if (!bin) {
        return execOnHost(command, cwd, { onData, signal, timeout, env });
      }

      return new Promise((resolveP, reject) => {
        const args = ["route", "--json"];
        if (timeout !== undefined && timeout > 0) {
          args.push("--timeout", String(timeout));
        }
        // Forward the whole Bash command as a single positional after `--`.
        args.push("--", command);

        // Preserve PI_SESSION_ID/PLAYGROUND_SESSION_ID/PLAYGROUND_STATE_ROOT so
        // the route subprocess resolves the same active marker the session used
        // to activate.
        const proc = spawn(bin, args, {
          cwd,
          detached: process.platform !== "win32",
          env: { ...(env ?? process.env) },
          stdio: ["ignore", "pipe", "pipe"],
        });

        let settled = false;
        let timedOut = false;
        let timeoutHandle: NodeJS.Timeout | undefined;
        const chunks: Buffer[] = [];

        const finish = (fn: () => void) => {
          if (settled) return;
          settled = true;
          if (timeoutHandle) clearTimeout(timeoutHandle);
          signal?.removeEventListener("abort", onAbort);
          fn();
        };

        const onAbort = () => killProcess(proc);

        if (timeout !== undefined && timeout > 0) {
          // Bound the route subprocess too; the supervisor enforces its own
          // command timeout (exit 124, status 'ok'), this is a backstop.
          timeoutHandle = setTimeout(() => {
            timedOut = true;
            killProcess(proc);
          }, (timeout + 5) * 1000);
        }

        if (signal) {
          if (signal.aborted) onAbort();
          else signal.addEventListener("abort", onAbort, { once: true });
        }

        // Buffer route's own stdout (the JSON envelope); we stream the routed
        // command's stdout/stderr to the UI only after parsing.
        proc.stdout.on("data", (chunk: Buffer) => chunks.push(Buffer.from(chunk)));
        proc.stderr.on("data", (chunk: Buffer) => chunks.push(Buffer.from(chunk)));

        proc.on("error", (error) => finish(() => reject(error)));
        proc.on("close", (routeExit) => {
          finish(() => {
            if (signal?.aborted) {
              reject(new Error("aborted"));
              return;
            }
            if (timedOut) {
              reject(new Error(`timeout:${timeout}`));
              return;
            }

            const raw = Buffer.concat(chunks).toString("utf-8");
            let result: any;
            try {
              result = JSON.parse(raw);
            } catch {
              // Could not parse the route envelope; surface what we got and
              // fail closed (do not run on host).
              onData(Buffer.from(raw));
              resolveP({ exitCode: routeExit ?? 2 });
              return;
            }

            const status = result?.status;
            if (status === "inactive") {
              // No active playground for this session: run normally on host.
              execOnHost(command, cwd, { onData, signal, timeout, env }).then(
                (r) => resolveP(r),
                (e) => reject(e),
              );
              return;
            }
            if (status === "ok") {
              if (result.stdout) onData(Buffer.from(String(result.stdout)));
              if (result.stderr) onData(Buffer.from(String(result.stderr)));
              resolveP({ exitCode: typeof result.exit_code === "number" ? result.exit_code : 0 });
              return;
            }
            // status === "stale" (or "error"): surface the recovery message and
            // resolve with a non-zero exit. NEVER run on host.
            const summary = result?.summary || "playground routing unavailable; run: bin/playground deactivate";
            onData(Buffer.from(`${summary}\n`));
            resolveP({ exitCode: 2 });
          });
        });
      });
    },
  };
}

export default function (pi: ExtensionAPI) {
  if (process.env.PLAYGROUND_ROUTING_ENABLED !== "1") {
    return;
  }
  const operations = createRoutingBashOperations();
  pi.on("user_bash", () => ({ operations }));
}
