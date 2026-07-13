# Shared agent instructions (all agents on this machine)

These instructions apply to every coding agent on this machine — Claude Code,
Codex, Pi, and omp. Agent-specific additions live below the shared core in
each agent's generated file.

## How these files are maintained

The global instruction files of every agent on this machine
(`~/.claude/CLAUDE.md`, `~/.codex/AGENTS.md`, `~/.pi/agent/AGENTS.md`,
`~/.omp/agent/AGENTS.md`) are GENERATED from `~/src/agents` by `agents-sync`.
To change standing instructions: edit `~/src/agents/shared/AGENTS.md` (shared)
or `~/src/agents/<agent>/local.md` (agent-specific), then run
`~/src/agents/bin/agents-sync sync`. Never edit the generated files directly —
`agents-sync check` flags drift and `sync` will refuse to clobber it silently.

Shared skills live in `~/src/agents/shared/skills/` and are symlinked into
each agent's skills dir by the same tool.

Per-project convention: repos have `AGENTS.md` as the source file and
`CLAUDE.md` as a symlink to it (`ln -s AGENTS.md CLAUDE.md`).

## Explicit changes

When I ask you to make a change, I would prefer if the change was explicit and
in code, rather than being added as instructions to your context. When you
make a change, write a commit for it and have it ready for push.

## Sudo / privileged commands

Passwordless sudo is **not** available, and agents have no terminal/askpass —
`sudo ...` fails with "a password is required". Do not ask for or handle my
sudo password in chat, and do not ask me to run `! sudo ...` myself. Use
privileged handoffs sparingly and deliberately:

1. Before asking for sudo, pause and map the likely remaining privileged
   steps. Batch related privileged operations into one reviewable
   command/script when doing so is safe, clear, and narrowly scoped.
2. Consider whether the real need is to run commands as a specific non-root
   account instead of using root. If so, prefer an explicit least-privilege
   approach such as `sudo -u <user> -- <command>`, `runuser`,
   `machinectl shell`, or a service/account-specific tool, and explain why
   that identity is needed.
3. Prepare the exact command, or for anything nontrivial write a reviewable
   script such as `/tmp/pi-sudo-<task>.sh`. Keep the scope minimal; do not
   create broad root shells or open-ended privileged sessions just to avoid
   future prompts.
4. Hand off with `psudo`. As a terminal agent, use the **blocking** form so
   the call returns when sudo exits:
   `psudo --wait --name <task> --why "<why sudo is needed>" <command> ...`
   or, for anything nontrivial,
   `psudo --wait --name <task> --why "<why>" --script /tmp/pi-sudo-<task>.sh`.
   Add `--wait-timeout SECONDS` to bound the wait.
5. Tell me to run `psudo` to attach if there is one pending handoff, or
   `psudo --list` / `psudo --attach <session>` if multiple agents have
   pending sudo requests.
6. The tmux session will show the sudo handoff review and handle local sudo
   prompting.
7. After I complete the prompt, inspect the results normally. Leave the
   session output visible for review.

**Subagents must never run sudo or psudo themselves** (they either lack the
completion listener and would hang, or would spam approval requests the user
can't trace). When a subagent needs root, it must bubble the request up to
the parent — stop and return a result stating the exact command/script and
why — so the top-level agent runs the handoff and then continues or
re-invokes the subagent. When dispatching a subagent for a task that may need
privileges, tell it explicitly: "do NOT use sudo/psudo; if a step needs root,
STOP and report exactly which command needs it so the main agent runs it."

**Docker specifically needs NO sudo here** — the user is in the `docker`
group, so `docker ...` works unprivileged. Do not tell subagents "docker
requires sudo." (Note the `docker`→`sudo docker` alias is interactive-shell
only; call the binary as `docker` / `/usr/bin/docker` in scripts.)

## Delivering artifacts

**The user hates raw Markdown. Never hand it to them as a deliverable.** When
you present something for the user to *look at* — a report, results writeup,
summary, analysis, comparison, plan, diagram — render it as **polished,
self-contained HTML** (embedded CSS, no external deps) and serve that. A `.md`
file viewed in a browser shows as unstyled plaintext, which is exactly what
they don't want. Write the underlying notes/docs in Markdown if you like, but
the thing you put in front of the user should be a styled HTML page. Make it
actually look good: real typography, spacing, a clear visual hierarchy,
color-coded tables/status where it helps — not a bare `<pre>` dump of
Markdown.

