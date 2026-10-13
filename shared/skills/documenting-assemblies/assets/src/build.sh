#!/usr/bin/env bash
# Rebuild the committed bundle (assets/web/app.js) from the sources here.
# Requires bun. Run from anywhere; operates on this directory.
set -euo pipefail
cd "$(dirname "$(readlink -f "$0")")"
bun install --frozen-lockfile 2>/dev/null || bun install
bun build ./main.js --outfile ../web/app.js --minify
echo "built $(du -h ../web/app.js | cut -f1) -> assets/web/app.js"
