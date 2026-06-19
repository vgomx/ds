import React from 'react';

/**
 * Input — a hairline text field. Square 2px radius, transparent fill,
 * border thickens to ink on focus (a crisp edge, never a glow).
 */
export function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  disabled = false,
  style,
  wrapperStyle,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `vg-input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error
    ? 'var(--danger)'
    : focus
      ? 'var(--border-strong)'
      : 'var(--border-mute)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...wrapperStyle }}>
      {label ? (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--text-faint)',
        }}>{label}</label>
      ) : null}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'transparent',
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius)',
        padding: '0 13px',
        opacity: disabled ? 0.5 : 1,
        transition: 'border-color var(--dur-base) var(--ease-out)',
      }}>
        {prefix ? <span style={{ display: 'inline-flex', color: 'var(--text-faint)' }}>{prefix}</span> : null}
        <input
          id={fieldId}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0,
            background: 'transparent', border: 'none', outline: 'none',
            fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-primary)',
            padding: '11px 0',
            ...style,
          }}
          {...rest}
        />
        {suffix ? <span style={{ display: 'inline-flex', color: 'var(--text-faint)' }}>{suffix}</span> : null}
      </div>
      {error ? (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--danger)' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.04em', color: 'var(--text-faint)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
