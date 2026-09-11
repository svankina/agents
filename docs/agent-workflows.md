# Agent workflows

Operational reference for the standing rules in `~/src/agents/omp/AGENTS.md`.
Read the named section before its operation. Report and CAD procedures live in
the matching skills, not here.

## Lightweight conversation

`conversation` opens the persistent communication-only OMP terminal.
`conversation --pane` creates or reuses a background Herd dock without selecting
it; it never kills other panes. `conversation --print 'MESSAGE'` performs a
noninteractive exchange (piped stdin also works). Use `--model MODEL` to override
the default `@smol` role. Only one process may write the conversation at a time.
Its dock pane carries a display identity: the row reads **Conversation** with
the role `Agent routing` and the `assets/conversation.svg` portrait, and the
expanded pane shows that portrait, live state, model and role above the
terminal. The row's token count covers the private session root.

The router lists existing named agents, chooses by their project/role, and asks
the user when ownership is ambiguous. It has only `list_agents`, `route_request`,
and `request_status`, not shell, filesystem, delegation, or coding tools.
Follow-ups retain the original session identity; unrelated requests select a
freshly discovered target. It does not invent replacements for offline agents.

The terminal shows Conversation's purpose and command hints above the editor.
Use `/routes [topic]` for live responsibilities, `/handoffs` for recent requests,
and `/conversation` for help. These commands do not call a model or send work.
Unknown responsibilities are explicit. `/agents` remains OMP's agent settings
command; it is not the routing roster.

Tool cards show agent names, projects, request text, and readable replies instead
of JSON. The live indicator distinguishes accepted/awaiting reply, reply received,
and uncertain delivery. “Reply received” does not verify the agent's claims.
The dock's idle age measures time since the router started or last saved a
handoff or reply. Reading status does not reset that age.
Follow up by agent or topic; Conversation resolves the internal request ID from
history and asks which topic when ambiguous. Ask for the rest of a long reply
or older handoffs to page through retained history.

When a coordinator's responsibilities are not clear from its name/project,
record them in optional `$CONVERSATION_STATE_DIR/agents.json` (default
`~/src/docked_agents/conversation/agents.json`). Its format is a JSON array of
`{"sessionId": "EXACT_SESSION_ID", "description": "Known responsibilities"}`.
Use the live roster's stable session ID, not a display name or guessed peer ID.
The registry is reread on roster refresh and applies only to the matching live
session. A replacement session needs a new entry; stale entries do not make an
offline agent routable. There is no periodic LLM capability-discovery loop.

Handoffs use the ordinary persistent receiver-side peer channel, which carries
the receiver's role/context but is not its main-terminal user conversation.
Do not describe queue acceptance as completed work or retry uncertain sends.
A timeout leaves the original work running. Keep the router open to receive
late replies; after print-mode exits, inspect the recorded status rather than
assuming success or failure.

Private transcripts and handoff state live under `~/src/docked_agents/conversation`
(`CONVERSATION_STATE_DIR` overrides it). The roster's project root defaults to
the home directory (`CONVERSATION_PROJECT_ROOT` narrows or overrides it), so
long-running bots under `~/.local/state` remain discoverable alongside project
agents under `~/src`. Existing OMP authentication
and model-role configuration are reused. The launcher supplies its own narrow
config overlay and explicit extension path; do not install this plugin globally.

## Persistent CAD agent

`cad-agent` opens or reuses **CAD** in Herd's background dock without selecting
it. The agent uses `openai-codex/gpt-6-astra` with high thinking. Prewalk is
disabled so editing does not automatically switch to a smaller model.
Use `cad-agent --terminal` to run it in the current terminal instead.
Only one process can write its conversation.
Its dock pane carries a display identity: the row reads **CAD** with the role
`Mechanical CAD` and the `assets/cad.svg` portrait, and the expanded pane shows
that portrait, live state, model and role above the terminal. A restarted dock
is what applies changed identity metadata; a live pane keeps the metadata it
was spawned with.

The agent stays available after each request. Its private coordination workspace
and saved conversations live under `~/src/docked_agents/cad`; override that root
with `CAD_AGENT_STATE_DIR`. After exit, run `cad-agent` to resume the saved
conversation. This is a persistent Herd pane, not a reboot-started system service.
Use the existing Conversation role registry to bind CAD's live session ID when
setting it up for routed requests.

