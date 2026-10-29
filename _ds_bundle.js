/* @ds-bundle: {"format":3,"namespace":"VitorGomesDesignSystem_32625a","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Drawer","sourcePath":"components/overlay/Drawer.jsx"},{"name":"Menu","sourcePath":"components/overlay/Menu.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"},{"name":"ProgressRing","sourcePath":"components/case/ProgressRing.jsx"},{"name":"SectionNav","sourcePath":"components/case/SectionNav.jsx"},{"name":"ReadingBar","sourcePath":"components/case/ReadingBar.jsx"},{"name":"CompareSlider","sourcePath":"components/case/CompareSlider.jsx"},{"name":"AnnotatedScreen","sourcePath":"components/case/AnnotatedScreen.jsx"},{"name":"FlowDiagram","sourcePath":"components/case/FlowDiagram.jsx"},{"name":"SectionHeader","sourcePath":"components/case/SectionHeader.jsx"},{"name":"CaseDetails","sourcePath":"components/case/CaseDetails.jsx"},{"name":"OutcomeStrip","sourcePath":"components/case/OutcomeStrip.jsx"},{"name":"DecisionRow","sourcePath":"components/case/DecisionRow.jsx"},{"name":"ReasoningChain","sourcePath":"components/case/ReasoningChain.jsx"},{"name":"ReframeQuote","sourcePath":"components/case/ReframeQuote.jsx"},{"name":"StateList","sourcePath":"components/case/StateList.jsx"},{"name":"CaseNav","sourcePath":"components/case/CaseNav.jsx"},{"name":"NumberedCards","sourcePath":"components/case/NumberedCards.jsx"},{"name":"Callout","sourcePath":"components/case/Callout.jsx"},{"name":"ImageCarousel","sourcePath":"components/case/ImageCarousel.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"3c63b8a3bbf7","components/core/Badge.jsx":"7a0f0c67080c","components/core/Button.jsx":"bd96195b1914","components/core/Input.jsx":"4ed995a12431","components/core/SegmentedControl.jsx":"90cb5c3a6870","components/core/Tag.jsx":"75880b5c59f6","components/data/Card.jsx":"d776a8193a38","components/data/StatCard.jsx":"0345685c5e2a","components/data/Table.jsx":"3bbc3313bc2b","components/feedback/Accordion.jsx":"0f1722ced81c","components/feedback/ProgressBar.jsx":"cb91d900641c","components/feedback/Skeleton.jsx":"31c384fc2611","components/feedback/Spinner.jsx":"f82123f19f68","components/feedback/Tooltip.jsx":"b15ee0dc31d2","components/navigation/Breadcrumb.jsx":"aa2a214f4dfd","components/navigation/Pagination.jsx":"b80e29982e5c","components/navigation/Stepper.jsx":"77f99144f916","components/overlay/Drawer.jsx":"09dd22946423","components/overlay/Menu.jsx":"d32dd8003a33","components/overlay/Modal.jsx":"7e580b9904d1","ui_kits/portfolio/AboutScreen.jsx":"0299aead1532","ui_kits/portfolio/CaseStudyScreen.jsx":"e5abb20019e4","ui_kits/portfolio/Chrome.jsx":"9342f4c7a878","ui_kits/portfolio/HomeScreen.jsx":"59e64b609b52","ui_kits/portfolio/WorkScreen.jsx":"434ff50e6e1b","components/case/ProgressRing.jsx":"9ac04686f255","components/case/SectionNav.jsx":"6618eb5a0a04","components/case/ReadingBar.jsx":"61cc3d7bd900","components/case/CompareSlider.jsx":"fc08223b5127","components/case/AnnotatedScreen.jsx":"356798a125fe","components/case/FlowDiagram.jsx":"2db64e0d2215","components/case/SectionHeader.jsx":"903a73a49f31","components/case/CaseDetails.jsx":"a9cb554a64c8","components/case/OutcomeStrip.jsx":"c0a353d7d9f9","components/case/DecisionRow.jsx":"e2c86384f7f8","components/case/ReasoningChain.jsx":"1edfd48f441d","components/case/ReframeQuote.jsx":"7b53ab408135","components/case/StateList.jsx":"391e8201608e","components/case/CaseNav.jsx":"7706356a3bb9","components/case/NumberedCards.jsx":"88b2291f9497","components/case/Callout.jsx":"ccfd76496129","components/case/ImageCarousel.jsx":"1982518e1d6f"},"inlinedExternals":[],"unexposedExports":[]} */

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

// components/case/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CIRC = 2 * Math.PI * 6;

/**
 * ProgressRing — a small ink arc on a hairline track that pairs with a
 * percentage, so reading progress never reads as another section number.
 * Starts at 12 o'clock, runs clockwise, stays ink at 100%.
 */
