# Portfolio Redesign — Architecture & UI Design

**Owner:** Kean Harrison
**Last updated:** April 24, 2026
**Status:** Design spec, pre-implementation

---

## 1. Intent

**Primary audience:** recruiters (consulting, PM, SE) scanning in 30 seconds, plus a smaller cohort of curious/technical visitors who want depth.

**Impression goal:** innovator and creator who builds product solutions, is business-literate, and takes initiative. Show projects, show competency, show taste.

**Aesthetic direction:** editorial, light, considered. Think *New York Times Magazine* or *Stripe Press* — serif-forward, generous whitespace, asymmetric grid, long-form gravitas. Light mode, not dark mode.

**Two interaction modes:**

1. **Editorial (primary).** The site reads like a magazine feature. Serif headlines, clean typographic hierarchy, scannable at a glance.
2. **Chat (utility).** An "Ask Kean" interface persistent in a corner or bottom strip — available for the curious, invisible to the scanner.

Hierarchy is non-negotiable: editorial wins the first impression, chat serves it.

---

## 2. Structure — one page + project sub-pages

### Main page (`/`) — single long scroll, four sections

1. **Masthead + intro** — name, year, school, current company, short about
2. **Project experience** — 3 hover cards with 3D effect, center-aligned. Click → project sub-page.
3. **Work experience** — cards that open as a large modal/overlay on click. Escape by clicking out.
4. **Interests** — short, specific, human, with images.

Plus a persistent **Ask Kean** chat interface in a fixed corner (desktop) or sticky bottom sheet (mobile).

### Project sub-pages (`/projects/[slug]`)

Each project card routes to its own page. Back arrow top-left returns to `/`. Content structure is free-form — Kean writes this per project. Typical elements to support:

- Title + timeframe + role
- Problem / why it mattered
- What you did
- Outcome / stats
- Embedded visuals, artifacts, links

No rigid template. The page is a canvas for each project.

---

## 3. Project section (detailed)

**Layout:** 3 cards, center of page, horizontal row on desktop, stacked on mobile.

**Card behavior:**
- Hover: subtle 3D tilt (perspective + rotate on mouseover, returns on mouseout)
- Slight lift / shadow on hover
- Entire card is clickable
- Click → navigates to `/projects/[slug]`

