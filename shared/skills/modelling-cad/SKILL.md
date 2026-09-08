---
name: modelling-cad
description: Generate, modify, and verify dimensioned CAD parts and assemblies. Use for CAD modelling, fit checks, geometry audits, and fabrication preparation. Defaults to build123d; use native FreeCAD when editable sketches, feature trees, or FEM are required. Main agents and optional CAD workers use the same procedure.
---

# Model and verify CAD

## Choose the execution path

- Work directly for a single part or local edit. The `cad` worker is optional:
  use it for independently owned parts or a separate review. Pass the measured
  requirements, datums, acceptance checks, and file ownership with the task.
- Default to **build123d** for code-generated mechanical parts. Preserve existing
  project layout and use its Python environment. Consult installed APIs or
  official documentation rather than guessing geometry calls.
- Use **native FreeCAD** when the deliverable needs manually editable sketches,
  constraints, a feature tree, or FEM. Importing STEP does not reconstruct the
  original parametric history. Preserve native source alongside neutral exports.
- Do not introduce OpenSCAD. Use three.js for lightweight model viewing, not
  Blender/Cycles. Read `serving-cad-files` for the interactive delivery path.

## Shared CAD workbench

The `cad-workbench` command exposes the local build123d engine, component library,
DFM checks, CalculiX/gmsh analysis, and source/STEP/STL release packaging.
Use `cad-workbench path` to locate its checkout and `OPERATING.txt` for limits.
Set `CAD_WORKBENCH_HOME` only when using a different installed engine checkout.

- Run scripts in its environment with `cad-workbench python script.py` or
  `cad-workbench python -m workbench.catalog components`. The caller's working
  directory is preserved. Python APIs include `workbench.engineering.dfm`,
  `face_catalog`, `solve`, and `workbench.catalog` component/release functions.
- For interactive editing, launch `cad-workbench serve --project /path/to/project
  --port 18766` through the harness process supervisor. Use one project directory
  and unused loopback port per agent. State lives in that project's
  `.cad-workbench/`; exclude it from source commits. Never operate on another
  agent's running workbench or mutable project.
- Cloud instruction editing is disabled by default. Add `--agent` only when
  sending instructions, dimensions and selected-face metadata to the configured
  OMP model provider is permitted. Local parameter and feature editing still work.
- Face selections and load cases belong to a project revision. Apply invalidates
  analysis. STEP imports preserve geometry, not original parametric history.
- DFM is conservative screening, not proven tool access or a manufacturing plan.
  FEM supports single-solid linear elasticity, not contact, fatigue or buckling.
  Run `cad-workbench python -m workbench.engineering_reference /tmp/cad-reference`
  for the analytical axial reference; also check application-specific convergence.
- Components are nominal screw/nut/washer geometry, not detailed thread fits or
  verified supplier inventory. Release bundles include rebuild and integrity
  instructions. Keep native source and independent acceptance checks.

## Specify before modelling

1. Record controlling dimensions, units, datums, and intended fits. Resolve
   ambiguous edge references and overall-versus-added dimensions before building.
2. Use measured mating hardware when available. Identify catalog values and
   assumptions. Keep hardware dimensions in source parameters or focused specs.
3. State allowances as signed radial or diametral values. Positive clearance is
   not mechanical interference. Select fits for the process, material, size,
   coating, and measured printer/machine behavior; use calibration coupons when
   needed. Do not apply a universal press-fit number.
4. Define observable acceptance checks independently of the generator. Expected
   dimensions and positions come from the spec, not imported model constants.

## Ask for measurements with marked photos

- Reuse existing photos and supplied readings. Ask only for dimensions that
  control fit and cannot be accommodated safely with clearance. Start with the
  most consequential measurements; accept partial readings by part.
- Mark exact measurement locations on the user's photos. Use short, stable IDs
  such as T1 and T2. Draw arrows across diameters and between explicit length
  datums. Distinguish outside diameter, bore diameter and radius. State units
  and practical measurement precision. Do not present photo arrows as a scale.
- Publish a phone-friendly worksheet through `serving-reports`. Put each marked
  photo beside its descriptions and input fields. Separate diameters from
  lengths and positions. Keep current model assumptions separate from blank
  measurement fields so the user does not mistake them for actual readings.
- Use the shared server's explicit feedback submission mechanism. Local draft
  storage alone does not send readings to the agent. Provide a submit button,
  preserve drafts and the published URL across updates, and confirm success
  only after a receipt. Test submission and retrieval end to end. Do not make
  copy-and-paste into chat the normal handoff. Never read browser profiles or
  transmit drafts automatically.
