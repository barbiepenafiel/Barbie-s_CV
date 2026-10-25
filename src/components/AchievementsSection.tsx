import { achievements } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
export function AchievementsSection() {
  if (!achievements.length) return null;
  return (
    <section
      tabIndex={-1}
      id="achievements"
      aria-labelledby="achievements-heading"
      className="section"
    >
      <div className="wrap">
        <SectionHeading
          index="06"
          title="Achievements & certifications"
          id="achievements-heading"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((item) => (
            <article key={`${item.title}-${item.date}`} className="skill-card">
              <p className="eyebrow mb-4 text-muted">
                {item.category} / {item.date}
              </p>
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.issuer}</p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link mt-4"
                >
                  View credential
                  <span className="sr-only"> (opens in a new tab)</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
