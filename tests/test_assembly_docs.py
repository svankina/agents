"""Contracts for bin/assembly-docs on real build123d exports."""
import json
import shutil
import subprocess
import tempfile
import unittest
from pathlib import Path

CLI = str(Path(__file__).resolve().parents[1] / "bin" / "assembly-docs")

# A 10 mm wall at x = 0..10 and a 4 mm peg installed to its right at x = 14..18.
FIXTURES = r'''
import copy
import build123d as bd
def solid(shape, label):
    s = copy.deepcopy(shape.solid()); s.label = label; return s
A = bd.Align.MIN
wall = solid(bd.Box(10, 40, 20, align=(A, A, A)), "wall")
peg = solid(bd.Pos(14, 18, 0) * bd.Box(4, 4, 4, align=(A, A, A)), "peg_1")
good = bd.Compound(children=[wall, peg])
bd.export_step(good, "good.step")
bd.export_gltf(good, "good.glb", unit=bd.Unit.M, binary=True)
clash = bd.Compound(children=[wall, solid(bd.Pos(8, 18, 0) * bd.Box(4, 4, 4, align=(A, A, A)), "peg_1")])
bd.export_step(clash, "clash.step")
bd.export_gltf(clash, "clash.glb", unit=bd.Unit.M, binary=True)
one = bd.Box(4, 4, 4).solid()
a = one.moved(bd.Location((20, 0, 0))); a.label = "pin_1"
b = one.moved(bd.Location((30, 0, 0))); b.label = "pin_2"
shared = bd.Compound(children=[solid(bd.Box(10, 40, 20, align=(A, A, A)), "wall"), a, b])
bd.export_step(shared, "shared.step")
bd.export_gltf(shared, "shared.glb", unit=bd.Unit.M, binary=True)
# A 6 mm peg installed in a 6.2 mm bore through a 100 mm block; "fit" has a 6 mm bore (line
# contact all the way) and "blocked" narrows the 6.2 mm bore above the peg.
C = bd.Align.CENTER
bore = lambda r: bd.Box(20, 20, 100, align=(C, C, A)) - bd.Cylinder(r, 100, align=(C, C, A))
pin = solid(bd.Pos(0, 0, 40) * bd.Cylinder(3, 20, align=(C, C, A)), "peg_1")
ring = bd.Pos(0, 0, 78) * (bd.Cylinder(3.1, 4, align=(C, C, A)) - bd.Cylinder(2.5, 4, align=(C, C, A)))
for name, body in (("slide", bore(3.1)), ("fit", bore(3)), ("blocked", bore(3.1) + ring)):
    model = bd.Compound(children=[solid(body, "block"), copy.deepcopy(pin)])
    bd.export_step(model, f"{name}.step")
    bd.export_gltf(model, f"{name}.glb", unit=bd.Unit.M, binary=True)
'''


def spec(model="good", path=None, place=("wall",), allowed=()):
    return {
        "title": "Fixture", "model": f"{model}.glb", "step": f"{model}.step",
        "sections": [{"title": "Only", "steps": [
            {"title": "Wall", "place": list(place)},
            {"title": "Peg", "moves": [{"parts": ["peg_*"], "path": path or [[0, 0, 30]]}]},
        ]}],
        "clearance": {"allowed": list(allowed)},
    }


