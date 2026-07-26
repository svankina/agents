# Notes for agents

Use this file for durable facts and investigation summaries about this repository. Keep standing instructions elsewhere.

## 2026-06-04 Pi skills inventory

Looked through `~/src/pagent` for developed Pi skills. Active project-local skills are under `~/src/pagent/.pi/skills/`: `browser-harness`, `claude-design`, `terminal-fix`, `filetree`, `parallel-task-planner`, `claude-saddle`, `dogfood`, `knowledge-map`, and `pi-init`.

Skills created locally by our commits: `browser-harness`, `claude-design`, `claude-saddle`, `dogfood`, `knowledge-map`, `parallel-task-planner`, `pi-init`, and `terminal-fix`. `filetree` is a Pi port/adaptation of `nekocode/filetree-skill`.

Additional skill surfaces in the same checkout include `extensions/browser-harness/SKILL.md` (`browser` skill for CDP/browser-harness workflows) and `extensions/pisaddle/.pi/skills/claude-saddle/SKILL.md` (packaged mirror of `claude-saddle`). Browser-harness also has non-Pi interaction playbooks under `extensions/browser-harness/interaction-skills/` and opt-in domain playbooks under `extensions/browser-harness/agent-workspace/domain-skills/`.

## 2026-06-04 `/warpfork` Warp pane default

`pi/extensions/wfork.ts` now treats `PI_WFORK_MODE=auto` as pane-first when invoked from Warp and `xdotool` is present, falling back to a new Warp window outside Warp. Warp detection accepts `TERM_PROGRAM=WarpTerminal`, `WARP_TERMINAL_SESSION_UUID`, `WARP_IS_LOCAL_SHELL_SESSION`, or `WARP_SESSION_ID`. Force the old new-window behavior with `PI_WFORK_MODE=window`.

## 2026-06-08 Codex usage-limit headers

A minimal Pi SSE probe with an `after_provider_response` extension showed ChatGPT/Codex responses include usage-limit headers such as `x-codex-active-limit`, `x-codex-primary-over-secondary-limit-percent`, `x-codex-primary-reset-after-seconds`, `x-codex-primary-reset-at`, `x-codex-secondary-reset-after-seconds`, `x-codex-secondary-reset-at`, and `x-codex-credits-unlimited`; one response reported `x-codex-active-limit=premium`, primary percent `0`, primary reset in `4336` seconds, and secondary reset in `233654` seconds. Pi only exposes these through `after_provider_response` for HTTP/SSE provider calls; the current Codex WebSocket transport path does not surface HTTP response headers to extensions. `pi/extensions/claude-ui.ts` therefore also polls the local `limitsd` API (`http://127.0.0.1:8787/api/limits`) and formats the active provider's Codex/Claude windows in the footer, which lets limits show even while Codex uses WebSocket transport.

## 2026-06-17 Claude UI quota footer refresh behavior

`limitsd` now has `auto_fetch: false` by default, so plain `/api/limits` reads can serve persisted snapshots whose 5-hour `reset_at` has already passed; the footer then omits that stale 5h countdown. `pi/extensions/claude-ui.ts` compensates by preferring current local limitsd windows over generic provider headers, falling back to provider headers if the cached primary reset is stale, and asking limitsd for a throttled one-shot `?refresh=1` update when the primary local reset is missing or expired. Opt out with `PI_CLAUDE_UI_LOCAL_LIMITS_REMOTE_REFRESH=0`.

## 2026-06-23 serving-reports skill (shared HTTP server)

