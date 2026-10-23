"""Behaviour of bin/perfboard-connectors on small PerfStudio boards."""
import json
import os
import subprocess
import tempfile
import unittest
from pathlib import Path

CLI = str(Path(__file__).resolve().parents[1] / "bin" / "perfboard-connectors")
TOOL_PYTHON = Path(os.environ.get(
    "PERFSTUDIO_PYTHON", Path.home() / ".local/share/uv/tools/perfboard-studio/bin/python"))
XH2 = "box-2x1-p1-r1-7.4x9.9x6.1-o0x2.65"     # S2B-XH-A-1: mating face 7.6 mm in front of the pins
SNAPPED = ["--edge-margin", "2.54"]           # edge through the next row of holes


def board(*parts, cols=30, rows=20):
    """parts: (ref, footprint, col, row, rotation)."""
    return {
        "formatVersion": 1,
        "meta": {"name": "t", "created": "2026-01-01T00:00:00.000Z", "modified": "2026-01-01T00:00:00.000Z"},
        "board": {"type": "pad-per-hole", "cols": cols, "rows": rows, "pitch": 2.54, "thickness": 1.6,
                  "material": "FR4", "padDiameter": 1.9, "drillDiameter": 1},
        "components": [{"id": f"part-{i}", "ref": ref, "value": "", "footprintId": fp,
                        "anchor": {"col": col, "row": row}, "rotation": rot, "mirrored": False,
                        "locked": False}
                       for i, (ref, fp, col, row, rot) in enumerate(parts, 1)],
        "conductors": [], "cuts": [], "nets": [],
    }


@unittest.skipUnless(TOOL_PYTHON.is_file(), "PerfStudio uv tool not installed")
class PerfboardConnectors(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)

    def run_board(self, doc, *args):
        path = Path(self.temp.name) / "b.perf"
        path.write_text(json.dumps(doc))
        return subprocess.run([CLI, str(path), *args], text=True, capture_output=True)

    def test_face_on_the_snapped_edge_passes_and_a_row_in_fails(self):
        ok = self.run_board(board(("J1", XH2, 10, 17, 0)), *SNAPPED)
        self.assertEqual(ok.returncode, 0, ok.stdout + ok.stderr)
        self.assertIn("J1 faces the bottom edge", ok.stdout)
        deep = self.run_board(board(("J1", XH2, 10, 16, 0)), *SNAPPED)
        self.assertEqual(deep.returncode, 1)
        self.assertIn("FAIL J1 edge: mating face is 2.56 mm inside the bottom edge", deep.stdout)

    def test_default_edge_is_half_a_pitch_so_a_snapped_layout_overhangs(self):
        result = self.run_board(board(("J1", XH2, 10, 17, 0)))
        self.assertEqual(result.returncode, 1)
        self.assertIn("1.25 mm past the bottom edge", result.stdout)

    def test_rotation_turns_the_mating_face(self):
        result = self.run_board(board(("J1", XH2, 2, 8, 90)), *SNAPPED)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        self.assertIn("J1 faces the left edge", result.stdout)

    def test_tall_part_in_the_finger_room_fails_and_far_away_passes(self):
        near = self.run_board(board(("J1", XH2, 10, 17, 0), ("Q1", "to220", 10, 14, 0)), *SNAPPED)
        self.assertEqual(near.returncode, 1)
        self.assertIn("FAIL J1 grip: Q1 (20 mm tall)", near.stdout)
        far = self.run_board(board(("J1", XH2, 10, 17, 0), ("Q1", "to220", 10, 5, 0)), *SNAPPED)
        self.assertEqual(far.returncode, 0, far.stdout)
        low = self.run_board(board(("J1", XH2, 10, 17, 0), ("R1", "r-axial-4", 9, 13, 0)), *SNAPPED)
        self.assertEqual(low.returncode, 0, low.stdout)

    def test_body_between_face_and_edge_blocks_the_plug(self):
        result = self.run_board(board(("J1", XH2, 10, 6, 0), ("R1", "r-axial-4", 9, 9, 0), rows=10),
                                "--max-inset", "5", *SNAPPED)
        self.assertEqual(result.returncode, 1)
        self.assertIn("FAIL J1 path: R1 stands between the mating face and the bottom edge", result.stdout)

    def test_connector_bodies_closer_than_the_gap_fail(self):
        tight = self.run_board(board(("J1", XH2, 2, 17, 0), ("J2", XH2, 5, 17, 0)), *SNAPPED)
        self.assertEqual(tight.returncode, 1)
        self.assertIn("FAIL J1/J2 gap", tight.stdout)
        spaced = self.run_board(board(("J1", XH2, 2, 17, 0), ("J2", XH2, 6, 17, 0)), *SNAPPED)
        self.assertEqual(spaced.returncode, 0, spaced.stdout)

    def test_symmetric_body_needs_a_named_face(self):
        doc = board(("J1", "hdr-1x2", 10, 10, 0))
        unknown = self.run_board(doc)
        self.assertEqual(unknown.returncode, 1)
        self.assertIn("FAIL J1 face", unknown.stdout)
        vertical = self.run_board(doc, "--face", "J1=vertical")
        self.assertEqual(vertical.returncode, 0, vertical.stdout)
        self.assertIn("J1 vertical entry", vertical.stdout)

    def test_bad_input_exits_2(self):
        result = self.run_board(board(("R1", "r-axial-4", 9, 9, 0)))
        self.assertEqual(result.returncode, 2)
        self.assertIn("no component-side part matches", result.stderr)


if __name__ == "__main__":
    unittest.main()
