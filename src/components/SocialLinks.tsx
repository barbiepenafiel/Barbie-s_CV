import { socialLinks } from "@/lib/content";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from "./icons";
export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1">
      {socialLinks.map((link) => (
        <a
          className="text-link"
          key={link.kind}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">View </span>
          {link.kind === "github" ? <GitHubIcon /> : <LinkedInIcon />}
          {link.label}
          <ArrowUpRightIcon />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}
