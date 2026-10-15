// Assembly renderer shared by the animation player and the manual renderer.
//
// Two styles share one pipeline: a colour pass (flat white/blue fills for the
// Voron-style line art, or shaded part colours), an info pass (view normal,
// highlight flag, instance id, depth), and a composite pass that draws lines
// at instance boundaries, creases and depth steps. Screen-space edges give
// cylinder silhouettes that mesh feature edges miss.
//
// Coordinates: build123d glTF is Y-up; offsets in the timeline are CAD mm
// (Z up), mapped to world as (x, z, -y) and then into each node's parent frame.

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';

export const cadToWorld = (v) => new THREE.Vector3(v[0], v[2], -v[1]);
const GUIDE_LAYER = 1;
const MAX_INSTANCES = 2000; // ids are stored exactly in a half-float channel

const INFO_VERTEX = /* glsl */`
varying vec3 vN;
void main() {
  vN = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
const INFO_FRAGMENT = /* glsl */`
uniform float uId;
uniform float uHi;
uniform float uPick;
varying vec3 vN;
void main() {
  vec3 n = normalize(vN);
  if (!gl_FrontFacing) n = -n;
  if (uPick > 0.5) gl_FragColor = vec4(mod(uId, 256.0) / 255.0, floor(uId / 256.0) / 255.0, 0.0, 1.0);
  else gl_FragColor = vec4(n.xy, uHi, uId);
}`;
const COMPOSITE_FRAGMENT = /* glsl */`
uniform sampler2D tColor;
uniform sampler2D tInfo;
uniform sampler2D tDepth;
uniform vec2 uTexel;
uniform float uDepthThr;
uniform float uNormalCos;
uniform vec3 uLine;
uniform vec3 uLineHi;
uniform float uLineMix;
varying vec2 vUv;
vec4 info(vec2 o) { return texture2D(tInfo, vUv + o * uTexel); }
float depth(vec2 o) { return texture2D(tDepth, vUv + o * uTexel).r; }
vec3 nrm(vec4 i) { return vec3(i.xy, sqrt(max(0.0, 1.0 - dot(i.xy, i.xy)))); }
void main() {
  vec4 c = texture2D(tColor, vUv);
  vec4 i0 = info(vec2(0.0));
  vec4 iR = info(vec2(1.0, 0.0)), iL = info(vec2(-1.0, 0.0));
  vec4 iU = info(vec2(0.0, 1.0)), iD = info(vec2(0.0, -1.0));
  bool edge = abs(iR.a - i0.a) > 0.5 || abs(iL.a - i0.a) > 0.5
           || abs(iU.a - i0.a) > 0.5 || abs(iD.a - i0.a) > 0.5;
  float hi = i0.z;
  if (i0.a > 0.5) {
    vec3 n0 = nrm(i0);
    float m = min(min(dot(n0, nrm(iR)), dot(n0, nrm(iL))), min(dot(n0, nrm(iU)), dot(n0, nrm(iD))));
    float d0 = depth(vec2(0.0));
    float lap = abs(depth(vec2(1.0, 0.0)) + depth(vec2(-1.0, 0.0)) - 2.0 * d0)
              + abs(depth(vec2(0.0, 1.0)) + depth(vec2(0.0, -1.0)) - 2.0 * d0);
    edge = edge || m < uNormalCos || lap > uDepthThr;
  } else {
    hi = max(max(iR.z, iL.z), max(iU.z, iD.z));
  }
  vec4 outc = c;
  if (edge) {
    vec3 line = hi > 0.5 ? uLineHi : uLine;
    outc = c.a > 0.0 ? vec4(mix(c.rgb, line, uLineMix), 1.0) : vec4(line, uLineMix);
  }
  gl_FragColor = outc;
  #include <colorspace_fragment>
}`;

// First `frac` of a polyline, by length.
function partialRoute(route, frac) {
  if (frac >= 1) return route;
  const lens = route.slice(1).map((b, i) => Math.hypot(b[0] - route[i][0], b[1] - route[i][1], b[2] - route[i][2]));
  let left = frac * lens.reduce((a, b) => a + b, 0);
  const out = [route[0]];
  for (let i = 0; i < lens.length; i++) {
    if (left >= lens[i]) { out.push(route[i + 1]); left -= lens[i]; continue; }
    const f = lens[i] ? left / lens[i] : 0;
    const [a, b] = [route[i], route[i + 1]];
    out.push([a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f]);
    break;
  }
  return out;
}

export const DEFAULT_STYLE = {
  primary: '#3a3d42', accent: '#d42a30', hardware: '#a9aeb5', purchased: '#55595f',
  fill: '#ffffff', highlight: '#c9d8f4', line: '#232323', highlightLine: '#3d5c9e', guide: '#7d9cd6',
};

const linear = (hex) => new THREE.Color(hex);

export class AssemblyView {
  constructor(canvas, timeline, { pixelRatio = 1, preserve = false } = {}) {
    this.canvas = canvas;
    this.timeline = timeline;
    this.colors = { ...DEFAULT_STYLE, ...(timeline.style || {}) };
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, preserveDrawingBuffer: preserve });
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.setClearColor(0x000000, 0);

    this.scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const room = new RoomEnvironment();
    this.scene.environment = pmrem.fromScene(room, 0.04).texture;
    room.dispose();
    pmrem.dispose();
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x8a929c, 0.7));
    this.key = new THREE.DirectionalLight(0xffffff, 1.7);
    this.fill = new THREE.DirectionalLight(0xdfe8ff, 0.5);
    this.scene.add(this.key, this.key.target, this.fill, this.fill.target);

    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 1000);
    this.camera.layers.enable(GUIDE_LAYER);
    this.guides = new THREE.Group();
    this.wireGroup = new THREE.Group();
    this.scene.add(this.guides, this.wireGroup);
    this.style = 'shaded';
    this.instances = new Map();
    this.pickUniform = { value: 0 };

    this.quadCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.composite = new THREE.ShaderMaterial({
      uniforms: {
        tColor: { value: null }, tInfo: { value: null }, tDepth: { value: null },
        uTexel: { value: new THREE.Vector2() }, uDepthThr: { value: 0.001 },
        uNormalCos: { value: Math.cos(THREE.MathUtils.degToRad(28)) },
        uLine: { value: linear(this.colors.line) }, uLineHi: { value: linear(this.colors.highlightLine) },
        uLineMix: { value: 1 },
      },
      vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: COMPOSITE_FRAGMENT,
      depthTest: false, depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.composite);
    this.quad.frustumCulled = false;
    this.quadScene = new THREE.Scene();
    this.quadScene.add(this.quad);
    this.targets = null;
  }

  async load(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
    const gltf = await new GLTFLoader().parseAsync(await res.arrayBuffer(), './');
    this.model = gltf.scene;
    this.scene.add(this.model);
    this.model.updateMatrixWorld(true);
    const byNode = new Map();
    for (const [object, assoc] of gltf.parser.associations) {
      if (assoc && assoc.nodes !== undefined && !byNode.has(assoc.nodes)) byNode.set(assoc.nodes, object);
    }
    const insts = this.timeline.instances;
    if (insts.length > MAX_INSTANCES) throw new Error(`more than ${MAX_INSTANCES} instances`);
    insts.forEach((inst, i) => {
      const object = byNode.get(inst.node);
      if (!object) throw new Error(`glTF node ${inst.node} (${inst.name}) not found`);
      const meshes = [];
      object.traverse((o) => { if (o.isMesh) meshes.push(o); });
      const kind = inst.kind;
      const flat = new THREE.MeshBasicMaterial({ color: this.colors.fill, side: THREE.DoubleSide });
      const shaded = new THREE.MeshStandardMaterial({
        color: inst.color, side: THREE.DoubleSide,
        metalness: kind === 'hardware' ? 0.75 : 0.05,
        roughness: kind === 'hardware' ? 0.32 : 0.6,
        envMapIntensity: kind === 'hardware' ? 0.9 : 0.35,
      });
      const info = new THREE.ShaderMaterial({
        uniforms: { uId: { value: i + 1 }, uHi: { value: 0 }, uPick: this.pickUniform },
        vertexShader: INFO_VERTEX, fragmentShader: INFO_FRAGMENT, side: THREE.DoubleSide,
      });
      // See-through variants for parts a step marks transparent.
      const ghostFlat = new THREE.MeshBasicMaterial({
        color: this.colors.fill, side: THREE.DoubleSide, transparent: true, opacity: 0.12, depthWrite: false,
      });
      const ghostShaded = shaded.clone();
      Object.assign(ghostShaded, { transparent: true, opacity: 0.2, depthWrite: false });
      const parentInv = new THREE.Matrix3().setFromMatrix4(object.parent.matrixWorld).invert();
      const restBox = new THREE.Box3().setFromObject(object);
      this.instances.set(inst.name, {
        ...inst, id: i + 1, object, meshes, flat, shaded, info, ghostFlat, ghostShaded, parentInv, restBox,
        rest: object.position.clone(), offset: null, ghost: false, edges: null,
      });
    });
    this.setPoses(new Map());
  }

  setStyle(style) { this.style = style; }

  // offsets: Map name -> CAD offset; instances not in the map are hidden.
  setPoses(offsets) {
    for (const [name, inst] of this.instances) {
      const off = offsets.get(name);
      inst.offset = off || null;
      inst.object.visible = !!off;
      if (!off) continue;
      const local = cadToWorld(off).applyMatrix3(inst.parentInv);
      inst.object.position.copy(inst.rest).add(local);
    }
  }

  setHighlight(names) {
    const set = new Set(names || []);
    for (const [name, inst] of this.instances) {
      const on = set.has(name);
      inst.flat.color.set(on ? this.colors.highlight : this.colors.fill);
      inst.info.uniforms.uHi.value = on ? 1 : 0;
    }
  }

  // Parts drawn see-through: translucent fill and faint feature edges. They
  // stay out of the info and pick passes, so parts and wires behind them keep
  // their outlines and can carry labels.
  setGhost(names) {
    const set = new Set(names || []);
    for (const [name, inst] of this.instances) {
      inst.ghost = set.has(name);
      if (inst.ghost && !inst.edges) {
        this.ghostEdgeMaterial ||= new LineMaterial({
          color: this.colors.line, linewidth: 1, worldUnits: false, transparent: true, opacity: 0.4, depthWrite: false,
        });
        inst.edges = inst.meshes.map((mesh) => {
          const geom = new LineSegmentsGeometry().fromEdgesGeometry(new THREE.EdgesGeometry(mesh.geometry, 28));
          const seg = new LineSegments2(geom, this.ghostEdgeMaterial);
          seg.layers.set(GUIDE_LAYER);
          mesh.add(seg);
          return seg;
        });
      }
      for (const seg of inst.edges || []) seg.visible = inst.ghost;
    }
  }

  // Hide see-through parts for a pass; returns a function that restores them.
  _hideGhosts() {
    const hidden = [...this.instances.values()].filter((i) => i.ghost && i.object.visible).map((i) => i.object);
    hidden.forEach((o) => { o.visible = false; });
    return () => hidden.forEach((o) => { o.visible = true; });
  }

  // Thin guide lines from each moving part's start pose to its seat.
  setGuides(moves, widthPx = 1.6) {
    for (const g of [...this.guides.children]) { g.geometry.dispose(); g.material.dispose(); this.guides.remove(g); }
    for (const move of moves || []) {
      for (const name of move.parts) {
        const inst = this.instances.get(name);
        if (!inst) continue;
        const c = inst.restBox.getCenter(new THREE.Vector3());
        const pts = [];
        for (const p of move.path) pts.push(...c.clone().add(cadToWorld(p)).toArray());
        const geom = new LineGeometry();
        geom.setPositions(pts);
        const mat = new LineMaterial({ color: this.colors.guide, linewidth: widthPx, worldUnits: false });
        const line = new Line2(geom, mat);
        line.layers.set(GUIDE_LAYER);
        line.computeLineDistances();
        this.guides.add(line);
      }
    }
  }

  // World-space box of an instance at a CAD offset (translation-only motion).
  boxAt(name, offset) {
    const inst = this.instances.get(name);
    return inst.restBox.clone().translate(cadToWorld(offset || [0, 0, 0]));
  }

  // Wires along their routes (assembled CAD mm), drawn to `frac` of their
  // length, with a dark outline so white and black wires both read.
  setWires(wires, widthPx = 3.2) {
    for (const g of [...this.wireGroup.children]) { g.geometry.dispose(); g.material.dispose(); this.wireGroup.remove(g); }
    for (const w of wires || []) {
      const pts = partialRoute(w.route, w.frac).map(cadToWorld);
      if (pts.length < 2) continue;
      const flat = pts.flatMap((p) => p.toArray());
      [[this.colors.line, widthPx + 2, 0], [w.hex, widthPx, 1]].forEach(([color, width, order]) => {
        const geom = new LineGeometry();
        geom.setPositions(flat);
        const line = new Line2(geom, new LineMaterial({ color, linewidth: width, worldUnits: false }));
        line.layers.set(GUIDE_LAYER);
        line.renderOrder = 10 + order;
        this.wireGroup.add(line);
      });
    }
  }

  wireBoxes(wires) {
    return (wires || []).flatMap((w) => w.route.map((p) => new THREE.Box3().setFromPoints([cadToWorld(p)])));
  }

  boxesFor(offsets, names) {
    const list = names ? names.filter((n) => offsets.has(n)) : [...offsets.keys()];
    return list.map((n) => this.boxAt(n, offsets.get(n)));
  }

  // Fit the orthographic camera to boxes from CAD azimuth (0 = front, from -Y,
  // 90 = right, from +X) and elevation, filling `fill` of the viewport.
  fit(boxes, { az = 35, el = 28, fill = 0.86, aspect } = {}) {
    if (!boxes.length) return null;
    const a = THREE.MathUtils.degToRad(az);
    const e = THREE.MathUtils.degToRad(Math.max(-89, Math.min(89, el)));
    const z = cadToWorld([Math.sin(a) * Math.cos(e), -Math.cos(a) * Math.cos(e), Math.sin(e)]).normalize();
    const x = new THREE.Vector3(0, 1, 0).cross(z).normalize();
    const y = z.clone().cross(x);
    const lo = [Infinity, Infinity, Infinity];
    const hi = [-Infinity, -Infinity, -Infinity];
    const p = new THREE.Vector3();
    for (const b of boxes) {
      for (let k = 0; k < 8; k++) {
        p.set(k & 1 ? b.max.x : b.min.x, k & 2 ? b.max.y : b.min.y, k & 4 ? b.max.z : b.min.z);
        const q = [p.dot(x), p.dot(y), p.dot(z)];
        for (let j = 0; j < 3; j++) { lo[j] = Math.min(lo[j], q[j]); hi[j] = Math.max(hi[j], q[j]); }
      }
    }
    const asp = aspect || this.canvas.clientWidth / Math.max(1, this.canvas.clientHeight);
    let halfW = Math.max(1e-3, (hi[0] - lo[0]) / 2) / fill;
    let halfH = Math.max(1e-3, (hi[1] - lo[1]) / 2) / fill;
    if (halfW / halfH < asp) halfW = halfH * asp; else halfH = halfW / asp;
    const target = x.clone().multiplyScalar((lo[0] + hi[0]) / 2)
      .addScaledVector(y, (lo[1] + hi[1]) / 2).addScaledVector(z, (lo[2] + hi[2]) / 2);
    const radius = Math.max(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]);
    const cam = this.camera;
    cam.left = -halfW; cam.right = halfW; cam.top = halfH; cam.bottom = -halfH;
    cam.zoom = 1;
    cam.position.copy(target).addScaledVector(z, radius * 3 + 10);
    cam.near = 0.01;
    cam.far = radius * 8 + 40;
    cam.up.set(0, 1, 0);
    cam.lookAt(target);
    cam.updateProjectionMatrix();
    return target;
  }

  _ensureTargets(w, h) {
    if (this.targets && this.targets.w === w && this.targets.h === h) return this.targets;
    if (this.targets) for (const t of ['color', 'info', 'pick']) this.targets[t].dispose();
    const depthTexture = new THREE.DepthTexture(w, h);
    depthTexture.type = THREE.FloatType;
    this.targets = {
      w, h,
      color: new THREE.WebGLRenderTarget(w, h, { type: THREE.HalfFloatType, samples: 4 }),
      info: new THREE.WebGLRenderTarget(w, h, {
        type: THREE.HalfFloatType, depthTexture,
        minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
      }),
      pick: new THREE.WebGLRenderTarget(w, h, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter }),
    };
    return this.targets;
  }

  _useMaterial(which) {
    const ghost = { flat: 'ghostFlat', shaded: 'ghostShaded' }[which];
    for (const inst of this.instances.values()) {
      const material = inst[inst.ghost && ghost ? ghost : which];
      for (const m of inst.meshes) m.material = material;
    }
  }

  _aimLights() {
    const cam = this.camera;
    const target = new THREE.Vector3();
    cam.getWorldDirection(target);
    const right = new THREE.Vector3().crossVectors(target, cam.up).normalize();
    const up = new THREE.Vector3().crossVectors(right, target).normalize();
    const center = cam.position.clone().addScaledVector(target, (cam.far + cam.near) / 4);
    this.key.target.position.copy(center);
    this.key.position.copy(center).addScaledVector(target, -100).addScaledVector(up, 70).addScaledVector(right, -45);
    this.fill.target.position.copy(center);
    this.fill.position.copy(center).addScaledVector(target, -100).addScaledVector(up, -20).addScaledVector(right, 80);
  }

  render() {
    const r = this.renderer;
    const size = r.getDrawingBufferSize(new THREE.Vector2());
    const t = this._ensureTargets(size.x, size.y);
    const cam = this.camera;
    for (const g of [...this.guides.children, ...this.wireGroup.children]) g.material.resolution.set(size.x, size.y);
    if (this.ghostEdgeMaterial) this.ghostEdgeMaterial.resolution.set(size.x, size.y);
    this._aimLights();

    const line = this.style === 'line';
    this._useMaterial(line ? 'flat' : 'shaded');
    r.setRenderTarget(t.color);
    r.setClearColor(0x000000, 0);
    r.clear();
    r.render(this.scene, cam);

    cam.layers.disable(GUIDE_LAYER);
    const restore = this._hideGhosts();
    this._useMaterial('info');
    this.pickUniform.value = 0;
    r.setRenderTarget(t.info);
    r.clear();
    r.render(this.scene, cam);
    restore();
    cam.layers.enable(GUIDE_LAYER);

    const u = this.composite.uniforms;
    const worldPerPx = (cam.top - cam.bottom) / cam.zoom / size.y;
    u.tColor.value = t.color.texture;
    u.tInfo.value = t.info.texture;
    u.tDepth.value = t.info.depthTexture;
    u.uTexel.value.set(1 / size.x, 1 / size.y);
    u.uDepthThr.value = (3 * worldPerPx) / (cam.far - cam.near);
    u.uLineMix.value = line ? 1 : 0.6;
    r.setRenderTarget(null);
    r.clear();
    r.render(this.quadScene, this.quadCamera);
  }

  // Instance ids per pixel (row 0 = top), for label anchors and occupancy.
  pick() {
    const r = this.renderer;
    const size = r.getDrawingBufferSize(new THREE.Vector2());
    const t = this._ensureTargets(size.x, size.y);
    this.camera.layers.disable(GUIDE_LAYER);
    const restore = this._hideGhosts();
    this._useMaterial('info');
    this.pickUniform.value = 1;
    r.setRenderTarget(t.pick);
    r.setClearColor(0x000000, 0);
    r.clear();
    r.render(this.scene, this.camera);
    restore();
    this.pickUniform.value = 0;
    this.camera.layers.enable(GUIDE_LAYER);
    const buf = new Uint8Array(size.x * size.y * 4);
    r.readRenderTargetPixels(t.pick, 0, 0, size.x, size.y, buf);
    r.setRenderTarget(null);
    const ids = new Uint16Array(size.x * size.y);
    for (let yy = 0; yy < size.y; yy++) {
      const src = (size.y - 1 - yy) * size.x;
      for (let xx = 0; xx < size.x; xx++) {
        const k = (src + xx) * 4;
        ids[yy * size.x + xx] = buf[k + 3] ? buf[k] + buf[k + 1] * 256 : 0;
      }
    }
    return { width: size.x, height: size.y, ids };
  }

  setSize(width, height) {
    this.renderer.setSize(width, height, false);
  }
}
