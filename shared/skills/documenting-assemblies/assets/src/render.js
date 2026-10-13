// Headless figure renderer driven by `assembly-docs build` through Playwright.
// window.assemblyRender.figure(request) renders one manual figure and returns
// a PNG data URL plus pill label placements in CSS pixels of the figure.

import { AssemblyView } from './scene.js';
import { prepare, explodedStep } from './timeline.js';

const ISO = { az: 35, el: 28 };

// Instance pixel statistics from the pick buffer.
function pixelStats(pick) {
  const { width, height, ids } = pick;
  const stats = new Map();
  let sx = 0, sy = 0, n = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const id = ids[y * width + x];
      if (!id) continue;
      let s = stats.get(id);
      if (!s) stats.set(id, (s = { count: 0, sx: 0, sy: 0 }));
      s.count++; s.sx += x; s.sy += y;
      sx += x; sy += y; n++;
    }
  }
  return { stats, centroid: n ? [sx / n, sy / n] : [width / 2, height / 2] };
}

// Visible pixel of `id` nearest its own centroid: the leader always lands on the part.
function anchorOf(pick, id, s) {
  const { width, height, ids } = pick;
  const cx = s.sx / s.count, cy = s.sy / s.count;
  let best = null, bestD = Infinity;
  const step = s.count > 40000 ? 2 : 1;
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      if (ids[y * width + x] !== id) continue;
      const d = (x - cx) ** 2 + (y - cy) ** 2;
      if (d < bestD) { bestD = d; best = [x, y]; }
    }
  }
  return best;
}

function layoutLabels(pick, scale, view, labels, pill) {
  const W = pick.width / scale, H = pick.height / scale;
  const cell = 6;
  const gw = Math.ceil(W / cell), gh = Math.ceil(H / cell);
  const occ = new Uint8Array(gw * gh);
  for (let y = 0; y < pick.height; y++) {
    for (let x = 0; x < pick.width; x++) {
      if (pick.ids[y * pick.width + x]) occ[Math.floor(y / scale / cell) * gw + Math.floor(x / scale / cell)] = 1;
    }
  }
  const { stats, centroid } = pixelStats(pick);
  const [mx, my] = [centroid[0] / scale, centroid[1] / scale];
  const ctx = document.createElement('canvas').getContext('2d');
  ctx.font = pill.font;
  const placed = [];
  const out = [];
  const warnings = [];
  const margin = 8;

  const blocked = (r) => {
    if (r.x < margin || r.y < margin || r.x + r.w > W - margin || r.y + r.h > H - margin) return Infinity;
    for (const p of placed) {
      if (r.x < p.x + p.w + 8 && r.x + r.w + 8 > p.x && r.y < p.y + p.h + 6 && r.y + r.h + 6 > p.y) return Infinity;
    }
    let hits = 0;
    const x0 = Math.max(0, Math.floor((r.x - 4) / cell)), x1 = Math.min(gw - 1, Math.floor((r.x + r.w + 4) / cell));
    const y0 = Math.max(0, Math.floor((r.y - 4) / cell)), y1 = Math.min(gh - 1, Math.floor((r.y + r.h + 4) / cell));
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) hits += occ[y * gw + x];
    return hits;
  };

  for (const label of labels) {
    const w = Math.ceil(ctx.measureText(label.text).width) + 2 * pill.padX;
    const h = pill.height;
    let anchor = null;
    let bestDist = -1;
    for (const name of label.names) {
      const inst = view.instances.get(name);
      const s = inst && stats.get(inst.id);
      if (!s || s.count < 12 * scale * scale) continue;
      const d = (s.sx / s.count / scale - mx) ** 2 + (s.sy / s.count / scale - my) ** 2;
      if (d > bestDist) { bestDist = d; anchor = anchorOf(pick, inst.id, s); }
    }
    if (!anchor) {
      warnings.push(`${label.text}: not visible in this figure; choose another view or focus`);
      out.push({ text: label.text, w, h, anchor: null });
      continue;
    }
    const [ax, ay] = [anchor[0] / scale, anchor[1] / scale];
    let dx = ax - mx, dy = ay - my;
    const len = Math.hypot(dx, dy);
    if (len < 1) { dx = 1; dy = -0.6; } else { dx /= len; dy /= len; }
    let best = null, bestScore = Infinity;
    search: for (let r = 34; r < Math.max(W, H); r += 12) {
      for (const deg of [0, 15, -15, 30, -30, 45, -45, 60, -60, 90, -90, 120, -120, 150, -150, 180]) {
        const a = (deg * Math.PI) / 180;
        const vx = dx * Math.cos(a) - dy * Math.sin(a), vy = dx * Math.sin(a) + dy * Math.cos(a);
        const rect = { x: ax + vx * r - w / 2, y: ay + vy * r - h / 2, w, h };
        const score = blocked(rect);
        if (score === 0) { best = rect; break search; }
        if (score + r / 200 < bestScore) { bestScore = score + r / 200; best = rect; }
      }
    }
    placed.push(best);
    out.push({ text: label.text, x: best.x, y: best.y, w, h, anchor: [ax, ay] });
  }
  return { labels: out, warnings };
}

export async function startRenderer() {
  let resolveReady;
  const ready = new Promise((r) => { resolveReady = r; });
  window.assemblyRender = { ready };
  try {
    const tl = prepare(await (await fetch('./timeline.json')).json());
    const canvas = document.getElementById('view');
    const view = new AssemblyView(canvas, tl, { preserve: true });
    await view.load(`./${tl.model}`);
    await document.fonts.ready;

    window.assemblyRender.figure = (req) => {
      const { width, height, scale = 2 } = req;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      view.renderer.setPixelRatio(scale);
      view.setSize(width, height);
      let offsets, names = null, v = tl.view, style = 'shaded', highlight = [], moves = [];
      if (req.kind === 'step') {
        const step = tl.steps[req.index];
        offsets = explodedStep(tl, req.index);
        names = step.focus;
        v = step.view;
        style = 'line';
        highlight = step.parts;
        moves = step.moves;
      } else if (req.kind === 'part') {
        offsets = new Map([[req.name, [0, 0, 0]]]);
        v = ISO;
        style = 'line';
      } else {
        throw new Error(`unknown figure kind ${req.kind}`);
      }
      view.setPoses(offsets);
      view.setStyle(style);
      view.setHighlight(highlight);
      view.setGuides(moves, 1.4);
      const boxes = view.boxesFor(offsets, names);
      for (const m of moves) for (const name of m.parts) for (const p of m.path) boxes.push(view.boxAt(name, p));
      view.fit(boxes, { az: v.az, el: v.el, fill: req.fill || 0.82, aspect: width / height });
      view.render();
      const png = canvas.toDataURL('image/png');
      let labels = [], warnings = [];
      if (req.labels && req.labels.length) {
        ({ labels, warnings } = layoutLabels(view.pick(), scale, view, req.labels, req.pill));
      }
      return { png, labels, warnings };
    };
    resolveReady(true);
  } catch (err) {
    window.assemblyRender.error = String(err && err.stack || err);
    resolveReady(false);
  }
}
