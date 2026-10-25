import { achievements, profile } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";
import { MailIcon, MapPinIcon } from "./icons";
export function ContactSection() {
  return (
    <section
      tabIndex={-1}
      id="contact"
      aria-labelledby="contact-heading"
      className="section"
    >
      <div className="wrap">
        <SectionHeading
          index={achievements.length ? "07" : "06"}
          title="Let’s make something meaningful."
          id="contact-heading"
        />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <p className="display text-5xl leading-tight sm:text-6xl">
              An idea, a project,
              <br />
              <span className="italic text-muted">a conversation.</span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              Have an opportunity to share or a digital experience in mind? I’d
              love to hear from you.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-link mt-6 max-w-full"
            >
              <MailIcon />
              <span className="break-all">{profile.email}</span>
            </a>
            <p className="my-4 flex items-start gap-2 text-xs leading-6 text-muted">
              <MapPinIcon className="mt-1 h-4 w-4 shrink-0" />
              {profile.location}
            </p>
            <SocialLinks />
          </div>
          <div className="border border-border p-6 sm:p-8">
            <h3 className="eyebrow mb-5">Start a conversation</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
