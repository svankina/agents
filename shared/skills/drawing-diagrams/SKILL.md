---
name: drawing-diagrams
description: Draw architecture, flow, sequence, state, before/after, or timeline diagrams for served HTML reports with D2 and the house style, and realistic to-scale hardware wiring pictures (which hole or pin each wire uses) with rectify-board and draw-wiring. Read before drawing any report diagram or wiring guide; charts of data are out of scope.
compatibility: Requires draw-diagram, draw-wiring and rectify-board (bin/ of ~/src/agents), d2 on PATH or ~/go/bin/d2, PyYAML, OpenCV with NumPy for rectify-board, and google-chrome or chromium.
---

# Drawing diagrams

Pick the tool by the question the reader has:

- **How does the software fit together?** Write D2 source, render it with
  `draw-diagram`, look at the preview, fix it, and inline the SVG in the report.
- **Which hole or pin does this wire go in?** Use the hardware workflow below.
  D2 boxes, schematics and pinout posters do not answer that question; the user
  rejected all three for the heater wiring.

Never publish a diagram you have not looked at. Each helper's `--help` covers
its flags, outputs and exit codes.

## Procedure

1. Decide the one idea the diagram shows. Keep 5–12 nodes. Label every node
   with its real name: file, service, function, command.
2. Write `<name>.d2` beside the report. Do not restate the house style.
3. Run `draw-diagram <name>.d2`. It writes `<name>.svg` and `<name>.png`.
4. Open `<name>.png` with `read` and check the list below. Edit and rerender
   until every item passes.
5. Paste the SVG file contents into the report HTML:

   ```html
   <figure class="diagram"><!-- contents of name.svg --></figure>
   <style>figure.diagram svg { max-width: 100%; height: auto; }</style>
   ```

   The SVG is self-contained: fonts, icons, and styles are embedded, and IDs
   are salted with the file stem. Give each diagram a distinct file name.

## Review checklist

- The main flow reads in one direction, left to right or top to bottom.
- No label overlaps a line, node, or another label. No edge passes through a
  node it does not connect.
- At most one crossing edge. Remove it by reordering declarations, grouping in
  a container, or switching `direction`.
- The width is at most 1200 px. The helper warns when wider. Use
  `direction: down` or split the diagram.
- Color appears only through the house classes, and each class has one meaning.
  With more than two classes, add a legend.
- Every icon shows the correct product. A wrong logo is worse than no logo.

## House style

`draw-diagram` prepends `assets/house.d2` (slate palette, rounded corners,
2 px edges) and lays out with ELK orthogonal routing. Apply meaning with
classes, not inline colors:

| Class | Use |
|---|---|
| `changed` | amber: the part this report changes |
| `added` / `removed` | green solid / red dashed: before/after deltas |
| `focus` | indigo: the one node the reader should find first |
| `external` | grey dashed: outside our control |
| `hot` | red edge: failing or slow path |
| `async` | dashed edge: queue, callback, background work |
| `store` / `queue` / `person` | cylinder / queue / person shapes |

## Patterns

Architecture with a container and a legend:

```d2
direction: down
vars: {
  d2-legend: {
    c: changed {class: changed}
    a.style.opacity: 0
    b.style.opacity: 0
    a -> b: async {class: async}
  }
}
user: Browser {class: person}
app: App cluster {
  api: api-server (Go)
  worker: job-worker {class: changed}
  api -> worker: enqueue {class: async}
}
db: Postgres 16 {class: store}
user -> app.api: HTTPS
app.worker -> db: batch upsert
```

Sequence (layout flags do not apply; order of lines is order of messages):

```d2
shape: sequence_diagram
client: omp session
broker: herd broker
client -> broker: peers list
broker -> client: scope=all
```

Before/after side by side:

