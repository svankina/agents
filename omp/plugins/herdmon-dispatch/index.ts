import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import type { ExtensionAPI, ExtensionContext } from "@oh-my-pi/pi-coding-agent";
import { DispatchRuntime, type DispatchConfig } from "./runtime";

// Reload preserves ongoing SDK sessions. Discovery in children is disabled as well as identity-gated.
const runtimeKey = Symbol.for("svankina.herdmon-dispatch.runtimes.v1");
const globals = globalThis as typeof globalThis & { [runtimeKey]?: Map<string, DispatchRuntime> };
const runtimes = globals[runtimeKey] ??= new Map<string, DispatchRuntime>();

export default function herdmonDispatch(pi: ExtensionAPI) {
  const directory = resolve(process.env.HERDMON_STATE_DIR ?? join(homedir(), ".local/state/herd-manager"));
  let config: DispatchConfig;
  try { config = JSON.parse(readFileSync(join(directory, "dispatch-config.json"), "utf8")); }
  catch (error) { if ((error as NodeJS.ErrnoException).code === "ENOENT") return; throw error; }
  if (!config.coordinatorSessionId?.trim()) throw new Error("dispatch-config.json requires an explicit coordinatorSessionId");
  const enabled = (ctx: ExtensionContext) => ctx.sessionManager.getSessionId() === config.coordinatorSessionId;
  const runtime = (ctx: ExtensionContext) => {
    if (!enabled(ctx)) throw new Error("herdmon dispatch is restricted to the configured coordinator session identity");
    let current = runtimes.get(directory);
    if (!current) { current = new DispatchRuntime(directory, config, pi); runtimes.set(directory, current); }
    current.bind(pi);
    return current;
  };
  pi.setLabel("herdmon Dispatch");
  pi.on("session_start", (_event, ctx) => { if (enabled(ctx)) runtime(ctx).start(); });
  // Merely switching away must not interrupt sessions or falsely fail ongoing work.
  pi.on("session_shutdown", async (_event, ctx) => {
    if (!enabled(ctx)) return;
    const current = runtimes.get(directory);
    if (current) { await current.close(); runtimes.delete(directory); }
  });
  const z = pi.zod;
  pi.registerTool({
    name: "herdmon_dispatch", label: "herdmon Dispatch", loadMode: "essential", approval: "exec",
    description: "Coordinator-only explicitly scoped durable dispatch. scope launches bounded independent SDK workers in separate feature worktrees; dependencies wait for reviewed integrated completion. inspect returns actual state. integrating records your review but NEVER merges. Manually merge the recorded commits into the scoped target, verify runs a real combined-result argv command, completed accepts only integrated commits and successful verification at the current target HEAD. block records blockers on stopped work; recover accepts inspected committed work after interruption without relaunching. Never classify arbitrary chat as dispatch and never auto-merge.",
    parameters: z.object({
      op: z.enum(["scope", "inspect", "integrating", "verify", "completed", "block", "recover"]),
      requests: z.array(z.object({
        id: z.string(), request: z.string(), acceptance: z.string(), repo: z.string(), targetBranch: z.string(), dependencies: z.array(z.string()).optional(),
      })).optional(),
      id: z.string().optional(), note: z.string().optional(), command: z.array(z.string()).optional(),
    }),
    async execute(_callId, args, _signal, _update, ctx) {
      const current = runtime(ctx);
      let result: unknown;
      if (args.op === "inspect") result = current.records();
      else if (args.op === "scope") result = await current.scope(args.requests ?? []);
      else {
        if (!args.id) throw new Error(`${args.op} requires id`);
        if (args.op === "integrating") result = await current.review(args.id, args.note ?? "");
        else if (args.op === "verify") result = await current.verify(args.id, args.command ?? []);
        else if (args.op === "completed") result = await current.complete(args.id, args.note ?? "");
        else if (args.op === "block") result = await current.block(args.id, args.note ?? "");
        else result = await current.recover(args.id, args.note ?? "");
      }
      return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }], details: { dispatch: result } };
    },
  });
}
