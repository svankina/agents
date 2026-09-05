// CAD viewer app — bundled with three.js (MIT) into ../viewer/app.js by build.sh.
// Loads ./manifest.json ({title, models:[{file,label,bytes}]}) from the staged
// dir, renders the selected model with orbit/pan/zoom controls, a mm grid,
// CAD-axis triad, dimension readout, and standard views.
//
// Conventions: units are mm; STL/OBJ are treated as Z-up (CAD), glTF as Y-up.

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const MAX_EDGE_TRIS = 300000; // skip edge overlay beyond this (perf)

const $ = (id) => document.getElementById(id);
const canvas = $('view');

// --- renderer / scene -------------------------------------------------------
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;

const scene = new THREE.Scene();
// A local procedural softbox room: no HDR download or network dependency.
const environmentGenerator = new THREE.PMREMGenerator(renderer);
const environmentRoom = new RoomEnvironment();
const studioEnvironment = environmentGenerator.fromScene(environmentRoom, 0.06);
environmentRoom.dispose();
environmentGenerator.dispose();

const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.001, 1000);
let viewHeight = 2;
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.screenSpacePanning = true;

// --- lighting ---------------------------------------------------------------
// A world-fixed rig leaves whatever face you orbit to (typically the bottom)
// in the dark, so the key/fill pair rides the camera instead: both are offset
// off the view axis, which keeps directional shading — and therefore relief —
// readable from every angle. The hemisphere light is base fill only, kept low
// enough not to wash the part flat.
scene.add(new THREE.HemisphereLight(0xffffff, 0x7c8794, 0.55));
const key = new THREE.DirectionalLight(0xffffff, 1.5);
const fill = new THREE.DirectionalLight(0xdfe8ff, 0.45);
scene.add(key, key.target, fill, fill.target);
const studioKey = new THREE.DirectionalLight(0xfff2dc, 2.2);
studioKey.castShadow = true;
studioKey.shadow.mapSize.set(1024, 1024);
studioKey.shadow.radius = 5;
studioKey.shadow.blurSamples = 8;
studioKey.shadow.normalBias = 0.02;
const rim = new THREE.DirectionalLight(0xdce8ff, 1.1);
scene.add(studioKey, studioKey.target, rim, rim.target);
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1),
  new THREE.ShadowMaterial({ color: 0x413a30, opacity: 0.12 }),
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const camAxes = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
const lightDir = new THREE.Vector3();
// Aim a camera-relative light: dir = back + up*u + right*r, from controls.target.
function aimLight(light, u, r, dist) {
  const [right, up, back] = camAxes;
  lightDir.copy(back).addScaledVector(up, u).addScaledVector(right, r).setLength(dist);
  light.target.position.copy(controls.target);
  light.position.copy(controls.target).add(lightDir);
}

function updateLights() {
  camera.updateMatrixWorld(); // controls.update() only touched the transform
  camera.matrixWorld.extractBasis(camAxes[0], camAxes[1], camAxes[2]);
  const dist = camera.position.distanceTo(controls.target) || 1;
  aimLight(key, 0.55, 0.45, dist);   // upper right of the viewer
  aimLight(fill, -0.35, -0.7, dist); // lower left, softens the terminator
}

// --- state ------------------------------------------------------------------
let manifest = null;
let modelRoot = null;   // current model wrapper (already centered on grid)
let helpers = null;     // grid + axes group
let edgeLines = [];     // LineSegments overlays
let meshes = [];        // meshes of current model
let hitMeshes = [];     // subset of meshes that is effectively visible (hover targets)
let bounds = null;      // {size, radius, height}
let modelStem = '';     // current file stem (label fallback for unnamed meshes)
let show = { grid: false, wire: false, edges: false };
let preset = 'studio';
let explodeFactor = 0;
let components = [];
const originalMaterials = new Map();
const presentationMaterials = new Map();
let loadGeneration = 0;
const palette = [0x568fa3, 0xcc955c, 0x8d9d71, 0xb77975, 0x8d83ab, 0x65a79d, 0xbdac66, 0x8295b6];

// --- helpers ----------------------------------------------------------------
function fmt(n) {
  return n >= 100 ? n.toFixed(0) : n >= 10 ? n.toFixed(1) : n.toFixed(2);
}

function disposeObject(root) {
  root.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m) => {
        Object.values(m).forEach((v) => v && v.isTexture && v.dispose());
        m.dispose();
      });
    }
  });
}

