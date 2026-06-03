#!/usr/bin/env python3
"""Tiny JSONL bridge to Hermes Agent voice primitives for pi extension.

Keeps Python process alive so Hermes' recorder globals persist across
push-to-talk start/stop calls.
"""
from __future__ import annotations

import contextlib
import json
import os
import shutil
import signal
import subprocess
import sys
import tempfile
import time
import traceback
from pathlib import Path
from typing import Any, Optional

HERMES_AGENT_DIR = Path(os.environ.get("HERMES_AGENT_DIR") or (Path.home() / ".hermes" / "hermes-agent")).expanduser()
if str(HERMES_AGENT_DIR) not in sys.path:
    sys.path.insert(0, str(HERMES_AGENT_DIR))
os.chdir(HERMES_AGENT_DIR)

_fallback_proc: Optional[subprocess.Popen] = None
_fallback_path: Optional[str] = None
_fallback_started = 0.0


def _ok(req_id: Any, **payload: Any) -> None:
    sys.stdout.write(json.dumps({"id": req_id, "ok": True, **payload}, ensure_ascii=False) + "\n")
    sys.stdout.flush()


def _err(req_id: Any, exc: BaseException) -> None:
    sys.stdout.write(json.dumps({
        "id": req_id,
        "ok": False,
        "error": str(exc),
        "type": type(exc).__name__,
    }, ensure_ascii=False) + "\n")
    sys.stdout.flush()


def _beeps_enabled() -> bool:
    try:
        from hermes_cli.voice import _beeps_enabled as enabled
        return bool(enabled())
    except Exception:
        return True


def _beep(frequency: int, count: int) -> None:
    if not _beeps_enabled():
        return
    with contextlib.suppress(Exception):
        from tools.voice_mode import play_beep
        play_beep(frequency=frequency, count=count)


def _pulse_source_name() -> str:
    configured = os.environ.get("PI_VOICE_PULSE_SOURCE", "").strip()
    if configured:
        return configured

    # Prefer a dedicated USB microphone over speakerphone combos.
    # Priority: C-Media/PnP devices > Jabra > any non-monitor input.
    preferred = os.environ.get("PI_VOICE_PREFERRED_SOURCE", "").strip().lower()
    if not preferred:
        preferred = "pnp,c-media,jabra"
    candidates = [c.strip() for c in preferred.split(",") if c.strip()]
    if candidates and shutil.which("pactl"):
        try:
            result = subprocess.run(["pactl", "list", "sources", "short"], capture_output=True, text=True, timeout=3)
            if result.returncode == 0:
                for candidate in candidates:
                    for line in result.stdout.splitlines():
                        parts = line.split()
                        if len(parts) >= 2 and ".monitor" not in parts[1] and candidate in line.lower():
                            return parts[1]
                # Last resort: any non-monitor input
                for line in result.stdout.splitlines():
                    parts = line.split()
                    if len(parts) >= 2 and ".monitor" not in parts[1]:
                        return parts[1]
        except Exception:
            pass
    return "default"


def _pulse_capture_available() -> bool:
    if not shutil.which("ffmpeg"):
        return False
    if shutil.which("pactl"):
        try:
            result = subprocess.run(["pactl", "info"], capture_output=True, text=True, timeout=3)
            if result.returncode == 0 and "Default Source:" in result.stdout:
                return True
        except Exception:
            pass
    # Good enough for PipeWire/PulseAudio default setups.
    return bool(os.environ.get("PULSE_SERVER") or os.environ.get("XDG_RUNTIME_DIR"))


def _preferred_input_device() -> int | None:
    """Return the sounddevice device index for the preferred microphone.

    Priority: C-Media/PnP devices > Jabra > any non-default, non-monitor
    input.  Return None if sounddevice is not available or no suitable
    device is found.
    """
    try:
        import sounddevice as sd
    except Exception:
        return None
    try:
        devices = sd.query_devices()
        # Priority 1: C-Media/PnP
        for i, d in enumerate(devices):
            if d.get("max_input_channels", 0) > 0:
                name = d.get("name", "").lower()
                if "pnp" in name or "c-media" in name:
                    return i
        # Priority 2: Jabra
        for i, d in enumerate(devices):
            if d.get("max_input_channels", 0) > 0 and "jabra" in d.get("name", "").lower():
                return i
        # Priority 3: any non-default, non-monitor input
        for i, d in enumerate(devices):
            if d.get("max_input_channels", 0) > 0:
                name = d.get("name", "")
                if name and name != "default" and "monitor" not in name.lower():
                    return i
    except Exception:
        pass
    return None


