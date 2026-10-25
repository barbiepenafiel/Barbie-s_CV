import { profile } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { SocialLinks } from "./SocialLinks";
export function AboutSection() {
  return (
    <section
      tabIndex={-1}
      id="about"
      aria-labelledby="about-heading"
      className="section"
    >
      <div className="wrap">
        <SectionHeading
          index="01"
          title="A little about me"
          id="about-heading"
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <p className="display text-4xl leading-tight sm:text-5xl">
              Where creative thinking
              <br />
              <span className="italic text-muted">meets clean code.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {profile.interests.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-base leading-8 text-muted">{profile.about}</p>
            <div className="my-8 border-l-2 border-foreground pl-6">
              <h3 className="eyebrow mb-3">Career objective</h3>
              <p className="text-sm leading-7 text-muted">
                {profile.objective}
              </p>
            </div>
            <dl className="grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
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
