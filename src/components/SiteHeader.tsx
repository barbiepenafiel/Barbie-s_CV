import { navLinks, profile, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <p className="font-display text-2xl leading-none text-ink sm:text-3xl">
          {profile.initials}
        </p>

        <nav
          aria-label="Section navigation"
          className="hidden items-center gap-x-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-right text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
          Personal CV
          <span className="ml-2 text-accent">{site.year}</span>
        </p>
      </div>
    </header>
  );
}
