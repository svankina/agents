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

The receiving screen shows one muted channel count when all channels are quiet.
Working channels show the sender and a short activity preview. New replies and
errors stay highlighted until their details are opened. The widget shows at
most two previews; the remaining count links to `/channels`.
Run `/channels` to inspect tasks, queues, full results, and errors. Enter opens
details and marks that channel as read; `t` opens the persisted request/answer
transcript; Escape returns. Unread markers last for the current UI session.
Reporting is UI-only.
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

## Conversation router

Run `conversation` after `omp-install` to talk to existing named agents through
one lightweight OMP terminal. Use `conversation --pane` for a background Herd
dock: repeated launches reuse its live pane without changing focus or touching
other panes. `conversation --print 'Which agents are available?'` runs one
noninteractive exchange; `--model MODEL` overrides the default configured
`@smol` role.

Conversation exposes only `list_agents`, `route_request`, and `request_status`.
It routes by the live named-agent roster and asks when the target is ambiguous;
it does not create replacement specialists or expose coding tools. New requests
discover current targets; follow-ups stay bound to the original session.
Delivery uses the existing receiver-side persistent peer channel, with that
agent's role and context—not a user turn in its main terminal. Queue acceptance
is not completion, and a timeout does not cancel remote work or justify a retry.

For responsibilities not apparent from names and project paths, an optional
`agents.json` in the Conversation state directory holds an array of
`{"sessionId": "EXACT_SESSION_ID", "description": "Known responsibilities"}`.
Each roster refresh reads it and matches descriptions to exact live session
identities. Update entries when an agent starts a new session; descriptions
never authorize substitution by a similarly named agent. This is a small
explicit registry, not periodic model-based capability discovery.

The conversation resumes its private transcript under
`~/.local/state/conversation/sessions`; its working directory is the adjacent
`workspace`. `CONVERSATION_STATE_DIR` overrides this root and
`CONVERSATION_PROJECT_ROOT` overrides the roster's default home-directory root.
Home-wide discovery includes long-running bots under `~/.local/state` as well
as project agents under `~/src`; set the override to narrow discovery.
Authentication and configured model roles remain shared with normal OMP.
A session lock prevents competing writers. The launcher loads its extension
explicitly and disables automatic extension discovery, built-in tools, skills,
rules, LSP, title generation, and unrelated autonomous features. Do not globally
link the router plugin. Keep the terminal running for late replies; a print-mode
exit with pending work is not evidence that the request failed or completed.

## Designer dock

Run `designer-dock` after `omp-install` to open Designer beside the other
Herd docked agents. The dock pane hosts the Designer OMP process itself:
the web view shows its history, and **Terminal output** is the conversation.
Designer therefore appears only in the dock, never among the project panes.
The hosted process resumes the newest Designer transcript that no online
session is still writing; `--resume SESSION` picks one explicitly. Launching
never selects the pane. Repeated launches reuse a healthy hosted pane; a pane
whose process has exited is replaced after its successor is ready.

The contact list shows recorded conversations, not every online agent.
It imports incoming requests, outgoing feedback, and available transport
receipts from Designer's main transcript and persistent peer-channel workers.
Session identities keep contacts together across transport restarts.
`recorded` and `injected` do not mean read, approved, or acted on.

Designer's own transcript turns are recorded too, so work survives the peer
that asked for it. A peer that launches `omp --resume <Designer transcript>
--print <brief>` leaves a plain user turn; the dock reads that peer's own
transcript (by its recorded project directory and session id) and attributes
the turn only when the identical prompt appears there. A user-typed turn in
which Designer `hub send`s to exactly one peer is recorded under that contact
as `User → Designer · about <name>`; it never counts as the contact's feedback.
Other user turns stay unattributed and are not shown. Each recorded turn
carries the files Designer wrote or edited and the `git commit` commands it
ran (with the hash when git printed one) as **Changes**, and archives the
images it read or wrote. Channel-worker replies carry their changes the same
way. The first start after this change rescans every transcript once.

Image references are copied into an immutable local archive. Select a contact
and asset to compare two revisions or open a full image. Capture time is the
time of archival observation, not the historical message time. Missing or
overwritten source images cannot reconstruct earlier pixels.
PNG, JPEG, WebP, GIF, and inactive SVG files are supported, up to 32 MiB each.
Relative references use the sender's recorded project directory. Explicit
same-message directories, brace alternatives, and bounded artifact-specific
globs are supported. Ambiguous paths and generic screenshot globs are not
guessed. The header counts unrecovered references; Recording coverage lists
the reasons. Remote URLs are not fetched.

Lists and comparisons use cached previews no larger than 320 pixels.
Opening an image loads its archived original. Preview generation needs
Python Pillow; SVG previews also use ImageMagick `convert`, `fair-run`,
`prlimit`, and `timeout`. Preview failures preserve access to the original.
The browser checks every 15 seconds. Unchanged snapshots return HTTP 304
without retransmitting conversation history.

`designer-dock --snapshot` imports and prints the current record. To group
renamed captures under one asset, reuse the same contact ID and asset label:

```sh
designer-dock --record /path/to/capture.png --contact CONTACT_ID \
  --asset 'Settings screen' --caption 'Spacing revised after feedback'
```

Add `--event EVENT_ID` to link the picture to a recorded message.
State is stored in `$XDG_STATE_HOME/designer-dock`, or
`~/.local/state/designer-dock`. Agents can read `snapshot.json` there without
depending on hub delivery. `DESIGNER_STATE_DIR`, `DESIGNER_SESSION_DIR`, and
`DESIGNER_PROJECT_DIR` override the storage and source locations.
The HTTP surface is read-only, loopback-only, exact-Host checked, and protected
by an unguessable URL path. No OMP core or Herd panel changes are required.

## Historical Pi source checkouts

- Primary local Pi resource checkout: `~/src/pagent`
- Active project-local Pi skills there: `~/src/pagent/.pi/skills/*/SKILL.md`
- Packaged browser-harness skill: `~/src/pagent/extensions/browser-harness/SKILL.md`
- Packaged pisaddle skill mirror: `~/src/pagent/extensions/pisaddle/.pi/skills/claude-saddle/SKILL.md`
