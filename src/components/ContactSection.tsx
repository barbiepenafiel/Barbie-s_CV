import { profile } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { ContactForm } from "./ContactForm";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./icons";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex min-h-screen flex-col border-t border-line px-6 pb-16 pt-16 sm:px-10"
    >
      <h2 id="contact-heading" className="sr-only">
        Contact
      </h2>

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading index="03" title="Contact" />

        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-start md:gap-16">

          {/* Left — heading + contact details */}
          <div className="flex flex-col gap-8">
            <p className="font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.88] text-ink">
              Let&apos;s{" "}
              <span className="text-accent">work</span>
              <br />
              together.
            </p>

            <p className="text-sm leading-relaxed text-ink/65">
              Have a project in mind, an opportunity to share, or just want to say hello?
              Fill in the form and I&apos;ll get back to you as soon as possible.
            </p>

            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-3 text-sm text-ink transition-colors hover:text-accent"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-accent" />
                  {profile.email}
                </a>
              </li>

              {profile.location && (
                <li className="inline-flex items-center gap-3 text-sm text-ink">
                  <MapPinIcon className="h-4 w-4 shrink-0 text-accent" />
                  {profile.location}
                </li>
              )}

              {profile.linkedin && (
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-ink transition-colors hover:text-accent"
                  >
                    <LinkedInIcon className="h-4 w-4 shrink-0 text-accent" />
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
                    className="inline-flex items-center gap-3 text-sm text-ink transition-colors hover:text-accent"
                  >
                    <GitHubIcon className="h-4 w-4 shrink-0 text-accent" />
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Right — contact form */}
          <div className="rounded-sm border border-line p-6 sm:p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
              Send a Message
            </p>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
