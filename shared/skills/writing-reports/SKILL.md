---
name: writing-reports
description: Content rules for any report, analysis, summary, comparison, or writeup delivered to the user. Read BEFORE composing the report, alongside serving-reports (which covers how to serve it). The user has ADHD, is a visual learner, and has no patience for fluff — reports lead with the verdict, stay skimmable, and show structure as diagrams, not prose.
---

# Writing reports

The user reads the first screen. Everything the report exists to say must be
there. If the verdict is below the fold, the report failed.

## Structure (in this order)

1. **Verdict first.** The answer, result, or recommendation is the first
   visible element — one or two sentences, visually prominent (a banner, a
   colored callout). Not "this report examines…", not background. The thing
   itself.
2. **Key numbers/findings** immediately after, as a compact table or 3–5
   bullets. Ranked, not chronological.
3. **One next action** the user can take in under two minutes, clearly
   set apart.
4. **Evidence and detail last**, collapsed. Use `<details><summary>` for
   methodology, raw data, logs, long tables, and per-item breakdowns. The
   uncollapsed page should fit in roughly two screens.

## Banned

- Intro/background sections restating the ask. The user knows what they asked.
- "Executive summary" as a separate section — the verdict at top IS the summary.
- Conclusion/recap sections. The report already said it.
- Methodology up front. Collapse it; surface it only where it changes trust
  in a specific number.
- Hedging filler ("it appears that", "it's worth noting", "generally
  speaking") and marketing tone ("comprehensive", "robust", "deep dive").
- Narrating the work ("First I examined…", "Next we looked at…"). Report
  findings, not the journey.

## Diagrams (the user is a visual learner)

Whenever the report describes structure, flow, or change, **draw it** — a
diagram in the visible (uncollapsed) part of the report, near the finding it
explains. Prose describing a shape is a bug.

Draw a diagram for:

- **Architecture / relationships** — components, services, dependencies → box-and-arrow.
- **Flows and sequences** — request paths, pipelines, state machines → flowchart or sequence diagram.
- **Before/after** — refactors, migrations, config changes → two small diagrams side by side, the change highlighted.
- **Timelines** — incidents, causality chains → ordered horizontal strip.
- **Trends / distributions / outliers** — chart. But a 3-row table still beats a bar chart of 3 bars.

Rules:

- Diagrams must be **self-contained in the HTML**: inline SVG (hand-written or
  generated), or Mermaid rendered to SVG before serving. No CDN scripts, no
  external image URLs.
- Style them like the report: same fonts/palette, color used for meaning
  (green/amber/red, changed-part highlighted), every box labeled with the real
  name (file, service, function) — not "Component A".
- Keep each diagram to one idea, roughly 5–12 nodes. Past that, split it or
  collapse the full version in `<details>` with a simplified one visible.
- A diagram replaces the paragraph it illustrates; don't write both.

## Style

- Numbers go in tables, not sentences. Comparisons get columns, deltas, and a
  winner marked.
- Color carries meaning: green/amber/red status, pass/fail chips — not
  decoration.
- Cap visible lists at 5; the rest goes in a collapsed section.
- Fragments over sentences where clearer. Every sentence carries a fact,
  decision, or risk.

## Litmus test

Before serving: read only the first screen. Does the user know the answer,
the key evidence, and what to do next — without scrolling? If not, cut and
reorder until yes.

Serving mechanics (shared server, `serve-report`, URL rules):
`skill://serving-reports`.
