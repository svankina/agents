import { homedir, hostname } from "node:os";
import { isAbsolute, relative, resolve, sep } from "node:path";
import { CustomEditor, type ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { truncateToWidth, visibleWidth } from "@earendil-works/pi-tui";

type ThemeLike = {
  fg?: (color: string, text: string) => string;
  bold?: (text: string) => string;
};

type FooterDataLike = {
  getGitBranch?: () => string | null;
  getExtensionStatuses?: () => ReadonlyMap<string, string>;
  onBranchChange?: (callback: () => void) => () => void;
};

type SessionEntryLike = {
  type?: string;
  timestamp?: string;
  thinkingLevel?: string;
  message?: {
    role?: string;
    usage?: {
      input?: number;
      output?: number;
      cacheRead?: number;
      cacheWrite?: number;
      cost?: { total?: number };
    };
  };
};

type SessionManagerLike = {
  getCwd?: () => string;
  getEntries?: () => SessionEntryLike[];
  getBranch?: () => SessionEntryLike[];
  getHeader?: () => { timestamp?: string } | undefined;
  getSessionName?: () => string | undefined;
};

type ClaudeUiContext = {
  hasUI?: boolean;
  cwd?: string;
  model?: { id?: string; provider?: string; contextWindow?: number; reasoning?: unknown };
  modelRegistry?: { isUsingOAuth?: (model: unknown) => boolean };
  getContextUsage?: () => { tokens: number | null; contextWindow: number; percent: number | null } | undefined;
  sessionManager: SessionManagerLike;
  ui: {
    setFooter?: (
      factory:
        | ((tui: { requestRender: () => void }, theme: ThemeLike, footerData: FooterDataLike) => {
            render(width: number): string[];
            invalidate(): void;
            dispose?: () => void;
          })
        | undefined,
    ) => void;
    setEditorComponent?: (factory: EditorFactory | undefined) => void;
    getEditorComponent?: () => EditorFactory | undefined;
    notify?: (message: string, type?: "info" | "warning" | "error") => void;
    setStatus?: (key: string, text: string | undefined) => void;
  };
};

type EditorLike = {
  render(width: number): string[];
  invalidate(): void;
  handleInput?: (data: string) => void;
  [key: string]: unknown;
};

type EditorThemeLike = ThemeLike & {
  borderColor?: (text: string) => string;
};

type EditorFactory = (tui: unknown, theme: EditorThemeLike, keybindings: unknown) => EditorLike;

type UsageTotals = {
  input: number;
  output: number;
  cacheRead: number;
  cacheWrite: number;
  cost: number;
};

type ProviderLimitSnapshot = {
  label?: string;
  percentUsed?: number;
  remaining?: number;
  limit?: number;
  resetAtMs?: number;
  capturedAtMs: number;
};

type LimitCandidate = Omit<ProviderLimitSnapshot, "capturedAtMs"> & {
  priority: number;
};

type LocalLimitWindow = {
  id?: string;
  label?: string;
  used_percent?: number;
  remaining_percent?: number;
  reset_at?: string | null;
};

type LocalProviderLimits = {
  provider?: string;
  available?: boolean;
  windows?: LocalLimitWindow[];
};

type LocalLimitsPayload = {
  providers?: Record<string, LocalProviderLimits>;
};

type LocalLimitsSnapshot = {
  payload: LocalLimitsPayload;
  fetchedAtMs: number;
};

type StatusLineState = {
  host: string;
  cwd: string;
  branch?: string | null;
  sessionName?: string;
  ageMs?: number;
  totals: UsageTotals;
  modelId?: string;
  provider?: string;
  thinkingLevel?: string;
  contextTokens?: number | null;
  contextWindow?: number;
  contextPercent?: number | null;
  apiLimitText?: string;
  usingSubscription?: boolean;
  statuses?: string[];
};

const WRAPPED_EDITOR = "__piClaudeUiSessionLabelEditorWrapped";
const DEFAULT_BAR_WIDTH = 10;
const LIMIT_STALE_GRACE_MS = 5 * 60 * 1000;
const DEFAULT_LOCAL_LIMITS_URL = "http://127.0.0.1:8787/api/limits";
const DEFAULT_LOCAL_LIMITS_REFRESH_MS = 60_000;

let latestProviderLimit: ProviderLimitSnapshot | undefined;
let latestLocalLimits: LocalLimitsSnapshot | undefined;
let localLimitsTimer: ReturnType<typeof setInterval> | undefined;
let localLimitsInflight = false;
let localLimitsLastFetchMs = 0;

// ANSI/control matching is intentional: these helpers must preserve styling while measuring rendered TUI lines.
// eslint-disable-next-line no-control-regex
const ANSI_PATTERN = new RegExp("\\u001B(?:[@-Z\\\\-_]|\\[[0-?]*[ -/]*[@-~]|\\][^\\u0007]*(?:\\u0007|\\u001B\\\\))", "g");
// eslint-disable-next-line no-control-regex
const CONTROL_PATTERN = new RegExp("[\\u0000-\\u001f\\u007f]", "g");

function color(theme: ThemeLike, name: string, text: string): string {
  return theme.fg ? theme.fg(name, text) : text;
}

function bold(theme: ThemeLike, text: string): string {
  return theme.bold ? theme.bold(text) : text;
}

function stripAnsi(text: string): string {
  return text.replace(ANSI_PATTERN, "");
}

function truncateAnsi(text: string, width: number): string {
  if (width <= 0) return "";

  let visible = 0;
  let result = "";
  for (let index = 0; index < text.length; ) {
    ANSI_PATTERN.lastIndex = index;
    const ansi = ANSI_PATTERN.exec(text);
    if (ansi && ansi.index === index) {
      result += ansi[0];
      index = ANSI_PATTERN.lastIndex;
      continue;
    }

    const codePoint = text.codePointAt(index);
    if (codePoint === undefined) break;
    const char = String.fromCodePoint(codePoint);
    if (visible + 1 > width) break;

    result += char;
    visible += 1;
    index += char.length;
  }

  return result;
}

export function sanitizeSingleLine(text: string | undefined): string {
  return stripAnsi(text ?? "")
    .replace(CONTROL_PATTERN, " ")
    .replace(/[\r\n\t]/g, " ")
    .replace(/ +/g, " ")
    .trim();
}

export function formatTokens(count: number | undefined): string {
  const n = Math.max(0, Math.floor(Number.isFinite(count ?? 0) ? count ?? 0 : 0));
  if (n < 1000) return `${n}`;
  if (n < 10000) return `${(n / 1000).toFixed(1)}k`;
  if (n < 1000000) return `${Math.round(n / 1000)}k`;
  if (n < 10000000) return `${(n / 1000000).toFixed(1)}M`;
  return `${Math.round(n / 1000000)}M`;
}

export function formatDuration(ms: number | undefined): string | undefined {
  if (!Number.isFinite(ms ?? NaN) || (ms ?? 0) < 0) return undefined;
  const seconds = Math.floor((ms ?? 0) / 1000);
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 48) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
}

