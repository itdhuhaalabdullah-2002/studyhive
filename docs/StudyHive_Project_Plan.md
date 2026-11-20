# StudyHive: SaaS Landing Page

> Arrowstack Frontend Development Internship, Task 1 (Mandatory)
> Pixel-perfect SaaS landing page built with React, TypeScript, Tailwind CSS and Framer Motion.

---

## 1. Product Idea

| Item | Description |
|---|---|
| **Name** | StudyHive (fictional company) |
| **Type** | SaaS platform for collaborative studying |
| **Tagline** | Study together, wherever you are |
| **Target users** | University students and study groups |
| **Page goal** | Convince visitors to join the waitlist (Early Access) |
| **Primary action** | Submit an email address through the Hero form |

---

## 2. Design Reference

- **Source:** Figma Community file "Team App - SaaS Landing Page Template"
- **Link:** https://www.figma.com/community/file/1257677655500653447
- **Designer / license:** *to be confirmed from the Figma file page before submission*
- **Frames used:** `Home-Desktop` (1440 × 800) and `Home-Mobile-Portrait`
- **Frames not used:** Blog and Blog Post pages (out of scope)

### What follows the reference exactly (pixel-perfect)
- Navbar (desktop and mobile with hamburger menu)
- Hero section (heading, subtext, email field, CTA button, background image and overlay)

### What is my own design (using the same design tokens)
Features, How it works, Pricing, Testimonials, FAQ, Final CTA and Footer. The reference file contains only the Navbar and Hero, so these sections extend it in the same visual style.

### Conscious deviations from the reference
- Brand name and copy changed from "team" to "StudyHive".
- Logo: an icon (hexagon/hive motif) plus the wordmark, instead of text only.
- Colors and typography stay the same as the reference (dark background, purple/blue accent) to preserve accuracy.
- Page language: English, left-to-right only.
- The mobile button placeholder text "Button Label" is replaced with "Get Early Access".
- Hero photo replaced with a freely licensed image (Unsplash or Pexels), credited in the README.

---

## 3. Page Sections

| # | Section | Source | Content |
|---|---|---|---|
| 1 | **Navbar** | Reference | Logo, links (Features, Pricing, Support, Log In), Get Access button, hamburger menu on mobile |
| 2 | **Hero** | Reference | Heading, subtext, email field, Get Early Access button |
| 3 | **Features** | Own design | 6 cards: study rooms, shared notes, session scheduling, progress tracking, flashcards, focus timer (Pomodoro) |
| 4 | **How it works** | Own design | 3 steps: create a Hive, invite classmates, study and track progress |
| 5 | **Pricing** | Own design | Free / Pro / Team plans with a monthly/yearly toggle |
| 6 | **Testimonials** | Own design | 3 sample student quotes (fictional, labelled as samples in the README) |
| 7 | **FAQ** | Own design | 5 questions in an accordion |
| 8 | **Final CTA + Footer** | Own design | Closing call to action, links, copyright |

---

## 4. Animations (Framer Motion)

| Where | Effect |
|---|---|
| Hero | Heading, text and form enter in sequence (`staggerChildren`) |
| Hero image | Fade in with a slight movement |
| Features, Testimonials | Reveal on scroll (`whileInView`) |
| Buttons and cards | `whileHover` and `whileTap` |
| Mobile menu | Slide in/out with `AnimatePresence` |
| Pricing toggle | Smooth transition between monthly and yearly |
| FAQ | Animated height when opening and closing |
| Accessibility | Respect `prefers-reduced-motion` |

**Performance rule:** animate only `transform` and `opacity`.

---

## 5. Languages and Technologies

| Language / Tool | Extension | Used for |
|---|---|---|
| **TypeScript + JSX (TSX)** | `.tsx`, `.ts` | Components and logic (main language) |
| **CSS (Tailwind v4)** | `.css` | Colors, fonts and design tokens via `@theme`; the rest is styled with Tailwind classes inside TSX |
| **HTML** | `.html` | `index.html` only (font links, title, meta) |
| **JSON** | `.json` | Project configuration (`package.json`, `tsconfig`) |
| **Markdown** | `.md` | README, work log, decision log, requirements |
| **Git** | `.gitignore` | Ignoring `node_modules`, build output, etc. |

### Libraries
- `react` and `react-dom`: UI
- `tailwindcss` and `@tailwindcss/vite`: styling
- `motion`: Framer Motion (import from `motion/react`)
- `vite`: dev server and build tool

### Font
Lexend (Google Fonts). Weights to be confirmed from Figma.

