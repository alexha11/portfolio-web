import Section from "./Section";
import Stats from "./Stats";
import Tags from "./Tags";
import { about, skills } from "../constants";

const About = () => (
  <Section id="about" title="About">
    <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
      {about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
    <Stats />
    <h3 className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-fg">Skills</h3>
    <dl className="mt-5 space-y-4">
      {skills.map(({ group, items }) => (
        <div key={group} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:items-baseline">
          <dt className="text-sm text-muted">{group}</dt>
          <dd>
            <Tags items={items} />
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default About;
