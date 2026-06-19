---
name: vitor-gomes-design
description: Use this skill to generate well-branded interfaces and assets for Vitor Gomes — a product designer's portfolio brand — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and a UI kit of components for prototyping. Monochrome-by-default, Archivo + JetBrains Mono, edges-not-shadows.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (tokens, components, the portfolio UI kit, and the foundation specimen cards under `guidelines/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out (`assets/vg-symbol.svg`) and create static HTML files for the user to view — link `styles.css`, load `_ds_bundle.js`, and read components from `window.VitorGomesDesignSystem_32625a`. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

Core rules to honor:
- **Monochrome by default.** Ink `#141416` on paper `#FAFAFA`; a cool gray ramp between. The accent is *ink* unless you opt into the reserved green via `[data-accent="green"]`, and the green only signals live/active states and CTAs.
- **Edges, not shadows.** Separate surfaces with 1px borders and scrims; the only drop shadow is `--shadow-pop`, for free-floating overlays.
- **2px radius is the only softness.** Circles only for dots, stepper nodes and avatars.
- **Type:** Archivo (display + body), JetBrains Mono (uppercase, tracked labels/eyebrows/data). Sentence case in prose; uppercase only in mono labels.
- **Voice:** first person, quiet, declarative, concrete. No emoji, no hype.
- **Icons:** the brand is near icon-free — use mono labels, hairlines, the VG mark, and the Unicode glyph set (`▾ ✕ ‹ › … + – → / ✓`). Flag any new icon set.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