function ProgressRing({
  value = 0,
  size = 14,
  strokeWidth = 2,
  style,
  ...rest
}) {
  const v = Math.max(0, Math.min(100, Number(value) || 0));
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 14 14",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flexShrink: 0,
      transform: 'rotate(-90deg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "6",
    fill: "none",
    stroke: "var(--border-hairline)",
    strokeWidth: strokeWidth
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "6",
    fill: "none",
    stroke: "var(--text-primary)",
    strokeWidth: strokeWidth,
    strokeDasharray: CIRC.toFixed(2),
    strokeDashoffset: (CIRC * (1 - v / 100)).toFixed(2),
    style: {
      transition: 'stroke-dashoffset var(--dur-base, 180ms) var(--ease-out, ease)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/case/SectionNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useState
} = React;
const mono = {
  fontFamily: 'var(--font-mono)',
  textTransform: 'uppercase'
};

/* Resolve "auto" from the viewport: open ≥1500px, collapsed 900–1499px,
   hidden below 900px. Renders collapsed on the server and first paint. */
function useNavMode(mode) {
  const [auto, setAuto] = useState('collapsed');
  useEffect(() => {
    if (mode !== 'auto' || typeof window === 'undefined' || !window.matchMedia) return undefined;
    const wide = window.matchMedia('(min-width: 1500px)');
    const mid = window.matchMedia('(min-width: 900px)');
    const update = () => setAuto(wide.matches ? 'open' : mid.matches ? 'collapsed' : 'hidden');
    update();
    wide.addEventListener('change', update);
    mid.addEventListener('change', update);
    return () => {
      wide.removeEventListener('change', update);
      mid.removeEventListener('change', update);
    };
  }, [mode]);
  return mode === 'auto' ? auto : mode;
}

/**
 * SectionNav — the case-study side nav. Numbered sections with a 2px
 * rail each (done = ink, current = filling as you read, upcoming =
 * hairline), and a footer with the % read and the minutes left. The
 * rails already show progress, so the footer is text only. Open with
 * labels on wide screens, collapsed to numbers in between (hover or
 * keyboard focus opens it over the page), hidden on phones (use
 * ReadingBar there).
 */
function SectionNav({
  sections = [],
  activeId,
  sectionProgress = 0,
  progress = 0,
  minutesLeft,
  mode = 'auto',
  openOnHover = true,
  onNavigate,
  label = 'Case sections',
  style,
  ...rest
}) {
  const resolved = useNavMode(mode);
  const [hover, setHover] = useState(null);
  const [focus, setFocus] = useState(null);
  const [peek, setPeek] = useState(false);
  if (resolved === 'hidden') return null;
  // Collapsed opens while hovered or while focus is inside, drawn over the page.
  const peeking = resolved === 'collapsed' && openOnHover && peek;
  const open = resolved === 'open' || peeking;
  const activeIndex = Math.max(0, sections.findIndex(s => s.id === activeId));
  const pct = Math.round(Math.max(0, Math.min(100, progress)));
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": label,
    onMouseEnter: () => setPeek(true),
    onMouseLeave: () => setPeek(false),
    onFocus: () => setPeek(true),
    onBlur: e => {
      if (!e.currentTarget.contains(e.relatedTarget)) setPeek(false);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: 'auto',
      minWidth: open ? 160 : 0,
      background: 'var(--surface-page)',
      border: '1px solid var(--border-hairline)',
      boxShadow: peeking ? 'var(--shadow-pop)' : 'none',
      transition: 'box-shadow var(--dur-fast, 120ms) var(--ease-out, ease)',
      ...style
    }
  }, rest), sections.map((s, i) => {
    const current = i === activeIndex;
    const fill = i < activeIndex ? 100 : current ? Math.max(4, Math.min(100, sectionProgress)) : 0;
    return /*#__PURE__*/React.createElement("a", {
      key: s.id,
      href: s.href || `#${s.id}`,
      "aria-label": s.label,
      "aria-current": current ? 'location' : undefined,
      onClick: onNavigate ? e => onNavigate(s.id, e) : undefined,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(null),
      onFocus: () => setFocus(i),
      onBlur: () => setFocus(null),
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        minHeight: 32,
        boxSizing: 'border-box',
        padding: '7px 10px 7px 12px',
        textDecoration: 'none',
        background: current || hover === i ? 'var(--surface-subtle)' : 'var(--surface-page)',
        outline: focus === i ? 'var(--ring-width, 2px) solid var(--ring)' : 'none',
        outlineOffset: -2,
        transition: 'background-color var(--dur-fast, 120ms) var(--ease-out, ease)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 2,
        background: 'var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        width: 2,
        height: `${fill}%`,
        background: 'var(--text-primary)',
        transition: 'height var(--dur-base, 180ms) var(--ease-out, ease)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 10,
        letterSpacing: '0.1em',
        color: 'var(--text-muted)',
        width: 18,
        flexShrink: 0
      }
    }, s.number || String(i + 1).padStart(2, '0')), open && /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        letterSpacing: '0.08em',
        whiteSpace: 'nowrap',
        color: current ? 'var(--text-primary)' : 'var(--text-secondary)'
      }
    }, s.label));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px',
      borderTop: '1px solid var(--border-hairline)',
      ...mono,
      fontSize: 10,
      letterSpacing: '0.1em',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, pct, "%"), open && minutesLeft != null && /*#__PURE__*/React.createElement("span", null, " \xB7 ", minutesLeft, " min left")));
}
Object.assign(__ds_scope, { SectionNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/SectionNav.jsx", error: String((e && e.message) || e) }); }

// components/case/ReadingBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ReadingBar — the phone version of SectionNav. A slim sticky bar with
 * the current section, minutes left and a 2px progress line along its
 * bottom edge.
 */
function ReadingBar({
  section,
  progress = 0,
  minutesLeft,
  sticky = true,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, progress));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "progressbar",
    "aria-label": "Reading progress",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(pct),
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 10,
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, section ? `${section.number} · ${section.label}` : ''), minutesLeft != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, minutesLeft, " min left")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      width: `${pct}%`,
      background: 'var(--text-primary)',
      transition: 'width var(--dur-base, 180ms) var(--ease-out, ease)'
    }
  })));
}
Object.assign(__ds_scope, { ReadingBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/ReadingBar.jsx", error: String((e && e.message) || e) }); }

// components/case/CompareSlider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const {
  Badge
} = __ds_scope;
const stripes = 'repeating-linear-gradient(135deg, var(--gray-50) 0 11px, var(--gray-150) 11px 22px)';
const monoLabel = {
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)'
};
function Layer({
  img,
  fallback,
  style
}) {
  if (img && img.src) {
    return /*#__PURE__*/React.createElement("img", {
      src: img.src,
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: style && style.background ? style.background : 'var(--surface-sunken)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: monoLabel
  }, "[ ", fallback, " ]"));
}

