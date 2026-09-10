import { Database } from "bun:sqlite";
import { mkdirSync, readFileSync, writeFileSync, renameSync, openSync, fsyncSync, closeSync } from "node:fs";
import { resolve, join } from "node:path";
import { randomUUID } from "node:crypto";
import type { AgentSession, ExtensionAPI } from "@oh-my-pi/pi-coding-agent";

type Status = "pending" | "running" | "ready" | "integrating" | "completed" | "blocked" | "failed";
export interface RequestRecord {
  id: string; request: string; acceptance: string; repo: string; targetBranch: string;
  status: Status; workerId: string | null; worktree: string | null;
  dependencies: string[]; commits: string[]; verification: string[]; blockers: string[];
  updatedAt: number; base: string | null; sessionFile: string | null; review: string | null;
  integratedHead: string | null; verifiedHead: string | null; report: string | null;
  notificationPending: boolean;
}
export interface DispatchConfig { coordinatorSessionId: string; maxWorkers?: number; model?: string; }
export interface Scope { id: string; request: string; acceptance: string; repo: string; targetBranch: string; dependencies?: string[]; }
const now = () => Date.now() / 1000;
function processIdentity(pid: number): string | null {
  try { return readFileSync(`/proc/${pid}/stat`, "utf8").split(") ")[1].split(" ")[19]; }
  catch { return null; }
}
async function command(cwd: string, argv: string[]): Promise<{ code: number; output: string }> {
  const child = Bun.spawn(argv, { cwd, stdin: "ignore", stdout: "pipe", stderr: "pipe" });
  const [out, err, code] = await Promise.all([new Response(child.stdout).text(), new Response(child.stderr).text(), child.exited]);
  return { code, output: `${out}${err}`.trim() };
}
async function git(cwd: string, ...args: string[]): Promise<string> {
  const result = await command(cwd, ["git", ...args]);
  if (result.code) throw new Error(`git ${args.join(" ")}: ${result.output}`);
  return result.output;
}

