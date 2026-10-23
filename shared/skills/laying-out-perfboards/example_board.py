"""Example PerfStudio board script: the heating-mantle controller (Pico 2 W, TMC2209,
SSR driver, DS18B20 probe, fan MOSFET, five side-entry JST-XH plugs on one edge).

Copy it into the project, then replace BOARD, PARTS, NAMES, NETS and LOCKED. Run it with
PerfStudio's Python:

    fair-run -- ~/.local/share/uv/tools/perfboard-studio/bin/python board.py [--seeds 4]

It places the unlocked parts with several optimiser seeds, routes each, scores each by
DRC errors and perfboard-connectors failures, keeps the best, and writes OUT/: board.perf,
board.step, top.png, bottom.png, 3d.png and guide/ (guide.html, cut_list.csv, bom.csv).
"""
import argparse
import json
import os
import subprocess
from pathlib import Path

os.environ.setdefault("QT_QPA_PLATFORM", "offscreen")
from perfboard_studio.mcp.session import BoardSession  # noqa: E402

OUT = Path(__file__).resolve().with_name("perfstudio")
BOARD = {"cols": 28, "rows": 20}
# Distance from the outer hole centres to the board edge. 2.54 for a breakable board
# snapped through the next row of holes; PerfStudio itself assumes 1.27.
EDGE_MARGIN_MM = 2.54
ROUTING_STYLE = "best"          # or "wire", "solder", "balanced", "lead-bend"


def xh_side(pins):
    """JST S<n>B-XH-A-1 side entry: mating face 7.6 mm from the pin row, housing
    (n-1)*2.5+4.9 mm wide and 6.1 mm tall (JST XH datasheet). The 2.3 mm behind the pins is
    the S<n>B-XH-A figure, assumed for the -1. Rotation 0 faces +row."""
    return f"box-{pins}x1-p1-r1-{round((pins - 1) * 2.5 + 4.9, 2):g}x9.9x6.1-o0x2.65"


# ref: (footprint id or "", value, catalog part or "")
PARTS = {
    "U1": ("", "Pico 2 W", "raspberry-pi-pico"),
    "U2": ("mod-2x8-p5-r1-15.24x20.32x9-s8.5", "TMC2209 StepStick (BTT V1.3)", ""),
    "Q1": ("", "PN2222A", "2n2222a"),
    "Q2": ("", "IRLZ44N", "irlz44n"),
    "R1": ("r-axial-4", "1k", ""),
    "R2": ("r-axial-4", "10k", ""),
    "R3": ("r-axial-4", "4.7k", ""),
    "R4": ("r-axial-4", "100", ""),
    "R5": ("r-axial-4", "10k", ""),
    "C1": ("c-disc-p2", "100nF", ""),
    "C2": ("c-elec-d6.3-p2", "100uF 35V", ""),
    "D1": ("", "1N5819", "1n5819"),
    "J1": (xh_side(2), "SSR", ""),
    "J2": (xh_side(3), "DS18B20 probe", ""),
    "J3": (xh_side(4), "NEMA 17", ""),
    "J4": (xh_side(2), "fan", ""),
    "J5": (xh_side(2), "20 V in", ""),
}
# Pin names for parts the catalog does not name. PerfStudio numbers a 2-row module's pins
# across the rows (1 left, 2 right, 3 left, ...), so name them in that order.
_CTRL = ["EN", "MS1", "MS2", "PDN_UART", "PDN", "CLK", "STEP", "DIR"]
_PWR = ["VM", "GND", "A2", "A1", "B1", "B2", "VIO", "GND2"]
NAMES = {"U2": {str(2 * i + 1): _CTRL[i] for i in range(8)} | {str(2 * i + 2): _PWR[i] for i in range(8)}}
# net: (class, pins). A pin is REF.NAME (a unique pin name) or REF.NUMBER.
NETS = {
    "VBUS": ("power", ["U1.VBUS", "J1.1"]),
    "SSR-": ("signal", ["J1.2", "Q1.C"]),
    "GP27": ("signal", ["U1.GP27", "R1.1"]),
    "BASE": ("signal", ["R1.2", "R2.2", "Q1.B"]),
    "GND": ("ground", ["U1.GND", "Q1.E", "R2.1", "C1.2", "J2.3", "J5.2", "R5.2", "Q2.S", "C2.2",
                       "U2.GND", "U2.MS1", "U2.MS2"]),
    "3V3": ("power", ["U1.3V3", "J2.1", "R3.2", "C1.1", "U2.VIO"]),
    "DQ": ("signal", ["U1.GP28", "J2.2", "R3.1"]),
    "FAN": ("signal", ["U1.GP6", "R4.1"]),
    "GATE": ("signal", ["R4.2", "R5.1", "Q2.G"]),
    "DRAIN": ("signal", ["Q2.D", "J4.2", "D1.A"]),
    "VM": ("power", ["J5.1", "C2.1", "U2.VM", "J4.1", "D1.K"]),
    "STEP": ("signal", ["U1.GP2", "U2.STEP"]),
    "DIR": ("signal", ["U1.GP3", "U2.DIR"]),
    "EN": ("signal", ["U1.GP4", "U2.EN"]),
    "A2": ("signal", ["U2.A2", "J3.1"]),
    "A1": ("signal", ["U2.A1", "J3.2"]),
    "B1": ("signal", ["U2.B1", "J3.3"]),
    "B2": ("signal", ["U2.B2", "J3.4"]),
}
# Parts the optimiser must not move: modules, connectors, anything the enclosure fixes.
# ref: (pin-1 hole, rotation). Rotation is clockwise as seen from the component side.
LOCKED = {
    "U1": ("A9", 270),          # USB toward the left edge, pins on rows 2 and 9
    "U2": ("W1", 0),            # EN top left
    "J1": ("B18", 0), "J2": ("F18", 0), "J5": ("L18", 0), "J4": ("P18", 0), "J3": ("V18", 0),
}


