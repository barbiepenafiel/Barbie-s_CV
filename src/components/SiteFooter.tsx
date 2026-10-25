import { profile, site } from "@/lib/content";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div>
            <a href="#profile" className="footer-brand">
              {profile.firstName} {profile.lastName}
            </a>
            <p>{profile.role}</p>
            <p>Thoughtful design. Purposeful development.</p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <a href="#about">About me</a>
            <a href="#projects">Selected work</a>
            <a href="#process">My process</a>
          </div>
          <div>
            <p className="eyebrow">Let’s connect</p>
            <a className="footer-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a href="#contact">Find me online ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {site.year} {profile.firstName} {profile.lastName}
          </p>
          <a href="#profile">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
