import React from 'react';

/**
 * ReadingBar — the phone version of SectionNav. A slim sticky bar with
 * the current section, minutes left and a 2px progress line along its
 * bottom edge.
 */
export function ReadingBar({ section, progress = 0, minutesLeft, sticky = true, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, progress));
  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
      style={{
        position: sticky ? 'sticky' : 'relative', top: 0, zIndex: 10,
        background: 'var(--surface-page)', borderBottom: '1px solid var(--border-hairline)',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
        padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: 10,
        letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)',
      }}>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {section ? `${section.number} · ${section.label}` : ''}
        </span>
        {minutesLeft != null && <span style={{ color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{minutesLeft} min left</span>}
      </div>
      <div style={{ height: 2, background: 'var(--border-hairline)' }}>
        <div style={{ height: 2, width: `${pct}%`, background: 'var(--text-primary)', transition: 'width var(--dur-base, 180ms) var(--ease-out, ease)' }} />
      </div>
    </div>
  );
}
