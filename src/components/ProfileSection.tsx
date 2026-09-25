import Image from "next/image";
import { profile } from "@/lib/content";

export function ProfileSection() {
  return (
    <section
      id="profile"
      aria-labelledby="profile-heading"
      className="flex min-h-screen flex-col px-6 pb-16 pt-20 sm:px-10"
    >
      <div className="mx-auto grid w-full max-w-7xl flex-1 gap-10 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            {profile.role}
          </p>

          <h1
            id="profile-heading"
            className="mt-4 break-words font-display uppercase leading-[0.85] text-ink text-[clamp(3.5rem,12vw,9rem)]"
          >
            <span className="block">{profile.firstName}</span>
            <span className="block text-accent">{profile.lastName}</span>
          </h1>

          <div className="mt-5 max-w-xl">
            {profile.introduction ? (
              <p className="text-base leading-relaxed text-ink/75 sm:text-lg">
                {profile.introduction}
              </p>
            ) : (
              <p className="rounded-sm border border-dashed border-accent/50 bg-accent/5 px-4 py-3 text-sm italic text-ink/60">
                Placeholder — add a short introduction in{" "}
                <code className="not-italic">src/lib/content.ts</code>.
              </p>
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center bg-forest px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-accent"
            >
              Get in Touch
            </a>
            <a
              href="#skills-experience"
              className="inline-flex items-center border border-forest px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-forest hover:text-cream"
            >
              View Skills
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm md:max-w-full">
          <div
            className="absolute inset-0 translate-x-5 translate-y-5 rounded-full bg-accent"
            aria-hidden="true"
          />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-cream shadow-2xl ring-1 ring-ink/5">
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              fill
              sizes="(min-width: 768px) 400px, 80vw"
              className="object-cover object-top"
              quality={95}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
