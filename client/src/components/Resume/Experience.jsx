import React, {useState} from "react";

import {More} from "../../assets/";

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
                <p className=" flex items-baseline justify-start gap-x-0.5">
                <span className="text-[13px] font-bold tracking-tight text-gray-900">2024</span>
                <span className="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">Jan</span> 
                <span className="mx-2 text-lg font-bold tracking-tight text-gray-900">-</span>
                <span className="text-[13px] font-bold tracking-tight text-gray-900">2024</span>
                <span className="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">May</span> 
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
                <p className=" flex items-baseline justify-start gap-x-0.5">
                <span className="text-[13px] font-bold tracking-tight text-gray-900">2024</span>
                <span className="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">Jan</span> 
                <span className="mx-2 text-lg font-bold tracking-tight text-gray-900">-</span>
                <span className="text-[13px] font-bold tracking-tight text-gray-900">2024</span>
                <span className="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">May</span> 
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
                <p className=" flex items-baseline justify-start gap-x-0.5">
                <span className="text-[13px] font-bold tracking-tight text-gray-900">2019</span>
                <span className="mx-2 text-lg font-bold tracking-tight text-gray-900">-</span>
                <span className="text-[13px] font-bold tracking-tight text-gray-900">Present</span>
                </p>
                <p className="mt-6">Solved problems on <span className="text-indigo-500 underline hover:text-indigo-800"><a href="https://leetcode.com/u/alexha11/">LeetCode</a></span>, <span className="text-indigo-500 underline hover:text-indigo-800"><a href="http://lequydon.ntucoder.net/Coder/Details/a519Duong">LQDcoder</a></span>, <span className="text-indigo-500 underline hover:text-indigo-800"><a href="https://lqdoj.edu.vn/user">LQDoj</a></span> using C++, and Python. I have solved more than <span className="text-red-400">400</span> problems and achieved many prizes in VietNam.</p>
                
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

export default Experience;
