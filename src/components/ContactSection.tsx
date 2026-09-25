import { profile } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "./icons";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-line px-6 py-16 sm:px-10 md:py-20"
    >
      <h2 id="contact-heading" className="sr-only">
        Contact
      </h2>
      <SectionHeading index="03" title="Contact" />

      <div className="mt-10 grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
        <ul className="flex flex-col gap-5">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 text-base text-ink transition-colors hover:text-accent"
            >
              <MailIcon className="h-5 w-5 shrink-0 text-accent" />
              {profile.email}
            </a>
          </li>

          {profile.location && (
            <li className="inline-flex items-center gap-3 text-base text-ink">
              <MapPinIcon className="h-5 w-5 shrink-0 text-accent" />
              {profile.location}
            </li>
          )}

          {profile.linkedin && (
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-base text-ink transition-colors hover:text-accent"
              >
                <LinkedInIcon className="h-5 w-5 shrink-0 text-accent" />
                LinkedIn
              </a>
            </li>
          )}

          {profile.github && (
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-base text-ink transition-colors hover:text-accent"
              >
                <GitHubIcon className="h-5 w-5 shrink-0 text-accent" />
                GitHub
              </a>
            </li>
          )}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="group flex items-center justify-between gap-4 border border-forest px-6 py-8 transition-colors hover:bg-forest hover:text-cream sm:px-8 sm:py-10"
        >
          <span className="font-display text-2xl uppercase leading-none sm:text-3xl">
            Let&apos;s connect
          </span>
          <ArrowUpRightIcon className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