function clearModel() {
  clearHover();
  clearLegend();
  for (const [mesh, material] of originalMaterials) mesh.material = material;
  for (const materials of presentationMaterials.values()) materials.flat().forEach((m) => m.dispose());
  originalMaterials.clear();
  presentationMaterials.clear();
  components = [];
  $('callouts').replaceChildren();
  bounds = null;
  ground.visible = false;
  $('dims').textContent = '';
  $('meta').textContent = '';
  $('btn-edges').classList.remove('disabled');
  if (modelRoot) { scene.remove(modelRoot); disposeObject(modelRoot); modelRoot = null; }
  if (helpers) { scene.remove(helpers); disposeObject(helpers); helpers = null; }
  edgeLines = [];
  meshes = [];
  hitMeshes = [];
}

function niceStep(footprint) {
  const steps = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];
  for (const s of steps) if (footprint / s <= 12) return s;
  return 2000;
}

function buildHelpers() {
  helpers = new THREE.Group();
  const { size } = bounds;
  const footprint = Math.max(size.x, size.z, 1e-6);
  const step = niceStep(footprint);
  const gridSize = step * Math.max(2, Math.ceil((footprint * 1.6) / step / 2) * 2);
  const grid = new THREE.GridHelper(gridSize, Math.round(gridSize / step), 0x55677a, 0x2c3947);
  grid.material.transparent = true;
  grid.material.opacity = 0.6;
  helpers.add(grid);

  // CAD axis triad (Z-up frame): X red, Y green, Z blue.
  const L = Math.max(size.x, size.y, size.z) * 0.55;
  const triad = new THREE.Group();
  triad.rotation.x = -Math.PI / 2;
  const axis = (dir, color) => {
    const g = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), dir.multiplyScalar(L)]);
    triad.add(new THREE.Line(g, new THREE.LineBasicMaterial({ color })));
  };
  axis(new THREE.Vector3(1, 0, 0), 0xe5484d);
  axis(new THREE.Vector3(0, 1, 0), 0x46a758);
  axis(new THREE.Vector3(0, 0, 1), 0x3b82f6);
  helpers.add(triad);

  const stepEl = $('gridstep');
  if (stepEl) stepEl.textContent = `grid ${step} mm`;
  helpers.visible = show.grid;
  scene.add(helpers);
}

function collectMeshes(root) {
  const out = [];
  root.traverse((o) => { if (o.isMesh && o.geometry) out.push(o); });
  return out;
}

function triangleCount() {
  let tris = 0;
  for (const m of meshes) {
    const g = m.geometry;
    tris += (g.index ? g.index.count : g.attributes.position.count) / 3;
  }
  return Math.round(tris);
}

function buildEdges() {
  if (triangleCount() > MAX_EDGE_TRIS) { $('btn-edges').classList.add('disabled'); return; }
  for (const m of meshes) {
    const e = new THREE.LineSegments(
      new THREE.EdgesGeometry(m.geometry, 30),
      new THREE.LineBasicMaterial({ color: 0x121a22, transparent: true, opacity: 0.5 }),
    );
    e.visible = show.edges;
    m.add(e);
    edgeLines.push(e);
  }
}

// --- hover highlight --------------------------------------------------------
const HOVER_EMISSIVE = 0x5aa9e6; // --accent
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();   // NDC
const tooltip = $('tooltip');
let pointerX = 0, pointerY = 0;        // client px, for the tooltip
let pointerDirty = false;              // raycast only after the pointer moved
let dragging = false;
let hoverNode = null;                  // highlighted section (or bare mesh)
const hoverOriginals = new Map();      // mesh -> material(s) displaced by clones

const AUTO_NAME = /^mesh_\d+(_\d+)?$/; // glTF loader ids for unnamed primitives

// A name counts only if it isn't loader-generated: bare "mesh_25"/"mesh_25_1",
// or a primitive-split suffix of the parent ("vertical_post_1-1" -> "…_1").
function isSection(o) {
  if (!o.name || AUTO_NAME.test(o.name)) return false;
  const p = o.parent;
  const tail = p && p.name && o.name.startsWith(`${p.name}_`) && o.name.slice(p.name.length + 1);
  return !(tail && /^\d+$/.test(tail));
}

