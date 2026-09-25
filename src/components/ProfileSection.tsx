import Image from "next/image";
import { profile } from "@/lib/content";

export function ProfileSection() {
  return (
    <section
      id="profile"
      aria-labelledby="profile-heading"
      className="scroll-mt-24 px-6 py-16 sm:px-10 md:py-24"
    >
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-16">
        <div>
          <h1
            id="profile-heading"
            className="break-words font-display uppercase leading-[0.85] text-ink text-[clamp(3rem,13vw,8.5rem)]"
          >
            <span className="block">{profile.firstName}</span>
            <span className="block text-accent">{profile.lastName}</span>
          </h1>

          <div className="mt-8 flex max-w-xl flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
              {profile.role}
            </p>

            {profile.introduction ? (
              <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
                {profile.introduction}
              </p>
            ) : (
              <p className="rounded-sm border border-dashed border-accent/50 bg-accent/5 px-4 py-3 text-sm italic text-ink/60">
                Placeholder — add a short introduction (2–3 sentences about
                your design approach and focus) in{" "}
                <code className="not-italic">src/lib/content.ts</code>.
              </p>
            )}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-full bg-accent"
            aria-hidden="true"
          />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-cream shadow-xl ring-1 ring-ink/5">
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              fill
              sizes="(min-width: 768px) 24rem, 80vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
