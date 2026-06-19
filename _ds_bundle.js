/* @ds-bundle: {"format":3,"namespace":"VitorGomesDesignSystem_32625a","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Drawer","sourcePath":"components/overlay/Drawer.jsx"},{"name":"Menu","sourcePath":"components/overlay/Menu.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"3c63b8a3bbf7","components/core/Badge.jsx":"7a0f0c67080c","components/core/Button.jsx":"bd96195b1914","components/core/Input.jsx":"4ed995a12431","components/core/SegmentedControl.jsx":"90cb5c3a6870","components/core/Tag.jsx":"75880b5c59f6","components/data/Card.jsx":"d776a8193a38","components/data/StatCard.jsx":"0345685c5e2a","components/data/Table.jsx":"3bbc3313bc2b","components/feedback/Accordion.jsx":"0f1722ced81c","components/feedback/ProgressBar.jsx":"cb91d900641c","components/feedback/Skeleton.jsx":"31c384fc2611","components/feedback/Spinner.jsx":"f82123f19f68","components/feedback/Tooltip.jsx":"b15ee0dc31d2","components/navigation/Breadcrumb.jsx":"aa2a214f4dfd","components/navigation/Pagination.jsx":"b80e29982e5c","components/navigation/Stepper.jsx":"77f99144f916","components/overlay/Drawer.jsx":"09dd22946423","components/overlay/Menu.jsx":"d32dd8003a33","components/overlay/Modal.jsx":"7e580b9904d1","ui_kits/portfolio/AboutScreen.jsx":"0299aead1532","ui_kits/portfolio/CaseStudyScreen.jsx":"e5abb20019e4","ui_kits/portfolio/Chrome.jsx":"9342f4c7a878","ui_kits/portfolio/HomeScreen.jsx":"59e64b609b52","ui_kits/portfolio/WorkScreen.jsx":"434ff50e6e1b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VitorGomesDesignSystem_32625a = window.VitorGomesDesignSystem_32625a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const av = {
  sm: {
    size: 28,
    font: 11
  },
  md: {
    size: 36,
    font: 13
  },
  lg: {
    size: 48,
    font: 16
  }
};
function initials(name) {
  if (!name) return '';
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

/**
 * Avatar — square (2px radius) ink tile with mono initials, or an image.
 * Squares, not circles: the system's geometry is sharp.
 */
