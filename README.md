# Barbie Peñafiel — Personal CV

A single-page personal CV built with Next.js (App Router) and Tailwind CSS.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing your content

All personal content (name, role, introduction, education, skills,
experience, and contact details) lives in one file:

```
src/lib/content.ts
```

Edit the values there — no component code needs to change. A few notes:

- **Introduction**: currently `null`, which shows a placeholder on the
  page. Set it to a string (2–3 sentences) to replace it.
- **Skills**: currently an empty array, which shows a "coming soon"
  placeholder. Add skill names as strings, e.g.
  `["Figma", "UI Design", "HTML & CSS"]`.
- **Education / Experience**: each is an array of objects — add, remove,
  or edit entries as needed.
- **Portrait**: replace `public/images/barbie-portrait.png` with a new
  image (same filename, or update the path in `content.ts`).

## Project structure

```
src/
  app/
    layout.tsx      # fonts, metadata, page frame/border
    page.tsx         # assembles the sections
    globals.css       # color tokens, fonts, base styles
  components/
    SiteHeader.tsx
    ProfileSection.tsx
    EducationSection.tsx
    SkillsExperienceSection.tsx
    ContactSection.tsx
    SiteFooter.tsx
    SectionHeading.tsx
    icons.tsx
  lib/
    content.ts        # <- all personal content
```

## Building for production

```bash
npm run build
npm run start
```

## Deploying to Vercel

**Option A — Vercel CLI (fastest, no GitHub needed):**

```bash
npm install -g vercel
vercel login
vercel        # deploy a preview
vercel --prod # deploy to production
```

**Option B — GitHub + Vercel dashboard:**

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository.
3. Framework preset "Next.js" is auto-detected — no extra config needed.
4. Click Deploy. Vercel will give you a live `*.vercel.app` URL.

No environment variables, database, or auth setup are required — this
is a static, single-page site.