When presenting the user with a deliverable (a generated file, report,
diagram, build artifact, screenshot, HTML page, etc.), do **not** just point
at a local filesystem path, and do **not** start your own HTTP server. There
is **one shared, always-on server** for every agent on this machine — publish
to it with `serve-report` and hand the user the clickable `http://` link it
prints.

```bash
serve-report <path-to-file-or-dir> [--name NAME]
# prints e.g.  http://localhost:8787/analysis-3f9a2b.html  — give that to the user
```

- **Never** run `python3 -m http.server` (or `npx serve`, `http-server`, …)
  yourself — that is the per-instance sprawl we are consolidating away.
- Works for a single file or a whole directory (site with `index.html` +
  assets).
- Default is a live symlink; pass `--copy` to freeze a snapshot that outlives
  the source. Manage with `serve-report status|list|rm <slug>|gc`. Never
  `stop`/`restart` the shared server to clean up your own report — use
  `rm`/`gc`.
- Full usage lives in the `serving-reports` skill
  (`skill://serving-reports`).

Before presenting any URL to the user, verify it works and shows the expected
content. Use an appropriate check for the URL type (for example, `curl`/HTTP
status plus key text for simple pages, or the browser/tester harness and
screenshots for UI pages). Do not share a URL based only on assuming a server
started; if verification is not possible, say that clearly along with what
was attempted.

Put the deliverable URL at the **bottom of the response**, after the summary,
evidence, and verification details. The user should never need to scroll back
up to find what was made.

When reporting code or file changes in chat, show the actual code changes
every time. Use a traditional fenced `diff` by default so the changed lines
are visible; a concise summary may be included in addition, but not instead
of the code changes.

## Knowledge acquisition and storage

Use the nearest `NOTES.md` for accumulated local facts, investigation
summaries, diagnostics, and other durable-but-non-instructional notes. Keep
`AGENTS.md` limited to standing instructions and workflow preferences.

When a task may depend on saved local facts, read the nearest `NOTES.md`
before re-investigating. If I ask you a question, and you spent some time
looking up the answer, distill the useful knowledge into that folder's
`NOTES.md` file (create it if needed) so future agents won't have to repeat
the work. Do not add these notes to `AGENTS.md`.

## Tester handoff workflow

When independent testing is useful, use the local tester harness at
`/home/svankina/src/tester` instead of asking the user to manually test. The
handoff executable is `/home/svankina/src/tester/bin/tester-run`.

Use tester handoff when you need an independent check of a web app, CLI tool,
TUI, or desktop application, especially before reporting that a feature is
done. The tester runs in an isolated local environment with its own Xvfb
display, HOME, TMPDIR, browser profile, screenshots, and logs.

Call `tester-run` with JSON on stdin or a request file. It prints exactly one
JSON result to stdout; progress and diagnostics go to stderr and artifact
files. Always parse/read the JSON result and mention important artifacts in
your final report.

Simple examples:

```bash
/home/svankina/src/tester/bin/tester-run --repo "$PWD" --kind web --url http://127.0.0.1:3000 --task "Test the login flow"

printf '%s\n' '{"schema_version":"tester.v1","target":{"type":"cli","command":"python3","args":["--version"],"cwd":"."},"objective":"Verify the CLI starts","assertions":["Output contains Python"]}' \
  | /home/svankina/src/tester/bin/tester-run -
```

Request format highlights:

- `schema_version`: use `tester.v1`.
- `target.type`: one of `web_url`, `cli`, `tui`, or `desktop`.
- `target.url`: required for `web_url`.
- `target.command`: required for `cli`, `tui`, and `desktop`.
- `target.args`, `target.cwd`, and `target.env`: optional command context.
- `objective`: what to verify.
- `assertions`: concrete pass criteria.
- `timeout_seconds`: overall tester-agent timeout.
- `backend`: optional; only `local` is implemented. Requests for `container`
  or `firecracker` return a structured blocked result, not a silent fallback.
- `worktree`: optional; defaults to enabled for git repos. `tester-run`
  creates a per-run detached git worktree under
  `.tester/runs/<run-id>/worktrees/` so tests do not mutate the caller's
  checkout. Dirty source repos block by default; commit changes first, or
  explicitly set `worktree.on_dirty` to `head` or `disable` when appropriate.

Exit codes:

- `0`: pass
- `1`: fail
- `2`: invalid request or blocked
- `3`: harness error
- `4`: timeout
- `5`: tester-agent error
- `130`: cancelled

