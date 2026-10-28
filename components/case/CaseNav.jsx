import React, { useState } from 'react';

function Link({ item, dir, onNavigate }) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const next = dir === 'next';
  const arrow = (
    <span aria-hidden="true" style={{ display: 'inline-block', fontSize: 18, lineHeight: 1, transform: `translateX(${hover ? (next ? 4 : -4) : 0}px)`, transition: 'transform var(--dur-base, 180ms) var(--ease-out, ease)' }}>
      {next ? '›' : '‹'}
    </span>
  );
  return (
    <a
      href={item.href || '#'}
      onClick={onNavigate ? (e) => onNavigate(item, dir, e) : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '28px 0', marginLeft: next ? 'auto' : 0,
        textDecoration: 'none', textAlign: next ? 'right' : 'left',
        color: hover ? 'var(--text-primary)' : 'var(--text-secondary)',
        outline: focus ? 'var(--ring-width, 2px) solid var(--ring)' : 'none', outlineOffset: 'var(--ring-offset, 2px)',
        transition: 'color var(--dur-fast, 120ms) var(--ease-out, ease)',
      }}
    >
      {!next && arrow}
      <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{next ? 'Next' : 'Previous'}</span>
        <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: 'var(--tracking-snug)' }}>{item.title}</span>
      </span>
      {next && arrow}
    </a>
  );
}

/**
 * CaseNav — previous / next case at the end of a case study, so the
 * reader moves on instead of bouncing. Omit `prev` on the first case.
 */
export function CaseNav({ prev, next, onNavigate, style, ...rest }) {
  return (
    <nav aria-label="More cases" style={{ borderTop: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, ...style }} {...rest}>
      {prev && <Link item={prev} dir="prev" onNavigate={onNavigate} />}
      {next && <Link item={next} dir="next" onNavigate={onNavigate} />}
    </nav>
  );
}
