# Corey Alejandro Portfolio

A modular Next.js App Router + TypeScript portfolio refactor designed to serve as strong signals for both AI Safety and Societal Impact reviewers.

## What changed from the original HTML portfolio

The uploaded portfolio was a single `index.html` file with an AI safety / runtime governance emphasis. This refactor keeps the high-signal pieces, removes theory-first overload, and reorganizes the portfolio around two reviewer paths:

1. **AI Safety** — runtime verification, contract-state systems, safety evals, red-team/blue-team discipline, tests.
2. **Societal Impact** — behavioral observability, high-reliance users, agency erosion, differential harm, privacy-aware measurement.

## Functional status

- **Working:** Static Next.js app with modular sections, typed data model, responsive layout, and deterministic Agent Sentinel demo.
- **Demo mechanism:** The demo isolates one safety mechanism: detect a behavioral state transition, explain the flag in plain English, allow user contestation, and apply a repair path.
- **Edge cases included:** high-reliance deference, unsupported confidence / omission, helpful-but-unsafe conflict, and bounded support.
- **No backend required:** The demo uses local deterministic sample scenarios and does not call external APIs.
- **Not included:** Real Agent Sentinel backend, API-key handling, user authentication, analytics, CMS, or live repo-status checks.
- **Deployment target:** Vercel-ready.

## File structure

```txt
coreyalejandro-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── NavBar.tsx
│   ├── SectionHeader.tsx
│   ├── demo/
│   │   └── AgentSentinelDemo.tsx
│   ├── sections/
│   │   ├── FooterSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProofSection.tsx
│   │   ├── ResearchSection.tsx
│   │   └── SignalGrid.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       └── Card.tsx
├── data/
│   └── profile.ts
├── lib/
│   └── utils.ts
├── package.json
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── next.config.mjs
```

## Install and run

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build for production

```bash
npm run typecheck
npm run build
npm run start
```

## Vercel deployment

1. Push this folder to GitHub.
2. Import the repo in Vercel.
3. Use the default Next.js settings.
4. Deploy.

## Editing the portfolio content

Most content lives in:

```txt
data/profile.ts
```

Edit the arrays there to change:

- hero positioning
- reviewer signal cards
- featured projects
- research project ideas
- skills
- truth-status legend
- operating principles

## Safety and truth notes

- The Agent Sentinel demo is a deterministic portfolio demo, not the full production tool. It demonstrates bilateral intelligibility and contestability through local sample scenarios, not live model monitoring.
- UICare/HUI is framed as a behavioral safety prototype, not as a clinical or medical system.
- Roadmap claims are kept out of project bullets unless explicitly marked.
- The portfolio distinguishes implemented, verified, prototype, and roadmap statuses.