function limitsEnabled(): boolean {
  return process.env.PI_CLAUDE_UI_LIMITS !== "0";
}

function localLimitsEnabled(): boolean {
  return limitsEnabled() && process.env.PI_CLAUDE_UI_LOCAL_LIMITS !== "0";
}

function envNumber(name: string, defaultValue: number): number {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value > 0 ? value : defaultValue;
}

function localLimitsUrl(): string {
  return process.env.PI_CLAUDE_UI_LIMITS_URL?.trim() || DEFAULT_LOCAL_LIMITS_URL;
}

function localLimitsRefreshMs(): number {
  return envNumber("PI_CLAUDE_UI_LIMITS_REFRESH_MS", DEFAULT_LOCAL_LIMITS_REFRESH_MS);
}

function normalizeHeaderMap(headers: Record<string, string> | undefined): Map<string, string> {
  const map = new Map<string, string>();
  for (const [key, value] of Object.entries(headers ?? {})) {
    map.set(key.toLowerCase(), value);
  }
  return map;
}

function getHeader(headers: Map<string, string>, name: string): string | undefined {
  return headers.get(name.toLowerCase());
}

function parseHeaderNumber(value: string | undefined): number | undefined {
  if (value === undefined) return undefined;
  const n = Number(sanitizeSingleLine(value));
  return Number.isFinite(n) ? n : undefined;
}

