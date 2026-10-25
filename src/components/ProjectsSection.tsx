import { projects } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { ProjectGallery } from "./ProjectGallery";
export function ProjectsSection() {
  return (
    <section
      tabIndex={-1}
      id="projects"
      aria-labelledby="projects-heading"
      className="section projects-section"
    >
      <div className="wrap">
        <div className="project-section-intro">
          <SectionHeading
            index="03"
            title="Selected work, made with intention."
            id="projects-heading"
          />
          <p>
            From digital interfaces to print, a collection of ideas brought into
            view.
          </p>
        </div>
        <ProjectGallery projects={projects} />
      </div>
    </section>
  );
}
