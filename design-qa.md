# Montone storefront design QA

- Source visual truth: `Montone Store Concept (Copy).html`, captured as `reference-content-mobile.png`
- Implementation: `http://localhost:3000/`, captured as `implementation-mobile-final.png`
- Combined comparison: `design-comparison-final.png`
- Viewport: source content frame 424 × 844 CSS px; implementation browser 488 × 844 CSS px, normalized to 424 px width for comparison
- Density: 1× CSS and screenshot density; implementation resized proportionally only for side-by-side normalization
- State: logged-out, home shopper, homepage, top of page

## Full-view comparison evidence

The normalized side-by-side comparison shows the same announcement strip, mobile header hierarchy, home/café tabs, promotional ticker, headline copy and wrapping, supporting copy, pill CTA pair, grey rounded hero tile, provenance badge, and the exact three product packshots. The corrected implementation also carries the source structure below the fold: circular category rail, shop-by-purpose tiles, product grid, brands, bundles, recipes, trust row, trade prompt, footer, and fixed mobile navigation.

## Focused comparison evidence

The above-the-fold region was reviewed at readable scale in `design-comparison-final.png`. Typography, spacing, neutral palette, button geometry, product image scale, and copy are directly legible there, so a second crop was not required.

## Required fidelity surfaces

- Fonts and typography: display copy uses a high-contrast serif and UI copy uses a clean grotesk, with source-matching hierarchy and line wrapping.
- Spacing and layout rhythm: compact header, 18 px mobile gutters, 22 px tile radii, hero spacing, pill controls, and section density match the source.
- Colors and tokens: white paper, near-black ink, warm grey tiles, light borders, Montone red, and green provenance marker match the concept tokens.
- Image quality and asset fidelity: original embedded Montone product packshots were extracted from the supplied concept and reused; no placeholder imagery remains in visible product modules.
- Copy and content: headline, delivery copy, CTA language, provenance label, category names, bundles, recipe copy, and trade messaging follow the source prototype.

## Comparison history

1. P1: initial implementation used an unrelated dark-green editorial art direction and a lifestyle-photo hero. Fixed by replacing the entire public storefront with the source’s white commerce system and packshot hero.
2. P1: first fidelity pass placed the product tile before the headline on mobile and showed a logged-in greeting by default. Fixed by restoring the source order and logged-out state.
3. P2: source CTA, provenance label, purpose tiles, bundles, account icon, and fixed mobile navigation were missing or different. Fixed with exact source-language controls and the missing modules.
4. Post-fix evidence: `design-comparison-final.png` shows no remaining actionable P0, P1, or P2 difference in the normalized primary state.

## Interaction checks

- Home/café mode switch changes the hero and pricing state.
- Add-to-cart updates the badge, drawer, line item, quantity controls, and subtotal.
- Search, product detail, mobile menu, anchors, bundle add, and dashboard link are wired.
- Browser console errors checked: none.
- Production build and TypeScript checks: passed.

## Follow-up polish

- P3: the code-native Montone wordmark is slightly wider than the embedded source logo at some narrow widths.
- P3: the local Next.js development badge appears during development only and is absent from production builds.

final result: passed