def _set_input_device(requested: int | None = None) -> str:
    """Configure sounddevice to use the preferred microphone.

    Only sets sd.default.device[0], leaving samplerate at the
    PortAudio default (which typically follows the input stream).
    Returns a human-readable description of what device was configured.
    """
    idx = requested if requested is not None else _preferred_input_device()
    if idx is None:
        return "sounddevice unavailable"
    try:
        import sounddevice as sd
        prev = sd.default.device
        dev = sd.query_devices(idx)
        sd.default.device[0] = idx
        name = dev.get("name", f"device {idx}")
        desc = f"{name} (idx={idx})"
        if prev[0] != idx:
            desc += f", was {prev[0]}"
        return desc
        name = dev.get("name", f"device {idx}")
        desc = f"{name} (idx={idx})"
        if prev[0] != idx:
            desc += f", was {prev[0]}"
        return desc
    except Exception as e:
        return f"failed: {e}"


def _start_fallback_recording() -> None:
    global _fallback_proc, _fallback_path, _fallback_started
    if _fallback_proc and _fallback_proc.poll() is None:
        return
    temp_dir = Path(tempfile.gettempdir()) / "pi_voice"
    temp_dir.mkdir(parents=True, exist_ok=True)
    _fallback_path = str(temp_dir / f"recording_{time.strftime('%Y%m%d_%H%M%S')}.wav")
    cmd = [
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
        "-f", "pulse", "-i", _pulse_source_name(),
        "-ac", "1", "-ar", "16000", "-sample_fmt", "s16", _fallback_path,
    ]
    _fallback_proc = subprocess.Popen(cmd, stdin=subprocess.DEVNULL, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, text=True)
    _fallback_started = time.monotonic()
    time.sleep(0.25)
    if _fallback_proc.poll() is not None:
        stderr = (_fallback_proc.stderr.read() if _fallback_proc.stderr else "").strip()
        raise RuntimeError(f"ffmpeg pulse recording failed: {stderr or _fallback_proc.returncode}")


def _stop_fallback_recording() -> str:
    global _fallback_proc, _fallback_path, _fallback_started
    proc = _fallback_proc
    path = _fallback_path
    _fallback_proc = None
    _fallback_path = None
    if not proc or not path:
        return ""
    if proc.poll() is None:
        proc.send_signal(signal.SIGINT)
        try:
            proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            proc.kill()
            proc.wait(timeout=2)
    if time.monotonic() - _fallback_started < 0.3:
        with contextlib.suppress(OSError):
            os.unlink(path)
        return ""
    if not os.path.isfile(path) or os.path.getsize(path) <= 44:
        with contextlib.suppress(OSError):
            os.unlink(path)
        return ""
    return path


