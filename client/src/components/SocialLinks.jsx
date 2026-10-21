import { socials } from "../constants";
import { CodeforcesIcon, GitHubIcon, LinkedInIcon } from "./icons";

const icons = { github: GitHubIcon, linkedin: LinkedInIcon, codeforces: CodeforcesIcon };

const SocialLinks = ({ className = "" }) => (
  <ul className={`flex items-center gap-1 ${className}`}>
    {socials.map(({ label, href, icon }) => {
      const Icon = icons[icon];
      return (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-fg"
          >
            <Icon />
          </a>
        </li>
      );
    })}
  </ul>
);

export default SocialLinks;