// Nearest ancestor (or the mesh itself) with a real name; null for bare geometry.
function sectionOf(mesh) {
  for (let o = mesh; o && o !== modelRoot; o = o.parent) if (isSection(o)) return o;
  return null;
}

function highlight(mat) {
  const c = mat.clone();
  if (c.emissive) { c.emissive.setHex(HOVER_EMISSIVE); c.emissiveIntensity = 0.35; }
  if ('wireframe' in c) c.wireframe = show.wire;
  return c;
}

// Swap in per-mesh clones so shared materials don't bleed the highlight.
// `node` is an Object3D or an array of them (a legend row can cover siblings).
function setHover(node) {
  hoverNode = node;
  for (const root of Array.isArray(node) ? node : [node]) {
    for (const m of collectMeshes(root)) {
      if (hoverOriginals.has(m)) continue;
      hoverOriginals.set(m, m.material);
      m.material = Array.isArray(m.material) ? m.material.map(highlight) : highlight(m.material);
    }
  }
}

function clearHover() {
  for (const [m, orig] of hoverOriginals) {
    const clones = Array.isArray(m.material) ? m.material : [m.material];
    m.material = orig;
    clones.forEach((c) => c.dispose());
  }
  hoverOriginals.clear();
  hoverNode = null;
  if (tooltip) tooltip.style.display = 'none';
}

function moveTooltip(label) {
  tooltip.textContent = label;
  tooltip.style.display = 'block';
  const x = Math.min(pointerX + 12, window.innerWidth - tooltip.offsetWidth - 4);
  const y = Math.min(pointerY + 12, window.innerHeight - tooltip.offsetHeight - 4);
  tooltip.style.left = `${Math.max(4, x)}px`;
  tooltip.style.top = `${Math.max(4, y)}px`;
}

function updateHover() {
  if (!pointerDirty || dragging || !modelRoot) return;
  pointerDirty = false;
  raycaster.setFromCamera(pointer, camera);
  // three r166's raycaster ignores object.visible, so hit-test the filtered set.
  const hit = raycaster.intersectObjects(hitMeshes, false)[0]; // non-recursive: skips edges
  const section = hit ? sectionOf(hit.object) : null;
  const node = section || (hit ? hit.object : null);
  if (node !== hoverNode) {
    clearHover();
    if (node) setHover(node);
  }
  if (node && tooltip) moveTooltip(section ? section.name.replace(/_/g, ' ') : modelStem);
}

canvas.addEventListener('pointermove', (e) => {
  const r = canvas.getBoundingClientRect();
  pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  pointerX = e.clientX;
  pointerY = e.clientY;
  pointerDirty = true;
});
canvas.addEventListener('pointerdown', () => { dragging = true; clearHover(); });
window.addEventListener('pointerup', () => { dragging = false; pointerDirty = true; });
canvas.addEventListener('pointerleave', () => { pointerDirty = false; clearHover(); });

// --- component legend -------------------------------------------------------
// Rows mirror the model tree, using the hover code's "real name" rule: the
// top-level rows are the outermost named nodes below modelRoot; one that holds
// further named nodes becomes a group whose rows are its deepest named
// descendants, flattened to a single child level.
const legendEl = $('legend');
const legendList = $('legend-list');
const legendAll = $('legend-all');
const legendToggle = $('legend-toggle');
let legendRows = [];               // [{nodes, label, input, kids?}]

const COUNTER = /(?:[\s_.-]*\d+)+$/; // trailing counter chain: "post_1", "post_1-2"
const legendName = (s) => s.replace(/_/g, ' ');
const visibleInScene = (o) => {
  for (let n = o; n; n = n.parent) if (!n.visible) return false;
  return true;
};

function refreshHits() { hitMeshes = meshes.filter(visibleInScene); }

// Outermost named nodes strictly below `root`.
function namedChildren(root) {
  const out = [];
  const walk = (o) => { for (const c of o.children) if (isSection(c)) out.push(c); else walk(c); };
  walk(root);
  return out;
}

// Deepest named descendants — what a group offers as rows.
function namedLeaves(root) {
  return namedChildren(root).flatMap((n) => {
    const kids = namedLeaves(n);
    return kids.length ? kids : [n];
  });
}

