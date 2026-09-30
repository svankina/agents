---
name: drawing-diagrams
description: Draw architecture, flow, sequence, state, before/after, or timeline diagrams for served HTML reports with D2 and the house style. Read before drawing any report diagram; charts of data are out of scope.
compatibility: Requires draw-diagram (bin/ of ~/src/agents), d2 on PATH or ~/go/bin/d2, and google-chrome or chromium.
---

# Drawing diagrams

Write D2 source, render it with `draw-diagram`, look at the preview, fix, then
inline the SVG in the report. Never publish a diagram you have not looked at.
`draw-diagram --help` covers flags, outputs, and exit codes.

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

## Gotchas

- Globs in an imported file style only that file. This is why the helper
  concatenates the house style instead of importing it. Error line numbers
  still refer to your `.d2` file.
- If ELK produces a tangle, try `--layout dagre` and compare previews.
- `--sketch` gives a hand-drawn look. Use it only when the user asks.
- Mermaid is not installed. Use D2.
