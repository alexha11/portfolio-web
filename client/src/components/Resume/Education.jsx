import {curriculumLogo, certificateLogo} from '../../assets';

const Education = () => {
  return (
    <div>
      <h3 className="font-bold text-xl">Education</h3>
      <div className="mt-8 lg:mt-6 lg:w-full lg:max-w-4xl lg:flex-shrink-0 min-w-2xl max-h-none lg:max-h-[29rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-200 rounded-2xl text-black p-6 ring-3 ring-inset ring-red-900 relative">
            <h4 className="text-xl font-bold">Lappeenranta-Lahti University of Technology | LUT</h4>
              <p className=" flex items-baseline justify-start gap-x-0.5">
                <span className="text-[13px] font-bold tracking-tight text-gray-900">2022</span>
                <span className="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">Sep</span>
                <span className="mx-2 text-lg font-bold tracking-tight text-gray-900">-</span>
                <span className="text-[13px] font-bold tracking-tight text-gray-900">2025</span>
                <span className="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">May</span>
              </p>
            <p className="mt-1 text-sm max-w-45">Bachelor of Science in Software and System Engineering</p>
            <p className="mt-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-800 font-semibold">My GPA: 4.8/5</p>
            <p className="text-gray-800 text-[13px] max-w-54 tracking-tighter">Academic Excellence Scholarship (€3,000 in 2023 & 2024)</p>
            <p className="text-gray-800 text-[13px] max-w-54 tracking-tighter">Tuition Fee Scholarship (€1,000 in 2022)</p>
            <p className="mt-6">Related courses: <span><a href="https://drive.google.com/file/d/1V6DDXHuz85SOnZQ3ttQZchsRy9SBOqHp/view?usp=sharing" aria-label="LUT related courses" className="hover:bg-gray-200 hover:scale-105 transition-transform duration-300"><img src={curriculumLogo} alt="" className="w-12 h-12 inline-block hover:bg-gray-200 hover:scale-105 transition-transform duration-300 rounded-md"/></a></span> </p>
          </div>
          <div className="bg-indigo-200 rounded-2xl text-black p-6 ring-3 ring-inset ring-red-900 relative">
            <h4 className="text-xl font-bold">Full Stack Open | University of Helsinki</h4>
            <span className="text-[13px] font-bold tracking-tight text-gray-900">2023 - Online Courses</span>

            <p className="mt-2 text-sm">
              Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce the modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.
            </p>
            <p className="mt-6 flex gap-x-2 items-center">
              Know more:
              
                <a href="https://fullstackopen.com/en/" aria-label="Full Stack Open course website" className="rounded-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300"><img src={curriculumLogo} alt="" className="w-12 h-12 inline-block hover:bg-gray-200 hover:scale-105 transition-transform duration-300 rounded-md"/></a>
                <a href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/60e929280aa118ce34ec21a94f07ac0f" aria-label="Full Stack Open certificate" className="rounded-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300"><img src={certificateLogo} alt="" className="w-12 h-12 inline-block hover:bg-gray-200 hover:scale-105 transition-transform duration-300 rounded-md bg-transparent"/></a>
               
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;