# Create exploded views without collisions

- Treat an exploded animation as a staged extraction, not a radial scatter.
  Clear covers first. Withdraw internal parts through their actual openings.
  Move parts sideways only after they clear the enclosure.
- Keep rigid subassemblies together during extraction. Keep connectors and
  component envelopes with their board. Separate mounts only after clearance.
  Keep sealed contents with their container and fused supports with their shell.
- Do not force captive parts through retaining geometry. Keep them seated and
  label that choice. Do not alter the design merely to make the animation work.
- Store group identities and motion waypoints in one data source shared by the
  viewer and clearance checker. Use absolute poses so scrubbing and reversal
  restore the original assembly without drift.
- Check the complete travel between independently moving groups. Endpoint
  checks, screenshots, and drift-free playback do not establish clearance.
  For piecewise translations with a common easing parameter, a conservative
  swept bounding box in the other group's relative frame can certify clearance
  if it has no positive-volume intersection with that group's exact BREP.
  An intersecting bounding envelope is inconclusive; refine it or check the
  actual sweep. Rotations require a rotation-aware method.
- Check the assembled state first (`cad-check` with `interference`). Preserve
  legitimate contact and distinguish it from interference. Use conservative
  bounds and explicit numerical tolerances. Never whitelist unexplained overlaps.
- Verify that rendered placements match the checked motion data. Exercise
  forward playback, reverse playback, scrubbing, and exact pose restoration.
  Fit the camera to all waypoints, not only the final exploded pose. Inspect
  front, rear, and phone views.
- State the proof's limits. Sampled checks are not continuous clearance proof.
  Nominal CAD clearance is not measured fit or manufacturing validation.
  A disclaimer does not replace fixing visible collisions.

Reference implementation: branch `picaser-exploded-animation` (commit `9b170df`)
in `~/src/cad`, checked out at `~/src/cad/.worktrees/picaser-exploded-animation/`.
It is not merged to `master`. See `exploded-motion.json`, `verify_exploded.py`,
and `exploded.js`. The checker also rejects an unsafe sideways board extraction.
Reuse the method, not TIDE's dimensions or paths.
