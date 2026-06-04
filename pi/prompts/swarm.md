---
description: Swarm a large task using Claude Code claude-haiku-4-5 for planning, then produce a dependency graph, parallel waves, and gpt-5.3-codex-spark subagent assignments
argument-hint: "<large task>"
---
Use the `parallel-task-planner` skill for this task.

Task to plan:
$ARGUMENTS

Plan using Claude Code with model `claude-haiku-4-5` if available (Claude Haiku 4.5 in Claude Code). Design a dependency graph/DAG, split the work into parallelizable waves, and write subagent assignments. Include detailed UI guidance when the task touches user-facing surfaces. Do not impose arbitrary short word limits; be as detailed as needed for safe delegation. Each subagent should use model `gpt-5.3-codex-spark` unless the user overrides the worker model.

If safe/clear and this checkout's local dispatch tooling is available, use it as real delegation tooling instead of merely printing assignments:

1. Start or reuse the dispatch server with auto approval: `python3 scripts/subagent_dispatch_server.py --port 8769 --auto-approve`.
2. Create tasks via `POST /api/tasks/bulk`, including `approval_required: false` and the full assignment text for each task.
3. Launch queued workers with `python3 scripts/subagent_codex_launcher.py` (or scoped `--ids ...`) after tasks are queued.
4. Keep the visible progress dashboard updated from server/subagent reports.
5. For terminal-launched agents (e.g., local `codex exec`), prefer `scripts/agent_track.py` so their lifecycle is visible on the dispatch dashboard.

For terminal-based agents that are not launched by `subagent_codex_launcher.py`, use `scripts/agent_track.py` so the same task dashboard can track command-level output and lifecycle.

Do not require a separate human approval gate when the task is safe/clear. If no real delegation tool exists or dispatch is unsafe, provide ready-to-send assignments instead. Include a visible subagent progress dashboard with text progress bars and keep it updated from subagent reports.
