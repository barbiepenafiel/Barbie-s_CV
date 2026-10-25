# Barbie Peñafiel — Personal CV Website

## Project Overview

A personal portfolio and curriculum vitae for **Barbie Peñafiel — Web Designer · Creative Developer**, based in Panabo City, Davao del Norte, Philippines. This enhancement preserves the existing Next.js project, portrait, personal details, and educational background while introducing an editorial black-and-white visual identity.

## Features

- Responsive hero with the original optimized portrait, professional introduction, location, and purposeful CTAs.
- About section with career objective, interests, and verified contact/social details.
- Education and relevant coursework; no unverified academic honors.
- Skills grouped by frontend development, design, and workflow, without arbitrary percentages.
- Dedicated project cards supporting previews, technologies, repository links, and optional demos. An honest empty state appears until real entries are supplied.
- Independent creative practice section; unconfirmed client/employer claims are excluded.
- Typed achievement/certification entries, hidden (including navigation) when empty.
- Sticky navigation, active section indication, mobile disclosure menu with Escape handling and safe keyboard focus.
- Lightweight scroll reveals, card/arrow interactions, smooth scrolling, and reduced-motion support. Content remains readable with JavaScript disabled.
- Accessible labels, semantic headings, skip link, visible focus, and safe external links.
- Contact form opens a prefilled email draft. **It does not send messages**, claim delivery, clear the visitor’s text, or require a backend. An email application must be configured.
- SEO and social metadata with the confirmed production domain.

## Technologies Used

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4, native CSS transitions and IntersectionObserver
- Next.js Image and local font optimization (bundled Inter, with a system serif display face)
- ESLint, npm, Git / GitHub, Vercel

## Project Structure

```text
public/images/              Original portrait assets
src/app/
  globals.css               Grayscale tokens, layout utilities, interactions
  layout.tsx                Fonts, skip link, metadata
  page.tsx                  Server-rendered page composition
src/components/
  SiteHeader.tsx            Responsive navigation and active section state
  ProfileSection.tsx        Hero / portrait
  AboutSection.tsx          Profile and career objective
  EducationSection.tsx      Education and coursework
  SkillsSection.tsx         Categorized skill cards
  ProjectsSection.tsx       Project cards / honest empty state
  ExperienceSection.tsx     Independent creative practice
  AchievementsSection.tsx   Verified entries only, hidden when empty
  ContactSection.tsx        Contact details
  ContactForm.tsx           Email draft workflow
  ScrollReveals.tsx         Progressive enhancement for scroll animation
  SectionHeading.tsx        Consistent section headings
  SocialLinks.tsx           Centralized social presentation
  SiteFooter.tsx            Footer and back-to-top action
  icons.tsx                 Local SVG icons
src/lib/content.ts          Personal content and typed data
```

## Local Development

Use Node.js 20.9 or newer (a supported LTS release is recommended).

```bash
git clone https://github.com/barbiepenafiel/Barbie-s_CV.git
cd Barbie-s_CV
npm install
npm run dev
```

Open the development URL printed by Next.js (normally http://localhost:3000).

If your machine has an incorrect npm registry configured, use `npm install --registry=https://registry.npmjs.org`. The lockfile uses the official registry.

## Build Instructions

```bash
npm run lint
npm run build
npm run start
```

Next.js builds include TypeScript validation. Inter is bundled locally under `src/app/fonts/` with its SIL Open Font License; builds do not fetch Google Fonts. No application secrets or environment variables are required.

## Editing Content

Edit `src/lib/content.ts`; components consume this shared source. Preserve the distinction between professional branding and the education program.

- Add real projects to `projects`, with accurate descriptions, technologies, and real links. Put local preview files under `public/images/`; use paths beginning with `/images/`. Remote image sources require a narrowly scoped Next.js image configuration.
- Add only verified entries to `achievements`; the section and navigation appear automatically.
- Academic honors, organization membership, freelance dates, and client work need confirmation before publication.
- Add a real résumé PDF before implementing a Download CV action. No PDF or fake download is supplied.
- Existing coursework and enrollment status are retained. Confirm the current status and expected graduation date before adding a graduation label.
- Confirm professional strengths before adding further skill claims.

## Deployment

Existing Vercel project: [barbiepenafiel-cv](https://vercel.com/barbiepenafiels-projects/barbiepenafiel-cv).

Import/connect the existing GitHub repository in this project, select the Next.js framework preset, and use the repository root. Install: `npm install`; build: `npm run build`; output: Next.js default. No custom server or environment variables are needed. Deploy the reviewed branch as a preview or promote a successful deployment to production. Do not create a duplicate Vercel project.

See `QUALITY_CHECK.md` for verification results and remaining content needs. Deployment is only confirmed after the live domain has been checked.

## Student Name

**Barbie Peñafiel**

Davao del Norte State College · BSIT 4C · 4th Year

IT415 — Application Development and Emerging Technologies

## GitHub Repository

[barbiepenafiel/Barbie-s_CV](https://github.com/barbiepenafiel/Barbie-s_CV)

## Live Vercel Website

[https://barbiepenafiel-cv.vercel.app/](https://barbiepenafiel-cv.vercel.app/)

## Suggested Meaningful Commits

1. `feat: introduce monochrome visual system and editorial profile`
2. `feat: add responsive navigation and accessible interactions`
3. `feat: add portfolio sections and verified content schemas`
4. `fix: clarify email workflow and remove unverified claims`
5. `docs: document content editing and Vercel deployment`
