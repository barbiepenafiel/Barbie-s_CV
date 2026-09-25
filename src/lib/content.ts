// All personal CV content lives here. Edit this file to update the site —
// no need to touch any component markup.

export const site = {
  year: new Date().getFullYear(),
};

export const profile = {
  firstName: "Barbie",
  lastName: "Peñafiel",
  initials: "BP",
  role: "Web Designer · Creative Developer",
  // Short line shown in the top header, left side.
  tagline: "Building clean, purposeful web experiences.",
  // Set to a short paragraph (2-3 sentences) to replace the placeholder below.
  introduction: "I am a web developer and designer with experience creating engaging digital experiences and compelling visual content. I combine clean code, thoughtful design, and visual storytelling to bring ideas to life. My work spans web development, UI/UX design, portfolio websites, brochures, posters, and branding materials. By blending technical expertise with creative design, I deliver cohesive, user-focused solutions that reflect each brand's identity.",
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
    achievements: [
      "Dean's List Candidate",
      "Active member of the IT Students Society",
      "Participated in campus web design projects",
    ],
  },
];

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend Development",
    skills: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Design",
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Wireframing", "Prototyping"],
  },
  {
    label: "Tools & Workflow",
    skills: ["Git & GitHub", "VS Code", "Vercel", "npm"],
  },
];

// Flat list kept for backwards-compat (unused by the redesigned component)
export const skills: string[] = skillCategories.flatMap((c) => c.skills);

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
    title: "Freelance Web Designer",
    type: "Freelance",
    period: "2023 – Present",
    location: "Remote / Panabo City, Philippines",
    summary:
      "Designed and developed responsive, user-centered websites for clients across various industries, handling projects end-to-end from initial concept through deployment.",
    highlights: [
      "Built and delivered multiple client websites using React and Next.js",
      "Created high-fidelity UI mockups and interactive prototypes in Figma",
      "Implemented pixel-perfect, mobile-first layouts with Tailwind CSS",
      "Collaborated directly with clients to gather requirements and iterate on feedback",
      "Optimized sites for performance, accessibility, and SEO best practices",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Figma", "TypeScript"],
  },
];

export const navLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Education", href: "#education" },
  { label: "Skills & Experience", href: "#skills-experience" },
  { label: "Contact", href: "#contact" },
];