/**
 * CompareSlider — before and after in one frame, split by a draggable
 * handle. The whole image is the hit area; it is a native range input,
 * so arrows, Page Up/Down and Home/End work. Each label fades out once
 * its side is under 12% of the frame.
 */
function CompareSlider({
  before,
  after,
  labels = {
    before: 'Before',
    after: 'After'
  },
  start = 50,
  ratio = '16 / 9',
  caption,
  style,
  ...rest
}) {
  const [pos, setPos] = useState(start);
  const fade = on => ({
    opacity: on ? 1 : 0,
    transition: 'opacity var(--dur-base, 180ms) var(--ease-out, ease)',
    pointerEvents: 'none'
  });
  const alt = [before && before.alt && `Before: ${before.alt}`, after && after.alt && `After: ${after.alt}`].filter(Boolean).join('. ');
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": alt || 'Before and after comparison',
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(Layer, {
    img: after,
    fallback: labels.after
  }), /*#__PURE__*/React.createElement(Layer, {
    img: before,
    fallback: labels.before,
    style: {
      clipPath: `inset(0 ${100 - pos}% 0 0)`,
      background: stripes
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      ...fade(pos > 12)
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: "archived"
  }, labels.before)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      ...fade(pos < 88)
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: "live"
  }, labels.after)), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: `${pos}%`,
      width: 2,
      marginLeft: -1,
      background: 'var(--text-primary)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '50%',
      left: `${pos}%`,
      width: 44,
      height: 44,
      margin: '-22px 0 0 -22px',
      boxSizing: 'border-box',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius)',
      background: 'var(--surface-page)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      fontSize: 16,
      lineHeight: 1,
      color: 'var(--text-primary)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2039"), /*#__PURE__*/React.createElement("span", null, "\u203A")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    step: "1",
    value: pos,
    onChange: e => setPos(Number(e.target.value)),
    "aria-label": "Drag to compare before and after",
    "aria-valuetext": `${pos}% ${labels.before.toLowerCase()}`,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      opacity: 0,
      cursor: 'ew-resize'
    }
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '8px 24px',
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, caption.before && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 600
    }
  }, labels.before), " \u2014 ", caption.before), caption.after && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 600
    }
  }, labels.after), " \u2014 ", caption.after)));
}
Object.assign(__ds_scope, { CompareSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/CompareSlider.jsx", error: String((e && e.message) || e) }); }

// components/case/AnnotatedScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef,
  useState
} = React;
const POP_W = 260;
const mono = {
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.1em'
};
function CalloutBody({
  c,
  index,
  total
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, String(index + 1).padStart(2, '0'), " / ", String(total).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-hairline)'
    }
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 17,
      lineHeight: 1.3,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      margin: 0
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, c.body));
}

/**
 * AnnotatedScreen — one screen with up to four numbered markers. Hover,
 * focus or tap a marker (or its row underneath) to open its callout.
 * Exactly one is open; the first opens on load. With placement "auto"
 * the card opens on the side with room and drops under the screen when
 * neither side fits (phones).
 */
