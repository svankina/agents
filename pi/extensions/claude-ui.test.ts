import { expect, mock, test } from "bun:test";

// The extension runs inside Pi, whose packages are not installed as local deps in
// this resource repo. Mock just the TUI/editor bits needed for pure helper tests.
// eslint-disable-next-line no-control-regex
const ANSI_PATTERN = new RegExp("\\u001B(?:[@-Z\\\\-_]|\\[[0-?]*[ -/]*[@-~]|\\][^\\u0007]*(?:\\u0007|\\u001B\\\\))", "g");

function visibleWidth(text: string): number {
  return [...text.replace(ANSI_PATTERN, "")].length;
}

function truncateToWidth(text: string, width: number, ellipsis = "…"): string {
  if (visibleWidth(text) <= width) return text;
  if (width <= 0) return "";
  const suffix = visibleWidth(ellipsis) <= width ? ellipsis : "";
  return [...text.replace(ANSI_PATTERN, "")].slice(0, Math.max(0, width - visibleWidth(suffix))).join("") + suffix;
}

mock.module("@earendil-works/pi-tui", () => ({ visibleWidth, truncateToWidth }));
mock.module("@earendil-works/pi-coding-agent", () => ({
  isToolCallEventType: (kind: string, event: any) => event?.tool === kind,
  CustomEditor: class {
    borderColor = (text: string) => text;
    render(width: number) {
      return ["─".repeat(width), "> "];
    }
  },
}));

const mod = await import("./claude-ui.ts");

test("formatCwdForStatus shortens paths under HOME", () => {
  expect(mod.formatCwdForStatus("/home/example/src/project", "/home/example")).toBe("~/src/project");
  expect(mod.formatCwdForStatus("/opt/project", "/home/example")).toBe("/opt/project");
});

test("formatTokens uses compact suffixes", () => {
  expect(mod.formatTokens(999)).toBe("999");
  expect(mod.formatTokens(1500)).toBe("1.5k");
  expect(mod.formatTokens(48800)).toBe("49k");
  expect(mod.formatTokens(1_200_000)).toBe("1.2M");
});

test("formatLimitDuration shows the two useful largest units", () => {
  expect(mod.formatLimitDuration(5 * 60_000)).toBe("5m");
  expect(mod.formatLimitDuration(101 * 60_000)).toBe("1h41m");
  expect(mod.formatLimitDuration((3 * 24 + 11) * 60 * 60_000)).toBe("3d11h");
});

test("getUsageTotals sums assistant usage only", () => {
  const totals = mod.getUsageTotals([
    { type: "message", message: { role: "user", usage: { input: 100 } } },
    { type: "message", message: { role: "assistant", usage: { input: 100, output: 20, cacheRead: 5, cost: { total: 0.01 } } } },
    { type: "message", message: { role: "assistant", usage: { input: 50, output: 5, cacheWrite: 2, cost: { total: 0.02 } } } },
  ] as any);

  expect(totals).toEqual({ input: 150, output: 25, cacheRead: 5, cacheWrite: 2, cost: 0.03 });
});

test("appendSessionLabelToRenderedLines adds and deduplicates the border badge", () => {
  const labelled = mod.appendSessionLabelToRenderedLines(["────────────────────", "> "], 20, "demo");
  expect(labelled[0]).toBe("────────────── demo ");

  const deduped = mod.appendSessionLabelToRenderedLines(labelled, 20, "demo");
  expect(deduped[0]).toBe(labelled[0]);
});

test("buildModeLine omits Claude Code insert/session-only text", () => {
  expect(
    mod.buildModeLine(
      {
        host: "pop-os",
        cwd: "~/src/pagent",
        sessionName: "tester_badge",
        totals: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, cost: 0 },
      },
      80,
    ),
  ).toBeUndefined();

  expect(
    mod.buildModeLine(
      {
        host: "pop-os",
        cwd: "~/src/pagent",
        totals: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, cost: 0 },
        statuses: ["Remote Control active"],
      },
      80,
    ),
  ).toBe("Remote Control active");
});

test("buildModeLine strips ANSI styling from extension statuses", () => {
  expect(mod.sanitizeSingleLine("\x1b[38;2;102;102;102mvoice off\x1b[39m")).toBe("voice off");

  expect(
    mod.buildModeLine(
      {
        host: "pop-os",
        cwd: "~/src/pagent",
        totals: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, cost: 0 },
        statuses: ["\x1b[38;2;102;102;102mvoice off\x1b[39m"],
      },
      80,
    ),
  ).toBe("voice off");
});

test("buildModeLine right-aligns fast status opposite other statuses", () => {
  const line = mod.buildModeLine(
    {
      host: "pop-os",
      cwd: "~/src/pagent",
      totals: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, cost: 0 },
      statusItems: [
        { key: "voice", text: "voice off" },
        { key: "fast", text: "fast off" },
      ],
    },
    40,
  );

  expect(visibleWidth(line ?? "")).toBe(40);
  expect(line?.startsWith("voice off")).toBe(true);
  expect(line?.endsWith("fast off")).toBe(true);
});

test("parseProviderLimitHeaders formats Codex usage-limit headers", () => {
  const now = 1_000_000;
  const snapshot = mod.parseProviderLimitHeaders(
    {
      "x-codex-active-limit": "premium",
      "x-codex-primary-over-secondary-limit-percent": "42",
      "x-codex-primary-reset-after-seconds": "3600",
    },
    now,
  );

  expect(snapshot).toMatchObject({ label: "premium", percentUsed: 42, resetAtMs: now + 3_600_000 });
  expect(mod.formatProviderLimitText(snapshot, now)).toBe("limit premium 42% ⏰ 1h");
  expect(mod.formatProviderLimitText(snapshot, now + 3_600_000 + 5 * 60_000 + 1)).toBeUndefined();
});

