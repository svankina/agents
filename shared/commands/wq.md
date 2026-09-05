---
description: Preserve project context, post a wrap-up status, and close the terminal
---

The session is ending, and the terminal it runs in should close with it.
Do this now, in order:

1. Preserve durable context for the next agent — only if there is any:
   - Find the current git repository root. Run `project-map owned <repo-root>`;
     if it exits non-zero this is an upstream clone: skip this whole step,
     never add or edit `AGENTS.md` there.
   - If the root `AGENTS.md` lacks an exact `## Project map` section, run
     `project-map init <repo-root>`. If that created `AGENTS.md` and no
     `CLAUDE.md` exists, add the conventional symlink: `ln -s AGENTS.md CLAUDE.md`.
   - Ask one question: did this session learn a fact that would make a fresh
     agent work incorrectly or slowly, or prove an existing line wrong? If
     no, do not open `AGENTS.md` at all. If yes, add, correct, or delete
     exactly those lines — never reword, reflow, or reorganise the lines
     around them, and never add a line to say what this session did.
     `AGENTS.md` holds standing instructions and the project map only:
     no session chronology, dated changelog entries, commit hashes, scratch
     paths, generic advice, secrets, personal data, raw output, hardware
     dumps, or restated machine-wide rules (sudo/psudo, serve-report,
     worktrees, fair-run, …). Do not create or append to `NOTES.md`.
     Leave existing notes as optional archives. Preserve only verified,
     still-useful facts in code or focused docs when relevant to the task;
     do not bulk-migrate archives or duplicate global rules.
   - If `AGENTS.md` changed, run `project-map lint <repo-root>` and fix
     what it reports. Never suppress or skip a lint failure. Then, if the
     file has no unrelated pre-existing edits, stage only that file and
     commit it as `Update project map at wrap-up`. Never sweep other files
     into this commit. If unrelated edits make that unsafe, leave it
     uncommitted and name the conflict in the final reply.
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
4. Mark the pane for death so the herd panel can show it going, best-effort:

   ```bash
   herd doom 2>/dev/null || true
   ```

   It marks the pane this session runs in (`$HERD_PANE`) as about to exit,
   which is the only warning the panel gets: a pane otherwise vanishes with no
   notice and reads as a crash. Never let this step fail the wrap-up — there is
   no broker under `HERD_HOST=tmux`, and none at all outside herd. The mark
   lapses by itself after a few seconds, so nothing is left behind if the
   session does not actually end.
5. If a `quit_session` tool is available, call it now with
   `kill_terminal: true` — it ends the session gracefully after your final
   reply is delivered, then closes the parent terminal window/pane. If the
   tool does not exist in this harness, skip this step.
6. Reply with the exact line you posted, plus anything left uncommitted,
   unpushed, or unfinished (or "nothing pending"). Then stop — no further
   work, no follow-up offers.
