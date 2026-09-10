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
2. For feature work, identify the intended integration branch and remote from
   session context; resolve either only if unknown. Reuse the meaningful
   verification argv already established for this work — never `true` or a
   no-op — and integrate with the explicit values:
   `agent-worktree integrate <feature> --target <target> --remote <remote> -- <verification argv...>`.
   This fetches and fast-forwards the local target, rebases the unpublished
   feature onto it, exercises the rebased feature worktree with that verification,
   and fast-forward merges the target. It never pushes. Do not assume the
   feature's upstream is its target. If already on the integration branch, skip
   integration.
3. Push only that authorized integration branch explicitly after successful
   integration; do not publish unrelated commits. Then remove only this
   session's clean, merged feature worktree and branch from the main checkout:
   `agent-worktree rm <feature> --delete-branch --target <target>`. A retry
   after an already-removed worktree is safe when the same explicit target
   preflight proves ancestry. Delete a published feature branch only if its
   remote tip is merged. Never force a push or deletion.

If delivery is blocked or a required Git operation fails, report the blocker
and keep the session open. Preserve the work; do not force a checkout or reset.

Otherwise, run `herd doom` best-effort; its absence or failure is harmless.
Call `quit_session` with `kill_terminal: true` if available. Give one short
reply stating what was delivered and anything left unfinished, then stop.
