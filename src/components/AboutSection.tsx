import { profile } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { SocialLinks } from "./SocialLinks";

export function AboutSection() {
  return (
    <section
      tabIndex={-1}
      id="about"
      aria-labelledby="about-heading"
      className="section about-section"
    >
      <div className="wrap">
        <div className="focus-strip">
          <div className="focus-statement">
            <p className="eyebrow">My creative philosophy</p>
            <p>
              Good design has purpose.
              <br />
              <em>Good experiences have people.</em>
            </p>
          </div>
          <div className="focus-item">
            <span aria-hidden="true">01</span>
            <p className="focus-item-title">Thoughtful design</p>
            <p>
              Clear layouts. Intuitive journeys.
              <br />
              Details that feel considered.
            </p>
          </div>
          <div className="focus-item focus-item-dark">
            <span aria-hidden="true">02</span>
            <p className="focus-item-title">Purposeful development</p>
            <p>
              Clean components.
              <br />
              Responsive experiences.
            </p>
          </div>
        </div>
        <SectionHeading
          index="01"
          title="A little about me"
          id="about-heading"
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="about-canvas" aria-hidden="true">
            <div className="canvas-corner" />
            <div className="canvas-window">
              <div className="canvas-toolbar">
                <i />
                <i />
                <i />
                <span>an idea, taking shape</span>
              </div>
              <div className="canvas-content">
                <span className="eyebrow">Design / Develop / Refine</span>
                <p>
                  From a spark.
                  <br />
                  To a screen.
                </p>
                <div className="canvas-blocks">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="canvas-lines">
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className="canvas-caption">
              <span>↗</span>
              <p>
                Built with intention.
                <br />
                <strong>Designed for people.</strong>
              </p>
            </div>
          </div>
          <div>
            <p className="about-lead">
              Where creative thinking
              <br />
              <span>meets clean code.</span>
            </p>
            <p className="mt-5 text-sm leading-8 text-muted">{profile.about}</p>
            <div className="my-7 border-l-2 border-foreground pl-5">
              <h3 className="eyebrow mb-3">Career objective</h3>
              <p className="text-sm leading-7 text-muted">
                {profile.objective}
              </p>
            </div>
            <div className="mb-6 flex flex-wrap gap-2">
              {profile.interests.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
            <dl className="grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
              <div>
                <dt className="eyebrow mb-2 text-muted">Based in</dt>
                <dd className="text-sm leading-6">{profile.location}</dd>
              </div>
              <div className="min-w-0">
                <dt className="eyebrow mb-2 text-muted">Say hello</dt>
                <dd>
                  <a
                    className="text-link break-all"
                    href={`mailto:${profile.email}`}
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