function parseResetValueToAtMs(value: string | undefined, nowMs: number): number | undefined {
  const raw = sanitizeSingleLine(value);
  if (!raw) return undefined;

  const numeric = Number(raw);
  if (Number.isFinite(numeric)) {
    if (numeric > 1_000_000_000_000) return numeric;
    if (numeric > 1_000_000_000) return numeric * 1000;
    return nowMs + numeric * 1000;
  }

  const text = raw.toLowerCase();
  const durationPattern = /(\d+(?:\.\d+)?)\s*(ms|s|m|h|d)/g;
  let totalMs = 0;
  let matched = false;
  for (const match of text.matchAll(durationPattern)) {
    matched = true;
    const amount = Number(match[1]);
    const unit = match[2];
    if (!Number.isFinite(amount)) continue;
    if (unit === "ms") totalMs += amount;
    else if (unit === "s") totalMs += amount * 1000;
    else if (unit === "m") totalMs += amount * 60_000;
    else if (unit === "h") totalMs += amount * 3_600_000;
    else if (unit === "d") totalMs += amount * 86_400_000;
  }
  if (matched) return nowMs + totalMs;

  const date = Date.parse(raw);
  return Number.isFinite(date) ? date : undefined;
}

function resetAtFromCodexHeaders(headers: Map<string, string>, resetAfterHeader: string, resetAtHeader: string, nowMs: number): number | undefined {
  const resetAfterSeconds = parseHeaderNumber(getHeader(headers, resetAfterHeader));
  if (resetAfterSeconds !== undefined) return nowMs + resetAfterSeconds * 1000;
  return parseResetValueToAtMs(getHeader(headers, resetAtHeader), nowMs);
}

function codexLimitCandidate(headers: Map<string, string>, prefix: string, nowMs: number, priority: number): LimitCandidate | undefined {
  const base = prefix ? `x-codex-${prefix}-` : "x-codex-";
  const label = sanitizeSingleLine(prefix ? getHeader(headers, `${base}limit-name`) : getHeader(headers, "x-codex-active-limit"));
  const percentUsed = parseHeaderNumber(getHeader(headers, `${base}primary-over-secondary-limit-percent`));
  const resetAtMs = resetAtFromCodexHeaders(headers, `${base}primary-reset-after-seconds`, `${base}primary-reset-at`, nowMs);

  if (!label && percentUsed === undefined && resetAtMs === undefined) return undefined;
  return { label: label || (prefix ? prefix : "codex"), percentUsed, resetAtMs, priority };
}

function genericLimitCandidate(
  headers: Map<string, string>,
  label: string,
  limitHeader: string,
  remainingHeader: string,
  resetHeader: string,
  nowMs: number,
  priority: number,
): LimitCandidate | undefined {
  const limit = parseHeaderNumber(getHeader(headers, limitHeader));
  const remaining = parseHeaderNumber(getHeader(headers, remainingHeader));
  const resetAtMs = parseResetValueToAtMs(getHeader(headers, resetHeader), nowMs);
  const percentUsed = limit !== undefined && remaining !== undefined && limit > 0
    ? Math.max(0, Math.min(100, (1 - remaining / limit) * 100))
    : undefined;

  if (limit === undefined && remaining === undefined && resetAtMs === undefined) return undefined;
  return { label, limit, remaining, percentUsed, resetAtMs, priority };
}

function candidateScore(candidate: LimitCandidate): number {
  const percentScore = candidate.percentUsed === undefined ? -1 : candidate.percentUsed;
  const resetScore = candidate.resetAtMs === undefined ? 0 : 1;
  return percentScore * 100 + resetScore * 10 + candidate.priority;
}

function chooseLimitCandidate(candidates: Array<LimitCandidate | undefined>): LimitCandidate | undefined {
  return candidates
    .filter((candidate): candidate is LimitCandidate => Boolean(candidate))
    .sort((a, b) => candidateScore(b) - candidateScore(a))[0];
}