// One legend level: groups (when expanding) keep their place, plain siblings
// whose names differ only by a trailing counter collapse into one row.
function levelRows(nodes, expand) {
  const rows = [];
  const byBase = new Map();
  for (const n of nodes) {
    if (expand && namedChildren(n).length) {
      rows.push({ nodes: [n], label: legendName(n.name), kids: levelRows(namedLeaves(n), false) });
      continue;
    }
    const base = n.name.replace(COUNTER, '') || n.name;
    const row = byBase.get(base);
    if (row) { row.nodes.push(n); continue; }
    const fresh = { nodes: [n], label: legendName(n.name), base };
    byBase.set(base, fresh);
    rows.push(fresh);
  }
  for (const r of rows) if (r.nodes.length > 1) r.label = `${legendName(r.base)} ×${r.nodes.length}`;
  return rows;
}

function legendTree() {
  if (!modelRoot) return [];
  let tops = namedChildren(modelRoot);
  // A lone wrapper (e.g. a glTF "Scene" node) earns no row of its own.
  while (tops.length === 1 && namedChildren(tops[0]).length) tops = namedChildren(tops[0]);
  return levelRows(tops, true);
}

function applyRow(row, on) {
  for (const n of row.nodes) {
    n.visible = on;
    if (on) for (let parent = n.parent; parent && parent !== modelRoot; parent = parent.parent) parent.visible = true;
  }
  row.input.checked = on;
  row.input.indeterminate = false;
  for (const k of row.kids || []) applyRow(k, on);
}

function syncGroup(row, apply = true) {
  const on = row.kids.filter((k) => k.input.checked).length;
  if (apply) row.nodes[0].visible = on > 0;
  row.input.checked = on === row.kids.length && row.nodes[0].visible;
  row.input.indeterminate = on > 0 && !row.input.checked;
}

function syncMaster() {
  const on = legendRows.filter((r) => r.input.checked).length;
  const any = legendRows.filter((r) => r.input.checked || r.input.indeterminate).length;
  legendAll.checked = legendRows.length > 0 && on === legendRows.length;
  legendAll.indeterminate = any > 0 && !legendAll.checked;
}

function legendRowEl(row) {
  const el = document.createElement('div');
  el.className = row.kids ? 'lg-row lg-group' : 'lg-row';
  const box = document.createElement('input');
  box.type = 'checkbox';
  box.checked = row.nodes.some((n) => n.visible);
  row.input = box;
  const name = document.createElement('span');
  name.className = 'lg-name';
  name.textContent = row.label;
  if (row.color !== undefined) {
    name.style.borderLeft = `8px solid #${row.color.toString(16).padStart(6, '0')}`;
    name.style.paddingLeft = '6px';
  }
  name.title = row.label;
  const label = document.createElement('label');
  label.append(box, name);
  el.append(label);
  el.addEventListener('pointerenter', () => {
    if (hoverNode === row.nodes) return;
    clearHover();
    setHover(row.nodes);
  });
  el.addEventListener('pointerleave', () => { if (hoverNode === row.nodes) clearHover(); });
  return el;
}

function clearLegend() {
  legendRows = [];
  legendList.replaceChildren();
  legendEl.style.display = 'none';
}

function buildLegend() {
  clearLegend();
  legendRows = preset === 'assembly'
    ? components.map((c, i) => ({ nodes: c.meshes, label: `${i + 1}. ${c.label}`, color: palette[i % palette.length] }))
    : legendTree();
  for (const row of legendRows) {
    const el = legendRowEl(row);
    row.input.addEventListener('change', () => {
      applyRow(row, row.input.checked);
      syncMaster();
      refreshHits();
    });
    legendList.append(el);
    if (!row.kids) continue;

    const kidsEl = document.createElement('div');
    kidsEl.className = 'lg-kids';
    kidsEl.hidden = row.kids.length > 8;   // long groups start collapsed
    const tri = document.createElement('button');
    tri.className = 'lg-tri';
    tri.textContent = kidsEl.hidden ? '▶' : '▼';
    tri.addEventListener('click', () => {
      kidsEl.hidden = !kidsEl.hidden;
      tri.textContent = kidsEl.hidden ? '▶' : '▼';
    });
    el.prepend(tri);
    for (const kid of row.kids) {
      kidsEl.append(legendRowEl(kid));
      kid.input.addEventListener('change', () => {
        applyRow(kid, kid.input.checked);
        syncGroup(row);
        syncMaster();
        refreshHits();
      });
    }
    legendList.append(kidsEl);
    syncGroup(row, false);
  }
  legendEl.style.display = legendRows.length ? 'flex' : 'none';
  syncMaster();
  refreshHits();
}

