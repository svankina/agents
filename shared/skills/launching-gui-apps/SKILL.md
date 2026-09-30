---
name: launching-gui-apps
description: Use before launching a desktop GUI app or capturing an app window: agent-gui, agent-display, and agent-shot keep windows off the user's workspaces.
---

# Launching and capturing GUI apps

Visible GUI applications launched by agents must live on i3 workspace 9 so
they do not interrupt the user's active workspaces. Launch them through
`agent-gui`, which snapshots the i3 tree, starts the command detached, finds
the new window *by process identity* and moves that container to workspace 9
without stealing focus:

```bash
agent-gui -- freecad model.FCStd
agent-gui --match blender -- flatpak run org.blender.Blender  # hand-off launchers
agent-gui --headless -- freecad model.FCStd   # off-screen, screenshottable
```

Use `--headless` whenever the point of launching the app is for *you* to look at
it: it goes on the agent display instead of workspace 9, so `agent-shot` can
capture it. Workspace 9 is for windows the **user** may want to see; while that
workspace is hidden its windows are unmapped and cannot be screenshotted.

Do not hand-roll `i3-msg '[class="…"] move container to workspace number 9'` —
a wrong class guess silently leaves the window in the user's face. Applies to
FreeCAD, Blender, desktop browsers and any other agent-launched GUI; headless
tools are unaffected.

## Capturing windows

When you need pixels to verify something, capture **the window you are
verifying**, by identity, with `agent-shot`. Never `screenshot full`, never a
bare `maim`/`scrot`/`import`, and never `i3-msg workspace …` / `focus` to bring
something into view: the user's workspaces are theirs, and a desktop-wide grab
both misleads you and drags their private screen into a transcript.

```bash
agent-shot --list                     # what is capturable, on which display
agent-shot --class FreeCAD            # capture that window -> prints a PNG path
agent-shot --con-id "$(agent-gui --headless -- freecad model.FCStd)"
agent-shot --pid 12345 --wait 20      # wait for the window to appear first
```

Selectors: `--class/--instance/--title/--match` (regex), `--pid`, `--con-id`
(what `agent-gui` prints), `--window` (X id), `--focused`. Several matches is an
error, not a guess — narrow the selector or pass `--all`. Exit 5 means the
window is on a workspace the user is not looking at, so X has no pixels for it;
`agent-shot` refuses rather than silently handing you the wrong screen (which is
exactly what `maim -i <window>` does there).

**Intend to screenshot a GUI app? Launch it headless.** `agent-gui --headless`
puts it on the off-screen agent display (`agent-display`, `$AGENT_DISPLAY`,
default `:99` — Xvfb + a private i3), where windows are always mapped, always
capturable, and invisible to the user. On-screen workspace 9 is for apps the
user is meant to see; its windows are unmapped while that workspace is hidden.

```bash
agent-display start|status|stop       # the off-screen display (auto-started)
agent-display view                    # x11vnc, if you want to watch it
agent-display exec -- <cmd>           # run something against it directly
```

Captures land in `~/.cache/agent-shots/` (`$AGENT_SHOT_DIR`); pass `--out PATH`
for a specific file and `--json` for a machine-readable record. Web pages do not
need any of this — drive a browser tool and screenshot the page there.
