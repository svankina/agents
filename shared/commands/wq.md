---
description: Merge completed work, delete the feature branch, push, and close the terminal
---

Finish this session's completed work before ending the session and closing its
terminal. Invoking `/wq` authorizes committing and merging that work, deleting
its merged feature branch and worktree, and pushing it. Do not treat this as
permission to publish unrelated work or discard unfinished changes.

Do this now, in order. If a required Git step fails or cannot be done safely,
report the exact blocker and keep the session open. Do not mark the pane for
death or call `quit_session` while delivery is blocked.

1. Identify this session's repositories, completed changes, feature branches,
   and worktrees. Verify completed changes if not already verified, then commit
   only those changes. Preserve unrelated edits, staged work, and unfinished
   work; never use `git add -A`, automatic stashing, or destructive resets.
   Do not add unrelated cleanup or project-map updates.
   If there is no Git work to deliver, skip to step 5.
2. Resolve each feature branch's intended integration branch and push remote
   from repository configuration and session context. Do not assume `main`,
   `master`, or `origin`; a feature's own upstream is not its merge target.
   Fetch the remote and inspect the commits that would be merged and pushed.
   If the target is ambiguous, unrelated commits would be published, or the
   branch contains unfinished work, stop and report the blocker.
3. In the integration branch's checkout, fast-forward to its remote branch
   when needed, then merge the completed feature branch with
   `git merge --no-edit <feature-branch>`. Preserve other worktrees and all
   unrelated edits. Do not force a checkout, overwrite changes, or silently
   resolve conflicts. If work was already committed on the integration branch,
   skip the feature merge and deletion; never delete the integration branch.
4. Confirm the feature tip is an ancestor of the integration branch. Move your
   working directory out of the feature worktree before removing it. For a
   managed worktree, use `agent-worktree rm <feature-branch> --delete-branch`
   from the main checkout; otherwise remove only this session's clean feature
   worktree with `git worktree remove`, then use `git branch -d`. Never use
   `--force` or `-D`; retain dirty or unmerged work and report the blocker.
   Push the integration branch explicitly:
   `git push <remote> <integration-branch>:<integration-branch>`.
   Never force-push. If this session's feature branch was published, confirm
   its remote tip is also merged, then delete it with
   `git push <remote> --delete <feature-branch>`.
   Verify the remote integration ref matches the local commit and the feature
   branch/worktree are gone. A rejected push or failed deletion is a blocker,
   not successful delivery. If retrying after local branch deletion, push the
   retained integration commit; do not recreate or re-merge the feature.
5. Mark the pane for death so the herd panel can show it going, best-effort:

   ```bash
   herd doom 2>/dev/null || true
   ```

   It marks the pane this session runs in (`$HERD_PANE`) as about to exit,
   which is the only warning the panel gets: a pane otherwise vanishes with no
   notice and reads as a crash. Never let this step fail the wrap-up — there is
   no broker under `HERD_HOST=tmux`, and none at all outside herd. The mark
   lapses by itself after a few seconds, so nothing is left behind if the
   session does not actually end.
6. If a `quit_session` tool is available, call it now with
   `kill_terminal: true` — it ends the session gracefully after your final
   reply is delivered, then closes the parent terminal window/pane. If the
   tool does not exist in this harness, skip this step.
7. Reply with what was merged, deleted, and pushed, plus anything intentionally
   left unfinished (or "nothing pending"). Then stop — no further work, no
   follow-up offers.
