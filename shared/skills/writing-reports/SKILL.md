---
name: writing-reports
description: Content rules for any report, analysis, summary, comparison, or writeup delivered to the user. Read BEFORE composing the report, alongside serving-reports (which covers how to serve it). The user has ADHD and no patience for fluff — reports lead with the verdict and stay skimmable.
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

## Style

- Numbers go in tables, not sentences. Comparisons get columns, deltas, and a
  winner marked.
- Color carries meaning: green/amber/red status, pass/fail chips — not
  decoration.
- Cap visible lists at 5; the rest goes in a collapsed section.
- Fragments over sentences where clearer. Every sentence carries a fact,
  decision, or risk.
- Charts only when a shape matters (trend, distribution, outlier). A 3-row
  table beats a bar chart of 3 bars.

## Litmus test

Before serving: read only the first screen. Does the user know the answer,
the key evidence, and what to do next — without scrolling? If not, cut and
reorder until yes.

Serving mechanics (shared server, `serve-report`, URL rules):
`skill://serving-reports`.