Added `pi/skills/serving-reports/` so all Pi agents publish deliverables into one shared, always-on HTTP server instead of each spawning its own `python3 -m http.server`. The server is a single `ThreadingHTTPServer` (concurrent) rooted at `~/.local/share/claude-serve/public/`, started lazily and reused (flock-serialized, idempotent); each agent gets a slug route via `serve-report <path> [--name] [--copy]`. It binds `0.0.0.0` (override `SERVE_REPORT_BIND`) and emits the most clickable host — tailscale IP → LAN IP → `localhost` (override `SERVE_REPORT_HOST`) — so links open from the user's other devices over tailscale/LAN; reports are thus reachable across the tailnet/LAN (don't serve secrets). Canonical script bundled at `pi/skills/serving-reports/scripts/serve-report` and installed on PATH at `~/.local/bin/serve-report` (keep both identical). Default port 8787 (scans upward; live instance currently 8789). The standing instruction lives in `~/AGENTS.md` (→ `~/src/pagent/home/AGENTS.md`) under User Preferences. Mirrors the Claude skill at `~/.claude/skills/serving-reports/` (that copy's doc still says localhost-only — stale re: the new 0.0.0.0 binding).

## 2026-07-03 agent-unification verification results

- `agents-sync` installed; all four generated targets verified live:
  Claude Code, Codex, omp, Pi each reflect the shared core + own deltas.
- omp reads `~/.omp/agent/AGENTS.md` (its own provider won the user-level
  priority race over `~/.codex/AGENTS.md`, as designed).
- **Pi reads `~/.pi/agent/AGENTS.md`** (agentDir), NOT `~/.config/pi/AGENTS.md`
  — that old path is dead (nothing reads it; trashed 2026-07-03). The fetcher
  plugin block was re-seeded into the real path and survives regeneration.
- Pi non-interactive probe flag is `pi -p` / `--print`.
- Pi skills chain: `~/.pi/agent/skills` → `~/src/pagent/.pi/skills` →
  `~/src/agents/pi/skills`; shared skills symlink through to
  `shared/skills/` and SKILL.md resolves through all hops.
- Fetcher blocks preserved in `~/.codex/AGENTS.md` and `~/.pi/agent/AGENTS.md`.
- Drift round-trip on real install: hand-edit → check flags drifted → plain
  sync blocks (exit 2) → sync --force repairs → check clean.

## 2026-07-06 omp subscription-usage-footer: thinking level in model segment

`~/src/omp/extensions/subscription-usage-footer/index.ts`, exposed through the
`~/src/agents/omp/extensions/subscription-usage-footer` symlink, is the omp port of Pi's
`pi/extensions/claude-ui.ts` footer. Ported the thinking-level suffix: the model
segment now renders `<model> <level>` (muted) via `pi.getThinkingLevel()`,
suppressing `off`/`inherit`/undefined — same gating as claude-ui.ts:703. With
`defaultThinkingLevel: auto`, omp's `session.thinkingLevel` is the per-turn
*resolved* level (undefined until the turn is classified). Do NOT enable the
built-in status line for this (`statusLine.leftSegments: [model]`) — that draws a
second bar on the editor border; everything lives in this one extension footer.
omp extensions load at session start, so footer changes need an omp restart.

## 2026-07-27 — `/mod` is an extension, never a core patch

`/mod` (pin a model as this directory's default in `<cwd>/.omp/settings.json`)
lives in `omp/extensions/mod-directory-model.ts`, loaded via the
`extensions: [~/src/agents/omp/extensions]` entry in `~/.omp/agent/config.yml`.

It was first written as a patch to omp core in `~/src/tools/oh-my-pi`
(`f1c471fc1`, `37c01a6c5`) — `omp update` to npm 17.1.4 replaced the whole
`dist/cli.js` and the command vanished. Those commits are reverted; anything
that can be an extension must be one, or the next update eats it.

Extension API facts worth remembering (omp 17.x):
- `pi.registerCommand(name, { description, handler })` — handler gets
  `(args, ctx: ExtensionCommandContext)` and runs in print mode too, so a
  command with an argument form is testable headlessly:
  `omp -p "/mod opus"`.
- `ctx.models.list() / .current() / .resolve(spec)` — authenticated models and
  core's own matching (accepts `provider/id`, bare id, `@role`).
- `ctx.ui.select(title, options, { initialIndex, helpText })` — the built-in
  selector already does type-to-search; it returns the chosen *label*.
- `pi.setModel(model)` switches the live session; `ctx.hasUI` is false in
  print/RPC mode, so guard picker-only paths.
- Project settings (`<cwd>/.omp/settings.json`) beat `~/.omp/agent/config.yml`,
  and are only read from the *cwd* — not from repo-root ancestors.