function AnnotatedScreen({
  image,
  callouts = [],
  ratio = '9 / 16',
  width = 340,
  placement = 'auto',
  defaultIndex = 0,
  style,
  ...rest
}) {
  const items = callouts.slice(0, 4);
  const [active, setActive] = useState(Math.min(defaultIndex, Math.max(0, items.length - 1)));
  const [side, setSide] = useState(placement === 'left' ? 'left' : 'right');
  const stageRef = useRef(null);
  const frameRef = useRef(null);
  const markerRefs = useRef([]);
  const c = items[active];
  // A row click also takes the reader to its marker on the screen, when it's out of view.
  const goTo = i => () => {
    setActive(i);
    const el = markerRefs.current[i];
    if (!el || typeof window === 'undefined') return;
    const r = el.getBoundingClientRect();
    if (r.top >= 80 && r.bottom <= window.innerHeight - 24) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'center'
    });
  };
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const measure = () => {
      const stage = stageRef.current,
        frame = frameRef.current;
      if (!stage || !frame || !c) return;
      const s = stage.getBoundingClientRect(),
        f = frame.getBoundingClientRect();
      const mx = f.left + f.width * c.x / 100;
      const need = POP_W + 38;
      const fitsR = s.right - mx >= need,
        fitsL = mx - s.left >= need;
      if (placement === 'right') setSide(fitsR ? 'right' : 'inline');else if (placement === 'left') setSide(fitsL ? 'left' : 'inline');else if (c.x > 50) setSide(fitsL ? 'left' : fitsR ? 'right' : 'inline');else setSide(fitsR ? 'right' : fitsL ? 'left' : 'inline');
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active, placement, c && c.x]);
  if (!items.length) return null;
  const pick = i => () => {
    if (i !== active) setActive(i);
  };
  const top = Math.min(Math.max(c.y, 18), 82);
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    ref: stageRef,
    style: {
      padding: '56px 24px',
      background: 'var(--surface-subtle)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: frameRef,
    style: {
      position: 'relative',
      width,
      maxWidth: '100%'
    }
  }, image && image.src ? /*#__PURE__*/React.createElement("img", {
    src: image.src,
    alt: image.alt || '',
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius)',
      background: 'repeating-linear-gradient(135deg, var(--paper) 0 11px, var(--gray-100) 11px 22px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 11,
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "[ Screen ]")), items.map((d, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      ref: el => {
        markerRefs.current[i] = el;
      },
      "aria-label": `Callout ${i + 1}: ${d.title}`,
      "aria-expanded": on,
      onMouseEnter: pick(i),
      onFocus: pick(i),
      onClick: pick(i),
      style: {
        position: 'absolute',
        left: `${d.x}%`,
        top: `${d.y}%`,
        width: 44,
        height: 44,
        margin: '-22px 0 0 -22px',
        padding: 0,
        border: 0,
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: on ? 3 : 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--green-600)' : 'var(--ink-900)',
        color: 'var(--paper)',
        boxShadow: `0 0 0 2px var(--paper)${on ? ', 0 0 0 4px var(--green-600)' : ''}`,
        ...mono,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.04em',
        transition: 'background-color var(--dur-fast, 120ms) var(--ease-out, ease)'
      }
    }, String(i + 1).padStart(2, '0')));
  }), side !== 'inline' && /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      position: 'absolute',
      top: `${top}%`,
      transform: 'translateY(-50%)',
      ...(side === 'left' ? {
        right: `calc(${100 - c.x}% + 30px)`
      } : {
        left: `calc(${c.x}% + 30px)`
      }),
      width: POP_W,
      boxSizing: 'border-box',
      padding: 20,
      background: 'var(--surface-page)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow-pop)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      zIndex: 4,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(CalloutBody, {
    c: c,
    index: active,
    total: items.length
  })))), side === 'inline' && /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      padding: 20,
      border: '1px solid var(--border-hairline)',
      borderTop: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CalloutBody, {
    c: c,
    index: active,
    total: items.length
  })), /*#__PURE__*/React.createElement("ol", {
    "aria-label": "Callouts",
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 1,
      background: 'var(--border-hairline)',
      border: '1px solid var(--border-hairline)',
      borderTop: 0
    }
  }, items.map((d, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        flex: '1 1 220px',
        minWidth: 0,
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onMouseEnter: pick(i),
      onFocus: pick(i),
      onClick: goTo(i),
      "aria-pressed": on,
      style: {
        width: '100%',
        minHeight: 64,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '16px 20px',
        border: 0,
        borderTop: `2px solid ${on ? 'var(--green-600)' : 'transparent'}`,
        background: on ? 'var(--surface-subtle)' : 'var(--surface-page)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-sans)',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 500
      }
    }, d.title)));
  })));
}
Object.assign(__ds_scope, { AnnotatedScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/AnnotatedScreen.jsx", error: String((e && e.message) || e) }); }

// components/case/FlowDiagram.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const {
  SegmentedControl
} = __ds_scope;
const SIZE = {
  step: [136, 56],
  decision: [120, 80],
  exit: [128, 48]
};
const INK = 'var(--text-primary)';
const OFF = 'var(--border-default)';

/* A rounded diamond as a clip path, so decision nodes share the
   system's 2px-ish softness instead of sharp polygon tips. */
function diamondPath(w, h, t = 0.12) {
  const P = [[w / 2, 0], [w, h / 2], [w / 2, h], [0, h / 2]];
  const pt = (a, b) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const f = n => n.toFixed(1);
  let d = '';
  P.forEach((v, i) => {
    const a = pt(v, P[(i + 3) % 4]);
    const b = pt(v, P[(i + 1) % 4]);
    d += `${i === 0 ? 'M' : 'L'} ${f(a[0])} ${f(a[1])} Q ${f(v[0])} ${f(v[1])} ${f(b[0])} ${f(b[1])} `;
  });
  return `${d}Z`;
}
function box(n) {
  const [dw, dh] = SIZE[n.type] || SIZE.step;
  const w = n.w || dw,
    h = n.h || dh;
  return {
    x: n.x,
    y: n.y,
    w,
    h,
    cx: n.x + w / 2,
    cy: n.y + h / 2,
    r: n.x + w,
    b: n.y + h
  };
}

/* Orthogonal route: straight when aligned, elbow when the target is
   further along, down-then-across when it sits below. */
function route(f, t) {
  if (Math.abs(f.cy - t.cy) < 2 && t.x >= f.r) return [[f.r, f.cy], [t.x, t.cy]];
  if (t.x >= f.r) {
    const mx = (f.r + t.x) / 2;
    return [[f.r, f.cy], [mx, f.cy], [mx, t.cy], [t.x, t.cy]];
  }
  if (t.y >= f.b) {
    if (Math.abs(f.cx - t.cx) < 2) return [[f.cx, f.b], [t.cx, t.y]];
    const my = (f.b + t.y) / 2;
    return [[f.cx, f.b], [f.cx, my], [t.cx, my], [t.cx, t.y]];
  }
  return [[f.cx, f.y], [t.cx, t.b]];
}

/**
 * FlowDiagram — a journey drawn from data: steps (boxes), decisions
 * (rounded green diamonds) and exits (dashed boxes), joined by
 * orthogonal connectors. Name a few paths and the reader can trace each
 * one; the rest of the diagram fades back.
 */
function FlowDiagram({
  nodes = [],
  edges = [],
  paths = [],
  defaultPath,
  width,
  height,
  title = 'Trace a path',
  style,
  ...rest
}) {
  const [pathId, setPathId] = useState(defaultPath || paths[0] && paths[0].id);
  const uid = React.useId ? React.useId().replace(/[^a-zA-Z0-9_-]/g, '') : 'fd';
  const byId = Object.fromEntries(nodes.map(n => [n.id, box(n)]));
  const W = width || Math.max(0, ...nodes.map(n => byId[n.id].r)) + 8;
  const H = height || Math.max(0, ...nodes.map(n => byId[n.id].b)) + 8;
  const path = paths.find(p => p.id === pathId);
  const onSet = path ? new Set(path.nodes) : null;
  const isOn = id => !onSet || onSet.has(id);
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), paths.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, title), /*#__PURE__*/React.createElement(SegmentedControl, {
    options: paths.map(p => ({
      label: p.label,
      value: p.id
    })),
    value: pathId,
    onChange: setPathId
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius)',
      overflowX: 'auto',
      background: 'var(--surface-page)',
      padding: '40px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: W,
      height: H,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, [['on', INK], ['off', OFF]].map(([k, col]) => /*#__PURE__*/React.createElement("marker", {
    key: k,
    id: `${uid}-${k}`,
    viewBox: "0 0 8 8",
    refX: "8",
    refY: "4",
    markerWidth: "8",
    markerHeight: "8",
    markerUnits: "userSpaceOnUse",
    orient: "auto-start-reverse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0 L8 4 L0 8 Z",
    fill: col
  })))), edges.map((e, i) => ({
    e,
    i,
    on: isOn(e.from) && isOn(e.to)
  })).sort((a, b) => Number(a.on) - Number(b.on)).map(({
    e,
    i,
    on
  }) => {
    const f = byId[e.from],
      t = byId[e.to];
    if (!f || !t) return null;
    const pts = e.points || route(f, t);
    return /*#__PURE__*/React.createElement("polyline", {
      key: i,
      points: pts.map(p => p.join(',')).join(' '),
      fill: "none",
      stroke: on ? INK : OFF,
      strokeWidth: on && onSet ? 2 : 1,
      markerEnd: `url(#${uid}-${on ? 'on' : 'off'})`,
      style: {
        transition: 'stroke var(--dur-base, 180ms) var(--ease-out, ease)'
      }
    });
  })), nodes.map(n => {
    const b = byId[n.id];
    const on = isOn(n.id);
    const base = {
      position: 'absolute',
      left: b.x,
      top: b.y,
      width: b.w,
      height: b.h,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 8,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.25,
      color: on ? INK : 'var(--text-faint)',
      transition: 'color var(--dur-base, 180ms) var(--ease-out, ease), border-color var(--dur-base, 180ms), background-color var(--dur-base, 180ms)'
    };
    if (n.type === 'decision') {
      return /*#__PURE__*/React.createElement("div", {
        key: n.id,
        style: {
          ...base,
          padding: '8px 18px',
          background: on ? 'var(--green-tint-light)' : 'var(--surface-subtle)',
          clipPath: `path('${diamondPath(b.w, b.h)}')`
        }
      }, n.label);
    }
    return /*#__PURE__*/React.createElement("div", {
      key: n.id,
      style: {
        ...base,
        background: 'var(--surface-page)',
        borderRadius: 'var(--radius)',
        border: `1px ${n.type === 'exit' ? 'dashed' : 'solid'} ${on ? 'var(--border-strong)' : 'var(--border-hairline)'}`
      }
    }, n.label);
  }))), path && path.description && /*#__PURE__*/React.createElement("figcaption", {
    role: "status",
    style: {
      padding: '16px 20px',
      border: '1px solid var(--border-hairline)',
      borderTop: 0,
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 600
    }
  }, path.label, "."), " ", path.description));
}
Object.assign(__ds_scope, { FlowDiagram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/FlowDiagram.jsx", error: String((e && e.message) || e) }); }

// components/case/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — the case-study section opener: a mono eyebrow
 * ("04 · Research"), a sentence-case headline and an optional lead.
 */
function SectionHeader({
  number,
  eyebrow,
  title,
  lead,
  as = 'h2',
  id,
  style,
  ...rest
}) {
  const H = as;
  const label = [number, eyebrow].filter(Boolean).join(' · ');
  return /*#__PURE__*/React.createElement("header", _extends({
    id: id,
    style: {
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)',
      marginBottom: 20
    }
  }, label), /*#__PURE__*/React.createElement(H, {
    style: {
      fontSize: 40,
      lineHeight: 1.05,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-tight)',
      margin: 0,
      textWrap: 'balance'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      margin: '24px 0 0'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/case/CaseDetails.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const label = {
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: 'var(--tracking-caps)',
  textTransform: 'uppercase',
  margin: 0
};
function Cell({
  item,
  basis
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: `1 1 ${basis}px`,
      minWidth: 0,
      boxSizing: 'border-box',
      padding: 24,
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...label,
      color: 'var(--text-primary)'
    }
  }, item.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, item.value));
}

/**
 * CaseDetails — the spec-sheet table under the cover image: a header
 * row, four short facts (Role, Team, Timeline, Tools) and three longer
 * ones (What I did, Impact, Constraints) on a hairline grid.
 */
function CaseDetails({
  title = 'Case details',
  facts = [],
  details = [],
  attached = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    "aria-label": title,
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      background: 'var(--border-hairline)',
      border: '1px solid var(--border-hairline)',
      borderTop: attached ? 0 : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...label,
      color: 'var(--text-muted)'
    }
  }, title)), facts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 1
    }
  }, facts.map((f, i) => /*#__PURE__*/React.createElement(Cell, {
    key: i,
    item: f,
    basis: 200
  }))), details.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 1
    }
  }, details.map((f, i) => /*#__PURE__*/React.createElement(Cell, {
    key: i,
    item: f,
    basis: 280
  })))));
}
Object.assign(__ds_scope, { CaseDetails });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/CaseDetails.jsx", error: String((e && e.message) || e) }); }

