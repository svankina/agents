import { test, expect } from "bun:test";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ConversationRouter } from "../omp/lib/conversation-router";
import { PeerNetwork, qualifyPeer, type PeerMessage } from "../omp/lib/peers-transport";

async function sandbox() {
  const root = await mkdtemp(join(tmpdir(), "conversation-test-"));
  const peers: PeerNetwork[] = [];
  const routers: ConversationRouter[] = [];
  const router = () => {
    const instance = new ConversationRouter({ stateDir: join(root, "state"), projectRoot: root, peerDir: join(root, "peers") });
    routers.push(instance);
    return instance;
  };
  const peer = async (sessionId: string, name = "specialist", onRequest?: (message: PeerMessage, network: PeerNetwork) => Promise<void>) => {
    const received: PeerMessage[] = [];
    const network = new PeerNetwork({
      directory: join(root, "peers"),
      peers: instanceId => [{ id: qualifyPeer(instanceId, "Main"), localId: "Main", instanceId, sessionId, displayName: name, kind: "main", status: "idle", cwd: root, pid: process.pid, lastActivity: Date.now() }],
      receive: async message => { received.push(message); await onRequest?.(message, network); return { to: message.to, outcome: "injected" }; },
    });
    peers.push(network);
    await network.start();
    return { network, received, id: qualifyPeer(network.instanceId, "Main"), sessionId };
  };
  return { root, router, peer, async close() {
    for (const instance of routers) await instance.close();
    for (const instance of peers) await instance.close();
    await rm(root, { recursive: true, force: true });
  } };
}

test("exact handoff identity rejects wrong-session replies and conflicting duplicates", async () => {
  const box = await sandbox();
  try {
    const first = await box.peer("first");
    const sameName = await box.peer("second");
    const router = box.router();
    await router.start();
    const request = "Investigate the actual failure.\nKeep this full request intact.";
    const sent = await router.routeRequest({ targetId: first.id, request });
    expect(first.received.map(message => message.body)).toEqual([request]);
    expect(sameName.received).toEqual([]);
    const reply = { from: first.id, to: router.id, body: "Verified result from the intended agent", replyTo: sent.id, senderSessionId: "first", kind: "reply" as const };
    expect((await sameName.network.send({ ...reply, from: sameName.id, senderSessionId: "second" })).outcome).toBe("failed");
    expect((await first.network.send({ ...reply, senderSessionId: "replaced-session" })).outcome).toBe("failed");
    expect((await first.network.send(reply)).outcome).toBe("injected");
    expect((await first.network.send(reply)).outcome).toBe("injected");
    expect((await first.network.send({ ...reply, body: "Conflicting replacement" })).outcome).toBe("failed");
    expect(router.requestStatus(sent.id)).toMatchObject({ state: "completed", reply: reply.body });
  } finally { await box.close(); }
});

test("followups survive target transport restart but never adopt a same-named session", async () => {
  const box = await sandbox();
  try {
    const first = await box.peer("stable-session");
    const router = box.router();
    await router.start();
    const initial = await router.routeRequest({ targetId: first.id, request: "First request" });
    await first.network.close();
    const replacement = await box.peer("different-session");
    await expect(router.routeRequest({ followupTo: initial.id, request: "Followup" })).rejects.toThrow();
    expect(replacement.received).toEqual([]);
    const resumed = await box.peer("stable-session");
    await router.routeRequest({ followupTo: initial.id, request: "Followup" });
    expect(resumed.received.map(message => message.body)).toEqual(["Followup"]);
    expect(replacement.received).toEqual([]);
  } finally { await box.close(); }
});

test("router restart preserves uncertainty without replaying an accepted request", async () => {
  const box = await sandbox();
  try {
    const target = await box.peer("target");
    const original = box.router();
    await original.start();
    const request = await original.routeRequest({ targetId: target.id, request: "Potentially mutating operation" });
    await original.close();
    const resumed = box.router();
    await resumed.start();
    expect(resumed.requestStatus(request.id)).toMatchObject({ state: "unknown" });
    expect(target.received.map(message => message.body)).toEqual(["Potentially mutating operation"]);
  } finally { await box.close(); }
});

test("a reply arriving before the send receipt satisfies the event-driven wait", async () => {
  const box = await sandbox();
  try {
    const target = await box.peer("fast-agent", "specialist", async (message, network) => {
      await network.send({ from: message.to, to: message.from, body: "Actual result", replyTo: message.replyTo, senderSessionId: "fast-agent", kind: "reply" });
    });
    const router = box.router();
    await router.start();
    const result = await router.routeRequest({ targetId: target.id, request: "Quick question" }, { timeoutMs: 1000 });
    expect(result).toMatchObject({ state: "completed", reply: "Actual result", wait: "reply" });
  } finally { await box.close(); }
});

test("responsibilities refresh from config and never transfer to a same-named session", async () => {
  const box = await sandbox();
  try {
    const original = await box.peer("known-session");
    const router = box.router();
    await router.start();
    const registry = join(box.root, "state", "agents.json");
    await writeFile(registry, JSON.stringify([{ sessionId: original.sessionId, description: "Coordinates Herd implementation" }]));
    expect((await router.listAgents("Herd implementation")).agents.map(agent => agent.id)).toEqual([original.id]);
    await original.network.close();
    await box.peer("new-session");
    expect((await router.listAgents("Herd implementation")).agents).toEqual([]);
    await writeFile(registry, JSON.stringify([{ sessionId: "new-session", description: "Coordinates Herd implementation" }]));
    expect((await router.listAgents("Herd implementation")).agents.map(agent => agent.sessionId)).toEqual(["new-session"]);
  } finally { await box.close(); }
});

test("handoff progress reports accepted before a later response and cannot break delivery", async () => {
  const box = await sandbox();
  let progress: string | undefined;
  const router = new ConversationRouter({
    stateDir: join(box.root, "progress-state"), projectRoot: box.root, peerDir: join(box.root, "peers"),
    onHandoff: row => {
      progress = row.state;
      throw new Error("UI unavailable");
    },
  });
  try {
    const target = await box.peer("progress");
    await router.start();
    const sent = await router.routeRequest({ targetId: target.id, request: "Progress smoke" });
    expect(progress).toBe("pending");
    expect(sent).toMatchObject({ state: "pending" });
    await target.network.send({ from: target.id, to: router.id, body: "Response arrived", replyTo: sent.id, senderSessionId: "progress", kind: "reply" });
    expect(router.requestStatus(sent.id)).toMatchObject({ state: "completed", reply: "Response arrived" });
    expect(target.received.map(message => message.body)).toEqual(["Progress smoke"]);
  } finally { await router.close(); await box.close(); }
});
