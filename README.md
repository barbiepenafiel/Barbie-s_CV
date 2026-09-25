# Personal CV Web Page

## Student Information

Name: Barbie Peñafiel  
College: Davao del Norte State College 
Year Level: 4th Year  
Set/Section: BSIT 4C

Subject: IT415 -APPLICATION DEVELOPMENT AND EMERGING TECHNOLOGIES

## Project Description

A single-page personal CV web page developed using **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**. The website presents Barbie Peñafiel’s profile, education, skills, experience, and contact information.

All personal content is centralized in one file for easy updates and maintenance.

## Technologies Used

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**

## Features

- **Site Header:** Displays the website’s header.
- **Personal Profile:** Presents the name, role, introduction, and portrait.
- **Education Section:** Displays academic background.
- **Skills and Experience:** Showcases skills and experience entries.
- **Contact Section:** Presents contact information.
- **Site Footer:** Completes the page layout.
- **Centralized Content:** Stores all personal information in `src/lib/content.ts`.
- **Content Placeholders:** Displays placeholders when the introduction or skills have not been added.

## Project Structure

```text
personal-cv/
├── public/
│   └── images/
│       └── barbie-portrait.png
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── SiteHeader.tsx
│   │   ├── ProfileSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── SkillsExperienceSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── SectionHeading.tsx
│   │   └── icons.tsx
│   └── lib/
│       └── content.ts
├── README.md
└── package.json
```

## Installation & Setup

1. **Clone the repository:**

   Replace `YOUR_REPOSITORY_URL` with your repository’s URL.

   ```bash
   git clone YOUR_REPOSITORY_URL personal-cv
   ```

2. **Navigate into the project directory:**

   ```bash
   cd personal-cv
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open in your browser:**

   Visit [http://localhost:3000](http://localhost:3000).

## Editing Your Content

Update your personal information in:

```text
src/lib/content.ts
```

- **Introduction:** Replace `null` with a short introduction of 2–3 sentences.
- **Skills:** Add skill names, such as `["Figma", "UI Design", "HTML & CSS"]`.
- **Education and Experience:** Add, remove, or edit entries in their respective arrays.
- **Contact Details:** Update your contact information.
- **Portrait:** Replace `public/images/barbie-portrait.png`, or update its path in `content.ts`.

## Building for Production

```bash
npm run build
npm run start
```

## Author

**Barbie Peñafiel**  
BS Information Technology Student • Aspiring Web Designer
