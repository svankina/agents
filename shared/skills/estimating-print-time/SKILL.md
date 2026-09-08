---
name: estimating-print-time
description: Quickly estimate how long a model will take to print on the user's Ender-3 V3 KE or Bambu Lab P1S. Use for print-time questions, slicer time or filament estimates, and printer comparisons. Reads existing G-code immediately or runs the existing verified OrcaSlicer profiles offline. Never uploads or starts a print.
---

# Estimate print time

Use `print-time`. Do not guess from model volume or rebuild a slicer command.
The helper reuses the printer scripts and profiles in `~/src/3dp`. It works
from any project directory. Set `PRINT_TIME_HOME` for another 3dp checkout.

## Fast path: read an existing slice

```bash
print-time read /path/to/part.gcode --json
print-time read /path/to/part.gcode.3mf --json
print-time read /path/to/base.gcode /path/to/mast.gcode --json
```

Use an existing slice only when it represents the requested model revision,
printer, material, process, orientation, and plate layout. Filenames do not
prove these match. In particular, the Ender wrapper can retain `auto` in a
filename despite `--no-orient`. Check the recorded invocation and embedded
settings. Do not pass both loose G-code and its containing 3MF: that counts
the same job twice. All embedded plates in a sliced 3MF are included.

## New estimate: slice offline

```bash
print-time printers
print-time estimate /path/to/part.stl --printer ender3 --no-orient --json
print-time estimate /path/to/part.stl --printer p1s --no-orient --json
print-time estimate /path/to/part.stl --printer p1s -p 028-extra-draft -f esun-petg --json
print-time estimate /path/to/base.stl /path/to/mast.stl --printer ender3 --json
```

- Supported printers: `ender3` = Creality Ender-3 V3 KE; `p1s` = Bambu Lab P1S.
- Ender defaults: 0.32 mm fast draft, eSUN PLA+ fast25. P1S defaults: 0.20 mm
  standard, Generic PLA. These are different processes, not an equal-quality
  printer benchmark. Use `printers` to list current process and filament names.
- Use the printer and material already specified in the conversation. If the
  printer is unspecified, estimate both and state each profile. Do not infer
  which filament is loaded or claim a PLA estimate applies to PETG.
- `-p/--process` and `-f/--filament` accept bundled names or explicit JSON paths.
  Reuse a job's custom process when estimating it. For custom settings, copy an
  existing flattened profile to a job-local JSON file and change only the
  requested values. Do not modify shared printer profiles for an estimate.
- Use `--no-orient` for CAD exports already placed in their intended print pose.
  Without it, Orca chooses orientation. Multiple inputs are arranged together
  and may span plates. For separate jobs, invoke `estimate` once per job and
  sum those durations. An assembled part needs an assembled mesh, not a list
  of independently arranged components.
- Input: STL or unsliced 3MF. Export CAD/STEP to STL in millimeters using the
  existing modelling workflow first. Do not pass source code or a viewer GLB.
- The helper runs headlessly under `fair-run`, reuses extracted Orca when
  available, respects `ORCASLICER`, and checks `result.json` as well as process
  exit status. A successful process exit alone does not prove slicing succeeded.
- Every slice uses a unique directory under `${XDG_CACHE_HOME:-~/.cache}/print-time`.
  It preserves G-code, the slicer result, and logs for inspection or fast rereads.
  It does not overwrite another job. On failure, read the reported `driver.log`.

## Storage cases on the Ender-3 V3 KE

For ordinary non-load-bearing storage cases, adapter boxes, and organizers in
PLA+, prefer `fast-032-tweak-lightning` over the standard fast-draft process.
Select it explicitly when estimating or slicing these parts:

```bash
print-time estimate /path/to/storage-case.stl --printer ender3 \
  --no-orient -p fast-032-tweak-lightning --json
```

This existing profile keeps 0.32 mm layers and 2 walls. It uses 10% lightning
infill instead of 15% crosshatch, with 3 top and 3 bottom layers instead of 4
each. Movement speeds are unchanged. Use `--no-orient` only when the exported
mesh is already in its intended print pose.

The adapter-box workflow used this profile. A same-mesh comparison of
`stls/chemistry/vacuum-adapter-box-measured-d80c1e4.stl`, with orientation
preserved and eSUN PLA+ fast25, estimated 4h 1m 13s with standard fast draft
versus 1h 42m 21s with lightning: 57.6% less time and 53.6% less filament.
These are slicer estimates, not measured print durations or a universal saving.

Keep explicitly requested strength settings. Do not apply this storage-case
choice automatically to load-bearing stands, clamps, hinges, or pressure/vacuum
parts. An adapter storage box is not the adapter itself. The newer flask stand
uses a separate structural process. This recommendation does not change the
CLI default, shared profiles, P1S settings, or the print authorization workflow.

## Answer contract

Lead with approximate duration and printer. State material, layer height,
infill/walls, supports, and whether orientation was preserved when relevant.
The JSON includes these embedded settings, per-plate time, filament usage,
profile paths, warnings, and elapsed calculation time.

- Use `estimate_seconds` for aggregation. `estimate` is its readable form.
- P1S `total_seconds` includes the slicer's startup allowance; `model_seconds`
  is model-only. Lead with total, not model-only time.
- Ender `normal_seconds` is Orca's normal-mode estimate. Do not substitute
  first-layer time or silent-mode time. Do not add an invented startup margin.
- Multiple plates report a sequential sum, not elapsed time across printers
  running concurrently. Keep separate jobs distinct from a jointly sliced plate.
- Report slicer warnings. A time estimate is not printability approval. Physical
  heat-up, calibration, firmware speed changes, and pauses can change completion
  time. Do not invent an accuracy percentage or present estimates as measurements.
- No printer connection, discovery, credentials, upload, or print is needed.
  Printing remains a separate, explicitly authorized gatekeeper workflow.
