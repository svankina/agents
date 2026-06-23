---
name: serving-reports
description: Serve a report, HTML page, website, build artifact, screenshot, or any file/dir to the user over HTTP and hand them a clickable link. Use whenever you would otherwise run `python3 -m http.server` (or `npx serve`, `http-server`) or need to give the user a `http://localhost` URL for something you generated. There is ONE shared server for every agent on this machine — never start your own.
compatibility: Requires `serve-report` on PATH (canonical copy bundled at scripts/serve-report; install to ~/.local/bin). Needs python3 and curl.
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

## Publish something (the one command you need)

```bash
serve-report <path> [--name NAME] [--copy]
```

- Prints a clickable `http://localhost:<port>/<slug>` URL on stdout. Give that
  URL to the user verbatim.
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
# -> http://localhost:8787/analysis-3f9a2b.html

# A whole static site / report folder
serve-report ./build/site --name release-notes
# -> http://localhost:8787/release-notes-9c1d04/

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
- Always give the user the full `http://localhost:...` URL including the slug, so
  the link is directly clickable.
- Prefer the default symlink mode for reports you may regenerate; use `--copy`
  only when the artifact must survive its source being removed.
- The user dislikes raw Markdown as a deliverable: render reports/summaries as
  self-contained, styled HTML and serve *that*, not a `.md` file.

## Install / where things live

- **Canonical script:** `scripts/serve-report` in this skill directory. It must
  be reachable as `serve-report` on PATH. If it isn't installed yet:

  ```bash
  install -m755 "$(dirname "$0")/scripts/serve-report" ~/.local/bin/serve-report
  # or symlink it; ensure ~/.local/bin is on PATH
  ```

  After editing the script, update both this bundled copy and the installed one
  (they should stay identical).
- **Served root:** `~/.local/share/claude-serve/public/` (one symlink/copy per
  report).
- **Server log:** `~/.local/share/claude-serve/server.log`.
- **Port:** prefers `8787` and scans upward if busy (`SERVE_REPORT_PORT` to
  override). Bound to `127.0.0.1` — local only. State dir overridable via
  `SERVE_REPORT_HOME`.
