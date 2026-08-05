---
description: Post a wrap-up status, end the session, and close the terminal
---

The session is ending, and the terminal it runs in should close with it.
Do this now, in order:

1. Compose ONE line summarizing what this session actually shipped: past
   tense, concrete, what now works and where. Example:
   `wrapped up: magic-link login merged to master in ~/src/foo`.
   If the session shipped nothing durable (Q&A only), post nothing and say so.
2. Post it:

   ```bash
   agent-status --source <agent-or-project> "wrapped up: <summary>"
   ```

   Use your agent name or the project directory basename as `--source`.
   Verify the command exited 0; if it failed, report the error instead of
   claiming the post was made.
3. If a `quit_session` tool is available, call it now with
   `kill_terminal: true` — it ends the session gracefully after your final
   reply is delivered, then closes the parent terminal window/pane. If the
   tool does not exist in this harness, skip this step.
4. Reply with the exact line you posted, plus anything left uncommitted,
   unpushed, or unfinished (or "nothing pending"). Then stop — no further
   work, no follow-up offers.
