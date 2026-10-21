import Section from "./Section";
import Tags from "./Tags";
import TimelineItem from "./TimelineItem";
import { experience } from "../constants";

const Experience = () => (
  <Section id="experience" title="Experience">
    <ol className="space-y-12">
      {experience.map(({ role, org, period, points, tags }) => (
        <TimelineItem key={`${role}-${org}`} title={role} subtitle={org} period={period}>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-line">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Tags items={tags} className="mt-4" />
        </TimelineItem>
      ))}
    </ol>
  </Section>
);

export default Experience;
