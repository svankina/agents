# Agents

This repository installs OMP instructions and resources. It also preserves historical Pi and Claude skills, prompts, extensions, and commands without installing them.

## Repository layout

- `omp/AGENTS.md` — direct OMP standing instructions and user facts.
- `home/AGENTS.md` — home project context.
- `shared/skills/`, `shared/commands/`, `shared/agents/` — resources installed into OMP.
- `bin/` — executable helpers installed into `~/.local/bin`.
- `pi/extensions/` — historical Pi coding-agent extensions. See [`pi/extensions/README.md`](pi/extensions/README.md).
- `pi/prompts/`, `pi/skills/`, `claude/commands/` — preserved historical resources, not installer targets.
- `omp/extensions/` — standalone OMP extensions; `omp/lib/` contains their shared implementations.

## Configuration

Machine-specific paths and URLs are not hardcoded. Copy [`.env.example`](.env.example) to `.env` (gitignored) and fill in values for your machine; prompts and skills reference these as `$VARS`.

## Default context

`omp/AGENTS.md` is the single direct source for OMP standing instructions and
user facts. Detailed procedures live in
[`docs/agent-workflows.md`](docs/agent-workflows.md) and
[`docs/machine-operations.md`](docs/machine-operations.md), not in every prompt.

## Install OMP resources

Run `bin/omp-install` (or `bin/omp-install install`), then
`bin/omp-install check`. The CLI uses only Python's standard library.
The repository defaults to the executable's resolved location; use
`--repo PATH` and `--home PATH` to select another checkout or home directory.

| Source | Installed link |
| --- | --- |
| `omp/AGENTS.md` | `~/.omp/agent/AGENTS.md` |
| `home/AGENTS.md` | `~/AGENTS.md` |
| `shared/skills/` child directories | `~/.omp/agent/skills/` children |
| `shared/commands/*.md` | `~/.omp/agent/commands/` children |
| `shared/agents/*.md` | `~/.omp/agent/agents/` children |
| Executable non-`.py` files in `bin/` | `~/.local/bin/` children |

Edits to linked sources take effect without generation. Run the installer
after adding resources. It leaves correct links unchanged and installs missing
ones. Incorrect links pointing lexically inside the repository may be replaced.
Foreign files, directories, or links block installation with exit code 2;
the whole plan is checked before any changes. Missing required instruction
sources also block installation.

`check` never mutates: exit code 0 means clean, and 1 means drift.
Only dangling links pointing within the corresponding source subtree are pruned
from OMP resource directories and `~/.local/bin`; foreign links are preserved.
The installer does not manage OMP configuration, `managed-skills`, extensions,
or other harness directories, and does not install a `CLAUDE.md` alias.
Historical design and plan documents describe past systems, not this contract.

## Herd question answers

`omp/extensions/herd-questions.ts` provides the `ask` tool through OMP's public
extension API. It supports terminal selection and direct answers from Herd's
Android app. It does not patch or replace the OMP executable.

Add `~/src/agents/omp/extensions` to the `extensions` list in OMP's config.
The workstation already uses this directory. New processes load the extension;
existing sessions are not restarted or modified.

The plugin creates a private same-user Unix socket under
`$XDG_RUNTIME_DIR/omp-questions`, or `/tmp/omp-questions-<UID>`.
Herd binds answers to the exact process, transcript, tool call, and request.
Single-choice, multiple-choice, and custom answers are supported.
Expired and duplicate replies are rejected. Normal terminal selection remains
available if the socket cannot start.

The plugin uses the configured `ask.timeout`. Public extension APIs do not
expose plan-mode state, so plan mode does not disable that timeout.
Set `ask.timeout` to `0` to require an explicit answer in every mode.
It does not use OMP's private speech vocalizer.

The same socket exposes `GET /models` and `POST /model` for the interactive
OMP session only. The catalog comes from `ctx.models.list()` and identifies
models by both provider and id. A switch requires the exact absolute session
file reference, an idle session with no queued messages or pending questions,
and available authentication. Competing switches, stale references and busy
sessions receive HTTP 409; unavailable models receive 400, and unavailable
control/authentication receives 503. Success is confirmed against the live
session model after the public `pi.setModel()` call.

The bridge rechecks session identity and idle state around asynchronous work.
OMP's public setter also performs asynchronous authentication internally and
offers no atomic idle/session guard: a terminal action during that internal
await can still race the mutation. A detected race returns an error without
retrying or rolling back against a potentially different session. Source
changes take effect in newly launched OMP processes, not already-loaded
extension instances; no OMP core files need editing.

## Unified hub plugin

`omp/extensions/peers.ts` extends the native `hub` tool through the public
extension API. It does not modify the OMP executable or require a core fork.
The plugin preserves the native schema and delegates local agents, jobs,
inbox operations, and process controls to the native implementation.

`hub list` also discovers live OMP sessions that have the plugin loaded.
`scope: "project"` filters remote sessions to the exact working directory.
Qualified `omp:<instance>/<local-id>` addresses select remote message targets.
Remote `send` and `wait` use the existing same-user Unix socket transport.
Remote job cancellation, process control, and parked-session revival are not
supported. Local ownership stays with native OMP.

Incoming peer requests run in isolated channel workers, not in the receiving
agent's main conversation. Each sender session has one persistent channel.
Messages run in order within that channel. Other channels can run concurrently.
Kernel file locks limit active channel workers to four across OMP processes.
Idle channels retain history on disk, not a live model session.

Each worker receives the receiver's current model, effective system prompt,
and bounded, topic-selected excerpts from its human task conversation.
Peer messages and mixed-provenance compaction summaries are not copied.
Workers retain their own channel history. Important older constraints should
remain in the receiver's project guidance. Worker tools are restricted to the
receiver's active built-in tools; extension/MCP tools, delegation, peer sends,
and human UI questions are not inherited.

The receiving screen shows sender, task, queue, activity, result, and errors.
Run `/channels` to inspect every channel. Enter opens details; `t` opens the
persisted request/answer transcript; Escape returns. Reporting is UI-only.
It does not add worker activity to the receiving model's context.

Channel state is stored under `$XDG_STATE_HOME/omp/peer-channels`
(default `~/.local/state/omp/peer-channels`). Receiver and sender session IDs
retain histories across transport restarts. Accepted queued work resumes when
the receiving session loads. Interrupted active work is not retried because it
may have partially executed. Up to 64 messages can be outstanding per receiver.

`send` with `await: true` registers its reply wait before sending.
Replies preserve `replyTo` and omit `await`. A receipt means queue acceptance,
not completed work. Requests never satisfy the receiving main agent's waits.
Replies go to the matching wait or arrive once as an aside in the requesting
main session. Later waits and inbox reads do not replay them. Timeouts do not
cancel channel work. Delivery failures are visible and are not retried.
`external:herd` and wake-relay messages keep their direct aside route.
`OMP_PEERS_DIR=off` disables remote transport without disabling native hub.

The configured extension directory loads the plugin in new OMP processes.
Use `/reload` in an existing session to load changes without restarting OMP.
Reload preserves channel histories and completed results. The plugin uses
public SDK sessions and same-name `ctx.invokeTool` delegation, verified with
stock OMP 18.1.14.

## Historical Pi source checkouts

- Primary local Pi resource checkout: `~/src/pagent`
- Active project-local Pi skills there: `~/src/pagent/.pi/skills/*/SKILL.md`
- Packaged browser-harness skill: `~/src/pagent/extensions/browser-harness/SKILL.md`
- Packaged pisaddle skill mirror: `~/src/pagent/extensions/pisaddle/.pi/skills/claude-saddle/SKILL.md`