**Card content:**
- Timeframe (e.g., "Nov 2025 — Present" or "Feb 2026 — Apr 2026")
- Project title
- Image / logo
- GitHub link (small icon, separate click target — opens in new tab, doesn't trigger card navigation)
- "Click to learn more →" affordance at bottom

**Content is left blank for Kean to fill.** Skeleton values: project title → "Project Name", timeframe → "Month Year — Month Year", image → placeholder, GitHub URL → "#".

**Projects that live here** (for routing/slug planning, content TBD):
- `/projects/hydra`
- `/projects/infino`
- `/projects/[third]` — TBD (candidates: Beats PRD, Anthropic Hackathon)

---

## 4. Work experience section (detailed)

**Layout:** Cards arranged in a grid or strip. Matches editorial rhythm of the rest of the page.

**Card content (what shows on main page):**
- Company logo
- Company name
- Timeframe
- Role title

**Click behavior:** Opens a **modal overlay** that takes up the majority of the viewport. Background dims. Click outside the modal or press `Esc` to close.

**Modal content:**
- Logo, company name, timeframe, role title (repeated at top)
- Elaboration: what you did specifically
- Artifacts: links, images, embeds (optional)
- Close button (top-right, in addition to click-outside)

**Content is left blank for Kean to fill.** Skeleton: "Company Name", "Role Title", "Month Year — Month Year", placeholder logo.

**Experience entries** (for skeleton structure):
- Booz Allen Hamilton — Product Engineer Intern — Jun–Aug 2026
- UVA Darden i.Lab — Co-Founder — Nov 2025 – Present
- Technē Strategy Group — Project Lead — Nov 2025 – Present
- Beats by Dre — Product Analyst — Mar–May 2025
- Stealth Startup — Product Manager Intern — Jul–Sep 2025
- Johnson Controls International — Sales Engineer Intern — May–Aug 2025
- KeanFit LLC — Founder — Aug 2023 – Mar 2025

---

## 5. Interests section (detailed)

Short, specific, human — with images.

**Layout:** Image grid or editorial-style photo + caption layout. Not an icon list.

**Content is blank for Kean to fill.** Suggested skeleton entries (placeholder copy):

- [Image placeholder] — "Interest one caption goes here."
- [Image placeholder] — "Interest two caption goes here."
- [Image placeholder] — "Interest three caption goes here."

Kean fills with actual content (e.g., surfing, drawing with IAD airport callout, chess, cooking, Peak Understanding YouTube).

---

## 6. Visual system

### Typography

NYT-adjacent open-source substitutes (NYT proprietary fonts are not licensable).

| Role | Font | Source | Notes |
|---|---|---|---|
| Display / headlines | **Source Serif 4** or **Newsreader** | Google Fonts | Editorial serif, high contrast, weight range. |
| Body / long-form | Same serif, regular weight | Google Fonts | Serif body for editorial feel. 18–19px desktop, 16px mobile. |
| Metadata / labels / UI | **Inter** or keep **Geist** | Google / already installed | Small caps, uppercase tracking for section labels. |
| Monospace | **Geist Mono** or **JetBrains Mono** | already installed | Chat interface and timestamps only. |

**Heading scale** (desktop):
- H1 (name): 72–96px, serif, tight leading, regular weight
- H2 (section): 40–48px, serif
- H3 (card title): 22–24px, serif
- Body: 18–19px, serif, 1.6 line-height, max-width ~68ch
- Label: 11–12px, sans, uppercase, 0.1em letter-spacing

### Color

Light, restrained, high-contrast. No purple gradients, no dark mode.

```
--bg: #FAFAF7         (warm off-white, NYT paper feel)
--surface: #FFFFFF    (card/elevated surfaces)
--ink: #1A1A1A        (body text — not pure black)
--ink-soft: #4A4A4A   (secondary text, captions)
--ink-mute: #8A8A8A   (metadata, timestamps)
--rule: #E5E5E0       (thin hairlines, dividers)
--accent: #C8102E     (NYT-ish red — reserved for ~2 specific uses)
```

Rule: 95% black-on-warm-white. Accent red appears in ~2 places. Scarcity makes it work.

### Layout

- **Max content width:** 1100px
- **Main reading column:** 680px max for long-form text
- **Grid:** 12-column desktop, single column mobile
- **Vertical rhythm:** 120–160px between sections on desktop
- **Asymmetry:** pull quotes and stats break the grid where appropriate
- **Hairlines:** 1px rules in `--rule` color separate sections

### Motion

Restrained and intentional. No gratuitous effects.

- Page load: staggered reveal of masthead elements — 60–80ms cascade
- Scroll: subtle fade-in for sections entering viewport
- Hover states: underline slide-in on links, subtle lift on cards
- Project card 3D tilt: CSS `transform: perspective() rotateX() rotateY()` driven by mouse position
- Work experience modal: smooth scale + fade in/out
- Chat open/close: slide/scale via Framer Motion

No parallax. No mouse-follow backgrounds. No scroll-hijacking.

---

## 7. Component inventory

Components to build:

- `<Masthead />` — name, year, school, current company, short about
- `<ProjectGrid />` — wrapper for 3 centered cards
- `<ProjectCard />` — 3D-tilt card with timeframe, title, image, GitHub icon, "click to learn more"
- `<ExperienceGrid />` — wrapper for work experience cards
- `<ExperienceCard />` — logo, company, timeframe, role → triggers modal
- `<ExperienceModal />` — full-screen overlay with detailed content, close-on-click-outside + Esc
- `<InterestsBlock />` — image + caption layout
- `<AskKean />` — persistent chat interface (pill on desktop, sticky on mobile)

Editorial primitives (used on project sub-pages as Kean sees fit):
- `<Label />` — small-caps section label
- `<Rule />` — thin divider
- `<Timestamp />` — formatted date
- `<Figure />` — captioned image
- `<PullQuote />`, `<StatCallout />` — optional accents

No `CaseStudyLayout` — Kean composes project sub-pages directly.

---

## 8. Project sub-pages — approach

Each sub-page at `/projects/[slug]` is a standalone page with:

- Back arrow top-left → routes to `/`
- Free-form content authored per project
- Access to editorial primitives (`<Figure>`, `<PullQuote>`, `<StatCallout>`, `<Rule>`) as needed

No rigid template. Kean writes each one as a piece of editorial content.

Skeleton page renders:
- Back arrow
- Project title (H1)
- Timeframe
- Placeholder body: "Write project content here."

---

## 9. The "Ask Kean" chat — scope

**Goal:** utility for the curious 10%. Invisible to the 30-second scanner.

**Behavior:**
- Desktop: fixed bottom-right, 44px pill labeled "Ask about Kean's work" with small chat icon. Click to expand to 380×560px panel. Closable to pill.
- Mobile: sticky bottom pill, expands to full-screen sheet.
- Pre-loaded suggested prompts (placeholders for now): "Tell me about [project]", "What's Kean working on?", "What's his background?"
- Answers grounded in a static knowledge base: resume bullets + project content + about copy. System prompt keeps it on-topic and honest.
- Uses `ai` + `@ai-sdk/openai` deps already in repo. New route: `app/api/ask/route.ts`.
- Session-only, not persisted.
- Rate limited per IP — 15 messages/hour.

**What it is not:**
- Not the primary navigation.
- Not a gimmick that opens on page load.
- Not taking over the viewport. Closable, ignorable, optional.

---

## 10. Copy & content rules

All content left as skeleton placeholders. Kean fills in. Formatting rules:

### Intro (masthead)
Placeholder structure:

> **Kean's Portfolio**
> Year · School · Current Company
>
> [Short about paragraph goes here. 2–3 sentences.]

### Project cards
Placeholder structure per card:
- Timeframe: "Month Year — Month Year"
- Title: "Project Name"
- Image: placeholder
- GitHub: "#"
- Affordance: "Click to learn more →"

### Work experience cards
Placeholder structure per card:
- Logo: placeholder
- Company: "Company Name"
- Timeframe: "Month Year — Month Year"
- Role: "Role Title"
- Modal body: "[Write detailed content here.]"

### Interests
3 image+caption slots with placeholder text.

### Project sub-pages
Placeholder body: "[Write project content here.]" Back arrow functional from day one.

---

## 11. Technical implementation

### Stack (keep as-is)
- Next.js 16.1.6 App Router
- React 19, TypeScript 5
- Tailwind v4
- Framer Motion
- `ai` + `@ai-sdk/openai` (now wired up for `/api/ask`)

### Repo strategy
- Work on a `redesign` branch off `main`
- Keep `main` live during the rebuild
- Preview via Vercel's branch deploy URL
- Merge to `main` only when ready to ship

### File structure

```
app/
  page.tsx                    # redesigned single page with all 4 sections
  layout.tsx                  # updated fonts, metadata
  projects/
    [slug]/
      page.tsx                # project sub-page (free-form content)
  api/
    ask/
      route.ts                # chat endpoint (streaming)
  globals.css                 # new theme vars, typography system

components/
  masthead.tsx
  project-grid.tsx
  project-card.tsx
  experience-grid.tsx
  experience-card.tsx
  experience-modal.tsx
  interests-block.tsx
  ask-kean.tsx
  editorial/
    label.tsx
    rule.tsx
    timestamp.tsx
    figure.tsx
    pull-quote.tsx
    stat-callout.tsx

content/
  projects.ts                 # array of project metadata for cards + routing
  experience.ts               # array of work experience entries
  interests.ts                # interests content

lib/
  knowledge-base.ts           # content compiled for Ask Kean context
```

Pages to **remove**: `app/about`, `app/thoughts`, `app/teardowns`, `app/blog`, `app/learn-more`, `app/fun-facts`. Delete these directories entirely.

### Global CSS — theme vars

```css
:root {
  --bg: #FAFAF7;
  --surface: #FFFFFF;
  --ink: #1A1A1A;
  --ink-soft: #4A4A4A;
  --ink-mute: #8A8A8A;
  --rule: #E5E5E0;
  --accent: #C8102E;

  --font-serif: 'Source Serif 4', 'Newsreader', Georgia, serif;
  --font-sans: 'Inter', 'Geist', system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'JetBrains Mono', monospace;

  --max-content: 1100px;
  --max-reading: 680px;
}
```

Remove: `scale-[1.12]` zoom wrapper on home. Remove `.name-fine-grain`, `.photo-sharp` classes (handled via `next/image` sizing now).

### Performance targets
- Lighthouse 95+ on all metrics
- Self-host fonts via `next/font/google`
- No external scripts except analytics (if added)
- Images: AVIF/WebP via `next/image`, lazy-load below fold

### Accessibility
- Semantic HTML (`<article>`, `<section>`, `<nav>`)
- Keyboard-navigable: Esc closes chat and modals, Tab cycles focus
- Focus rings visible, 4.5:1 contrast minimum
- Reduced motion respected for all animations
- Modal traps focus while open, returns focus on close

---

## 12. What this is not

- Not dark mode
- Not a terminal / CLI aesthetic
- Not a chat-first interface
- Not a traditional resume-grid portfolio
- Not a raw working-doc aesthetic
- No hero video, no parallax, no mouse-follow backgrounds
- No "Download my resume" as the primary CTA — the site is the pitch
- No icons-as-hobbies section
- No testimonials
- No AI-generated placeholder copy in production — all copy written by Kean

---

## 13. Build sequence

1. Set up branch (`redesign` off `main`), keep `main` live
2. Set up typography + theme vars + editorial primitives (`<Label>`, `<Rule>`, `<Timestamp>`, `<Figure>`)
3. Build `<Masthead />` with placeholder content
4. Build `<ProjectCard />` + `<ProjectGrid />` with 3D tilt, skeleton data
5. Build `<ExperienceCard />` + `<ExperienceGrid />` + `<ExperienceModal />`, skeleton data
6. Build `<InterestsBlock />`, skeleton data
7. Assemble `/` main page, tune spacing and vertical rhythm
8. Build project sub-page route (`/projects/[slug]`) with back arrow and placeholder body
9. Delete old pages (`/about`, `/thoughts`, `/teardowns`, `/blog`, `/learn-more`, `/fun-facts`)
10. Kean fills in real content across cards, modals, and sub-pages
11. Build `<AskKean />` + `/api/ask` route + knowledge base
12. Polish pass — motion, responsive tuning, accessibility audit
13. Merge to `main`, ship

Ship steps 1–10 before chat. Site should be excellent without it.

---

## 14. Success criteria

- A consulting recruiter spends 30 seconds on the page and can name the 3 projects, the Booz Allen internship, and one specific thing about Kean.
- A technical/curious visitor spends 5+ minutes, opens a project sub-page or experience modal, and optionally uses the chat.
- The site feels designed *for* Kean — not assembled from a template.
- No one looks at it and thinks "generic portfolio."

---

## 15. Open decisions for Kean

- Third project card slot: Beats PRD, Anthropic Hackathon, or something else?
- Interests: which 3 to feature, with what images?
- Masthead about paragraph: 2–3 sentences, written in Kean's voice
- Project sub-page content: drafted per project
- Work experience modal content: drafted per entry