The launcher explicitly loads `omp/plugins/cad-agent/index.ts` for its name and
terminal header. Do not install that extension globally. CAD uses the shared
`modelling-cad` and `serving-cad-files` skills and the existing `cad-workbench`
engine. Model changes belong in the requested project's feature worktree, not
the private coordination workspace. No model polling runs while idle, and
preparing fabrication files does not authorize starting a printer.

## Source maintenance

OMP standing instructions and durable user facts — preferences, environment,
systems — live directly in `~/src/agents/omp/AGENTS.md`, linked to
`~/.omp/agent/AGENTS.md`. Edit that source; no composition or generation step
is needed. Keep facts in its user preferences and workstation sections.
Home project context lives in `~/src/agents/home/AGENTS.md`, linked to
`~/AGENTS.md`. The installer does not create a `CLAUDE.md` alias.

Run `~/src/agents/bin/omp-install` (or `omp-install install`) to install links
or add new resources, then `omp-install check` to inspect drift without changes.
The default repository is derived from the executable's resolved path.
Use `--repo PATH` and `--home PATH` to select another repository or home.
Edits to already-linked sources take effect without rerunning the installer.

Installed resources:

- `shared/skills/` child directories → `~/.omp/agent/skills/`.
- `shared/commands/*.md` → `~/.omp/agent/commands/`.
- `shared/agents/*.md` → `~/.omp/agent/agents/`.
- Executable non-`.py` files in `bin/` → `~/.local/bin/`.
- `omp/dock-extensions/*.ts` → `<dock cwd>/.omp/extensions/`, for every
  directory under `~/src/docked_agents/` and each `workspace` child.
  `--docks PATH` selects another dock state root.

Shared helpers include `agent-worktree`, `agent-gui`, `agent-shot`,
`agent-display`, and `fair-run`. Prefer implementing a recurring procedure
in a command over adding more etiquette here: add an executable to `bin/`
and run `omp-install`.

Shared slash commands are installed into OMP only. For example, `/karen`
takes over a coding agent that is failing in another tmux pane: it reads
the pane with `karen-context`, diagnoses the failure, fixes the cause, and
briefs the agent to carry on with its original task.

The installer leaves correct links unchanged and installs missing links.
It may replace incorrect links pointing lexically within the repository.
Foreign files, directories, or links block installation with exit code 2,
as do missing required instruction sources. The whole plan is checked before
any changes. `check` returns 0 when clean and 1 for drift and never mutates.
Pruning only removes dangling links into the corresponding source subtree
from OMP resource directories and `~/.local/bin`; foreign links are preserved.
Inspect conflicts and resolve them explicitly before rerunning the installer.

OMP configuration, machine-wide extensions, and `~/.omp/agent/managed-skills`
are not managed; dock extensions below are the one extension exception.
Pi and Claude skills, prompts, extensions, and commands remain historical
resources, not install targets; other harness directories are untouched.

### Dock extensions

`omp/dock-extensions/` holds extensions that only Herd-docked agents get.
They are not machine-wide plugins and are not listed in `~/.omp/agent/config.yml`;
OMP discovers project extensions in the session's own cwd only, so the installer
links each file into every docked agent's working directory. Rerun `omp-install`
after adding a dock or a dock extension; `omp-install check` reports the drift.

`dock-peer-scope.ts` reads the current `HERD_PANE` metadata from the broker and
forces `hub list` to `scope=all` for `dock=bots` panes, including explicitly
requested project scope. Ordinary panes and other hub operations are unchanged.
A running session must restart before a newly linked extension loads.

### herdmon coordinator dispatch

`omp/plugins/herdmon-dispatch` adds explicit durable dispatch without changes to
OMP core. Link the package with `omp plugin link PATH/omp/plugins/herdmon-dispatch`.
Create `~/src/docked_agents/herdmon/dispatch-config.json` with the exact
`coordinatorSessionId` and optional `maxWorkers` (default 3) and `model`.
`HERDMON_STATE_DIR` selects an isolated state directory for verification.
Only that session can execute `herdmon_dispatch`. Worker SDK sessions disable
extension discovery and have distinct identities, session files and worktrees.
Newly linked extension factories load at OMP startup. `/reload-plugins` refreshes
plugin caches and commands, but does not load new extension tools; `ctx.reload()`
reloads the transcript, not extension code. Do not mistake “Plugins reloaded”
for successful activation. Verify `herdmon_dispatch` is callable and the
snapshot exists in the exact configured coordinator session.

