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
          [--preset studio|inspection|assembly] [--drawing SHEET.svg]
```

- Prints one clickable `http://…/<slug>/` URL on stdout — give it to the user
  verbatim, at the **bottom** of your response. It is already health-checked
  (the script fails instead of printing a dead URL).
- Accepts `.stl` `.glb` `.gltf` `.obj` as-is; `.scad` is auto-rendered via
  openscad. Several files → a model dropdown in the viewer.
- `--name` sets the URL slug stem (default `<first-model-stem>-cad`);
  `--title` sets the heading shown in the viewer.
- `--preset` selects the initial presentation. Studio is the default; the
  viewer can switch modes without reloading geometry.
- `--drawing` attaches an existing SVG sheet and adds an open-drawing link.
  The sheet is copied into the published directory, not linked to a temp file.

### Examples

```bash
serve-cad bracket.stl
# -> http://<tailscale-ip>:8787/bracket-cad-3f9a2b/

serve-cad housing.stl lid.stl --name enclosure --title "Enclosure v3"
serve-cad assembly.glb --preset assembly --title "Assembly"
serve-cad bracket.stl --drawing drawing.svg --title "Bracket"
serve-cad part.scad             # rendered to STL for you
```

## Getting a viewable format

Units are assumed **mm**. STL/OBJ are treated as Z-up (CAD convention), glTF
as Y-up — both land the right way up.

- **build123d** (use the project venv, `.venv/bin/python`):
  `export_stl(part, "part.stl")` for a single part;
  `export_gltf(part, "part.glb", binary=True, unit=Unit.M)` when colors/assembly
  matter. Confirm a known dimension in the viewer before delivery; do not stack
  this with a legacy ×1000 geometry transform.
- **OpenSCAD**: pass the `.scad` straight to serve-cad, or pre-render with
  your own flags: `openscad -o part.stl part.scad`.
- **STEP**: mesh it first —
  `export_stl(import_step("part.step"), "part.stl")` via build123d.
- **Mesh budget**: default tolerances are fine; if an export exceeds ~40 MB
  (serve-cad warns), re-export with a coarser `tolerance`/`angular_tolerance`
  instead of shipping a sluggish viewer.

## The viewer

Controls: **drag** orbits/tilts, **right-drag / shift-drag** pans, **scroll**
zooms, **double-click** refits. All modes use an orthographic camera.
Iso/Top/Front/Right, Fit, and Grid/Wire/Edges controls remain available.

- **Studio:** warm background, slate satin finish, procedural environment
  lighting, soft ground shadow; grid and edges hidden. These are presentation
  materials, not physical material assignments.
- **Inspection:** original model materials, dark background, grid and edges.
  Use this for checking geometry rather than product illustrations.
- **Assembly:** consistent component colors, numbered callouts and legend,
  visibility controls, and an Explode slider. Separation is an explanatory
  layout, not a motion simulation. Returning to zero restores original poses.
  Single-component models disable the slider.
- **Save PNG:** exports an opaque canvas image without panels or callouts.
  For annotated assembly illustrations, capture the viewer with its callouts.
- **Open vector drawing:** shown when the publisher attached an SVG sheet.

Dimensions are approximate **assembled mesh** bounds in CAD X/Y/Z millimeters,
not the exploded layout envelope. The grid uses a CAD-axis triad (X red, Y
green, Z blue). Edge overlays are skipped above 300k triangles.

For verification, `window.cadviewer` exposes `fit()`, `setView(azDeg, elDeg)`,
`bounds`, `setPreset(name)`, `preset`, `setExplode(factor)`, and `explode`.
Explosion factors range from 0 to 1. API callers can call `fit()` after changing
explosion; the UI slider fits automatically. Prefer these over simulated drags.

## Generate a vector reference sheet

Use the project's build123d-equipped Python. The generator and reusable A3 SVG
template live beside this viewer; no new CAD environment or CDN is required.

```bash
.venv/bin/python "$HOME/src/agents/shared/skills/serving-cad-files/scripts/cad-drawing" \
  part.step --output drawing.svg --title "Part name"
# Optional true XY section at a world CAD Z coordinate:
.venv/bin/python "$HOME/src/agents/shared/skills/serving-cad-files/scripts/cad-drawing" \
  part.step --output drawing.svg --title "Part name" --section-z 3
serve-cad part.stl --drawing drawing.svg --title "Part name"
```

The sheet uses BREP hidden-line projection, not mesh edges: top above front,
right beside front, with optional hatched section material. Center marks come
only from analytic full circles. Names are XML-escaped and the SVG works both
standalone and embedded in HTML. The layout template is
`assets/templates/drawing-sheet.svg`.

Automatic dimensions are overall/reference values in mm. The sheet is marked
**NOT TO SCALE**. It does not infer feature dimensions, fits, tolerances, GD&T,
or manufacturing completeness. Add those deliberately before manufacture.
Curved SVG output can approximate splines. Section faces in an assembly are
not boolean-unioned; review overlaps. Invalid or empty sections fail without
writing a new sheet. STEP does not recreate native parametric history.

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
