import Image from "next/image";
import { profile } from "@/lib/content";
import { ArrowUpRightIcon } from "./icons";
import { SocialLinks } from "./SocialLinks";

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
          <p className="eyebrow hero-welcome">
            <span aria-hidden="true" />
            Hello, I’m
          </p>
          <h1 id="profile-heading" className="hero-name">
            {profile.firstName}
            <br />
            {profile.lastName}
            <span className="hero-name-dot">.</span>
          </h1>
          <p className="hero-profession">{profile.role}</p>
          <p className="hero-introduction">{profile.introduction}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="button button-primary">
              View My Work
              <ArrowUpRightIcon />
            </a>
            <a href="#contact" className="button hero-secondary">
              Contact Me
              <ArrowUpRightIcon />
            </a>
          </div>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
        <figure className="hero-enter-delayed hero-portrait">
          <div className="hero-portrait-grid" aria-hidden="true" />
          <span className="hero-outline hero-outline-one" aria-hidden="true" />
          <span className="hero-outline hero-outline-two" aria-hidden="true" />
          <span className="hero-portrait-word" aria-hidden="true">
            CREATE.
          </span>
          <Image
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            fill
            sizes="(min-width: 1280px) 560px, (min-width: 768px) 48vw, 90vw"
            className="hero-portrait-image"
            preload
          />
          <figcaption className="hero-photo-note">
            <span className="hero-note-mark" aria-hidden="true">
              ✳
            </span>
            <span>
              Creative by nature.
              <br />
              <strong>Thoughtful by design.</strong>
            </span>
          </figcaption>
        </figure>
      </div>
      <div className="wrap hero-bottom">
        <p>{profile.location}</p>
        <a href="#about" className="text-link">
          Discover my approach <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
