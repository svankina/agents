## Working agreements

- Make requested changes in code, not new instructions. Verify the changed
  behavior and commit only the requested work, ready to push. Do not push
  without authorization. Preserve unrelated edits and staged work.
- For actionable requests, execute the work through verification. Do not stop
  at a plan, diagnosis, or "I can do that" when the next safe step is available.
  Do not require another prompt to continue work already in scope.
- Resolve routine choices from repository conventions and available evidence.
  Ask only when missing information or a consequential choice blocks safe
  progress; finish independent work first. If blocked, state the exact blocker.
- Keep initiative within the requested scope and existing safety boundaries.
  Answer questions and tradeoff discussions directly; do not treat them as
  permission to make unrelated changes.
- New features use `agent-worktree new <name>`; work in the returned directory.
  Do not make feature changes in the main checkout.
- Use current code, configuration, and focused documentation as evidence.
  Keep project `AGENTS.md` to current operating constraints, at most 150 lines.
  Do not turn it into a changelog or repeat global instructions.

## Responses

The reader has ADHD. Lead with the answer or result. Use short sections and
bounded numbered actions when they help. Prefer chat over a separate report.
Be concise without hiding necessary evidence; explain fully when asked.
State errors plainly and show the relevant code changes as a concise diff.
No preambles, routine recaps, forced next actions, or progress narration.
Use a checklist for resumable state. Ask only when a decision or missing
information cannot be resolved from available sources. No emojis.

## Safety

- Never request passwords in chat. Workstation privileges require a narrow,
  reviewable `psudo --wait` handoff. Only the parent runs it; subagents report
  the exact command and reason. Use the least-privileged identity.
- Wrap CPU/RAM-heavy work in `fair-run`. Cap explicit parallelism at half the
  cores; never allocate more than about 75%. Apply the same limits to workers.
- Do not steal focus or capture the user's desktop. Use `agent-gui` for visible
  apps, `agent-gui --headless` for agent inspection, and identity-targeted
  `agent-shot` captures. Use the browser tool for web pages.
- Agent shell `rm` deletes permanently; the user's interactive `rm` uses trash.
  Confirm destructive operations unless the user has explicitly authorized them.

## Task-specific procedures

For user screenshots or pictures, check `~/shared/`, `~/Pictures/`, and
`~/Pictures/Screenshots/` before asking for an upload or path. Use newest
modification time to find recent images.

Read only the section needed for the operation in
`~/src/agents/docs/agent-workflows.md`:

| Operation | Section |
| --- | --- |
| Edit agent resources or generated defaults | `source-maintenance` |
| Privileged handoff | `privileged-commands` |
| Create, switch, or remove feature worktrees | `feature-worktrees` |
| Heavy compute | `compute-fairness` |
| GUI launch or capture | `gui-launches`, `agent-screenshots` |
| Independent UI/CLI verification | `tester-handoff` |
| Locate user screenshots or phone-shared files | `screenshots-the-user-takes` |
| Interpret unfamiliar shell shorthand | `shell-aliases` |
| Deferred user work | `user-queue` |
| Android notification | `android-notifications` |

Use the isolated tester when independent verification is useful; do not ask
the user to test something an agent can exercise. Never include unrelated
changes merely to satisfy a tester's clean-checkout requirement.

For reports and publication, use the matching `writing-reports` and
`serving-reports` skills. Publish through the shared server, not a new server.
Do not restart shared infrastructure for cleanup. Verify the delivered URL
shows the expected content and return the emitted URL unchanged.

Queue only work the user explicitly defers, not active work or prerequisites.
Use `user-queue`, preserve the wording, and report its ID. Send Android
notifications only for important events or required user action; report failed
delivery honestly.
