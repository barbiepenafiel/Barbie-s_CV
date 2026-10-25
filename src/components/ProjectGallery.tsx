"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/content";
import { ArrowUpRightIcon } from "./icons";
const categories = ["All work", "Web & UI", "Print & graphics"] as const;
export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [category, setCategory] =
    useState<(typeof categories)[number]>("All work");
  const [selected, setSelected] = useState<Project | null>(null);
  const [slide, setSlide] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible =
    category === "All work"
      ? projects
      : projects.filter((project) => project.category === category);
  useEffect(() => {
    if (!selected) return;
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    modal?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);
  const openProject = (project: Project) => {
    setSlide(0);
    setSelected(project);
  };
  const activeImage = selected?.gallery[slide];
  return (
    <>
      <div className="project-filter" role="group" aria-label="Filter projects">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
            {item === "All work" && <span>{projects.length}</span>}
          </button>
        ))}
        <p role="status" className="project-count">
          {visible.length} projects
        </p>
      </div>
      <div className="projects-grid">
        {visible.map((project) => (
          <article key={project.id} className="project-card">
            <button
              type="button"
              className="project-cover"
              aria-label={`View ${project.name} project`}
              onClick={() => openProject(project)}
            >
              {project.preview && (
                <Image
                  src={project.preview.src}
                  alt={project.preview.alt}
                  fill
                  loading="eager"
                  sizes="(min-width: 1100px) 380px, (min-width: 640px) 46vw, 90vw"
                  className="object-cover object-top"
                />
              )}
              <span className="project-cover-action" aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </button>
            <div className="project-card-copy">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <button
                type="button"
                className="project-explore"
                aria-label={`Explore ${project.name}`}
                onClick={() => openProject(project)}
              >
                Explore project
                <ArrowUpRightIcon />
              </button>
            </div>
          </article>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        {selected && (
          <div className="project-dialog-content">
            <div className="project-dialog-heading">
              <div>
                <p className="eyebrow">{selected.category}</p>
                <h2 id="project-dialog-title">{selected.name}</h2>
              </div>
              <button
                type="button"
                className="dialog-close"
                aria-label="Close project"
                onClick={() => dialog.current?.close()}
              >
                ×
              </button>
            </div>
            <div className="project-dialog-preview">
              {activeImage && (
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  loading="eager"
                  sizes="(min-width: 1100px) 950px, 92vw"
                  className="object-contain"
                />
              )}
            </div>
            <div className="project-gallery-controls">
              <p aria-live="polite">{activeImage?.caption}</p>
              <span>
                {slide + 1} / {selected.gallery.length}
              </span>
              {selected.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous project image"
                    onClick={() =>
                      setSlide(
                        (slide + selected.gallery.length - 1) %
                          selected.gallery.length,
                      )
                    }
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label="Next project image"
                    onClick={() =>
                      setSlide((slide + 1) % selected.gallery.length)
                    }
                  >
                    →
                  </button>
                </>
              )}
            </div>
            {selected.gallery.length > 1 && (
              <div
                className="project-thumbnails"
                role="group"
                aria-label="Project images"
              >
                {selected.gallery.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    aria-label={`Show ${image.caption}`}
                    aria-pressed={slide === index}
                    onClick={() => setSlide(index)}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      loading="eager"
                      sizes="80px"
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
            <p className="project-dialog-description">{selected.description}</p>
            <ul className="flex flex-wrap gap-2">
              {selected.technologies.map((tech) => (
                <li className="tag" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
            <div className="project-dialog-links">
              <a
                href={selected.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Open original file
                <ArrowUpRightIcon />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              {selected.repository && (
                <a
                  href={selected.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Source code
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              {selected.demo && (
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Live demo
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
