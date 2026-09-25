import { education } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="flex min-h-screen flex-col border-t border-line px-6 pb-16 pt-16 sm:px-10"
    >
      <h2 id="education-heading" className="sr-only">
        Education
      </h2>

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading index="01" title="Education" />

        <div className="mt-10 flex flex-col gap-12">
          {education.map((entry) => (
            <div key={entry.school} className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">

              {/* Left — school identity */}
              <div className="flex flex-col gap-6">
                <div className="rounded-sm border border-line bg-forest/5 px-8 py-8">
                  <div className="flex flex-col gap-4">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        {entry.status}
                      </span>
                    </div>

                    <div>
                      <p className="text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                        {entry.school}
                      </p>
                      <p className="mt-1 text-sm font-medium text-accent">
                        {entry.location}
                      </p>
                    </div>

                    <p className="text-base font-medium text-ink/80">
                      {entry.program}
                    </p>

                  </div>
                </div>

                <p className="text-sm leading-relaxed text-ink/70">
                  {entry.description}
                </p>

                {/* Achievements */}
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
                    Achievements
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {entry.achievements.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-ink/80"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right — coursework */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
                    Relevant Coursework
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {entry.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-sm border border-forest/20 bg-forest/5 px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-forest hover:text-cream cursor-default"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
