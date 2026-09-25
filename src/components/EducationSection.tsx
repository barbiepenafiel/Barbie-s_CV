import { education } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 border-t border-line px-6 py-16 sm:px-10 md:py-20"
    >
      <h2 id="education-heading" className="sr-only">
        Education
      </h2>
      <SectionHeading index="01" title="Education" />

      <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
        {education.map((entry, i) => (
          <article
            key={entry.school + entry.program}
            className="flex flex-col gap-4 border-t border-line pt-6"
          >
            <span className="font-display text-3xl text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-lg font-semibold leading-snug text-ink">
                {entry.school}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">
                {entry.program}
              </p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
              {entry.year}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
