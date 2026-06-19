import React from 'react';

/* Tone presets for the category chip. Mono, uppercase, tracked. */
function toneStyle(tone, onDark) {
  if (onDark) {
    switch (tone) {
      case 'solid':  return { background: 'var(--paper)', color: 'var(--ink-900)', border: '1px solid var(--paper)' };
      case 'subtle': return { background: 'var(--surface-ink-3)', color: 'var(--text-inverse-muted)', border: '1px solid transparent' };
      default:       return { background: 'transparent', color: 'var(--text-inverse-primary)', border: '1px solid var(--border-on-ink-2)' };
    }
  }
  switch (tone) {
    case 'solid':  return { background: 'var(--ink-900)', color: 'var(--paper)', border: '1px solid var(--ink-900)' };
    case 'subtle': return { background: 'var(--surface-subtle)', color: 'var(--text-muted)', border: '1px solid transparent' };
    default:       return { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-mute)' };
  }
}

const tagSizes = {
  sm: { fontSize: 10, padding: '5px 9px' },
  md: { fontSize: 11, padding: '6px 12px' },
};

/**
 * Tag — a mono, uppercase category chip. Edges, not fills, by default.
 */
export function Tag({ children, tone = 'outline', size = 'md', onDark = false, style, ...rest }) {
  const s = tagSizes[size] || tagSizes.md;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: s.fontSize,
        fontWeight: 'var(--fw-regular)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        lineHeight: 1,
        padding: s.padding,
        borderRadius: 'var(--radius)',
        whiteSpace: 'nowrap',
        ...toneStyle(tone, onDark),
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
