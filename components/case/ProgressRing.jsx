import React from 'react';

const CIRC = 2 * Math.PI * 6;

/**
 * ProgressRing — a small ink arc on a hairline track that pairs with a
 * percentage, so reading progress never reads as another section number.
 * Starts at 12 o'clock, runs clockwise, stays ink at 100%.
 */
export function ProgressRing({ value = 0, size = 14, strokeWidth = 2, style, ...rest }) {
  const v = Math.max(0, Math.min(100, Number(value) || 0));
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0, transform: 'rotate(-90deg)', ...style }}
      {...rest}
    >
      <circle cx="7" cy="7" r="6" fill="none" stroke="var(--border-hairline)" strokeWidth={strokeWidth} />
      <circle
        cx="7" cy="7" r="6" fill="none"
        stroke="var(--text-primary)"
        strokeWidth={strokeWidth}
        strokeDasharray={CIRC.toFixed(2)}
        strokeDashoffset={(CIRC * (1 - v / 100)).toFixed(2)}
        style={{ transition: 'stroke-dashoffset var(--dur-base, 180ms) var(--ease-out, ease)' }}
      />
    </svg>
  );
}
