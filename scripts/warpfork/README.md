# warpfork

Fork the current Claude Code session into Warp (resumed with `--fork-session`).

## Files

- **`warpfork`** — Bash script that handles forking. Uses native `warp://action/split_pane` deep link. Respects env vars for customization (`WARPFORK_DIRECTION`, `WARPFORK_SCHEME`, etc.).

## Setup

The warpfork script is installed at `~/.local/bin/warpfork`. To point to this repo:

```bash
rm ~/.local/bin/warpfork
ln -s ~/src/agents/scripts/warpfork/warpfork ~/.local/bin/warpfork
```

Or update `~/.claude/settings.json` to reference `~/src/agents/scripts/warpfork/warpfork` directly.

## Environment variables

See the script header for the full list (`WARPFORK_MODE`, `WARPFORK_PANE`, `WARPFORK_SCHEME`, `WARPFORK_DIRECTION`, etc.).
