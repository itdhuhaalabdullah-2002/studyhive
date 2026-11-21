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
