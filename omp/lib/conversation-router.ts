import * as fs from "node:fs/promises";
import { homedir } from "node:os";
import { join, relative, resolve, isAbsolute } from "node:path";
import { PeerNetwork, peerDirectory, qualifyPeer, type PeerDescriptor, type PeerMessage } from "./peers-transport";

export type RequestState = "pending" | "completed" | "failed" | "unknown";
export interface ConversationRequest {
  id: string;
  targetId: string;
  targetSessionId: string;
  targetName: string;
  project: string;
  request: string;
  followupTo?: string;
  state: RequestState;
  createdAt: number;
  updatedAt: number;
  reply?: string;
  note?: string;
}
interface Store { version: 1; sessionId: string; requests: ConversationRequest[] }
export interface RouterOptions {
  stateDir?: string;
  projectRoot?: string;
  peerDir?: string;
  onReply?: (request: ConversationRequest) => void;
}
const LIMIT = 256;
const WINDOW = 8000;
const CHANNEL_NOTE = "Requests run in the named agent's persistent receiver-side channel with its role/context, not its main conversation. A handoff is not task completion. Replies cannot survive a router transport restart in flight; interrupted requests remain unknown and are never resent.";

/** One passive socket and atomic local state; no workers, timers, or model calls. */
export class ConversationRouter {
  readonly stateDir: string;
  readonly projectRoot: string;
  #options: RouterOptions;
  #store?: Store;
  #network?: PeerNetwork;
  #releaseLock?: () => Promise<void>;
  #queue: Promise<unknown> = Promise.resolve();
  #routes = new Set<Promise<unknown>>();
  #waiters = new Map<string, (reason: "reply" | "timeout" | "aborted" | "closed") => void>();
  #closing = false;

  constructor(options: RouterOptions = {}) {
    this.#options = options;
    this.stateDir = resolve(options.stateDir ?? process.env.CONVERSATION_STATE_DIR ?? join(homedir(), ".local/state/conversation"));
    this.projectRoot = resolve(options.projectRoot ?? process.env.CONVERSATION_PROJECT_ROOT ?? homedir());
  }

