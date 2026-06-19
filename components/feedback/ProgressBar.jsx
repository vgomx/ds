import React from 'react';

/**
 * ProgressBar — a thin track with an ink (or accent) fill. Determinate
 * by default; pass indeterminate for an unknown-duration sweep. Optional
 * mono label + percentage above.
 */
export function ProgressBar({ value = 0, label, showValue = true, indeterminate = false, accent = true, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  const fill = accent ? 'var(--accent)' : 'var(--ink-900)';
  return (
    <div style={{ ...style }} {...rest}>
      {(label || (showValue && !indeterminate)) ? (
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em',
          color: 'var(--text-muted)', marginBottom: 8,
        }}>
          <span>{label}</span>
          {showValue && !indeterminate ? <span>{pct}%</span> : null}
        </div>
      ) : null}
      <div style={{ height: 6, background: 'var(--gray-150)', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius)' }}>
        {indeterminate ? (
          <div style={{ position: 'absolute', top: 0, height: '100%', width: '40%', background: 'var(--ink-900)', animation: 'vg-indet 1.4s ease-in-out infinite' }} />
        ) : (
          <div style={{ width: `${pct}%`, height: '100%', background: fill, transition: 'width var(--dur-slow) var(--ease-out)' }} />
        )}
      </div>
    </div>
  );
}
