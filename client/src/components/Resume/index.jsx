import React, { useState } from "react";

import Skills from "./Skills";
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

  const handleSwitch = (text) => () => {
    setFields(text);
  };

  const ComponentToRender = components[fields];

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
            <div className="p-8 lg:p-12 w-full lg:w-1/3 ">
              <h2 className="font-bold text-3xl">Why hire me?</h2>
              <p className="mt-6 tracking-tight leading-7 text-base text-gray-200">
                I'm a driven and talented developer who is committed to pushing the boundaries of what's possible in technology field
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