legendAll.addEventListener('change', () => {
  for (const row of legendRows) applyRow(row, legendAll.checked);
  legendAll.indeterminate = false;
  refreshHits();
});
legendToggle.addEventListener('click', () => {
  legendList.hidden = !legendList.hidden;
  legendToggle.textContent = legendList.hidden ? '+' : '−';
  legendToggle.title = legendList.hidden ? 'show components' : 'hide components';
});

// --- presentation ------------------------------------------------------------
function preparePresentation() {
  modelRoot.updateMatrixWorld(true);
  const groups = new Map();
  for (const mesh of meshes) {
    const section = sectionOf(mesh) || mesh;
    if (!groups.has(section)) groups.set(section, []);
    groups.get(section).push(mesh);
  }
  components = [...groups].map(([node, parts], index) => {
    const box = new THREE.Box3();
    parts.forEach((mesh) => box.union(new THREE.Box3().setFromObject(mesh)));
    const center = box.getCenter(new THREE.Vector3());
    const direction = center.clone().sub(new THREE.Vector3(0, bounds.height / 2, 0));
    if (direction.length() < bounds.radius * 0.05) {
      const angle = index * Math.PI * (3 - Math.sqrt(5));
      direction.set(Math.cos(angle), 0.35, Math.sin(angle));
    }
    direction.normalize().multiplyScalar(bounds.radius * 1.25);
    const poses = parts.map((mesh) => ({
      mesh, position: mesh.position.clone(),
      world: mesh.getWorldPosition(new THREE.Vector3()),
      anchor: mesh.worldToLocal(center.clone()),
    }));
    for (const mesh of parts) {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      originalMaterials.set(mesh, mesh.material);
      const source = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      const make = (color) => source.map((material) => new THREE.MeshStandardMaterial({
        color, roughness: 0.32, metalness: 0.42, envMapIntensity: 0.7, side: material.side,
        transparent: material.transparent, opacity: material.opacity,
        flatShading: material.flatShading || false,
      }));
      presentationMaterials.set(mesh, [make(0x54727a), make(palette[index % palette.length])]);
    }
    return { meshes: parts, poses, direction, label: legendName(node.name || modelStem) };
  });
  const radius = bounds.radius;
  ground.scale.setScalar(radius * 12);
  ground.position.y = -radius * 0.003;
  studioKey.position.set(radius * 1.5, radius * 7, radius * 1.5);
  studioKey.target.position.set(0, bounds.height / 2, 0);
  rim.position.set(-radius * 3, radius * 2, -radius * 2);
  rim.target.position.copy(studioKey.target.position);
  const shadowCamera = studioKey.shadow.camera;
  shadowCamera.left = shadowCamera.bottom = -radius * 3;
  shadowCamera.right = shadowCamera.top = radius * 3;
  shadowCamera.near = radius * 0.01;
  shadowCamera.far = radius * 12;
  shadowCamera.updateProjectionMatrix();
  studioKey.shadow.normalBias = radius * 0.002;
}

function setPreset(name, refit = true) {
  if (!['studio', 'inspection', 'assembly'].includes(name)) throw new Error(`Unknown presentation: ${name}`);
  clearHover();
  preset = name;
  const technical = name === 'inspection';
  document.body.dataset.preset = name;
  $('preset').value = name;
  scene.background = new THREE.Color(technical ? 0x131c26 : 0xeae7e0);
  scene.environment = technical ? null : studioEnvironment.texture;
  show = { grid: technical, wire: false, edges: technical };
  key.intensity = technical ? 1.5 : 0.65;
  fill.intensity = technical ? 0.45 : 0.3;
  studioKey.visible = rim.visible = !technical;
  ground.visible = !technical && !!bounds;
  for (const mesh of meshes) {
    const materials = presentationMaterials.get(mesh);
    const original = originalMaterials.get(mesh);
    const selected = materials[name === 'assembly' ? 1 : 0];
    // Material arrays require geometry groups; bare STL/glTF primitives use one material.
    mesh.material = technical ? original : Array.isArray(original) ? selected : selected[0];
  }
  applyWireframe();
  edgeLines.forEach((edge) => { edge.visible = show.edges; });
  if (helpers) helpers.visible = show.grid;
  $('gridstep').hidden = !show.grid;
  for (const keyName of ['grid', 'wire', 'edges']) $('btn-' + keyName).classList.toggle('on', show[keyName]);
  $('assembly-controls').hidden = name !== 'assembly';
  $('explode').disabled = components.length < 2;
  $('assembly-note').textContent = components.length < 2
    ? 'Single component: explosion is unavailable. Use a named multi-part GLB for assembly views.'
    : 'Explanatory separation only — not a motion or assembly simulation.';
  setExplode(explodeFactor);
  buildLegend();
  buildCallouts();
  if (refit) fit();
}