function Avatar({
  name,
  src,
  size = 'md',
  shape = 'square',
  style,
  ...rest
}) {
  const s = av[size] || av.md;
  const radius = shape === 'circle' ? '50%' : 'var(--radius)';
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.size,
      height: s.size,
      flex: 'none',
      borderRadius: radius,
      overflow: 'hidden',
      background: 'var(--ink-900)',
      color: 'var(--paper)',
      fontFamily: 'var(--font-mono)',
      fontSize: s.font,
      letterSpacing: '0.04em',
      userSelect: 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Status → dot + text/border color. The one place a live state may
   earn the accent. */
function statusColors(status, onDark) {
  const accent = onDark ? 'var(--accent-on-dark)' : 'var(--accent)';
  switch (status) {
    case 'live':
      return {
        dot: accent,
        fg: accent,
        border: accent
      };
    case 'draft':
      return onDark ? {
        dot: 'var(--gray-400)',
        fg: 'var(--text-inverse-muted)',
        border: 'var(--border-on-ink-2)'
      } : {
        dot: 'var(--gray-400)',
        fg: 'var(--text-secondary)',
        border: 'var(--border-mute)'
      };
    case 'archived':
      return onDark ? {
        dot: 'var(--gray-500)',
        fg: 'var(--gray-500)',
        border: 'var(--border-on-ink)'
      } : {
        dot: 'var(--gray-200)',
        fg: 'var(--text-faint)',
        border: 'var(--border-hairline)'
      };
    case 'danger':
      return {
        dot: onDark ? 'var(--danger-on-dark)' : 'var(--danger)',
        fg: onDark ? 'var(--danger-on-dark)' : 'var(--danger)',
        border: onDark ? 'var(--danger-on-dark)' : 'var(--danger)'
      };
    default:
      return onDark ? {
        dot: 'var(--gray-400)',
        fg: 'var(--text-inverse-muted)',
        border: 'var(--border-on-ink-2)'
      } : {
        dot: 'var(--gray-400)',
        fg: 'var(--text-muted)',
        border: 'var(--border-mute)'
      };
  }
}

/**
 * Badge — a mono status pill with a leading dot. Outline-only; the dot
 * carries the signal. "Live" is where the accent is allowed to surface.
 */
function Badge({
  children,
  status = 'neutral',
  onDark = false,
  dot = true,
  style,
  ...rest
}) {
  const c = statusColors(status, onDark);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '6px 12px',
      borderRadius: 'var(--radius)',
      border: `1px solid ${c.border}`,
      color: c.fg,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: c.dot,
      display: 'inline-block',
      flex: 'none'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Sizes — padding/fontSize straight from the component library (md = 11/18, 14px). */
const sizes = {
  sm: {
    padding: '9px 14px',
    fontSize: 13
  },
  md: {
    padding: '11px 18px',
    fontSize: 14
  },
  lg: {
    padding: '13px 22px',
    fontSize: 15
  }
};

/* Each variant declares its resting style + the hover/active overrides.
   Edges, not shadows. Hover tints the surface; active deepens it. */
function variantStyles(variant) {
  switch (variant) {
    case 'accent':
      return {
        base: {
          background: 'var(--accent)',
          color: 'var(--accent-ink)',
          borderColor: 'var(--accent)'
        },
        hover: {
          boxShadow: 'inset 0 0 0 999px rgba(255,255,255,.12)'
        },
        active: {
          boxShadow: 'inset 0 0 0 999px rgba(0,0,0,.22)'
        },
        disabled: {
          background: 'var(--gray-200)',
          color: 'var(--gray-400)',
          borderColor: 'var(--gray-200)'
        }
      };
    case 'secondary':
      return {
        base: {
          background: 'transparent',
          color: 'var(--text-primary)',
          borderColor: 'var(--border-mute)'
        },
        hover: {
          background: 'var(--surface-subtle)',
          borderColor: 'var(--border-strong)'
        },
        active: {
          background: 'var(--gray-150)',
          borderColor: 'var(--border-strong)'
        },
        disabled: {
          background: 'transparent',
          color: 'var(--text-disabled)',
          borderColor: 'var(--border-hairline)'
        }
      };
    case 'ghost':
      return {
        base: {
          background: 'transparent',
          color: 'var(--text-secondary)',
          borderColor: 'transparent'
        },
        hover: {
          background: 'var(--surface-subtle)',
          color: 'var(--text-primary)'
        },
        active: {
          background: 'var(--gray-150)',
          color: 'var(--text-primary)'
        },
        disabled: {
          background: 'transparent',
          color: 'var(--text-disabled)',
          borderColor: 'transparent'
        }
      };
    case 'danger':
      return {
        base: {
          background: 'transparent',
          color: 'var(--danger)',
          borderColor: 'var(--border-mute)'
        },
        hover: {
          background: 'var(--danger)',
          color: 'var(--paper)',
          borderColor: 'var(--danger)'
        },
        active: {
          boxShadow: 'inset 0 0 0 999px rgba(0,0,0,.18)'
        },
        disabled: {
          background: 'transparent',
          color: 'var(--text-disabled)',
          borderColor: 'var(--border-hairline)'
        }
      };
    case 'primary':
    default:
      return {
        base: {
          background: 'var(--surface-ink)',
          color: 'var(--text-on-ink)',
          borderColor: 'var(--surface-ink)'
        },
        hover: {
          boxShadow: 'inset 0 0 0 999px rgba(255,255,255,.14)'
        },
        active: {
          boxShadow: 'inset 0 0 0 999px rgba(0,0,0,.3)'
        },
        disabled: {
          background: 'var(--gray-200)',
          color: 'var(--gray-400)',
          borderColor: 'var(--gray-200)'
        }
      };
  }
}

/**
 * Button — the primary action control. 2px radius, Archivo 500, hairline border.
 */
function Button({
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
  const stateStyle = disabled ? v.disabled : {
    ...(hover ? v.hover : null),
    ...(active ? v.active : null)
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
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
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginLeft: -2
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginRight: -2
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — a hairline text field. Square 2px radius, transparent fill,
 * border thickens to ink on focus (a crisp edge, never a glow).
 */
function Input({
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
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--border-strong)' : 'var(--border-mute)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...wrapperStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'transparent',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius)',
      padding: '0 13px',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--dur-base) var(--ease-out)'
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-faint)'
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)',
      padding: '11px 0',
      ...style
    }
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-faint)'
    }
  }, suffix) : null), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.04em',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SegmentedControl — a single-select row of segments sharing one outline.
 * The selected segment fills with the accent; dividers are hairlines.
 */