export function parseProviderLimitHeaders(headers: Record<string, string> | undefined, nowMs = Date.now()): ProviderLimitSnapshot | undefined {
  const headerMap = normalizeHeaderMap(headers);
  if (headerMap.size === 0) return undefined;

  const codex = chooseLimitCandidate([
    codexLimitCandidate(headerMap, "", nowMs, 20),
    codexLimitCandidate(headerMap, "bengalfox", nowMs, 10),
  ]);
  if (codex) {
    const { priority: _priority, ...snapshot } = codex;
    return { ...snapshot, capturedAtMs: nowMs };
  }

  const generic = chooseLimitCandidate([
    genericLimitCandidate(headerMap, "req", "x-ratelimit-limit-requests", "x-ratelimit-remaining-requests", "x-ratelimit-reset-requests", nowMs, 20),
    genericLimitCandidate(headerMap, "tok", "x-ratelimit-limit-tokens", "x-ratelimit-remaining-tokens", "x-ratelimit-reset-tokens", nowMs, 15),
    genericLimitCandidate(headerMap, "req", "anthropic-ratelimit-requests-limit", "anthropic-ratelimit-requests-remaining", "anthropic-ratelimit-requests-reset", nowMs, 20),
    genericLimitCandidate(headerMap, "tok", "anthropic-ratelimit-tokens-limit", "anthropic-ratelimit-tokens-remaining", "anthropic-ratelimit-tokens-reset", nowMs, 15),
    genericLimitCandidate(headerMap, "in", "anthropic-ratelimit-input-tokens-limit", "anthropic-ratelimit-input-tokens-remaining", "anthropic-ratelimit-input-tokens-reset", nowMs, 12),
    genericLimitCandidate(headerMap, "out", "anthropic-ratelimit-output-tokens-limit", "anthropic-ratelimit-output-tokens-remaining", "anthropic-ratelimit-output-tokens-reset", nowMs, 11),
    genericLimitCandidate(headerMap, "req", "x-ratelimit-limit", "x-ratelimit-remaining", "x-ratelimit-reset", nowMs, 5),
  ]);
  if (!generic) return undefined;

  const { priority: _priority, ...snapshot } = generic;
  return { ...snapshot, capturedAtMs: nowMs };
}

export function formatProviderLimitText(snapshot: ProviderLimitSnapshot | undefined, nowMs = Date.now()): string | undefined {
  if (!snapshot) return undefined;
  if (snapshot.resetAtMs !== undefined && snapshot.resetAtMs + LIMIT_STALE_GRACE_MS < nowMs) return undefined;

  const parts = ["limit"];
  const label = sanitizeSingleLine(snapshot.label);
  if (label) parts.push(label);

  const percent = clampPercent(snapshot.percentUsed);
  if (percent !== null) {
    parts.push(`${Math.round(percent)}%`);
  } else if (snapshot.remaining !== undefined && snapshot.limit !== undefined) {
    parts.push(`${formatTokens(snapshot.remaining)}/${formatTokens(snapshot.limit)}`);
  }

  if (snapshot.resetAtMs !== undefined) {
    const resetText = formatDuration(Math.max(0, snapshot.resetAtMs - nowMs));
    if (resetText) parts.push(`↺${resetText}`);
  }

  return parts.length > 1 ? parts.join(" ") : undefined;
}

