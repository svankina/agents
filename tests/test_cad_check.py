"""Defect-detection contracts for bin/cad-check on real build123d exports."""
import json
import shutil
import subprocess
import tempfile
import unittest
from pathlib import Path

CLI = str(Path(__file__).resolve().parents[1] / "bin" / "cad-check")

FIXTURES = r'''
import build123d as bd
def plate(flip):
    body = bd.Box(40, 20, 10, align=(bd.Align.MIN, bd.Align.MIN, bd.Align.MIN))
    z = 0 if flip else 10  # counterbore opens at z=10 unless flipped
    bore = bd.Pos(10, 10, 5) * bd.Cylinder(1.7, 10)
    cbore = bd.Pos(10, 10, z) * bd.Cylinder(3.0, 6.0)
    return body - bore - cbore
good, flipped = plate(False), plate(True)
bd.export_step(good, "good.step")
bd.export_step(flipped, "flipped.step")
bd.export_stl(good, "good.stl")
bd.export_gltf(good, "mm.glb", unit=bd.Unit.M, binary=True)
bd.export_gltf(good, "m.glb", binary=True)
a = bd.Box(10, 10, 10)
bd.export_step(bd.Compound([a, bd.Pos(9.5, 0, 0) * bd.Box(10, 10, 10)]), "clash.step")
bd.export_step(bd.Compound([a, bd.Pos(10.2, 0, 0) * bd.Box(10, 10, 10)]), "gap.step")
'''

# Counterbore on the +Z face: void just below the top, material just above the bottom.
CBORE_PROBES = [
    {"name": "C1 top", "point": [12.5, 10, 9], "expect": "void"},
    {"name": "C1 bottom", "point": [12.5, 10, 1], "expect": "material"},
]


@unittest.skipUnless(shutil.which("cad-workbench"), "cad-workbench not installed")
class CadCheck(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp = tempfile.TemporaryDirectory()
        cls.dir = Path(cls.temp.name)
        (cls.dir / "fixtures.py").write_text(FIXTURES)
        subprocess.run(["cad-workbench", "python", "fixtures.py"], cwd=cls.dir,
                       check=True, capture_output=True)

    @classmethod
    def tearDownClass(cls):
        cls.temp.cleanup()

    def run_spec(self, spec):
        path = self.dir / "spec.json"
        path.write_text(json.dumps(spec))
        return subprocess.run([CLI, str(path)], text=True, capture_output=True)

    def test_probes_detect_counterbore_on_wrong_face(self):
        self.assertEqual(self.run_spec({"step": "good.step", "probes": CBORE_PROBES}).returncode, 0)
        result = self.run_spec({"step": "flipped.step", "probes": CBORE_PROBES})
        self.assertEqual(result.returncode, 1)
        self.assertIn("FAIL probe C1 top", result.stdout)

    def test_interference_fails_and_clearance_range_is_enforced(self):
        clash = self.run_spec({"step": "clash.step", "interference": {}})
        self.assertEqual(clash.returncode, 1)
        self.assertIn("0-1 50.0000 mm3", clash.stdout)
        gap = self.run_spec({"step": "gap.step", "interference": {},
                             "clearance": [{"a": 0, "b": 1, "min": 0.15, "max": 0.25}]})
        self.assertEqual(gap.returncode, 0, gap.stdout)
        tight = self.run_spec({"step": "gap.step", "clearance": [{"a": 0, "b": 1, "min": 0.3}]})
        self.assertEqual(tight.returncode, 1)

    def test_allowed_overlap_requires_reason(self):
        result = self.run_spec({"step": "clash.step",
                                "interference": {"allowed": [{"a": 0, "b": 1}]}})
        self.assertEqual(result.returncode, 2)
        with_reason = self.run_spec({"step": "clash.step", "interference": {
            "allowed": [{"a": 0, "b": 1, "reason": "press fit modelled nominally"}]}})
        self.assertEqual(with_reason.returncode, 0, with_reason.stdout)

    def test_glb_in_metres_fails_mm_passes(self):
        self.assertEqual(self.run_spec({"step": "good.step", "glb": "mm.glb"}).returncode, 0)
        self.assertEqual(self.run_spec({"step": "good.step", "glb": "m.glb"}).returncode, 1)

    def test_open_stl_fails(self):
        self.assertEqual(self.run_spec({"step": "good.step", "stl": "good.stl"}).returncode, 0)
        data = (self.dir / "good.stl").read_bytes()
        count = int.from_bytes(data[80:84], "little")
        truncated = data[:80] + (count - 1).to_bytes(4, "little") + data[84:-50]
        (self.dir / "open.stl").write_bytes(truncated)
        result = self.run_spec({"step": "good.step", "stl": "open.stl"})
        self.assertEqual(result.returncode, 1)
        self.assertIn("FAIL stl closed", result.stdout)

    def test_missing_step_is_load_error_not_failure(self):
        self.assertEqual(self.run_spec({"step": "absent.step"}).returncode, 2)


if __name__ == "__main__":
    unittest.main()