function SegmentedControl({
  options = [],
  value,
  onChange,
  onDark = false,
  style,
  ...rest
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    label: o,
    value: o
  } : o);
  const selVal = value != null ? value : opts[0] && opts[0].value;
  const fillBg = onDark ? 'var(--accent-on-dark)' : 'var(--accent)';
  const fillFg = onDark ? 'var(--accent-on-dark-ink)' : 'var(--accent-ink)';
  const restFg = onDark ? 'var(--text-inverse-muted)' : 'var(--text-secondary)';
  const divider = onDark ? 'var(--border-on-ink-2)' : 'var(--border-mute)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      border: `1px solid ${divider}`,
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      width: 'max-content',
      ...style
    }
  }, rest), opts.map((o, i) => {
    const selected = o.value === selVal;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      onClick: () => onChange && onChange(o.value),
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 'var(--fw-medium)',
        background: selected ? fillBg : 'transparent',
        color: selected ? fillFg : restFg,
        border: 'none',
        borderLeft: i === 0 ? 'none' : `1px solid ${divider}`,
        padding: '9px 16px',
        cursor: 'pointer',
        transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tone presets for the category chip. Mono, uppercase, tracked. */
function toneStyle(tone, onDark) {
  if (onDark) {
    switch (tone) {
      case 'solid':
        return {
          background: 'var(--paper)',
          color: 'var(--ink-900)',
          border: '1px solid var(--paper)'
        };
      case 'subtle':
        return {
          background: 'var(--surface-ink-3)',
          color: 'var(--text-inverse-muted)',
          border: '1px solid transparent'
        };
      default:
        return {
          background: 'transparent',
          color: 'var(--text-inverse-primary)',
          border: '1px solid var(--border-on-ink-2)'
        };
    }
  }
  switch (tone) {
    case 'solid':
      return {
        background: 'var(--ink-900)',
        color: 'var(--paper)',
        border: '1px solid var(--ink-900)'
      };
    case 'subtle':
      return {
        background: 'var(--surface-subtle)',
        color: 'var(--text-muted)',
        border: '1px solid transparent'
      };
    default:
      return {
        background: 'transparent',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-mute)'
      };
  }
}
const tagSizes = {
  sm: {
    fontSize: 10,
    padding: '5px 9px'
  },
  md: {
    fontSize: 11,
    padding: '6px 12px'
  }
};

/**
 * Tag — a mono, uppercase category chip. Edges, not fills, by default.
 */
function Tag({
  children,
  tone = 'outline',
  size = 'md',
  onDark = false,
  style,
  ...rest
}) {
  const s = tagSizes[size] || tagSizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: s.fontSize,
      fontWeight: 'var(--fw-regular)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: s.padding,
      borderRadius: 'var(--radius)',
      whiteSpace: 'nowrap',
      ...toneStyle(tone, onDark),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the system's surface primitive. A hairline edge on paper; no
 * shadow. Set `tone="ink"` for the dark variant, `interactive` to lift
 * the border to ink on hover. Padding is opt-out via `flush` (for cards
 * that lead with a full-bleed image).
 */
function Card({
  children,
  tone = 'default',
  interactive = false,
  flush = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const ink = tone === 'ink';
  const baseBorder = ink ? 'var(--ink-900)' : 'var(--border-hairline)';
  const hoverBorder = ink ? 'var(--border-on-ink-2)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: ink ? 'var(--surface-ink)' : 'var(--surface-card)',
      color: ink ? 'var(--text-inverse-primary)' : 'var(--text-primary)',
      border: `1px solid ${hover ? hoverBorder : baseBorder}`,
      borderRadius: 'var(--radius)',
      padding: flush ? 0 : 24,
      cursor: interactive ? 'pointer' : 'default',
      transition: 'border-color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — a big figure over a mono caption. On its own (light) or
 * inside an ink Card, where the figure takes the accent. The one place
 * a number is allowed to shout.
 */
function StatCard({
  value,
  label,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 46,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-hero)',
      lineHeight: 1,
      color: onDark ? 'var(--accent-on-dark)' : 'var(--text-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-inverse-faint)' : 'var(--text-faint)',
      marginTop: 8
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Table — an index of work. Hairline rows, a mono header ruled in ink,
 * a hovered/selected row picked out in the subtle tint. Columns are
 * declared; cells may render any node (e.g. a Badge for status).
 *
 * columns: [{ key, header, width?, align?, mono?, render?(row) }]
 */
function Table({
  columns = [],
  rows = [],
  rowKey,
  selectedKey,
  onRowClick,
  style,
  ...rest
}) {
  const template = columns.map(c => c.width || '1fr').join(' ');
  const [hoverKey, setHoverKey] = React.useState(null);
  const keyOf = (row, i) => rowKey ? rowKey(row) : i;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: template,
      gap: 16,
      padding: '14px 20px',
      borderBottom: '1px solid var(--border-strong)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("span", {
    key: c.key,
    style: {
      textAlign: c.align || 'left'
    }
  }, c.header))), rows.map((row, i) => {
    const k = keyOf(row, i);
    const isOn = k === selectedKey || k === hoverKey;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      onMouseEnter: () => setHoverKey(k),
      onMouseLeave: () => setHoverKey(null),
      onClick: () => onRowClick && onRowClick(row),
      style: {
        display: 'grid',
        gridTemplateColumns: template,
        gap: 16,
        alignItems: 'center',
        padding: '18px 20px',
        borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-hairline)',
        background: isOn ? 'var(--surface-subtle)' : 'transparent',
        cursor: onRowClick ? 'pointer' : 'default',
        transition: 'background var(--dur-fast) var(--ease-out)'
      }
    }, columns.map(c => /*#__PURE__*/React.createElement("span", {
      key: c.key,
      style: {
        textAlign: c.align || 'left',
        fontFamily: c.mono ? 'var(--font-mono)' : 'var(--font-sans)',
        fontSize: c.mono ? 12 : 15,
        fontWeight: c.strong ? 'var(--fw-medium)' : 'var(--fw-regular)',
        color: c.muted ? 'var(--text-secondary)' : 'var(--text-primary)'
      }
    }, c.render ? c.render(row) : row[c.key])));
  }));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Accordion — disclosure rows ruled by hairlines, the set topped by an
 * ink rule. One open at a time (single) or many (allowMultiple). The
 * open row shows an accent "–"; closed rows a faint "+".
 *
 * items: [{ title, content }]
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  allowMultiple = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen == null ? [] : [defaultOpen]));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--border-strong)',
      maxWidth: 'var(--container-sm)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => toggle(i),
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 4px',
        cursor: 'pointer',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 17,
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: '-0.01em',
        color: 'var(--text-primary)'
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 18,
        lineHeight: 1,
        color: isOpen ? 'var(--accent)' : 'var(--text-faint)'
      }
    }, isOpen ? '–' : '+')), isOpen && it.content ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        lineHeight: 1.6,
        color: 'var(--text-secondary)',
        margin: 0,
        padding: '0 4px 22px',
        maxWidth: '60ch'
      }
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressBar — a thin track with an ink (or accent) fill. Determinate
 * by default; pass indeterminate for an unknown-duration sweep. Optional
 * mono label + percentage above.
 */
