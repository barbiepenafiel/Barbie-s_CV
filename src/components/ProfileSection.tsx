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
      className="wrap pb-8 pt-10 sm:pt-14 lg:pt-16"
    >
      <div className="mb-9 flex flex-wrap justify-between gap-3 border-b border-border pb-4 text-muted">
        <p className="eyebrow">Design with intention. Build with care.</p>
        <p className="eyebrow">Personal portfolio / CV</p>
      </div>
      <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div className="hero-enter py-3 lg:py-8">
          <p className="eyebrow text-muted">{profile.role}</p>
          <h1
            id="profile-heading"
            className="display my-6 text-[clamp(3.7rem,10.3vw,8.5rem)] leading-[.96]"
          >
            <span className="block">{profile.firstName}</span>
            <span className="block italic">
              {profile.lastName}
              <span className="font-sans text-[.45em] not-italic">.</span>
            </span>
          </h1>
          <p className="max-w-md text-sm leading-7 text-muted sm:text-base">
            {profile.introduction}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="button button-primary">
              View My Work
              <ArrowUpRightIcon />
            </a>
            <a href="#contact" className="button">
              Contact Me
              <ArrowUpRightIcon />
            </a>
          </div>
          <div className="mt-7">
            <SocialLinks />
          </div>
        </div>
        <figure className="hero-enter-delayed mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface">
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              fill
              sizes="(min-width: 1280px) 485px, (min-width: 1024px) 40vw, (min-width: 500px) 448px, calc(100vw - 48px)"
              className="object-cover object-top"
              preload
            />
            <span className="absolute bottom-4 left-4 bg-background px-3 py-2 text-[10px] uppercase tracking-[.18em]">
              A balance of logic & creativity
            </span>
          </div>
          <figcaption className="mt-3 flex justify-between gap-3 text-[11px] text-muted">
            <span>
              {profile.firstName} {profile.lastName}
            </span>
            <span>Designer & Developer</span>
          </figcaption>
        </figure>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5 text-xs text-muted">
        <p>{profile.location}</p>
        <a href="#about" className="text-link">
          Explore my profile <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
