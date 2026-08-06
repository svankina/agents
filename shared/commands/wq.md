---
description: Preserve project context, post a wrap-up status, and close the terminal
---

The session is ending, and the terminal it runs in should close with it.
Do this now, in order:

1. Preserve durable context for the next agent:
   - Find the current git repository root. If its root `AGENTS.md` lacks an
     exact `## Project map` section, create it now: run
     `project-map init <repo-root>`. If that created `AGENTS.md` and no
     `CLAUDE.md` exists, add the conventional symlink:
     `ln -s AGENTS.md CLAUDE.md`. Then review the section against what this
     session actually learned.
   - Add only durable facts that would otherwise make a fresh agent work
     incorrectly or slowly. Correct or prune stale facts. Keep architecture,
     paths, invariants, and dated decisions; exclude session chronology,
     temporary state, generic advice, secrets, personal data, and raw output.
     Do not read all of `NOTES.md`; search it only when needed to verify a fact.
   - After genuinely reviewing the section, set
     `<!-- project-map-reviewed: YYYY-MM-DD -->` to today's date. Do not change
     the file merely to rewrite an already-current marker.
   - Run `project-map lint <repo-root>` and fix the embedded section if it
     fails. Never suppress or skip a lint failure.
   - If `AGENTS.md` changed and has no unrelated pre-existing edits, stage
     only that file and commit it as `Update project map at wrap-up`. Never
     sweep other files into this commit. If unrelated edits make that unsafe,
     leave it uncommitted and name the conflict in the final reply.
2. Compose ONE line summarizing what this session actually shipped: past
   tense, concrete, what now works and where. Example:
   `wrapped up: magic-link login merged to master in ~/src/foo`.
   If the session shipped nothing durable (Q&A only), post nothing and say so.
3. Post it:

   ```bash
   agent-status --source <agent-or-project> "wrapped up: <summary>"
   ```

   Use your agent name or the project directory basename as `--source`.
   Verify the command exited 0; if it failed, report the error instead of
   claiming the post was made.
4. If a `quit_session` tool is available, call it now with
   `kill_terminal: true` — it ends the session gracefully after your final
   reply is delivered, then closes the parent terminal window/pane. If the
   tool does not exist in this harness, skip this step.
5. Reply with the exact line you posted, plus anything left uncommitted,
   unpushed, or unfinished (or "nothing pending"). Then stop — no further
   work, no follow-up offers.