function ProgressBar({
  value = 0,
  label,
  showValue = true,
  indeterminate = false,
  accent = true,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const fill = accent ? 'var(--accent)' : 'var(--ink-900)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), label || showValue && !indeterminate ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && !indeterminate ? /*#__PURE__*/React.createElement("span", null, pct, "%") : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--gray-150)',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      height: '100%',
      width: '40%',
      background: 'var(--ink-900)',
      animation: 'vg-indet 1.4s ease-in-out infinite'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: fill,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Skeleton — a pulsing placeholder bar. Compose several at varying
 * widths to stand in for a loading text block or media.
 */
function Skeleton({
  width = '100%',
  height = 12,
  delay = 0,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      height,
      background: 'var(--gray-150)',
      borderRadius: 'var(--radius)',
      animation: `vg-pulse 1.5s ease-in-out ${delay}s infinite`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 18,
  md: 28,
  lg: 40
};

/**
 * Spinner — a hairline ring with an accent leading edge. The system's
 * only continuous motion besides the indeterminate bar.
 */
function Spinner({
  size = 'md',
  label,
  style,
  ...rest
}) {
  const px = typeof size === 'number' ? size : sizes[size] || sizes.md;
  const ring = /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      flex: 'none',
      border: `${Math.max(2, Math.round(px / 10))}px solid var(--gray-150)`,
      borderTopColor: 'var(--accent)',
      borderRadius: '50%',
      animation: 'vg-spin 0.8s linear infinite',
      display: 'inline-block'
    }
  });
  if (!label) return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), ring);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      ...style
    }
  }, rest), ring, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Arrow offsets per side. */
const place = {
  top: {
    wrap: {
      flexDirection: 'column'
    },
    bubbleOrder: -1,
    arrow: {
      bottom: -5,
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)'
    }
  },
  bottom: {
    wrap: {
      flexDirection: 'column'
    },
    bubbleOrder: 1,
    arrow: {
      top: -5,
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)'
    }
  }
};

/**
 * Tooltip — a terse ink bubble on hover/focus, with a small arrow. No
 * delay theatrics; appears with a quiet rise.
 */
function Tooltip({
  label,
  side = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const p = place[side] || place.top;
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      flexDirection: p.wrap.flexDirection,
      ...style
    }
  }, rest), show ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      [side === 'top' ? 'bottom' : 'top']: '100%',
      [side === 'top' ? 'marginBottom' : 'marginTop']: 8,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--ink-900)',
      color: 'var(--paper)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      lineHeight: 1.3,
      padding: '7px 11px',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius)',
      animation: 'vg-rise var(--dur-base) var(--ease-out)',
      zIndex: 10
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 10,
      height: 10,
      background: 'var(--ink-900)',
      ...p.arrow
    }
  })) : null, children);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Breadcrumb — a mono, uppercase trail. The current (last) crumb is ink,
 * ancestors are secondary, separators are a faint slash. Click ancestors
 * via onNavigate.
 *
 * items: [{ label, href? }]
 */
function Breadcrumb({
  items = [],
  onNavigate,
  separator = '/',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      onClick: () => !last && onNavigate && onNavigate(it, i),
      style: {
        color: last ? 'var(--text-primary)' : 'var(--text-secondary)',
        cursor: !last && onNavigate ? 'pointer' : 'default'
      }
    }, it.label), last ? null : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-disabled)'
      }
    }, separator));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Builds a compact page list with ellipses around the current page. */
