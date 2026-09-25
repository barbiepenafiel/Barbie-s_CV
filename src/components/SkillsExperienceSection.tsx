import { experience, skillCategories } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function SkillsExperienceSection() {
  return (
    <section
      id="skills-experience"
      aria-labelledby="skills-experience-heading"
      className="flex min-h-screen flex-col border-t border-line px-6 pb-16 pt-16 sm:px-10"
    >
      <h2 id="skills-experience-heading" className="sr-only">
        Skills and Experience
      </h2>

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading index="02" title="Skills & Experience" />

        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">

          {/* Left — skills by category */}
          <div className="flex flex-col gap-8">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-sm border border-forest/20 bg-forest/5 px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-forest hover:text-cream"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right — experience cards */}
          <div className="flex flex-col gap-6">
            {experience.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-5 rounded-sm border border-line p-6"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                        {item.type}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-ink/50">{item.location}</p>
                  </div>
                  <span className="shrink-0 rounded-sm border border-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/60">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-ink/70">{item.summary}</p>

                {/* Highlights */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
                    Key Highlights
                  </p>
                  <ul className="flex flex-col gap-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-ink/75">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack */}
                <div className="border-t border-line pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
