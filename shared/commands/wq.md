---
description: Merge completed work, delete the feature branch, push, and close the terminal
---

Deliver this session's completed work, then close. `/wq` authorizes committing,
merging, pushing, and deleting this session's merged feature branch/worktree.
It does not authorize unrelated work or discarding unfinished changes.

Use session context and existing verification. Check only what is missing for
safe delivery; do not restart discovery, repeat passed checks, or add cleanup,
documentation, project-map updates, or status posts.

1. Commit this session's completed changes if needed. Preserve unrelated and
   unfinished work, including staged changes. No blanket staging or stashing.
   If there is nothing to deliver, go straight to closing.
2. For feature work, merge into the intended integration branch using its
   checkout. Use the known target and remote; resolve them only if unknown.
   Do not assume the feature's upstream is its merge target. If already on
   the integration branch, skip the merge.
3. Push the integration branch explicitly. Do not publish unrelated commits.
   After a successful push, remove only this session's clean, merged feature
   worktree and branch; use `agent-worktree rm <branch> --delete-branch` from
   the main checkout for managed worktrees. Delete a published feature branch
   only if its remote tip is merged. Never force a push or deletion.

If delivery is blocked or a required Git operation fails, report the blocker
and keep the session open. Preserve the work; do not force a checkout or reset.

Otherwise, run `herd doom` best-effort; its absence or failure is harmless.
Call `quit_session` with `kill_terminal: true` if available. Give one short
reply stating what was delivered and anything left unfinished, then stop.