function pageList(total, current, edge = 1, around = 1) {
  const pages = new Set([1, total]);
  for (let p = current - around; p <= current + around; p++) if (p >= 1 && p <= total) pages.add(p);
  for (let p = 1; p <= edge; p++) {
    pages.add(p);
    pages.add(total - p + 1);
  }
  const sorted = [...pages].filter(p => p >= 1 && p <= total).sort((a, b) => a - b);
  const out = [];
  let prev = 0;
  for (const p of sorted) {
    if (p - prev > 1) out.push('…');
    out.push(p);
    prev = p;
  }
  return out;
}
function cell(active, disabled) {
  return {
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    width: 38,
    height: 38,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: active ? 'var(--accent)' : 'transparent',
    color: active ? 'var(--accent-ink)' : disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
    border: `1px solid ${active ? 'var(--accent)' : disabled ? 'var(--border-hairline)' : 'var(--border-mute)'}`,
    borderRadius: 'var(--radius)',
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
}

/**
 * Pagination — square mono page cells; the active page fills with the
 * accent, edges clamp, the middle collapses to an ellipsis.
 */
function Pagination({
  total = 1,
  page = 1,
  onChange,
  style,
  ...rest
}) {
  const go = p => {
    if (p >= 1 && p <= total && p !== page && onChange) onChange(p);
  };
  const items = pageList(total, page);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: page <= 1,
    onClick: () => go(page - 1),
    style: cell(false, page <= 1)
  }, "\u2039"), items.map((it, i) => it === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-faint)',
      padding: '0 4px'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: it,
    type: "button",
    onClick: () => go(it),
    style: cell(it === page, false)
  }, it)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: page >= total,
    onClick: () => go(page + 1),
    style: cell(false, page >= total)
  }, "\u203A"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Node visual per state: done = ink fill, current = accent fill,
   upcoming = hairline outline. Connectors color up to the current step. */
function nodeStyle(state) {
  switch (state) {
    case 'done':
      return {
        background: 'var(--ink-900)',
        color: 'var(--paper)',
        border: '1px solid var(--ink-900)'
      };
    case 'current':
      return {
        background: 'var(--accent)',
        color: 'var(--accent-ink)',
        border: '1px solid var(--accent)'
      };
    default:
      return {
        background: 'transparent',
        color: 'var(--text-faint)',
        border: '1px solid var(--border-mute)'
      };
  }
}

/**
 * Stepper — numbered nodes joined by hairline connectors. Steps before
 * the active one are ink, the active one is the accent, the rest outline.
 *
 * steps: string[] (labels). current: 0-indexed active step.
 */
function Stepper({
  steps = [],
  current = 0,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      maxWidth: 560,
      ...style
    }
  }, rest), steps.map((label, i) => {
    const state = i < current ? 'done' : i === current ? 'current' : 'upcoming';
    const connectorOn = i < current;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        ...nodeStyle(state)
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: state === 'upcoming' ? 'var(--text-faint)' : 'var(--text-primary)'
      }
    }, label)), i < steps.length - 1 ? /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        flex: 1,
        marginTop: 17,
        margin: '17px 6px 0',
        background: connectorOn ? 'var(--accent)' : 'var(--border-default)'
      }
    }) : null);
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Drawer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Drawer — a panel that slides in from an edge over a scrim. Ink by
 * default (the filters surface). Closes on Escape and scrim click.
 */
