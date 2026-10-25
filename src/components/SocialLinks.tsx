import { socialLinks } from "@/lib/content";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from "./icons";
export function SocialLinks() {
  return (
    <div className="social-profiles" aria-label="Find me online">
      {socialLinks.map((link) => (
        <a
          className="social-profile"
          key={link.kind}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">View </span>
          {link.kind === "github" ? <GitHubIcon /> : <LinkedInIcon />}
          <span>
            <strong>{link.label}</strong>
            <small>
              {link.kind === "github"
                ? "Explore my code"
                : "Connect professionally"}
            </small>
          </span>
          <ArrowUpRightIcon />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}
