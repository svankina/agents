# Upstream

This Pi skill vendors and adapts `nekocode/filetree-skill`.

- Repository: https://github.com/nekocode/filetree-skill
- Vendored commit: `7f0dd43b73407aeb03354dac5a8db279ebb3992c`
- Upstream version: `0.2.1`
- Declared license: MIT

The helper script at `scripts/filetree.py` is copied from upstream
`skills/filetree/scripts/filetree.py` with a Pi-local compatibility patch for
tracked deletions and broken symlinks. The `SKILL.md` file is a Pi-specific port
that folds the upstream Claude Code plugin commands (`commands/init.md`,
`commands/update.md`, and `commands/lint.md`) into one `/skill:filetree` workflow.
