---
name: serving-reports
description: Publish an artifact the user needs to open, such as a report, website, build output, or screenshot, through the shared HTTP server. Use when an artifact is requested or substantial content, visual comparison, or interactive inspection benefits from one. Ordinary chat answers, summaries, comparisons, and plans do not require publishing. Never start a separate HTTP server.
compatibility: Requires serve-report on PATH (canonical script bundled at scripts/serve-report). Needs python3 and curl.
---

# Serving reports

There is a **single, shared, always-on HTTP server** for every agent on this
machine. Do **not** run `python3 -m http.server` / `npx serve` / `http-server`
yourself — that spawns one server per agent and the port-juggling/sprawl is
exactly what this consolidates away. Publish into the shared server with
`serve-report` and hand the user the URL it prints.

The server is a single `ThreadingHTTPServer` rooted at one shared public dir, so
many agents serve concurrently through it. It starts on first use and is reused
forever after — idempotent and race-safe (flock-serialized; never more than one
server). Every agent "hooks in" by publishing its own slug route under that one
server.

The server binds **all interfaces (`0.0.0.0`)** and emits the most
externally-clickable URL it can: the **tailscale IP** if up, else the **LAN
IP**, else `localhost`. So the link works from the user's other devices over
tailscale (or the local LAN), not just this machine. Reports are therefore
reachable by anything on the tailnet/LAN — don't serve secrets.

## Publish something (the one command you need)

```bash
serve-report <path> [--name NAME] [--copy]
```

- Prints a full HTTP URL on stdout. Give that URL to the user verbatim,
  including its selected host, port, and slug; do not substitute localhost.
- `<path>` may be a **file** (e.g. `report.html`) or a **directory** (e.g. a
  site with `index.html` + assets). Directories serve `index.html` at the slug
  root, or an auto directory listing if there's no index.

### Flags

- `--name NAME` — friendly slug stem (default: the source basename). A short
  random suffix is always appended so concurrent reports never collide. The
  file extension is preserved automatically for correct MIME type.
- `--copy` — snapshot the source now (survives the source being deleted/moved).
  Default is a **symlink**, so the URL reflects live edits to the source — ideal
  when you'll regenerate the report during the session. Use `--copy` for a
  frozen artifact you want to keep serving after cleanup.

### Examples

```bash
# A generated HTML report (lives in a temp dir you may clean up later)
serve-report /tmp/analysis.html --name analysis
# -> http://<tailscale-ip>:8789/analysis-3f9a2b.html

# A whole static site / report folder
serve-report ./build/site --name release-notes
# -> http://<tailscale-ip>:8789/release-notes-9c1d04/

# A frozen snapshot that outlives the source
serve-report ./out/chart.png --name q3-chart --copy
```

## Managing the server (rarely needed)

```bash
serve-report status        # running? port? pid? how many reports?
serve-report list          # every published report URL + its target
serve-report url           # just the root URL (starts server if needed)
serve-report open <slug>   # URL for one slug
serve-report rm <slug>     # unpublish one report
serve-report gc            # drop dead entries (symlinks to deleted sources)
serve-report stop          # stop the shared server (all agents share it!)
serve-report restart       # stop + start fresh
```

`<slug>` is the last path segment of the URL (e.g. `analysis-3f9a2b.html`).

## Rules

- **Never** start your own `python3 -m http.server` / `http-server` / `npx serve`.
  Use `serve-report`.
- **Never** `serve-report stop`/`restart` just to clean up your own report —
  other agents are using the same server. Use `serve-report rm <slug>` (or `gc`).
- Give the full URL printed by the command, including its selected host,
  port, and slug, so the link is directly clickable.
- Prefer the default symlink mode for reports you may regenerate; use `--copy`
  only when the artifact must survive its source being removed.
- Answer in chat unless a separate artifact is useful or requested. For report
  artifacts, serve self-contained, styled HTML rather than a raw `.md` file.
- Report **content** rules (verdict first, no fluff, collapse detail) live in
  the `writing-reports` skill (`skill://writing-reports`) — read it before
  composing the report, not after.

## Install / where things live

- **Canonical script:** `scripts/serve-report` in this skill directory.
  Keep one maintained source; the command on PATH should symlink to it.
  If the command is missing, resolve this skill directory and install the link:

  ```bash
  mkdir -p "$HOME/.local/bin"
  ln -s "$SKILL_DIR/scripts/serve-report" "$HOME/.local/bin/serve-report"
  ```

  Set `SKILL_DIR` to the resolved absolute skill directory first. Do not
  overwrite an existing command without inspecting it. If an installation
  uses a copy, refresh it from the canonical script; never edit both copies.
- **Served root:** `~/.local/share/claude-serve/public/` (one symlink/copy per
  report).
- **Server log:** `~/.local/share/claude-serve/server.log`.
- **Port:** prefers `8789` and scans upward if busy (`SERVE_REPORT_PORT` to
  override; `8787` is taken by limitsd on this machine). Binds `0.0.0.0`
  (override `SERVE_REPORT_BIND`); the emitted URL host
  is tailscale IP → LAN IP → `localhost` (override `SERVE_REPORT_HOST`). State
  dir overridable via `SERVE_REPORT_HOME`.
