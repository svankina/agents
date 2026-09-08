import json
from pathlib import Path
import subprocess
import zipfile


CLI = Path(__file__).resolve().parents[1] / "bin" / "print-time"


def read(*files, expected=0):
    result = subprocess.run([str(CLI), "read", *map(str, files), "--json"],
                            capture_output=True, text=True, timeout=10)
    assert result.returncode == expected, result.stderr
    return json.loads(result.stdout) if expected == 0 else result


def test_p1s_total_includes_startup_not_just_model(tmp_path):
    path = tmp_path / "part.gcode"
    path.write_text("; model printing time: 15m 30s; total estimated time: 21m 47s\n"
                    "; estimated first layer printing time (normal mode) = 6m 16s\n")
    report = read(path)
    assert report["estimate_seconds"] == 1307
    assert report["plates"][0]["model_seconds"] == 930


def test_normal_mode_not_silent_or_first_layer(tmp_path):
    path = tmp_path / "part.gcode"
    path.write_text("G1 X10 Y20\n"
                    "; estimated printing time (normal mode) = 1d 2h 3m 4s\n"
                    "; estimated printing time (silent mode) = 2d 1h\n"
                    "; estimated first layer printing time (normal mode) = 10s\n")
    assert read(path)["estimate_seconds"] == 93784


def test_archive_counts_all_plates_not_preview_or_model(tmp_path):
    path = tmp_path / "batch.gcode.3mf"
    with zipfile.ZipFile(path, "w") as archive:
        archive.writestr("Metadata/plate_1.gcode", "; model printing time: 5m; total estimated time: 10m\n")
        archive.writestr("Metadata/plate_2.gcode", "; model printing time: 8m; total estimated time: 13m\n")
        archive.writestr("Metadata/preview.gcode", "; total estimated time: 9h\n")
    report = read(path)
    assert report["estimate_seconds"] == 1380
    assert [plate["estimate_seconds"] for plate in report["plates"]] == [600, 780]


def test_missing_or_malformed_time_never_becomes_zero(tmp_path):
    path = tmp_path / "part.gcode"
    path.write_text("G1 X10\n; estimated first layer printing time (normal mode) = 10s\n")
    assert "No supported slicer time" in read(path, expected=1).stderr
    path.write_text("; estimated printing time (normal mode) = unknown\n")
    assert "Unrecognized slicer duration" in read(path, expected=1).stderr
