# Mobile Design Comparison (320 × 780)

Reference: Figma export of the `Home-Mobile-Portrait` frame (`figma-mobile.png`, 320 × 780).
Implementation: full-page screenshot of the running page at 320 px width (`implementation-mobile-fullpage.png`) and a 2x screenshot of the top of the page (`implementation-mobile-top.png`).

## Method
1. Exported the Figma frame at 1x (320 × 780).
2. Captured the implementation with the browser's device toolbar at 320 px width.
3. Measured text lines, the email field and the button with a script and converted the values to CSS pixels. The full-page capture was scaled by about 0.98 by the capture tool, so values from it are accurate to about 1 px.
4. Adjusted the code and measured again.

## Results (values in CSS px)

| Element | Figma | Implementation | Difference |
|---|---|---|---|
| Side padding | 30 | about 30 | 0–1 |
| Email field | x 30–290, y 583–629 (260 × 46) | x 31–289, y 584–629 | about 1 |
| Button | x 30–290, y 645–691 (260 × 46) | x 32–289, y 646–690 | about 1 |
| Gap between field and button | 16 | 16 | 0 |
| Heading font size / line height | 34 / 42 | 34 / 42 | 0 |
| Heading line count | 4 | 4 | 0 |
| Heading baseline (third line) | 388 | 385 | 3 |
| Subtext first line (top, y) | 460 | 458–460 | about 2 |
| Menu icon, right edge | x 286 | x 286 | 0 |
| Logo baseline | about 76 | about 75 | 1 |

## Intentional differences
- Brand name, logo and copy: StudyHive instead of "team"; the logo is smaller on mobile (34 px against about 42 px in the design) because "studyhive." is longer than "team." and would collide with the menu icon.
- Button label: "Get Early Access" instead of the placeholder "Button Label" in the design file.
- Hero photo: a freely licensed image.

## Other checks
- No horizontal scrolling at 320 px.
- Sections below the hero (Features, How it works, Pricing, Testimonials, FAQ) stack in one column.