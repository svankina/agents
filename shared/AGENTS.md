# Shared agent instructions (Codex, Pi, omp)

These instructions apply to Codex, Pi, and omp. Claude Code is forked: it has
its own full source at `~/src/agents/claude/AGENTS.md` and no longer reads
this file. Agent-specific additions live below the shared core in each
agent's generated file.

## How these files are maintained

The global instruction files of every agent on this machine
(`~/.claude/CLAUDE.md`, `~/.codex/AGENTS.md`, `~/.pi/agent/AGENTS.md`,
`~/.omp/agent/AGENTS.md`) are GENERATED from `~/src/agents` by `agents-sync`.
The base for each agent is `~/src/agents/<agent>/AGENTS.md` when that file
exists (a full per-agent fork — Claude Code today), otherwise this shared
file. To change standing instructions: edit the relevant base file or
`~/src/agents/<agent>/local.md` (agent-specific delta), then run
`~/src/agents/bin/agents-sync sync`. Never edit the generated files directly —
`agents-sync check` flags drift and `sync` will refuse to clobber it silently.

Durable facts about the user — preferences, environment, systems — go in
`~/src/agents/shared/USER.md`, which is concatenated in between the shared
instructions and the agent-specific delta. Keep instructions here and facts
there.

Shared skills live in `~/src/agents/shared/skills/` and are symlinked into
each agent's skills dir by the same tool.

Shared agent commands live in `~/src/agents/bin/` (`agent-worktree`,
`agent-gui`, `agent-shot`, `agent-display`, `fair-run`, …) and are symlinked
into `~/.local/bin` by the same tool. Prefer teaching a recurring procedure to
a command there over writing more etiquette here: drop an executable in `bin/`,
run `agents-sync sync`, and every agent on the machine has it.

Shared slash commands live in `~/src/agents/shared/commands/*.md` and are
symlinked into `~/.claude/commands/` and `~/.omp/agent/commands/` by the same
tool, so `/name` works in either harness. One exists today: `/karen` takes over
a coding agent that is failing in another tmux pane — it reads the pane with
`karen-context`, diagnoses the failure itself, fixes the cause, and briefs the
agent to carry on with its original task.

Per-project convention: repos have `AGENTS.md` as the source file and
`CLAUDE.md` as a symlink to it (`ln -s AGENTS.md CLAUDE.md`).

## Explicit changes

When I ask you to make a change, I would prefer if the change was explicit and
in code, rather than being added as instructions to your context. When you
make a change, write a commit for it and have it ready for push.

## Output style

The reader has ADHD. Brevity is not the point — *shape* is. Every response must
be something I can act on without holding state in my head.

1. **Lead with the action.** First line is a command, path, snippet, or the
   answer itself. Never context, never a plan, never "Let me...".
2. **Number multi-step work.** One bounded action per step. Fewest steps that
   still work — a short path finished beats a complete path abandoned.
3. **End with one concrete next action**, doable in under two minutes. "Open
   the file" counts. If nothing is open, end when the answer is done.
4. **Finish the current issue before raising another.** A second problem gets
   one line at the end as a separate offer, not a mid-answer detour. A question
   that comes up mid-work is not a tangent — answer it yourself if you can.
5. **Restate state every turn.** "Step 3 of 5 done: schema updated. Next:
   backfill the column." I cannot remember where we were. If the harness has a
   task/plan tool, let the checklist do the restating instead of prose.
6. **Time estimates in concrete units.** "About 15 minutes if tests cover this,
   an afternoon if not." Never "a bit of work" or "some effort".
7. **Make finished work visible.** Show what now works and how to see it:
   "Login works with magic links. Try `npm run dev`, open `/login`." Do not
   bury wins in a recap.
8. **Errors are matter-of-fact.** Location, cause, fix. No "Uh oh", no "There
   seems to be a problem".
9. **Cap lists at 5 items.** Past five, split into do-now vs later. Five ranked
   beats ten unranked.
