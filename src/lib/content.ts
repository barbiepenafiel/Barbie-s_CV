// All personal CV content lives here. Edit this file to update the site —
// no need to touch any component markup.

export const site = {
  year: new Date().getFullYear(),
  url: "https://barbiepenafiel-cv.vercel.app",
};

export const profile = {
  firstName: "Barbie",
  lastName: "Peñafiel",
  initials: "BP",
  role: "Web Designer · Creative Developer",
  // Short line shown in the top header, left side.
  tagline: "Building clean, purposeful web experiences.",
  introduction:
    "I bring together thoughtful design and clean code to create purposeful digital experiences. From the first wireframe to the final responsive interface, I care about the details that make the web feel intuitive.",
  about:
    "My work brings web development, UI/UX, and visual storytelling together. I enjoy translating ideas into clear interfaces and cohesive visual identities, including portfolio websites, brochures, posters, and branding materials.",
  objective:
    "To combine web development and creative design in building responsive, accessible interfaces that put people first — while continuing to grow through thoughtful collaboration and meaningful digital projects.",
  interests: ["Web development", "UI/UX design", "Visual communication"],
  location: "Panabo City, Davao del Norte, Philippines",
  email: "barbiepenafiel2019@gmail.com",
  linkedin: "https://www.linkedin.com/in/barbie-penafiel-675765376/",
  github: "https://github.com/barbiepenafiel",
  portrait: {
    src: "/images/cv_pic.png",
    alt: "Portrait of Barbie Peñafiel, smiling, wearing a red blazer",
  },
};

export type EducationEntry = {
  school: string;
  shortName: string;
  program: string;
  year: string;
  status: string;
  location: string;
  description: string;
  coursework: string[];
  achievements: string[];
};

export const education: EducationEntry[] = [
  {
    school: "Davao del Norte State College",
    shortName: "DNSC",
    program: "Bachelor of Science in Information Technology",
    year: "2027",
    status: "Currently Enrolled",
    location: "Panabo City, Davao del Norte",
    description:
      "Pursuing a comprehensive IT degree with a focus on web technologies, software development, and user interface design. Actively applying academic knowledge through real-world projects and collaborative coursework.",
    coursework: [
      "Web Development",
      "Data Structures & Algorithms",
      "Database Management",
      "Object-Oriented Programming",
      "Systems Analysis & Design",
      "Human-Computer Interaction",
      "Network Fundamentals",
      "Capstone Project",
    ],
    // TODO: Add verified academic achievements and organization involvement.
    achievements: [],
  },
];

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend Development",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    label: "Design",
    skills: [
      "Figma",
      "UI/UX Design",
      "Responsive Design",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    label: "Tools & Workflow",
    skills: ["Git & GitHub", "VS Code", "Vercel", "npm"],
  },
];

// Supported by the profile's design focus and collaborative coursework.
export const professionalSkills = [
  "Creative thinking",
  "Attention to detail",
  "Collaboration",
];

export type ExperienceEntry = {
  title: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Creative Web Projects",
    type: "Independent practice",
    period: "Ongoing",
    location: "Panabo City, Philippines",
    summary:
      "Exploring the relationship between design and development through responsive interfaces, visual communication, and personal web projects.",
    highlights: [
      "Interface design, wireframing, and interactive prototyping in Figma",
      "Responsive web development with React, Next.js, and Tailwind CSS",
      "Visual design across web and print materials",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Figma", "TypeScript"],
  },
];

export const navLinks = [
  { label: "Home", href: "#profile" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  // Achievements navigation is appended only when verified entries exist.
  { label: "Contact", href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  kind: "github" | "linkedin";
};
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github, kind: "github" },
  { label: "LinkedIn", href: profile.linkedin, kind: "linkedin" },
];

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  preview?: { src: string; alt: string };
  repository?: string;
  demo?: string;
};
// TODO: Add real project descriptions, local previews, repository and optional live URLs.
export const projects: Project[] = [];

export type Achievement = {
  title: string;
  category:
    | "Certificate"
    | "Award"
    | "Seminar"
    | "Training"
    | "Workshop"
    | "Academic"
    | "Organization";
  issuer: string;
  date: string;
  url?: string;
};
// TODO: Add certificates/awards only after verification. Empty sections stay hidden.
export const achievements: Achievement[] = [];
// TODO: Confirm freelance dates and client work before publishing employment claims.
// TODO: Supply a real resume PDF before adding a Download CV action.
