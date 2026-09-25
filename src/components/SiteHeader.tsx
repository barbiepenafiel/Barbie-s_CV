import { navLinks, profile, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="max-w-[16rem] text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
          {profile.tagline}
        </p>

        <p className="font-display text-2xl leading-none text-ink sm:text-3xl">
          {profile.initials}
        </p>

        <p className="text-right text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
          Personal CV
          <span className="ml-2 text-accent">{site.year}</span>
        </p>
      </div>

      <nav
        aria-label="Section navigation"
        className="flex flex-wrap items-center gap-x-6 gap-y-2 overflow-x-auto border-t border-line px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 sm:px-10"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