function numberFromUnknown(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function providerKeyForLimits(provider: string | undefined, modelId: string | undefined): string | undefined {
  const providerText = sanitizeSingleLine(provider).toLowerCase();
  const modelText = sanitizeSingleLine(modelId).toLowerCase();
  if (providerText.includes("codex") || modelText.includes("codex")) return "codex";
  if (providerText.includes("anthropic") || providerText.includes("claude") || modelText.includes("claude")) return "claude";
  return providerText || undefined;
}

function shortLocalLimitLabel(window: LocalLimitWindow): string {
  const id = sanitizeSingleLine(window.id).toLowerCase();
  const label = sanitizeSingleLine(window.label);
  const lowerLabel = label.toLowerCase();
  if (id.includes("secondary") || id.includes("seven_day") || lowerLabel.includes("weekly")) return "W";
  if (id.includes("primary") || id.includes("five_hour") || lowerLabel.includes("5-hour")) return "5h";
  return label.replace(/^gpt-5\.3-codex-spark\s*/i, "spark ") || id || "quota";
}

function localLimitResetText(window: LocalLimitWindow, nowMs: number): string | undefined {
  const resetAt = Date.parse(String(window.reset_at ?? ""));
  if (!Number.isFinite(resetAt) || resetAt <= nowMs) return undefined;
  return formatDuration(resetAt - nowMs);
}

function formatLocalLimitWindow(window: LocalLimitWindow, nowMs: number, includeReset: boolean): string | undefined {
  const remaining = numberFromUnknown(window.remaining_percent);
  const used = numberFromUnknown(window.used_percent);
  const percent = remaining ?? (used === undefined ? undefined : 100 - used);
  const cleanPercent = clampPercent(percent);
  if (cleanPercent === null) return undefined;

  const reset = includeReset ? localLimitResetText(window, nowMs) : undefined;
  return `${shortLocalLimitLabel(window)} ${Math.round(cleanPercent)}%${reset ? `↺${reset}` : ""}`;
}

function pickLocalWindows(provider: LocalProviderLimits, modelId: string | undefined): LocalLimitWindow[] {
  const windows = provider.windows ?? [];
  const byId = (id: string) => windows.find((window) => sanitizeSingleLine(window.id).toLowerCase() === id);
  const isSpark = sanitizeSingleLine(modelId).toLowerCase().includes("spark");

  if (sanitizeSingleLine(provider.provider).toLowerCase() === "codex") {
    const primary = byId(isSpark ? "spark_primary" : "primary");
    const secondary = byId(isSpark ? "spark_secondary" : "secondary");
    return [primary, secondary].filter((window): window is LocalLimitWindow => Boolean(window));
  }

  const fiveHour = byId("five_hour");
  const sevenDay = byId("seven_day");
  if (fiveHour || sevenDay) {
    return [fiveHour, sevenDay].filter((window): window is LocalLimitWindow => Boolean(window));
  }

  return windows.slice(0, 2);
}

export function formatLocalLimitsText(
  payload: LocalLimitsPayload | undefined,
  provider: string | undefined,
  modelId: string | undefined,
  nowMs = Date.now(),
): string | undefined {
  const providerKey = providerKeyForLimits(provider, modelId);
  if (!payload?.providers || !providerKey) return undefined;

  const limits = payload.providers[providerKey];
  if (!limits?.available) return undefined;

  const windows = pickLocalWindows(limits, modelId);
  const parts = windows
    .map((window, index) => formatLocalLimitWindow(window, nowMs, index === 0))
    .filter((part): part is string => Boolean(part));
  if (parts.length === 0) return undefined;

  const label = sanitizeSingleLine(limits.provider) || providerKey;
  return `limit ${label} ${parts.join(" ")} rem`;
}

export function formatCwdForStatus(cwd: string, home: string | undefined = homedir()): string {
  if (!home) return cwd;

  const resolvedCwd = resolve(cwd);
  const resolvedHome = resolve(home);
  const relativeToHome = relative(resolvedHome, resolvedCwd);
  const isInsideHome =
    relativeToHome === "" ||
    (relativeToHome !== ".." && !relativeToHome.startsWith(`..${sep}`) && !isAbsolute(relativeToHome));

  if (!isInsideHome) return cwd;
  return relativeToHome === "" ? "~" : `~${sep}${relativeToHome}`;
}

export function getUsageTotals(entries: SessionEntryLike[] | undefined): UsageTotals {
  const totals: UsageTotals = { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, cost: 0 };
  for (const entry of entries ?? []) {
    if (entry?.type !== "message" || entry.message?.role !== "assistant") continue;
    const usage = entry.message.usage;
    if (!usage) continue;
    totals.input += usage.input ?? 0;
    totals.output += usage.output ?? 0;
    totals.cacheRead += usage.cacheRead ?? 0;
    totals.cacheWrite += usage.cacheWrite ?? 0;
    totals.cost += usage.cost?.total ?? 0;
  }
  return totals;
}

function latestThinkingLevel(entries: SessionEntryLike[] | undefined): string | undefined {
  const list = entries ?? [];
  for (let i = list.length - 1; i >= 0; i -= 1) {
    const entry = list[i];
    if (entry?.type === "thinking_level_change" && entry.thinkingLevel) return entry.thinkingLevel;
  }
  return undefined;
}

function sessionAgeMs(sessionManager: SessionManagerLike): number | undefined {
  const headerTimestamp = sessionManager.getHeader?.()?.timestamp;
  const firstEntryTimestamp = sessionManager.getEntries?.()?.find((entry) => entry.timestamp)?.timestamp;
  const timestamp = headerTimestamp ?? firstEntryTimestamp;
  if (!timestamp) return undefined;
  const started = Date.parse(timestamp);
  if (!Number.isFinite(started)) return undefined;
  return Date.now() - started;
}

function clampPercent(percent: number | null | undefined): number | null {
  if (percent === null || percent === undefined || !Number.isFinite(percent)) return null;
  return Math.max(0, Math.min(100, percent));
}

function renderBar(theme: ThemeLike, percent: number | null | undefined, width = DEFAULT_BAR_WIDTH): string {
  const cleanPercent = clampPercent(percent) ?? 0;
  const filled = Math.max(0, Math.min(width, Math.round((cleanPercent / 100) * width)));
  const empty = width - filled;
  const colorName = cleanPercent >= 90 ? "error" : cleanPercent >= 70 ? "warning" : "success";
  return color(theme, colorName, "█".repeat(filled)) + color(theme, "dim", "░".repeat(empty));
}

function contextText(state: StatusLineState, theme: ThemeLike, width: number): string | undefined {
  const contextWindow = state.contextWindow ?? 0;
  if (!contextWindow) return undefined;

  const percent = clampPercent(state.contextPercent);
  const tokenText = state.contextTokens === null || state.contextTokens === undefined ? "?" : formatTokens(state.contextTokens);
  const percentText = percent === null ? "?" : `${Math.round(percent)}%`;
  const percentColor = percent !== null && percent >= 90 ? "error" : percent !== null && percent >= 70 ? "warning" : "dim";
  const pieces = [`${tokenText}/${formatTokens(contextWindow)}`];
  if (width >= 90) pieces.push(renderBar(theme, percent));
  pieces.push(color(theme, percentColor, percentText));
  return pieces.join(" ");
}

function costText(state: StatusLineState): string | undefined {
  if (state.totals.cost > 0) return `$${state.totals.cost.toFixed(state.totals.cost >= 10 ? 2 : 3)}`;
  if (state.usingSubscription) return "sub";
  return undefined;
}

function modelText(state: StatusLineState, theme: ThemeLike): string | undefined {
  const modelId = sanitizeSingleLine(state.modelId) || "no-model";
  const provider = sanitizeSingleLine(state.provider);
  const thinking = state.thinkingLevel && state.thinkingLevel !== "off" ? ` ${state.thinkingLevel}` : "";
  const prefix = provider && provider !== "openai-codex" ? `${provider}/` : "";
  return color(theme, "muted", `${prefix}${modelId}${thinking}`);
}

function tokenIoText(state: StatusLineState, theme: ThemeLike): string | undefined {
  const parts = [];
  if (state.totals.input) parts.push(`↑${formatTokens(state.totals.input)}`);
  if (state.totals.output) parts.push(`↓${formatTokens(state.totals.output)}`);
  if (state.totals.cacheRead) parts.push(`R${formatTokens(state.totals.cacheRead)}`);
  if (state.totals.cacheWrite) parts.push(`W${formatTokens(state.totals.cacheWrite)}`);
  return parts.length ? color(theme, "dim", parts.join(" ")) : undefined;
}

function joinParts(parts: Array<string | undefined>, separator: string): string {
  return parts.filter((part): part is string => Boolean(part)).join(separator);
}

function fitColumns(left: string, right: string, width: number, theme: ThemeLike): string {
  if (width <= 0) return "";
  if (!right) return truncateToWidth(left, width, color(theme, "dim", "…"));
  if (!left) return truncateToWidth(right, width, color(theme, "dim", "…"));

  const leftWidth = visibleWidth(left);
  const rightWidth = visibleWidth(right);
  if (leftWidth + 1 + rightWidth <= width) {
    return left + " ".repeat(width - leftWidth - rightWidth) + right;
  }

  const minLeft = Math.min(20, Math.max(8, Math.floor(width * 0.35)));
  const rightAvailable = Math.max(0, width - minLeft - 1);
  const fittedRight = truncateToWidth(right, rightAvailable, color(theme, "dim", "…"));
  const leftAvailable = Math.max(0, width - visibleWidth(fittedRight) - 1);
  const fittedLeft = truncateToWidth(left, leftAvailable, color(theme, "dim", "…"));
  const gap = Math.max(1, width - visibleWidth(fittedLeft) - visibleWidth(fittedRight));
  return truncateToWidth(fittedLeft + " ".repeat(gap) + fittedRight, width, color(theme, "dim", "…"));
}

export function buildStatusLine(state: StatusLineState, width: number, theme: ThemeLike = {}): string {
  const sep = color(theme, "dim", " | ");
  const host = sanitizeSingleLine(state.host);
  const cwd = sanitizeSingleLine(state.cwd || "~");
  const branch = sanitizeSingleLine(state.branch ?? undefined);
  const place =
    color(theme, "accent", host || "pi") +
    color(theme, "dim", " ") +
    color(theme, "text", cwd) +
    (branch ? color(theme, "dim", ` (${branch})`) : "");

  const age = formatDuration(state.ageMs);
  const context = contextText(state, theme, width);
  const io = width >= 110 ? tokenIoText(state, theme) : undefined;
  const left = joinParts([place, age ? color(theme, "dim", age) : undefined, io, context], sep);

  const model = modelText(state, theme);
  const apiLimit = sanitizeSingleLine(state.apiLimitText);
  const cost = costText(state);
  const right = joinParts([model, apiLimit ? color(theme, "dim", apiLimit) : undefined, cost ? color(theme, "dim", cost) : undefined], sep);

  return fitColumns(left, right, width, theme);
}

export function buildModeLine(state: StatusLineState, width: number, theme: ThemeLike = {}): string | undefined {
  const statuses = (state.statuses ?? []).map((s) => sanitizeSingleLine(s)).filter(Boolean);
  if (statuses.length === 0) return undefined;

  return truncateToWidth(statuses.join(color(theme, "dim", " · ")), width, color(theme, "dim", "…"));
}

function collectState(ctx: ClaudeUiContext, footerData?: FooterDataLike): StatusLineState {
  const entries = ctx.sessionManager.getEntries?.() ?? [];
  const branchEntries = ctx.sessionManager.getBranch?.() ?? entries;
  const contextUsage = ctx.getContextUsage?.();
  const model = ctx.model;
  const cwd = ctx.sessionManager.getCwd?.() ?? ctx.cwd ?? process.cwd();
  const statuses = Array.from(footerData?.getExtensionStatuses?.()?.entries() ?? [])
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, text]) => text);

  return {
    host: hostname().split(".")[0] || "host",
    cwd: formatCwdForStatus(cwd),
    branch: footerData?.getGitBranch?.(),
    sessionName: ctx.sessionManager.getSessionName?.(),
    ageMs: sessionAgeMs(ctx.sessionManager),
    totals: getUsageTotals(entries),
    modelId: model?.id,
    provider: model?.provider,
    thinkingLevel: model?.reasoning ? latestThinkingLevel(branchEntries) : undefined,
    contextTokens: contextUsage?.tokens,
    contextWindow: contextUsage?.contextWindow ?? model?.contextWindow,
    contextPercent: contextUsage?.percent,
    apiLimitText: limitsEnabled()
      ? formatProviderLimitText(latestProviderLimit) ?? formatLocalLimitsText(latestLocalLimits?.payload, model?.provider, model?.id)
      : undefined,
    usingSubscription: model ? ctx.modelRegistry?.isUsingOAuth?.(model) : false,
    statuses,
  };
}

