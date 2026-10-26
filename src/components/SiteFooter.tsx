import Link from "next/link";
import { profile, site } from "@/lib/content";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div>
            <Link href="/#profile" className="footer-brand">
              {profile.firstName} {profile.lastName}
            </Link>
            <p>{profile.role}</p>
            <p>Thoughtful design. Purposeful development.</p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <Link href="/about">About me</Link>
            <Link href="/#projects">Selected work</Link>
            <Link href="/#process">My process</Link>
          </div>
          <div>
            <p className="eyebrow">Let’s connect</p>
            <Link className="footer-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </Link>
            <Link href="/#contact">Find me online ↗</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {site.year} {profile.firstName} {profile.lastName}
          </p>
          <Link href="/#profile">
            Back to top <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
