import React, { useEffect, useState } from 'react';

const mono = { fontFamily: 'var(--font-mono)', textTransform: 'uppercase' };

/* Resolve "auto" from the viewport: open ≥1500px, collapsed 900–1499px,
   hidden below 900px. Renders collapsed on the server and first paint. */
function useNavMode(mode) {
  const [auto, setAuto] = useState('collapsed');
  useEffect(() => {
    if (mode !== 'auto' || typeof window === 'undefined' || !window.matchMedia) return undefined;
    const wide = window.matchMedia('(min-width: 1500px)');
    const mid = window.matchMedia('(min-width: 900px)');
    const update = () => setAuto(wide.matches ? 'open' : mid.matches ? 'collapsed' : 'hidden');
    update();
    wide.addEventListener('change', update);
    mid.addEventListener('change', update);
    return () => {
      wide.removeEventListener('change', update);
      mid.removeEventListener('change', update);
    };
  }, [mode]);
  return mode === 'auto' ? auto : mode;
}

/**
 * SectionNav — the case-study side nav. Numbered sections with a 2px
 * rail each (done = ink, current = filling as you read, upcoming =
 * hairline), and a footer with the % read and the minutes left. The
 * rails already show progress, so the footer is text only. Open with
 * labels on wide screens, collapsed to numbers in between (hover or
 * keyboard focus opens it over the page), hidden on phones (use
 * ReadingBar there).
 */
export function SectionNav({
  sections = [],
  activeId,
  sectionProgress = 0,
  progress = 0,
  minutesLeft,
  mode = 'auto',
  openOnHover = true,
  onNavigate,
  label = 'Case sections',
  style,
  ...rest
}) {
  const resolved = useNavMode(mode);
  const [hover, setHover] = useState(null);
  const [focus, setFocus] = useState(null);
  const [peek, setPeek] = useState(false);
  if (resolved === 'hidden') return null;
  // Collapsed opens while hovered or while focus is inside, drawn over the page.
  const peeking = resolved === 'collapsed' && openOnHover && peek;
  const open = resolved === 'open' || peeking;
  const activeIndex = Math.max(0, sections.findIndex((s) => s.id === activeId));
  const pct = Math.round(Math.max(0, Math.min(100, progress)));

  return (
    <nav
      aria-label={label}
      onMouseEnter={() => setPeek(true)}
      onMouseLeave={() => setPeek(false)}
      onFocus={() => setPeek(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPeek(false); }}
      style={{
        display: 'flex', flexDirection: 'column',
        width: 'auto',
        minWidth: open ? 148 : 0,
        background: 'var(--surface-page)',
        border: '1px solid var(--border-hairline)',
        boxShadow: peeking ? 'var(--shadow-pop)' : 'none',
        transition: 'box-shadow var(--dur-fast, 120ms) var(--ease-out, ease)',
        ...style,
      }}
      {...rest}
    >
      {sections.map((s, i) => {
        const current = i === activeIndex;
        const fill = i < activeIndex ? 100 : current ? Math.max(4, Math.min(100, sectionProgress)) : 0;
        return (
          <a
            key={s.id}
            href={s.href || `#${s.id}`}
            aria-label={s.label}
            aria-current={current ? 'location' : undefined}
            onClick={onNavigate ? (e) => onNavigate(s.id, e) : undefined}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setFocus(i)}
            onBlur={() => setFocus(null)}
            style={{
              position: 'relative', display: 'flex', alignItems: 'center', gap: 8,
              minHeight: 28, boxSizing: 'border-box', padding: '6px 8px 6px 10px',
              textDecoration: 'none',
              /* Focus gets its own, slightly deeper grey fill rather than a
                 boxed outline — a 2px ring on a 28px row read as heavy. */
              background: focus === i ? 'var(--surface-sunken)' : current || hover === i ? 'var(--surface-subtle)' : 'var(--surface-page)',
              outline: 'none',
              transition: 'background-color var(--dur-fast, 120ms) var(--ease-out, ease)',
            }}
          >
            <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'var(--border-hairline)' }}>
              <span style={{ display: 'block', width: 2, height: `${fill}%`, background: 'var(--text-primary)', transition: 'height var(--dur-base, 180ms) var(--ease-out, ease)' }} />
            </span>
            <span style={{ ...mono, fontSize: 9, letterSpacing: '0.1em', color: 'var(--text-muted)', width: 16, flexShrink: 0 }}>
              {s.number || String(i + 1).padStart(2, '0')}
            </span>
            {open && (
              <span style={{ ...mono, fontSize: 10, letterSpacing: '0.08em', whiteSpace: 'nowrap', color: current ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                {s.label}
              </span>
            )}
          </a>
        );
      })}
      <div style={{
        padding: '7px 10px', borderTop: '1px solid var(--border-hairline)',
        ...mono, fontSize: 9, letterSpacing: '0.1em', color: 'var(--text-muted)', whiteSpace: 'nowrap',
      }}>
        {/* Fixed-width, left-aligned like the row numbers above (so "0%"
            lines up under "01" instead of drifting right) and capped at
            max "100%" so the row never reflows the nav's auto width as
            progress crosses digit boundaries. letterSpacing reset to
            normal: tracking adds real width per character, which would
            otherwise make a 3-char value measure wider than `4ch`. */}
        <span style={{ display: 'inline-block', minWidth: '4ch', letterSpacing: 'normal', color: 'var(--text-primary)' }}>{pct}%</span>
        {open && minutesLeft != null && <span> · {minutesLeft} min left</span>}
      </div>
    </nav>
  );
}
