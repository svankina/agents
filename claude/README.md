# Claude Code resources

Custom resources for [Claude Code](https://claude.com/claude-code): slash commands and other extensions.

## Layout

- **[`commands/`](commands/)** — Custom slash commands (`.md` files with YAML frontmatter). Symlinked to `~/.claude/commands/` so Claude Code auto-discovers them.

## Setup

Commands in this directory are symlinked from `~/.claude/commands/`:

```bash
ln -s ~/src/agents/claude/commands/arch_scan.md ~/.claude/commands/arch_scan.md
ln -s ~/src/agents/claude/commands/warpfork.md ~/.claude/commands/warpfork.md
```

Claude Code auto-discovers `.md` files in `~/.claude/commands/` and exposes them as `/` commands.
