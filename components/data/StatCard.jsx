import React from 'react';

/**
 * StatCard — a big figure over a mono caption. On its own (light) or
 * inside an ink Card, where the figure takes the accent. The one place
 * a number is allowed to shout.
 */
export function StatCard({ value, label, onDark = false, style, ...rest }) {
  return (
    <div style={{ ...style }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 46,
        fontWeight: 'var(--fw-bold)',
        letterSpacing: 'var(--tracking-hero)',
        lineHeight: 1,
        color: onDark ? 'var(--accent-on-dark)' : 'var(--text-primary)',
      }}>{value}</div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: onDark ? 'var(--text-inverse-faint)' : 'var(--text-faint)',
        marginTop: 8,
      }}>{label}</div>
    </div>
  );
}