```d2
grid-columns: 2
horizontal-gap: 60
before: Before {
  direction: down
  a: omp-install
  b: ~/.local/bin/serve-report {class: removed}
  a -> b: copy
}
after: After {
  direction: down
  a: omp-install
  b: ~/.local/bin/serve-report {class: added}
  a -> b: symlink
}
```

- Timeline: `direction: right` with a chain `t1 -> t2 -> t3`; put times in labels.
- State machine: one node per state, edge labels are events.
- Icons: `icon: https://icons.terrastruct.com/...` or a local path. Rendering
  downloads remote icons once and embeds them.

## Hardware wiring pictures

`draw-wiring` composes to-scale part images from one YAML spec. The spec is the
only source for wires, pin names and callouts. Do not keep a second
hand-drawn copy: the old heater schematic went stale (it kept GP22 after the
wire moved to GP28).

1. **Identify the exact board.** Read the silkscreen in the user's photo or the
   board's firmware banner before you collect assets. "Pico W" artwork is wrong
   for a Pico 2 W: the Wi-Fi can, the debug header and the antenna differ.
2. **Reuse a part** from `~/.local/share/draw-wiring/parts` (`part: <name>`) when
   one matches the board and its state. Otherwise make one:
   - **Geometry and names from primary sources.** Take hole positions, pitch and
     mounting holes from the datasheet's mechanical drawing or the vendor's
     dimension drawing. Take pin names from the official pinout. Write both in
     the part file, with its `source`.
   - **Image, in this order:**
     1. The user's photo of their board. It is their exact variant and state.
     2. A vendor top-down render, scaled from the dimension drawing.
     3. A render of the official 3D model. Raspberry Pi's Pico 2 STEP is MIT
        licensed, but it has no Pico 2 W Wi-Fi can.

     Do not use unlicensed art (Wokwi boards) or copyrighted pinout posters in
     this repository.
   - **Straighten it with `rectify-board`.** Run `--zoom` and correct the
     reference pixels until every cross sits on its hole centre. Then rectify
     with `--check PART.yaml`. Every pin ring must sit on its hole, and each
     residual must be under about 0.2 mm. A larger residual means a bad pick.
     Automatic circle fitting was tried and dropped: pad rings and textured
     bores pulled it off centre.
   - **Edit the image to the real state,** and record each edit in `source`.
     For example, move jumpers to the position the user uses. To remove a stray
     wire, copy a clean strip of the board edge from a whole number of pin
     pitches away.
3. **Write the spec.**
   - Draw each wire in the colour of the real wire. If two wires have the same
     colour, say which is which in their callouts.
   - Give a measured part value as `value`, and the marked value as `nominal`,
     which sets the colour bands.
   - Give each wire `via` points so that parallel wires stay apart.
   - Callout titles come from the part file (`Pin 34 · GP28`). Add the position
     in words ("right column, 7th from top") and the destination.
   - When you choose pins, choose ones near a landmark such as the end of a
     column. The user objected to counting to GP22, the 12th hole.
4. **Check the alignment.** Render with `--debug` and zoom into the preview.
   Every magenta dot must sit on its hole or header pin.
5. **Review the preview.**
   - Callout boxes must not cover wires. A leader may cross a wire, because it
     has a white outline.
   - The canvas should fit in about 180 mm.
6. **Publish it.**
   - When the picture replaces older figures, delete the old images.
   - The caption states where each part image came from.
   - Check the live page with the browser tool, using an element screenshot.
     Headless `google-chrome --screenshot` ignores `#anchor` URLs.
   - If you edited another session's artifact, tell that session.
7. **Storage.** Keep vendor artwork and user photos in the parts library or the
   project, not in this public repository.

## Gotchas

- Globs in an imported file style only that file. This is why the helper
  concatenates the house style instead of importing it. Error line numbers
  still refer to your `.d2` file.
- If ELK produces a tangle, try `--layout dagre` and compare previews.
- `--sketch` gives a hand-drawn look. Use it only when the user asks.
- Mermaid is not installed. Use D2.
