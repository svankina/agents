import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const DEFAULT_CAPTURE_LINES = 240;
const DEFAULT_PIP_LINES = 18;
const DEFAULT_PIP_INTERVAL_MS = 2_000;
const STATE_ENTRY_TYPE = "claude-saddle-pip-state";
const RELOAD_INTENT_ENTRY_TYPE = "agent-reload-resume-intent";
const RELOAD_CONSUMED_ENTRY_TYPE = "agent-reload-resume-consumed";
const RELOAD_INTENT_MAX_AGE_MS = 10 * 60 * 1000;

type ExecResult = { code?: number; stdout?: string; stderr?: string; killed?: boolean };
type UiContext = Parameters<Parameters<ExtensionAPI["registerCommand"]>[1]["handler"]>[1];
type UiTheme = UiContext["ui"]["theme"];
type OverlayHandleLike = { hide(): void };
type InputListenerResult = { consume?: boolean; data?: string } | void;
type TuiLike = {
  requestRender(force?: boolean): void;
  addInputListener?(listener: (data: string) => InputListenerResult): () => void;
  terminal?: { write(data: string): void; columns?: number; rows?: number };
};
type PipPersistedState = { sessionName: string; lines: number; intervalMs: number; active: boolean; updatedAt: number };
type ReloadIntent = { token: string; reason: string; resumeMessage: string; createdAt: number };
type PipState = {
  sessionName: string;
  interval: NodeJS.Timeout;
  intervalMs: number;
  lines: number;
  drivingLog: string[];
  lastPane: string;
  scrollOffset: number;
  updating: boolean;
  overlayHandle?: OverlayHandleLike;
  tui?: TuiLike;
  removeInputListener?: () => void;
  mouseEnabled?: boolean;
  selectionStart?: { row: number; col: number };
  selectionEnd?: { row: number; col: number };
  lastRows?: string[];
  lastGeometry?: { col: number; row: number; width: number; height: number };
  lastMouseStatus?: string;
};

const pipStates = new Map<string, PipState>();

function sanitizeSessionName(name: string): string {
  return name.replace(/[^A-Za-z0-9_.:-]/g, "-").slice(0, 80) || `claude-saddle-${Date.now()}`;
}

function slug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9_.-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "task";
}

function shellQuote(value: string): string {
  return `'${value.replaceAll("'", "'\\''")}'`;
}

function outputOf(result: ExecResult): string {
  return [result.stdout, result.stderr].filter(Boolean).join("\n").trim();
}

function assertOk(result: ExecResult, action: string) {
  if (result.code === 0) return;
  const output = outputOf(result);
  throw new Error(`${action} failed${output ? `: ${output}` : ""}`);
}

function resolveMaybe(cwd: string, path: string): string {
  return path.startsWith("/") ? path : resolve(cwd, path);
}

async function tmuxHasSession(pi: ExtensionAPI, sessionName: string, signal?: AbortSignal): Promise<boolean> {
  const result = await pi.exec("tmux", ["has-session", "-t", sessionName], { signal, timeout: 5_000 }) as ExecResult;
  return result.code === 0;
}

async function sendText(pi: ExtensionAPI, sessionName: string, text: string, signal?: AbortSignal): Promise<string> {
  const dir = mkdtempSync(join(tmpdir(), "claude-saddle-"));
  const promptPath = join(dir, "message.txt");
  const bufferName = `claude-saddle-${process.pid}-${Date.now()}`;
  writeFileSync(promptPath, text, "utf8");

  const load = await pi.exec("tmux", ["load-buffer", "-b", bufferName, promptPath], { signal, timeout: 5_000 }) as ExecResult;
  assertOk(load, "tmux load-buffer");

  const paste = await pi.exec("tmux", ["paste-buffer", "-t", sessionName, "-b", bufferName, "-d"], { signal, timeout: 5_000 }) as ExecResult;
  assertOk(paste, "tmux paste-buffer");

  const enter = await pi.exec("tmux", ["send-keys", "-t", sessionName, "Enter"], { signal, timeout: 5_000 }) as ExecResult;
  assertOk(enter, "tmux send-keys Enter");

  return promptPath;
}

async function capturePane(pi: ExtensionAPI, sessionName: string, lines: number, signal?: AbortSignal): Promise<string> {
  const result = await pi.exec("tmux", ["capture-pane", "-t", sessionName, "-p", "-e", "-S", `-${lines}`], { signal, timeout: 5_000 }) as ExecResult;
  assertOk(result, "tmux capture-pane");
  return result.stdout ?? "";
}

