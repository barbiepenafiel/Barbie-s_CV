const symbols: Record<string, string> = {
  JavaScript: "JS",
  TypeScript: "TS",
  "Next.js": "N",
  Canva: "C",
  "Adobe Photoshop": "Ps",
  npm: "npm",
};

const paths: Record<string, string> = {
  "HTML & CSS": "m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18",
  "Tailwind CSS": "M3 9c3-6 6 0 9 0s3-6 9-3M3 16c3-6 6 0 9 0s3-6 9-3",
  "UI/UX Design": "M3 4h18v16H3zM3 9h18M9 9v11",
  "Responsive Design": "M2 4h14v12H2zM7 20h5m-3-4v4m8-10h5v11h-5z",
  Wireframing: "M3 3h18v18H3zM3 8h18M8 8v13m3-10h7m-7 4h7m-7 3h4",
  Prototyping: "M3 3h7v7H3zM14 14h7v7h-7zM10 6h7v8m-3-3 3 3 3-3",
  "Branding Design": "m12 2 9 6v8l-9 6-9-6V8zM3 8l9 6 9-6m-9 6v8",
  "Social Media Graphics": "M4 3h16v15H9l-5 4zM8 8h8m-8 4h5",
  "Presentation Design": "M3 3h18v13H3zM12 16v5m-5 1 5-3 5 3M7 12l3-4 4 2 3-4",
  "Git & GitHub": "m12 2 10 10-10 10L2 12zM8 6v7m0-4 8 6M8 13v4",
  "VS Code": "m16 3 5 2v14l-5 2L5 11l-3 3v-4l3 3L16 3v18",
  Vercel: "m12 3 10 17H2z",
  MySQL:
    "M3 6c0-5 18-5 18 0s-18 5-18 0Zm0 0v12c0 5 18 5 18 0V6M3 12c0 5 18 5 18 0",
};

export function ToolkitIcon({ name }: { name: string }) {
  return (
    <svg
      className="toolkit-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {symbols[name] ? (
        <>
          <rect x="2" y="2" width="20" height="20" rx="4" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            fontSize={name === "npm" ? "8" : "10"}
            fontWeight="600"
          >
            {symbols[name]}
          </text>
        </>
      ) : name === "Figma" ? (
        <>
          <rect x="5" y="2" width="7" height="7" rx="3.5" />
          <rect x="12" y="2" width="7" height="7" rx="3.5" />
          <rect x="5" y="9" width="7" height="7" rx="3.5" />
          <circle cx="15.5" cy="12.5" r="3.5" />
          <path d="M12 16v3.5a3.5 3.5 0 1 1-3.5-3.5Z" />
        </>
      ) : name === "React" ? (
        <>
          <ellipse cx="12" cy="12" rx="11" ry="4" />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4"
            transform="rotate(120 12 12)"
          />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </>
      ) : (
        <path d={paths[name]} />
      )}
    </svg>
  );
}
