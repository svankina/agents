---
name: parallel-task-planner
description: Plan large tasks by using the strongest available reasoning model, building a dependency graph, separating read-only planning/review from single-writer implementation, and producing execution-ready subagent or dispatch-server assignments. Use when the user asks to split work across subagents, swarm a task, or parallelize a large implementation/research/review effort.
disable-model-invocation: true
---

# Parallel Task Planner

Use this skill when a task is too large to execute linearly, the user explicitly asks for `/swarm`, or the user asks to split work across subagents/parallel workers.

The goal is not just to make a list. The output must be an execution plan that another agent, dispatch server, or human can run safely. Do not impose arbitrary short word limits; be as detailed as needed for safe delegation while avoiding irrelevant filler.

## Core principles

- **Dependency-aware planning:** represent work as a DAG with explicit inputs, outputs, dependencies, and conflict hotspots.
- **Read-only fanout first:** parallelize discovery, planning, review, and validation before parallelizing writes.
- **Single-writer by default:** use one writer for a shared dirty worktree unless isolated worktrees or disjoint file ownership make concurrent edits safe.
- **True parallel waves:** group only tasks that can run concurrently without file, API, or decision conflicts.
- **Subagent-ready contracts:** every assignment includes scope, context, allowed/forbidden edits, deliverables, validation, progress milestones, and reporting format.
- **No fake delegation:** only claim agents were launched if real delegation or dispatch tooling was used successfully.
- **Visible progress:** maintain a text dashboard with real queued/running/blocked/done status, not invented progress.
- **UI-aware orchestration:** when a task affects user-facing surfaces, include concrete UI guidance so implementers know the intended layout, states, interactions, and accessibility requirements.
- **Integration-first:** plan merge order, validation, rollback, and final synthesis before dispatching work.

## Model expectations

1. Planning should use **Claude Code with `claude-haiku-4-5`** when available (the Claude Code CLI model id for Claude Haiku 4.5).
2. Subagent execution should use **gpt-5.3-codex-spark** by default unless the user chooses a different worker model.
3. Invoke Claude Code planning with `claude -p --model claude-haiku-4-5` when using the CLI directly.
4. If you cannot invoke Claude Code or set the planner/worker models, state that limitation clearly and continue with the current model unless the user explicitly wants to pause.
5. Do not block on model availability when the task is otherwise safe and clear.

## Execution modes

Choose the safest available mode and state which one you chose.

### Mode A: Local dispatch server available

Pi subagents are not installed in the default Pi startup path. If this checkout's local dispatch tooling is present and the task is safe/clear, use it as real delegation tooling instead of merely printing assignments:

1. Start or reuse the dispatch server with auto approval: `python3 scripts/subagent_dispatch_server.py --port 8769 --auto-approve`.
2. Create tasks via `POST /api/tasks/bulk` with `approval_required: false` and the full assignment text for each task.
3. Launch queued workers with `python3 scripts/subagent_codex_launcher.py` or scoped `--ids ...`.
4. For terminal-launched agents not started by the launcher, wrap commands with `scripts/agent_track.py` so lifecycle is visible.
5. Mirror server/subagent reports into the visible dashboard.

### Mode B: No real delegation available

Do not pretend to launch anything. Produce ready-to-send assignments, a wave schedule, and an integration checklist.

## When to pause for the user

Ask clarifying questions before planning or dispatch only when one of these is true:

- The objective or acceptance criteria are ambiguous enough that decomposition would be unsafe.
- The task may be destructive, security-sensitive, or require credentials/sudo/production access.
- Multiple architecture/product choices would materially change the DAG.
- The user explicitly requested review/approval before dispatch.

Do **not** require a separate approval gate merely because there are multiple subagents if the request is safe, clear, and delegation was requested.

## Planning workflow

### 1. Define the objective

Restate:

- desired end state
- repository/files/systems in scope
- explicit constraints from the user
- assumptions and unknowns
- acceptance criteria and definition of done
- non-goals, especially when limiting swarm scope prevents overreach

### 2. Discover context

Inspect enough context to avoid meaningless chunks:

- AGENTS.md/project instructions
- README/package/build/test files
- relevant docs and existing plans
- key directories, ownership boundaries, and generated files
- current git status and dirty files
- tests/lint/build commands and risky integration points

Keep discovery bounded. If discovery itself is large, split discovery into read-only parallel tracks.

### 3. Build the dependency graph

Represent work as nodes. For each node include:

- `id`: stable short label, e.g. `A`, `B1`, `T3`
- `title`
- `goal`
- `type`: discovery, design, implementation, review, validation, integration
- `inputs/context needed`
- `outputs/artifacts`
- `depends_on`
- `can_parallelize_with`
- `files likely touched`
- `conflict hotspots`
- `risk`
- `validation`

Prefer a DAG. If cycles appear, break them by creating an explicit design/interface node that downstream tasks depend on.

### 4. Identify waves

Topologically sort the graph into waves:

- **Wave 0:** discovery, design, interface contracts, and risk decisions.
- **Wave 1..N:** independent implementation/research/test tasks.
- **Review/validation wave:** read-only reviewers/validators inspect actual outputs.
- **Final wave:** integration, conflict resolution, full validation, and final handoff.

For each wave, list:

- which nodes can run at the same time
- which files/interfaces are frozen for that wave
- which decisions must be resolved before the next wave
- whether the wave is read-only, single-writer, or isolated-writer

### 5. Add UI guidance when relevant

For UI, TUI, dashboard, CLI-output, report, progress, or workflow-surface changes, include a dedicated **UI guidance** section before dispatch. Keep it implementation-ready but not over-prescriptive. Do not compress UI guidance to a tiny summary; include enough detail for a worker to implement and a reviewer to validate.

