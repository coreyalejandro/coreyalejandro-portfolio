# Portfolio Refactor — Next.js Modular Architecture

## Goal
Replace the single 122KB HTML file with a Next.js app where every section is its own component, swappable independently. Research Convergence Map becomes a component. Resume becomes a component. No more deploying from /tmp/.

---

## Current State
- Source: /tmp/deploy_combined/index.html (now also at github.com/coreyalejandro/coreyalejandro-portfolio)
- Live: www.coreyalejandro.com
- Vercel project: deploy_combined (no git connection yet)
- Problem: one giant file, impossible to maintain, no modularity

---

## Proposed Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS (already used in portfolio styles)
- Vercel deployment from GitHub (git-connected, no more /tmp/)

---

## Folder Structure

```
coreyalejandro-portfolio/
  app/
    layout.tsx          — global nav, fonts, CSS variables
    page.tsx            — assembles all sections in order
  components/
    Nav.tsx             — top navigation bar
    Hero.tsx            — hero section
    Demo.tsx            — Contract Window live demo
    Projects.tsx        — case studies (TLC, CGL, Frontin)
    Evidence.tsx        — claim audit / evidence roadmap
    Validation.tsx      — validation section
    Failures.tsx        — AI failures log
    Lineage.tsx         — collaborative development lineage (Research Convergence Map)
    Research.tsx        — research notes / background
    Resume.tsx          — resume section (full content)
    Footer.tsx          — footer with working links
  public/
    — static assets
  styles/
    globals.css         — CSS variables, scrollbar, base styles
```

---

## Migration Plan

### Phase 1 — Scaffold (no content yet)
1. Run: npx create-next-app@latest coreyalejandro-portfolio --typescript --tailwind --app --no-src-dir
2. Install nothing extra — keep deps minimal
3. Set up globals.css with existing CSS variables from index.html
4. Create empty component files for each section

### Phase 2 — Extract content (one component at a time, your approval between each)
Extract from index.html in this order:
1. Nav.tsx
2. Hero.tsx
3. Projects.tsx
4. Evidence.tsx
5. Failures.tsx
6. Lineage.tsx (Research Convergence Map — absorbs deploy_map)
7. Research.tsx
8. Resume.tsx
9. Footer.tsx (with all links fixed)
10. Demo.tsx (Contract Window — last, most complex)

### Phase 3 — Connect to Vercel
1. Push to github.com/coreyalejandro/coreyalejandro-portfolio
2. Connect deploy_combined Vercel project to that repo via dashboard
3. Rename Vercel project to coreyalejandro-com
4. Delete deploy_map Vercel project (absorbed into Lineage component)
5. Verify www.coreyalejandro.com serves from git

---

## Rules During Build
- Every component extracted from index.html — NO new content added, NO content changed
- Show diff before each deploy
- All work in /Users/coreyalejandro/Projects/coreyalejandro-portfolio/
- Commit to git before any Vercel deploy
- One component at a time — your sign-off between phases

---

## Open Questions
1. Do you want the Recruiter View preserved as a separate route (/recruiter) or keep it as a toggle?
2. Contract Window demo — does it need its own page or stays inline on the homepage?

---

## Verification
- Each section renders identically to current live site
- All footer links work
- www.coreyalejandro.com and coreyalejandro.com both resolve
- Vercel project connected to GitHub repo
- No orphaned deployments
