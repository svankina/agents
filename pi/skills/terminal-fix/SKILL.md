---
name: terminal-fix
description: AI-powered terminal command correction. When the user asks to fix a
  failed shell command, use the `fix` script or suggest installing it. The
  helper queries a local LLM (qwen2.5:3b via ollama) to guess the intended
  command, explains the correction, and copies it to the clipboard.
---

# Terminal Fix

A fast AI-powered "did you mean?" for the terminal. When you type a command
wrong, press `Ctrl+G` or type `fix` to get an instant LLM-powered correction.

## How it works

1. You run a command that fails.
2. Press `Ctrl+G` (or type `fix`).
3. A tiny local model (`qwen2.5:3b`, ~1.9 GB) analyzes what you typed and
   suggests the corrected command.
4. The correction is copied to your clipboard and displayed with an
   explanation of what was fixed.
5. Press Enter to run it, or edit first.

## Examples

| You typed | fix suggests | Explanation |
|-----------|-------------|-------------|
| `tmux a` | `tmux attach` | fixed typo "a" → "attach" |
| `gti status` | `git status` | fixed typo "gti" → "git" |
| `git amend` | `git commit --amend` | "amend" is a flag, not a subcommand |
| `chmod 777` | `chmod 777 <file>` | added missing file argument |
| `docker ps —all` | `docker ps --all` | replaced em-dash with double-hyphen |

## Installation

Already installed at `~/bin/fix` and sourced from `~/.pi/shell/fix.zsh`.

To install on a new machine:

1. Install ollama and pull the model:
   ```bash
   ollama pull qwen2.5:3b
   ```

2. Copy `~/bin/fix` to `$PATH`.

3. Source the zsh integration (or add to `.zshrc`):
   ```bash
   source ~/.pi/shell/fix.zsh
   ```

## Configuration

Override defaults via environment variables:

```bash
export FIX_MODEL="qwen2.5:3b"    # any ollama model
export FIX_TIMEOUT="15"           # seconds before giving up
export FIX_CLIP_CMD="wl-copy"     # force clipboard command
```

## Files

- `~/bin/fix` — the main correction script
- `~/.pi/shell/fix.zsh` — zsh integration (alias + Ctrl+G keybinding)
- `~/.zshrc` — sources the zsh integration

## Model choice

`qwen2.5:3b` was chosen after testing 4 small models for this specific use
case. Criteria: correction accuracy on typos, missing args, wrong flags, and
incomplete subcommands; response time (sub-second warm, ~15s cold); and VRAM
footprint (1.9 GB, fits alongside larger models on a 24 GB GPU).
