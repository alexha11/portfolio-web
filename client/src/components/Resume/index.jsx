import React, { useState } from "react";

import Skills from "./Skills/Skills";
import Experience from "./Experience";
import Education from "./Education";
import AboutMe from "./AboutMe";

import Section from "../Section";
import Heading from "../Heading";

const ResumeBody = () => {
  const [fields, setFields] = useState('Experience');

  const components = {
    Experience,
    Education,
    Skills,
    AboutMe
  };

  const textfields = { 
    Experience: `I have a strong work ethic and am always willing to go the extra mile to get the job done. In my previous roles, for example, I have always delivered my tasks on time and to a high standard.`,
    Education: 'Throughout my academic years, I have consistently been a top student in my class. I am always interested in learning and exploring new things and looking for more oppurtinity to study.',
    Skills: `Here are the technologies I have experience with and am confident in using. Besides, I'm always eager to learn and adapt to new tools and technologies.`,
    AboutMe: `One of my key strengths compared to other candidates is my problem-solving skills and discipline. I have developed two of these for all my life, believe me I would finish the job with the best quality.`,
  }

  const handleSwitch = (text) => () => {
    setFields(text);
  };

  const ComponentToRender = components[fields];
  const TextToRender = textfields[fields];

  return (
    <Section
        id='resume'
    >   
       <div className="container relative z-2">
          <Heading
            className="md:max-w-md lg:max-w-2xl flex flex-col items-center"
            title="Resume"
          />
          <div className=" flex flex-col lg:flex-row rounded-3xl">
            <div className="px-8 lg:px-12 w-full lg:w-1/3 ">
              <h2 className="font-bold text-3xl">Why hire me?</h2>
              <p className="mt-6 body-2 text-gray-200">
               {TextToRender}
              </p>
              <div className="mt-10 flex items-center gap-x-3">
                <h4 className="flex-none text-sm font-semibold leading-6 text-gray-200">Fields</h4>
                <div className="h-px flex-auto bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500"></div>
              </div>
              <div className="mt-6">
                <button type="button" onClick={handleSwitch('Experience')} className="my-4 rounded-md w-full bg-indigo-300 h-10 text-black hover:bg-sky-700">Experience</button>
                <button type="button" onClick={handleSwitch('Education')} className="my-4 rounded-md w-full bg-indigo-300 h-10 text-black hover:bg-sky-700">Education</button>
                <button type="button" onClick={handleSwitch('Skills')} className="my-4 rounded-md w-full bg-indigo-300 h-10 text-black hover:bg-sky-700">Skills</button>
                <button type="button" onClick={handleSwitch('AboutMe')} className="my-4 rounded-md w-full bg-indigo-300 h-10 text-black hover:bg-sky-700">About me</button>
              </div>
            </div>
            <div className="w-full lg:w-2/3 p-8 lg:p-12">
              <ComponentToRender />
            </div>
        </div>
      </div>
    </Section>
  );
};

export default ResumeBody;
