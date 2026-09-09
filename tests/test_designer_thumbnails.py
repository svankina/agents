"""Observable thumbnail orientation, cache, and unsafe-input boundaries."""
import importlib.util
from pathlib import Path
import struct
import tempfile
import unittest
import zlib

from PIL import Image

_spec = importlib.util.spec_from_file_location('designer_thumbnails', Path(__file__).resolve().parents[1] / 'lib/designer_thumbnails.py')
_module = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_module)
ensure_thumbnail = _module.ensure_thumbnail


class ThumbnailBoundaries(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix='designer-thumbnails-')
        self.root = Path(self.temp.name)
        self.original = self.root / 'original'
        self.destination = self.root / 'thumbs' / 'preview.png'

    def tearDown(self):
        self.temp.cleanup()

    def test_orientation_and_cache_survive_original_unavailability(self):
        with Image.new('RGB', (800, 400), 'red') as image:
            image.paste('blue', (400, 0, 800, 400))
            exif = Image.Exif()
            exif[274] = 6
            image.save(self.original, format='JPEG', exif=exif)
        before = self.original.read_bytes()
        ensure_thumbnail(self.original, self.destination, 'image/jpeg')
        self.assertEqual(self.original.read_bytes(), before)
        with Image.open(self.destination) as preview:
            self.assertEqual(preview.format, 'PNG')
            self.assertEqual(preview.size, (160, 320))
            self.assertGreater(preview.getpixel((80, 40))[0], 240)
            self.assertGreater(preview.getpixel((80, 280))[2], 240)
        cached = self.destination.stat().st_mtime_ns
        self.original.unlink()
        ensure_thumbnail(self.original, self.destination, 'image/jpeg')
        self.assertEqual(self.destination.stat().st_mtime_ns, cached)

    def test_large_png_remains_unchanged_and_small(self):
        with Image.new('RGB', (2000, 1000), 'green') as image:
            image.save(self.original, format='PNG')
        before = self.original.read_bytes()
        ensure_thumbnail(self.original, self.destination, 'image/png')
        self.assertEqual(self.original.read_bytes(), before)
        with Image.open(self.destination) as preview:
            self.assertEqual(preview.size, (320, 160))
            self.assertEqual(preview.getpixel((100, 100)), (0, 128, 0, 255))

    def test_oversized_header_fails_before_decoding(self):
        with Image.new('RGB', (1, 1)) as image:
            image.save(self.original, format='PNG')
        encoded = bytearray(self.original.read_bytes())
        encoded[16:24] = struct.pack('>II', 5000, 5000)
        encoded[29:33] = struct.pack('>I', zlib.crc32(encoded[12:29]))
        self.original.write_bytes(encoded)
        with self.assertRaisesRegex(ValueError, 'decoded-pixel limit'):
            ensure_thumbnail(self.original, self.destination, 'image/png')
        self.assertFalse(self.destination.exists())

    def test_external_svg_is_refused(self):
        self.original.write_text('<svg xmlns="http://www.w3.org/2000/svg"><use href="https://example.com/a.svg#x"/></svg>')
        with self.assertRaisesRegex(ValueError, 'SVG attributes refused'):
            ensure_thumbnail(self.original, self.destination, 'image/svg+xml')
        self.assertFalse(self.destination.exists())

    def test_sanitized_svg_produces_real_png(self):
        self.original.write_text('<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600"><rect width="1200" height="600" fill="#ff0000"/></svg>')
        before = self.original.read_bytes()
        ensure_thumbnail(self.original, self.destination, 'image/svg+xml')
        self.assertEqual(self.original.read_bytes(), before)
        with Image.open(self.destination) as preview:
            self.assertEqual(preview.format, 'PNG')
            self.assertEqual(preview.size, (320, 160))
            self.assertEqual(preview.convert('RGB').getpixel((160, 80)), (255, 0, 0))

    def test_malformed_input_never_publishes_output(self):
        self.original.write_bytes(b'not an image')
        with self.assertRaises(OSError):
            ensure_thumbnail(self.original, self.destination, 'image/png')
        self.assertFalse(self.destination.exists())


if __name__ == '__main__':
    unittest.main()