10. **No preamble, no recap, no closers.** Banned openers: "Great question",
    "Let me...", "I'll...", "Sure!", "Looking at your...". Banned closers: "Let
    me know if you need anything else", "Hope this helps", "Feel free to ask".
    Banned recaps: "I've now done X, Y and Z, which means...".
11. **Hard length cap.** Default reply budget: 10 lines / ~120 words. Diffs,
    command output, and code blocks don't count against it; prose does. If the
    answer needs more, that is a signal to cut evidence into a served report or
    a `<details>`-style appendix, not to write longer prose. Exceeding the cap
    is allowed only under the overrides below.

Override the defaults when:

- I ask you to *explain* or *walk me through* — then explain fully, at whatever
  length the topic needs. Still no preamble, still no closer; add headers so I
  can skim back.
- A destructive action is next (`rm -rf`, force push, schema migration, dropping
  a table). Confirm first. Safety beats brevity.
- We are three turns into "still broken". Stop iterating on code, name the
  assumption that might be wrong, ask one diagnostic question.
- The request is genuinely ambiguous. One short question beats guessing.
- A rule would delete the answer. "What are my options" gets 2–4 ranked options
  with one-line trade-offs, recommendation first. The options *are* the answer.
- A rule fights the harness. The harness's own rules outrank this section: do
  the work instead of asking "want me to", announce tool calls if required.

