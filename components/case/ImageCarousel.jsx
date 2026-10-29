import React, { useState } from 'react';

const placeholder = 'repeating-linear-gradient(135deg, var(--gray-50) 0 11px, var(--gray-150) 11px 22px)';

/**
 * ImageCarousel — a short sequence of screens in one slot: a walkthrough,
 * a multi-step state, a before → during → after. One frame, ‹ › buttons,
 * bar indicators and a mono "02 / 03 · Label" caption. Not autoplaying.
 */
export function ImageCarousel({
  images = [],
  startIndex = 0,
  ratio = '9 / 20',
  label = 'Screens',
  style,
  ...rest
}) {
  const n = Math.max(images.length, 1);
  const [i, setI] = useState(Math.min(Math.max(startIndex, 0), n - 1));
  const go = (k) => setI(Math.max(0, Math.min(n - 1, k)));
  const navBtn = (dis) => ({
    width: 44, height: 44, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0,
    border: `1px solid ${dis ? 'var(--border-hairline)' : 'var(--border-default)'}`, borderRadius: 'var(--radius)',
    background: 'var(--surface-page)', color: dis ? 'var(--text-disabled)' : 'var(--text-primary)',
    fontSize: 18, lineHeight: 1, cursor: dis ? 'default' : 'pointer',
  });
  const cur = images[i] || {};
  return (
    <figure
      aria-roledescription="carousel"
      aria-label={label}
      style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 12, ...style }}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(i - 1); if (e.key === 'ArrowRight') go(i + 1); }}
      {...rest}
    >
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: ratio, border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', background: 'var(--surface-page)' }}>
        <div style={{ display: 'flex', width: `${n * 100}%`, height: '100%', transform: `translateX(-${(i * 100) / n}%)`, transition: 'transform var(--dur-slow, 300ms) var(--ease-out, ease)' }}>
          {(images.length ? images : [{}]).map((img, k) => (
            img.src
              ? <img key={k} src={img.src} alt={img.alt || ''} aria-hidden={k !== i} style={{ display: 'block', flex: `0 0 ${100 / n}%`, width: `${100 / n}%`, height: '100%', objectFit: 'cover' }} />
              : <div key={k} aria-hidden={k !== i} style={{ flex: `0 0 ${100 / n}%`, height: '100%', background: placeholder, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>[ {img.label || 'Screen'} ]</div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <button type="button" aria-label="Previous" disabled={i === 0} onClick={() => go(i - 1)} style={navBtn(i === 0)}>‹</button>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div role="tablist" aria-label={label} style={{ display: 'flex', gap: 2 }}>
            {(images.length ? images : [{}]).map((img, k) => (
              <button key={k} type="button" role="tab" aria-selected={k === i} aria-label={img.label || `Screen ${k + 1}`} onClick={() => go(k)}
                style={{ width: 32, height: 24, padding: 0, border: 0, background: 'transparent', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <span aria-hidden="true" style={{ display: 'block', width: '100%', height: 2, background: k === i ? 'var(--text-primary)' : 'var(--border-default)', transition: 'background-color var(--dur-base, 180ms) var(--ease-out, ease)' }} />
              </button>
            ))}
          </div>
          <span aria-live="polite" style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}{cur.label ? ` · ${cur.label}` : ''}
          </span>
        </div>
        <button type="button" aria-label="Next" disabled={i === n - 1} onClick={() => go(i + 1)} style={navBtn(i === n - 1)}>›</button>
      </div>
    </figure>
  );
}
