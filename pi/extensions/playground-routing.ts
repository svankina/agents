import { isToolCallEventType, type ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

// Transparent tester-playground routing for the agent's Bash tool.
//
// Off by default. When PLAYGROUND_ROUTING_ENABLED=1, this hooks the `tool_call`
// event and, for every `bash` tool call, rewrites the command so it runs through
// `bin/playground route --exec`. That helper resolves the session's active
// playground marker and:
//   - inactive -> runs the command on the host (transparent, byte-for-byte);
//   - active   -> runs it in the session's persistent supervisor shell so
//                 cd/export persist across calls;
//   - stale    -> prints a recovery message and exits non-zero (never host).
//
// NOTE: `user_bash` is the WRONG hook for this -- that event only fires for the
// human's interactive `!`/`!!` commands, not the agent's Bash tool. `tool_call`
// fires before the bash tool runs and lets us mutate event.input.command, which
// is how we wrap it.

// One stable session id for the whole Pi process, injected into the wrapped
// command so that `playground activate` run from inside this session and the
// later routed commands all resolve the SAME marker. (Pi does not export a
// session id to tools, and active.py's pid-<ppid> fallback is not stable across
// the activate-on-host vs. route spawn paths.)
const ROUTING_SESSION_ID =
  process.env.PLAYGROUND_SESSION_ID ||
  process.env.PI_SESSION_ID ||
  `pi-${process.pid}`;

function shellQuote(value: string): string {
  return `'${value.replaceAll("'", "'\\''")}'`;
}

// Locate bin/playground: prefer PLAYGROUND_BIN, else walk up from the given dir
// looking for a `.tester/playgrounds` state dir and use that repo's bin/playground.
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

export default function (pi: ExtensionAPI) {
  if (process.env.PLAYGROUND_ROUTING_ENABLED !== "1") {
    return;
  }

  pi.on("tool_call", async (event, ctx) => {
    if (!isToolCallEventType("bash", event)) {
      return;
    }
    const cwd = (ctx && (ctx as { cwd?: string }).cwd) || process.cwd();
    const bin = locatePlaygroundBin(cwd);
    if (!bin) {
      // Can't find bin/playground: leave the command untouched (runs on host).
      return;
    }

    const original = event.input.command;
    const timeout = event.input.timeout;
    const timeoutArg = typeof timeout === "number" && timeout > 0 ? ` --timeout ${timeout}` : "";

    // Pin PLAYGROUND_SESSION_ID for both the route call and any activate it wraps,
    // then exec the wrapper so its stdout/stderr/exit become the tool result.
    event.input.command =
      `PLAYGROUND_SESSION_ID=${shellQuote(ROUTING_SESSION_ID)} ` +
      `exec ${shellQuote(bin)} route --exec${timeoutArg} -- ${shellQuote(original)}`;
  });
}
