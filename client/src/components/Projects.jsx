import Section from "./Section";
import Tags from "./Tags";
import { ArrowUpRightIcon } from "./icons";
import { projects } from "../constants";

const Projects = () => (
  <Section id="projects" title="Projects">
    <ul className="space-y-5">
      {projects.map(({ title, period, award, description, tags, links }) => (
        <li key={title} className="rounded-xl border border-line p-6 transition-colors hover:border-muted/40">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-base font-semibold text-fg">{title}</h3>
            <p className="text-sm tabular-nums text-muted">{period}</p>
          </div>
          {award && <p className="mt-1 text-sm font-medium text-accent">{award}</p>}
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{description}</p>
          <Tags items={tags} className="mt-4" />
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title}: ${label}`}
                className="group inline-flex items-center gap-1 text-sm font-medium text-fg hover:text-accent"
              >
                {label}
                <ArrowUpRightIcon className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-accent" />
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </Section>
);

export default Projects;
