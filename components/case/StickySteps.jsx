import React, { useEffect, useRef, useState } from 'react';

const stripes = 'repeating-linear-gradient(135deg, var(--gray-50) 0 11px, var(--gray-150) 11px 22px)';
const mono = { fontFamily: 'var(--font-mono)', textTransform: 'uppercase' };

/* Below 900px there is no room for a pinned screen beside the text, so
   the steps stack, each with its own screen. Renders stacked on the
   server and first paint. */
function useWide(query) {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia(query);
    const update = () => setWide(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);
  return wide;
}

function Screen({ image, ratio, label }) {
  if (image && image.src) {
    return <img src={image.src} alt={image.alt || ''} loading="lazy" decoding="async" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />;
  }
  return (
    <div style={{ width: '100%', height: '100%', aspectRatio: ratio, background: stripes, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ ...mono, fontSize: 11, letterSpacing: '0.08em', color: 'var(--text-muted)' }}>[ {label || 'Screen'} ]</span>
    </div>
  );
}

/**
 * StickySteps — a short sequence of screens told as scrolling steps.
 * The screen stays pinned on the left while the steps scroll past on the
 * right; whichever step crosses the middle of the viewport is active,
 * its screen cross-fades in and the other steps fade back. Stacks on
 * narrow viewports, one screen per step.
 */
export function StickySteps({
  steps = [],
  mediaWidth = 300,
  ratio = '9 / 20',
  label = 'Screens',
  stepSpace = '28vh',
  style,
  ...rest
}) {
  const wide = useWide('(min-width: 900px)');
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  // The active step is the last one whose text has reached the middle of
  // the viewport (the first one until any has).
  useEffect(() => {
    if (!wide || typeof window === 'undefined') return undefined;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      let next = 0;
      refs.current.forEach((el, i) => {
        const text = el && el.firstElementChild;
        if (text && text.getBoundingClientRect().top <= mid) next = i;
      });
      setActive((cur) => (cur === next ? cur : next));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure); };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [wide, steps.length]);

  const eyebrow = (s, i) => (
    <span style={{ ...mono, fontSize: 11, letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
      {String(i + 1).padStart(2, '0')}{s.eyebrow ? ` · ${s.eyebrow}` : ''}
    </span>
  );
  const text = (s, i) => (
    <>
      {eyebrow(s, i)}
      <h4 style={{ fontSize: 22, lineHeight: 1.2, fontWeight: 600, letterSpacing: 'var(--tracking-snug)', margin: 0 }}>{s.title}</h4>
      {s.body && <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{s.body}</p>}
    </>
  );
  const frame = { position: 'relative', overflow: 'hidden', aspectRatio: ratio, border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', background: 'var(--surface-page)' };

  if (!wide) {
    return (
      <ol aria-label={label} style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 48, ...style }} {...rest}>
        {steps.map((s, i) => (
          <li key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ ...frame, width: '100%', maxWidth: mediaWidth, marginBottom: 8 }}><Screen image={s.image} ratio={ratio} label={s.eyebrow || s.title} /></div>
            {text(s, i)}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', ...style }} {...rest}>
      <div style={{ flex: `0 0 ${mediaWidth}px`, position: 'sticky', top: 'var(--case-sticky-top, 24px)' }}>
        <div aria-live="polite" style={frame}>
          {steps.map((s, i) => (
            <div key={i} aria-hidden={i !== active} style={{ position: 'absolute', inset: 0, opacity: i === active ? 1 : 0, transition: 'opacity var(--dur-slow, 300ms) var(--ease-out, ease)' }}>
              <Screen image={s.image} ratio={ratio} label={s.eyebrow || s.title} />
            </div>
          ))}
        </div>
        <div role="presentation" style={{ display: 'flex', gap: 2, marginTop: 12 }}>
          {steps.map((_, i) => (
            <span key={i} style={{ flex: 1, height: 2, background: i === active ? 'var(--text-primary)' : 'var(--border-default)', transition: 'background-color var(--dur-base, 180ms) var(--ease-out, ease)' }} />
          ))}
        </div>
      </div>
      <ol aria-label={label} style={{ flex: '1 1 0', minWidth: 0, listStyle: 'none', margin: 0, padding: 0 }}>
        {steps.map((s, i) => (
          <li
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            data-step={i}
            aria-current={i === active ? 'step' : undefined}
            style={{
              display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 520,
              paddingTop: i === 0 ? 0 : stepSpace, paddingBottom: i === steps.length - 1 ? stepSpace : 0,
              opacity: i === active ? 1 : 0.35, transition: 'opacity var(--dur-slow, 300ms) var(--ease-out, ease)',
            }}
          >
            {text(s, i)}
          </li>
        ))}
      </ol>
    </div>
  );
}