// components/case/OutcomeStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OutcomeStrip — three or four outcomes in one hairline row. Works with
 * real numbers ("+38%") or qualitative shifts ("Branch → app") when the
 * numbers are under NDA. A `live` item gets the reserved green dot.
 */
function OutcomeStrip({
  items = [],
  label = 'Outcomes',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    "aria-label": label,
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 1,
      background: 'var(--border-hairline)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      flex: '1 1 200px',
      minWidth: 0,
      padding: '28px 24px',
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 26,
      lineHeight: 1.15,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)'
    }
  }, it.live && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 10,
      height: 10,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--green-600)'
    }
  }), it.value), it.note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, it.note))));
}
Object.assign(__ds_scope, { OutcomeStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/OutcomeStrip.jsx", error: String((e && e.message) || e) }); }

// components/case/DecisionRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tag
} = __ds_scope;
const placeholder = {
  aspectRatio: '9 / 16',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius)',
  background: 'repeating-linear-gradient(135deg, var(--gray-50) 0 11px, var(--gray-150) 11px 22px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

/**
 * DecisionRow — one design decision with the screen that shows it:
 * screen on the left, number + headline + reasoning on the right.
 * Stacks screen-first on narrow viewports.
 */
function DecisionRow({
  number,
  title,
  tag,
  children,
  media,
  mediaWidth = 280,
  divider = true,
  style,
  ...rest
}) {
  let visual = media;
  if (media && media.src) {
    visual = /*#__PURE__*/React.createElement("img", {
      src: media.src,
      alt: media.alt || '',
      style: {
        display: 'block',
        width: '100%',
        height: 'auto',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius)'
      }
    });
  } else if (!media) {
    visual = /*#__PURE__*/React.createElement("div", {
      style: placeholder
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "[ Screen ]"));
  }
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      paddingTop: divider ? 40 : 0,
      borderTop: divider ? '1px solid var(--border-hairline)' : 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '32px 48px',
      alignItems: 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: `0 1 ${mediaWidth}px`,
      minWidth: Math.min(220, mediaWidth),
      maxWidth: '100%'
    }
  }, visual), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 420px',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, number && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.1em',
      color: 'var(--text-muted)'
    }
  }, number), tag && /*#__PURE__*/React.createElement(Tag, {
    tone: "subtle",
    size: "sm"
  }, tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      lineHeight: 1.15,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-tight)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, children)));
}
Object.assign(__ds_scope, { DecisionRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/DecisionRow.jsx", error: String((e && e.message) || e) }); }

// components/case/ReasoningChain.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ReasoningChain — a short chain of reasoning in one hairline row:
 * Hypothesis → Finding → Decision in Research, or Considered → Chose →
 * Why under a Solution decision.
 */
function ReasoningChain({
  steps = [],
  label = 'Reasoning',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    "aria-label": label,
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 1,
      background: 'var(--border-hairline)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      ...style
    }
  }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      flex: '1 1 260px',
      minWidth: 0,
      boxSizing: 'border-box',
      padding: '28px 24px',
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, i > 0 ? '→ ' : '', s.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, s.text))));
}
Object.assign(__ds_scope, { ReasoningChain });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/ReasoningChain.jsx", error: String((e && e.message) || e) }); }