def must(result, what):
    if isinstance(result, dict) and result.get("ok") is False:
        raise SystemExit(f"{what}: {result.get('message', result)}")
    return result


def resolve(session, pin):
    """REF.NAME or REF.NUMBER -> REF.NUMBER, refusing ambiguous names except ground pins."""
    ref, _, key = pin.partition(".")
    part = next(p for p in session.list_parts()["parts"] if p["ref"] == ref)
    if key in part["pins"]:
        return pin
    hits = [n for n, name in (part.get("pin_names") or {}).items() if name == key]
    if not hits:
        raise SystemExit(f"{pin}: {ref} has no pin named {key}")
    if len(hits) > 1 and key not in ("GND", "AGND"):
        raise SystemExit(f"{pin}: {ref} has {len(hits)} pins named {key}; use a number: {hits}")
    return f"{ref}.{hits[0]}"


def design(session):
    must(session.set_board(**BOARD), "board")
    for ref, (footprint, value, part) in PARTS.items():
        must(session.add_part(ref=ref, footprint_id=footprint, value=value, part=part), ref)
    for ref, names in NAMES.items():
        must(session.update_part(ref, pin_names=names), f"{ref} names")
    for net, (cls, pins) in NETS.items():
        must(session.create_net(net, cls, [resolve(session, p) for p in pins]), net)
    erc = session.run_erc()
    if erc["errors"]:
        raise SystemExit(f"ERC: {json.dumps(erc['findings'], indent=1)}")
    free = [ref for ref in PARTS if ref not in LOCKED]
    # Start the free parts in a column of spare holes; the optimiser moves them.
    must(session.place_parts([{"ref": r, "at": at, "rotation": rot} for r, (at, rot) in LOCKED.items()]
                             + [{"ref": r, "at": f"{chr(ord('C') + 2 * (i % 10))}{12 + 2 * (i // 10)}"}
                                for i, r in enumerate(free)]), "place")
    for ref in LOCKED:
        must(session.set_component_locked(ref, True), f"lock {ref}")


def connector_failures(perf):
    result = subprocess.run(["perfboard-connectors", str(perf), "--edge-margin", str(EDGE_MARGIN_MM)],
                            capture_output=True, text=True)
    if result.returncode == 2:
        raise SystemExit(result.stderr)
    return [line for line in result.stdout.splitlines() if line.startswith("FAIL")]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--seeds", type=int, default=4)
    args = parser.parse_args()
    OUT.mkdir(exist_ok=True)
    session = BoardSession()
    design(session)
    session.snapshot("designed")
    scores = []
    for seed in range(args.seeds):
        session.restore("designed")
        must(session.optimize_placement(seed=seed), f"optimize seed {seed}")
        route = must(session.reroute(style=ROUTING_STYLE), "route")
        drc = session.run_drc()
        must(session.save_document(str(OUT / "board.perf")), "save")
        failures = connector_failures(OUT / "board.perf")
        score = (drc["errors"] + len(failures), route["unrouted"], drc["warnings"])
        print(f"seed {seed}: {drc['errors']} DRC errors, {len(failures)} connector failures, "
              f"{route['unrouted']} unrouted, {drc['warnings']} warnings")
        scores.append((score, seed))
    best = min(scores)[1]
    session.restore("designed")
    must(session.optimize_placement(seed=best), "optimize")
    must(session.reroute(style=ROUTING_STYLE), "route")
    must(session.save_document(str(OUT / "board.perf"), name=OUT.parent.name), "save")
    drc, lvs = session.run_drc(), session.run_lvs()
    for v in drc["violations"]:
        print(f"DRC {v['severity']}: {v['message']}")
    for line in connector_failures(OUT / "board.perf"):
        print(line)
    print(f"LVS: {'matches' if lvs['matches_schematic'] else 'MISMATCH'} "
          f"({lvs['opens']} opens, {lvs['shorts']} shorts)")
    print(f"tallest: {session.check_heights()['tallest_ref']} {session.check_heights()['tallest_mm']} mm")
    must(session.generate_guide(str(OUT / "guide")), "guide")
    must(session.export_step(str(OUT / "board.step")), "step")
    for side in ("top", "bottom"):
        (OUT / f"{side}.png").write_bytes(session.render_2d(side=side, px_per_mm=10)[0])
    try:
        (OUT / "3d.png").write_bytes(session.render_3d()[0])
    except Exception as exc:  # needs GL; the 2D views and STEP do not
        print(f"3D render skipped: {exc}")
    print(f"seed {best} kept; outputs in {OUT}")


if __name__ == "__main__":
    main()
