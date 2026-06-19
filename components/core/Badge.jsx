import React from 'react';

/* Status → dot + text/border color. The one place a live state may
   earn the accent. */
function statusColors(status, onDark) {
  const accent = onDark ? 'var(--accent-on-dark)' : 'var(--accent)';
  switch (status) {
    case 'live':
      return { dot: accent, fg: accent, border: accent };
    case 'draft':
      return onDark
        ? { dot: 'var(--gray-400)', fg: 'var(--text-inverse-muted)', border: 'var(--border-on-ink-2)' }
        : { dot: 'var(--gray-400)', fg: 'var(--text-secondary)', border: 'var(--border-mute)' };
    case 'archived':
      return onDark
        ? { dot: 'var(--gray-500)', fg: 'var(--gray-500)', border: 'var(--border-on-ink)' }
        : { dot: 'var(--gray-200)', fg: 'var(--text-faint)', border: 'var(--border-hairline)' };
    case 'danger':
      return { dot: onDark ? 'var(--danger-on-dark)' : 'var(--danger)', fg: onDark ? 'var(--danger-on-dark)' : 'var(--danger)', border: onDark ? 'var(--danger-on-dark)' : 'var(--danger)' };
    default:
      return onDark
        ? { dot: 'var(--gray-400)', fg: 'var(--text-inverse-muted)', border: 'var(--border-on-ink-2)' }
        : { dot: 'var(--gray-400)', fg: 'var(--text-muted)', border: 'var(--border-mute)' };
  }
}

/**
 * Badge — a mono status pill with a leading dot. Outline-only; the dot
 * carries the signal. "Live" is where the accent is allowed to surface.
 */
export function Badge({ children, status = 'neutral', onDark = false, dot = true, style, ...rest }) {
  const c = statusColors(status, onDark);
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        lineHeight: 1,
        padding: '6px 12px',
        borderRadius: 'var(--radius)',
        border: `1px solid ${c.border}`,
        color: c.fg,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot ? <span style={{ width: 7, height: 7, borderRadius: '50%', background: c.dot, display: 'inline-block', flex: 'none' }} /> : null}
      {children}
    </span>
  );
}