@unittest.skipUnless(shutil.which("cad-workbench"), "cad-workbench not installed")
class AssemblyDocs(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp = tempfile.TemporaryDirectory()
        cls.dir = Path(cls.temp.name)
        (cls.dir / "fixtures.py").write_text(FIXTURES)
        subprocess.run(["cad-workbench", "python", "fixtures.py"], cwd=cls.dir, check=True, capture_output=True)

    @classmethod
    def tearDownClass(cls):
        cls.temp.cleanup()

    def run_cli(self, command, data, *flags):
        path = self.dir / "assembly.json"
        path.write_text(json.dumps(data))
        return subprocess.run([CLI, command, str(path), *flags], text=True, capture_output=True, timeout=600)

    def test_check_finds_collision_between_clear_endpoints(self):
        # Starts left of the wall and ends right of it: both poses are clear.
        result = self.run_cli("check", spec(path=[[-20, 0, 0]]))
        self.assertEqual(result.returncode, 1, result.stdout + result.stderr)
        self.assertIn("FAIL step 2 (Peg) move 1: peg_1 hits wall", result.stdout)

    def test_check_passes_path_over_the_wall_and_certifies_build(self):
        data = spec(path=[[-20, 0, 30], [0, 0, 30]])
        result = self.run_cli("check", data)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        cert = json.loads((self.dir / "out/assembly-docs/clearance.json").read_text())
        self.assertEqual(cert["status"], "pass")
        # A changed path invalidates the certificate; build refuses before rendering.
        stale = self.run_cli("build", spec(path=[[-20, 0, 0]]))
        self.assertEqual(stale.returncode, 1)
        self.assertIn("changed since the clearance check", stale.stderr)

    def test_assembled_overlap_fails_unless_allowed_with_reason(self):
        result = self.run_cli("check", spec(model="clash"))
        self.assertEqual(result.returncode, 1)
        self.assertIn("FAIL assembled: wall overlaps peg_1", result.stdout)
        allowed = [{"a": "peg_*", "b": "wall", "reason": "press fit"}]
        result = self.run_cli("check", spec(model="clash", allowed=allowed))
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        self.assertIn("allow wall / peg_1", result.stdout)

    def test_sliding_fits_are_cleared_by_sweep_but_a_narrowed_bore_fails(self):
        # 0.1 mm radial clearance over a 100 mm slide: exact stepping would need ~1000 samples.
        result = self.run_cli("check", spec(model="slide", path=[[0, 0, 100]], place=["block"]))
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        self.assertIn("all 10 pieces cleared by sweep", result.stdout)
        # In line contact only the pieces where a peg end passes the block's top face are sampled.
        result = self.run_cli("check", spec(model="fit", path=[[0, 0, 100]], place=["block"]))
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        self.assertIn("6 of 10 pieces cleared by sweep", result.stdout)
        result = self.run_cli("check", spec(model="blocked", path=[[0, 0, 100]], place=["block"]))
        self.assertEqual(result.returncode, 1, result.stdout + result.stderr)
        self.assertIn("FAIL step 2 (Peg) move 1: peg_1 hits block", result.stdout)

    def test_every_instance_is_introduced_exactly_once(self):
        result = self.run_cli("check", spec(place=["wall", "peg_1"]))
        self.assertEqual(result.returncode, 2)
        self.assertIn("peg_1 was already introduced", result.stderr)
        data = spec()
        data["sections"][0]["steps"].pop()
        result = self.run_cli("check", data)
        self.assertEqual(result.returncode, 2)
        self.assertIn("never introduced", result.stderr)

    def test_shared_geometry_labels_are_rejected(self):
        data = spec(model="shared")
        data["sections"][0]["steps"][1]["moves"][0]["parts"] = ["pin_*"]
        result = self.run_cli("check", data)
        self.assertEqual(result.returncode, 2)
        self.assertIn("duplicate instance labels", result.stderr)

    def wired_spec(self, wire_step):
        data = spec()
        data["parts"] = {"peg": {"kind": "electrical", "pins": ["+", "-"]}}
        data["external"] = {"psu": {"name": "Supply", "pins": ["V+", "GND"]}}
        data["wires"] = {"W1": {"from": "peg_1.+", "to": "psu.V+", "color": "red"}}
        data["sections"][0]["steps"].insert(wire_step, {"title": "Wire", "wires": ["W1"]})
        return data

    def test_electrical_parts_must_be_wired_after_they_are_installed(self):
        data = spec()
        data["parts"] = {"peg": {"kind": "electrical"}}
        result = self.run_cli("check", data)
        self.assertEqual(result.returncode, 2)
        self.assertIn("electrical parts with no wire: ['peg_1']", result.stderr)
        # Wiring the peg before the step that installs it is rejected.
        result = self.run_cli("check", self.wired_spec(1))
        self.assertEqual(result.returncode, 2)
        self.assertIn("before peg_1 is installed", result.stderr)
        data = self.wired_spec(2)
        data["wires"]["W1"]["to"] = "psu.V-"
        result = self.run_cli("check", data)
        self.assertEqual(result.returncode, 2)
        self.assertIn("Supply has no pin 'V-'", result.stderr)
        result = self.run_cli("check", self.wired_spec(2))
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)

    def test_only_parts_fitted_earlier_can_be_transparent(self):
        data = spec()
        data["sections"][0]["steps"][0]["transparent"] = ["peg_1"]
        result = self.run_cli("check", data)
        self.assertEqual(result.returncode, 2)
        self.assertIn("transparent: peg_1 must be fitted in an earlier step", result.stderr)
        data = spec()
        data["sections"][0]["steps"][1]["transparent"] = ["peg_*"]
        result = self.run_cli("check", data)
        self.assertEqual(result.returncode, 2)
        self.assertIn("transparent: peg_1 must be fitted in an earlier step", result.stderr)
        data = spec()
        data["sections"][0]["steps"][1]["transparent"] = ["wall"]
        result = self.run_cli("check", data)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)


if __name__ == "__main__":
    unittest.main()
