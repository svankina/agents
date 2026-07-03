# Pi specific

## Sudo handoff: prefer the `request_sudo_handoff` tool

In top-level Pi sessions, prefer the `request_sudo_handoff` tool over raw
`psudo` when it is available. Pass `taskName`, `why`, and exactly one of
`command` or `scriptPath`; the tool creates a `pi-sudo-*` tmux session, shows
a review preview before sudo runs, and resumes the conversation with a queued
follow-up user turn when the sudo command exits.

The follow-up turn only fires when the `sudo-handoff` extension is loaded to
host a completion listener. Top-level Pi sessions have it; contexts that run
with extensions disabled do not — those must use the blocking
`psudo --wait` form from the shared instructions. Pi subagents run with
extensions disabled, so they have no `request_sudo_handoff` tool and no
listener; they must bubble sudo needs up to the parent per the shared rule.
