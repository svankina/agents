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

Added `pi/skills/serving-reports/` so all Pi agents publish deliverables into one shared, always-on HTTP server instead of each spawning its own `python3 -m http.server`. The server is a single `ThreadingHTTPServer` (concurrent) rooted at `~/.local/share/claude-serve/public/`, started lazily and reused (flock-serialized, idempotent); each agent gets a slug route via `serve-report <path> [--name] [--copy]`, which prints a clickable `http://localhost:<port>/<slug>` URL. Canonical script bundled at `pi/skills/serving-reports/scripts/serve-report` and installed on PATH at `~/.local/bin/serve-report` (keep both identical). Mirrors the existing Claude skill at `~/.claude/skills/serving-reports/`. Default port 8787 (scans upward; live instance currently 8789), bound to 127.0.0.1.
