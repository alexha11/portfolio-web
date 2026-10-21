import Section from "./Section";
import TimelineItem from "./TimelineItem";
import { ArrowUpRightIcon } from "./icons";
import { certifications, education } from "../constants";

const Education = () => (
  <Section id="education" title="Education">
    <ol className="space-y-10">
      {education.map(({ school, degree, period, details }) => (
        <TimelineItem key={school} title={school} subtitle={degree} period={period}>
          <ul className="space-y-1 text-sm leading-relaxed text-muted">
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </TimelineItem>
      ))}
    </ol>
    <h3 className="mt-12 text-xs font-medium uppercase tracking-[0.2em] text-fg">Certifications</h3>
    <ul className="mt-4 space-y-3">
      {certifications.map(({ title, issuer, href }) => (
        <li key={title}>
          <a href={href} target="_blank" rel="noreferrer" className="group inline-flex flex-wrap items-baseline gap-x-2 text-sm">
            <span className="font-medium text-fg transition-colors group-hover:text-accent">{title}</span>
            <span className="text-muted">{issuer}</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5 self-center text-muted transition-colors group-hover:text-accent" />
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export default Education;
