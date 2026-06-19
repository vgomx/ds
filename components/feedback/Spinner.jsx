import React from 'react';

const sizes = { sm: 18, md: 28, lg: 40 };

/**
 * Spinner — a hairline ring with an accent leading edge. The system's
 * only continuous motion besides the indeterminate bar.
 */
export function Spinner({ size = 'md', label, style, ...rest }) {
  const px = typeof size === 'number' ? size : (sizes[size] || sizes.md);
  const ring = (
    <span style={{
      width: px, height: px, flex: 'none',
      border: `${Math.max(2, Math.round(px / 10))}px solid var(--gray-150)`,
      borderTopColor: 'var(--accent)',
      borderRadius: '50%',
      animation: 'vg-spin 0.8s linear infinite',
      display: 'inline-block',
    }} />
  );
  if (!label) return <span style={style} {...rest}>{ring}</span>;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14, ...style }} {...rest}>
      {ring}
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', color: 'var(--text-muted)' }}>{label}</span>
    </span>
  );
}
