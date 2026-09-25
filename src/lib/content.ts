// All personal CV content lives here. Edit this file to update the site —
// no need to touch any component markup.

export const site = {
  year: new Date().getFullYear(),
};

export const profile = {
  firstName: "Barbie",
  lastName: "Peñafiel",
  initials: "BP",
  role: "Web Designer",
  // Short line shown in the top header, left side.
  tagline: "Building clean, purposeful web experiences.",
  // Set to a short paragraph (2-3 sentences) to replace the placeholder below.
  introduction: null as string | null,
  location: "Panabo City, Davao del Norte, Philippines",
  email: "barbiepenafiel2019@gmail.com",
  linkedin: "https://www.linkedin.com/in/barbie-penafiel-675765376/",
  github: "https://github.com/barbiepenafiel",
  portrait: {
    src: "/images/barbie-portrait.png",
    alt: "Portrait of Barbie Peñafiel, smiling, wearing a red blazer",
  },
};

export type EducationEntry = {
  school: string;
  program: string;
  year: string;
};

// Add or remove entries here — the section renders exactly what's listed.
export const education: EducationEntry[] = [
  {
    school: "Davao del Norte State College",
    program: "Bachelor of Science in Information Technology",
    year: "2027",
  },
];

// Add skill names here as plain strings, e.g. ["Figma", "UI Design", "HTML & CSS"].
// Leave empty to show the "coming soon" placeholder instead of guessing.
export const skills: string[] = [];

export type ExperienceEntry = {
  title: string;
  detail: string;
};

export const experience: ExperienceEntry[] = [
  {
    title: "Web Designer",
    detail: "2 years of experience designing and building websites.",
  },
];

export const navLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Education", href: "#education" },
  { label: "Skills & Experience", href: "#skills-experience" },
  { label: "Contact", href: "#contact" },
];