/** Durable authority is SQLite. dispatch.json is only a replace-on-write projection. */
export class DispatchRuntime {
  private db: Database;
  private jobs = new Map<string, Promise<void>>();
  private timer: NodeJS.Timeout;
  private stopped = false;
  private serial: Promise<unknown> = Promise.resolve();
  readonly maxWorkers: number;
  constructor(readonly directory: string, readonly config: DispatchConfig, private pi: ExtensionAPI) {
    this.maxWorkers = config.maxWorkers ?? 3;
    if (!Number.isInteger(this.maxWorkers) || this.maxWorkers < 1 || this.maxWorkers > 32) throw new Error("maxWorkers must be 1..32");
    mkdirSync(directory, { recursive: true, mode: 0o700 });
    this.db = new Database(join(directory, "dispatch.sqlite"), { create: true });
    this.db.exec("PRAGMA journal_mode=WAL; PRAGMA synchronous=FULL; CREATE TABLE IF NOT EXISTS requests (id TEXT PRIMARY KEY, record TEXT NOT NULL); CREATE TABLE IF NOT EXISTS owner (id INTEGER PRIMARY KEY CHECK(id=1), pid INTEGER NOT NULL, identity TEXT NOT NULL)");
    this.db.transaction(() => {
      const previous = this.db.query("SELECT pid, identity FROM owner WHERE id=1").get() as { pid: number; identity: string } | null;
      if (previous && processIdentity(previous.pid) === previous.identity) throw new Error(`Dispatch is already owned by live process ${previous.pid}`);
      this.db.query("INSERT OR REPLACE INTO owner VALUES (1, ?, ?)").run(process.pid, processIdentity(process.pid)!);
      for (const row of this.records()) if (row.status === "running") {
        row.status = "blocked";
        row.blockers = ["Coordinator stopped during worker execution. Inspect the saved session/worktree; recover explicitly. No worker was relaunched."];
        row.notificationPending = true;
        this.save(row, false);
      }
    }).immediate();
    this.publish();
    this.timer = setInterval(() => { if (!this.stopped) this.publish(); }, 15_000);
    this.timer.unref();
  }
  records(): RequestRecord[] {
    return (this.db.query("SELECT record FROM requests ORDER BY rowid").all() as { record: string }[]).map(row => JSON.parse(row.record));
  }
  private get(id: string): RequestRecord {
    const row = this.db.query("SELECT record FROM requests WHERE id=?").get(id) as { record: string } | null;
    if (!row) throw new Error(`Unknown request ${id}`);
    return JSON.parse(row.record);
  }
  private save(row: RequestRecord, publish = true): void {
    row.updatedAt = now();
    this.db.query("INSERT INTO requests(id, record) VALUES (?, ?) ON CONFLICT(id) DO UPDATE SET record=excluded.record").run(row.id, JSON.stringify(row));
    if (publish) this.publish();
  }
  private publish(): void {
    const target = join(this.directory, "dispatch.json");
    const temp = `${target}.${process.pid}.tmp`;
    writeFileSync(temp, JSON.stringify({ version: 1, updatedAt: now(), requests: this.records() }, null, 2), { mode: 0o600 });
    const file = openSync(temp, "r");
    try { fsyncSync(file); } finally { closeSync(file); }
    renameSync(temp, target);
    const dir = openSync(this.directory, "r");
    try { fsyncSync(dir); } finally { closeSync(dir); }
  }
  private exclusive<T>(action: () => Promise<T>): Promise<T> {
    const next = this.serial.then(() => { if (this.stopped) throw new Error("Dispatch runtime is stopped"); return action(); });
    this.serial = next.catch(() => {});
    return next;
  }
  scope(scopes: Scope[]): Promise<RequestRecord[]> {
    return this.exclusive(async () => {
      if (!scopes.length) throw new Error("scope requires at least one explicitly scoped request");
      const known = new Map(this.records().map(row => [row.id, row]));
      const additions: RequestRecord[] = [];
      for (const input of scopes) {
        if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,79}$/.test(input.id)) throw new Error("Request id must be 1..80 alphanumeric, underscore or hyphen characters");
        if (!input.request.trim() || !input.acceptance.trim()) throw new Error("Request and acceptance must be explicit and nonempty");
        const repo = await git(resolve(input.repo), "rev-parse", "--show-toplevel");
        await git(repo, "check-ref-format", "--branch", input.targetBranch);
        await git(repo, "rev-parse", "--verify", `refs/heads/${input.targetBranch}^{commit}`);
        const dependencies = [...new Set(input.dependencies ?? [])];
        const old = known.get(input.id);
        if (old) {
          if (old.request !== input.request || old.acceptance !== input.acceptance || old.repo !== repo || old.targetBranch !== input.targetBranch || JSON.stringify(old.dependencies) !== JSON.stringify(dependencies)) throw new Error(`Request ${input.id} already exists with a different scope`);
          continue;
        }
        const row: RequestRecord = { ...input, repo, dependencies, status: "pending", workerId: null, worktree: null, commits: [], verification: [], blockers: [], updatedAt: now(), base: null, sessionFile: null, review: null, integratedHead: null, verifiedHead: null, report: null, notificationPending: false };
        known.set(row.id, row); additions.push(row);
      }
      const visit = (id: string, path: Set<string>) => {
        if (path.has(id)) throw new Error(`Dependency cycle at ${id}`);
        const row = known.get(id); if (!row) throw new Error(`Unknown dependency ${id}`);
        const next = new Set(path).add(id);
        for (const dependency of row.dependencies) visit(dependency, next);
      };
      for (const row of additions) visit(row.id, new Set());
      this.db.transaction(() => { for (const row of additions) this.save(row, false); }).immediate();
      this.publish(); this.pump(); return this.records();
    });
  }
  /** Resume scheduling only previously unlaunched requests; recovery never duplicates a launch. */
  start(): void { this.flushNotifications(); this.pump(); }
  bind(pi: ExtensionAPI): void { this.pi = pi; }
  private flushNotifications(): void {
    if (this.stopped) return;
    for (const row of this.records()) {
      if (!row.notificationPending || this.jobs.has(row.id)) continue;
      try {
        this.pi.sendMessage({
          customType: "herdmon-dispatch",
          content: `Explicitly scoped herdmon request ${row.id} is ${row.status}. Worker ${row.workerId ?? "not launched"}; worktree ${row.worktree ?? "not recorded"}. ${row.status === "ready" ? "Ready for coordinator review, NOT merged or accepted. Inspect the diff and evidence before manual integration; verify the combined result before completion." : `Inspect blockers and saved evidence; do not relaunch blindly. ${row.blockers.join(" ")}`}`,
          display: true,
        }, { triggerTurn: true });
        row.notificationPending = false;
        this.save(row);
      } catch {
        // The durable pending bit retries on activation/reload; no heartbeat spam.
      }
    }
  }
  private pump(): void {
    if (this.stopped) return;
    const rows = this.records();
    for (const row of rows) {
      if (row.status !== "pending") continue;
      const waiting = row.dependencies.filter(id => rows.find(other => other.id === id)?.status !== "completed");
      if (waiting.length) { row.blockers = waiting.map(id => `Waiting for reviewed integrated completion of ${id}`); this.save(row); continue; }
      if (this.jobs.size >= this.maxWorkers) continue;
      row.status = "running"; row.blockers = []; row.workerId = `herdmon-${randomUUID()}`;
      this.save(row); // Durable launch reservation precedes every asynchronous side effect.
      const job = this.launch(row).catch(error => {
        const failed = this.get(row.id); failed.status = "failed"; failed.blockers = [String(error)]; failed.notificationPending = true; this.save(failed);
      }).finally(() => { this.jobs.delete(row.id); this.flushNotifications(); this.pump(); });
      this.jobs.set(row.id, job);
    }
  }
  private async launch(row: RequestRecord): Promise<void> {
    let session: AgentSession | undefined;
    try {
      row.base = await git(row.repo, "rev-parse", `refs/heads/${row.targetBranch}`);
      for (const id of row.dependencies) {
        const dependency = this.get(id);
        if (dependency.repo === row.repo) {
          for (const commit of dependency.commits) await git(row.repo, "merge-base", "--is-ancestor", commit, row.base);
        }
      }
      const branch = `herdmon/${row.id}-${row.workerId!.slice(-12)}`;
      const worktree = await command(row.repo, ["agent-worktree", "new", branch, "--repo", row.repo, "--base", row.base]);
      if (worktree.code) throw new Error(worktree.output);
      // The helper prints diagnostics on stderr, so query its deterministic public path command.
      const location = await command(row.repo, ["agent-worktree", "path", branch, "--repo", row.repo]);
      if (location.code) throw new Error(location.output);
      row.worktree = location.output;
      this.save(row);
      const manager = this.pi.pi.SessionManager.create(row.worktree, join(this.directory, "sessions"));
      const z = this.pi.zod;
      let report: { summary: string; verification: string[]; blockers: string[] } | undefined;
      const created = await this.pi.pi.createAgentSession({
        cwd: row.worktree, sessionManager: manager, agentId: row.workerId!, agentDisplayName: row.workerId!,
        taskDepth: 1, parentAgentId: "Main", spawns: "", disableExtensionDiscovery: true,
        modelPattern: this.config.model, hasUI: false,
        appendSystemPrompt: "You are a herdmon implementation worker, never the coordinator. Work only in the assigned feature worktree; do not create another worktree. Never merge, rebase, reset, or modify another worktree, never push. Commit requested changes only. Skip project-wide builds, formatters, linters and suites; the coordinator verifies the combined result. Do not dispatch child workers. Before finishing call herdmon_worker_result with your evidence and any blockers. Completion means ready for coordinator review, not accepted or merged.",
        customTools: [{
          name: "herdmon_worker_result", label: "Worker result", description: "Record the final handoff to the coordinator; never marks the request integrated or completed.",
          parameters: z.object({ summary: z.string().min(1), verification: z.array(z.string()), blockers: z.array(z.string()) }),
          async execute(_id, args) { report = args; return { content: [{ type: "text", text: "Handoff recorded for coordinator review." }] }; },
        }],
      });
      session = created.session; row.sessionFile = session.sessionFile ?? manager.getSessionFile() ?? null; this.save(row);
      await session.prompt(`Explicit request ${row.id}\n\n${row.request}\n\nAcceptance criteria:\n${row.acceptance}\n\nAssigned worktree: ${row.worktree}\nDependencies accepted: ${row.dependencies.join(", ") || "none"}\nCommit your changes and report using herdmon_worker_result. Do not integrate.`);
      row.commits = (await git(row.worktree, "rev-list", "--reverse", `${row.base}..HEAD`)).split("\n").filter(Boolean);
      const dirty = await git(row.worktree, "status", "--porcelain");
      row.report = report?.summary ?? null;
      row.verification = (report?.verification ?? []).map(item => `Worker-reported: ${item}`);
      row.blockers = [...(report?.blockers ?? [])];
      if (!report) row.blockers.push("Worker returned without a structured handoff");
      if (!row.commits.length) row.blockers.push("No implementation commits found");
      if (dirty) row.blockers.push(`Worktree has uncommitted changes: ${dirty}`);
      row.status = row.blockers.length ? "blocked" : "ready";
      row.notificationPending = true;
      this.save(row);
    } finally {
      if (session) await session.dispose();
    }
  }
  review(id: string, note: string): Promise<RequestRecord> {
    return this.exclusive(async () => {
      const row = this.get(id);
      if (row.status !== "ready" || !note.trim()) throw new Error("integrating requires a ready request and explicit coordinator review note");
      row.status = "integrating"; row.review = note; row.verifiedHead = null; this.save(row); return row;
    });
  }
  verify(id: string, argv: string[]): Promise<RequestRecord> {
    return this.exclusive(async () => {
      const row = this.get(id);
      if (row.status !== "integrating" || !argv.length) throw new Error("verify requires integrating status and an argv command");
      if (await git(row.repo, "branch", "--show-current") !== row.targetBranch) throw new Error("Repository checkout is not on the scoped target branch");
      const head = await this.assertIntegrated(row);
      const result = await command(row.repo, argv);
      row.verification.push(`Coordinator command at ${head}: ${JSON.stringify(argv)}\nExit ${result.code}\n${result.output}`);
      row.verifiedHead = result.code === 0 && await git(row.repo, "rev-parse", "HEAD") === head ? head : null;
      this.save(row); return row;
    });
  }
  private async assertIntegrated(row: RequestRecord): Promise<string> {
    const head = await git(row.repo, "rev-parse", `refs/heads/${row.targetBranch}`);
    if (!row.commits.length) throw new Error("No recorded worker commits to accept");
    for (const commit of row.commits) await git(row.repo, "merge-base", "--is-ancestor", commit, head);
    if (await git(row.repo, "status", "--porcelain", "--untracked-files=no")) throw new Error("Combined checkout has tracked changes; commit integration changes before verification/completion. Unrelated untracked files are preserved.");
    return head;
  }
  complete(id: string, note: string): Promise<RequestRecord> {
    return this.exclusive(async () => {
      const row = this.get(id);
      if (row.status !== "integrating" || !note.trim()) throw new Error("completed requires integrating status and a coordinator acceptance note");
      const head = await this.assertIntegrated(row);
      if (row.verifiedHead !== head) throw new Error("Run successful coordinator verification against the current integrated target HEAD before completion");
      row.status = "completed"; row.integratedHead = head; row.review += `\nAcceptance: ${note}`; row.blockers = [];
      this.save(row); this.pump(); return row;
    });
  }
  block(id: string, reason: string): Promise<RequestRecord> {
    return this.exclusive(async () => {
      const row = this.get(id);
      if (this.jobs.has(id) || row.status === "completed" || !reason.trim()) throw new Error("block requires a non-running, non-completed request and a reason");
      row.status = "blocked"; row.blockers = [reason]; this.save(row); return row;
    });
  }
  recover(id: string, note: string): Promise<RequestRecord> {
    return this.exclusive(async () => {
      const row = this.get(id);
      if (!["blocked", "failed"].includes(row.status) || this.jobs.has(id) || !note.trim()) throw new Error("recover requires stopped blocked/failed work and explicit inspection evidence");
      if (!row.worktree || !row.base) throw new Error("Launch was interrupted before a worktree was recorded. Inspect branch/worktree manually and submit a new explicit request id; this id is never relaunched.");
      row.commits = (await git(row.worktree, "rev-list", "--reverse", `${row.base}..HEAD`)).split("\n").filter(Boolean);
      if (!row.commits.length || await git(row.worktree, "status", "--porcelain")) throw new Error("Recovery requires committed work in a clean saved worktree; finish it manually, then recover");
      row.status = "ready"; row.blockers = []; row.verification.push(`Coordinator recovery inspection: ${note}`); this.save(row); return row;
    });
  }
  async close(): Promise<void> {
    // Do not abort workers during a supported reload or a coordinator session switch.
    // Persist interrupted ownership before awaiting: OMP bounds shutdown hook time.
    this.stopped = true; clearInterval(this.timer);
    for (const id of this.jobs.keys()) {
      const row = this.get(id);
      if (row.status === "running") {
        row.status = "blocked";
        row.blockers = ["Coordinator shutdown requested while this worker was active. Draining if time permits; inspect the saved session/worktree before recovery if shutdown interrupts it."];
        row.notificationPending = true;
        this.save(row);
      }
    }
    await this.serial; await Promise.allSettled(this.jobs.values());
    this.publish(); this.db.query("DELETE FROM owner WHERE id=1 AND pid=?").run(process.pid); this.db.close();
  }
}
