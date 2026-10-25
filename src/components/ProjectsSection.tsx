import Image from "next/image";
import { profile, projects } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
export function ProjectsSection() {
  return (
    <section
      tabIndex={-1}
      id="projects"
      aria-labelledby="projects-heading"
      className="section"
    >
      <div className="wrap">
        <SectionHeading
          index="04"
          title="Selected projects"
          id="projects-heading"
        />
        {projects.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article data-reveal key={project.name} className="project-card">
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  {project.preview ? (
                    <Image
                      src={project.preview.src}
                      alt={project.preview.alt}
                      fill
                      sizes="(min-width: 1280px) 585px, (min-width: 768px) 47vw, 90vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="display text-5xl" aria-hidden="true">
                        {project.name.slice(0, 1)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-medium tracking-tight">
                    {project.name}
                  </h3>
                  <p className="my-4 text-sm leading-7 text-muted">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-6">
                    {project.repository && (
                      <a
                        className="text-link"
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon />
                        Source code
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        className="text-link"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live demo
                        <ArrowUpRightIcon className="project-arrow" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 border border-border bg-surface p-7 sm:p-12 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="eyebrow text-muted">A space for considered work</p>
              <p className="display mt-6 text-4xl leading-tight sm:text-5xl">
                Good things
                <br />
                <span className="italic">take shape.</span>
              </p>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-lg font-medium">
                Selected projects will be added soon.
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                In the meantime, explore my code and follow what I’m working on
                over on GitHub.
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button mt-6"
              >
                <GitHubIcon />
                View GitHub Profile
                <ArrowUpRightIcon />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
