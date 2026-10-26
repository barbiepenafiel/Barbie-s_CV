import { profile } from "@/lib/content";
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
      className="section contact-section"
    >
      <div className="wrap contact-layout">
        <div>
          <SectionHeading
            index="08"
            title="Ready to create something meaningful?"
            id="contact-heading"
          />
          <p className="contact-introduction">
            An idea, a project, an opportunity — let’s start a conversation and
            see where it can lead.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="text-link contact-email"
          >
            <MailIcon />
            <span className="break-all">{profile.email}</span>
          </a>
          <p className="contact-location">
            <MapPinIcon />
            {profile.location}
          </p>
          <SocialLinks />
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="button button-outline mt-6"
          >
            View my CV<span aria-hidden="true">↗</span>
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
        </div>
        <div className="contact-form-card">
          <h3 className="display mb-4 text-2xl">
            A little hello goes a long way.
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
