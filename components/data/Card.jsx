import React from 'react';

/**
 * Card — the system's surface primitive. A hairline edge on paper; no
 * shadow. Set `tone="ink"` for the dark variant, `interactive` to lift
 * the border to ink on hover. Padding is opt-out via `flush` (for cards
 * that lead with a full-bleed image).
 */
export function Card({ children, tone = 'default', interactive = false, flush = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const ink = tone === 'ink';
  const baseBorder = ink ? 'var(--ink-900)' : 'var(--border-hairline)';
  const hoverBorder = ink ? 'var(--border-on-ink-2)' : 'var(--border-strong)';
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: ink ? 'var(--surface-ink)' : 'var(--surface-card)',
        color: ink ? 'var(--text-inverse-primary)' : 'var(--text-primary)',
        border: `1px solid ${hover ? hoverBorder : baseBorder}`,
        borderRadius: 'var(--radius)',
        padding: flush ? 0 : 24,
        cursor: interactive ? 'pointer' : 'default',
        transition: 'border-color var(--dur-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