Before sending, delete: the first sentence if it announces what you are about to
do; the last sentence if it asks "anything else?" or recaps; any "by the way"
sidebar; any hedging adverb carrying no real uncertainty; any idiom ("circle
back", "on the same page") in place of the literal action.

Then check: reading only the first line and the last line, do I know what to do
next and what just happened?

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

**Reports get straight to the point.** Verdict/answer in the first screen,
key numbers as a table, one next action — then evidence collapsed in
`<details>` blocks. No intro/background, no "executive summary" section, no
conclusion recap, no methodology up front. Full content rules:
`skill://writing-reports`.

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
  yourself — that is the per-instance sprawl we are consolidating away. Never
  `stop`/`restart` the shared server to clean up your own report — use
  `serve-report rm|gc`. Full usage: `skill://serving-reports`.
- **CAD models get the same treatment:** `serve-cad part.stl` publishes an
  interactive orbit/pan/zoom viewer through the same server — never deliver a
  part as a raw `.stl` path or a static render. Full usage:
  `skill://serving-cad-files`.

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

`NOTES.md` files are append-only logs and some are large (tens of KB) — never
read one whole into context on spec. When a task may depend on saved local
facts, **search** the nearest `NOTES.md` for the topic and read only the
matching entries; skip it entirely if the task is self-evident. If I ask you a
question, and you spent some time looking up the answer, distill the useful
knowledge into that folder's `NOTES.md` file (create it if needed) so future
agents won't have to repeat the work. Keep entries short and dated, prune ones
that are stale or superseded, and do not add these notes to `AGENTS.md`.

## User queue

Use the durable user queue only for work the user explicitly wants deferred
until later. Do not add the current request, prerequisites, follow-up work, or
anything the agent can act on now merely because the user says "save",
"remember", "queue", or "keep." Queueing never replaces or precedes executing
the active request.

When the user explicitly asks to defer an item, add it with
`user-queue add --source "<agent or project>" -- "<exact item>"`. Preserve the
user's wording unless context is required to make the item understandable on
its own, and report the assigned queue ID. Do not substitute `NOTES.md`, a
todo list, or conversational memory for an explicitly deferred queue item.

The user can inspect pending items with `user-queue`, inspect every item with
`user-queue list --status all`, and open the readable web view with
`user-queue view`. Manage items with `user-queue done <id>`,
`user-queue reopen <id>`, and `user-queue remove <id>`.

## Tester handoff workflow

When independent testing is useful — a web app, CLI, TUI, or desktop app,
especially before reporting that a feature is done — hand off to the local
tester harness instead of asking the user to test. It runs in an isolated
environment (own Xvfb display, HOME, TMPDIR, browser profile, logs):

```bash
/home/svankina/src/tester/bin/tester-run --repo "$PWD" --kind web --url http://127.0.0.1:3000 --task "Test the login flow"

printf '%s\n' '{"schema_version":"tester.v1","target":{"type":"cli","command":"python3","args":["--version"],"cwd":"."},"objective":"Verify the CLI starts","assertions":["Output contains Python"]}' \
  | /home/svankina/src/tester/bin/tester-run -
```

`tester-run` prints exactly one JSON result to stdout (progress goes to
stderr) — parse it, and prefer sharing its `environment.run_viewer_url`
(player controls, annotated screenshot, artifact links) over raw artifact
paths under `.tester/runs/<run-id>/`. The full request schema (`target.type`:
`web_url|cli|tui|desktop`, assertions, timeouts) and exit codes are documented
in `~/src/tester`; invalid requests fail fast with a structured error.

Runs default to a per-run detached git worktree so tests never mutate the
caller's checkout; dirty repos block by default — commit first, or set
`worktree.on_dirty` to `head`/`disable` deliberately. For deterministic
GUI/TUI demos prefer `bin/tester-demo` over an exploratory tester agent. For
direct/manual TUI tests use `bin/tester-env tmux-new/tmux-type/tmux-capture`
inside the isolated tmux server, and always finish with `tester-env cleanup`
(`tester-run` cleans up after itself).

## New feature work → use a worktree

New feature work happens in a per-feature git worktree, never directly on the
main checkout. Use `agent-worktree` rather than raw `git worktree` — it picks
the main checkout even when called from inside another worktree, keeps
`.worktrees/` out of git, reuses an existing branch instead of erroring, and
fails loudly if HEAD did not end up on the feature branch.

```bash
agent-worktree new <feature-name>   # prints the worktree path on stdout
agent-worktree list                 # main checkout + every feature worktree
agent-worktree where                # what branch/worktree am I on right now?
agent-worktree rm <feature-name> [--force] [--delete-branch]
```

- Work with your cwd set to the printed path: `cd "$(agent-worktree new foo)"`.
  A branch you created but never checked out is invisible — the status line,
  the Herdr space label and `git status` all read HEAD, and the work silently
  lands on the old branch. `agent-worktree new` refuses to return until HEAD is
  on the feature branch; confirm the status line shows `⑂ <feature-name>`
  before editing anything.
- One worktree per feature, named after the feature/branch.
- Remove it with `agent-worktree rm <name>` once the work is merged.

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

## Shell aliases

**IMPORTANT:** `rm` is aliased to `trash-put` in the user's interactive shell
— files the *user* deletes go to the trash and are recoverable. Agent shells
are non-interactive: no aliases apply there, and a bare `rm` really deletes.

The full alias set lives in `~/src/dotfiles`. If the user types unfamiliar
shorthand in chat (`gs`, `gcm`, `mbranch`, `cc`, `lobpush`, `cfg`, …), look it
up there instead of guessing.

## Screenshots agents take — target the window, never the screen

When you need pixels to verify something, capture **the window you are
verifying**, by identity, with `agent-shot`. Never `screenshot full`, never a
bare `maim`/`scrot`/`import`, and never `i3-msg workspace …` / `focus` to bring
something into view: the user's workspaces are theirs, and a desktop-wide grab
both misleads you and drags their private screen into a transcript.

```bash
agent-shot --list                     # what is capturable, on which display
agent-shot --class FreeCAD            # capture that window -> prints a PNG path
agent-shot --con-id "$(agent-gui --headless -- freecad model.FCStd)"
agent-shot --pid 12345 --wait 20      # wait for the window to appear first
```

Selectors: `--class/--instance/--title/--match` (regex), `--pid`, `--con-id`
(what `agent-gui` prints), `--window` (X id), `--focused`. Several matches is an
error, not a guess — narrow the selector or pass `--all`. Exit 5 means the
window is on a workspace the user is not looking at, so X has no pixels for it;
`agent-shot` refuses rather than silently handing you the wrong screen (which is
exactly what `maim -i <window>` does there).

**Intend to screenshot a GUI app? Launch it headless.** `agent-gui --headless`
puts it on the off-screen agent display (`agent-display`, `$AGENT_DISPLAY`,
default `:99` — Xvfb + a private i3), where windows are always mapped, always
capturable, and invisible to the user. On-screen workspace 9 is for apps the
user is meant to see; its windows are unmapped while that workspace is hidden.

```bash
agent-display start|status|stop       # the off-screen display (auto-started)
agent-display view                    # x11vnc, if you want to watch it
agent-display exec -- <cmd>           # run something against it directly
```

Captures land in `~/.cache/agent-shots/` (`$AGENT_SHOT_DIR`); pass `--out PATH`
for a specific file and `--json` for a machine-readable record. Web pages do not
need any of this — drive a browser tool and screenshot the page there.

## Screenshots the user takes

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

## Wrap-up status posts — `agent-status`

When you finish a piece of work (feature done, investigation concluded, long
task wrapped up), post a one-line status to the Mattermost `#status-updates`
channel:

```bash
agent-status --source <agent-or-project> "wrapped up: <what changed, where>"
```

One line, past tense, concrete: what now works and where. Skip it for trivial
Q&A turns. The command posts through an incoming webhook
(`~/.config/agent-status/webhook`); `--source` sets the displayed name — use
your agent name or the project directory.

## Compute fairness — heavy jobs go through `fair-run`

This machine is shared by the user and multiple concurrent agents. Any
CPU/RAM-heavy process an agent launches — Blender, renders, video encodes,
big compiles (`make -j`, `cargo build`), simulations, batch conversions —
MUST be wrapped in `fair-run`:

```bash
fair-run -- blender -b scene.blend -a
fair-run --cpus 4 -- make -j4
```

`fair-run` (in `~/.local/bin`, source `~/src/agents/bin/fair-run`) puts the
command in a systemd user scope capped at 50% of cores and 50% of RAM by
default, with low CPU weight and nice/ionice, so it always yields to the
user and other agents under contention. No sudo needed. Override with
`--cpus N`, `--mem SIZE`, `--weight W` when a job genuinely needs more, but
never above ~75% of cores.

Rules of thumb:
- Never launch more than one unwrapped multi-core job; when in doubt, wrap.
- Cap explicit parallelism too (`-j`, `--threads`) at half the cores —
  `fair-run` throttles fairly, but fewer threads also means less memory.
- Subagents inherit this rule; tell them explicitly when dispatching work
  that will spawn heavy processes.

## Agent GUI workspace — launch with `agent-gui`

Visible GUI applications launched by agents must live on i3 workspace 9 so
they do not interrupt the user's active workspaces. Launch them through
`agent-gui`, which snapshots the i3 tree, starts the command detached, finds
the new window *by process identity* and moves that container to workspace 9
without stealing focus:

```bash
agent-gui -- freecad model.FCStd
agent-gui --match blender -- flatpak run org.blender.Blender  # hand-off launchers
agent-gui --headless -- freecad model.FCStd   # off-screen, screenshottable
```

Use `--headless` whenever the point of launching the app is for *you* to look at
it: it goes on the agent display instead of workspace 9, so `agent-shot` can
capture it. Workspace 9 is for windows the **user** may want to see; while that
workspace is hidden its windows are unmapped and cannot be screenshotted.

Do not hand-roll `i3-msg '[class="…"] move container to workspace number 9'` —
a wrong class guess silently leaves the window in the user's face. Applies to
FreeCAD, Blender, desktop browsers and any other agent-launched GUI; headless
tools are unaffected.
