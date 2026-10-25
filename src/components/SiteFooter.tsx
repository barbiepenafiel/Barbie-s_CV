import { profile, site } from "@/lib/content";
import { SocialLinks } from "./SocialLinks";
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground py-9 text-background">
      <div className="wrap flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm">
            {profile.firstName} {profile.lastName}{" "}
            <span className="ml-2 text-xs">© {site.year}</span>
          </p>
          <p className="mt-2 text-xs">{profile.role}</p>
        </div>
        <SocialLinks />
        <a href="#profile" className="text-link">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
