# Claude Code specific

## Long-running tasks & usage limits

Subscription usage is capped by a rolling **5-hour** window and a **weekly
(7-day)** limit. When a limit is hit, the session pauses and the reset
timestamp is shown. There is **no built-in self-resume**, and an agent
**cannot** put itself to sleep and wake itself across a reset — waking
requires a model call that the limit blocks. Cross-limit resumption is driven
by an **external** process (a wrapper/cron around `claude`), never by
in-session timers.

Therefore, on any long-running task, treat the session as if it may be killed
at any moment:

- **Checkpoint progress to disk frequently** — keep a `PROGRESS.md` (or state
  file) in the working dir capturing what's done, what's next, and any
  context a fresh session needs to resume exactly where you left off.
- When you **hit or approach a usage limit**, write the reset time into the
  checkpoint and stop cleanly rather than retrying in a tight loop.
- Do **not** attempt to sleep-until-reset from inside the session (it can't
  work). Assume an external resumer will relaunch with `claude --continue`
  after the window resets, and leave the checkpoint in a state that makes
  that trivial.

## Subagent model routing

When delegating work to a subagent, pick the model by task complexity:

- **Simple tasks** (mechanical edits, renames, focused searches, small
  scripts, data collection) → use a **`gpt-5.6-luna`** subagent.
- **Complex tasks** (multi-file refactors, debugging, design, anything
  needing sustained reasoning) → use a **`gpt-5.6-sol`** subagent.