Tester artifacts are written under
`/home/svankina/src/tester/.tester/runs/<run-id>/`, including `request.json`,
`result.json`, `prompt.md`, `viewer.html`,
`screenshots/annotated-summary.png`, logs, screenshots, optional
`media/recording.mp4` / `media/recording.gif`, per-run git worktrees, and Pi
session files. Each run has a saved viewer at `environment.run_viewer_url` in
the result JSON, usually `http://<tailscale-ip>:18765/runs/<run-id>/`; prefer
sharing that URL because it includes player controls, the marked-up
screenshot, and links to logs/artifacts. For deterministic GUI/TUI demos,
prefer `/home/svankina/src/tester/bin/tester-demo` or scenario wrappers over
spawning an exploratory tester agent. The isolated tester HOME has its own Pi
resources; run `/home/svankina/src/tester/bin/tester-env setup-pi-resources`
if custom slash commands like `/thinking` are missing. For live manual screen
viewing, run `/home/svankina/src/tester/bin/tester-env status` and use the
printed screen viewer URL.

For direct/manual TUI tests, run the tested process inside the isolated
tester tmux server instead of a bare terminal:
`/home/svankina/src/tester/bin/tester-env tmux-new <session> <command...>`,
attach visually with `tmux-attach`, send input with `tmux-type`/`tmux-enter`,
and capture text with `tmux-capture`. Always clean up after direct/manual
runs with `/home/svankina/src/tester/bin/tester-env cleanup`; `tester-run`
performs this cleanup automatically.

## New feature work → use a worktree

When starting work on a **new feature**, do it in a git worktree placed under
a `.worktrees/` subfolder of the repo, rather than working directly on the
main checkout.

```bash
# from the repo root
git worktree add .worktrees/<feature-name> -b <feature-name>
# then work inside .worktrees/<feature-name>
```

- One worktree per feature, named after the feature/branch.
- Keep `.worktrees/` ignored by git (add to `.gitignore` if not already).
- This isolates feature work from the main checkout; clean up the worktree
  (`git worktree remove .worktrees/<feature-name>`) once the work is merged.

## Stop band-aiding a recurring error — fix the workflow at the root

If the SAME error shows up more than ~twice in a session, that is a signal to
**stop and fix the cause**, not to keep applying the same one-off workaround.
Repeating a manual patch (re-prefixing a command, re-adding a path, re-editing
the same config) every time is a workflow bug on *my* side. When it recurs:
1. Name the root cause explicitly.
2. Make the fix durable: a wrapper script, an alias, a committed config file,
   or a note here in this file so the next session starts already knowing it.
3. Only then continue the task.
Never let the user be the one to point out "you've hit this 10 times."

### Concrete: Python for the CAD repos (`~/src/cad`, `~/src/pigeon_defence`)

`/usr/bin/python3` does **not** have `build123d` (or `cadkit`) and never
will — stop reaching for it for any CAD/build123d work. The canonical
interpreter is the cad venv, and cadkit lives in the skill package, not
site-packages:

```bash
# build123d only:
/home/svankina/src/cad/.venv/bin/python  yourscript.py
# build123d + cadkit (manifest/Assembly/Mate/Joint, the gate, etc.):
PYTHONPATH=/home/svankina/src/cad/skills/cadkit /home/svankina/src/cad/.venv/bin/python  yourscript.py
```

Set this once at the start of CAD work (e.g.
`PY=/home/svankina/src/cad/.venv/bin/python`) and use `$PY` thereafter.
Pyright/LSP flagging `import build123d` as "could not be resolved" is the
same root cause (editor using the wrong interpreter) — it is harmless noise,
not a real error; silence it with a `pyrightconfig.json` pointing
`venvPath`/`venv` at that venv rather than re-noticing it each time.

## Killing a Codex subagent (`codex-agent`) — `stop` is NOT enough

`codex-agent start` launches the run under `setsid` (its own session) and
records the **wrapper shell's** PID. `codex-agent stop <id>` only `kill`s
that wrapper — **the detached `codex exec` child survives and keeps
running**, including firing `psudo`/sudo prompts and editing files, long
after you think you stopped it.

To ACTUALLY kill a Codex run:
1. `codex-agent stop <id>`   # best-effort; kills the wrapper only
2. Kill the real `codex exec` process(es) by run id (most reliable):
   `pkill -9 -f "agent-runs/<id>"`
   (equivalently, kill the whole process group: `kill -9 -- -<pid>` where pid
   is from `~/.codex/agent-runs/<id>.meta`).
3. **Verify** nothing survives: `pgrep -af "agent-runs/<id>"` → empty.
4. Clear any **pending `psudo`** request it spawned: `pgrep -af psudo` and
   kill the matching request, or the user will keep getting prompts.