If activation requires replacing an existing coordinator process, arrange an
explicitly authorized idle handoff: confirm no active jobs or queued work,
capture its exact session ID and session file, and preserve any editor draft.
After the old process exits, resume that same file in the same pane with
`omp --cwd ORIGINAL_CWD --resume EXACT_SESSION_FILE`. Do not start a duplicate,
restart the shared broker, use ambiguous `--continue`, or discard a draft.

The coordinator scopes each request with `op: "scope"` and `requests` containing
`id`, `request`, `acceptance`, absolute `repo`, `targetBranch`, and optional
`dependencies` (request IDs). The IDs are idempotency keys: identical replays do
not launch twice; changed scopes are rejected. Dependencies can refer to other
entries in the same batch; missing IDs and cycles reject the whole batch.
Independent requests run concurrently, capped by `maxWorkers`. Dependencies
wait for reviewed, integrated completion, not a worker's handoff.

Before rebasing dispatched work, explicitly synchronize the scoped local target
with its authorized remote using a fetch and fast-forward-only update. Then use
`op: "rebase", id, note` before a fresh integrating review. It rebases only the
recorded, clean worker worktree onto that local target; it neither fetches,
merges, nor pushes. It records an immutable audit of the original base and
commit identities, replaces the authoritative identities with the post-rebase
commits, clears prior review and verification, and returns the request ready.
Concurrent target movement likewise invalidates review/verification. Any
incomplete rebase — including a conflict or target race — preserves the worktree
as pending and requires explicit `op: "recover", id, note`. Recovery accepts
only an exact abort to the recorded original tip and commits, or a reflog-proven
finished rebase from that recorded tip, and only while the recorded target is
an ancestor of the current scoped target; it records recovery against the
original target, returns ready, and requires another explicit rebase onto the
latest target. It rejects arbitrary replacements, published/shared rewrites,
remote divergence, and non-fast-forward target updates; all are blockers, never
force operations.

Review the rebased worktree and use `op: "integrating", id, note` to record the
fresh review. Manually fast-forward merge its authoritative post-rebase commits
into the scoped target; dispatch never merges or pushes anything. Run
`op: "verify", id, command: ["executable", "arg"]` to execute combined
verification in the target checkout. A successful command, no uncommitted
tracked changes, and every authoritative post-rebase worker commit in target
ancestry are required. Unrelated untracked user files are preserved and do not
block it. Then `op: "completed", id, note` accepts that exact verified target
HEAD. Moving HEAD invalidates verification. Workers cannot accept their own
work.

`op: "block", id, note` records a blocker for stopped work.
After interruption, inspect the recorded worktree and session before
`op: "recover", id, note`. Recovery can move clean committed work to review;
it never relaunches a worker. If launch stopped before recording a worktree,
inspect any partial branch manually and use a new explicitly scoped ID.
Shutdown records active work as interrupted before attempting to drain workers;
OMP can bound the shutdown hook time. Process death also marks interrupted work
blocked on next activation. A process-identity lease rejects duplicate owners.
Session-only reload retains an already-loaded runtime without duplicating workers.
Worker handoffs enqueue a supported coordinator message and wake a turn, without
writing terminal input or touching the editor. Messages say ready for review,
not merged; failures include blockers. A durable pending-delivery bit survives
interruption; recreating the extension binding uses the current API. Heartbeats
do not send messages. A crash after enqueue but before recording delivery can
repeat an informational notification; it cannot duplicate a worker launch.

`dispatch.sqlite` is the private authority. Atomic `dispatch.json` is a read-only
version-1 dashboard projection, refreshed on transitions and every 15 seconds.
Legacy `queue.json` and the manager Inbox remain separate: the coordinator
explicitly decides scope rather than dispatching arbitrary chat.

The resource lease plugin lives in `omp/plugins/resource-leases`. Install its
helpers with `omp-install`, then link the package with
`omp plugin link ~/src/agents/omp/plugins/resource-leases`. Restart OMP to load
it; do not rebuild or replace OMP core. Disable it with
`omp plugin disable @svankina/omp-resource-leases`.