Cover:

- **User goal:** what the user should be able to understand or do at a glance.
- **Information architecture:** key panels/sections, hierarchy, labels, and empty/loading/error states.
- **Interaction model:** primary actions, keyboard behavior, focus management, shortcuts, and confirmation flows.
- **State visibility:** queued/running/blocked/done states, progress, timestamps, stale data, retries, and failure messaging.
- **Accessibility:** semantic elements, ARIA where needed, contrast/readability, minimum text size, keyboard navigation, reduced motion, and screen-reader labels.
- **Responsive behavior:** narrow/mobile, wide desktop, overflow/scroll, sticky regions, and density tradeoffs.
- **Visual direction:** tone, spacing, icon intent, status colors, and what should be emphasized or de-emphasized.
- **Validation:** visual smoke checks, keyboard-only checks, screen-reader/ARIA checks where practical, and screenshot/manual review expectations.

If the user supplied mockups, screenshots, or an existing design system, cite them explicitly and tell subagents to preserve those constraints. If UI is out of scope, say so briefly rather than inventing UI work.

### 6. Decide dispatch strategy

Before dispatching, ensure the plan covers:

- objective and assumptions
- dependency graph
- proposed parallel waves
- subagent assignments
- integration/validation plan
- open questions and risky decisions
- dispatch mode and why it is safe

Dispatch automatically only when the user's request implies delegation and the selected execution mode is real and safe.

### 7. Create subagent work packages

Each assignment must be self-contained and include:

- model: `gpt-5.3-codex-spark`
- role/name
- objective
- repository/cwd
- files/areas to inspect first
- allowed files/areas to edit, or `none` for read-only tasks
- forbidden files/areas
- dependencies / wait-for conditions
- exact deliverables
- validation commands or manual checks
- progress milestones with percentage weights
- reporting format
- conflict-avoidance instructions
- stop/escalation rules for unapproved decisions
- UI guidance when the task touches a user-facing surface

Use this template:

```markdown
## Subagent <name>: <title>

Model: `gpt-5.3-codex-spark`
Mode: read-only | single-writer | isolated-writer
Repository/CWD: ...

Objective: ...

Context to read first:
- ...

Allowed edits:
- ...

Do not edit:
- ...

Dependencies / wait for:
- ...

Deliverables:
- ...

Validation:
- ...

UI guidance, if applicable:
- User goal: ...
- Layout/states/interactions: ...
- Accessibility/responsive checks: ...

Conflict avoidance:
- ...

Stop / escalate if:
- ...

Progress milestones:
- 10% Context read / baseline understood
- 30% Design or approach selected
- 60% Main work complete
- 80% Tests/docs/validation updated
- 100% Validation complete and report ready

Progress reporting:
- Report status at each milestone or when blocked.
- Use: `Progress: [####------] 40% — <short status>`

Report back with:
- Progress: `[##########] 100%`
- Summary
- Files changed, or `none` for read-only tasks
- Tests/checks run and results
- Validation evidence
- Open questions/risks
```

## UI guidance output

When UI guidance is relevant, include it in the main plan and in any affected subagent assignment. Prefer compact artifacts that are easy for workers to apply:

```markdown
## UI Guidance

- User goal: ...
- Layout: ...
- States: empty/loading/error/success/stale/blocked ...
- Interactions: ...
- Accessibility: ...
- Responsive behavior: ...
- Visual direction: ...
- Validation: ...
```

For non-UI work, omit this section or write `UI guidance: not applicable`.

## Progress tracking

After dispatch begins, maintain a visible progress dashboard. Mirror real subagent/dispatch status when available; otherwise update only from explicit reports.

```markdown
## Subagent Progress

| Subagent | State | Progress | Current step | Blocked by |
|---|---:|---:|---|---|
| A | queued | [----------] 0% | Waiting to start | - |
| B | running | [#####-----] 50% | Implementing tests | - |
```

Progress bar rules:

- Use 10 slots: `[#---------] 10%`, `[#####-----] 50%`, `[##########] 100%`.
- States: `queued`, `running`, `blocked`, `needs-review`, `done`, `failed`.
- Do not invent intermediate progress.
- Update the dashboard whenever a subagent reports a milestone, blocks, completes, or fails.

## Integration plan

Always include a main-agent integration plan:

- merge/order for subagent outputs
- expected conflict hotspots
- single-writer or isolated-writer rules
- cross-cutting review checklist
- focused validation commands
- full validation commands
- rollback strategy if one chunk fails
- final definition of done

If implementation is authorized, prefer this safe sequence:

1. Read-only discovery/planning fanout.
2. One implementation worker for the active worktree, or isolated writers in clean worktrees.
3. Read-only validation/review fanout against the real diff/output.
4. One fix/integration worker for accepted fixes.
5. Parent final validation and summary.

## Output format

When invoking this skill, produce:

1. **Planning model note** — whether planning is using Claude Code with `claude-haiku-4-5` or an approximation, and that subagents should use `gpt-5.3-codex-spark` unless overridden.
2. **Objective and assumptions**
3. **Context discovered** — only the important facts that shape the DAG.
4. **Dependency graph** — table or Mermaid DAG.
5. **Parallel waves**
6. **UI guidance** — required for user-facing surfaces; otherwise state not applicable.
7. **Dispatch strategy** — local dispatch server or ready-to-send only; include safety notes.
8. **Subagent assignments** — self-contained prompts/contracts for each subagent.
9. **Progress dashboard** — progress bars for proposed or dispatched subagents.
10. **Integration/validation plan**
11. **Open questions**, if any.
