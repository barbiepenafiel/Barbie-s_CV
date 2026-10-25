import { experience } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
export function ExperienceSection() {
  if (!experience.length) return null;
  return (
    <section
      tabIndex={-1}
      id="experience"
      aria-labelledby="experience-heading"
      className="section bg-surface"
    >
      <div className="wrap">
        <SectionHeading
          index="05"
          title="Experience & practice"
          id="experience-heading"
        />
        {experience.map((item) => (
          <article
            key={item.title}
            className="grid gap-8 md:grid-cols-[1fr_1.6fr] md:gap-16"
          >
            <div>
              <p className="eyebrow mb-4 text-muted">
                {item.type} / {item.period}
              </p>
              <h3 className="text-2xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-xs text-muted">{item.location}</p>
            </div>
            <div className="border-l border-border pl-6 sm:pl-10">
              <p className="text-base leading-8 text-muted">{item.summary}</p>
              <ul className="my-6 space-y-3">
                {item.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6">
                    <span aria-hidden="true">↳</span>
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
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
