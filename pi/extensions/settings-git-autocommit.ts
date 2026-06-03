import type { ExtensionAPI, ExtensionContext } from "@earendil-works/pi-coding-agent";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

const POLL_MS = 5_000;

function enabled(): boolean {
  const value = process.env.PI_SETTINGS_GIT_AUTOCOMMIT;
  if (value === undefined) return false;
  return !["0", "false", "no", "off"].includes(value.trim().toLowerCase());
}

function hashFile(path: string): string | undefined {
  try {
    return createHash("sha256").update(readFileSync(path)).digest("hex");
  } catch {
    return undefined;
  }
}

function findNearestSettings(cwd: string): string | undefined {
  let dir = resolve(cwd);
  while (true) {
    const candidate = join(dir, ".pi", "settings.json");
    if (existsSync(candidate)) return candidate;
    const parent = resolve(dir, "..");
    if (parent === dir) return undefined;
    dir = parent;
  }
}

function candidateSettings(cwd: string): string {
  return findNearestSettings(cwd) ?? join(resolve(cwd), ".pi", "settings.json");
}

function git(args: string[], cwd: string): string {
  return execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function gitQuiet(args: string[], cwd: string): boolean {
  try {
    execFileSync("git", args, { cwd, stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function isInGitWorktree(path: string): boolean {
  return gitQuiet(["rev-parse", "--is-inside-work-tree"], dirname(path));
}

function commitSettings(path: string): "committed" | "unchanged" | "not-git" {
  const cwd = dirname(path);
  if (!isInGitWorktree(path)) return "not-git";

  const root = git(["rev-parse", "--show-toplevel"], cwd);
  const rel = relative(root, path);
  git(["add", "--", rel], root);

  if (gitQuiet(["diff", "--cached", "--quiet", "--", rel], root)) {
    return "unchanged";
  }

  const subject = "Update Pi directory settings";
  const body = [
    "Record scoped Pi add-on settings for this directory.",
    "",
    "AI-Harness: pi",
    "AI-Model: unknown",
    "AI-Reasoning-Level: unknown",
    "AI-Token-Usage: unknown",
    "AI-Token-Scope: pi-extension=settings-git-autocommit",
  ].join("\n");

  git(["commit", "--only", "-m", subject, "-m", body, "--", rel], root);
  return "committed";
}

function notify(ctx: ExtensionContext, message: string, type: "info" | "warning" = "info") {
  if (!ctx.hasUI) return;
  try {
    ctx.ui.notify(message, type);
  } catch {
    // Best-effort only.
  }
}

export default function settingsGitAutocommit(pi: ExtensionAPI) {
  if (!enabled()) return;

  let timer: NodeJS.Timeout | undefined;
  let lastHash: string | undefined;
  let lastFailureHash: string | undefined;

  async function check(ctx: ExtensionContext): Promise<void> {
    const settingsPath = candidateSettings(ctx.cwd);
    if (!existsSync(settingsPath)) return;

    const currentHash = hashFile(settingsPath);
    if (!currentHash || currentHash === lastHash) return;
    lastHash = currentHash;

    try {
      const result = commitSettings(settingsPath);
      if (result === "committed") {
        notify(ctx, `Committed ${settingsPath}`, "info");
      }
      lastFailureHash = undefined;
    } catch (error) {
      if (lastFailureHash === currentHash) return;
      lastFailureHash = currentHash;
      const message = error instanceof Error ? error.message : String(error);
      notify(ctx, `Could not auto-commit ${settingsPath}: ${message}`, "warning");
    }
  }

  pi.on("session_start", (_event, ctx) => {
    void check(ctx);
    timer = setInterval(() => void check(ctx), POLL_MS);
  });

  pi.on("session_shutdown", async (_event, ctx) => {
    if (timer) clearInterval(timer);
    timer = undefined;
    await check(ctx);
  });
}
