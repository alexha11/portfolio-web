import {curriculumLogo, certificateLogo} from '../../assets';

const Education = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">Education</h2>
      <div className="mt-8 lg:mt-6 lg:w-full lg:max-w-4xl lg:flex-shrink-0 min-w-2xl max-h-none lg:max-h-[29rem]">
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
            <p className="mt-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold">My GPA: 4.83/5</p>
            <p className="text-gray-800 text-[13px] max-w-54 tracking-tighter">Received a 10% and 30% scholarship in 2022 and 2023</p>
            <p className="mt-6">Related courses: <span><a href="https://drive.google.com/file/d/1E-H5ejFCvp3-5pXjirag5kB_JbLgngww/view?usp=sharing" className="hover:bg-gray-200 hover:scale-105 transition-transform duration-300"><img src={curriculumLogo} className="w-12 h-12 inline-block hover:bg-gray-200 hover:scale-105 transition-transform duration-300 rounded-md"/></a></span> </p>
          </div>
          <div className="bg-indigo-200 rounded-2xl text-black p-6 ring-3 ring-inset ring-red-900 relative">
            <p className="text-xl font-bold">Full Stack Open | University of Helsinki</p>
            <span class="text-[13px] font-bold tracking-tight text-gray-900">2023 - Online Courses</span>

            <p className="mt-2 text-sm">
              Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce the modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.
            </p>
            <p className="mt-6 flex gap-x-2 items-center">
              Know more:
              
                <a href="https://fullstackopen.com/en/" className="rounded-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300"><img src={curriculumLogo} className="w-12 h-12 inline-block hover:bg-gray-200 hover:scale-105 transition-transform duration-300 rounded-md"/></a>
                <a href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/60e929280aa118ce34ec21a94f07ac0f" className="rounded-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300"><img src={certificateLogo} className="w-12 h-12 inline-block hover:bg-gray-200 hover:scale-105 transition-transform duration-300 rounded-md bg-transparent"/></a>
               
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;