  get id(): string { return qualifyPeer(this.#requireNetwork().instanceId, "Main"); }
  get sessionId(): string { return this.#requireStore().sessionId; }

  async start(): Promise<void> {
    if (this.#network) return;
    const directory = this.#options.peerDir ?? peerDirectory();
    if (!directory) throw new Error("Cross-process peers are disabled; Conversation requires the peer transport");
    await fs.mkdir(this.stateDir, { recursive: true, mode: 0o700 });
    await fs.chmod(this.stateDir, 0o700);
    // Same kernel-lock/pipe-lifetime convention as peer-channels permits.
    const child = Bun.spawn(["flock", "-n", join(this.stateDir, "router.lock"), "sh", "-c", "printf 'L'; exec cat >/dev/null"], {
      stdin: "pipe", stdout: "pipe", stderr: "pipe",
    });
    const reader = child.stdout.getReader();
    const first = await reader.read();
    reader.releaseLock();
    if (first.done || first.value[0] !== 76) {
      child.stdin.end();
      const status = await child.exited;
      throw new Error(status === 1 ? "Conversation state already has an owner; close the other terminal/pane." : `Cannot lock Conversation state: ${await new Response(child.stderr).text()}`);
    }
    this.#releaseLock = async () => { child.stdin.end(); await child.exited; };
    try {
      this.#closing = false;
      try {
        const file = join(this.stateDir, "requests.json");
        if ((await fs.stat(file)).size > 40 * 1024 * 1024) throw new Error("Conversation state exceeds 40 MiB");
        const value = JSON.parse(await fs.readFile(file, "utf8")) as Store;
        if (value.version !== 1 || typeof value.sessionId !== "string" || !value.sessionId || !Array.isArray(value.requests) || value.requests.length > LIMIT || value.requests.some(row =>
          !row || typeof row.id !== "string" || typeof row.targetId !== "string" || typeof row.targetSessionId !== "string" || typeof row.targetName !== "string" || typeof row.project !== "string" || typeof row.request !== "string" || Buffer.byteLength(row.request) > 65536 || (row.reply !== undefined && (typeof row.reply !== "string" || Buffer.byteLength(row.reply) > 65536)) || !["pending", "completed", "failed", "unknown"].includes(row.state) || !Number.isFinite(row.createdAt) || !Number.isFinite(row.updatedAt))) throw new Error("Invalid Conversation state; refusing to overwrite it");
        this.#store = value;
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
        this.#store = { version: 1, sessionId: crypto.randomUUID(), requests: [] };
      }
      for (const row of this.#store.requests) if (row.state === "pending") {
        row.state = "unknown";
        row.note = "Router interrupted; prior reply address is unavailable. Work may still be running. Not resent.";
        row.updatedAt = Date.now();
      }
      await this.#save();
      const network = new PeerNetwork({ directory, peers: instanceId => [{
        id: qualifyPeer(instanceId, "Main"), localId: "Main", instanceId,
        sessionId: this.sessionId, displayName: "Conversation", kind: "main", status: "idle",
        cwd: this.stateDir, pid: process.pid, lastActivity: Date.now(), activity: "Lightweight request router",
      }], receive: message => this.#receive(message) });
      this.#network = network;
      await network.start();
    } catch (error) { await this.close(); throw error; }
  }

  async close(): Promise<void> {
    this.#closing = true;
    for (const finish of this.#waiters.values()) finish("closed");
    await Promise.allSettled(this.#routes);
    await this.#network?.close();
    this.#network = undefined;
    await this.#queue;
    await this.#releaseLock?.();
    this.#releaseLock = undefined;
  }

  #requireNetwork(): PeerNetwork {
    if (!this.#network || this.#closing) throw new Error("Conversation router is not running");
    return this.#network;
  }
  #requireStore(): Store {
    if (!this.#store) throw new Error("Conversation state is not loaded");
    return this.#store;
  }
  #mutate<T>(action: () => Promise<T>): Promise<T> {
    const next = this.#queue.then(action);
    this.#queue = next.catch(() => {});
    return next;
  }
  async #save(): Promise<void> {
    const temporary = join(this.stateDir, "requests.json.tmp");
    const file = await fs.open(temporary, "w", 0o600);
    try { await file.writeFile(JSON.stringify(this.#requireStore())); await file.sync(); }
    finally { await file.close(); }
    await fs.rename(temporary, join(this.stateDir, "requests.json"));
  }
  #eligible(peer: PeerDescriptor): boolean {
    const subpath = relative(this.projectRoot, peer.cwd);
    return peer.kind === "main" && peer.sessionId !== this.sessionId && peer.displayName.trim() !== "" && peer.displayName !== "Main" && peer.displayName !== `OMP ${peer.sessionId}` && peer.displayName !== "Conversation" && subpath !== ".." && !subpath.startsWith("../") && !isAbsolute(subpath);
  }

  async listAgents(query = "", offset = 0) {
    if (!Number.isSafeInteger(offset) || offset < 0) throw new Error("offset must be a nonnegative integer");
    const descriptions = new Map<string, string>();
    try {
      const file = join(this.stateDir, "agents.json");
      if ((await fs.stat(file)).size > 512 * 1024) throw new Error("agents.json exceeds 512 KiB");
      const entries: unknown = JSON.parse(await fs.readFile(file, "utf8"));
      if (!Array.isArray(entries) || entries.length > 256) throw new Error("agents.json must be an array of at most 256 role bindings");
      for (const entry of entries) {
        if (!entry || typeof entry !== "object" || typeof entry.sessionId !== "string" || !entry.sessionId.trim() || entry.sessionId.length > 1024 || typeof entry.description !== "string" || !entry.description.trim() || entry.description.length > 1024) throw new Error("Each agents.json entry requires nonempty sessionId and description strings, each at most 1024 characters");
        if (descriptions.has(entry.sessionId)) throw new Error(`Duplicate agents.json sessionId: ${entry.sessionId}`);
        descriptions.set(entry.sessionId, entry.description);
      }
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
    }
    const found = await this.#requireNetwork().discover();
    const needle = query.trim().toLowerCase();
    const peers = found.peers.filter(peer => this.#eligible(peer) && (!needle || `${peer.displayName} ${peer.cwd} ${peer.activity ?? ""} ${descriptions.get(peer.sessionId) ?? ""}`.toLowerCase().includes(needle))).sort((a, b) => a.id.localeCompare(b.id));
    return { agents: peers.slice(offset, offset + 32).map(peer => ({ id: peer.id, sessionId: peer.sessionId, name: peer.displayName, description: descriptions.get(peer.sessionId) ?? null, project: peer.cwd, status: peer.status, activity: peer.activity?.slice(0, 320) })), total: peers.length, nextOffset: offset + 32 < peers.length ? offset + 32 : null, errors: found.errors.slice(0, 8), omittedErrors: Math.max(0, found.errors.length - 8), limitation: CHANNEL_NOTE };
  }

  async routeRequest(input: { targetId?: string; request: string; followupTo?: string }, wait?: { timeoutMs: number; signal?: AbortSignal }) {
    if (wait && (!Number.isFinite(wait.timeoutMs) || wait.timeoutMs < 0 || wait.timeoutMs > 60000)) throw new Error("Reply timeout must be between 0 and 60000 ms");
    wait?.signal?.throwIfAborted();
    const operation = this.#routeRequest(input, wait);
    this.#routes.add(operation);
    try { return await operation; }
    finally { this.#routes.delete(operation); }
  }

  async #routeRequest(input: { targetId?: string; request: string; followupTo?: string }, wait?: { timeoutMs: number; signal?: AbortSignal }) {
    if (!input.request.trim() || Buffer.byteLength(input.request) > 65536) throw new Error("Request must be nonempty and at most 64 KiB; never silently truncate user requests");
    const network = this.#requireNetwork();
    const previous = input.followupTo ? this.#requireStore().requests.find(row => row.id === input.followupTo) : undefined;
    if (input.followupTo && !previous) throw new Error("Unknown followup request; cannot infer its target");
    if (!previous && !input.targetId) throw new Error("New requests require an exact freshly listed targetId");
    const discovery = await network.discover();
    const targets = discovery.peers.filter(peer => previous ? peer.sessionId === previous.targetSessionId : peer.id === input.targetId);
    if (targets.length !== 1 || !this.#eligible(targets[0]!)) throw new Error(`Target missing, offline, ambiguous, self, or outside the named project roster. ${discovery.errors.slice(0, 3).join("; ")}`);
    const target = targets[0]!;
    if (previous && input.targetId && input.targetId !== target.id) throw new Error("Followup target does not match the prior stable session; list agents again");
    const row: ConversationRequest = { id: crypto.randomUUID(), targetId: target.id, targetSessionId: target.sessionId, targetName: target.displayName, project: target.cwd, request: input.request, followupTo: input.followupTo, state: "pending", createdAt: Date.now(), updatedAt: Date.now(), note: "Sending; acceptance not yet known" };
    await this.#mutate(async () => {
      this.#requireNetwork();
      const rows = this.#requireStore().requests;
      const original = rows.slice();
      if (rows.length >= LIMIT) {
        const index = rows.findIndex(item => item.state === "completed" || item.state === "failed");
        if (index < 0) throw new Error("Conversation has 256 unresolved requests; refusing additional handoffs without discarding uncertainty");
        rows.splice(index, 1);
      }
      rows.push(row);
      try { await this.#save(); }
      catch (error) {
        this.#requireStore().requests = original;
        throw error;
      }
    });
    // Register before send: a fast receiver can reply before its handoff receipt arrives.
    const reply = wait ? this.waitForReply(row.id, wait.timeoutMs, wait.signal) : undefined;
    const receipt = await network.send({ from: this.id, to: target.id, body: input.request, replyTo: row.id, expectsReply: true, senderSessionId: this.sessionId, senderName: "Conversation", kind: "request" });
    await this.#mutate(async () => {
      if (row.state !== "completed") {
        row.state = receipt.outcome === "failed" ? "unknown" : "pending";
        row.note = receipt.outcome === "failed" ? `Delivery failed or acceptance unknown; do not retry automatically. ${receipt.error ?? ""}` : "Handoff accepted into receiver channel; awaiting its reply, not proof of task completion";
        row.updatedAt = Date.now();
        await this.#save();
      }
    });
    return reply ? await reply : this.requestStatus(row.id);
  }

  async waitForReply(id: string, timeoutMs: number, signal?: AbortSignal) {
    if (!Number.isFinite(timeoutMs) || timeoutMs < 0 || timeoutMs > 60000) throw new Error("Reply timeout must be between 0 and 60000 ms");
    const initial = this.requestStatus(id);
    if ("state" in initial && initial.state === "completed") return { ...initial, wait: "reply" };
    if (this.#closing) return { ...initial, wait: "closed" };
    if (signal?.aborted) return { ...initial, wait: "aborted" };
    if (this.#waiters.has(id)) throw new Error("A reply waiter already owns this request");
    const reason = await new Promise<"reply" | "timeout" | "aborted" | "closed">(resolveWait => {
      const finish = (reason: "reply" | "timeout" | "aborted" | "closed") => {
        if (this.#waiters.get(id) !== finish) return;
        this.#waiters.delete(id);
        clearTimeout(timer);
        signal?.removeEventListener("abort", abort);
        resolveWait(reason);
      };
      const abort = () => finish("aborted");
      const timer = setTimeout(() => finish("timeout"), timeoutMs);
      this.#waiters.set(id, finish);
      signal?.addEventListener("abort", abort, { once: true });
      if (signal?.aborted) abort();
    });
    return { ...this.requestStatus(id), wait: reason };
  }

  requestStatus(id?: string, offset = 0) {
    if (!Number.isSafeInteger(offset) || offset < 0) throw new Error("offset must be a nonnegative integer");
    const rows = this.#requireStore().requests;
    if (!id) return { requests: rows.slice().reverse().slice(offset, offset + 32).map(({ request, reply, ...row }) => ({ ...row, requestPreview: request.slice(0, 200), hasReply: reply !== undefined })), total: rows.length, nextOffset: offset + 32 < rows.length ? offset + 32 : null, limitation: CHANNEL_NOTE };
    const row = rows.find(item => item.id === id);
    if (!row) throw new Error("Unknown request ID (completed history retains at most 256 requests)");
    const { request, reply, ...metadata } = row;
    return { ...metadata, requestPreview: request.slice(0, 1000), reply: reply?.slice(offset, offset + WINDOW), replyLength: reply?.length ?? 0, nextOffset: reply && offset + WINDOW < reply.length ? offset + WINDOW : null, limitation: CHANNEL_NOTE };
  }

  async #receive(message: PeerMessage) {
    return this.#mutate(async () => {
      const reject = (error: string) => ({ to: message.to, outcome: "failed" as const, error });
      if (message.to !== this.id || message.kind !== "reply" || message.wakeRelay || !message.replyTo) return reject("Conversation accepts correlated replies only, never inbound requests");
      const row = this.#requireStore().requests.find(item => item.id === message.replyTo);
      if (!row || message.from !== row.targetId || message.senderSessionId !== row.targetSessionId) return reject("Reply sender or correlation does not match the original handoff");
      if (row.reply !== undefined) return row.reply === message.body ? { to: message.to, outcome: "injected" as const } : reject("Conflicting duplicate reply; original retained");
      const previous = { ...row };
      row.reply = message.body;
      row.state = "completed";
      row.note = "Agent reply received; completed means response arrived, not independent verification of its claims";
      row.updatedAt = Date.now();
      try { await this.#save(); }
      catch (error) {
        delete row.reply;
        Object.assign(row, previous);
        throw error;
      }
      const waiter = this.#waiters.get(row.id);
      if (waiter) waiter("reply");
      else try { this.#options.onReply?.({ ...row }); } catch { /* Stored reply remains available through request_status. */ }
      return { to: message.to, outcome: "injected" as const };
    });
  }
}
