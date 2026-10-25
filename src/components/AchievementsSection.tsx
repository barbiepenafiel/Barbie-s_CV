import Image from "next/image";
import { achievements } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
export function AchievementsSection() {
  if (!achievements.length) return null;
  return (
    <section
      tabIndex={-1}
      id="achievements"
      aria-labelledby="achievements-heading"
      className="section achievements-section"
    >
      <div className="wrap">
        <SectionHeading
          index="07"
          title="Always learning. Always growing."
          id="achievements-heading"
        />
        <div className="credential-grid">
          {achievements.map((item) => (
            <article key={item.title} className="credential-card">
              {item.preview && (
                <div className="credential-preview">
                  <Image
                    src={item.preview.src}
                    alt={item.preview.alt}
                    fill
                    sizes="(min-width: 1024px) 520px, 90vw"
                    className="object-contain"
                  />
                </div>
              )}
              <div className="credential-copy">
                <p className="eyebrow">
                  {item.category} · {item.date}
                </p>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
                <p>{item.description}</p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    View credential <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
