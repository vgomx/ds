# Portfolio UI Kit — vitorgomes.design

An interactive recreation of Vitor Gomes' product-design portfolio, built entirely from the design-system primitives. This is the canonical "typical view" of the product.

## Run it
Open `index.html`. It loads the compiled `_ds_bundle.js` (two levels up) and the screen files below, then mounts a small click-through router.

## Screens
- **HomeScreen.jsx** — masthead hero, a selected-work grid of case-study cards, and an ink stat strip.
- **WorkScreen.jsx** — the index of work: a `SegmentedControl` discipline filter, a sort `Menu`, the hairline `Table`, and `Pagination`. Rows open a case study.
- **CaseStudyScreen.jsx** — `Breadcrumb`, a tagged hero, a full-bleed cover, a sticky section sidebar, prose, a `Stepper` process and an outcome stat band.
- **AboutScreen.jsx** — bio, an "available for work" ink card, an FAQ `Accordion`, and a contact `Modal`.
- **Chrome.jsx** — shared `TopBar` (sticky, accent-underlined nav), `Footer`, the `VGMark` logo, the brand `ImagePlaceholder`, and the mono `Eyebrow`.

## Notes
- **Components, not re-implementations.** Every button, tag, badge, table, menu, accordion, stepper and modal is the real design-system component (`window.VitorGomesDesignSystem_32625a`). The screens only compose them + lay out page structure.
- **Imagery** uses the system's own diagonal-stripe placeholder (the same treatment the source component library ships). Drop real project images in by replacing `ImagePlaceholder`.
- **Monochrome by default.** To preview the reserved green accent, add `data-accent="green"` to the `<body>` (or any wrapper).
