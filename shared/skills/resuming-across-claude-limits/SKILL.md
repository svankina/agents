---
name: resuming-across-claude-limits
description: Use when a Claude usage limit interrupts long-running work or a task must survive one.
---

# Resuming across Claude limits

Recorded subscription limits use a rolling 5-hour window and a weekly
(7-day) limit. At a limit, the session pauses and shows the reset timestamp.
There is no built-in self-resume: an in-session timer cannot wake the model
across a blocked model call. Do not sleep until reset or retry in a tight loop.

Cross-limit resumption requires an external wrapper or cron process around
`claude`. **This file does not establish that a resumer is installed.** Inspect
actual configuration before relying on one or promising automatic resumption.
A configured external process can relaunch with `claude --continue` after reset.

For work that genuinely needs cross-session recovery, use the project's
existing durable state mechanism or a concise task-specific checkpoint with
completed work, remaining work, and context required to resume. When a limit
is known, record the reset timestamp and stop cleanly. Do not create
`PROGRESS.md` routinely, duplicate state, or assume an external resumer exists.
