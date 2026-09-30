---
name: modelling-cad
description: Generate, modify, and verify dimensioned CAD parts and assemblies. Use for CAD modelling, fit checks, geometry audits, and fabrication preparation. Defaults to build123d; use native FreeCAD when editable sketches, feature trees, or FEM are required. Main agents and optional CAD workers use the same procedure.
---

# Model and verify CAD

Loop: specify → write acceptance spec → build → `cad-check` → fix → deliver.
Read on demand:

- `skill://modelling-cad/measurement-requests.md` before asking the user to
  measure hardware.
- `skill://modelling-cad/exploded-views.md` before building an exploded view or
  assembly animation.
- `skill://modelling-cad/templates/part.py` and `templates/spec.json`: starter
  part and acceptance spec for a new build123d project.

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

`cad-workbench python script.py` runs scripts in the build123d environment and
keeps the working directory. `cad-workbench path` locates the engine checkout;
its `OPERATING.txt` states limits. Set `CAD_WORKBENCH_HOME` only for another engine.

- Python APIs: `workbench.engineering` (`dfm`, `face_catalog`, `solve`) and
  `workbench.catalog` (components, `create_release`, `verify_release`).
- Interactive editing: `cad-workbench serve --project DIR --port PORT` through
  the harness process supervisor. One project and unused loopback port per
  agent; never touch another agent's server or project. Exclude
  `.cad-workbench/` from commits. Add `--agent` only when sending instructions,
  dimensions and face metadata to the OMP model provider is permitted.
- Limits: DFM is conservative screening, not a manufacturing plan. FEM is
  single-solid linear elasticity only; check convergence and compare with
  `cad-workbench python -m workbench.engineering_reference /tmp/cad-reference`.
  Components are nominal geometry, not thread fits or verified inventory.

## Specify before modelling

1. Record controlling dimensions, units, datums, and intended fits. Resolve
   ambiguous edge references and overall-versus-added dimensions before building.
2. Use measured mating hardware when available. Identify catalog values and
   assumptions. Keep hardware dimensions in source parameters or focused specs.
3. State allowances as signed radial or diametral values. Positive clearance is
   not mechanical interference. Select fits for the process, material, size,
   coating, and measured printer/machine behavior; use calibration coupons when
   needed. Do not apply a universal press-fit number.
4. Write the acceptance spec (`cad-check` JSON) now, from the requirements.
   Expected sizes, volumes, and probe points come from the spec, never from
   the generator's constants or its output.

## Build maintainable geometry

- Name load-bearing parameters and derive dependent dimensions explicitly.
  Use millimeters and document coordinate frames and assembly datums.
- Prefer part-builder functions with generation/export under a main entrypoint.
  Keep part identities, labels, and colors through assembly export.
- Use feature-based mating where authoritative references exist. Otherwise use
  placements derived from named datums and parameters, not unexplained coordinates.
- Keep independent parts as separate solids; do not fuse moving parts to pass
  a check. Keep nominal hardware/thread envelopes distinct from detailed
  interfaces.
- Export GLB for `serve-cad` with `unit=Unit.M`; that keeps coordinates in mm.
  Do not stack legacy scale corrections.

## Verify the result

Run `cad-check spec.json` on the exported files after every rebuild. It
reimports STEP and checks BREP validity, solid count, bounding box, volume,
material/void probes, assembly interference and clearance, STL closure and
winding, and GLB mm extents. Exit 0 pass, 1 check failed, 2 load error or crash;
a crash is not a failed assertion. `cad-check --help` shows the spec format.

- Probe each load-bearing feature on both sides of its boundary: axis, just
  inside and just outside the diameter, both sides of shoulders, and the
  intended side of counterbores and chamfers. That checks size, position,
  and direction together.
- Derive expected volume by hand where practical. Complex blends or lofts need
  local probes instead; choose tolerances that detect the relevant defect.
- For assemblies, check the installed placement and each relevant motion state.
  An `allowed` overlap needs the actual thread, contact, or deformation reason.
- Add project-specific scripts only for what the spec cannot express, such as
  sections or motion sweeps. They must print failures and return nonzero.
- Inspect several three.js views, including an inner or back view, for topology
  and placement. Images do not verify diameters or depths. State when you did
  not inspect visually.
- When auditing an existing model, write the spec from the requirements first,
  then run it; do not read expectations out of the model source.

## Fabrication and delivery

- Check wall thickness, support needs, tool access, stock, fasteners, and assembly
  sequence against the actual process. Geometry checks do not prove strength,
  fatigue, sealing, dispensing behavior, or food-contact suitability.
- For mini-lathe parts, respect the project's turning, drilling, hand-slitting,
  thread-tool, and coating constraints. Separate finish dimensions from allowances.
- Never send a print without explicit user authorization; use the project's
  printer workflow. Workers delegate privileged operations to the parent.
- Report the `cad-check` output, other measured results, and remaining
  uncertainty. Distinguish proxy geometry from physical behavior. Deliver the
  model through `serving-cad-files` with its editable source.
