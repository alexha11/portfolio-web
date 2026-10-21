import Section from "./Section";
import { ArrowUpRightIcon } from "./icons";
import { research } from "../constants";

const Research = () => (
  <Section id="research" title="Research">
    <ul className="divide-y divide-line border-y border-line">
      {research.map(({ title, venue, href }) => (
        <li key={title}>
          <a href={href} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-6 py-5">
            <span>
              <span className="block font-medium text-fg transition-colors group-hover:text-accent">{title}</span>
              <span className="mt-1 block text-sm text-muted">{venue}</span>
            </span>
            <ArrowUpRightIcon className="mt-1 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export default Research;
