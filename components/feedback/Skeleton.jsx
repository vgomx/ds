import React from 'react';

/**
 * Skeleton — a pulsing placeholder bar. Compose several at varying
 * widths to stand in for a loading text block or media.
 */
export function Skeleton({ width = '100%', height = 12, delay = 0, style, ...rest }) {
  return (
    <div
      style={{
        width, height,
        background: 'var(--gray-150)',
        borderRadius: 'var(--radius)',
        animation: `vg-pulse 1.5s ease-in-out ${delay}s infinite`,
        ...style,
      }}
      {...rest}
    />
  );
}