export function renderBorderLabel(
  line: string,
  width: number,
  label: string | undefined,
  style: (text: string) => string = (text) => text,
): string {
  const cleanLabel = sanitizeSingleLine(label);
  if (!cleanLabel || width <= 0) return line;

  const plain = stripAnsi(line).trimEnd();
  if (plain.endsWith(cleanLabel)) return line;

  const rawLabel = ` ${cleanLabel} `;
  const labelWidth = visibleWidth(rawLabel);

  if (labelWidth >= width) {
    return style(truncateAnsi(rawLabel, width));
  }

  return `${truncateAnsi(line, width - labelWidth)}${style(rawLabel)}`;
}

export function appendSessionLabelToRenderedLines(
  lines: string[],
  width: number,
  label: string | undefined,
  style: (text: string) => string = (text) => text,
): string[] {
  const cleanLabel = sanitizeSingleLine(label);
  if (!cleanLabel || lines.length === 0 || width <= 0) return lines;

  const targetIndex = findTopBorderLine(lines, width);
  if (targetIndex === -1) return lines;

  const next = [...lines];
  next[targetIndex] = renderBorderLabel(next[targetIndex]!, width, cleanLabel, style);
  return next;
}

function findTopBorderLine(lines: string[], width: number): number {
  const minimumDashes = Math.max(3, Math.min(12, Math.floor(width / 4)));

  for (let index = 0; index < lines.length; index += 1) {
    const plain = stripAnsi(lines[index]!);
    const dashCount = [...plain].filter((char) => char === "─").length;
    if (dashCount >= minimumDashes) return index;
  }

  return -1;
}

