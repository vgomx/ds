import React, { useEffect, useRef, useState } from 'react';

const POP_W = 260;
const mono = { fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' };

function CalloutBody({ c, index, total }) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ ...mono, fontSize: 11, color: 'var(--text-muted)' }}>{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <span style={{ flex: 1, height: 1, background: 'var(--border-hairline)' }} />
      </div>
      <h4 style={{ fontSize: 17, lineHeight: 1.3, fontWeight: 600, letterSpacing: '-0.01em', margin: 0 }}>{c.title}</h4>
      <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0 }}>{c.body}</p>
    </>
  );
}

/**
 * AnnotatedScreen — one screen with up to four numbered markers. Hover,
 * focus or tap a marker (or its row underneath) to open its callout.
 * Exactly one is open; the first opens on load. With placement "auto"
 * the card opens on the side with room and drops under the screen when
 * neither side fits (phones).
 */
export function AnnotatedScreen({
  image,
  callouts = [],
  ratio = '9 / 16',
  width = 340,
  placement = 'auto',
  defaultIndex = 0,
  style,
  ...rest
}) {
  const items = callouts.slice(0, 4);
  const [active, setActive] = useState(Math.min(defaultIndex, Math.max(0, items.length - 1)));
  const [side, setSide] = useState(placement === 'left' ? 'left' : 'right');
  const stageRef = useRef(null);
  const frameRef = useRef(null);
  const c = items[active];

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const measure = () => {
      const stage = stageRef.current, frame = frameRef.current;
      if (!stage || !frame || !c) return;
      const s = stage.getBoundingClientRect(), f = frame.getBoundingClientRect();
      const mx = f.left + (f.width * c.x) / 100;
      const need = POP_W + 38;
      const fitsR = s.right - mx >= need, fitsL = mx - s.left >= need;
      if (placement === 'right') setSide(fitsR ? 'right' : 'inline');
      else if (placement === 'left') setSide(fitsL ? 'left' : 'inline');
      else if (c.x > 50) setSide(fitsL ? 'left' : fitsR ? 'right' : 'inline');
      else setSide(fitsR ? 'right' : fitsL ? 'left' : 'inline');
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active, placement, c && c.x]);

  if (!items.length) return null;
  const pick = (i) => () => { if (i !== active) setActive(i); };
  const top = Math.min(Math.max(c.y, 18), 82);

  return (
    <figure style={{ margin: 0, ...style }} {...rest}>
      <div ref={stageRef} style={{ padding: '56px 24px', background: 'var(--surface-subtle)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', display: 'flex', justifyContent: 'center' }}>
        <div ref={frameRef} style={{ position: 'relative', width, maxWidth: '100%' }}>
          {image && image.src
            ? <img src={image.src} alt={image.alt || ''} style={{ display: 'block', width: '100%', height: 'auto', border: '1px solid var(--border-default)', borderRadius: 'var(--radius)' }} />
            : <div style={{ aspectRatio: ratio, border: '1px solid var(--border-default)', borderRadius: 'var(--radius)', background: 'repeating-linear-gradient(135deg, var(--paper) 0 11px, var(--gray-100) 11px 22px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ ...mono, fontSize: 11, textTransform: 'uppercase', color: 'var(--text-muted)' }}>[ Screen ]</span>
              </div>}
          {items.map((d, i) => {
            const on = i === active;
            return (
              <button
                key={i} type="button"
                aria-label={`Callout ${i + 1}: ${d.title}`}
                aria-expanded={on}
                onMouseEnter={pick(i)} onFocus={pick(i)} onClick={pick(i)}
                style={{ position: 'absolute', left: `${d.x}%`, top: `${d.y}%`, width: 44, height: 44, margin: '-22px 0 0 -22px', padding: 0, border: 0, background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: on ? 3 : 2 }}
              >
                <span aria-hidden="true" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28,
                  borderRadius: 'var(--radius-pill)', background: on ? 'var(--green-600)' : 'var(--ink-900)', color: 'var(--paper)',
                  boxShadow: `0 0 0 2px var(--paper)${on ? ', 0 0 0 4px var(--green-600)' : ''}`,
                  ...mono, fontSize: 11, fontWeight: 500, letterSpacing: '0.04em',
                  transition: 'background-color var(--dur-fast, 120ms) var(--ease-out, ease)',
                }}>{String(i + 1).padStart(2, '0')}</span>
              </button>
            );
          })}
          {side !== 'inline' && (
            <div role="status" style={{
              position: 'absolute', top: `${top}%`, transform: 'translateY(-50%)',
              ...(side === 'left' ? { right: `calc(${100 - c.x}% + 30px)` } : { left: `calc(${c.x}% + 30px)` }),
              width: POP_W, boxSizing: 'border-box', padding: 20, background: 'var(--surface-page)',
              border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-pop)',
              display: 'flex', flexDirection: 'column', gap: 10, zIndex: 4, pointerEvents: 'none',
            }}>
              <CalloutBody c={c} index={active} total={items.length} />
            </div>
          )}
        </div>
      </div>
      {side === 'inline' && (
        <div role="status" style={{ padding: 20, border: '1px solid var(--border-hairline)', borderTop: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <CalloutBody c={c} index={active} total={items.length} />
        </div>
      )}
      <ol aria-label="Callouts" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: 1, background: 'var(--border-hairline)', border: '1px solid var(--border-hairline)', borderTop: 0 }}>
        {items.map((d, i) => {
          const on = i === active;
          return (
            <li key={i} style={{ flex: '1 1 220px', minWidth: 0, background: 'var(--surface-page)' }}>
              <button
                type="button" onMouseEnter={pick(i)} onFocus={pick(i)} onClick={pick(i)} aria-pressed={on}
                style={{
                  width: '100%', minHeight: 64, boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 14,
                  padding: '16px 20px', border: 0, borderTop: `2px solid ${on ? 'var(--green-600)' : 'transparent'}`,
                  background: on ? 'var(--surface-subtle)' : 'var(--surface-page)', color: 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)', cursor: 'pointer', textAlign: 'left',
                }}
              >
                <span style={{ ...mono, fontSize: 11, color: 'var(--text-muted)' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 15, fontWeight: 500 }}>{d.title}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