- Do not require extra side views or a full measurement survey by default.
  Explain the specific unresolved fit risk and how an additional view would
  change the design before requesting it. Reuse what is already available.
- Record received readings with their IDs, units and provenance. Distinguish
  measured dimensions from remaining assumptions. A4 rectification calibrates
  the paper plane, not elevated surfaces. Zero overlap against a mock built from
  the same estimates does not prove physical fit; check clearances independently.

## Build maintainable geometry

- Name load-bearing parameters and derive dependent dimensions explicitly.
  Use millimeters by default and document coordinate frames and assembly datums.
- Prefer part-builder functions with generation/export under a main entrypoint.
  Keep part identities, labels, and colors through assembly export.
- Use feature-based mating where authoritative references exist. Otherwise use
  placements derived from named datums and parameters, not unexplained coordinates.
- Check that each intended solid part is a valid solid. Assemblies may contain
  multiple solids; do not fuse independent moving parts merely to pass a check.
- Keep nominal hardware/thread envelopes distinct from detailed interfaces.
  Do not present proxy threads, rigid finger animation, or cutaways as evidence
  of engagement, elastic behavior, collision-free motion, or manufacturability.
- Check units at the CAD-to-viewer boundary. With the current serve-cad path,
  build123d GLB exports use `unit=Unit.M` for the viewer's millimeter coordinates.
  Confirm a known dimension in the viewer; do not stack legacy scale corrections.

## Create exploded views without collisions

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
- Check the assembled state first. Preserve legitimate contact and distinguish
  it from interference. Use conservative bounds and explicit numerical
  tolerances. Never whitelist unexplained overlaps.
- Verify that rendered placements match the checked motion data. Exercise
  forward playback, reverse playback, scrubbing, and exact pose restoration.
  Fit the camera to all waypoints, not only the final exploded pose. Inspect
  front, rear, and phone views.
- State the proof's limits. Sampled checks are not continuous clearance proof.
  Nominal CAD clearance is not measured fit or manufacturing validation.
  A disclaimer does not replace fixing visible collisions.

Reference implementation: `~/src/cad/.worktrees/picaser-exploded-animation/`,
commit `9b170df` in the CAD repository. See `exploded-motion.json`,
`verify_exploded.py`, and `exploded.js`. The checker also rejects an unsafe
sideways board extraction. Reuse the method, not TIDE's dimensions or paths.

## Verify the result

Use the existing project gate where available. Add focused executable checks for
load-bearing requirements, not assertions about source text or copied constants.

- Check overall bounds, feature sizes and **positions**, intended solid count,
  BREP validity, and the specified fit clearances. Probe both sides of shoulders
  to distinguish bore diameter, counterbore diameter, direction, and depth.
- Compare volume with an independently derived formula when practical. Complex
  blends or lofts may need local sections and feature checks instead. Choose
  tolerances that detect the relevant defect; ±0.1% is not a universal rule.
- Check exported mesh watertightness and winding where applicable. Euler
  characteristic `2 - 2*g` applies to a connected, closed, orientable surface;
  `g` counts handles, not arbitrary nominal holes. Cavities and disconnected
  components need separate treatment. Validity alone does not prove the spec.
- For assemblies, measure intersections and clearances in the intended installed
  placements and relevant motion states. Endpoint checks do not prove full travel.
  Explain every intentional overlap using the actual thread, contact, or
  deformation model. A whitelist is not mechanical verification.
- Inspect multiple three.js views, including an inner/back view that exposes
  hidden exits and connections. Use images for topology/placement, not precise
  diameters or depths. State when visual verification was not performed.
- Reimport final STEP and verify validity, bounds, and critical dimensions.
  Preserve Python or native FreeCAD source for parametric editing.
- Gates must report failures and return nonzero. A build crash rejects a design
  but is not a successful assertion diagnosis. If mutation-testing a high-stakes
  gate, report assertion detections, construction crashes, and misses separately.
  Do not treat zero volume change as evidence that no defect exists.

## Fabrication and delivery

- Check wall thickness, support needs, tool access, stock, fasteners, and assembly
  sequence against the actual fabrication process. Geometry checks do not prove
  strength, fatigue, sealing, dispensing behavior, or food-contact suitability.
- For mini-lathe parts, respect the project's turning, drilling, hand-slitting,
  thread-tool, and coating constraints. Separate finish dimensions from allowances.
- Preserve the printer gatekeeper workflow. Do not send a print without explicit
  user authorization. Delegate privileged operations to the parent when a worker.
- Report measured results and remaining uncertainty. Deliver the model through
  `serving-cad-files`; use `writing-reports` and `serving-reports` for longer
  evidence. Do not substitute a render for editable model source and checks.
