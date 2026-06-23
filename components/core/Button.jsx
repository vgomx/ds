import React from 'react';

/* Sizes — padding/fontSize straight from the component library (md = 11/18, 14px). */
const sizes = {
  sm: { padding: '9px 14px', fontSize: 13 },
  md: { padding: '11px 18px', fontSize: 14 },
  lg: { padding: '13px 22px', fontSize: 15 },
};

/* Each variant declares its resting style + the hover/active overrides.
   Edges, not shadows. Hover tints the surface; active deepens it. */
function variantStyles(variant) {
  switch (variant) {
    case 'accent':
      return {
        base: { background: 'var(--accent)', color: 'var(--accent-ink)', borderColor: 'var(--accent)' },
        hover: { boxShadow: 'inset 0 0 0 999px rgba(255,255,255,.12)' },
        active: { boxShadow: 'inset 0 0 0 999px rgba(0,0,0,.22)' },
        disabled: { background: 'var(--gray-200)', color: 'var(--gray-400)', borderColor: 'var(--gray-200)' },
      };
    case 'secondary':
      return {
        base: { background: 'var(--surface-button-secondary)', color: 'var(--text-primary)', borderColor: 'var(--border-mute)' },
        hover: { background: 'var(--surface-subtle)', borderColor: 'var(--border-strong)' },
        active: { background: 'var(--gray-150)', borderColor: 'var(--border-strong)' },
        disabled: { background: 'transparent', color: 'var(--text-disabled)', borderColor: 'var(--border-hairline)' },
      };
    case 'ghost':
      return {
        base: { background: 'transparent', color: 'var(--text-secondary)', borderColor: 'transparent' },
        hover: { background: 'var(--surface-subtle)', color: 'var(--text-primary)' },
        active: { background: 'var(--gray-150)', color: 'var(--text-primary)' },
        disabled: { background: 'transparent', color: 'var(--text-disabled)', borderColor: 'transparent' },
      };
    case 'danger':
      return {
        base: { background: 'transparent', color: 'var(--danger)', borderColor: 'var(--border-mute)' },
        hover: { background: 'var(--danger)', color: 'var(--paper)', borderColor: 'var(--danger)' },
        active: { boxShadow: 'inset 0 0 0 999px rgba(0,0,0,.18)' },
        disabled: { background: 'transparent', color: 'var(--text-disabled)', borderColor: 'var(--border-hairline)' },
      };
    case 'primary':
    default:
      return {
        base: { background: 'var(--surface-ink)', color: 'var(--text-on-ink)', borderColor: 'var(--surface-ink)' },
        hover: { boxShadow: 'inset 0 0 0 999px rgba(255,255,255,.14)' },
        active: { boxShadow: 'inset 0 0 0 999px rgba(0,0,0,.3)' },
        disabled: { background: 'var(--gray-200)', color: 'var(--gray-400)', borderColor: 'var(--gray-200)' },
      };
  }
}

/**
 * Button — the primary action control. 2px radius, Archivo 500, hairline border.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variantStyles(variant);
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const stateStyle = disabled
    ? v.disabled
    : { ...(hover ? v.hover : null), ...(active ? v.active : null) };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: fullWidth ? '100%' : 'auto',
        padding: s.padding,
        fontFamily: 'var(--font-sans)',
        fontSize: s.fontSize,
        fontWeight: 'var(--fw-medium)',
        lineHeight: 1,
        border: '1px solid',
        borderRadius: 'var(--radius)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        ...v.base,
        ...stateStyle,
        ...style,
      }}
      {...rest}
    >
      {iconLeft ? <span style={{ display: 'inline-flex', marginLeft: -2 }}>{iconLeft}</span> : null}
      {children}
      {iconRight ? <span style={{ display: 'inline-flex', marginRight: -2 }}>{iconRight}</span> : null}
    </button>
  );
}