def handle(req: dict[str, Any]) -> dict[str, Any] | None:
    global _fallback_proc, _fallback_path
    cmd = req.get("cmd")

    if cmd == "check":
        from tools.voice_mode import check_voice_requirements
        try:
            from tools.tts_tool import check_tts_requirements
            tts_available = bool(check_tts_requirements())
        except Exception:
            tts_available = False
        reqs = check_voice_requirements()
        fallback_audio = _pulse_capture_available()
        if fallback_audio and not reqs.get("audio_available"):
            reqs = dict(reqs)
            reqs["audio_available"] = True
            reqs["available"] = bool(reqs.get("stt_available"))
            reqs["missing_packages"] = [p for p in reqs.get("missing_packages", []) if p not in {"sounddevice", "numpy"}]
            details = reqs.get("details", "")
            filtered: list[str] = []
            skip_continuation = 0
            for line in details.splitlines():
                if line.startswith("Audio capture: MISSING"):
                    continue
                if line.startswith("Environment: PortAudio system library not found"):
                    skip_continuation = 3
                    continue
                if skip_continuation:
                    skip_continuation -= 1
                    continue
                filtered.append(line)
            filtered.append("Audio capture: OK (ffmpeg + PulseAudio/PipeWire fallback)")
            reqs["details"] = "\n".join(x for x in filtered if x.strip())
        preferred_name = _pulse_source_name()
        pulse_available = _pulse_capture_available()
        # Also report what sounddevice will prefer
        sd_idx = _preferred_input_device()
        sd_name = None
        if sd_idx is not None:
            try:
                import sounddevice as sd
                sd_name = sd.query_devices(sd_idx).get("name", str(sd_idx))
            except Exception:
                sd_name = str(sd_idx)
        return {"requirements": reqs, "tts_available": tts_available, "fallback_audio": pulse_available, "pulse_source": preferred_name, "audio_backend": "ffmpeg-pulse" if pulse_available else "hermes-sounddevice", "sd_device": sd_name}

    if cmd == "start":
        from hermes_cli import voice as hv
        _beep(880, 1)
        # Use ffmpeg + PulseAudio as the primary recorder: PortAudio /
        # sounddevice loses USB devices when PipeWire claims ALSA
        # hardware.  ffmpeg finds mics by name via PulseAudio reliably.
        # Fall back to Hermes sounddevice only when PulseAudio is absent.
        if _pulse_capture_available():
            _start_fallback_recording()
            return {"recording": True, "backend": "ffmpeg-pulse"}
        try:
            device_desc = _set_input_device()
            print(f"voice input device: {device_desc}", file=sys.stderr)
            hv.start_recording()
            return {"recording": True, "backend": "hermes"}
        except Exception as exc:
            raise RuntimeError(
                f"Audio recording unavailable: {exc}. "
                "Check that a microphone is connected and accessible."
            ) from exc

    if cmd == "stop":
        from hermes_cli import voice as hv
        transcript = ""
        wav_path = ""
        if _fallback_proc is not None:
            wav_path = _stop_fallback_recording()
            _beep(660, 2)
            if wav_path:
                try:
                    from tools.voice_mode import is_whisper_hallucination, transcribe_recording
                    t0 = time.monotonic()
                    result = transcribe_recording(wav_path)
                    elapsed = time.monotonic() - t0
                    if result.get("success"):
                        text = (result.get("transcript") or "").strip()
                        if text and not is_whisper_hallucination(text):
                            transcript = f"{text} ({elapsed:.2f}s)"
                    elif result.get("error"):
                        raise RuntimeError(result["error"])
                finally:
                    with contextlib.suppress(OSError):
                        os.unlink(wav_path)
        else:
            t0 = time.monotonic()
            transcript = hv.stop_and_transcribe() or ""
            elapsed = time.monotonic() - t0
            if transcript:
                transcript = f"{transcript} ({elapsed:.2f}s)"
            _beep(660, 2)
        return {"recording": False, "transcript": transcript}

    if cmd == "speak":
        from hermes_cli import voice as hv
        hv.speak_text(str(req.get("text") or ""))
        return {"spoken": True}

    if cmd == "stop_playback":
        from tools.voice_mode import stop_playback
        stop_playback()
        return {"stopped": True}

    if cmd == "shutdown":
        if _fallback_proc is not None:
            with contextlib.suppress(Exception):
                _stop_fallback_recording()
        with contextlib.suppress(Exception):
            from hermes_cli import voice as hv
            hv.stop_continuous(force_transcribe=False)
        with contextlib.suppress(Exception):
            from tools.voice_mode import stop_playback
            stop_playback()
        return {"shutdown": True}

    raise ValueError(f"unknown command: {cmd!r}")


def main() -> int:
    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        req_id = None
        try:
            req = json.loads(line)
            req_id = req.get("id")
            result = handle(req) or {}
            _ok(req_id, **result)
        except Exception as exc:  # keep bridge alive after command failures
            traceback.print_exc(file=sys.stderr)
            _err(req_id, exc)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