### Tools
VS Code (with ES7+ React snippets, Tailwind CSS IntelliSense, Prettier, ESLint, GitLens), Node.js LTS, Git, GitHub, Chrome with Lighthouse, Figma, GitHub Pages for deployment.

---

## 6. Project Structure

```
studyhive/
├── public/
│   ├── favicon.svg
│   └── images/hero.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── EmailForm.tsx
│   │       └── SectionHeading.tsx
│   ├── data/
│   │   └── content.ts
│   ├── lib/
│   │   └── animations.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── docs/
│   ├── requirements.md
│   ├── work-log.md
│   ├── decision-log.md
│   ├── design-comparison/
│   └── lighthouse/
├── index.html
├── vite.config.ts
├── package.json
├── .gitignore
└── README.md
```

### Key files

| File | Purpose |
|---|---|
| `index.css` | Tailwind import, colors and font defined in `@theme` |
| `content.ts` | All text and data (features, pricing, FAQ) in one place |
| `animations.ts` | Shared motion variants (fadeUp, stagger) to avoid repetition |
| `Button.tsx` | One reusable button component |
| `EmailForm.tsx` | Email field with validation and states |
| `App.tsx` | Assembles the sections in order |
| `docs/requirements.md` | Short requirements document: user, scope, success metrics |
| `docs/work-log.md` | Dated daily work log |
| `docs/decision-log.md` | Technical decisions and trade-offs |
| `docs/design-comparison/` | Screenshots: design vs. implementation |
| `docs/lighthouse/` | Lighthouse reports |
| `README.md` | Setup, design source and license, added sections, limitations |

---

## 7. UI States and Accessibility

**Email form states:** empty, invalid email (error message), submitting, success.

**Accessibility checklist**
- Everything works with the keyboard, with a visible focus style
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`, `button`)
- FAQ and mobile menu support Enter and Space and use `aria-expanded`
- Error messages linked to the input (`aria-describedby`)
- Color contrast of at least 4.5:1 for text
- `alt` text for images
- Reduced-motion support

---

## 8. Responsive Breakpoints

| Device | Reference |
|---|---|
| Desktop | 1440 px frame from Figma |
| Mobile | Mobile-Portrait frame from Figma (width to be confirmed, likely 375 px) |
| Tablet | Interpolated; verify at about 768 px |

On mobile: navigation collapses to a hamburger menu, the heading wraps over several lines, and the email field and button stack vertically at full width.

---

## 9. Success Metrics (targets)

- Visual match with the reference for Navbar and Hero, shown with side-by-side screenshots
- Lighthouse Accessibility score of 90 or higher
- Lighthouse Performance score of 90 or higher on desktop
- Full keyboard navigation with no keyboard traps
- No horizontal scrolling on mobile
- Animations disabled or reduced when the user prefers reduced motion

---

## 10. Setup Commands

```bash
npm create vite@latest studyhive -- --template react-ts
cd studyhive
npm install
npm install tailwindcss @tailwindcss/vite motion
git init
git add .
git commit -m "chore: initial Vite + React + TypeScript setup"
```

Run the project:

```bash
npm run dev
```

---

## 11. Deliverables

1. Source code in a GitHub repository with regular, meaningful commits
2. Live deployment link (GitHub Pages)
3. README with setup steps, design credit and license, list of added sections, limitations and next steps
4. Screenshots: design vs. implementation, Lighthouse reports, mobile and desktop
5. Short demo video showing the page and its animations
6. Dated work log, decision log and requirements document
7. Two LinkedIn posts tagging the official Arrowstack channels

---

## 12. Plan

| Date | Goal |
|---|---|
| Nov 19 | Setup, repository, extract Figma values (colors, font, sizes) |
| Nov 20 | Tailwind tokens, Navbar, Hero (pixel-perfect) |
| Nov 21 | Features, How it works, Pricing |
| Nov 22 | Testimonials, FAQ, Footer, all animations |
| Nov 23 | Responsive polish, accessibility, Lighthouse |
| Nov 24 | README, screenshots, demo video, deployment, submission |

---

## 13. Values to Collect from Figma

- [ ] HEX colors: background, button, logo dot, input field, text
- [ ] Font family and weights
- [ ] Heading and subtext sizes, line heights
- [ ] Input and button width, height and corner radius
- [ ] Left content margin on desktop
- [ ] Mobile frame width
- [ ] Designer name and license of the Figma file

---

## 14. Assumptions and Limitations

- All brand names, testimonials and prices are fictional.
- The email form does not send data to a server; it is validated on the client and shows a success state only.
- The page is a front-end project; no backend or database is used.
- Sections beyond Navbar and Hero are my own extension of the reference style.
