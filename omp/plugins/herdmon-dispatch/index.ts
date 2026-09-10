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
  const dispatchParameters = pi.zod.z.object({
    op: pi.zod.z.enum(["scope", "inspect", "rebase", "integrating", "verify", "completed", "block", "recover"]),
    requests: pi.zod.z.array(pi.zod.z.object({
      id: pi.zod.z.string(), request: pi.zod.z.string(), acceptance: pi.zod.z.string(), repo: pi.zod.z.string(), targetBranch: pi.zod.z.string(), dependencies: pi.zod.z.array(pi.zod.z.string()).optional(),
    })).optional(),
    id: pi.zod.z.string().optional(), note: pi.zod.z.string().optional(), command: pi.zod.z.array(pi.zod.z.string()).optional(),
  });
  const directory = resolve(process.env.HERDMON_STATE_DIR ?? join(homedir(), "src/docked_agents/herdmon"));
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
  pi.registerTool({
    name: "herdmon_dispatch", label: "herdmon Dispatch", loadMode: "essential", approval: "exec",
    description: "Coordinator-only explicitly scoped durable dispatch. scope launches bounded independent SDK workers in separate feature worktrees; dependencies wait for reviewed integrated completion. rebase rebases stopped ready/integrating worker work onto its scoped local target without fetching, merging, or pushing, preserves immutable original handoff identities, and invalidates review and verification for fresh integration review. Conflicted rebases remain blocked until the coordinator resolves the saved worktree and explicitly recovers its recorded rebase intent. integrating records your review but NEVER merges. verify runs a real combined-result argv command, completed accepts only integrated commits and successful verification at the current target HEAD. block records blockers on stopped work. Never classify arbitrary chat as dispatch and never auto-merge.",
    parameters: dispatchParameters,
    async execute(_callId, rawArgs: unknown, _signal, _update, ctx) {
      const args = dispatchParameters.parse(rawArgs);
      const current = runtime(ctx);
      let result: unknown;
      if (args.op === "inspect") result = current.records();
      else if (args.op === "scope") result = await current.scope(args.requests ?? []);
      else {
        if (!args.id) throw new Error(`${args.op} requires id`);
        if (args.op === "rebase") result = await current.rebase(args.id, args.note ?? "");
        else if (args.op === "integrating") result = await current.review(args.id, args.note ?? "");
        else if (args.op === "verify") result = await current.verify(args.id, args.command ?? []);
        else if (args.op === "completed") result = await current.complete(args.id, args.note ?? "");
        else if (args.op === "block") result = await current.block(args.id, args.note ?? "");
        else result = await current.recover(args.id, args.note ?? "");
      }
      const content = [{ type: "text" as const, text: JSON.stringify(result, null, 2) }];
      return { content, details: { dispatch: result } };
    },
  });
}
