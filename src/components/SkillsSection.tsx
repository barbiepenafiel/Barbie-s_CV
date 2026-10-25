import {
  professionalSkills,
  professionalSkillDescriptions,
  skillCategories,
  skillDescriptions,
} from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { SkillCard } from "./SkillCard";

export function SkillsSection() {
  return (
    <section
      tabIndex={-1}
      id="skills"
      aria-labelledby="skills-heading"
      className="section"
    >
      <div className="wrap">
        <SectionHeading
          index="02"
          title="A toolkit for thoughtful work."
          id="skills-heading"
        />
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <p className="max-w-lg text-sm leading-7 text-muted">
            A considered toolkit for turning ideas into clear, responsive
            digital experiences.
          </p>
          <p className="eyebrow text-muted">
            <span aria-hidden="true">↳ </span>Explore the toolkit
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
              descriptions={Object.fromEntries(
                category.skills.map((skill) => [
                  skill,
                  skillDescriptions[skill],
                ]),
              )}
            />
          ))}
        </div>
        <div className="mt-10 border-t border-border pt-8">
          <h3 className="eyebrow mb-6 text-muted">How I work</h3>
          <ul className="grid gap-6 md:grid-cols-3">
            {professionalSkills.map((skill, index) => (
              <li key={skill} className="work-principle">
                <span aria-hidden="true" className="work-principle-index">
                  0{index + 1}
                </span>
                <div>
                  <h4 className="mb-2 text-sm font-medium">{skill}</h4>
                  <p className="max-w-xs text-xs leading-6 text-muted">
                    {professionalSkillDescriptions[skill]}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