function Drawer({
  open,
  onClose,
  title,
  children,
  footer,
  side = 'right',
  width = '380px',
  tone = 'ink',
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const ink = tone === 'ink';
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'var(--scrim)',
      display: 'flex',
      justifyContent: side === 'right' ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: '90%',
      height: '100%',
      background: ink ? 'var(--surface-ink)' : 'var(--surface-card)',
      color: ink ? 'var(--text-inverse-primary)' : 'var(--text-primary)',
      borderLeft: side === 'right' ? `1px solid ${ink ? 'var(--border-on-ink)' : 'var(--border-hairline)'}` : 'none',
      borderRight: side === 'left' ? `1px solid ${ink ? 'var(--border-on-ink)' : 'var(--border-hairline)'}` : 'none',
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      animation: `vg-rise var(--dur-base) var(--ease-out)`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: ink ? 'var(--text-inverse-faint)' : 'var(--text-muted)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      color: ink ? 'var(--text-inverse-faint)' : 'var(--text-faint)',
      cursor: 'pointer'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 16
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Menu — a trigger button plus a dropdown of rows under a hairline-or-ink
 * edge. The selected row gets the subtle tint and an accent check; a
 * divider separates a destructive item.
 *
 * items: [{ label, value, danger?, divider? }]
 */
function Menu({
  label = 'Sort',
  items = [],
  value,
  onSelect,
  onDark = false,
  align = 'left',
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const panelBg = onDark ? 'var(--surface-ink-2)' : 'var(--surface-card)';
  const panelBorder = onDark ? 'var(--border-on-ink-2)' : 'var(--border-strong)';
  const rowFg = onDark ? 'var(--text-inverse-primary)' : 'var(--text-primary)';
  const selBg = onDark ? 'var(--surface-ink-3)' : 'var(--surface-subtle)';
  const dividerC = onDark ? 'var(--border-on-ink)' : 'var(--border-hairline)';
  const dangerC = onDark ? 'var(--danger-on-dark)' : 'var(--danger)';
  const accent = onDark ? 'var(--accent-on-dark)' : 'var(--accent)';
  const selectedItem = items.find(it => it.value === value);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 'var(--fw-medium)',
      background: onDark ? 'var(--surface-ink)' : 'var(--surface-card)',
      color: rowFg,
      border: `1px solid ${onDark ? 'var(--border-on-ink-2)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius)',
      padding: '11px 16px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      minWidth: 200
    }
  }, label, ": ", selectedItem ? selectedItem.label : '—', /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)',
      fontSize: 11
    }
  }, "\u25BE")), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      [align]: 0,
      minWidth: 220,
      zIndex: 20,
      background: panelBg,
      border: `1px solid ${panelBorder}`,
      borderRadius: 'var(--radius)',
      padding: 6,
      boxShadow: 'var(--shadow-pop)'
    }
  }, items.map((it, i) => {
    if (it.divider) return /*#__PURE__*/React.createElement("div", {
      key: `d${i}`,
      style: {
        height: 1,
        background: dividerC,
        margin: '6px 0'
      }
    });
    const selected = it.value === value;
    return /*#__PURE__*/React.createElement("div", {
      key: it.value,
      onClick: () => {
        onSelect && onSelect(it.value, it);
        setOpen(false);
      },
      style: {
        fontSize: 14,
        padding: '9px 12px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: it.danger ? dangerC : rowFg,
        background: selected ? selBg : 'transparent',
        borderRadius: 'var(--radius)'
      }
    }, it.label, selected ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: accent,
        fontFamily: 'var(--font-mono)',
        fontSize: 12
      }
    }, "\u2713") : null);
  })) : null);
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Menu.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modal — a centered dialog over a scrim. Bordered in ink (edges, not
 * shadows). Header with title + close, a body, and a right-aligned footer.
 * Renders nothing when closed.
 */
function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  width = 380,
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'var(--scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--ink-900)',
      borderRadius: 'var(--radius)',
      width: '100%',
      maxWidth: width,
      animation: 'vg-rise var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 20px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      color: 'var(--text-faint)',
      cursor: 'pointer'
    }
  }, "\u2715")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      padding: '0 20px 20px'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutScreen.jsx
try { (() => {
/* About — bio, an available-for-work band, FAQ, and a contact dialog. */
const VGa = window.VitorGomesDesignSystem_32625a;
function AboutScreen() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '88px 48px 56px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 24
    }
  }, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(34px,5vw,56px)',
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      fontWeight: 700,
      margin: 0,
      maxWidth: '16ch'
    }
  }, "I design brands and the products they become."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      maxWidth: '52ch',
      margin: '24px 0 0'
    }
  }, "I'm Vitor \u2014 a product designer working across identity, interface and design systems. Twelve years in, I still believe the best systems are the ones you barely notice: restraint, one clear signal, edges that do the work."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(VGa.Button, {
    variant: "accent",
    onClick: () => setOpen(true)
  }, "Get in touch"), /*#__PURE__*/React.createElement(VGa.Button, {
    variant: "ghost"
  }, "Download CV"))), /*#__PURE__*/React.createElement(VGa.Card, {
    tone: "ink",
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(VGa.Avatar, {
    name: "Vitor Gomes",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--paper)'
    }
  }, "Vitor Gomes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-inverse-faint)',
      marginTop: 4
    }
  }, "Amsterdam \xB7 Remote"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(VGa.Badge, {
    status: "live",
    onDark: true
  }, "Available \xB7 Q3")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-inverse-muted)',
      margin: 0
    }
  }, "Taking on two select projects this quarter \u2014 brand systems and product design for teams shaping something new."))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '64px 48px',
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Questions"), /*#__PURE__*/React.createElement(VGa.Accordion, {
    items: [{
      title: 'What do you work on?',
      content: "Brand and product design for teams shaping new things — identity, interface and the systems that hold them together."
    }, {
      title: 'Where are you based?',
      content: 'Amsterdam, working remotely across European and US time zones.'
    }, {
      title: 'Do you take freelance?',
      content: 'Yes — a couple of select engagements a quarter, usually 4–12 weeks.'
    }, {
      title: "What's your process?",
      content: 'Brief, design, ship. Tight loops, working in the open, no black boxes.'
    }]
  })), /*#__PURE__*/React.createElement(VGa.Modal, {
    open: open,
    onClose: () => setOpen(false),
    title: "Start a project",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VGa.Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(VGa.Button, {
      variant: "accent",
      size: "sm",
      onClick: () => setOpen(false)
    }, "Send"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      margin: '0 0 16px'
    }
  }, "Tell me a little about what you're building and I'll get back within two days."), /*#__PURE__*/React.createElement(VGa.Input, {
    label: "Email",
    placeholder: "you@studio.com",
    wrapperStyle: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement(VGa.Input, {
    label: "Project",
    placeholder: "A sentence or two"
  })));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudyScreen.jsx
try { (() => {
/* Case study — breadcrumb, hero, full-bleed image, sidebar + prose,
   a process stepper and an outcome stat band. */
const VGc = window.VitorGomesDesignSystem_32625a;
function SectionHead({
  n,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '60px 1fr',
      gap: 16,
      alignItems: 'baseline',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      color: 'var(--text-faint)'
    }
  }, n), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, title));
}
function CaseStudyScreen({
  project,
  onNavigate
}) {
  const p = project || {};
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '40px 48px 0'
    }
  }, /*#__PURE__*/React.createElement(VGc.Breadcrumb, {
    items: [{
      label: 'Work'
    }, {
      label: p.discipline || 'Branding'
    }, {
      label: p.title || 'Case study'
    }],
    onNavigate: (it, i) => {
      if (i < 2) onNavigate('work');
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '40px 48px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 20,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, (p.tags || []).map(t => /*#__PURE__*/React.createElement(VGc.Tag, {
    key: t
  }, t)), /*#__PURE__*/React.createElement(VGc.Badge, {
    status: p.status || 'live'
  }, p.statusLabel || 'Live')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(36px,5.5vw,64px)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      fontWeight: 700,
      margin: 0,
      maxWidth: '18ch'
    }
  }, p.title || 'A visual identity for a video platform'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      maxWidth: '56ch',
      margin: '24px 0 0'
    }
  }, p.summary)), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 48px 56px'
    }
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    ratio: "16/8",
    label: "[ Hero \u2014 case study cover ]",
    style: {
      border: '1px solid var(--border-hairline)'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 48px 80px',
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-hairline)',
      padding: 8
    }
  }, ['Overview', 'Challenge', 'Process', 'Outcome'].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
      padding: '10px 12px',
      borderLeft: i === 0 ? '2px solid var(--accent)' : '2px solid transparent',
      background: i === 0 ? 'var(--surface-subtle)' : 'transparent',
      cursor: 'pointer'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      lineHeight: 2,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Role \xB7 Lead Designer"), /*#__PURE__*/React.createElement("div", null, "Year \xB7 ", p.year || '2026'), /*#__PURE__*/React.createElement("div", null, "Team \xB7 4"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    n: "01",
    title: "Overview"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      maxWidth: '64ch',
      marginLeft: 76
    }
  }, "A hosting product had outgrown its first identity. We rebuilt the brand around a single confident mark, a monochrome system and a reserved accent \u2014 restraint that let the work, not the chrome, carry the page.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    n: "02",
    title: "Challenge"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      maxWidth: '64ch',
      marginLeft: 76
    }
  }, "Three product lines, one voice. The system had to flex from a dense dashboard to a marketing hero without losing its center of gravity \u2014 edges over shadows, mono labels everywhere, one accent held in reserve for the live state.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    n: "03",
    title: "Process"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 76
    }
  }, /*#__PURE__*/React.createElement(VGc.Stepper, {
    steps: ['Brief', 'Design', 'Ship'],
    current: 2
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    n: "04",
    title: "Outcome"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 76,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(VGc.Card, {
    tone: "ink"
  }, /*#__PURE__*/React.createElement(VGc.StatCard, {
    value: "+38%",
    label: "Activation, first 90 days",
    onDark: true
  })), /*#__PURE__*/React.createElement(VGc.Card, {
    tone: "ink"
  }, /*#__PURE__*/React.createElement(VGc.StatCard, {
    value: "1",
    label: "System, three products",
    onDark: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 76,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(VGc.Button, {
    variant: "accent",
    onClick: () => onNavigate('about')
  }, "Start a project like this"))))));
}
Object.assign(window, {
  CaseStudyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Chrome.jsx
try { (() => {
/* Shared chrome — top bar + footer + the VG mark. Reads primitives off
   the design-system bundle. Exports to window for the other screens. */
const VG = window.VitorGomesDesignSystem_32625a;
function VGMark({
  size = 40,
  color = 'var(--ink-900)'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      width: size,
      flex: 'none',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 562 369",
    fill: "currentColor",
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: "matrix(1,0,0,1,-696,73)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "matrix(8.693433,0,0,8.693433,-7671.335362,-8770.706084)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "matrix(1,0,0,1,994.8125,1002.9085)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,37.612L31.187,18.993L31.187,18.619L0,0L-31.187,18.619L-31.187,18.993L0,37.612ZM0,32.004L-22.105,18.806L0,5.609L22.105,18.806L0,32.004Z"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "matrix(1,0,0,1,1008.8203,1021.5751)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0.169L0,0L-14.077,-8.404L-28.154,0L-28.154,0.169L-14.077,8.573L0,0.169Z"
  }))))));
}
function TopBar({
  page,
  onNavigate
}) {
  const items = [{
    key: 'home',
    label: 'Work'
  }, {
    key: 'about',
    label: 'About'
  }, {
    key: 'writing',
    label: 'Writing'
  }];
  const activeKey = page === 'case' ? 'home' : page;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--surface-page)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '16px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(VGMark, {
    size: 40
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it.key,
    onClick: () => onNavigate(it.key === 'writing' ? page : it.key),
    style: {
      padding: '8px 12px',
      cursor: 'pointer',
      color: activeKey === it.key ? 'var(--text-primary)' : 'var(--text-secondary)',
      borderBottom: activeKey === it.key ? '2px solid var(--accent)' : '2px solid transparent'
    }
  }, it.label)), /*#__PURE__*/React.createElement(VG.Button, {
    size: "sm",
    style: {
      marginLeft: 8
    },
    onClick: () => onNavigate('about')
  }, "Contact"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--text-inverse-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '40px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(VGMark, {
    size: 34,
    color: "var(--paper)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, "Vitor Gomes \xB7 Product Designer")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, "\xA9 2026 \u2014 Amsterdam")));
}

/* A faithful reuse of the library's own placeholder treatment. */
function ImagePlaceholder({
  ratio = '16/10',
  label = '[ Project image ]',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: 'repeating-linear-gradient(135deg,#F4F4F5 0 11px,#E9E9EB 11px 22px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      color: 'var(--text-faint)',
      textTransform: 'uppercase'
    }
  }, label));
}
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      ...style
    }
  }, children);
}
Object.assign(window, {
  VGMark,
  TopBar,
  Footer,
  ImagePlaceholder,
  Eyebrow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
/* Home — masthead hero, selected work grid, an ink stat strip. */
const VGh = window.VitorGomesDesignSystem_32625a;
function ProjectCard({
  project,
  onOpen
}) {
  return /*#__PURE__*/React.createElement(VGh.Card, {
    interactive: true,
    flush: true,
    onClick: onOpen,
    style: {
      overflow: 'hidden',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, {
    label: project.imageLabel
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, project.tags.map(t => /*#__PURE__*/React.createElement(VGh.Tag, {
    key: t,
    size: "sm"
  }, t))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.18,
      margin: '0 0 10px'
    }
  }, project.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      margin: '0 0 18px'
    }
  }, project.summary), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      borderBottom: '1px solid var(--accent)',
      paddingBottom: 3
    }
  }, "Read case \u2192")));
}
function HomeScreen({
  projects,
  onOpenCase,
  onNavigate
}) {
  const featured = projects.slice(0, 4);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '88px 48px 56px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 24
    }
  }, "Product Designer \xB7 Amsterdam \xB7 Available Q3"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(38px,6vw,72px)',
      lineHeight: 0.98,
      letterSpacing: '-0.03em',
      fontWeight: 700,
      margin: 0,
      maxWidth: '15ch'
    }
  }, "Design for teams shaping new things."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      maxWidth: '54ch',
      margin: '24px 0 0',
      fontWeight: 400
    }
  }, "Twelve years of brand, product and the systems that hold them together \u2014 identity through interface, shipped end to end."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(VGh.Button, {
    variant: "accent",
    onClick: () => onNavigate('about')
  }, "Start a project"), /*#__PURE__*/React.createElement(VGh.Button, {
    variant: "secondary",
    onClick: () => onNavigate('work')
  }, "See all work"))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '64px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Selected work"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate('work'),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, "Index \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, featured.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    project: p,
    onOpen: () => onOpenCase(p)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '56px 48px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, [['12+', 'Years shipping product'], ['40', 'Projects delivered'], ['9', 'Brands built from zero'], ['3', 'Continents, remote']].map(([v, l]) => /*#__PURE__*/React.createElement(VGh.StatCard, {
    key: l,
    value: v,
    label: l,
    onDark: true
  })))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkScreen.jsx
try { (() => {
/* Work — the index of work: filter, sort, the hairline table, paging. */
const VGw = window.VitorGomesDesignSystem_32625a;
function WorkScreen({
  projects,
  onOpenCase
}) {
  const [discipline, setDiscipline] = React.useState('All');
  const [sort, setSort] = React.useState('recent');
  const [page, setPage] = React.useState(1);
  const disciplines = ['All', 'Branding', 'UX / UI', 'Visual Design'];
  let rows = projects.filter(p => discipline === 'All' || p.discipline === discipline);
  rows = [...rows].sort((a, b) => sort === 'az' ? a.title.localeCompare(b.title) : sort === 'oldest' ? a.year - b.year : b.year - a.year);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '72px 48px 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 18
    }
  }, "Index / ", rows.length, " projects"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(34px,5vw,56px)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      fontWeight: 700,
      margin: 0
    }
  }, "All work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 16,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(VGw.SegmentedControl, {
    options: disciplines,
    value: discipline,
    onChange: v => {
      setDiscipline(v);
      setPage(1);
    }
  }), /*#__PURE__*/React.createElement(VGw.Menu, {
    label: "Sort",
    value: sort,
    onSelect: setSort,
    align: "right",
    items: [{
      label: 'Recent',
      value: 'recent'
    }, {
      label: 'Oldest',
      value: 'oldest'
    }, {
      label: 'A–Z',
      value: 'az'
    }]
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 48px 40px'
    }
  }, /*#__PURE__*/React.createElement(VGw.Table, {
    columns: [{
      key: 'title',
      header: 'Project',
      width: '2.4fr',
      strong: true
    }, {
      key: 'discipline',
      header: 'Discipline',
      width: '1.4fr',
      muted: true
    }, {
      key: 'year',
      header: 'Year',
      width: '1fr',
      mono: true,
      muted: true
    }, {
      key: 'status',
      header: 'Status',
      width: '0.9fr',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement(VGw.Badge, {
        status: r.status
      }, r.statusLabel)
    }],
    rows: rows,
    rowKey: r => r.id,
    onRowClick: onOpenCase
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(VGw.Pagination, {
    total: 4,
    page: page,
    onChange: setPage
  }))));
}
Object.assign(window, {
  WorkScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Modal = __ds_scope.Modal;

})();
