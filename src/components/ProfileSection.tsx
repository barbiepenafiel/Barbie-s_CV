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
            <span aria-hidden="true" />A little creativity. A lot of intention.
          </p>
          <h1 id="profile-heading" className="hero-name">
            {profile.firstName}
            <br />
            <span className="hero-surname">{profile.lastName}</span>
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
          <div className="hero-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="hero-portrait-label" aria-hidden="true">
            Design meets development
          </span>
          <svg
            className="hero-spark"
            viewBox="0 0 80 80"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              d="M40 0v80M0 40h80M12 12l56 56M12 68l56-56"
              strokeWidth="1.2"
            />
          </svg>
          <span className="hero-craft-label" aria-hidden="true">
            Ideas into
            <br />
            <strong>experiences.</strong>
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
        <div>
          <p className="eyebrow mb-2 hero-location-label">
            Based in the Philippines
          </p>
          <p>{profile.location}</p>
        </div>
        <p className="hero-signature" aria-hidden="true">
          Thoughtfully designed.
          <br />
          Carefully developed.
        </p>
        <a href="#about" className="hero-scroll-link" aria-label="Discover my approach">
          <span>
            Discover
            <br />
            my approach
          </span>
          <span className="hero-scroll-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
