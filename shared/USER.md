# About the user

Durable facts about Sravan, the human these agents work for. Facts, not
workflow rules — standing instructions belong in `shared/AGENTS.md`. Keep
entries concise, and date anything likely to change.

Source file: `~/src/agents/shared/USER.md`. It is concatenated into every
agent's generated global instructions by `agents-sync`, so it is always in
context; do not edit the generated copies.

## Working style

- Prefers to do minimal work. If an agent can safely run something itself
  instead of handing the user a command, it runs it.
- Prefers changes made explicitly in code and committed, over behaviour added
  only through agent instructions.
- Has ADHD. Responses must be actionable without holding state in the head:
  lead with the action, restate where we are, one concrete next step. See
  "Output style" in `shared/AGENTS.md` for the full rules.

## Deliverables

- Hates raw Markdown as a deliverable. Anything meant to be *looked at* is
  polished, self-contained HTML served over the shared report server.
- Wants actual code changes shown in chat as fenced diffs, not summarised away.

## Environment

- Single Linux workstation (i3, tmux, zsh). Agent-launched GUIs go to
  workspace 9.
- No passwordless sudo; privileged work goes through `psudo` handoffs.
- Reachable on Android via `homer-notify`, for genuinely blocking events only.

## Projects and systems

- Durable user queue: `~/src/user/user-queue.sqlite3`, managed with the global
  `user-queue` command. `user-queue view` publishes the readable HTML view.
- Agent instruction sources: `~/src/agents` (see "How these files are
  maintained" in `shared/AGENTS.md`).

## Decisions

- 2026-07-25: user-facing profile material lives here rather than in
  `~/src/user/NOTES.md`, because that file is only read when an agent happens
  to be working in that directory.
