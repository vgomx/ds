import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '../core/Badge.jsx';

const stripes = 'repeating-linear-gradient(135deg, var(--gray-50) 0 11px, var(--gray-150) 11px 22px)';
const monoLabel = { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' };

function Layer({ img, fallback, style }) {
  if (img && img.src) {
    return <img src={img.src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...style }} />;
  }
  return (
    <div style={{ position: 'absolute', inset: 0, background: style && style.background ? style.background : 'var(--surface-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <span style={monoLabel}>[ {fallback} ]</span>
    </div>
  );
}

/**
 * CompareSlider — before and after in one frame, split by a draggable
 * handle. The whole image is the hit area; it is a native range input,
 * so arrows, Page Up/Down and Home/End work. Each label fades out once
 * its side is under 12% of the frame.
 */
export function CompareSlider({
  before,
  after,
  labels = { before: 'Before', after: 'After' },
  start = 50,
  ratio = '16 / 9',
  caption,
  style,
  ...rest
}) {
  const [pos, setPos] = useState(start);
  const [animating, setAnimating] = useState(false);
  const frameRef = useRef(null);
  const timeoutsRef = useRef([]);
  const hintedRef = useRef(false);

  const clearHintTimers = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const cancelHint = () => {
    if (hintedRef.current && timeoutsRef.current.length === 0) return;
    hintedRef.current = true;
    clearHintTimers();
    setAnimating(false);
  };

  // A quick back-and-forth on the handle the first time it scrolls into view,
  // so dragability reads at a glance instead of needing to be discovered by
  // trial. Settles back on `start`; cancelled the moment someone touches it.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia || !('IntersectionObserver' in window)) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const el = frameRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hintedRef.current) return;
      hintedRef.current = true;
      observer.disconnect();
      const run = (delay, fn) => timeoutsRef.current.push(setTimeout(fn, delay));
      run(500, () => { setAnimating(true); setPos(start - 10); });
      run(720, () => setPos(start + 10));
      run(940, () => setPos(start - 5));
      run(1140, () => setPos(start));
      run(1380, () => { setAnimating(false); timeoutsRef.current = []; });
    }, { threshold: 0.6 });

    observer.observe(el);
    return () => { observer.disconnect(); clearHintTimers(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fade = (on) => ({ opacity: on ? 1 : 0, transition: 'opacity var(--dur-base, 180ms) var(--ease-out, ease)', pointerEvents: 'none' });
  const alt = [before && before.alt && `Before: ${before.alt}`, after && after.alt && `After: ${after.alt}`].filter(Boolean).join('. ');
  const handleTransition = animating ? 'left 220ms ease-in-out' : 'none';

  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 12, ...style }} {...rest}>
      <div
        ref={frameRef}
        role="img"
        aria-label={alt || 'Before and after comparison'}
        style={{ position: 'relative', aspectRatio: ratio, overflow: 'hidden', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', background: 'var(--surface-sunken)' }}
      >
        <Layer img={after} fallback={labels.after} />
        <Layer img={before} fallback={labels.before} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, background: stripes, transition: animating ? 'clip-path 220ms ease-in-out' : 'none' }} />
        <div style={{ position: 'absolute', top: 12, left: 12, ...fade(pos > 12) }}><Badge status="archived">{labels.before}</Badge></div>
        <div style={{ position: 'absolute', top: 12, right: 12, ...fade(pos < 88) }}><Badge status="live">{labels.after}</Badge></div>
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, bottom: 0, left: `${pos}%`, width: 2, marginLeft: -1, background: 'var(--text-primary)', pointerEvents: 'none', transition: handleTransition }} />
        <div aria-hidden="true" style={{
          position: 'absolute', top: '50%', left: `${pos}%`, width: 44, height: 44, margin: '-22px 0 0 -22px',
          boxSizing: 'border-box', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius)',
          background: 'var(--surface-page)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 6, fontSize: 16, lineHeight: 1, color: 'var(--text-primary)', pointerEvents: 'none', transition: handleTransition,
        }}><span>‹</span><span>›</span></div>
        <input
          type="range" min="0" max="100" step="1" value={pos}
          onChange={(e) => { cancelHint(); setPos(Number(e.target.value)); }}
          onPointerDown={cancelHint}
          onKeyDown={cancelHint}
          aria-label="Drag to compare before and after"
          aria-valuetext={`${pos}% ${labels.before.toLowerCase()}`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', margin: 0, opacity: 0, cursor: 'ew-resize' }}
        />
      </div>
      {caption && (
        <figcaption style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px 24px', fontSize: 13, lineHeight: 1.55, color: 'var(--text-secondary)' }}>
          {caption.before && <span><strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{labels.before}</strong> — {caption.before}</span>}
          {caption.after && <span><strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{labels.after}</strong> — {caption.after}</span>}
        </figcaption>
      )}
    </figure>
  );
}
