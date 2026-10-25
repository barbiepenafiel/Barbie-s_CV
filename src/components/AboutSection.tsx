import Image from "next/image";
import { profile } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section
      tabIndex={-1}
      id="about"
      aria-labelledby="about-heading"
      className="section about-section"
    >
      <div className="wrap about-layout">
        <figure className="about-visual">
          <div className="about-browser">
            <div className="about-browser-bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>From an idea to an experience</span>
            </div>
            <div className="about-preview">
              <Image
                src="/projects/campedals.webp"
                alt="Barbie’s Campedals bike rental interface design"
                fill
                sizes="(min-width: 1024px) 500px, 90vw"
                className="object-contain"
              />
            </div>
          </div>
          <div className="about-paper">
            <Image
              src="/projects/brochure-front.webp"
              alt="Campedals brochure design"
              fill
              sizes="(min-width: 768px) 220px, 45vw"
              className="object-contain"
            />
          </div>
          <figcaption>
            <span aria-hidden="true">✳</span> A little design. A little code. A
            lot of care.
          </figcaption>
        </figure>
        <div>
          <SectionHeading
            index="01"
            title="I turn ideas into thoughtful digital experiences."
            id="about-heading"
          />
          <p className="text-sm leading-8 text-muted">{profile.about}</p>
          <div className="about-objective">
            <h3 className="eyebrow">My direction</h3>
            <p>{profile.objective}</p>
          </div>
          <div className="about-principles">
            <span>
              <i aria-hidden="true">✓</i> Human-centered interfaces
            </span>
            <span>
              <i aria-hidden="true">✓</i> Creative visual communication
            </span>
            <span>
              <i aria-hidden="true">✓</i> Responsive by design
            </span>
          </div>
          <a href="#education" className="button button-outline mt-6">
            More about my background<span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