// components/case/ReframeQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ReframeQuote — the one insight that changed how the problem was
 * framed, set large and centred between hairlines, with its source and
 * the "so what". Once per case.
 */
function ReframeQuote({
  source,
  quote,
  soWhat,
  themes = [],
  style,
  ...rest
}) {
  const mono = {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: '0 auto',
      padding: '56px 24px',
      maxWidth: 880,
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 96,
      lineHeight: 0.6,
      fontWeight: 800,
      color: 'var(--gray-200)',
      height: 40
    }
  }, "\u201C"), source && /*#__PURE__*/React.createElement("span", {
    style: mono
  }, source), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 40,
      lineHeight: 1.15,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-tight)',
      textWrap: 'balance'
    }
  }, quote), themes.length > 0 && /*#__PURE__*/React.createElement("ul", {
    "aria-label": "Themes",
    style: {
      listStyle: 'none',
      margin: '8px 0 0',
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '8px 16px',
      ...mono,
      fontWeight: 400
    }
  }, themes.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("li", {
    "aria-hidden": "true",
    style: {
      color: 'var(--gray-300)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("li", null, t)))), soWhat && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: themes.length ? -12 : 0,
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      textWrap: 'balance'
    }
  }, soWhat));
}
Object.assign(__ds_scope, { ReframeQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/ReframeQuote.jsx", error: String((e && e.message) || e) }); }

// components/case/StateList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StateList — the states a step was designed for, as static mono chips
 * (Empty field, Code expired, Timeout…). Shows coverage without a
 * screen per state. Not interactive.
 */
function StateList({
  states = [],
  countLabel,
  style,
  ...rest
}) {
  const heading = countLabel === undefined ? `${states.length} states` : countLabel;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), heading && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, states.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      padding: '6px 10px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.04em',
      color: 'var(--text-primary)'
    }
  }, s))));
}
Object.assign(__ds_scope, { StateList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/StateList.jsx", error: String((e && e.message) || e) }); }

// components/case/CaseNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Link({
  item,
  dir,
  onNavigate
}) {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const next = dir === 'next';
  const arrow = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      fontSize: 18,
      lineHeight: 1,
      transform: `translateX(${hover ? next ? 4 : -4 : 0}px)`,
      transition: 'transform var(--dur-base, 180ms) var(--ease-out, ease)'
    }
  }, next ? '›' : '‹');
  return /*#__PURE__*/React.createElement("a", {
    href: item.href || '#',
    onClick: onNavigate ? e => onNavigate(item, dir, e) : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '28px 0',
      marginLeft: next ? 'auto' : 0,
      textDecoration: 'none',
      textAlign: next ? 'right' : 'left',
      color: hover ? 'var(--text-primary)' : 'var(--text-secondary)',
      outline: focus ? 'var(--ring-width, 2px) solid var(--ring)' : 'none',
      outlineOffset: 'var(--ring-offset, 2px)',
      transition: 'color var(--dur-fast, 120ms) var(--ease-out, ease)'
    }
  }, !next && arrow, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, next ? 'Next' : 'Previous'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-snug)'
    }
  }, item.title)), next && arrow);
}

