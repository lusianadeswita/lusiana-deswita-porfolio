# Lusiana Deswita — UI/UX Designer Portfolio

A production-ready personal portfolio for **Lusiana Deswita**, UI/UX Designer, built around the **Nutriva** mobile app concept.

The site is a fully client-side React application with no backend, no database and no external APIs. All content lives in typed data files.

---

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Routing | React Router 7 |
| Font | Plus Jakarta Sans (self-hosted via Fontsource) |

---

## Run locally

Requires **Node.js 22.12+**.

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

### Quality checks

```bash
npm run build       # TypeScript build + production bundle
npm run typecheck   # Type check app sources
npx tsc -b          # Full project type check
npm run lint        # oxlint
```

---

## Project structure

```text
src/
├── components/
│   ├── AnimationWrapper.tsx     # Reveal / stagger / line reveal helpers
│   ├── Button.tsx               # Link, anchor or button with variants
│   ├── FoodArt.tsx              # Hand-built SVG food illustrations
│   ├── Footer.tsx
│   ├── Navbar.tsx               # Sticky responsive navigation + mobile menu
│   ├── PhoneMockup.tsx          # Reusable CSS smartphone frame
│   ├── ProjectCard.tsx          # Featured Nutriva project card
│   ├── SectionHeading.tsx
│   ├── SkillCard.tsx
│   ├── casestudy/
│   │   ├── CaseStudyNav.tsx     # Sticky case study section navigation
│   │   ├── DesignSystemShowcase.tsx
│   │   └── ScreenGallery.tsx    # UI screens, wireframes, final presentation
│   └── nutriva/
│       ├── NutrivaScreens.tsx   # 10 live-rendered app concept screens
│       ├── screenMeta.ts        # Screen labels + status-bar tone
│       └── WireframePhone.tsx   # Low-fidelity conceptual wireframes
├── data/
│   ├── profile.ts               # Personal details, bio, contact, navigation
│   ├── nutriva.ts               # Complete case study content
│   └── skills.ts                # Skills + tools
├── hooks/
│   ├── useActiveSection.ts
│   └── useDocumentMeta.ts
├── layouts/
│   └── SiteLayout.tsx           # Navbar, footer, scroll/hash behaviour
├── pages/
│   ├── Home.tsx
│   ├── NutrivaCaseStudy.tsx
│   └── NotFound.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── FeaturedProject.tsx
│   ├── Skills.tsx
│   ├── Tools.tsx
│   └── Contact.tsx
├── App.tsx
├── index.css                    # Tailwind theme tokens + base styles
└── main.tsx
```

---

## Editing content

### Personal profile — `src/data/profile.ts`

- Name, logo, title, experience
- Hero headline and supporting text
- About biography, philosophy and interests
- Contact links
- Footer note

### Nutriva case study — `src/data/nutriva.ts`

All case study copy, goals, hypotheses, personas, process steps, user flow, screen descriptions, design system tokens and reflection text.

### Skills & tools — `src/data/skills.ts`

Skill groups, individual skills and the tools shown on the home page.

---

## Placeholders (important)

The following details were **not supplied** and are deliberately marked as placeholders in the data file and interface:

| Item | Current value | Where to edit |
| --- | --- | --- |
| Email | `hello@example.com` (labelled “Placeholder”) | `profile.contact.links[0]` |
| LinkedIn | `linkedin.com/in/username` (no link) | `profile.contact.links[1]` |
| Behance | `behance.net/username` (no link) | `profile.contact.links[2]` |
| Portrait | Elegant typographic “LD” visual, noted as replaceable | `sections/About.tsx` |
| OG image domain | Uses relative `/og-image.png`; set an absolute URL after deploy | `index.html` |

After adding a real LinkedIn / Behance URL, set `href` to the full URL and `placeholder` to `false`. The UI will render them as links automatically.

The portrait visual can be replaced with:

```tsx
<img
  src="/portrait.jpg"
  alt="Portrait of Lusiana Deswita"
  loading="lazy"
  className="h-full w-full object-cover"
/>
```

inside the visual card in `src/sections/About.tsx`.

### Honesty rules followed

- Nutriva is presented as a **self-initiated concept**, not a shipped product.
- No research findings, user counts, usability results, business metrics, clients, awards or employment history are invented.
- Personas are explicitly labelled **illustrative**.
- Challenges are labelled **design hypotheses**.
- All nutrition values in the app screens are labelled **illustrative** and the app is not implied to give medical advice.
- Figma and FigJam are the only tools listed (only confirmed tools).

---

## Design system

| Token | Value |
| --- | --- |
| Primary sage | `#829B78` |
| Dark sage | `#647D5D` |
| Warm white | `#FAFAF7` |
| Charcoal | `#252923` |
| Secondary text | `#63695F` (accessible variant of #777D74) |
| Muted labels | `#6A7067` |
| Light border | `#E9EBE5` |
| Soft green background | `#EFF3EC` |
| Font | Plus Jakarta Sans |

**Nutriva palette:** `#5F9B72`, `#A8C9A8`, `#EAF3E9`, `#FAFAF7`, `#25352B`.

Nutriva screens are built as live HTML/CSS UI inside reusable phone frames — no screenshots, no stock imagery, and no broken image links.

---

## Accessibility & performance

- Semantic landmarks, a skip link and logical heading order
- Keyboard-accessible navigation and mobile menu (Escape closes, body scroll locks)
- Visible focus styles and reduced-motion support
- Decorative SVGs are hidden from assistive technology; illustrations have labels
- Self-hosted variable font (no external font request)
- No large image payloads — phone screens are vector/CSS
- Responsive from 375px up to 1440px+

---

## Deploy to Vercel

1. Push the repository to GitHub/GitLab.
2. Import the project in [Vercel](https://vercel.com/new).
3. Vercel detects Vite automatically. Confirm:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy.

`vercel.json` already contains the SPA rewrite so `/work/nutriva` resolves correctly on refresh.

### Post-deploy checklist

- Replace contact placeholders with real links.
- Replace the typographic portrait with a photograph (optional).
- Update the Open Graph image URL in `index.html` to an absolute URL (e.g. `https://your-domain.com/og-image.png`).
- Add a real `og:url` and canonical URL for the deployed domain.
- Replace `robots.txt` with an absolute sitemap URL if you generate a sitemap.