When stopping a Codex run, scope the kill to that run's id — do NOT kill
unrelated `codex exec` processes (other tasks may be running concurrently).

## Shell aliases & functions

**IMPORTANT:** `rm` is aliased to `trash-put` — files are not permanently
deleted, they go to the trash.

### Git
| Alias | Expands to |
|-------|-----------|
| `gs` | `git status` |
| `ga` | `git add` |
| `gd` | `git diff` |
| `gco` | `git checkout` |
| `gp` | `git push` |
| `gpr` | `git pull --rebase` |
| `gf` | `git add $_` (re-add last arg) |
| `gcm <msg>` | `git commit -m "<msg>"` |
| `mbranch <name>` | create branch locally and push with `-u origin` |
| `dbranch <name>` | delete branch locally and on origin |

### Files & Navigation
| Alias | Expands to |
|-------|-----------|
| `v` | `vim` |
| `l` | `ls -ClFh --hide="*.pyc"` |
| `ll` | `ls -alF` |
| `la` | `ls -lA` |
| `lh` | `ls -lAhrt` |
| `mc <dir>` | `mkdir <dir> && cd <dir>` |
| `xtar` | `tar -xvf` |
| `ctar` | `tar -cvzf` |

### Python
| Alias | Expands to |
|-------|-----------|
| `py` | `python3 -u` |
| `p3` | `python3` |
| `ipy` | `ipython` |

### tmux
| Alias | Expands to |
|-------|-----------|
| `tm` | `tmux -u` |
| `ta` | `tmux attach` |
| `td` | `tmux detach` |
| `tl` | `tmux list-sessions` |

### System
| Alias | Expands to |
|-------|-----------|
| `_` | `sudo` |
| `sudo` | `sudo ` (trailing space for alias expansion) |
| `docker` | `sudo docker` |
| `sai` | `sudo apt install -y` |
| `sup` | `sudo apt update && upgrade && autoremove` |

### Lobclaw remote
| Alias | Expands to |
|-------|-----------|
| `lobtmux` | `lob shell` |
| `lobwarm` | `lob warm` |
| `lobclose` | `lob close` |
| `lobpush [args]` | `lob push [args]` |
| `lobpull [args]` | `lob pull [args]` |

### Warp / cmd-context (zsh only)
| Alias | Expands to |
|-------|-----------|
| `cc` | `CMD_WARP_MODE=interactive cmd-context` |
| `ccp` | `CMD_WARP_MODE=plan cmd-context` |
| `ccr` | `CMD_WARP_MODE=resume cmd-context` |
| `cmd` | `cmd --yolo` |

### Dotfiles
| Alias | Expands to |
|-------|-----------|
| `cfg` | `git` against `$HOME/wksp/dotfiles` bare repo |
| `cfgu` | stage all tracked, commit "updates", push |

## Screenshots

Screenshots are saved to `~/Pictures/Screenshots/` (override with
`$SCREENSHOT_DIR`). Filenames are `Screenshot_YYYY-MM-DD_HH-MM-SS_<mode>.png`
where `<mode>` is `full`, `window`, or `select`. The newest file there is the
most recent capture, so to grab "the screenshot I just took" use the latest
file by mtime, e.g.:

```bash
ls -t ~/Pictures/Screenshots/*.png | head -1
```

Capture is handled by `~/.local/bin/screenshot {full|window|select}`, bound
in i3 (`~/src/dotfiles/config/i3/config`) to `Print` (full screen),
`Shift+Print` (active window), and `Alt+Print` (rectangular selection). Every
capture is both saved to that directory and copied to the clipboard as
`image/png` — no prompts.

Phone-shared screenshots/files from the Android Homer share target land in
`~/shared/`, flat and timestamp-prefixed (`YYYYMMDD-HHMMSS_<original-name>`).
When the user says they shared/sent a screenshot or file from the phone, check
`~/shared/` first (`ls -t ~/shared | head`) before asking them to upload it again.

## Android notifications

All agents on this machine can send Sravan an Android notification through
Homer:

```bash
homer-notify --title "Need approval" \
  --body "The deployment is waiting for sudo approval." \
  --source <agent-name> --priority urgent
```

Use this only for genuinely important events or when Sravan must act to unblock
the task. Never notify for routine progress, routine completion, or information
already visible in the active session. The command returns success only after
Homer durably accepts and audits the notification; if it fails, report that
failure in the session instead of claiming the user was notified.

## User preferences

The user prefers to do minimal work. If there's something you can run safely,
which would avoid them having to do work, then run it.
