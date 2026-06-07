// Unit tests for the transparent playground-routing Pi extension.
//
// Run with:  bun test pi/extensions/playground-routing.test.ts
//
// The extension imports `isToolCallEventType` from @earendil-works/pi-coding-agent
// (provided by the pi runtime, not installed as a node module here), so we mock
// that bare specifier before importing the module under test.
import { afterAll, beforeEach, expect, mock, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

mock.module("@earendil-works/pi-coding-agent", () => ({
  // Mirror the real narrowing helper: true when the event is a tool call of the
  // given kind. Our fake events carry { tool, input }.
  isToolCallEventType: (kind: string, event: any) => event?.tool === kind,
}));

const mod = await import("./playground-routing.ts");

// --- helpers ---------------------------------------------------------------

function fakePi() {
  const handlers: Record<string, Function> = {};
  return {
    pi: { on: (name: string, fn: Function) => (handlers[name] = fn) } as any,
    handlers,
  };
}

function bashEvent(command: string, timeout?: number) {
  return { tool: "bash", input: { command, timeout } };
}

const savedEnv = { ...process.env };
beforeEach(() => {
  // Reset the env keys the extension reads, so tests don't bleed into each other.
  for (const k of ["PLAYGROUND_ROUTING_ENABLED", "PLAYGROUND_BIN", "PLAYGROUND_SESSION_ID", "PI_SESSION_ID"]) {
    delete process.env[k];
  }
});
afterAll(() => {
  for (const k of Object.keys(process.env)) if (!(k in savedEnv)) delete process.env[k];
  Object.assign(process.env, savedEnv);
});

// --- shellQuote ------------------------------------------------------------

test("shellQuote wraps plain values in single quotes", () => {
  expect(mod.shellQuote("echo hi")).toBe("'echo hi'");
});

test("shellQuote escapes embedded single quotes safely", () => {
  // it's -> 'it'\''s' : closes the quote, escapes a literal ', reopens.
  expect(mod.shellQuote("it's")).toBe("'it'\\''s'");
});

// --- resolveSessionId precedence ------------------------------------------

test("resolveSessionId prefers PLAYGROUND_SESSION_ID, then PI_SESSION_ID, then pid", () => {
  expect(mod.resolveSessionId({ PLAYGROUND_SESSION_ID: "a", PI_SESSION_ID: "b" } as any)).toBe("a");
  expect(mod.resolveSessionId({ PI_SESSION_ID: "b" } as any)).toBe("b");
  expect(mod.resolveSessionId({} as any)).toBe(`pi-${process.pid}`);
});

// --- buildRoutedCommand ----------------------------------------------------

test("buildRoutedCommand wraps the command through route --exec with a pinned session", () => {
  const cmd = mod.buildRoutedCommand({ bin: "/r/bin/playground", sessionId: "sess-1", original: "ls -la" });
  expect(cmd).toBe(
    "PLAYGROUND_SESSION_ID='sess-1' exec '/r/bin/playground' route --exec -- 'ls -la'",
  );
});

test("buildRoutedCommand forwards a positive timeout and omits non-positive ones", () => {
  expect(mod.buildRoutedCommand({ bin: "/b", sessionId: "s", original: "x", timeout: 30 })).toContain(
    "route --exec --timeout 30 --",
  );
  expect(mod.buildRoutedCommand({ bin: "/b", sessionId: "s", original: "x", timeout: 0 })).toContain(
    "route --exec -- ",
  );
  expect(mod.buildRoutedCommand({ bin: "/b", sessionId: "s", original: "x" })).toContain("route --exec -- ");
});

test("buildRoutedCommand keeps a command with pipes/quotes intact as one argument", () => {
  const cmd = mod.buildRoutedCommand({
    bin: "/b",
    sessionId: "s",
    original: "echo a | tr a-z A-Z",
  });
  expect(cmd.endsWith("-- 'echo a | tr a-z A-Z'")).toBe(true);
});

// --- locatePlaygroundBin ---------------------------------------------------

test("locatePlaygroundBin honors a valid PLAYGROUND_BIN override", () => {
  const dir = mkdtempSync(join(tmpdir(), "pgbin-"));
  const bin = join(dir, "playground");
  writeFileSync(bin, "#!/bin/sh\n");
  process.env.PLAYGROUND_BIN = bin;
  try {
    expect(mod.locatePlaygroundBin("/nowhere/at/all")).toBe(bin);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("locatePlaygroundBin walks up to a repo with .tester/playgrounds + bin/playground", () => {
  const repo = mkdtempSync(join(tmpdir(), "pgrepo-"));
  mkdirSync(join(repo, ".tester", "playgrounds"), { recursive: true });
  mkdirSync(join(repo, "bin"), { recursive: true });
  writeFileSync(join(repo, "bin", "playground"), "#!/bin/sh\n");
  const deep = join(repo, "a", "b", "c");
  mkdirSync(deep, { recursive: true });
  try {
    expect(mod.locatePlaygroundBin(deep)).toBe(join(repo, "bin", "playground"));
  } finally {
    rmSync(repo, { recursive: true, force: true });
  }
});

test("locatePlaygroundBin returns null when no playground repo is found", () => {
  const dir = mkdtempSync(join(tmpdir(), "pgnone-"));
  try {
    expect(mod.locatePlaygroundBin(dir)).toBeNull();
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// --- the factory / tool_call handler --------------------------------------

test("factory registers no handler unless PLAYGROUND_ROUTING_ENABLED=1", () => {
  const { pi, handlers } = fakePi();
  mod.default(pi);
  expect(handlers["tool_call"]).toBeUndefined();
});

test("factory registers a tool_call handler when enabled", () => {
  process.env.PLAYGROUND_ROUTING_ENABLED = "1";
  const { pi, handlers } = fakePi();
  mod.default(pi);
  expect(typeof handlers["tool_call"]).toBe("function");
});

test("handler rewrites bash commands to route through the located bin", async () => {
  const repo = mkdtempSync(join(tmpdir(), "pghand-"));
  mkdirSync(join(repo, ".tester", "playgrounds"), { recursive: true });
  mkdirSync(join(repo, "bin"), { recursive: true });
  const bin = join(repo, "bin", "playground");
  writeFileSync(bin, "#!/bin/sh\n");
  process.env.PLAYGROUND_ROUTING_ENABLED = "1";
  process.env.PLAYGROUND_BIN = bin;
  try {
    const { pi, handlers } = fakePi();
    mod.default(pi);
    const event = bashEvent("npm test", 45);
    await handlers["tool_call"](event, { cwd: repo });
    expect(event.input.command).toBe(
      `PLAYGROUND_SESSION_ID=${mod.shellQuote(mod.resolveSessionId(process.env))} ` +
        `exec '${bin}' route --exec --timeout 45 -- 'npm test'`,
    );
  } finally {
    rmSync(repo, { recursive: true, force: true });
  }
});

test("handler leaves non-bash tool calls untouched", async () => {
  process.env.PLAYGROUND_ROUTING_ENABLED = "1";
  const { pi, handlers } = fakePi();
  mod.default(pi);
  const event: any = { tool: "edit", input: { command: "should not change" } };
  await handlers["tool_call"](event, { cwd: process.cwd() });
  expect(event.input.command).toBe("should not change");
});

test("handler leaves the command on the host when no playground bin is found", async () => {
  const dir = mkdtempSync(join(tmpdir(), "pgnobin-"));
  process.env.PLAYGROUND_ROUTING_ENABLED = "1";
  try {
    const { pi, handlers } = fakePi();
    mod.default(pi);
    const event = bashEvent("echo hi");
    await handlers["tool_call"](event, { cwd: dir });
    expect(event.input.command).toBe("echo hi");
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