function labelStyle(theme: EditorThemeLike): (text: string) => string {
  if (typeof theme.borderColor === "function") return theme.borderColor;
  return (text) => color(theme, "accent", text);
}

class SessionLabelEditor extends CustomEditor {
  constructor(
    tui: unknown,
    theme: EditorThemeLike,
    keybindings: unknown,
    private readonly getLabel: () => string | undefined,
  ) {
    super(tui as any, theme as any, keybindings as any);
  }

  render(width: number): string[] {
    return appendSessionLabelToRenderedLines(
      super.render(width),
      width,
      this.getLabel(),
      labelStyle({ borderColor: this.borderColor as ((text: string) => string) | undefined }),
    );
  }
}

function wrapEditor(editor: EditorLike, theme: EditorThemeLike, getLabel: () => string | undefined): EditorLike {
  if (editor[WRAPPED_EDITOR]) return editor;

  const originalRender = editor.render.bind(editor);
  editor.render = (width: number) =>
    appendSessionLabelToRenderedLines(originalRender(width), width, getLabel(), labelStyle(theme));
  editor[WRAPPED_EDITOR] = true;
  return editor;
}

function installSessionLabel(ctx: ClaudeUiContext): void {
  if (process.env.PI_CLAUDE_UI_SESSION_LABEL === "0") return;
  if (typeof ctx.ui.setEditorComponent !== "function") return;

  const previousEditor = typeof ctx.ui.getEditorComponent === "function" ? ctx.ui.getEditorComponent() : undefined;
  const getLabel = () => ctx.sessionManager.getSessionName?.();

  ctx.ui.setEditorComponent((tui, theme, keybindings) => {
    if (previousEditor) {
      return wrapEditor(previousEditor(tui, theme, keybindings), theme, getLabel);
    }

    return new SessionLabelEditor(tui, theme, keybindings, getLabel) as unknown as EditorLike;
  });
}