The `resources` tool acquires processes or dedicated headless browsers and
lists/releases session-owned leases. Browser acquisition returns `cdpUrl`;
attach with Eval `browser.open({app:{cdp_url:cdpUrl}})`. Close managed tab
handles, then call `resources` cleanup before completion. The plugin guards
successful quit/yield and the main-session stop hook. Bash receives owner
environment variables for `agent-gui`; no process-global owner variable is set.
Raw Bash/Eval subprocesses and browsers opened without broker acquisition are
not intercepted. Subagent stop hooks are not available; explicit release,
terminal yield interception, shutdown and owner-process death provide cleanup.

`agent-resource` contains descendants in Linux user-systemd cgroups, with
eight live leases per owner and 32 per user. A separate watchdog reclaims
dead owners using PID plus process start time. Failed cleanup retains its
lease. Browser profile directories are broker-owned and removed after cgroup
shutdown. User browsers and unrelated processes are not adopted. The watchdog
is intentional persistent infrastructure; logs and released rows are retained.
When upgrading broker schema or cleanup logic, stop
`agent-resource-watchdog.service` before the first new acquisition; acquisition
starts the updated watchdog. Do not remove its source worktree while it runs.

`reaper --pane` opens Reaper's background web dashboard in Herd's dock.
It does not select the pane or create a duplicate. Use `--restart` after an
update; the new dashboard must answer before the old pane is removed.
Agent cards group named requests. Live, Recent and History scopes and search
filter the list. Select a request for its exact owner and lease IDs, usage,
observed peaks, charts and lifecycle. On narrow screens, Back to requests
returns to the selected row. Measurement coverage expands accounting errors.
Whole-machine readings stay separate from request usage.

The dashboard uses a token-gated loopback HTTP server owned by its pane.
Herd's Terminal output button shows service diagnostics. Herd shortcuts returns
keyboard focus to Herd; shortcuts do not cross the iframe boundary.
`--serve` prints a standalone local dashboard URL. `--watch` retains the
terminal view (`p` pauses, `j`/`k` scroll history, `q` exits).
`--once --json` prints a read-only collector snapshot.
The avatar is `assets/reaper.svg`.

Requests name a browser or process; they do not reserve CPU or RAM quantities.
Raw command arguments are not recorded. The broker retains 2,000 lifecycle
events; the dashboard reads all of them and the terminal reads 40.
Registry state takes precedence over incomplete event history. Missing release
outcomes remain unknown, not live. Exact session IDs remain authoritative.
Resolved labels and up to 120 observed samples for each of 256 resources are
cached privately under `~/src/docked_agents/reaper` (`REAPER_STATE_DIR` overrides it).
Peaks are sampled observations, not lifetime maxima. Released requests retain
last-observed usage, never a claim of current consumption. Observations from
before Reaper watched a request are unavailable, not reconstructed.

Consumption includes per-agent and per-lease CPU, RAM, tasks, and I/O rates
where the kernel delegates accounting. CPU is 100% per logical core for
leases and 100% for the whole machine in the host row. Host RAM, swap, load,
and NVIDIA GPU/VRAM/temperature/power are separate machine-wide readings.
GPU attribution to individual leases is not available. Missing counters and
first-sample rates show Unavailable (`--` in the terminal), not zero. This machine currently delegates CPU,
memory and PIDs but not I/O to user cgroups, so per-lease I/O is unavailable.
Processes outside leased cgroups are included only in host totals.

Historical design and plan documents remain records of earlier workflows.

## Privileged commands

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

## User queue

Use the durable user queue only for work the user explicitly wants deferred
until later. Do not add the current request, prerequisites, follow-up work, or
anything the agent can act on now merely because the user says "save",
"remember", "queue", or "keep." Queueing never replaces or precedes executing
the active request.

When the user explicitly asks to defer an item, add it with
`user-queue add --source "<agent or project>" -- "<exact item>"`. Preserve the
user's wording unless context is required to make the item understandable on
its own, and report the assigned queue ID. Do not substitute a local
todo list or conversational memory for an explicitly deferred queue item.

The user can inspect pending items with `user-queue`, inspect every item with
`user-queue list --status all`, and open the readable web view with
`user-queue view`. Manage items with `user-queue done <id>`,
`user-queue reopen <id>`, and `user-queue remove <id>`.

## Tester handoff

When independent testing is useful — a web app, CLI, TUI, or desktop app,
especially before reporting that a feature is done — hand off to the local
tester harness instead of asking the user to test. It runs in an isolated
environment (own Xvfb display, HOME, TMPDIR, browser profile, logs):

