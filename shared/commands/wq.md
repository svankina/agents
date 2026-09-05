---
description: Report pending work and close the terminal gracefully
---

The session is ending, and the terminal it runs in should close with it.
Do this now, in order:

1. Report anything left uncommitted, unpushed, or unfinished from this
   session. Use already-known state where sufficient; check repository state
   only if needed to make the report accurate. Do not change files, create
   commits, update project maps, or post another completion status as part
   of closing the session.
2. Mark the pane for death so the herd panel can show it going, best-effort:

   ```bash
   herd doom 2>/dev/null || true
   ```

   It marks the pane this session runs in (`$HERD_PANE`) as about to exit,
   which is the only warning the panel gets: a pane otherwise vanishes with no
   notice and reads as a crash. Never let this step fail the wrap-up — there is
   no broker under `HERD_HOST=tmux`, and none at all outside herd. The mark
   lapses by itself after a few seconds, so nothing is left behind if the
   session does not actually end.
3. If a `quit_session` tool is available, call it now with
   `kill_terminal: true` — it ends the session gracefully after your final
   reply is delivered, then closes the parent terminal window/pane. If the
   tool does not exist in this harness, skip this step.
4. Reply with the pending work, or "nothing pending". Then stop — no further
   work, no follow-up offers.
