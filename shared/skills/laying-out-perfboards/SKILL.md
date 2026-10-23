---
name: laying-out-perfboards
description: Use when you place parts, connectors, and wiring on a perfboard (pad-per-hole prototype board), or produce its soldering guide, wire cut list, or a board model for an enclosure. Uses PerfStudio and perfboard-connectors. Not for PCBs, stripboard track planning, or off-board wiring pictures (drawing-diagrams).
compatibility: Requires the PerfStudio uv tool (Python 3.12) and perfboard-connectors from bin/ of ~/src/agents.
---

# Laying out perfboards

Do not hand-write a layout engine for a project. PerfStudio places, routes,
checks, and documents the board. `perfboard-connectors` adds the plug checks
PerfStudio lacks. Earlier sessions spent hours on 300–800-line `layout.py`
scripts. The same board takes about a minute this way.

## Setup

Check `~/.local/share/uv/tools/perfboard-studio/bin/python`. If it is missing,
install the pinned version:

```sh
uv tool install -p 3.12 "perfboard-studio[mcp] @ git+https://github.com/medinstech/perfstudio@0298919"
```

Use that Python for board scripts. The tool also installs the
`perfboard-studio-mcp` server. It is not configured in OMP. Drive the engine
from a script, because a script is the reviewable source of the board.
API reference: `perfboard_studio/mcp/server.py` in the tool's site-packages.
Each tool docstring there is also the `BoardSession` method contract.

## Procedure

1. **Identify the exact parts.** Read the silkscreen in the user's photo or
   the datasheet. Take pin names from the official pinout. Note module
   heights and whether modules sit in female headers (seated 8.5 mm up) or
   are soldered directly (2.5 mm).
2. **Copy `example_board.py`** from this skill into the project as
   `board.py`. Replace `BOARD`, `PARTS`, `NAMES`, `NETS` and `LOCKED`.
   - Footprints: use catalog parts first (`session.list_catalog(search=...)`).
     Then use library ids (`list_footprints`). For anything else, write a
     generated id from its datasheet dimensions. A wrong id prints the
     grammar.
   - Name nets by pin names (`U1.GP28`), not numbers.
   - Lock every part whose position the user or the enclosure fixes:
     modules, connectors, USB ends, and mounting holes. The optimiser places
     the rest.
   - Set `EDGE_MARGIN_MM` to the real board: 2.54 for a breakable board
     snapped through the next row of holes.
   - Set `ROUTING_STYLE` from the user's preference. With no stated
     preference, use `best`, and report its comparison of styles. The user's
     approved mantle board used insulated wires on the solder side
     (`wire`).
3. **Run it:** `fair-run -- ~/.local/share/uv/tools/perfboard-studio/bin/python board.py`.
   The script tries `--seeds` optimiser seeds (default 4) and keeps the
   best. Each seed takes about 10 s.
4. **Fix every finding.** The board is not done until all of these hold:
   - LVS matches, with no opens and no shorts.
   - DRC has no errors. `optimize_placement` can commit an illegal layout,
     so never skip the DRC read.
   - `perfboard-connectors` passes. When a tall part sits in a plug's
     finger room, lock it elsewhere, or lay a standing resistor flat.
   - Each DRC warning is fixed or explained to the user. For a snapped
     board, the "hangs past the edge" warning on edge connectors is
     expected.
5. **Look at the result.** Open `perfstudio/top.png` and `bottom.png` with
   `read`. Check that the connector row, module orientation, and USB end
   match what the user asked for.
6. **Deliver.**
   - Serve `perfstudio/guide/guide.html` (`serving-reports`). It holds the
     build order, the wire cut list, and continuity checks.
   - Give enclosure CAD `perfstudio/board.step`. Its origin is the board
     corner, z is up, and the solder side is at z = 0.
   - Commit `board.py` and the outputs. Do not keep a second hand-written
     wiring list.

## Pitfalls

- **Module pin numbers are PerfStudio's own.** It numbers a 2-row module
  across the rows: pin 1 left, pin 2 right. The Pico catalog part therefore
  has pin 2 = VBUS, which is physical pin 40. Never quote these numbers to
  the user. Give the pin name and the datasheet pin number. The TMC2209 in
  the example names its pins in the same interleaved order.
- **No JST-XH in the library.** Use `xh_side(n)` from the example. It is the
  S#B-XH-A-1 side-entry housing: mating face 7.6 mm from the pins, 6.1 mm
  tall. For S#B-XH-A, the face is 9.2 mm from the pins (`...x11.5x6.1-o0x3.45`).
  The top-entry B#B-XH-A is `box-<n>x1-p1-r1-<(n-1)*2.5+4.9>x5.75x7-o0x0.53`,
  checked with `--face J1=vertical`.
- **Rotation is clockwise**, seen from the component side. A side-entry
  header at rotation 0 faces the bottom edge, and at 90 the left edge.
- **Board edge.** PerfStudio puts the edge 1.27 mm past the outer holes. Its
  overhang warnings and its STEP board outline use that edge.
- **Courtyards are strict.** Two socketed modules 2.4 mm apart count as
  overlapping. Leave a free hole column between modules.
- **Rendering needs Qt.** The example sets `QT_QPA_PLATFORM=offscreen`. The
  3D render may fail without GL. The 2D views and STEP export do not need it.

## perfboard-connectors

`perfboard-connectors BOARD.perf [--edge-margin MM] [--face REF=FACE]` checks
each `J*` part on the component side. The mating face must sit at a board
edge. No body may stand in front of it. No part taller than 8 mm may be
within 15 mm of it. Connector bodies must be at least 2.5 mm apart. The
user asked for this finger room: he has big hands and objected to cramped
plugs. `--help` lists the thresholds and exit codes.
