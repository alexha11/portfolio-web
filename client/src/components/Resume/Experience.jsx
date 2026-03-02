import React, { useState } from "react";
import { More } from "../../assets/";

const experiences = [
  {
    id: 1,
    title: "Research Assistant",
    subtitle: "Master's Thesis",
    company: "Aalto University",
    dateFrom: "Jan 2026",
    dateTo: "May 2026",
    summary: "Developing a multimodal AI pipeline for automatic tagging of construction-site images using Python & PyTorch.",
    details: [
      "Developed a multimodal AI pipeline for automatic tagging of construction-site images using Python & PyTorch.",
      "Evaluated zero-shot, few-shot, and fine-tuned vision–language models, benchmarking tagging accuracy.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer Trainee",
    subtitle: "",
    company: "Munchi",
    dateFrom: "Jan 2025",
    dateTo: "Oct 2025",
    summary: "Developed an order manager system integrating Wolt & Foodora APIs, processing 2000+ orders daily with 99.9% uptime.",
    details: [
      "Developed an order manager system integrating Wolt & Foodora APIs using Node.js and TypeScript, processing 2000+ orders daily with 99.9% uptime.",
      "Built POS/Kiosk mobile application using React Native, integrating payment APIs (Viva, Stripe, Net), with 1000+ daily transactions.",
      "Designed and maintained CI/CD pipelines on Google Cloud Platform with Pub/Sub messaging and Redis caching.",
      "Built scalable data pipeline storing 100K+ orders in BigQuery, enabling real-time analytics dashboard.",
    ],
  },
  {
    id: 3,
    title: "Software Engineer Trainee",
    subtitle: "",
    company: "Triplan",
    dateFrom: "Jan 2024",
    dateTo: "May 2024",
    summary: "Developed secure access control backend services with Python, Docker, and Nginx for distributed traffic management.",
    details: [
      "Developed secure access control backend services with Python, Docker, and Nginx for distributed traffic management systems, achieving 90% test coverage.",
      "Used VueJS, Javascript & Tailwind to improve UX by implementing 10+ user-focused features & fix bugs.",
    ],
  },
  {
    id: 4,
    title: "Teaching Assistant",
    subtitle: "",
    company: "Aalto University & LUT University",
    dateFrom: "Jan 2024",
    dateTo: "Present",
    summary: "Teaching assistant for MSc Software Architectures (5 ECTS) and BSc Basics of Database Systems (3 ECTS) courses.",
    details: [
      "Teaching assistant for MSc Software Architectures (5 ECTS) at Aalto University.",
      "Teaching assistant for BSc Basics of Database Systems (3 ECTS) at LUT University.",
      "Responsible for grading assignments, projects, and exams.",
    ],
  },
];

const ExperienceCard = ({ exp }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-indigo-200 rounded-2xl text-black px-6 pt-6 pb-14 ring-3 ring-inset ring-red-900 relative min-h-[17rem] xl:min-h-[18rem] sm:min-h-[22rem] md:min-h-[19rem]">
      {!showDetails ? (
        <>
          <h3 className="font-bold text-2xl">{exp.title}</h3>
          {exp.subtitle && (
            <p className="text-sm text-indigo-700 font-semibold">{exp.subtitle}</p>
          )}
          <p className="flex items-baseline justify-start gap-x-1 mt-1">
            <span className="text-[13px] font-bold tracking-tight text-gray-900">{exp.dateFrom}</span>
            <span className="mx-1 text-lg font-bold tracking-tight text-gray-900">–</span>
            <span className="text-[13px] font-bold tracking-tight text-gray-900">{exp.dateTo}</span>
          </p>
          <p className="mt-1 text-sm font-semibold text-indigo-900">{exp.company}</p>
          <p className="mt-4 text-sm">{exp.summary}</p>
          <p className="inline-block absolute bottom-6 right-16 text-[15px]">Know more</p>
          <button
            type="button"
            className="rounded-md absolute bottom-3 right-3 hover:bg-gray-200 hover:scale-105 transition-transform duration-300"
            onClick={() => setShowDetails(true)}
          >
            <img src={More} className="w-12 h-12" alt="more" />
          </button>
        </>
      ) : (
        <>
          <ul className="list-disc pl-4 mt-2 space-y-2">
            {exp.details.map((detail, i) => (
              <li key={i} className="text-sm">{detail}</li>
            ))}
          </ul>
          <p className="inline-block absolute bottom-6 right-16 text-[15px]">Go back</p>
          <button
            type="button"
            className="rounded-md absolute bottom-3 right-3 rotate-180 hover:bg-gray-200 hover:scale-105 transition-transform duration-300"
            onClick={() => setShowDetails(false)}
          >
            <img src={More} className="w-12 h-12" alt="back" />
          </button>
        </>
      )}
    </div>
  );
};

const Experience = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">My Experience</h2>
      <div className="mt-8 lg:mt-6 lg:w-full lg:max-w-4xl lg:flex-shrink-0 min-w-2xl overflow-y-scroll max-h-none lg:max-h-[32rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