/**
 * CaseNav — previous / next case at the end of a case study, so the
 * reader moves on instead of bouncing. Omit `prev` on the first case.
 */
function CaseNav({
  prev,
  next,
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "More cases",
    style: {
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      ...style
    }
  }, rest), prev && /*#__PURE__*/React.createElement(Link, {
    item: prev,
    dir: "prev",
    onNavigate: onNavigate
  }), next && /*#__PURE__*/React.createElement(Link, {
    item: next,
    dir: "next",
    onNavigate: onNavigate
  }));
}
Object.assign(__ds_scope, { CaseNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/CaseNav.jsx", error: String((e && e.message) || e) }); }

// components/case/NumberedCards.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NumberedCards — numbered title + body cards on a hairline grid. Used
 * for challenge constraints, research methods and reflection takeaways.
 */
function NumberedCards({
  items = [],
  minWidth = 260,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    "aria-label": label,
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 1,
      background: 'var(--border-hairline)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      flex: `1 1 ${minWidth}px`,
      minWidth: 0,
      boxSizing: 'border-box',
      padding: 32,
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.1em',
      color: 'var(--text-muted)'
    }
  }, it.number || String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      lineHeight: 1.25,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-snug)',
      margin: 0
    }
  }, it.title), it.body && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, it.body))));
}
Object.assign(__ds_scope, { NumberedCards });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/NumberedCards.jsx", error: String((e && e.message) || e) }); }

