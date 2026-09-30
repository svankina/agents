# herdmon coordinator dispatch

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
