import { useState } from "react";

import Skills from "./Skills/Skills";
import Experience from "./Experience";
import Education from "./Education";
import AboutMe from "./AboutMe";

import Section from "../Section";
import Heading from "../Heading";

const panels = {
  Experience: {
    label: "Experience",
    Component: Experience,
    text: `I have a strong work ethic and am always willing to go the extra mile to get the job done. In my previous roles, for example, I have always delivered my tasks on time and to a high standard.`,
  },
  Education: {
    label: "Education",
    Component: Education,
    text: 'Throughout my academic years, I have consistently been a top student in my class. I am always interested in learning and exploring new things and looking for more opportunity to study.',
  },
  Skills: {
    label: "Skills",
    Component: Skills,
    text: `Here are the technologies I have experience with and am confident in using. Besides, I'm always eager to learn and adapt to new tools and technologies.`,
  },
  AboutMe: {
    label: "About me",
    Component: AboutMe,
    text: `One of my key strengths compared to other candidates is my problem-solving skills and discipline. I have developed two of these for all my life, believe me I would finish the job with the best quality.`,
  },
};

const ResumeBody = () => {
  const [fields, setFields] = useState('Experience');
  const { Component: ComponentToRender, text: TextToRender } = panels[fields];

  return (
    <Section
        id='resume'
        labelledBy='resume-heading'
    >
       <div className="container relative">
          <Heading
            id="resume-heading"
            className="md:max-w-md lg:max-w-2xl flex flex-col items-center"
            title="Resume"
          />
          <div className=" flex flex-col lg:flex-row rounded-3xl">
            <div className="px-8 lg:px-12 w-full lg:w-1/3 ">
              <h3 className="font-bold text-3xl">Why hire me?</h3>
              <p className="mt-6 body-2 text-gray-200">
               {TextToRender}
              </p>
              <div className="mt-10 flex items-center gap-x-3">
                <p id="resume-fields-label" className="flex-none text-sm font-semibold leading-6 text-gray-200">Fields</p>
                <div className="h-px flex-auto bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500"></div>
              </div>
              <div className="mt-6" role="group" aria-labelledby="resume-fields-label">
                {Object.entries(panels).map(([key, { label }]) => {
                  const selected = key === fields;
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setFields(key)}
                      className={`my-4 rounded-md w-full h-10 ${selected ? 'bg-indigo-600 text-white' : 'bg-indigo-300 text-black hover:bg-indigo-200'}`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-8 lg:px-12">
              <ComponentToRender />
            </div>
        </div>
      </div>
    </Section>
  );
};

export default ResumeBody;
