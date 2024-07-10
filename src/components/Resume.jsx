import React, { useState } from "react";
import {More} from "../assets/index";

const Resume = () => {
  const [fields, setFields] = useState('Experience');
  const Experience = () => {
    const [isKnowMore, setIsKnowMore] = useState(false);
    const handleKnowMore = () => {
    }
    
    return (
      <div>
        <h2 className="font-bold text-xl">My experience</h2>
        <div className="mt-8 lg:mt-6 lg:w-full lg:max-w-4xl lg:flex-shrink-0 min-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-indigo-200 rounded-2xl text-black px-10 pt-10 pb-14 ring-1 ring-inset ring-red-900 relative">
              
              <h3 className="font-bold text-2xl">Full-Stack Developer Intern</h3>
              <p class=" flex items-baseline justify-start gap-x-0.5">
                <span class="text-[13px] font-bold tracking-tight text-gray-900">2024</span>
                <span class="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">Jan</span> 
                <span class="mx-2 text-lg font-bold tracking-tight text-gray-900">-</span>
                <span class="text-[13px] font-bold tracking-tight text-gray-900">2024</span>
                <span class="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">May</span> 
              </p>
              <p className="mt-1 text-sm max-w-45">Triplan Company Collabrating With LUT University</p>
              <p className="mt-6">I'm working with a team to develop an <span className="text-indigo-500">App Hub</span> project </p>
              
              <p className="inline-block absolute bottom-6 right-16 text-[15px]">Know more</p>
              <button type="button" className="rounded-md absolute bottom-3 right-4" onClick={handleKnowMore}><img src={More} className="w-12 h-12"></img></button>
            </div>
            <div>test</div> 

          </div>
        </div>
      </div>
    );
  };

  const Education = () => {
    return (
      <div>
        <h2 className="font-bold text-3xl">Education</h2>
      </div>
    );
  };

  const Skills = () => {
    return (
      <div>
        <h2 className="font-bold text-3xl">Skills</h2>
      </div>
    );
  };

  const AboutMe = () => {
    return (
      <div>
        <h2 className="font-bold text-3xl">About me</h2>
      </div>
    );
  };

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
    <div className="py-24 sm:py-32">
      <div className="flex flex-col lg:flex-row mx-auto mt-10 max-w-2xl rounded-3xl ring-1 lg:max-w-none lg:mx-0">
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
  );
};

export default Resume;
