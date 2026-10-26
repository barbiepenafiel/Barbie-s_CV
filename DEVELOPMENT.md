# Portfolio development

This Next.js project powers Barbie Peñafiel’s personal portfolio. The public README contains her profile; implementation details live here.

## Local setup

Use Node.js 20.9 or newer; production uses Node.js 24.x.

```bash
npm install
npm run dev
```

The project selects the official npm registry in `.npmrc`. Set the server-only application variable `GITHUB_PROFILE_USERNAME=barbiepenafiel` in ignored `.env.local`. Configure the same non-secret username for Vercel Development, Preview and Production. No GitHub token is needed for this public profile request. The Vercel CLI may create an ignored local authentication file; never commit it.

## Validation and production

```bash
npm run lint
npm run build
npm run start
```

Next.js checks TypeScript during the production build. Inter is bundled locally with its Open Font License; editorial headings use a system serif. Builds do not download fonts.

## Structure

- `src/lib/content.ts`: personal details, skills, verified projects, process, education, experience, and certificates.
- `src/components/`: reusable page sections; interactive navigation, skill cards, contact draft form and project gallery.
- `src/app/`: metadata, page composition and shared design tokens/styles.
- `public/images/`: original full-color portrait.
- `public/projects/`: optimized WebP previews from the owner’s supplied artwork.
- `public/certificates/`: certificate preview.
- `public/documents/`: original supplied résumé and Cisco course-completion PDF.
- `artifacts/`: ignored original downloads, visual checks and local publication state.

## Editing content

Keep personal content in `src/lib/content.ts`. New projects need an id, name, category, accurate description, tags, preview, gallery images, and verified source URL. Repository and live demo links are optional; add them only when actual URLs exist. Projects without working code links can still show their supplied visual work honestly.

The gallery filters real project categories. Its native modal supports keyboard focus, Escape, image navigation and scroll locking. Skill buttons expose a selected state and announce their explanation. The contact form prepares a mailto draft; sending happens in the visitor’s email app. The résumé link downloads the original file.

Only add verified achievements. The Cisco document is course completion and must not be described as passing the professional CCNA exam. Displayed PDF files are supplied originals; do not silently rewrite them. The downloadable résumé retains its original wording and original portfolio URL.

Use Next.js Image with appropriate sizes. Keep large original artwork out of production when optimized previews suffice. Small gallery covers load eagerly to avoid blank results during filtering; modal artwork is requested when its viewer opens. Other below-the-fold previews remain lazy. Preserve full-color project artwork and the owner’s portrait. Shared cream, taupe and warm dark tokens define the visual system. Respect reduced-motion preferences.

## Publishing

Repository: https://github.com/barbiepenafiel/Barbie-s_CV

Production: https://barbiepenafiel-cv.vercel.app/

Existing Vercel project: `barbiepenafiels-projects/barbiepenafiel-cv`. Use the repository root and Next.js preset. Do not create a duplicate project.

Verify repository-local author and committer before committing: Barbie Peñafiel, `barbiepenafiel2019@gmail.com`. Fetch remote changes, validate, make meaningful commits and use normal fast-forward pushes to main. Do not force-push or rewrite history without new explicit authorization.

The owner has authorized publishing completed changes automatically. A recurring check is attached to this chat. It must skip active work, exclude secrets/generated files, publish only after validation, and verify production before recording success in ignored `artifacts/publication-state.json`.


## About page and external data

The separate /about route reuses verified personal content and shared site components. Its GitHub panel calls /api/github, which reads the server-side username and requests the official GitHub public-profile API. Responses are validated, upstream data is cached for one hour, and the request times out after eight seconds. No credentials or upstream error details reach the browser. Loading, unavailable and retry states preserve a direct profile link. A missing or invalid username returns HTTP 503 and logs a configuration error.

## IT415 release workflow

Use a feature branch for the enlarged navigation and lab changes. Review the Vercel Preview deployment and run the same build and browser checks before merging into main. The existing Git integration is connected to this repository. Main is the production branch. Reuse a successful deployment rather than creating duplicate releases. Environment changes require a new deployment.

For the controlled troubleshooting exercise, use an isolated preview with an intentionally invalid build command, inspect the first error in its build logs, and redeploy with the normal framework command. Never send the deliberate failure to production. For recovery, identify a known healthy production deployment, roll back to it, check the public site, then restore the current verified deployment. Preserve actual command transcripts, timestamps and deployment IDs in ignored artifacts/it415. Deployment credentials and local config files stay untracked.
