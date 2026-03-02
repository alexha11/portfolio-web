import {curriculumLogo, certificateLogo} from '../../assets';

const Education = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">Education</h2>
      <div className="mt-8 lg:mt-6 lg:w-full lg:max-w-4xl lg:flex-shrink-0 min-w-2xl max-h-none lg:max-h-[29rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Aalto University - M.Sc. */}
          <div className="bg-indigo-200 rounded-2xl text-black p-6 ring-3 ring-inset ring-red-900 relative">
            <p className="text-xl font-bold">Aalto University</p>
            <p className="flex items-baseline justify-start gap-x-0.5 mt-1">
              <span className="text-[13px] font-bold tracking-tight text-gray-900">Aug. 2025</span>
              <span className="mx-2 text-lg font-bold tracking-tight text-gray-900">–</span>
              <span className="text-[13px] font-bold tracking-tight text-gray-900">May 2027</span>
              <span className="text-[11px] font-semibold leading-6 tracking-wide text-gray-600">(Expected)</span>
            </p>
            <p className="mt-1 text-sm font-semibold">M.Sc. in Computer Science</p>
            <p className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold">
              GPA: 4.67 / 5
            </p>
            <p className="mt-3 text-[13px] text-gray-800">
              Relevant coursework: Scalable Systems, Cloud Software & Systems, Parallel Computing, Scalable Web Apps, Web Software Development
            </p>
          </div>

          {/* LUT University - B.Sc. */}
          <div className="bg-indigo-200 rounded-2xl text-black p-6 ring-3 ring-inset ring-red-900 relative">
            <p className="text-xl font-bold">Lappeenranta-Lahti University of Technology | LUT</p>
            <p className="flex items-baseline justify-start gap-x-0.5 mt-1">
              <span className="text-[13px] font-bold tracking-tight text-gray-900">Aug. 2022</span>
              <span className="mx-2 text-lg font-bold tracking-tight text-gray-900">–</span>
              <span className="text-[13px] font-bold tracking-tight text-gray-900">May 2025</span>
            </p>
            <p className="mt-1 text-sm font-semibold">B.Sc. in Software and System Engineering</p>
            <p className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold">
              GPA: 4.72 / 5 — Graduated with Distinction
            </p>
            <p className="text-gray-800 text-[13px] tracking-tighter">Academic Excellence Scholarship (€3,000 in 2023 & 2024)</p>
            <p className="text-gray-800 text-[13px] tracking-tighter">Tuition Fee Scholarship (€1,000 in 2022)</p>
            <p className="mt-3 text-[13px] text-gray-800">
              Publication: <a href="https://lutpub.lut.fi" className="text-indigo-600 underline hover:text-indigo-900" target="_blank" rel="noreferrer">Crowdsourcing for large-scale data labelling (5/5)</a>
            </p>
            <p className="mt-4 flex gap-x-2 items-center">
              Curriculum:
              <a href="https://drive.google.com/file/d/1V6DDXHuz85SOnZQ3ttQZchsRy9SBOqHp/view?usp=sharing" className="rounded-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300">
                <img src={curriculumLogo} className="w-10 h-10 inline-block rounded-md" alt="Curriculum" />
              </a>
            </p>
          </div>

          {/* Full Stack Open Certification */}
          <div className="bg-indigo-200 rounded-2xl text-black p-6 ring-3 ring-inset ring-red-900 relative">
            <p className="text-xl font-bold">Full Stack Open</p>
            <p className="text-[13px] text-gray-800 mt-1">University of Helsinki — Online Certificate</p>
            <p className="mt-3 text-sm">
              Deep dive into modern JavaScript-based web development. Covers React, Redux, Node.js, MongoDB, GraphQL, TypeScript, CI/CD, and Docker.
            </p>
            <p className="mt-4 flex gap-x-2 items-center">
              Know more:
              <a href="https://fullstackopen.com/en/" className="rounded-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300">
                <img src={curriculumLogo} className="w-10 h-10 inline-block rounded-md" alt="Course" />
              </a>
              <a href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/60e929280aa118ce34ec21a94f07ac0f" className="rounded-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300">
                <img src={certificateLogo} className="w-10 h-10 inline-block rounded-md bg-transparent" alt="Certificate" />
              </a>
            </p>
          </div>

          {/* Deep Learning Specialization */}
          <div className="bg-indigo-200 rounded-2xl text-black p-6 ring-3 ring-inset ring-red-900 relative">
            <p className="text-xl font-bold">Deep Learning Specialization</p>
            <p className="text-[13px] text-gray-800 mt-1">DeepLearning.AI — Online Certificate</p>
            <p className="mt-3 text-sm">
              Covers neural networks, deep learning, structuring ML projects, CNNs, and sequence models to build state-of-the-art AI systems.
            </p>
            <p className="mt-4 flex gap-x-2 items-center">
              Know more:
              <a href="https://www.deeplearning.ai/courses/deep-learning-specialization/" className="rounded-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300">
                <img src={curriculumLogo} className="w-10 h-10 inline-block rounded-md" alt="Course" />
              </a>
              <a href="https://www.coursera.org/account/accomplishments/specialization/" className="rounded-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300">
                <img src={certificateLogo} className="w-10 h-10 inline-block rounded-md bg-transparent" alt="Certificate" />
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;