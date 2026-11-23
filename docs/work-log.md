# Work Log

## 2026-11-19

- Chose the Figma reference design and defined the product idea (StudyHive).
- Set up VS Code, Node.js, Git and GitHub.

## 2026-11-20

- Created the Vite + React + TypeScript project with Tailwind CSS and Motion.
- Fixed an npm network issue and moved the project outside OneDrive to `C:\Projects`.
- Pushed the project to GitHub after correcting the remote URL.
- Added the project plan and this work log to the `docs` folder.
- Defined design tokens (colors, font, radius), a focus style and reduced-motion rules in `index.css`, based on estimated values from the reference screenshots.
- Added the decision log.

## 2026-11-21

- Built the Navbar (desktop links and animated mobile menu) and the Hero section.
- Added a reusable Button, an email form with validation states, and shared Framer Motion variants.
- Fixed editor errors (TypeScript server cache) and silenced the Tailwind `@theme` lint warning.
- Built the Features section (6 cards) and the How it works section (3 steps).
- Moved all copy to src/data/content.ts and added a reusable SectionHeading component.
- Built the Pricing section with a monthly/yearly toggle and three plans.
- Added an outline variant to the shared Button component.

## 2026-11-22

- Replaced the watermarked hero photo with a freely licensed image.
- Built the Testimonials section (3 sample quotes) and the FAQ accordion (5 questions).
- Built the Final CTA and Footer sections, completing all page sections.
- Added a light variant to the shared Button component.

## 2026-11-23: Design values measured from Figma export

- **Context:** The first version used values estimated from small screenshots.
- **Decision:** Measured the 1440×800 Figma export and my own screenshot, then adjusted container width (1206px), heading (50px/64px, semibold), form sizes (298×46 and 233×46), navbar spacing, colors and overlay gradient.
- **Result:** Layout matches the reference within about 1–3px; the hero photo differs intentionally.
- Measured the Figma export and the implementation at 1440×800 and corrected container width, heading, form sizes, navbar spacing, colors and overlay.
- Desktop layout now matches the reference within 1–2 px (see docs/design-comparison/desktop-comparison.md).
