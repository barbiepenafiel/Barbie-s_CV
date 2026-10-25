# Portfolio quality review — 26 October 2026

## Course rubric

| Area | Implementation |
| --- | --- |
| Personal profile | Barbie Peñafiel; Web Designer · Creative Developer; original full-color portrait, introduction, career direction, location, email and verified social links. Professional branding remains separate from education. |
| Education | Davao del Norte State College, BS Information Technology, current enrollment and expected 2027 graduation, supported by the supplied résumé. |
| Skills | Four interactive categories with 21 skills. Descriptions explain the tools without arbitrary percentages. Added creative tools and MySQL are supported by the supplied résumé. |
| Projects | Six supplied project groups: Campedals, DSP Publishing website concept, Fashion Storefront concept, DSP Celebration Posters, Campus Information Brochure and Tempura Brochure. Real artwork, categories, descriptive tags and image galleries; no fabricated live demos or repositories. |
| Experience | Graphic design and web development for school, independent and freelance work, using the role, dates and responsibilities supplied in the résumé without adding client names or employers. |
| Achievements | Two completion records: Cisco Networking Academy course (11 November 2025) and DNSC AI seminar (29 September 2026). Course completion is explicitly distinguished from the professional CCNA certification exam. |
| UI design | Cream backgrounds, warm taupe accents, serif headings, rounded cards, curved portrait frame and a dark credential section. Original artwork retains its own colors. |
| UX and interaction | Sticky active navigation, accessible mobile menu, filterable project grid, native project modal with gallery controls, selectable skill details, real résumé download, contact email draft and back-to-top links. |
| Motion | Subtle entrances, scroll reveals, hover states and reduced-motion handling. No heavy animation dependency. |
| Responsiveness | Browser checks cover 320, 375, 430, 768, 1024, 1440 and 1920 px, including overflow, all image variants, card counts and navigation. |
| Accessibility | One h1, associated section headings, descriptive alt text, labels, visible focus, skip link, pressed states, polite announcements, native modal focus management, Escape handling and focus restoration. |
| Code quality | Typed centralized content, server-rendered sections with small client boundaries, optimized local images and original PDFs. No new runtime dependencies. |
| GitHub and deployment | Repository-local author is Barbie Peñafiel. Publish reviewed commits by normal fast-forward pushes to main and deploy to the existing Vercel project. Publication is verified separately before reporting success. |

## Source verification

The owner supplied a shared portfolio folder containing project artwork, an original four-page résumé PDF, a Cisco course-completion PDF and a seminar completion image. Images were reviewed visually, and PDF text and all relevant pages were inspected.

The résumé and Cisco PDF under `public/documents/` match their supplied originals by SHA-256. They have not been edited. The résumé retains its original wording and original portfolio URL. Website branding continues to use Web Designer · Creative Developer.

Original downloads and PDF renders are stored in ignored `artifacts/`. Production uses WebP previews, while supplied source URLs remain recorded in content metadata. Artwork-only projects are labeled as concepts or visual work rather than falsely claiming deployed applications.

## Validation

- `npm run lint`: passes.
- `npm run build`: passes compilation, strict TypeScript validation and static generation.
- Browser checks cover seven screen widths; project category filters; opening all six project viewers; image navigation; Escape; body scroll locking and focus restoration; all 21 skill selections and keyboard activation; reduced motion; server-rendered project content without JavaScript; both PDF responses and signatures; and the email draft workflow.
- Responsive screenshots and the final machine-readable result are saved in ignored `artifacts/editorial-results.json` and `artifacts/editorial-*.png`.
- Image checks scroll each image into view and wait for loading to complete. Optimized gallery covers and open modal artwork load immediately; other below-the-fold previews remain lazy.
- Public résumé/certificate downloads are original PDF files, not fake links.
- No fictional testimonials, press logos, client counts, appointments, awards or affiliations were copied into the site.

## Documentation and publication

`README.md` contains only Barbie’s profile, education, toolkit, real selected work, continued learning and contact information. It does not mention design references. `DEVELOPMENT.md` contains setup, implementation, editing and deployment instructions.

The owner has authorized automatic publishing. The recurring rule has been updated to preserve the current cream editorial design, real project gallery, original full-color portrait, original documents and verified qualifications. Completed source changes are committed as Barbie Peñafiel, pushed normally to GitHub, deployed to the existing Vercel project and checked on the production domain. The latest successful publication is recorded in ignored `artifacts/publication-state.json`.


## Portrait and toolkit refinement

The owner-supplied clearer portrait replaces the earlier image, stays in original color, and uses high-quality responsive delivery. All 21 toolkit buttons include decorative vector icons while preserving text labels and keyboard selection. Project viewers omit the original-file link. GitHub and LinkedIn appear once as descriptive contact cards; the footer links to that contact section.