// components/case/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — an aside with a mono label column on a sunken tint and the
 * story beside it. For key findings, systems notes and other context
 * that sits next to the main narrative. When the two columns wrap, the
 * label spans the full width instead of leaving a gap beside it.
 */
function Callout({
  label,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 1,
      background: 'var(--border-hairline)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 280px',
      minWidth: 0,
      boxSizing: 'border-box',
      padding: '32px 28px',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '999 1 480px',
      minWidth: 0,
      boxSizing: 'border-box',
      padding: '32px 28px',
      background: 'var(--surface-page)',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-secondary)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/Callout.jsx", error: String((e && e.message) || e) }); }

// components/case/ImageCarousel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const placeholder = 'repeating-linear-gradient(135deg, var(--gray-50) 0 11px, var(--gray-150) 11px 22px)';

/**
 * ImageCarousel — a short sequence of screens in one slot: a walkthrough,
 * a multi-step state, a before → during → after. One frame, ‹ › buttons,
 * bar indicators and a mono "02 / 03 · Label" caption. Not autoplaying.
 */
function ImageCarousel({
  images = [],
  startIndex = 0,
  ratio = '9 / 20',
  label = 'Screens',
  style,
  ...rest
}) {
  const n = Math.max(images.length, 1);
  const [i, setI] = useState(Math.min(Math.max(startIndex, 0), n - 1));
  const go = k => setI(Math.max(0, Math.min(n - 1, k)));
  const navBtn = dis => ({
    width: 44,
    height: 44,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: `1px solid ${dis ? 'var(--border-hairline)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius)',
    background: 'var(--surface-page)',
    color: dis ? 'var(--text-disabled)' : 'var(--text-primary)',
    fontSize: 18,
    lineHeight: 1,
    cursor: dis ? 'default' : 'pointer'
  });
  const cur = images[i] || {};
  return /*#__PURE__*/React.createElement("figure", _extends({
    "aria-roledescription": "carousel",
    "aria-label": label,
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    },
    onKeyDown: e => {
      if (e.key === 'ArrowLeft') go(i - 1);
      if (e.key === 'ArrowRight') go(i + 1);
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: ratio,
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: `${n * 100}%`,
      height: '100%',
      transform: `translateX(-${i * 100 / n}%)`,
      transition: 'transform var(--dur-slow, 300ms) var(--ease-out, ease)'
    }
  }, (images.length ? images : [{}]).map((img, k) => img.src ? /*#__PURE__*/React.createElement("img", {
    key: k,
    src: img.src,
    alt: img.alt || '',
    "aria-hidden": k !== i,
    style: {
      display: 'block',
      flex: `0 0 ${100 / n}%`,
      width: `${100 / n}%`,
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    key: k,
    "aria-hidden": k !== i,
    style: {
      flex: `0 0 ${100 / n}%`,
      height: '100%',
      background: placeholder,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "[ ", img.label || 'Screen', " ]")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous",
    disabled: i === 0,
    onClick: () => go(i - 1),
    style: navBtn(i === 0)
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": label,
    style: {
      display: 'flex',
      gap: 2
    }
  }, (images.length ? images : [{}]).map((img, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    role: "tab",
    "aria-selected": k === i,
    "aria-label": img.label || `Screen ${k + 1}`,
    onClick: () => go(k),
    style: {
      width: 32,
      height: 24,
      padding: 0,
      border: 0,
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: '100%',
      height: 2,
      background: k === i ? 'var(--text-primary)' : 'var(--border-default)',
      transition: 'background-color var(--dur-base, 180ms) var(--ease-out, ease)'
    }
  })))), /*#__PURE__*/React.createElement("span", {
    "aria-live": "polite",
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, String(i + 1).padStart(2, '0'), " / ", String(n).padStart(2, '0'), cur.label ? ` · ${cur.label}` : '')), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next",
    disabled: i === n - 1,
    onClick: () => go(i + 1),
    style: navBtn(i === n - 1)
  }, "\u203A")));
}
Object.assign(__ds_scope, { ImageCarousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/case/ImageCarousel.jsx", error: String((e && e.message) || e) }); }

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

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.SectionNav = __ds_scope.SectionNav;

__ds_ns.ReadingBar = __ds_scope.ReadingBar;

__ds_ns.CompareSlider = __ds_scope.CompareSlider;

__ds_ns.AnnotatedScreen = __ds_scope.AnnotatedScreen;

__ds_ns.FlowDiagram = __ds_scope.FlowDiagram;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.CaseDetails = __ds_scope.CaseDetails;

__ds_ns.OutcomeStrip = __ds_scope.OutcomeStrip;

__ds_ns.DecisionRow = __ds_scope.DecisionRow;

__ds_ns.ReasoningChain = __ds_scope.ReasoningChain;

__ds_ns.ReframeQuote = __ds_scope.ReframeQuote;

__ds_ns.StateList = __ds_scope.StateList;

__ds_ns.CaseNav = __ds_scope.CaseNav;

__ds_ns.NumberedCards = __ds_scope.NumberedCards;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.ImageCarousel = __ds_scope.ImageCarousel;

})();
