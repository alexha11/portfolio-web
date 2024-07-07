const Resume = () => {
  const Experience = () => {
    return (
      <></>
    )
  }
  const handleExperience = () => {
    return <Experience />
  }
  return (
    <div className="py-24 sm:py-32">
      <div className="flex flex-col sm:flex-row mx-auto mt-10 max-w-2xl rounded-3xl ring-1 lg:max-w-none lg:mx-0">
          <div className="p-8 lg:p-12 w-full sm:w-1/3 ">
            <h2 className="font-bold text-3xl">Why hire me?</h2>
            <p className="mt-6 tracking-tight leading-7 text-base text-gray-200">I'm a driven and talented developer who is committed to pushing the boundaries of what's possible in technology field </p>
            <div className="mt-10 flex items-center gap-x-3">
              <h4 className="flex-none text-sm font-semibold leading-6 text-gray-200">Fields</h4>
              <div class="h-px flex-auto bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500"></div>
            </div>
            <div className="mt-6">
              <button type="button" onClick={handleExperience} className="my-4 rounded-md w-full bg-indigo-300 h-10 text-black">Experience</button>
              <button type="button" onClick={handleExperience} className="my-4 rounded-md w-full bg-indigo-300 h-10 text-black">Education</button>
              <button type="button" onClick={handleExperience} className="my-4 rounded-md w-full bg-indigo-300 h-10 text-black">Skills</button>
              <button type="button" onClick={handleExperience} className="my-4 rounded-md w-full bg-indigo-300 h-10 text-black">About me</button>
            </div>
          </div>
          <div className="w-full sm:w-2/3">My Experience</div>
      </div>
    </div>
    
  )
};

export default Resume;