test("parseProviderLimitHeaders formats common rate-limit headers", () => {
  const now = 1_000_000;
  const snapshot = mod.parseProviderLimitHeaders(
    {
      "x-ratelimit-limit-requests": "1000",
      "x-ratelimit-remaining-requests": "250",
      "x-ratelimit-reset-requests": "2m",
    },
    now,
  );

  expect(snapshot).toMatchObject({ label: "req", percentUsed: 75, resetAtMs: now + 120_000 });
  expect(mod.formatProviderLimitText(snapshot, now)).toBe("limit req 75% ⏰ 2m");
});

test("formatLocalLimitsText formats local limitsd Codex windows", () => {
  const now = Date.parse("2026-06-08T08:39:00Z");
  const text = mod.formatLocalLimitsText(
    {
      providers: {
        codex: {
          provider: "codex",
          available: true,
          windows: [
            { id: "primary", label: "5-hour", remaining_percent: 63, reset_at: "2026-06-08T08:44:00Z" },
            { id: "secondary", label: "Weekly", remaining_percent: 50, reset_at: "2026-06-11T00:26:20Z" },
            { id: "spark_primary", label: "gpt-5.3-codex-spark 5-hour", remaining_percent: 100, reset_at: "2026-06-08T13:39:00Z" },
          ],
        },
      },
    },
    "openai-codex",
    "gpt-5.5",
    now,
  );

  expect(text).toBe("limit codex 5h 63% ⏰ 5m 7d 50% ⏰ 2d15h rem");
});

test("formatLocalLimitsText selects Spark-specific Codex windows", () => {
  const now = Date.parse("2026-06-08T08:39:00Z");
  const text = mod.formatLocalLimitsText(
    {
      providers: {
        codex: {
          provider: "codex",
          available: true,
          windows: [
            { id: "primary", label: "5-hour", remaining_percent: 63, reset_at: "2026-06-08T08:44:00Z" },
            { id: "spark_primary", label: "gpt-5.3-codex-spark 5-hour", remaining_percent: 100, reset_at: "2026-06-08T13:39:00Z" },
            { id: "spark_secondary", label: "gpt-5.3-codex-spark Weekly", remaining_percent: 95, reset_at: "2026-06-12T10:33:34Z" },
          ],
        },
      },
    },
    "openai-codex",
    "gpt-5.3-codex-spark",
    now,
  );

  expect(text).toBe("limit codex 5h 100% ⏰ 5h 7d 95% ⏰ 4d1h rem");
});

test("computeBottomAnchorBlankLines fills only remaining terminal rows", () => {
  expect(mod.computeBottomAnchorBlankLines(24, 12)).toBe(12);
  expect(mod.computeBottomAnchorBlankLines(24, 24)).toBe(0);
  expect(mod.computeBottomAnchorBlankLines(24, 30)).toBe(0);
  expect(mod.computeBottomAnchorBlankLines(undefined, 12)).toBe(0);
});

test("BottomAnchorSpacer measures fixed content and skips itself", () => {
  const tui = {
    terminal: { rows: 6 },
    children: [] as Array<{ render(width: number): string[]; invalidate(): void }>,
  };
  const spacer = new mod.BottomAnchorSpacer(tui);
  tui.children = [
    { render: () => ["header"], invalidate() {} },
    { render: (width: number) => spacer.render(width), invalidate() {} },
    { render: () => ["editor", "footer"], invalidate() {} },
  ];

  expect(spacer.render(80)).toEqual(["", "", ""]);

  tui.terminal.rows = 2;
  expect(spacer.render(80)).toEqual([]);
});

test("buildStatusLine includes provider usage-limit text", () => {
  const line = mod.buildStatusLine(
    {
      host: "pop-os",
      cwd: "~/src/pagent",
      totals: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, cost: 0 },
      modelId: "gpt-5.5",
      provider: "openai-codex",
      thinkingLevel: "medium",
      apiLimitText: "limit premium 42% ⏰ 1h",
    },
    120,
  );

  expect(line).toContain("limit premium ████░░░░░░ 42% ⏰ 1h");
});

test("buildStatusLine renders local limits with remaining bars", () => {
  const line = mod.buildStatusLine(
    {
      host: "pop-os",
      cwd: "~/src/pagent",
      totals: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, cost: 0 },
      modelId: "gpt-5.5",
      provider: "openai-codex",
      apiLimitText: "limit codex 5h 63% ⏰ 5m 7d 50% ⏰ 2d15h rem",
    },
    160,
  );

  expect(line).toContain("limit codex 5h ██████░░░░ 63% ⏰ 5m 7d █████░░░░░ 50% ⏰ 2d15h rem");
});

test("buildStatusLine keeps the rendered footer within the requested width", () => {
  const line = mod.buildStatusLine(
    {
      host: "pop-os",
      cwd: "~/src/pagent",
      branch: "master",
      ageMs: 5 * 60 * 60 * 1000,
      totals: { input: 12_000, output: 3400, cacheRead: 0, cacheWrite: 0, cost: 2.8 },
      modelId: "gpt-5.5",
      provider: "openai-codex",
      thinkingLevel: "medium",
      contextTokens: 48_800,
      contextWindow: 1_000_000,
      contextPercent: 4.88,
    },
    80,
  );

  expect(visibleWidth(line)).toBeLessThanOrEqual(80);
  expect(line).toContain("pop-os");
  expect(line).toContain("~/src/pagent");
  expect(line).toContain("gpt-5.5");
});
