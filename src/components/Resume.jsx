import React, { useState } from "react";
import {More} from "../assets/index";

const Resume = () => {
  const [fields, setFields] = useState('Experience');
  const Experience = () => {
    const [visibleFor1, setVisibleFor1] = useState(true);
    const [visibleFor2, setVisibleFor2] = useState(true);
    const [visibleFor3, setVisibleFor3] = useState(true);

    
    return (
      <div>
        <h2 className="font-bold text-xl">My experience</h2>
        <div className="mt-8 lg:mt-6 lg:w-full lg:max-w-4xl lg:flex-shrink-0 min-w-2xl overflow-y-scroll max-h-none lg:max-h-[29rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-indigo-200 rounded-2xl text-black px-6 pt-6 pb-14 ring-3 ring-inset ring-red-900 relative min-h-[17rem] xl:min-h-[18rem] sm:min-h-[22rem] md:min-h-[19rem]">
              { visibleFor1 ? (
                <>
                  <h3 className="font-bold text-2xl">Software Developer</h3>
                  <p class=" flex items-baseline justify-start gap-x-0.5">
                  <span class="text-[13px] font-bold tracking-tight text-gray-900">2024</span>
                  <span class="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">Jan</span> 
                  <span class="mx-2 text-lg font-bold tracking-tight text-gray-900">-</span>
                  <span class="text-[13px] font-bold tracking-tight text-gray-900">2024</span>
                  <span class="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">May</span> 
                  </p>
                  <p className="mt-1 text-sm max-w-45">Triplan Company Collabrating With LUT University - Capstone Project</p>
                  <p className="mt-6">Worked on an <span className="text-indigo-500 underline hover:text-indigo-800"><a href="https://drive.google.com/file/d/10Ui35zvfikHiTHBP_OKcnFzyouDFWtJr/view?usp=sharing">Launch Pad</a></span> project helping the end-user use to select the correct solution component for their daily work with ease. </p>
                  
                  <p className="inline-block absolute bottom-6 right-16 text-[15px]">Know more</p>
                  <button type="button" className="rounded-md absolute bottom-3 right-3 hover:bg-gray-200 hover:scale-105 transition-transform duration-300" onClick={() => {setVisibleFor1(!visibleFor1)}}><img src={More} className="w-12 h-12"></img></button>
                </>
              ):
              <>
                <ur>
                  <li className="text-base">Developed a web application using React.js, Node.js, and MongoDB</li>
                  <li className="text-base">Implemented a feature that allows users to select the correct solution component for their daily work</li>
                  <li className="text-base">Collaborated effectively with a multi-lingual team including Finnish project manager, Chinese product owner, Iranian UI/UX developer and some other European developers.</li>
                </ur>
                <p className="inline-block absolute bottom-6 right-16 text-[15px]">Go back</p>
                <button type="button" className="rounded-md absolute bottom-3 right-3 rotate-180 hover:bg-gray-200 hover:scale-105 transition-transform duration-300" onClick={() => {setVisibleFor1(!visibleFor1)}}><img src={More} className="w-12 h-12"></img></button>
              </>}
            </div>
            <div className="bg-indigo-200 rounded-2xl text-black px-6 pt-6 pb-14 ring-3 ring-inset ring-red-900 relative min-h-[17rem] xl:min-h-[18rem] sm:min-h-[22rem] md:min-h-[19rem]">
              { visibleFor2 ? (
                <>
                  <h3 className="font-bold text-2xl">Teaching Assistant</h3>
                  <p class=" flex items-baseline justify-start gap-x-0.5">
                  <span class="text-[13px] font-bold tracking-tight text-gray-900">2024</span>
                  <span class="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">Jan</span> 
                  <span class="mx-2 text-lg font-bold tracking-tight text-gray-900">-</span>
                  <span class="text-[13px] font-bold tracking-tight text-gray-900">2024</span>
                  <span class="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">May</span> 
                  </p>
                  <p className="mt-1 text-sm max-w-45">LUT University</p>
                  <p className="mt-6">Assisting  two other professors to conduct Basics of Database Systems Course with more than <span className="text-red-400">100</span> students </p>
                  
                  <p className="inline-block absolute bottom-6 right-16 text-[15px]">Know more</p>
                  <button type="button" className="rounded-md absolute bottom-3 right-3 hover:bg-gray-200 hover:scale-105 transition-transform duration-300" onClick={() => {setVisibleFor2(!visibleFor2)}}><img src={More} className="w-12 h-12"></img></button>
                </>
              ):
              <>
                <ur>
                  <li className="text-sm">Assist teaching about Database System concepts such as ERDs, Relational Mode, Normalization, SQL, PostgreSQL,...</li>
                  <li className="text-sm">Grading projects, grading exams, and weekly assignments.</li>
                  <li className="text-sm">Collaborated with a team of 5 developers to deliver the project on time</li>
                  <li className="text-sm">Collaborated with a team of 5 developers to deliver the project on time</li>

                </ur>
                <p className="inline-block absolute bottom-6 right-16 text-[15px]">Go back</p>
                <button type="button" className="rounded-md absolute bottom-3 right-3 rotate-180 hover:bg-gray-200 hover:scale-105 transition-transform duration-300" onClick={() => {setVisibleFor2(!visibleFor2)}}><img src={More} className="w-12 h-12"></img></button>
              </>}
            </div>
            <div className="bg-indigo-200 rounded-2xl text-black px-6 pt-6 pb-14 ring-3 ring-inset ring-red-900 relative min-h-[17rem] xl:min-h-[18rem] sm:min-h-[22rem] md:min-h-[19rem]">
              { visibleFor3 ? (
                <>
                  <h3 className="font-bold text-2xl">Competitive Programmer</h3>
                  <p class=" flex items-baseline justify-start gap-x-0.5">
                  <span class="text-[13px] font-bold tracking-tight text-gray-900">2019</span>
                  <span class="mx-2 text-lg font-bold tracking-tight text-gray-900">-</span>
                  <span class="text-[13px] font-bold tracking-tight text-gray-900">Present</span>
                  </p>
                  <p className="mt-6">Solved problems on <span className="text-indigo-500 underline hover:text-indigo-800"><a href="https://leetcode.com/u/alexha11/">LeetCode</a></span>, <span className="text-indigo-500 underline hover:text-indigo-800"><a href="http://lequydon.ntucoder.net/Coder/Details/a519Duong">LQDcoder</a></span>, <span className="text-indigo-500 underline hover:text-indigo-800"><a href="https://lqdoj.edu.vn/user">LQDoj</a></span> using C++, and Python. For three years, I have solved more than <span className="text-red-400">400</span> problems and achieved many prizes in VietNam.</p>
                  
                  <p className="inline-block absolute bottom-6 right-16 text-[15px]">Know more</p>
                  <button type="button" className="rounded-md absolute bottom-3 right-3 hover:bg-gray-200 hover:scale-105 transition-transform duration-300" onClick={() => {setVisibleFor3(!visibleFor3)}}><img src={More} className="w-12 h-12"></img></button>
                </>
              ):
              <>
                <ur>
                  <li className="text-base">First prize City information technology competition (2019)</li>
                  <li className="text-base">Silver medal, Bronze prize The Olympiad In Informatics in Central Highlands of Vietnam (2020,2021)</li>
                  <li className="text-base">Second Prize City information technology competition (2020, 2021, 2022)</li>

                </ur>
                <p className="inline-block absolute bottom-6 right-16 text-[15px]">Go back</p>
                <button type="button" className="rounded-md absolute bottom-3 right-3 rotate-180 hover:bg-gray-200 hover:scale-105 transition-transform duration-300" onClick={() => {setVisibleFor3(!visibleFor3)}}><img src={More} className="w-12 h-12"></img></button>
              </>}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Education = () => {
    return (
      <div>
        <h2 className="font-bold text-xl">Education</h2>
        <div className="mt-8 lg:mt-6 lg:w-full lg:max-w-4xl lg:flex-shrink-0 min-w-2xl overflow-y-scroll max-h-none lg:max-h-[29rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-indigo-200 rounded-2xl text-black p-6 ring-3 ring-inset ring-red-900 relative">
              <p className="text-xl font-bold">Lappeenranta-Lahti University of Technology | LUT</p>
                <p class=" flex items-baseline justify-start gap-x-0.5">
                  <span class="text-[13px] font-bold tracking-tight text-gray-900">2022</span>
                  <span class="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">Sep</span> 
                  <span class="mx-2 text-lg font-bold tracking-tight text-gray-900">-</span>
                  <span class="text-[13px] font-bold tracking-tight text-gray-900">2025</span>
                  <span class="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">May</span> 
                </p>
              <p className="mt-1 text-sm max-w-45">Bachelor of Science in Software and System Engineering</p>
              <p className="mt-4 text-indigo-500 font-semibold">My GPA: 4.83/5</p>
              <p className="text-gray-800 text-[13px] max-w-54 tracking-tighter">Received a 10% and 30% scholarship in 2022 and 2023</p>
              <p className="mt-6">Click here to see related courses!! <span><a href="https://drive.google.com/file/d/1E-H5ejFCvp3-5pXjirag5kB_JbLgngww/view?usp=sharing" className="hover:bg-gray-200 hover:scale-105 transition-transform duration-300"><img src="./src/assets/curriculum.png" className="w-12 h-12 inline-block hover:bg-gray-200 hover:scale-105 transition-transform duration-300 rounded-md"/></a></span> </p>
            </div>
            <div className="bg-indigo-200 rounded-2xl text-black p-6 ring-3 ring-inset ring-red-900 relative">
              <p className="text-xl font-bold">Full Stack Open | University of Helsinki</p>
              <span class="text-[13px] font-bold tracking-tight text-gray-900">2024</span>
              <p className="mt-2 text-sm">
                Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce the modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.
              </p>
              <p className="mt-6">Know more?
                <span>
                  <a href="https://fullstackopen.com/en/" className="rounded-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300"><img src="./src/assets/curriculum.png" className="w-12 h-12 inline-block hover:bg-gray-200 hover:scale-105 transition-transform duration-300 rounded-md"/></a>
                  <a href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/60e929280aa118ce34ec21a94f07ac0f" className="rounded-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300"><img src="./src/assets/certificate-logo.png" className="w-12 h-12 inline-block hover:bg-gray-200 hover:scale-105 transition-transform duration-300 rounded-md"/></a>
                </span> 
              </p>
            </div>
          </div>
        </div>
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