function installFooter(ctx: ClaudeUiContext): void {
  if (process.env.PI_CLAUDE_UI_FOOTER === "0") return;
  if (typeof ctx.ui.setFooter !== "function") return;

  ctx.ui.setFooter((tui, theme, footerData) => {
    const unsubscribe = footerData.onBranchChange?.(() => tui.requestRender());

    return {
      dispose() {
        unsubscribe?.();
      },
      invalidate() {},
      render(width: number): string[] {
        const state = collectState(ctx, footerData);
        const lines = [buildStatusLine(state, width, theme)];
        const modeLine = buildModeLine(state, width, theme);
        if (modeLine) lines.push(modeLine);
        return lines.map((line) => truncateToWidth(line, width, color(theme, "dim", "…")));
      },
    };
  });
}

function invalidateFooter(ctx: ClaudeUiContext): void {
  // There is no public footer invalidation API on the extension context. setStatus()
  // already requests a TUI render, and clearing a private key keeps this data in
  // the Claude UI footer instead of adding another extension-status line.
  ctx.ui.setStatus?.("claude-ui-limits", undefined);
}

function captureProviderLimit(event: { headers?: Record<string, string> }, ctx: ClaudeUiContext): void {
  if (!limitsEnabled()) return;

  latestProviderLimit = parseProviderLimitHeaders(event.headers);
  invalidateFooter(ctx);
}

async function refreshLocalLimits(ctx: ClaudeUiContext, force = false): Promise<void> {
  if (!localLimitsEnabled() || localLimitsInflight) return;

  const now = Date.now();
  const refreshMs = localLimitsRefreshMs();
  if (!force && now - localLimitsLastFetchMs < refreshMs) return;

  localLimitsInflight = true;
  localLimitsLastFetchMs = now;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2_000);

  try {
    const response = await fetch(localLimitsUrl(), { signal: controller.signal });
    if (!response.ok) return;
    const payload = (await response.json()) as LocalLimitsPayload;
    if (!payload?.providers) return;

    latestLocalLimits = { payload, fetchedAtMs: Date.now() };
    invalidateFooter(ctx);
  } catch {
    // limitsd is optional; keep footer quiet when the local service is unavailable.
  } finally {
    clearTimeout(timeout);
    localLimitsInflight = false;
  }
}

function startLocalLimitsPolling(ctx: ClaudeUiContext): void {
  if (!localLimitsEnabled()) return;

  void refreshLocalLimits(ctx, true);
  if (localLimitsTimer) return;

  localLimitsTimer = setInterval(() => {
    void refreshLocalLimits(ctx);
  }, localLimitsRefreshMs());
  const timerWithUnref = localLimitsTimer as { unref?: () => void };
  timerWithUnref.unref?.();
}

export default function (pi: ExtensionAPI): void {
  pi.on("after_provider_response", async (event: unknown, rawCtx) => {
    const ctx = rawCtx as ClaudeUiContext;
    if (process.env.PI_CLAUDE_UI === "0" || ctx.hasUI === false) return;
    captureProviderLimit(event as { headers?: Record<string, string> }, ctx);
  });

  pi.on("session_start", async (_event: unknown, rawCtx) => {
    const ctx = rawCtx as ClaudeUiContext;
    if (process.env.PI_CLAUDE_UI === "0" || ctx.hasUI === false) return;
    installSessionLabel(ctx);
    installFooter(ctx);
    startLocalLimitsPolling(ctx);
  });

  pi.on("session_shutdown", async () => {
    if (localLimitsTimer) clearInterval(localLimitsTimer);
    localLimitsTimer = undefined;
  });
}
