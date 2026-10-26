import Image from "next/image";
import { profile } from "@/lib/content";
import { ArrowUpRightIcon } from "./icons";

export function ProfileSection() {
  return (
    <section
      tabIndex={-1}
      id="profile"
      aria-labelledby="profile-heading"
      className="portfolio-hero"
    >
      <div className="wrap hero-layout">
        <div className="hero-enter hero-copy">
          <p className="hero-role">{profile.role}</p>
          <h1 id="profile-heading" className="hero-name">
            {profile.firstName}
            <br />
            <em>{profile.lastName}.</em>
          </h1>
          <p className="hero-introduction">{profile.heroIntroduction}</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View My Work
              <ArrowUpRightIcon />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="button button-outline"
            >
              View CV<span aria-hidden="true">↗</span>
              <span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          </div>
          <div className="hero-details">
            <span className="hero-detail-dot" aria-hidden="true" />
            <p>{profile.location}</p>
          </div>
        </div>
        <figure className="hero-enter-delayed hero-portrait">
          <div className="portrait-arch" aria-hidden="true" />
          <span className="portrait-caption-top" aria-hidden="true">
            A balance of logic & creativity
          </span>
          <Image
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            fill
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 48vw, 92vw"
            className="hero-portrait-image"
            quality={95}
            preload
          />
          <figcaption className="hero-photo-note">
            <span className="signature-mark" aria-hidden="true">
              BP
            </span>
            <span>
              {profile.firstName} {profile.lastName}
              <small>
                Design with purpose.
                <br />
                Develop with care.
              </small>
            </span>
          </figcaption>
        </figure>
      </div>
      <div className="wrap hero-disciplines">
        <span className="eyebrow">At the intersection of</span>
        {profile.interests.map((item) => (
          <span key={item}>{item}</span>
        ))}
        <a
          href="#about"
          aria-label="Discover my approach"
          className="hero-scroll-link"
        >
          Discover my approach <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
