"""Private, immutable PNG previews; original archives are never modified."""
from __future__ import annotations

import os
from pathlib import Path
import re
import shutil
import subprocess
import tempfile
import xml.etree.ElementTree as ET

try:
    from PIL import Image, ImageOps
except ImportError as error:
    raise RuntimeError('Designer thumbnails require Pillow') from error

MAX_IMAGE_BYTES = 32 * 1024 * 1024
MAX_PIXELS = 16_000_000
THUMBNAIL_SIZE = 320


def _check_size(size: tuple[int, int]) -> None:
    width, height = size
    if min(width, height) < 1 or max(width, height) > 32768 or width * height > MAX_PIXELS:
        raise ValueError('image exceeds thumbnail decoded-pixel limit')


def _cached(path: Path) -> bool:
    if not path.exists():
        return False
    try:
        if path.is_symlink() or path.stat().st_size > 1024 * 1024:
            return False
        with Image.open(path) as image:
            if image.format != 'PNG' or min(image.size) < 1 or max(image.size) > THUMBNAIL_SIZE:
                return False
            image.load()
        path.chmod(0o600)
        return True
    except (OSError, ValueError, Image.DecompressionBombError):
        return False


def _raster(original: Path, destination: Path) -> None:
    with Image.open(original) as image:
        # Inspect the header before EXIF transpose or any pixel decoding/copy.
        _check_size(image.size)
        image.seek(0)
        oriented = ImageOps.exif_transpose(image)
        try:
            oriented.thumbnail((THUMBNAIL_SIZE, THUMBNAIL_SIZE), Image.Resampling.LANCZOS)
            # Normalize palette/CMYK/integer input and discard original metadata.
            with oriented.convert('RGBA') as preview:
                preview.info.clear()
                preview.save(destination, format='PNG')
        finally:
            oriented.close()


def _svg(original: Path, destination: Path, work: Path) -> None:
    # History already sanitizes SVG; reject unsafe references again at this boundary.
    with original.open('rb') as source:
        content = source.read(MAX_IMAGE_BYTES + 1)
    if len(content) > MAX_IMAGE_BYTES:
        raise ValueError('SVG exceeds thumbnail input-byte limit')
    if b'<!DOCTYPE' in content.upper() or b'<!ENTITY' in content.upper():
        raise ValueError('SVG entities and doctypes refused')
    root = ET.fromstring(content)
    if root.tag.split('}')[-1] != 'svg':
        raise ValueError('not SVG')
    # SVG without intrinsic dimensions still has a browser viewport. Match the
    # 300×150 default, or its explicit viewBox, rather than failing conversion.
    viewbox = re.split(r'[\s,]+', root.get('viewBox', '').strip())
    dimensions = viewbox[2:] if len(viewbox) == 4 else ['300', '150']
    for key, fallback in zip(('width', 'height'), dimensions):
        if not root.get(key) or root.get(key, '').endswith('%'):
            root.set(key, fallback)
    for index, node in enumerate(root.iter()):
        if index >= 100_000:
            raise ValueError('SVG exceeds thumbnail element limit')
        if node.tag.split('}')[-1].lower() in (
                'script', 'foreignobject', 'iframe', 'object', 'embed', 'image',
                'animate', 'animatetransform', 'set'):
            raise ValueError('active or externally referencing SVG refused')
        for key, value in node.attrib.items():
            if key.split('}')[-1].lower().startswith('on') or ('href' in key.lower() and not value.startswith('#')):
                raise ValueError('active SVG attributes refused')
        css = ' '.join(node.attrib.values()) + (node.text or '')
        css = re.sub(r"url\(\s*['\"]?#[A-Za-z0-9_-]+['\"]?\s*\)", '', css, flags=re.I)
        if re.search(r'url\s*\(|@import|javascript:|\\', css, re.I):
            raise ValueError('SVG external/style references refused')
    # Render a reserialized document: no processing instructions survive parsing.
    safe_source = work / 'source.svg'
    safe_source.write_bytes(ET.tostring(root))
    safe_source.chmod(0o600)
    executables = {}
    for name in ('fair-run', 'prlimit', 'timeout', 'convert'):
        executable = shutil.which(name)
        if executable is None:
            raise RuntimeError(f'Designer SVG thumbnails require {name}')
        executables[name] = executable
    environment = os.environ.copy()
    environment.update(MAGICK_THREAD_LIMIT='2', OMP_NUM_THREADS='2',
                       MAGICK_TEMPORARY_PATH=str(work))
    command = [
        executables['fair-run'], '--cpus', '2', '--mem', '768M', '--',
        executables['prlimit'], '--as=805306368', '--cpu=20', '--fsize=8388608', '--core=0', '--',
        executables['timeout'], '--kill-after=2s', '25s',
        executables['convert'], '-limit', 'thread', '2', '-limit', 'memory', '128MiB',
        '-limit', 'map', '128MiB', '-limit', 'disk', '0', '-limit', 'area', str(MAX_PIXELS),
        '-limit', 'width', '32768', '-limit', 'height', '32768', '-limit', 'time', '20',
        '-background', 'none', '-density', '96', f'SVG:{safe_source}',
        '-thumbnail', f'{THUMBNAIL_SIZE}x{THUMBNAIL_SIZE}>', '-strip', f'PNG:{destination}',
    ]
    # Disk-backed diagnostics are capped by RLIMIT_FSIZE, not accumulated in RAM.
    with (work / 'conversion.log').open('w+b') as diagnostic:
        result = subprocess.run(command, stdin=subprocess.DEVNULL, stdout=subprocess.DEVNULL,
                                stderr=diagnostic, env=environment, timeout=35, check=False)
        if result.returncode:
            diagnostic.seek(0)
            detail = diagnostic.read(4096).decode('utf-8', errors='replace').strip()
            raise ValueError(f'SVG thumbnail conversion failed ({result.returncode}): {detail}')
    if not _cached(destination):
        raise ValueError('SVG converter did not produce a bounded PNG thumbnail')


def ensure_thumbnail(original: Path, destination: Path, content_type: str) -> None:
    """Create a <=320px PNG atomically, or reuse a valid cached preview.

    Inputs are archived local images. Invalid, oversized, or unrenderable inputs
    raise; callers must expose the error rather than substitute the original.
    """
    original, destination = Path(original), Path(destination)
    if original.resolve() == destination.resolve():
        raise ValueError('thumbnail must not replace its original')
    destination.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
    destination.parent.chmod(0o700)
    if _cached(destination):
        return
    if original.stat().st_size > MAX_IMAGE_BYTES:
        raise ValueError('image exceeds thumbnail input-byte limit')
    with tempfile.TemporaryDirectory(prefix='.thumbnail-', dir=destination.parent) as directory:
        work = Path(directory)
        output = work / 'thumbnail.png'
        if content_type.split(';', 1)[0].strip().lower() == 'image/svg+xml':
            _svg(original, output, work)
        else:
            _raster(original, output)
        output.chmod(0o600)
        os.replace(output, destination)