function setExplode(factor) {
  if (!Number.isFinite(factor)) throw new Error('Explosion factor must be finite');
  explodeFactor = THREE.MathUtils.clamp(factor, 0, 1);
  $('explode').value = String(explodeFactor);
  $('explode-value').textContent = `${Math.round(explodeFactor * 100)}%`;
  const active = preset === 'assembly' && components.length > 1 ? explodeFactor : 0;
  // Restore every local pose first; no integration of offsets and thus no drift.
  for (const component of components) for (const pose of component.poses) pose.mesh.position.copy(pose.position);
  if (modelRoot) modelRoot.updateMatrixWorld(true);
  if (active) {
    const destinations = new Map();
    for (const component of components) for (const pose of component.poses) {
      destinations.set(pose.mesh, pose.world.clone().addScaledVector(component.direction, active));
    }
    // Meshes are in traversal order, so even nested mesh parents are updated first.
    for (const mesh of meshes) {
      mesh.position.copy(mesh.parent.worldToLocal(destinations.get(mesh)));
      mesh.updateMatrixWorld(true);
    }
  }
  clearHover();
  refreshHits();
}

const svgNS = 'http://www.w3.org/2000/svg';
function buildCallouts() {
  const overlay = $('callouts');
  overlay.replaceChildren();
  for (const [index, component] of components.entries()) {
    const group = document.createElementNS(svgNS, 'g');
    const line = document.createElementNS(svgNS, 'path');
    const circle = document.createElementNS(svgNS, 'circle');
    const text = document.createElementNS(svgNS, 'text');
    circle.setAttribute('r', '12');
    text.textContent = String(index + 1);
    group.append(line, circle, text);
    overlay.append(group);
    component.callout = { group, line, circle, text };
  }
}

const calloutPoint = new THREE.Vector3();
const calloutSlots = [];
function updateCallouts() {
  const overlay = $('callouts');
  overlay.style.display = preset === 'assembly' && components.length > 1 ? 'block' : 'none';
  if (preset !== 'assembly' || components.length < 2) return;
  const width = canvas.clientWidth, height = canvas.clientHeight;
  calloutSlots.length = 0;
  for (const [index, component] of components.entries()) {
    const { group, line, circle, text } = component.callout;
    const pose = component.poses.find((p) => visibleInScene(p.mesh));
    group.style.display = pose ? '' : 'none';
    if (!pose) continue;
    calloutPoint.copy(pose.anchor).applyMatrix4(pose.mesh.matrixWorld).project(camera);
    if (Math.abs(calloutPoint.z) > 1) { group.style.display = 'none'; continue; }
    const x = (calloutPoint.x + 1) * width / 2;
    const y = (1 - calloutPoint.y) * height / 2;
    let lx = Math.max(16, Math.min(width - 16, x + (index % 2 ? 46 : -46)));
    let ly = Math.max(16, Math.min(height - 80, y - 34));
    for (const slot of calloutSlots) {
      if (Math.abs(lx - slot[0]) < 28 && Math.abs(ly - slot[1]) < 28) ly = slot[1] + 28;
    }
    ly = Math.min(height - 20, ly);
    calloutSlots.push([lx, ly]);
    line.setAttribute('d', `M ${x} ${y} L ${lx} ${ly}`);
    circle.setAttribute('cx', lx); circle.setAttribute('cy', ly);
    text.setAttribute('x', lx); text.setAttribute('y', ly);
  }
}

