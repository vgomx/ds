import React from 'react';

/* Arrow offsets per side. */
const place = {
  top:    { wrap: { flexDirection: 'column' }, bubbleOrder: -1, arrow: { bottom: -5, left: '50%', transform: 'translateX(-50%) rotate(45deg)' } },
  bottom: { wrap: { flexDirection: 'column' }, bubbleOrder: 1,  arrow: { top: -5, left: '50%', transform: 'translateX(-50%) rotate(45deg)' } },
};

/**
 * Tooltip — a terse ink bubble on hover/focus, with a small arrow. No
 * delay theatrics; appears with a quiet rise.
 */
export function Tooltip({ label, side = 'top', children, style, ...rest }) {
  const [show, setShow] = React.useState(false);
  const p = place[side] || place.top;
  return (
    <span
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', flexDirection: p.wrap.flexDirection, ...style }}
      {...rest}
    >
      {show ? (
        <span style={{
          position: 'absolute',
          [side === 'top' ? 'bottom' : 'top']: '100%',
          [side === 'top' ? 'marginBottom' : 'marginTop']: 8,
          left: '50%', transform: 'translateX(-50%)',
          background: 'var(--ink-900)', color: 'var(--paper)',
          fontFamily: 'var(--font-sans)', fontSize: 12, lineHeight: 1.3,
          padding: '7px 11px', whiteSpace: 'nowrap', borderRadius: 'var(--radius)',
          animation: 'vg-rise var(--dur-base) var(--ease-out)', zIndex: 10,
        }}>
          {label}
          <span style={{ position: 'absolute', width: 10, height: 10, background: 'var(--ink-900)', ...p.arrow }} />
        </span>
      ) : null}
      {children}
    </span>
  );
}
