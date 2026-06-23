import React from 'react';

/**
 * SegmentedControl — a single-select row of segments sharing one outline.
 * The selected segment fills with the accent; dividers are hairlines.
 */
export function SegmentedControl({ options = [], value, onChange, onDark = false, style, ...rest }) {
  const opts = options.map((o) => (typeof o === 'string' ? { label: o, value: o } : o));
  const selVal = value != null ? value : (opts[0] && opts[0].value);

  const fillBg = onDark ? 'var(--accent-on-dark)' : 'var(--accent)';
  const fillFg = onDark ? 'var(--accent-on-dark-ink)' : 'var(--accent-ink)';
  const restFg = onDark ? 'var(--text-inverse-muted)' : 'var(--text-secondary)';
  const divider = onDark ? 'var(--border-on-ink-2)' : 'var(--border-mute)';

  return (
    <div
      style={{
        display: 'inline-flex',
        border: `1px solid ${divider}`,
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        width: 'max-content',
        background: onDark ? 'transparent' : 'var(--surface-page)',
        ...style,
      }}
      {...rest}
    >
      {opts.map((o, i) => {
        const selected = o.value === selVal;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange && onChange(o.value)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 'var(--fw-medium)',
              background: selected ? fillBg : 'transparent',
              color: selected ? fillFg : restFg,
              border: 'none',
              borderLeft: i === 0 ? 'none' : `1px solid ${divider}`,
              padding: '9px 16px',
              cursor: 'pointer',
              transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
            }}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
