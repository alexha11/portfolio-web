import { DuongProfile } from "../assets/";
import { githubLogo, linkedinLogo, instagramLogo } from "../assets/";

import Section from "./Section";
import Stats from "./Stats";

const Mainpage = () => {
  const PDF_URL = "http://localhost:5173/Resume.pdf";
  
  const downloadCV = () => {
    fetch(PDF_URL)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Duong Ha - Resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => console.error('Error downloading the file:', error));
  }; 
    return (
      <Section
        className='pt-[12rem] -mt-[5.2rem]'
        crosses
        crossesOffset='lg:translate-y-[5.25rem]'
        id='main'
      >
        <div>
          <div className="container h-3xl mx-auto lg:mt-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center ">
                <img src={DuongProfile} alt="Duong Ha" className="w-80 h-96 rounded-md z-0" />
                <div className="mt-15 flex items-center">
                  <button onClick={downloadCV} className="button bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 text-white px-4 py-3 rounded-md hover:text-stone-950">Download CV</button>
                  <div className="ml-10 flex space-x-5 ">
                    <a href="https://github.com/alexha11" className="w-12 h-12 rounded-full">
                      <img src={githubLogo} alt="GitHub" className="w-12 h-12" />
                    </a> 
                    <a href="https://www.linkedin.com/in/duong-ha-55524a246" className="w-12 h-12 rounded-full border-white">
                      <img src={linkedinLogo} alt="Linkedin" className="w-12 h-12 object-scale-up rounded-full" />
                    </a>  
                    <a href="https://www.instagram.com/hayduoo_/" className="w-12 h-12 ">
                      <img src={instagramLogo} alt="GitHub" className="w-12 h-12 object-contain rounded-full" />
                    </a>   
                  </div>              
                </div>
              </div>
              <div>
                <h1 className="gradient-text text-white font-light text-5xl tracking-widest lg:text-8xl pb-10 z-0">Duong Ha</h1>
                <span className="bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Software Engineer</span>
                <p className="text-white mt-2 mb-1 font-light pt-6 max-w-xl">I'm originally from Vietnam and have been studying in Finland for the past three years. During my time here, I have gained valuable knowledge and experience from LUT University, which greatly improves my communication skills, self-learning and adaptability. </p>
                <p className="text-white my-1 font-light pt-6 max-w-xl">My journey into the world of technology began with a strong passion for problems-solving, which led me to pursue Competitive Programming at a very beginning of my high school. Through the years, I developed a solid foundation for coding and logical thinking, which later helps me to adapt well and thrive quickly in the University years.</p> 
                <p className="text-white my-1 font-light pt-6 max-w-xl"></p>In the future, I want to continue exploring more about the coding world or specifically more about full-stack technologies, cloud computing, artificial intelligence and getting Grandmaster ranking on Codeforces.
              </div>
            </div>
          </div>
        </div>
        <Stats />
      </Section>
    );
}

export default Mainpage;