"""Example mechanism for assembly-docs: a hand-cranked shaft in two split
pillow blocks. Copy the export pattern, not the geometry.

Frame: origin at the centre of the base plate's underside; +Z up; shaft axis
along X at z = AXIS_Z. Units: mm. Run: cad-workbench python mechanism.py
Outputs out/assembly.step and out/assembly.glb with one labelled solid per
instance, named <type>_<n> so assembly-docs can count repeated parts.
"""

import copy
import math
from pathlib import Path

from build123d import (Align, Box, Color, Compound, Cylinder, Location, Pos, Rot, Unit,
                       export_gltf, export_step)

BASE = (120.0, 50.0, 6.0)          # plate X, Y, Z
BLOCK_X = 40.0                     # pillow block centres at x = +/- BLOCK_X
BLOCK = (16.0, 40.0, 20.0)         # lower half: X, Y, Z above the plate
CAP_H = 14.0                       # upper half height
AXIS_Z = BASE[2] + BLOCK[2]        # split line and shaft axis
BEARING = (22.0, 8.0, 7.0)         # 608: OD, ID, width
SEAT_D, SEAT_W = 22.1, 7.2        # bearing seat: 0.05 radial, 0.1 axial clearance
SHAFT_D, SHAFT_X = 7.95, (-52.0, 70.0)
WHEEL_D, WHEEL_T, WHEEL_X = 38.0, 10.0, 55.0   # rim clears the plate top by 1 mm
CLEAR_D, PILOT_D = 3.4, 2.5        # M3 clearance and tapping pilot
HEAD_D, HEAD_H, CBORE_D = 5.5, 3.0, 6.5
BASE_SCREW_Y, CAP_SCREW_Y = 12.0, 15.0
SWITCH_BODY, SWITCH_Y = (20.0, 6.4, 10.0), -16.0   # KW12-style microswitch: X, Y, Z
SWITCH_PINS = {"COM": -7.0, "NO": 0.0, "NC": 7.0}  # terminal x positions; tips at y = -21.7

PRIMARY, ACCENT = Color(0.23, 0.24, 0.26), Color(0.83, 0.16, 0.19)
STEEL, BLACK = Color(0.66, 0.68, 0.71), Color(0.33, 0.35, 0.37)
BLUE = Color(0.18, 0.44, 0.56)
OUT = Path(__file__).with_name("out")


def x_cylinder(d, length, x0):
    """Cylinder on the shaft axis from x0 to x0 + length."""
    return Pos(x0, 0, AXIS_Z) * Rot(0, 90, 0) * Cylinder(d / 2, length, align=(Align.CENTER, Align.CENTER, Align.MIN))


def base():
    plate = Box(*BASE, align=(Align.CENTER, Align.CENTER, Align.MIN))
    for x in (-BLOCK_X, BLOCK_X):
        for y in (-BASE_SCREW_Y, BASE_SCREW_Y):
            plate -= Pos(x, y, 0) * Cylinder(CLEAR_D / 2, BASE[2], align=(Align.CENTER, Align.CENTER, Align.MIN))
            plate -= Pos(x, y, 0) * Cylinder(CBORE_D / 2, HEAD_H + 0.4, align=(Align.CENTER, Align.CENTER, Align.MIN))
    return plate


def lower_block(x):
    block = Pos(x, 0, BASE[2]) * Box(*BLOCK, align=(Align.CENTER, Align.CENTER, Align.MIN))
    block -= x_cylinder(SEAT_D, SEAT_W, x - SEAT_W / 2)
    block -= x_cylinder(10.0, BLOCK[0], x - BLOCK[0] / 2)
    for y in (-BASE_SCREW_Y, BASE_SCREW_Y):
        block -= Pos(x, y, BASE[2]) * Cylinder(PILOT_D / 2, 15, align=(Align.CENTER, Align.CENTER, Align.MIN))
    for y in (-CAP_SCREW_Y, CAP_SCREW_Y):
        block -= Pos(x, y, AXIS_Z - 12) * Cylinder(PILOT_D / 2, 12, align=(Align.CENTER, Align.CENTER, Align.MIN))
    return block


