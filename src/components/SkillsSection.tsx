import { professionalSkills, skillCategories } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
export function SkillsSection() {
  return (
    <section
      tabIndex={-1}
      id="skills"
      aria-labelledby="skills-heading"
      className="section"
    >
      <div className="wrap">
        <SectionHeading index="03" title="Skills & tools" id="skills-heading" />
        <p className="mb-8 max-w-lg text-sm leading-7 text-muted">
          A considered toolkit for turning ideas into clear, responsive digital
          experiences.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <article data-reveal key={category.label} className="skill-card">
              <span
                className="mb-8 block font-mono text-sm text-muted"
                aria-hidden="true"
              >
                {["</>", "◇", "↗"][index]}
              </span>
              <h3 className="mb-5 text-lg font-medium tracking-tight">
                {category.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li className="tag" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
          <h3 className="eyebrow mr-2 text-muted">How I work</h3>
          <ul className="flex flex-wrap gap-2">
            {professionalSkills.map((skill) => (
              <li key={skill} className="tag">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