```bash
~/src/tester/bin/tester-run --repo "$PWD" --kind web --url http://127.0.0.1:3000 --task "Test the login flow"

printf '%s\n' '{"schema_version":"tester.v1","target":{"type":"cli","command":"python3","args":["--version"],"cwd":"."},"objective":"Verify the CLI starts","assertions":["Output contains Python"]}' \
  | ~/src/tester/bin/tester-run -
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

## Feature worktrees

New feature work happens in a per-feature git worktree, never directly on the
main checkout. Use `agent-worktree` rather than raw `git worktree` — it picks
the main checkout even when called from inside another worktree, keeps
`.worktrees/` out of git, reuses an existing branch instead of erroring, and
fails loudly if HEAD did not end up on the feature branch.

```bash
agent-worktree new <feature-name>   # prints the worktree path on stdout
agent-worktree list                 # main checkout + every feature worktree
agent-worktree where                # what branch/worktree am I on right now?
agent-worktree integrate <feature> --target <branch> --remote <remote> -- <verification argv...>
agent-worktree rm <feature> [--force] [--delete-branch --target <branch>]
```

- Work with your cwd set to the printed path: `cd "$(agent-worktree new foo)"`.
  A branch you created but never checked out is invisible — the status line,
  the Herdr space label and `git status` all read HEAD, and the work silently
  lands on the old branch. `agent-worktree new` refuses to return until HEAD is
  on the feature branch; confirm the status line shows `⑂ <feature-name>`
  before editing anything.
- One worktree per feature, named after the feature/branch.
- `integrate` fetches the named remote target, fast-forwards the local target
  only, rebases an unpublished feature onto that synchronized target, runs the
  supplied meaningful verification in the rebased feature worktree, then
  fast-forward merges the target. It never pushes. Remote divergence, a
  conflict, or published/shared feature work that would be rewritten stops
  safely and preserves the feature worktree; resolve a conflict explicitly with
  the reported `git -C <worktree> rebase --continue` or `--abort` path.
- Remove a merged worktree with `agent-worktree rm <name>`. Branch deletion
  requires `--delete-branch --target <branch>`: before removing anything it
  proves the feature is an ancestor of that exact target. The same command
  safely supports an idempotent retry after the worktree is already missing;
  `--force` never bypasses branch-deletion safeguards.

## Shell aliases

**IMPORTANT:** `rm` is aliased to `trash-put` in the user's interactive shell
— files the *user* deletes go to the trash and are recoverable. Agent shells
are non-interactive: no aliases apply there, and a bare `rm` really deletes.

The full alias set lives in `~/src/dotfiles`. If the user types unfamiliar
shorthand in chat (`gs`, `gcm`, `mbranch`, `cc`, `lobpush`, `cfg`, …), look it
up there instead of guessing.

## Agent screenshots

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
# List ~/Pictures/Screenshots/*.png with the harness file tool; choose newest mtime.
```

Capture is handled by `~/.local/bin/screenshot {full|window|select}`, bound
in i3 (`~/src/dotfiles/config/i3/config`) to `Print` (full screen),
`Shift+Print` (active window), and `Alt+Print` (rectangular selection). Every
capture is both saved to that directory and copied to the clipboard as
`image/png` — no prompts.

Phone-shared screenshots/files from the Android Homer share target land in
`~/shared/`, flat and timestamp-prefixed (`YYYYMMDD-HHMMSS_<original-name>`).
When the user says they shared/sent a screenshot or file from the phone, check
`~/shared/` first (list by newest mtime with the harness file tool) before asking them to upload it again.

## Android notifications

All agents on this machine can send the user an Android notification through
Homer:

```bash
homer-notify --title "Need approval" \
  --body "The deployment is waiting for sudo approval." \
  --source <agent-name> --priority urgent
```

Use this only for genuinely important events or when the user must act to unblock
the task. Never notify for routine progress, routine completion, or information
already visible in the active session. The command returns success only after
Homer durably accepts and audits the notification; if it fails, report that
failure in the session instead of claiming the user was notified.

## Compute fairness

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
- Never launch an unwrapped heavy job; when in doubt, wrap.
- Cap explicit parallelism too (`-j`, `--threads`) at half the cores —
  `fair-run` throttles fairly, but fewer threads also means less memory.
- Subagents inherit this rule; tell them explicitly when dispatching work
  that will spawn heavy processes.

## GUI launches

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
