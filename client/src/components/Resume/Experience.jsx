import { useId, useState } from "react";

import { More } from "../../assets/";
import { experiences } from "../../constants";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "2024-01" → bold year + small month (the existing style); "2019" → year only
const DateLabel = ({ value }) => {
  const [year, month] = value.split("-");
  return (
    <time dateTime={value} className="flex items-baseline gap-x-0.5">
      <span className="text-[13px] font-bold tracking-tight text-gray-900">{year}</span>
      {month && <span className="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">{MONTHS[month - 1]}</span>}
    </time>
  );
};

const RichText = ({ parts }) =>
  parts.map((part, index) => {
    if (typeof part === "string") return part;
    if (part.href) {
      return (
        <a key={index} href={part.href} className="text-indigo-800 underline hover:text-indigo-950">
          {part.text}
        </a>
      );
    }
    return <span key={index} className="text-red-800">{part.text}</span>;
  });

const ExperienceCard = ({ role, org, start, end, summary, highlights }) => {
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();

  return (
    <li className="flex flex-col bg-indigo-200 rounded-2xl text-black p-6">
      <h4 className="font-bold text-2xl">{role}</h4>
      <p className="flex items-baseline justify-start">
        <DateLabel value={start} />
        <span className="mx-2 text-lg font-bold tracking-tight text-gray-900" aria-hidden="true">-</span>
        <span className="sr-only">to</span>
        {end ? <DateLabel value={end} /> : <span className="text-[13px] font-bold tracking-tight text-gray-900">Present</span>}
      </p>
      {org && <p className="mt-1 text-sm">{org}</p>}
      <p className="mt-6"><RichText parts={summary} /></p>
      <ul id={detailsId} hidden={!expanded} className="mt-4 list-disc space-y-1 pl-5">
        {highlights.map((item) => (
          <li key={item} className="text-base">{item}</li>
        ))}
      </ul>
      <div className="mt-auto flex justify-end pt-4">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((open) => !open)}
          className="group flex items-center gap-2 rounded-md pl-3 text-[15px] hover:bg-gray-200"
        >
          {expanded ? "Show less" : "Know more"}
          <img src={More} alt="" className={`w-12 h-12 transition-transform duration-300 group-hover:scale-105 ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>
    </li>
  );
};

const Experience = () => (
  <div>
    <h3 className="font-bold text-xl">My experience</h3>
    <ul role="list" className="mt-8 lg:mt-6 lg:max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
      {experiences.map(({ id, ...experience }) => (
        <ExperienceCard key={id} {...experience} />
      ))}
    </ul>
  </div>
);

export default Experience;
