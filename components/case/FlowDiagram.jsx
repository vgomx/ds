import React, { useState } from 'react';
import { SegmentedControl } from '../core/SegmentedControl.jsx';

const SIZE = { step: [136, 56], decision: [120, 80], exit: [128, 48] };
const INK = 'var(--text-primary)';
const OFF = 'var(--border-default)';

/* A rounded diamond as a clip path, so decision nodes share the
   system's 2px-ish softness instead of sharp polygon tips. */
function diamondPath(w, h, t = 0.12) {
  const P = [[w / 2, 0], [w, h / 2], [w / 2, h], [0, h / 2]];
  const pt = (a, b) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const f = (n) => n.toFixed(1);
  let d = '';
  P.forEach((v, i) => {
    const a = pt(v, P[(i + 3) % 4]);
    const b = pt(v, P[(i + 1) % 4]);
    d += `${i === 0 ? 'M' : 'L'} ${f(a[0])} ${f(a[1])} Q ${f(v[0])} ${f(v[1])} ${f(b[0])} ${f(b[1])} `;
  });
  return `${d}Z`;
}

function box(n) {
  const [dw, dh] = SIZE[n.type] || SIZE.step;
  const w = n.w || dw, h = n.h || dh;
  return { x: n.x, y: n.y, w, h, cx: n.x + w / 2, cy: n.y + h / 2, r: n.x + w, b: n.y + h };
}

/* Orthogonal route: straight when aligned, elbow when the target is
   further along, down-then-across when it sits below. */
function route(f, t) {
  if (Math.abs(f.cy - t.cy) < 2 && t.x >= f.r) return [[f.r, f.cy], [t.x, t.cy]];
  if (t.x >= f.r) {
    const mx = (f.r + t.x) / 2;
    return [[f.r, f.cy], [mx, f.cy], [mx, t.cy], [t.x, t.cy]];
  }
  if (t.y >= f.b) {
    if (Math.abs(f.cx - t.cx) < 2) return [[f.cx, f.b], [t.cx, t.y]];
    const my = (f.b + t.y) / 2;
    return [[f.cx, f.b], [f.cx, my], [t.cx, my], [t.cx, t.y]];
  }
  return [[f.cx, f.y], [t.cx, t.b]];
}

/**
 * FlowDiagram — a journey drawn from data: steps (boxes), decisions
 * (rounded green diamonds) and exits (dashed boxes), joined by
 * orthogonal connectors. Name a few paths and the reader can trace each
 * one; the rest of the diagram fades back.
 */
export function FlowDiagram({
  nodes = [],
  edges = [],
  paths = [],
  defaultPath,
  width,
  height,
  title = 'Trace a path',
  style,
  ...rest
}) {
  const [pathId, setPathId] = useState(defaultPath || (paths[0] && paths[0].id));
  const uid = React.useId ? React.useId().replace(/[^a-zA-Z0-9_-]/g, '') : 'fd';
  const byId = Object.fromEntries(nodes.map((n) => [n.id, box(n)]));
  const W = width || Math.max(0, ...nodes.map((n) => byId[n.id].r)) + 8;
  const H = height || Math.max(0, ...nodes.map((n) => byId[n.id].b)) + 8;
  const path = paths.find((p) => p.id === pathId);
  const onSet = path ? new Set(path.nodes) : null;
  const isOn = (id) => !onSet || onSet.has(id);

  return (
    <figure style={{ margin: 0, ...style }} {...rest}>
      {paths.length > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{title}</span>
          <SegmentedControl options={paths.map((p) => ({ label: p.label, value: p.id }))} value={pathId} onChange={setPathId} />
        </div>
      )}
      <div style={{ border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', overflowX: 'auto', background: 'var(--surface-page)', padding: '40px 24px' }}>
        <div style={{ position: 'relative', width: W, height: H, margin: '0 auto' }}>
          <svg width={W} height={H} aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
            <defs>
              {[['on', INK], ['off', OFF]].map(([k, col]) => (
                <marker key={k} id={`${uid}-${k}`} viewBox="0 0 8 8" refX="8" refY="4" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                  <path d="M0 0 L8 4 L0 8 Z" fill={col} />
                </marker>
              ))}
            </defs>
            {edges
              .map((e, i) => ({ e, i, on: isOn(e.from) && isOn(e.to) }))
              .sort((a, b) => Number(a.on) - Number(b.on))
              .map(({ e, i, on }) => {
              const f = byId[e.from], t = byId[e.to];
              if (!f || !t) return null;
              const pts = e.points || route(f, t);
              return (
                <polyline
                  key={i}
                  points={pts.map((p) => p.join(',')).join(' ')}
                  fill="none"
                  stroke={on ? INK : OFF}
                  strokeWidth={on && onSet ? 2 : 1}
                  markerEnd={`url(#${uid}-${on ? 'on' : 'off'})`}
                  style={{ transition: 'stroke var(--dur-base, 180ms) var(--ease-out, ease)' }}
                />
              );
            })}
          </svg>
          {nodes.map((n) => {
            const b = byId[n.id];
            const on = isOn(n.id);
            const base = {
              position: 'absolute', left: b.x, top: b.y, width: b.w, height: b.h, boxSizing: 'border-box',
              display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 8,
              fontSize: 14, fontWeight: 500, lineHeight: 1.25, color: on ? INK : 'var(--text-faint)',
              transition: 'color var(--dur-base, 180ms) var(--ease-out, ease), border-color var(--dur-base, 180ms), background-color var(--dur-base, 180ms)',
            };
            if (n.type === 'decision') {
              return (
                <div key={n.id} style={{ ...base, padding: '8px 18px', background: on ? 'var(--green-tint-light)' : 'var(--surface-subtle)', clipPath: `path('${diamondPath(b.w, b.h)}')` }}>
                  {n.label}
                </div>
              );
            }
            return (
              <div key={n.id} style={{ ...base, background: 'var(--surface-page)', borderRadius: 'var(--radius)', border: `1px ${n.type === 'exit' ? 'dashed' : 'solid'} ${on ? 'var(--border-strong)' : 'var(--border-hairline)'}` }}>
                {n.label}
              </div>
            );
          })}
        </div>
      </div>
      {path && path.description && (
        <figcaption role="status" style={{ padding: '16px 20px', border: '1px solid var(--border-hairline)', borderTop: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{path.label}.</strong> {path.description}
        </figcaption>
      )}
    </figure>
  );
}
