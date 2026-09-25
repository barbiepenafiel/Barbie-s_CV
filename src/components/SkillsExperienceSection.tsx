import { experience, skills } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function SkillsExperienceSection() {
  return (
    <section
      id="skills-experience"
      aria-labelledby="skills-experience-heading"
      className="scroll-mt-24 border-t border-line px-6 py-16 sm:px-10 md:py-20"
    >
      <h2 id="skills-experience-heading" className="sr-only">
        Skills and Experience
      </h2>
      <SectionHeading index="02" title="Skills & Experience" />

      <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            Skills
          </h3>

          {skills.length > 0 ? (
            <ul className="mt-6 flex flex-col gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 border-b border-line pb-3 text-base text-ink"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {skill}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 rounded-sm border border-dashed border-accent/50 bg-accent/5 px-4 py-3 text-sm italic text-ink/60">
              Placeholder — list your skills (e.g. Figma, UI Design, HTML
              &amp; CSS) in <code className="not-italic">src/lib/content.ts</code>.
            </p>
          )}
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            Experience
          </h3>

          <ul className="mt-6 flex flex-col gap-5">
            {experience.map((item) => (
              <li key={item.title} className="border-b border-line pb-4">
                <p className="text-base font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
