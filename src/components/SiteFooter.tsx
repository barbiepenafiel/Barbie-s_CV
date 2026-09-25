import { profile, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.2em] text-ink/40 sm:flex-row">
        <p>
          {profile.firstName} {profile.lastName} &copy; {site.year}
        </p>
        <a href="#profile" className="transition-colors hover:text-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}
