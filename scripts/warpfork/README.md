# warpfork

Fork the current Claude Code session into Warp (resumed with `--fork-session`).

## Files

- **`warpfork`** — Bash script that handles forking. Supports three modes (split pane, simulated split via xdotool, or new window). Respects env vars for customization (`WARPFORK_MODE`, `WARPFORK_PANE`, etc.).
- **`warpfork.md`** — Claude Code slash command interface (`/warpfork`).

## Setup

The warpfork script is installed at `~/.local/bin/warpfork`. To point to this repo:

```bash
rm ~/.local/bin/warpfork
ln -s ~/src/agents/scripts/warpfork/warpfork ~/.local/bin/warpfork
```

Or update `~/.claude/settings.json` to reference `~/src/agents/scripts/warpfork/warpfork` directly.

## Environment variables

See the script header for the full list (`WARPFORK_MODE`, `WARPFORK_PANE`, `WARPFORK_SCHEME`, `WARPFORK_DIRECTION`, etc.).
