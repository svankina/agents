---
name: worktree-workflow
description: Set up and work inside an isolated git worktree on its own branch for every piece of feature development, so concurrent agents share one workspace per feature without clobbering the main checkout or each other. Use this whenever starting feature work, creating a branch, implementing or fixing something in a repo, or dispatching multiple/parallel agents against the same repository — even if the user only says "start a branch", "set up a worktree", or "work on X". Default to a worktree under .worktrees/<branch> rather than editing the main checkout directly.
---

# Worktree Workflow

Feature work edits files. If every agent edits the main checkout, concurrent
work collides and a half-finished feature pollutes the base branch. So give each
feature its **own branch in its own worktree directory**, and treat that
directory as the shared workspace for every agent working on that feature.

The payoff: different features stay isolated from each other and from the base
branch; agents collaborating on one feature share a single tree and only have to
coordinate at the file level, not fight over the whole repo.

**Announce at start:** "Setting up an isolated worktree for `<feature>`."

## 1. Are you already isolated?

Don't nest a worktree inside a worktree. From the directory you intend to work in
(pass it explicitly — see §3), check:

```bash
git rev-parse --git-dir          # A
git rev-parse --git-common-dir   # B
git rev-parse --show-superproject-working-tree   # C
git branch --show-current
```

- **A ≠ B and C is empty** → you're already in a linked worktree. Use it as-is.
- **A ≠ B but C prints a path** → you're in a *submodule*, not a worktree. Treat
  it as a normal checkout and create a worktree below.
- **A == B** → you're in the main checkout. Create a worktree below.

## 2. Create the worktree

Place it at `.worktrees/<branch>` under the repo root (reuse an existing
`.worktrees/` or `worktrees/` dir if the project already has one). Keep it
ignored so its contents never get committed back into the repo:

```bash
git check-ignore -q .worktrees || printf '.worktrees/\n' >> .gitignore
git worktree add .worktrees/<branch> -b <branch>
```

- **Existing branch?** Drop `-b`: `git worktree add .worktrees/<branch> <branch>`.
- **Empty / unborn repo (no commits yet)?** git prints
  `inferring '--orphan'` and the new branch starts with *no history*. That's
  expected for a fresh repo, not an error — but if you meant to branch off real
  history, make a commit on the base branch first, then create the worktree.

Report the **absolute path**. That path is the workspace from here on.

## 3. The shell forgets your directory — pass it every time

This harness resets the shell's working directory to the repo root on **every**
command. A bare `cd <worktree>` in one call does **not** carry over to the next —
the following command silently runs back in the main checkout on the base branch.
This is the number-one way worktree work lands on the wrong branch.

So on every command, either:
- pass the worktree as the command's `cwd`, or
- prefix it: `cd <abs-worktree-path> && <command>`

When in doubt, verify before trusting your location:

```bash
cd <abs-worktree-path> && pwd && git branch --show-current
```

## 4. Many agents, one feature, one worktree

The worktree directory *is* the shared workspace. When you dispatch parallel or
sibling agents to work on the **same** feature, hand them all the **same**
worktree path and have them work there. Do **not** let each agent create its own
worktree for the same feature — that fragments the branch across trees. A
*different* feature gets a different branch and a different worktree.

Put the worktree path in the shared `context`/assignment so every agent knows
where to work.

Be honest about the limit: worktrees isolate features from each other and from
the base branch. They do **not** stop two agents from editing the same file in
the same tree. For that, coordinate over `irc` and divide up files before editing.

## 5. Setup & baseline (only if the project has them)

From the worktree path, install dependencies and run the project's existing test
command if one exists — `package.json` → `npm install`/`npm test`,
`Cargo.toml` → `cargo build`/`cargo test`, `pyproject.toml`, `go.mod`, etc. If
there's no toolchain or test harness, skip silently. If pre-existing tests fail,
say so before building on top — so new bugs don't get blamed on your work.

## Finishing

From the **repo root** (not inside the worktree): merge or open a PR for the
branch, then remove the worktree:

```bash
git worktree remove .worktrees/<branch>
```

Only auto-remove worktrees under `.worktrees/`/`worktrees/` (the ones this
workflow creates). Leave worktrees anywhere else alone — someone put them there
deliberately.
