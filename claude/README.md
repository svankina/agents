# Claude Code resources

Custom resources for [Claude Code](https://claude.com/claude-code): slash commands and other extensions.

## Layout

- **[`commands/`](commands/)** — Custom slash commands (`.md` files with YAML frontmatter). Drop a file here and reference it in `~/.claude/settings.json` to expose it as a `/` command.

## Configuration

In `~/.claude/settings.json`, reference this directory:

```json
{
  "command-paths": [
    "~/src/agents/claude/commands"
  ]
}
```

Add to an existing `command-paths` array or create one if absent.
