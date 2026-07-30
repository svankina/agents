---
name: serving-cad-files
description: Show the user a CAD model (STL, GLB/glTF, OBJ, OpenSCAD, build123d or STEP output) in an interactive pan/orbit/zoom 3D viewer and hand them a clickable link. Use whenever you would otherwise send a static render/screenshot of a part or a raw model file path. Publishes through the shared serve-report server — never start your own.
compatibility: Requires `serve-cad` on PATH (canonical copy bundled at scripts/serve-cad; install as a SYMLINK so it finds assets/viewer). Builds on serving-reports (`serve-report` on PATH). Needs python3; openscad optional for .scad auto-render.
---

# Serving CAD files

A modeled part is delivered as an **interactive 3D viewer link**, not a static
screenshot and not a bare `.stl` path. `serve-cad` stages a self-contained
three.js viewer (orbit/tilt, pan, zoom — no CDN, works offline) next to your
model file(s) and publishes the directory through the shared `serve-report`
server. Screenshots are fine as in-chat supplements; the deliverable is the
link.

## Publish a model (the one command you need)

```bash
serve-cad <model>... [--name NAME] [--title TITLE]
```

- Prints one clickable `http://…/<slug>/` URL on stdout — give it to the user
  verbatim, at the **bottom** of your response. It is already health-checked
  (the script fails instead of printing a dead URL).
- Accepts `.stl` `.glb` `.gltf` `.obj` as-is; `.scad` is auto-rendered via
  openscad. Several files → a model dropdown in the viewer.
- `--name` sets the URL slug stem (default `<first-model-stem>-cad`);
  `--title` sets the heading shown in the viewer.

### Examples

```bash
serve-cad bracket.stl
# -> http://<tailscale-ip>:8787/bracket-cad-3f9a2b/

serve-cad housing.stl lid.stl --name enclosure --title "Enclosure v3"
serve-cad assembly.glb          # GLB keeps assembly structure + colors
serve-cad part.scad             # rendered to STL for you
```

## Getting a viewable format

Units are assumed **mm**. STL/OBJ are treated as Z-up (CAD convention), glTF
as Y-up — both land the right way up.

- **build123d** (use the project venv, `.venv/bin/python`):
  `export_stl(part, "part.stl")` for a single part;
  `export_gltf(part, "part.glb", binary=True)` when colors/assembly matter.
- **OpenSCAD**: pass the `.scad` straight to serve-cad, or pre-render with
  your own flags: `openscad -o part.stl part.scad`.
- **STEP**: mesh it first —
  `export_stl(import_step("part.step"), "part.stl")` via build123d.
- **Mesh budget**: default tolerances are fine; if an export exceeds ~40 MB
  (serve-cad warns), re-export with a coarser `tolerance`/`angular_tolerance`
  instead of shipping a sluggish viewer.

## The viewer

Controls: **drag** orbits/tilts, **right-drag / shift-drag** pans, **scroll**
zooms, **double-click** refits. Buttons: Iso/Top/Front/Right standard views,
Fit, and Grid / Wire / Edges toggles.

It shows the part on an adaptive mm grid with a CAD axis triad (X red, Y
green, Z blue), a dimensions readout (X × Y × Z mm, CAD Z-up coords), and
triangle count. Edge overlay is skipped above 300k triangles for performance.

For your own verification or screenshots, the page exposes
`window.cadviewer` (`fit()`, `setView(azDeg, elDeg)`, `bounds`) — drive it
from the browser tool instead of synthesizing drags.

## Rules

- **Never** hand the user a raw model path or only a static render — publish
  the viewer link. Never start your own HTTP server (`skill://serving-reports`).
- Verify before sharing: serve-cad already curls the page, but if you changed
  the viewer itself, open the URL in the browser tool and screenshot it.
- Everything published is reachable on the tailnet/LAN — don't serve secret
  geometry you wouldn't put on the shared server.
- Clean up with `serve-report rm <slug>` (slug = last URL segment). Staged
  copies live under `~/.local/share/cad-viewer/views/` and can be deleted any
  time after the slug is removed.
- One part per file beats one giant merged STL when the user will want to
  inspect pieces — pass all of them; the viewer gets a dropdown.

## Install / where things live

- **Canonical script:** `scripts/serve-cad` in this skill directory. It must
  be reachable as `serve-cad` on PATH, installed as a **symlink** (it locates
  the viewer assets relative to its resolved path):

  ```bash
  # from this skill's directory:
  ln -s "$PWD/scripts/serve-cad" ~/.local/bin/serve-cad
  # or point SERVE_CAD_ASSETS at .../assets/viewer if you must copy instead
  ```

- **Viewer assets:** `assets/viewer/` (`index.html` + `app.js`, a committed
  bundle of three.js r166, MIT). Rebuild after editing `assets/src/main.js`
  with `assets/src/build.sh` (needs bun).
- **Staged views:** `~/.local/share/cad-viewer/views/<slug>/` (override with
  `SERVE_CAD_HOME`); each contains the viewer, the copied models, and
  `manifest.json`.
- **Serving:** delegated to `serve-report` — same shared server, same
  management commands (`list`, `rm`, `gc`).
