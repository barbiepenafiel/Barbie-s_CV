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
  heroIntroduction:
    "I turn ideas into thoughtful websites and visual experiences, bringing together clean code, creative design, and care for the people who use them.",
  resume: "/documents/barbie-penafiel-resume.pdf",
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
  id: "frontend" | "design" | "visual" | "workflow";
  caption: string;
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    caption: "Build the experience",
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
    id: "design",
    caption: "Shape the idea",
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
    id: "visual",
    caption: "Tell the story",
    label: "Graphic Design",
    skills: [
      "Canva",
      "Adobe Photoshop",
      "Branding Design",
      "Social Media Graphics",
      "Presentation Design",
    ],
  },
  {
    id: "workflow",
    caption: "Connect the process",
    label: "Tools & Workflow",
    skills: ["Git & GitHub", "VS Code", "Vercel", "npm", "MySQL"],
  },
];

// Describes the purpose of each existing skill, without adding proficiency claims.
export const skillDescriptions: Record<string, string> = {
  "HTML & CSS":
    "Structure, typography, and layout — the foundation of a readable, responsive interface.",
  JavaScript:
    "The interaction layer: responding to input and bringing an interface to life.",
  TypeScript:
    "Clear data types that help keep components consistent and code easier to maintain.",
  React:
    "Reusable components that turn individual interface elements into a cohesive experience.",
  "Next.js":
    "A framework for connecting React interfaces with routing, rendering, and image optimization.",
  "Tailwind CSS":
    "A consistent set of styling utilities for shaping layouts across screen sizes.",
  Figma:
    "A shared canvas for exploring layouts, interface ideas, and visual direction.",
  "UI/UX Design":
    "Connecting visual hierarchy with clear navigation and thoughtful user journeys.",
  "Responsive Design":
    "Layouts that adapt to the screen while keeping content readable and controls comfortable.",
  Wireframing:
    "Starting with structure: mapping content and interactions before refining the visual details.",
  Prototyping:
    "Connecting screens and interactions to explore how an experience flows.",
  "Git & GitHub":
    "Version control and a shared history for tracking changes and collaborating on code.",
  "VS Code":
    "An editing workspace for navigating code, refining components, and reviewing changes.",
  Vercel:
    "Taking a Next.js project from a local build to a shareable web deployment.",
  npm: "Managing the packages and scripts that support development and production builds.",
  Canva:
    "Creating coordinated layouts for posters, brochures, and visual communication.",
  "Adobe Photoshop":
    "Working with imagery, composition, and visual details for digital and print design.",
  "Branding Design":
    "Connecting typography, imagery, and layout into a consistent visual identity.",
  "Social Media Graphics":
    "Shaping clear visual messages for content designed to be shared on screen.",
  "Presentation Design":
    "Organizing ideas into a visual narrative with readable slides and a consistent hierarchy.",
  MySQL:
    "Structuring and querying relational data to support digital applications.",
};