function exportPNG() {
  if (!modelRoot) return;
  clearHover();
  updateLights();
  renderer.render(scene, camera);
  canvas.toBlob((blob) => {
    if (!blob) { setStatus('PNG export failed', true); return; }
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${modelStem}-${preset}.png`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, 'image/png');
}

// --- camera -----------------------------------------------------------------
function setView(azDeg, elDeg) {
  if (!bounds) return;
  const az = THREE.MathUtils.degToRad(azDeg);
  const el = THREE.MathUtils.degToRad(elDeg);
  const box = new THREE.Box3().setFromObject(modelRoot);
  const target = box.getCenter(new THREE.Vector3());
  const radius = Math.max(box.getSize(new THREE.Vector3()).length() / 2, bounds.radius);
  const dist = radius * 4;
  camera.position.set(
    target.x + dist * Math.sin(az) * Math.cos(el),
    target.y + dist * Math.sin(el),
    target.z + dist * Math.cos(az) * Math.cos(el),
  );
  viewHeight = radius * 2.5 / Math.min(1, canvas.clientWidth / canvas.clientHeight);
  camera.zoom = 1;
  camera.near = Math.max(radius / 1000, 0.00001);
  camera.far = radius * 100;
  controls.target.copy(target);
  resize();
  controls.update();
}

const fit = () => setView(preset === 'inspection' ? 45 : 135, 30);

// --- loading ----------------------------------------------------------------
async function fetchProgress(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  const total = +res.headers.get('content-length') || 0;
  if (!res.body || !total) return await res.arrayBuffer();
  const reader = res.body.getReader();
  const buf = new Uint8Array(total);
  let got = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buf.set(value, got);
    got += value.length;
    setStatus(`loading… ${Math.round((got / total) * 100)}%`);
  }
  return buf.buffer;
}

const solidMaterial = () => new THREE.MeshStandardMaterial({
  color: 0x9db4c8, metalness: 0.15, roughness: 0.55, flatShading: true,
});

async function parseModel(file, data) {
  const ext = file.split('.').pop().toLowerCase();
  if (ext === 'stl') {
    const geom = new STLLoader().parse(data);
    return { object: new THREE.Mesh(geom, solidMaterial()), zUp: true };
  }
  if (ext === 'obj') {
    const group = new OBJLoader().parse(new TextDecoder().decode(data));
    group.traverse((o) => {
      if (!o.isMesh) return;
      (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
      o.material = solidMaterial();
    });
    return { object: group, zUp: true };
  }
  if (ext === 'glb' || ext === 'gltf') {
    const gltf = await new GLTFLoader().parseAsync(data, './');
    return { object: gltf.scene, zUp: false };
  }
  throw new Error(`unsupported format: .${ext}`);
}

async function loadModel(entry) {
  const generation = ++loadGeneration;
  setStatus('loading…');
  clearModel();
  modelStem = entry.file.split('/').pop().replace(/\.[^.]*$/, '');
  try {
    const data = await fetchProgress(`./${entry.file}`);
    const { object, zUp } = await parseModel(entry.file, data);
    if (generation !== loadGeneration) { disposeObject(object); return; }

    modelRoot = new THREE.Group();
    if (zUp) {
      const frame = new THREE.Group();
      frame.rotation.x = -Math.PI / 2;
      frame.add(object);
      modelRoot.add(frame);
    } else {
      modelRoot.add(object);
    }
    scene.add(modelRoot);

    // Center on the grid: XZ-centered, resting on y=0.
    const box = new THREE.Box3().setFromObject(modelRoot);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    modelRoot.position.set(-center.x, -box.min.y, -center.z);
    bounds = { size, radius: Math.max(size.length() / 2, 1e-6), height: size.y };

    meshes = collectMeshes(modelRoot);
    // Stable order for transparent meshes: three.js re-sorts near-equidistant
    // ones every frame, which reads as flicker.
    meshes.forEach((m, i) => {
      const mat = Array.isArray(m.material) ? m.material[0] : m.material;
      if (mat && mat.transparent) m.renderOrder = 1 + i;
    });
    preparePresentation();
    buildEdges();
    buildLegend();
    buildHelpers();
    setPreset(preset, false);
    fit();

    // Dims in CAD coordinates (Z up): world x -> X, world z -> Y, world y -> Z.
    $('dims').textContent =
      `Assembled mesh ≈ X ${fmt(size.x)} × Y ${fmt(size.z)} × Z ${fmt(size.y)} mm`;
    $('meta').textContent =
      `${triangleCount().toLocaleString()} tris · ${entry.file}` +
      (entry.bytes ? ` · ${(entry.bytes / 1048576).toFixed(1)} MB` : '');
    setStatus('');
  } catch (err) {
    if (generation !== loadGeneration) return;
    clearModel();
    setStatus(`failed to load ${entry.file}: ${err.message}`, true);
  }
}

// --- UI ---------------------------------------------------------------------
function setStatus(text, isError = false) {
  const el = $('status');
  el.textContent = text;
  el.className = isError ? 'error' : '';
  el.style.display = text ? 'block' : 'none';
}

function applyWireframe() {
  const setWire = (mat) => { if ('wireframe' in mat) mat.wireframe = show.wire; };
  for (const m of meshes) {
    const cur = hoverOriginals.has(m) ? [m.material, hoverOriginals.get(m)] : [m.material];
    cur.flat().forEach(setWire);
  }
}

function bindToggle(id, keyName, apply) {
  const btn = $(id);
  btn.classList.toggle('on', show[keyName]);
  btn.addEventListener('click', () => {
    show[keyName] = !show[keyName];
    btn.classList.toggle('on', show[keyName]);
    apply();
  });
}

function initUI() {
  $('title').textContent = manifest.title;
  document.title = `${manifest.title} — CAD viewer`;

  const requested = manifest.presentation;
  preset = ['studio', 'inspection', 'assembly'].includes(requested) ? requested : 'studio';
  $('preset').addEventListener('change', (e) => setPreset(e.target.value));
  $('explode').addEventListener('input', (e) => {
    const az = THREE.MathUtils.radToDeg(controls.getAzimuthalAngle());
    const el = 90 - THREE.MathUtils.radToDeg(controls.getPolarAngle());
    setExplode(Number(e.target.value));
    setView(az, el);
  });
  $('btn-png').addEventListener('click', exportPNG);
  if (manifest.drawing) {
    const drawing = $('drawing');
    drawing.href = `./${manifest.drawing}`;
    drawing.hidden = false;
  }
  const sel = $('model');
  if (manifest.models.length > 1) {
    manifest.models.forEach((m, i) => sel.add(new Option(m.label, i)));
    sel.addEventListener('change', () => loadModel(manifest.models[+sel.value]));
    sel.style.display = 'block';
  }

  $('btn-fit').addEventListener('click', fit);
  $('btn-iso').addEventListener('click', () => setView(45, 30));
  $('btn-top').addEventListener('click', () => setView(0, 88.5));
  $('btn-front').addEventListener('click', () => setView(0, 0));
  $('btn-right').addEventListener('click', () => setView(90, 0));
  bindToggle('btn-grid', 'grid', () => {
    if (helpers) helpers.visible = show.grid;
    $('gridstep').hidden = !show.grid;
  });
  bindToggle('btn-wire', 'wire', applyWireframe);
  bindToggle('btn-edges', 'edges', () => edgeLines.forEach((e) => { e.visible = show.edges; }));
  canvas.addEventListener('dblclick', fit);
}

function resize() {
  const w = canvas.clientWidth || window.innerWidth;
  const h = canvas.clientHeight || window.innerHeight;
  renderer.setSize(w, h, false);
  const aspect = w / h;
  camera.left = -viewHeight * aspect / 2;
  camera.right = viewHeight * aspect / 2;
  camera.top = viewHeight / 2;
  camera.bottom = -viewHeight / 2;
  camera.updateProjectionMatrix();
}

let resizeAspect = 0;
function resizeAndFit() {
  const aspect = canvas.clientWidth / canvas.clientHeight;
  if (bounds && resizeAspect) viewHeight *= Math.min(1, resizeAspect) / Math.min(1, aspect);
  resizeAspect = aspect;
  resize();
}

// --- boot -------------------------------------------------------------------
async function boot() {
  try {
    const res = await fetch('./manifest.json');
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    manifest = await res.json();
  } catch (err) {
    setStatus(`failed to load manifest.json: ${err.message}`, true);
    return;
  }
  initUI();
  await loadModel(manifest.models[0]);
}

window.addEventListener('resize', resizeAndFit);
resizeAndFit();
renderer.setAnimationLoop(() => {
  controls.update();
  updateLights();
  updateHover();
  updateCallouts();
  renderer.render(scene, camera);
});
boot();

// Small API for automated checks (agents drive this from a browser tool).
window.cadviewer = {
  setView, fit, scene, camera, controls, legend: { refresh: buildLegend },
  setPreset, setExplode,
  get preset() { return preset; },
  get explode() { return explodeFactor; },
  get bounds() { return bounds; },
};
