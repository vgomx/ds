import React from 'react';

/* Node visual per state: done = ink fill, current = accent fill,
   upcoming = hairline outline. Connectors color up to the current step. */
function nodeStyle(state) {
  switch (state) {
    case 'done':
      return { background: 'var(--ink-900)', color: 'var(--paper)', border: '1px solid var(--ink-900)' };
    case 'current':
      return { background: 'var(--accent)', color: 'var(--accent-ink)', border: '1px solid var(--accent)' };
    default:
      return { background: 'transparent', color: 'var(--text-faint)', border: '1px solid var(--border-mute)' };
  }
}

/**
 * Stepper — numbered nodes joined by connectors.
 * steps: string[] (labels). current: 0-indexed active step.
 * vertical: boolean — renders nodes in a left column, labels on the right.
 */
export function Stepper({ steps = [], current = 0, vertical = false, style, ...rest }) {
  if (vertical) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', ...style }} {...rest}>
        {steps.map((label, i) => {
          const state = i < current ? 'done' : i === current ? 'current' : 'upcoming';
          const isLast = i === steps.length - 1;
          const connectorOn = i < current;
          return (
            <div key={i} style={{ display: 'flex', gap: 16 }}>
              {/* Left: node + vertical connector */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 34, flexShrink: 0 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 13, flexShrink: 0,
                  ...nodeStyle(state),
                }}>{i + 1}</div>
                {!isLast && (
                  <div style={{
                    width: 1, flex: 1, minHeight: 14,
                    background: connectorOn ? 'var(--accent)' : 'var(--border-default)',
                  }} />
                )}
              </div>
              {/* Right: label */}
              <div style={{ display: 'flex', alignItems: 'center', paddingBottom: isLast ? 0 : 14 }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: state === 'upcoming' ? 'var(--text-faint)' : 'var(--text-primary)',
                }}>{label}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', maxWidth: 560, ...style }} {...rest}>
      {steps.map((label, i) => {
        const state = i < current ? 'done' : i === current ? 'current' : 'upcoming';
        const connectorOn = i < current;
        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, flex: 'none' }}>
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: 13, ...nodeStyle(state),
              }}>{i + 1}</div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: state === 'upcoming' ? 'var(--text-faint)' : 'var(--text-primary)',
              }}>{label}</span>
            </div>
            {i < steps.length - 1 ? (
              <div style={{
                height: 1, flex: 1, marginTop: 17, margin: '17px 6px 0',
                background: connectorOn ? 'var(--accent)' : 'var(--border-default)',
              }} />
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}