export const professionalSkillDescriptions: Record<string, string> = {
  "Creative thinking":
    "Explore possibilities. Give every idea a clear visual direction.",
  "Attention to detail":
    "Refine the spacing, the interactions, and the moments in between.",
  Collaboration:
    "Share ideas, listen to feedback, and build toward a common goal.",
};

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
    title: "Graphic Design & Web Development",
    type: "Freelance & independent projects",
    period: "2022 – Present",
    location: "Panabo City, Philippines",
    summary:
      "Creating brochures, posters, promotional materials, responsive websites, and interface concepts for school, personal, and freelance projects.",
    highlights: [
      "Interface design, wireframing, and interactive prototyping in Figma",
      "Responsive web development with React, Next.js, and Tailwind CSS",
      "Visual design across web and print materials",
      "Collaboration with classmates and clients on design and technical projects",
    ],
    stack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "Canva",
      "Adobe Photoshop",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#profile" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Background", href: "#education" },
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
  id: string;
  category: "Web & UI" | "Print & graphics";
  name: string;
  description: string;
  technologies: string[];
  preview?: { src: string; alt: string };
  repository?: string;
  demo?: string;
  gallery: { src: string; alt: string; caption: string }[];
  source: string;
};
// Artwork supplied in the owner's shared portfolio folder. Concept work is labeled accordingly.
export const projects: Project[] = [
  {
    id: "campedals",
    name: "Campedals",
    category: "Web & UI",
    description:
      "A bike rental and subscription app interface for campus mobility, supported by coordinated promotional materials and UI components.",
    technologies: ["Next.js", "Tailwind CSS", "Figma"],
    preview: {
      src: "/projects/campedals.webp",
      alt: "Campedals campus bike-rental homepage and mobile interface",
    },
    gallery: [
      {
        src: "/projects/campedals.webp",
        alt: "Campedals website and app interface",
        caption: "Bike rental and subscription interface",
      },
      {
        src: "/projects/brochure-front.webp",
        alt: "Front of the Campedals promotional brochure",
        caption: "Promotional brochure — front",
      },
      {
        src: "/projects/brochure-back.webp",
        alt: "Back of the Campedals promotional brochure",
        caption: "Promotional brochure — back",
      },
      {
        src: "/projects/poster.webp",
        alt: "Campedals campus mobility promotional poster",
        caption: "Campus mobility poster",
      },
    ],
    source:
      "https://drive.google.com/file/d/1kUiBcpTsIjVOnnGiaVvxaseKp0zo6Im6/view",
  },
  {
    id: "dsp-website",
    name: "DSP Publishing",
    category: "Web & UI",
    description:
      "A Western-themed publishing website concept that brings book covers, author content, and editorial navigation into one homepage.",
    technologies: ["Website concept", "UI design", "Editorial layout"],
    preview: {
      src: "/projects/dsp.webp",
      alt: "Western-themed DSP publishing website concept",
    },
    gallery: [
      {
        src: "/projects/dsp.webp",
        alt: "DSP publishing homepage with Western books and landscape imagery",
        caption: "Publishing website concept",
      },
    ],
    source:
      "https://drive.google.com/file/d/1lKJXlbf7zCzOGALl0VKWuwtHSXY3Clbr/view",
  },
  {
    id: "fashion-storefront",
    name: "Fashion Storefront",
    category: "Web & UI",
    description:
      "A fashion e-commerce interface concept exploring product grids, collection-led navigation, and editorial imagery. Concept study; no brand affiliation is claimed.",
    technologies: ["UI concept", "E-commerce", "Visual hierarchy"],
    preview: {
      src: "/projects/web-design.webp",
      alt: "Fashion storefront interface concept with editorial images and product cards",
    },
    gallery: [
      {
        src: "/projects/web-design.webp",
        alt: "Full fashion storefront interface concept",
        caption: "Fashion e-commerce interface study",
      },
    ],
    source:
      "https://drive.google.com/file/d/1fdpwvTf8V4KWQyOGwOFHkN3Uex5yRrsl/view",
  },
  {
    id: "dsp-posters",
    name: "DSP Celebration Posters",
    category: "Print & graphics",
    description:
      "Celebration poster layouts combining portrait compositions, bold type, and coordinated visual identities.",
    technologies: ["Poster design", "Typography", "Photo composition"],
    preview: {
      src: "/projects/dsc-cover-poster.webp",
      alt: "DSP team celebration poster with portrait compositions",
    },
    gallery: [
      {
        src: "/projects/dsc-cover-poster.webp",
        alt: "DSP team congratulations poster",
        caption: "Team celebration layout",
      },
      {
        src: "/projects/dsp-poster.webp",
        alt: "DSP class of 2025 celebration poster",
        caption: "Class celebration layout",
      },
    ],
    source:
      "https://drive.google.com/file/d/1MhH9EK2l19gdOlPotBwnliaTc_YN1c4l/view",
  },
  {
    id: "campus-brochure",
    name: "Campus Information Brochure",
    category: "Print & graphics",
    description:
      "An information-led brochure arranging campus details, imagery, and featured products within a coordinated print layout.",
    technologies: ["Brochure design", "Print layout", "Information design"],
    preview: {
      src: "/projects/school-brochure.webp",
      alt: "Green campus information brochure with photographs and school details",
    },
    gallery: [
      {
        src: "/projects/school-brochure.webp",
        alt: "Full campus information brochure",
        caption: "Campus information and featured products",
      },
    ],
    source:
      "https://drive.google.com/file/d/1LzdlE-RWxYkgbbdNpEOUt4KViFFvRdgQ/view",
  },
  {
    id: "tempura-brochure",
    name: "Tempura Brochure",
    category: "Print & graphics",
    description:
      "A food brochure pairing product photography with clear product information, contact details, and an inviting editorial composition.",
    technologies: ["Food brochure", "Typography", "Print design"],
    preview: {
      src: "/projects/tempura-brochure.webp",
      alt: "Warm orange tempura food brochure",
    },
    gallery: [
      {
        src: "/projects/tempura-brochure.webp",
        alt: "Full tempura food brochure design",
        caption: "Food and product brochure",
      },
    ],
    source:
      "https://drive.google.com/file/d/1kNfaqQigweT5PYF-g5MRUreYpHkXD3Zi/view",
  },
];

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
  description?: string;
  preview?: { src: string; alt: string };
};
export const achievements: Achievement[] = [
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    category: "Certificate",
    issuer: "Cisco Networking Academy · Davao del Norte State College",
    date: "11 November 2025",
    description:
      "Course completion certificate. This is distinct from the professional CCNA certification exam.",
    url: "/documents/cisco-course-certificate.pdf",
    preview: {
      src: "/certificates/cisco-course.webp",
      alt: "Cisco Networking Academy course completion certificate awarded to Barbie Peñafiel",
    },
  },
  {
    title: "AI for Capstone Innovation",
    category: "Seminar",
    issuer: "Davao del Norte State College",
    date: "29 September 2026",
    description:
      "Certificate of completion for the Advanced Seminar Series for BSIT Fourth-Year Students, held on 28–29 September 2026.",
    url: "/projects/set-c-penafiel.webp",
    preview: {
      src: "/projects/set-c-penafiel.webp",
      alt: "AI for capstone innovation seminar completion certificate awarded to Barbie Peñafiel",
    },
  },
];

export const creativeProcess = [
  {
    title: "Discover",
    description:
      "Start with the purpose, the people, and the idea behind the project.",
  },
  {
    title: "Design",
    description:
      "Explore the structure, visual direction, and interactions that bring the idea into focus.",
  },
  {
    title: "Develop",
    description:
      "Build responsive interfaces and shape the visual materials with care.",
  },
  {
    title: "Refine",
    description:
      "Review the details, listen to feedback, and make the experience clearer.",
  },
];
