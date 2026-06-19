import React from 'react';

const av = {
  sm: { size: 28, font: 11 },
  md: { size: 36, font: 13 },
  lg: { size: 48, font: 16 },
};

function initials(name) {
  if (!name) return '';
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

/**
 * Avatar — square (2px radius) ink tile with mono initials, or an image.
 * Squares, not circles: the system's geometry is sharp.
 */
export function Avatar({ name, src, size = 'md', shape = 'square', style, ...rest }) {
  const s = av[size] || av.md;
  const radius = shape === 'circle' ? '50%' : 'var(--radius)';
  return (
    <span
      title={name}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: s.size,
        height: s.size,
        flex: 'none',
        borderRadius: radius,
        overflow: 'hidden',
        background: 'var(--ink-900)',
        color: 'var(--paper)',
        fontFamily: 'var(--font-mono)',
        fontSize: s.font,
        letterSpacing: '0.04em',
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={name || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        : initials(name)}
    </span>
  );
}