def cap(x):
    top = AXIS_Z + CAP_H
    c = Pos(x, 0, AXIS_Z) * Box(BLOCK[0], BLOCK[1], CAP_H, align=(Align.CENTER, Align.CENTER, Align.MIN))
    c -= x_cylinder(SEAT_D, SEAT_W, x - SEAT_W / 2)
    c -= x_cylinder(10.0, BLOCK[0], x - BLOCK[0] / 2)
    for y in (-CAP_SCREW_Y, CAP_SCREW_Y):
        c -= Pos(x, y, AXIS_Z) * Cylinder(CLEAR_D / 2, CAP_H, align=(Align.CENTER, Align.CENTER, Align.MIN))
        c -= Pos(x, y, top - 3.5) * Cylinder(CBORE_D / 2, 3.5, align=(Align.CENTER, Align.CENTER, Align.MIN))
    return c


def bearing(x):
    od, bore, width = BEARING
    return x_cylinder(od, width, x - width / 2) - x_cylinder(bore, width, x - width / 2)


def shaft():
    return x_cylinder(SHAFT_D, SHAFT_X[1] - SHAFT_X[0], SHAFT_X[0])


def wheel():
    w = x_cylinder(WHEEL_D, WHEEL_T, WHEEL_X) - x_cylinder(8.0, WHEEL_T, WHEEL_X)
    for k in range(4):
        a = math.radians(90 * k + 45)
        w -= Pos(0, 11 * math.cos(a), 11 * math.sin(a)) * x_cylinder(7.0, WHEEL_T, WHEEL_X)
    knob = Pos(WHEEL_X + WHEEL_T, 14, AXIS_Z) * Rot(0, 90, 0) * Cylinder(4, 22, align=(Align.CENTER, Align.CENTER, Align.MIN))
    return w + knob


def microswitch():
    """Endstop microswitch body on the plate, terminals facing -Y at SWITCH_PINS."""
    w, d, h = SWITCH_BODY
    body = Pos(0, SWITCH_Y, BASE[2]) * Box(w, d, h, align=(Align.CENTER, Align.CENTER, Align.MIN))
    for x in SWITCH_PINS.values():
        body += Pos(x, SWITCH_Y - d / 2, BASE[2] + 2) * Box(0.8, 2.5, 4, align=(Align.CENTER, Align.MAX, Align.MIN))
    return body


def screw(length):
    """M3 SHCS, head down to the origin, shank along +Z."""
    head = Cylinder(HEAD_D / 2, HEAD_H, align=(Align.CENTER, Align.CENTER, Align.MIN))
    return head + Pos(0, 0, HEAD_H) * Cylinder(1.5, length, align=(Align.CENTER, Align.CENTER, Align.MIN))


def labelled(shape, label, color):
    """One uniquely labelled Solid per instance. Repeated parts must be deep
    copies: instances that share geometry keep only one label on export."""
    solid = copy.deepcopy(shape.solid() if hasattr(shape, "solid") else shape)
    solid.label = label
    solid.color = color
    return solid


def build():
    parts = [labelled(base(), "base", PRIMARY)]
    m3x12, m3x20 = screw(12), screw(20)
    for i, x in enumerate((-BLOCK_X, BLOCK_X), start=1):
        parts.append(labelled(lower_block(x), f"lower_block_{i}", PRIMARY))
        parts.append(labelled(cap(x), f"cap_{i}", ACCENT))
        parts.append(labelled(bearing(x), f"bearing_608zz_{i}", BLACK))
    n = m = 0
    for x in (-BLOCK_X, BLOCK_X):
        for y in (-BASE_SCREW_Y, BASE_SCREW_Y):
            # Head up inside the base counterbore, shank up into the block.
            n += 1
            parts.append(labelled(m3x12.moved(Location((x, y, 0))), f"m3x12_shcs_{n}", STEEL))
        for y in (-CAP_SCREW_Y, CAP_SCREW_Y):
            m += 1
            placed = Location((x, y, AXIS_Z + CAP_H - 3.5 + HEAD_H)) * Location((0, 0, 0), (180, 0, 0))
            parts.append(labelled(m3x20.moved(placed), f"m3x20_shcs_{m}", STEEL))
    parts.append(labelled(shaft(), "shaft", STEEL))
    parts.append(labelled(wheel(), "hand_wheel", ACCENT))
    parts.append(labelled(microswitch(), "microswitch_1", BLUE))
    return Compound(label="shaft_support", children=parts)


def main():
    OUT.mkdir(exist_ok=True)
    assembly = build()
    export_step(assembly, str(OUT / "assembly.step"))
    # unit=Unit.M keeps millimetre coordinates in the GLB for the viewer.
    export_gltf(assembly, str(OUT / "assembly.glb"), unit=Unit.M, binary=True)


if __name__ == "__main__":
    main()