function stripAnsi(text: string): string {
  return text.replace(/\x1b\[[0-9;?]*[ -/]*[@-~]/g, "");
}

function visibleWidth(text: string): number {
  return stripAnsi(text).length;
}

function truncateLine(text: string, width: number): string {
  const plain = stripAnsi(text);
  if (plain.length <= width) return text + " ".repeat(Math.max(0, width - plain.length));
  return plain.slice(0, Math.max(0, width - 1)) + "…";
}

async function copyText(pi: ExtensionAPI, text: string, signal?: AbortSignal): Promise<string> {
  const clipboardCommands = [
    { name: "wl-copy", args: ["wl-copy"] },
    { name: "xclip", args: ["xclip", "-selection", "clipboard"] },
    { name: "xsel", args: ["xsel", "--clipboard", "--input"] },
    { name: "pbcopy", args: ["pbcopy"] },
  ];
  for (const command of clipboardCommands) {
    const has = await pi.exec("bash", ["-lc", `command -v ${command.name}`], { signal, timeout: 2_000 }) as ExecResult;
    if (has.code !== 0) continue;
    const dir = mkdtempSync(join(tmpdir(), "claude-saddle-copy-"));
    const copyPath = join(dir, "copy.txt");
    writeFileSync(copyPath, text, "utf8");
    const result = await pi.exec("bash", ["-lc", `${command.args.map(shellQuote).join(" ")} < ${shellQuote(copyPath)}`], { signal, timeout: 5_000 }) as ExecResult;
    if (result.code === 0) return command.name;
  }

  const encoded = Buffer.from(text, "utf8").toString("base64");
  process.stdout.write(`\x1b]52;c;${encoded}\x07`);
  return "OSC52";
}

function renderPip(state: PipState, width: number, theme: UiTheme): string[] {
  const innerWidth = Math.max(10, width - 2);
  const claudeBudget = Math.max(3, state.lines);
  const allClaudeLines = (state.lastPane || "(waiting for Claude output)").replace(/\s+$/g, "").split("\n");
  const maxScroll = Math.max(0, allClaudeLines.length - claudeBudget);
  state.scrollOffset = Math.max(0, Math.min(state.scrollOffset, maxScroll));
  const end = Math.max(0, allClaudeLines.length - state.scrollOffset);
  const start = Math.max(0, end - claudeBudget);
  const claudeLines = allClaudeLines.slice(start, end);
  const driveLines = state.drivingLog.slice(-3);
  const title = ` ◼ Claude Code Saddle: ${state.sessionName} `;
  const clippedTitle = title.length > innerWidth ? ` ◼ ${state.sessionName.slice(0, Math.max(1, innerWidth - 5))}…` : title;
  const leftRule = "─".repeat(Math.max(0, Math.floor((innerWidth - visibleWidth(clippedTitle)) / 2)));
  const rightRule = "─".repeat(Math.max(0, innerWidth - visibleWidth(clippedTitle) - leftRule.length));
  const ansi = (code: string, text: string) => `\x1b[${code}m${text}\x1b[0m`;
  const claudeOrange = "38;2;211;113;75";
  const border = (text: string) => ansi(claudeOrange, text);
  const heading = (text: string) => ansi(`1;${claudeOrange}`, text);
  const driving = (text: string) => ansi("38;5;82", text);
  const claude = (text: string) => text;
  const muted = (text: string) => ansi("38;5;245", text);
  const warning = (text: string) => ansi(claudeOrange, text);
  const rows: Array<{ text: string; color: (text: string) => string }> = [
    { text: "Click line to copy · drag range · wheel scrolls", color: warning },
    { text: "", color: muted },
    { text: "You driving:", color: heading },
    ...(driveLines.length ? driveLines : ["· opened PiP"]).map((line) => ({ text: `  ${line}`, color: driving })),
    { text: "", color: muted },
    { text: "Claude pane:", color: heading },
    ...claudeLines.map((line) => ({ text: `  ${line}`, color: claude })),
    { text: "", color: muted },
    { text: `Showing ${start + 1}-${end}/${allClaudeLines.length} · ${state.scrollOffset ? `${state.scrollOffset} lines up` : "at bottom"}`, color: muted },
    { text: state.lastMouseStatus ? `Mouse: ${state.lastMouseStatus}` : "Mouse: waiting for drag/wheel", color: muted },
    { text: "Drag highlights + copies · wheel scrolls", color: warning },
  ];
  const plainRows = rows.map((row) => truncateLine(row.text, innerWidth));
  state.lastRows = plainRows.map((line) => stripAnsi(line));
  return [
    border(`╭${leftRule}`) + heading(clippedTitle) + border(`${rightRule}╮`),
    ...rows.map((row, index) => border("│") + row.color(applySelection(state, truncateLine(row.text, innerWidth), index)) + border("│")),
    border(`╰${"─".repeat(innerWidth)}╯`),
  ];
}

class ClaudeSaddlePipComponent {
  constructor(private readonly state: PipState, private theme: UiTheme) {}

  render(width: number): string[] {
    const lines = renderPip(this.state, width, this.theme);
    const termWidth = this.state.tui?.terminal?.columns ?? 120;
    const termHeight = this.state.tui?.terminal?.rows ?? 40;
    const col0 = Math.max(0, termWidth - 1 - width);
    const row0 = Math.max(0, Math.floor((termHeight - lines.length) / 2));
    this.state.lastGeometry = { col: col0, row: row0, width, height: lines.length };
    return lines;
  }

  handleInput(data: string): void {
    const wheel = mouseWheelDelta(data);
    if (wheel !== 0) scrollPip(this.state, wheel);
    if (data === "\u001b[A" || data === "k") scrollPip(this.state, 1);
    if (data === "\u001b[B" || data === "j") scrollPip(this.state, -1);
    if (data === "\u001b[5~") scrollPip(this.state, 10);
    if (data === "\u001b[6~") scrollPip(this.state, -10);
  }

  invalidate(): void {}
}

function mouseEvent(data: string): { button: number; col: number; row: number; release: boolean } | undefined {
  const sgr = data.match(/^\x1b\[<(\d+);(\d+);(\d+)([Mm])$/);
  if (sgr) return { button: Number.parseInt(sgr[1]!, 10), col: Number.parseInt(sgr[2]!, 10), row: Number.parseInt(sgr[3]!, 10), release: sgr[4] === "m" };
  if (data.length === 6 && data.startsWith("\x1b[M")) return { button: data.charCodeAt(3) - 32, col: data.charCodeAt(4) - 32, row: data.charCodeAt(5) - 32, release: false };
  return undefined;
}


function mouseWheelDelta(data: string): number {
  const sgr = data.match(/^\x1b\[<(\d+);\d+;\d+[Mm]$/);
  if (sgr) {
    const button = Number.parseInt(sgr[1]!, 10);
    if (button === 64) return 3;
    if (button === 65) return -3;
  }

  if (data.length === 6 && data.startsWith("\x1b[M")) {
    const button = data.charCodeAt(3) - 32;
    if (button === 64) return 3;
    if (button === 65) return -3;
  }

  return 0;
}

function selectionRange(state: PipState): { start: { row: number; col: number }; end: { row: number; col: number } } | undefined {
  if (!state.selectionStart || !state.selectionEnd) return undefined;
  const a = state.selectionStart;
  const b = state.selectionEnd;
  if (a.row < b.row || (a.row === b.row && a.col <= b.col)) return { start: a, end: b };
  return { start: b, end: a };
}

function applySelection(state: PipState, line: string, row: number): string {
  const range = selectionRange(state);
  if (!range || row < range.start.row || row > range.end.row) return line;
  const plain = stripAnsi(line);
  const start = row === range.start.row ? range.start.col : 0;
  const end = row === range.end.row ? range.end.col : plain.length;
  if (end <= start) return line;
  return plain.slice(0, start) + "\x1b[7m" + plain.slice(start, end) + "\x1b[27m" + plain.slice(end);
}

function selectedText(state: PipState): string {
  const range = selectionRange(state);
  if (!range || !state.lastRows) return "";
  const lines: string[] = [];
  for (let row = range.start.row; row <= range.end.row; row++) {
    const line = state.lastRows[row] ?? "";
    const start = row === range.start.row ? range.start.col : 0;
    const end = row === range.end.row ? range.end.col : line.length;
    lines.push(line.slice(start, end).trimEnd());
  }
  return lines.join("\n").trim();
}

function mouseToPipCell(state: PipState, event: { col: number; row: number }): { row: number; col: number } | undefined {
  const g = state.lastGeometry;
  if (!g) return undefined;
  const row = event.row - g.row - 2;
  const col = event.col - g.col - 2;
  if (row < 0 || row >= (state.lastRows?.length ?? 0) || col < 0 || col >= g.width - 2) return undefined;
  return { row, col };
}

function scrollPip(state: PipState, delta: number | "top" | "bottom") {
  const allLines = (state.lastPane || "").replace(/\s+$/g, "").split("\n").filter((line, index, arr) => line.length > 0 || index < arr.length - 1);
  const maxScroll = Math.max(0, allLines.length - Math.max(3, state.lines));
  if (delta === "top") state.scrollOffset = maxScroll;
  else if (delta === "bottom") state.scrollOffset = 0;
  else state.scrollOffset = Math.max(0, Math.min(maxScroll, state.scrollOffset + delta));
  state.tui?.requestRender();
}

function appendDriving(state: PipState, message: string) {
  const stamp = new Date().toLocaleTimeString();
  state.drivingLog.push(`${stamp} ${message}`);
  state.drivingLog = state.drivingLog.slice(-20);
}

async function refreshPip(pi: ExtensionAPI, _ctx: UiContext, state: PipState, signal?: AbortSignal) {
  if (state.updating) return;
  state.updating = true;
  try {
    state.lastPane = await capturePane(pi, state.sessionName, Math.max(state.lines + 200, 1000), signal);
  } catch (error) {
    appendDriving(state, `PiP refresh failed: ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    state.updating = false;
    state.tui?.requestRender();
  }
}

function persistPip(pi: ExtensionAPI, state: PipState | PipPersistedState, active = true) {
  pi.appendEntry(STATE_ENTRY_TYPE, {
    sessionName: state.sessionName,
    lines: state.lines,
    intervalMs: state.intervalMs,
    active,
    updatedAt: Date.now(),
  });
}

function setMouseMode(state: PipState, enabled: boolean) {
  const terminal = state.tui?.terminal;
  if (!terminal || state.mouseEnabled === enabled) return;
  terminal.write(enabled ? "\x1b[?1000h\x1b[?1002h\x1b[?1003h\x1b[?1006h" : "\x1b[?1006l\x1b[?1003l\x1b[?1002l\x1b[?1000l");
  state.mouseEnabled = enabled;
}

function stopPip(_ctx?: UiContext, persist = true, pi?: ExtensionAPI) {
  for (const state of pipStates.values()) {
    clearInterval(state.interval);
    state.removeInputListener?.();
    setMouseMode(state, false);
    state.overlayHandle?.hide();
    if (persist && pi) persistPip(pi, state, false);
  }
  pipStates.clear();
}

async function startPip(pi: ExtensionAPI, ctx: UiContext, sessionName: string, lines = DEFAULT_PIP_LINES, intervalMs = DEFAULT_PIP_INTERVAL_MS, signal?: AbortSignal, restored = false) {
  stopPip(ctx, false);
  const state: PipState = { sessionName, interval: undefined as unknown as NodeJS.Timeout, intervalMs, lines, drivingLog: [], lastPane: "", scrollOffset: 0, updating: false };
  appendDriving(state, restored ? "restored right-side PiP after reload" : "started Claude session and opened right-side PiP");
  persistPip(pi, state, true);
  pipStates.set(sessionName, state);

  void ctx.ui.custom<void>((tui, theme, _keybindings, _done) => {
    state.tui = tui as TuiLike;
    setMouseMode(state, true);
    state.removeInputListener = state.tui.addInputListener?.((data: string) => {
      const event = mouseEvent(data);
      if (!event) return;
      const cell = mouseToPipCell(state, event);
      state.lastMouseStatus = `button=${event.button} ${event.release ? "release" : "press"} at ${event.col},${event.row}${cell ? ` -> ${cell.col},${cell.row}` : " outside"}`;
      const wheel = mouseWheelDelta(data);
      if (wheel !== 0) {
        scrollPip(state, wheel);
        return { consume: true };
      }
      if (event.button === 0 && !event.release && cell) {
        state.selectionStart = cell;
        state.selectionEnd = cell;
        state.tui?.requestRender();
        return { consume: true };
      }
      if ((event.button & 32) === 32 && state.selectionStart && cell) {
        state.selectionEnd = cell;
        state.tui?.requestRender();
        return { consume: true };
      }
      if (event.release && state.selectionStart) {
        if (cell) state.selectionEnd = cell;
        let text = selectedText(state);
        if (!text) {
          const row = state.selectionStart.row;
          const line = state.lastRows?.[row]?.trimEnd() ?? "";
          if (line) {
            state.selectionStart = { row, col: 0 };
            state.selectionEnd = { row, col: line.length };
            text = line.trim();
          }
        }
        // Keep the highlight visible after release so users can see exactly what was copied.
        // The next press replaces the selection.
        if (text) void copyText(pi, text).then((method) => appendDriving(state, `copied selection via ${method}`)).catch((error) => appendDriving(state, `copy failed: ${error instanceof Error ? error.message : String(error)}`)).finally(() => state.tui?.requestRender());
        else state.tui?.requestRender();
        return { consume: true };
      }
    });
    return new ClaudeSaddlePipComponent(state, theme);
  }, {
    overlay: true,
    overlayOptions: {
      anchor: "right-center",
      width: "34%",
      minWidth: 34,
      margin: { right: 1 },
      nonCapturing: true,
      visible: (termWidth: number, termHeight: number) => termWidth >= 90 && termHeight >= 20,
    },
    onHandle: (handle) => {
      state.overlayHandle = handle as OverlayHandleLike;
    },
  });

  state.interval = setInterval(() => void refreshPip(pi, ctx, state), intervalMs);
  state.interval.unref?.();
  await refreshPip(pi, ctx, state, signal);
}

function latestPersistedPip(ctx: UiContext): PipPersistedState | undefined {
  let latest: PipPersistedState | undefined;
  for (const entry of ctx.sessionManager.getEntries()) {
    if (entry.type !== "custom" || entry.customType !== STATE_ENTRY_TYPE) continue;
    const data = entry.data as Partial<PipPersistedState>;
    if (typeof data.sessionName !== "string" || typeof data.active !== "boolean") continue;
    if (!latest || (data.updatedAt ?? 0) > latest.updatedAt) {
      latest = {
        sessionName: data.sessionName,
        lines: typeof data.lines === "number" ? data.lines : DEFAULT_PIP_LINES,
        intervalMs: typeof data.intervalMs === "number" ? data.intervalMs : DEFAULT_PIP_INTERVAL_MS,
        active: data.active,
        updatedAt: typeof data.updatedAt === "number" ? data.updatedAt : 0,
      };
    }
  }
  return latest;
}

function latestPendingReloadIntent(ctx: UiContext): ReloadIntent | undefined {
  const consumed = new Set<string>();
  let latest: ReloadIntent | undefined;
  for (const entry of ctx.sessionManager.getEntries()) {
    if (entry.type !== "custom") continue;
    if (entry.customType === RELOAD_CONSUMED_ENTRY_TYPE) {
      const data = entry.data as { token?: unknown };
      if (typeof data.token === "string") consumed.add(data.token);
      continue;
    }
    if (entry.customType !== RELOAD_INTENT_ENTRY_TYPE) continue;
    const data = entry.data as Partial<ReloadIntent>;
    if (typeof data.token !== "string" || typeof data.resumeMessage !== "string") continue;
    const createdAt = typeof data.createdAt === "number" ? data.createdAt : 0;
    if (Date.now() - createdAt > RELOAD_INTENT_MAX_AGE_MS) continue;
    if (consumed.has(data.token)) continue;
    if (!latest || createdAt > latest.createdAt) {
      latest = { token: data.token, reason: data.reason ?? "reload requested", resumeMessage: data.resumeMessage, createdAt };
    }
  }
  return latest && !consumed.has(latest.token) ? latest : undefined;
}

export default function claudeSaddle(pi: ExtensionAPI) {
  pi.on("session_start", async (event, ctx) => {
    if (event.reason !== "reload") return;

    const saved = latestPersistedPip(ctx);
    if (saved?.active && await tmuxHasSession(pi, saved.sessionName)) {
      await startPip(pi, ctx, saved.sessionName, saved.lines, saved.intervalMs, undefined, true);
    }

    const intent = latestPendingReloadIntent(ctx);
    if (intent) {
      pi.appendEntry(RELOAD_CONSUMED_ENTRY_TYPE, { token: intent.token, consumedAt: Date.now() });
      pi.sendUserMessage(intent.resumeMessage, { deliverAs: "followUp" });
    }
  });

  pi.on("session_shutdown", async (event, ctx) => {
    if (event.reason === "reload") stopPip(ctx, false);
  });

  pi.registerTool({
    name: "claude_saddle_start",
    label: "Claude Saddle Start",
    description: "Launch Claude Code in a dedicated tmux session and optionally send an initial supervised task prompt.",
    promptSnippet: "Launch Claude Code in tmux for a supervised claude-saddle task",
    promptGuidelines: [
      "Use claude_saddle_start when the user asks to use claude-saddle, saddle Claude, or run Claude Code under tmux supervision.",
      "When using claude_saddle_start for implementation, give Claude a concrete prompt with scope, constraints, validation, handoff expectations, and stop rules.",
    ],
    parameters: Type.Object({
      taskName: Type.String({ description: "Short human-readable task name used to derive a tmux session name when sessionName is omitted." }),
      sessionName: Type.Optional(Type.String({ description: "Tmux session name. Defaults to claude-saddle-<task slug>." })),
      cwd: Type.Optional(Type.String({ description: "Working directory for Claude. Defaults to the current Pi cwd." })),
      claudeCommand: Type.Optional(Type.String({ description: "Claude CLI command to run. Defaults to CLAUDE_SADDLE_CMD or claude. May include flags." })),
      prompt: Type.Optional(Type.String({ description: "Initial prompt to paste into Claude after startup." })),
      promptFile: Type.Optional(Type.String({ description: "Path to a file containing the initial prompt. Use either prompt or promptFile." })),
      captureLines: Type.Optional(Type.Number({ description: "Number of latest tmux pane lines to return after startup.", default: DEFAULT_CAPTURE_LINES })),
      pictureInPicture: Type.Optional(Type.Boolean({ description: "Show a live Pi TUI widget with Claude's pane and the parent driving log.", default: true })),
      pictureInPictureLines: Type.Optional(Type.Number({ description: "Claude pane lines to show in the PiP widget.", default: DEFAULT_PIP_LINES })),
      pictureInPictureIntervalMs: Type.Optional(Type.Number({ description: "How often to refresh the PiP widget.", default: DEFAULT_PIP_INTERVAL_MS })),
    }),
    async execute(_toolCallId, params, signal, _onUpdate, ctx) {
      const taskName = params.taskName.trim();
      if (!taskName) throw new Error("taskName must not be empty.");

      const sessionName = sanitizeSessionName(params.sessionName?.trim() || `claude-saddle-${slug(taskName)}`);
      const cwd = resolveMaybe(ctx.cwd, params.cwd?.trim() || ctx.cwd);
      const claudeCommand = params.claudeCommand?.trim() || process.env.CLAUDE_SADDLE_CMD || "claude --dangerously-skip-permissions";
      const captureLines = Math.max(20, Math.min(2000, Math.floor(params.captureLines ?? DEFAULT_CAPTURE_LINES)));

      const hasPrompt = typeof params.prompt === "string" && params.prompt.length > 0;
      const hasPromptFile = typeof params.promptFile === "string" && params.promptFile.trim().length > 0;
      if (hasPrompt && hasPromptFile) throw new Error("Use either prompt or promptFile, not both.");
      if (!existsSync(cwd)) throw new Error(`cwd does not exist: ${cwd}`);
      if (await tmuxHasSession(pi, sessionName, signal)) throw new Error(`tmux session already exists: ${sessionName}`);

      const start = await pi.exec("tmux", ["new-session", "-d", "-s", sessionName, "-c", cwd, "bash", "-lc", `exec ${claudeCommand}`], { signal, timeout: 5_000 }) as ExecResult;
      assertOk(start, "tmux new-session");

      let sentPromptPath: string | undefined;
      if (hasPrompt || hasPromptFile) {
        const text = hasPromptFile ? readFileSync(resolveMaybe(ctx.cwd, params.promptFile!), "utf8") : params.prompt!;
        await new Promise((resolve) => setTimeout(resolve, 1_000));
        sentPromptPath = await sendText(pi, sessionName, text, signal);
      }

      const captured = await capturePane(pi, sessionName, captureLines, signal);
      if (params.pictureInPicture !== false) {
        const pipLines = Math.max(6, Math.min(80, Math.floor(params.pictureInPictureLines ?? DEFAULT_PIP_LINES)));
        const pipIntervalMs = Math.max(500, Math.min(30_000, Math.floor(params.pictureInPictureIntervalMs ?? DEFAULT_PIP_INTERVAL_MS)));
        await startPip(pi, ctx, sessionName, pipLines, pipIntervalMs, signal);
      }
      pi.appendEntry("claude-saddle-session", { taskName, sessionName, cwd, claudeCommand, startedAt: Date.now() });

      return {
        content: [{
          type: "text",
          text: [
            `Started Claude saddle session: ${sessionName}`,
            `Working directory: ${cwd}`,
            sentPromptPath ? `Initial prompt sent via temp file: ${sentPromptPath}` : "No initial prompt sent yet.",
            `Attach manually if needed: tmux attach -t ${shellQuote(sessionName)}`,
            "Latest pane output:",
            "```",
            captured.trimEnd(),
            "```",
          ].join("\n"),
        }],
        details: { taskName, sessionName, cwd, claudeCommand, sentPromptPath, captured },
      };
    },
  });

  pi.registerTool({
    name: "claude_saddle_send",
    label: "Claude Saddle Send",
    description: "Send follow-up guidance or an answer to a running Claude tmux session.",
    promptSnippet: "Send follow-up text to a supervised Claude tmux session",
    parameters: Type.Object({
      sessionName: Type.String({ description: "Target tmux session name." }),
      message: Type.Optional(Type.String({ description: "Message to paste and submit to Claude." })),
      file: Type.Optional(Type.String({ description: "Path to a file containing the message to send. Use either message or file." })),
      captureLines: Type.Optional(Type.Number({ description: "Number of latest pane lines to return after sending.", default: DEFAULT_CAPTURE_LINES })),
    }),
    async execute(_toolCallId, params, signal, _onUpdate, ctx) {
      const sessionName = sanitizeSessionName(params.sessionName.trim());
      const hasMessage = typeof params.message === "string" && params.message.length > 0;
      const hasFile = typeof params.file === "string" && params.file.trim().length > 0;
      if (hasMessage === hasFile) throw new Error("Provide exactly one of message or file.");
      if (!(await tmuxHasSession(pi, sessionName, signal))) throw new Error(`tmux session does not exist: ${sessionName}`);

      const text = hasFile ? readFileSync(resolveMaybe(ctx.cwd, params.file!), "utf8") : params.message!;
      const sentMessagePath = await sendText(pi, sessionName, text, signal);
      const pipState = pipStates.get(sessionName);
      if (pipState) {
        appendDriving(pipState, `sent guidance (${text.split(/\s+/).filter(Boolean).length} words)`);
        await refreshPip(pi, ctx, pipState, signal);
      }
      const captureLines = Math.max(20, Math.min(2000, Math.floor(params.captureLines ?? DEFAULT_CAPTURE_LINES)));
      const captured = await capturePane(pi, sessionName, captureLines, signal);

      return {
        content: [{ type: "text", text: [`Sent message to ${sessionName}.`, `Temp message file: ${sentMessagePath}`, "Latest pane output:", "```", captured.trimEnd(), "```"].join("\n") }],
        details: { sessionName, sentMessagePath, captured },
      };
    },
  });

  pi.registerTool({
    name: "claude_saddle_capture",
    label: "Claude Saddle Capture",
    description: "Capture recent output from a supervised Claude tmux session.",
    promptSnippet: "Read recent output from a supervised Claude tmux session",
    parameters: Type.Object({
      sessionName: Type.String({ description: "Target tmux session name." }),
      lines: Type.Optional(Type.Number({ description: "Number of latest pane lines to capture.", default: DEFAULT_CAPTURE_LINES })),
    }),
    async execute(_toolCallId, params, signal) {
      const sessionName = sanitizeSessionName(params.sessionName.trim());
      const lines = Math.max(20, Math.min(5000, Math.floor(params.lines ?? DEFAULT_CAPTURE_LINES)));
      if (!(await tmuxHasSession(pi, sessionName, signal))) throw new Error(`tmux session does not exist: ${sessionName}`);
      const captured = await capturePane(pi, sessionName, lines, signal);
      return {
        content: [{ type: "text", text: [`Captured ${lines} lines from ${sessionName}:`, "```", captured.trimEnd(), "```"].join("\n") }],
        details: { sessionName, lines, captured },
      };
    },
  });

  pi.registerTool({
    name: "claude_saddle_stop",
    label: "Claude Saddle Stop",
    description: "Stop a supervised Claude tmux session.",
    promptSnippet: "Stop a supervised Claude tmux session",
    parameters: Type.Object({
      sessionName: Type.String({ description: "Target tmux session name." }),
      captureBeforeStop: Type.Optional(Type.Boolean({ description: "Capture recent output before stopping.", default: true })),
      lines: Type.Optional(Type.Number({ description: "Number of latest pane lines to capture before stopping.", default: DEFAULT_CAPTURE_LINES })),
    }),
    async execute(_toolCallId, params, signal, _onUpdate, ctx) {
      const sessionName = sanitizeSessionName(params.sessionName.trim());
      if (!(await tmuxHasSession(pi, sessionName, signal))) throw new Error(`tmux session does not exist: ${sessionName}`);
      const shouldCapture = params.captureBeforeStop !== false;
      const lines = Math.max(20, Math.min(5000, Math.floor(params.lines ?? DEFAULT_CAPTURE_LINES)));
      const captured = shouldCapture ? await capturePane(pi, sessionName, lines, signal) : undefined;
      const stop = await pi.exec("tmux", ["kill-session", "-t", sessionName], { signal, timeout: 5_000 }) as ExecResult;
      assertOk(stop, "tmux kill-session");
      if (pipStates.has(sessionName)) stopPip(ctx, true, pi);
      return {
        content: [{ type: "text", text: [`Stopped Claude saddle session: ${sessionName}`, captured ? ["Final pane output:", "```", captured.trimEnd(), "```"].join("\n") : ""].filter(Boolean).join("\n") }],
        details: { sessionName, captured },
      };
    },
  });

  pi.registerTool({
    name: "claude_saddle_list",
    label: "Claude Saddle List",
    description: "List active tmux sessions whose names look like Claude saddle sessions.",
    promptSnippet: "List active claude-saddle tmux sessions",
    parameters: Type.Object({}),
    async execute(_toolCallId, _params, signal) {
      const result = await pi.exec("tmux", ["list-sessions", "-F", "#{session_name}"], { signal, timeout: 5_000 }) as ExecResult;
      if (result.code !== 0) {
        const output = outputOf(result);
        return { content: [{ type: "text", text: output || "No tmux server or sessions found." }], details: { sessions: [] } };
      }
      const sessions = (result.stdout ?? "").split("\n").map((s) => s.trim()).filter((s) => s.includes("claude-saddle"));
      return {
        content: [{ type: "text", text: sessions.length ? `Claude saddle sessions:\n${sessions.map((s) => `- ${s}`).join("\n")}` : "No claude-saddle tmux sessions found." }],
        details: { sessions },
      };
    },
  });

  pi.registerTool({
    name: "claude_saddle_copy",
    label: "Claude Saddle Copy",
    description: "Copy recent text from a Claude Saddle tmux pane to the clipboard.",
    promptSnippet: "Copy recent Claude Saddle pane text to the clipboard",
    parameters: Type.Object({
      sessionName: Type.Optional(Type.String({ description: "Target tmux session name. Defaults to the active PiP session." })),
      lines: Type.Optional(Type.Number({ description: "Number of recent pane lines to copy.", default: DEFAULT_CAPTURE_LINES })),
    }),
    async execute(_toolCallId, params, signal) {
      const sessionName = sanitizeSessionName(params.sessionName?.trim() || Array.from(pipStates.keys())[0] || "");
      if (!sessionName) throw new Error("No sessionName provided and no active Claude Saddle PiP session found.");
      if (!(await tmuxHasSession(pi, sessionName, signal))) throw new Error(`tmux session does not exist: ${sessionName}`);
      const lines = Math.max(1, Math.min(5000, Math.floor(params.lines ?? DEFAULT_CAPTURE_LINES)));
      const captured = stripAnsi(await capturePane(pi, sessionName, lines, signal)).trimEnd();
      const method = await copyText(pi, captured, signal);
      return {
        content: [{ type: "text", text: `Copied ${lines} recent lines from ${sessionName} using ${method}.` }],
        details: { sessionName, lines, method },
      };
    },
  });

  pi.registerCommand("claude-saddle-copy", {
    description: "Copy recent Claude Saddle pane text. Usage: /claude-saddle-copy [session] [lines]",
    handler: async (args, ctx) => {
      const parts = args.trim().split(/\s+/).filter(Boolean);
      const maybeLines = Number.parseInt(parts.at(-1) ?? "", 10);
      const hasLineArg = Number.isFinite(maybeLines);
      const lines = Math.max(1, Math.min(5000, hasLineArg ? maybeLines : DEFAULT_CAPTURE_LINES));
      const sessionArg = hasLineArg ? parts.slice(0, -1).join(" ") : parts.join(" ");
      const sessionName = sanitizeSessionName(sessionArg || Array.from(pipStates.keys())[0] || "");
      if (!sessionName) return ctx.ui.notify("Usage: /claude-saddle-copy <session> [lines]", "warning");
      if (!(await tmuxHasSession(pi, sessionName))) return ctx.ui.notify(`tmux session does not exist: ${sessionName}`, "error");
      const captured = stripAnsi(await capturePane(pi, sessionName, lines)).trimEnd();
      const method = await copyText(pi, captured);
      ctx.ui.notify(`Copied ${lines} lines from ${sessionName} using ${method}.`, "info");
    },
  });

  pi.registerCommand("claude-saddle-pip", {
    description: "Show, hide, or scroll the live Claude Saddle picture-in-picture widget. Usage: /claude-saddle-pip [session|up|down|top|bottom|stop] [lines]",
    handler: async (args, ctx) => {
      const parts = args.trim().split(/\s+/).filter(Boolean);
      const arg = parts[0] ?? "";
      const activeState = Array.from(pipStates.values())[0];
      const scrollAmount = Math.max(1, Math.min(200, Number.parseInt(parts[1] ?? "10", 10) || 10));

      if (arg === "stop" || arg === "off" || arg === "hide") {
        stopPip(ctx, true, pi);
        ctx.ui.notify("Claude Saddle PiP hidden.", "info");
        return;
      }
      if (["up", "pageup", "pgup"].includes(arg)) {
        if (!activeState) return ctx.ui.notify("No active Claude Saddle PiP to scroll.", "warning");
        scrollPip(activeState, scrollAmount);
        return;
      }
      if (["down", "pagedown", "pgdown"].includes(arg)) {
        if (!activeState) return ctx.ui.notify("No active Claude Saddle PiP to scroll.", "warning");
        scrollPip(activeState, -scrollAmount);
        return;
      }
      if (arg === "top") {
        if (!activeState) return ctx.ui.notify("No active Claude Saddle PiP to scroll.", "warning");
        scrollPip(activeState, "top");
        return;
      }
      if (arg === "bottom") {
        if (!activeState) return ctx.ui.notify("No active Claude Saddle PiP to scroll.", "warning");
        scrollPip(activeState, "bottom");
        return;
      }

      const sessionName = sanitizeSessionName(arg || Array.from(pipStates.keys())[0] || "");
      if (!sessionName) {
        ctx.ui.notify("Usage: /claude-saddle-pip <session>|up|down|top|bottom|stop", "warning");
        return;
      }
      if (!(await tmuxHasSession(pi, sessionName))) {
        ctx.ui.notify(`tmux session does not exist: ${sessionName}`, "error");
        return;
      }
      await startPip(pi, ctx, sessionName);
      ctx.ui.notify(`Claude Saddle PiP showing ${sessionName}.`, "info");
    },
  });

  pi.registerCommand("agent-reload-and-resume", {
    description: "Reload Pi resources and resume the assistant from a persisted intent token.",
    handler: async (_args, ctx) => {
      await ctx.reload();
      return;
    },
  });

  pi.registerTool({
    name: "reload_and_resume",
    label: "Reload And Resume",
    description: "Reload Pi resources, then automatically send a follow-up message so the assistant continues under the new runtime.",
    promptSnippet: "Reload Pi and resume work automatically after reload",
    parameters: Type.Object({
      reason: Type.String({ description: "Why reload is needed." }),
      resumeMessage: Type.String({ description: "Exact follow-up message to send to the assistant after reload." }),
    }),
    async execute(_toolCallId, params) {
      const token = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      pi.appendEntry(RELOAD_INTENT_ENTRY_TYPE, {
        token,
        reason: params.reason,
        resumeMessage: params.resumeMessage,
        createdAt: Date.now(),
      });
      pi.sendUserMessage(`/agent-reload-and-resume ${token}`, { deliverAs: "followUp" });
      return {
        content: [{ type: "text", text: `Queued reload-and-resume token ${token}.` }],
        details: { token },
      };
    },
  });

  pi.registerCommand("claude-saddle-sessions", {
    description: "List active claude-saddle tmux sessions",
    handler: async (_args, ctx) => {
      const result = await pi.exec("tmux", ["list-sessions", "-F", "#{session_name}"], { timeout: 5_000 }) as ExecResult;
      if (result.code !== 0) {
        ctx.ui.notify(outputOf(result) || "No tmux sessions found.", "info");
        return;
      }
      const sessions = (result.stdout ?? "").split("\n").map((s) => s.trim()).filter((s) => s.includes("claude-saddle"));
      ctx.ui.notify(sessions.length ? sessions.join("\n") : "No claude-saddle tmux sessions found.", "info");
    },
  });
}
