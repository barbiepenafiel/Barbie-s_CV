type SectionHeadingProps = { index: string; title: string; id: string };
const labels: Record<string, string> = {
  "about-heading": "About me",
  "skills-heading": "Skills & creative toolkit",
  "projects-heading": "Featured work",
  "process-heading": "My process",
  "education-heading": "Education",
  "experience-heading": "Experience & practice",
  "achievements-heading": "Continued learning",
  "contact-heading": "Let’s work together",
};
export function SectionHeading({ index, title, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-kicker">
        <span aria-hidden="true">{index} / </span>
        {labels[id] ?? "Portfolio"}
      </p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
