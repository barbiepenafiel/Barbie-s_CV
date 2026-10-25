import { education } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
export function EducationSection() {
  return (
    <section
      tabIndex={-1}
      id="education"
      aria-labelledby="education-heading"
      className="section bg-surface"
    >
      <div className="wrap">
        <SectionHeading index="02" title="Education" id="education-heading" />
        {education.map((entry) => (
          <article
            key={entry.school}
            className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-16"
          >
            <div>
              <p className="eyebrow mb-5 text-muted">{entry.status}</p>
              <h3 className="max-w-md text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                {entry.school}
              </h3>
              <p className="mt-4 text-base">{entry.program}</p>
              <p className="mt-2 text-xs text-muted">{entry.location}</p>
              <p className="mt-6 max-w-lg text-sm leading-7 text-muted">
                {entry.description}
              </p>
              {entry.achievements.length > 0 && (
                <ul className="mt-4 list-inside list-disc text-sm leading-7">
                  {entry.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="border-l border-border pl-6 md:pl-10">
              <h3 className="eyebrow mb-6">Relevant coursework</h3>
              <ul className="grid gap-x-6 sm:grid-cols-2">
                {entry.coursework.map((course, index) => (
                  <li
                    key={course}
                    className="flex gap-3 border-t border-border py-4 text-sm"
                  >
                    <span className="text-xs text-muted" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
