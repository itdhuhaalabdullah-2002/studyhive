# Decision Log

## 2026-11-20: Approximate design values

- **Context:** Dev Mode and exact Figma measurements were not available.
- **Decision:** Estimate colors, font sizes and spacing from the reference screenshots (1440×800 desktop frame).
- **Estimated values:** background `#25234B`, primary `#5B63E6`, logo dot `#7C7FF2`, input `#F4F5FA`, heading 48px, subtext 18px, left margin about 144px.
- **Follow-up:** Refine the values by overlaying the Figma screenshot on the implementation and record the final deviations in the README.

## 2026-11-20: Hero image

- **Decision:** Use a freely licensed Unsplash photo instead of the template photo to avoid license issues.
- **Follow-up:** Credit the photographer and link the source in the README.

## 2026-11-20: Design tokens in CSS

- **Decision:** Define colors, font and radius once in `@theme` (Tailwind v4) so every component uses the same tokens.
- **Reason:** Easier to adjust values after comparing with the reference design, and keeps new sections visually consistent.

## 2026-11-20: Accessibility and motion defaults

- **Decision:** Add a global visible focus style and a `prefers-reduced-motion` rule in `index.css`.
- **Reason:** Keyboard users need a clear focus indicator, and users who prefer less motion should not see heavy animations.

## 2026-11-20: Deployment target

- **Decision:** Deploy to GitHub Pages with `base: '/studyhive/'` in `vite.config.ts`.
- **Reason:** The repository is already on GitHub, so no extra account or service is needed.

# Desktop Design Comparison (1440 × 800)

Reference: Figma export of the `Home-Desktop` frame (`figma-desktop.png`).
Implementation: screenshot of the running page at 1440 × 800 (`implementation-desktop-after.png`).

## Method

1. Exported the Figma frame at 1x (1440 × 800).
2. Captured the implementation with the browser's device toolbar at 1440 × 800.
3. Measured element positions in both images with a script (bounding boxes of the input, buttons and text lines), then compared the values.
4. Adjusted the code, captured again and re-measured.

## Results (values in px at 1440 px width)

| Element                                  | Figma                | Implementation       | Difference |
| ---------------------------------------- | -------------------- | -------------------- | ---------- |
| Content left edge                        | 141                  | 141                  | 0          |
| Email field (width × height)             | 298 × 46             | 298 × 46             | 0          |
| Get Early Access button (width × height) | 233 × 46             | 233 × 46             | 0          |
| Gap between field and button             | 16                   | 16                   | 0          |
| Form top edge (y)                        | about 507            | 508                  | about 1    |
| Navbar "Get Access" button               | x 1116–1300, y 42–90 | x 1115–1299, y 42–90 | 1          |
| Subtext lines (top of text, y)           | 403 and 430          | 402 and 431          | 1          |
| Heading first line (top of text, y)      | 263                  | 265                  | 2          |
| Heading size / line height               | 50 / 64              | 50 / 64              | 0          |
| Page background                          | `#232340`            | `#232340`            | 0          |
| Primary button color                     | `#5468E7`            | `#5468E7`            | 0          |

## Intentional differences

- Brand name, logo and copy: StudyHive instead of "team".
- Navigation labels: Features, Pricing, Support, Log In instead of Product, Blog, Support, Log In.
- Hero photo: a freely licensed image, so the overlay looks different over the picture.

## Before and after

- `implementation-desktop-before.png`: first version, values estimated from small screenshots.
- `implementation-desktop-after.png`: current version after measuring the Figma export.
