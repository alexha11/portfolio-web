import { DuongProfile } from "../assets/";
import { githubLogo, linkedinLogo, codeForcesLogo } from "../assets/";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import Section from "./Section";
import Stats from "./Stats";
import HoverButton from "./Animation";

const Mainpage = () => {
  // const PDF_URL = window.location.hostname === 'localhost'
  // ? 'http://localhost:5173/Resume.pdf'
  // : 'https://portfolio-web-nqi7.onrender.com/Resume.pdf';
  const PDF_URL = 'Duong Ha - CV.pdf';
  const downloadCV = () => {
    fetch(PDF_URL)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Duong Ha - CV.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => console.error('Error downloading the file:', error));
  }; 

  const [text] = useTypewriter({
    words: ['Duong Ha'],
    loop: { loop: true },
    deleteSpeed: 50,
  });


  
    return (
      <Section
        crossesOffset='lg:translate-y-[5.25rem]'
        id='main'
      >
        <div>
          <div className="container h-3xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center ">
                <img src={DuongProfile} alt="Duong Ha" className="w-80 h-96 rounded-md z-0" />
                <div className="mt-15 flex items-center">
                  <button onClick={downloadCV} className="button bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 text-white px-4 py-3 rounded-md hover:text-stone-950">Download CV</button>
                  <div className="ml-10 flex space-x-5">
                    <HoverButton>
                      <a href="https://github.com/alexha11">
                        <img src={githubLogo} alt="GitHub" className="w-12 h-12" />
                      </a>
                    </HoverButton>
                    <HoverButton>
                      <a href="https://www.linkedin.com/in/duong-ha-55524a246">
                        <img src={linkedinLogo} alt="LinkedIn" className="w-12 h-12 object-scale-up rounded-full border-white" />
                      </a>
                    </HoverButton>
                    <HoverButton>
                      <a href="https://codeforces.com/profile/alexha11">
                        <img src={codeForcesLogo} alt="CodeForces" className="w-12 h-12 object-contain rounded-full bg-white" />
                      </a>
                    </HoverButton>
                  </div>      
                </div>
              </div>
              <div>
                <h1 className="pb-4 lg:pb-6 z-0">
                  <span className="gradient-text text-green font-light tracking-widest text-5xl md:text-6xl xl:text-8xl z-0">
                    {text}
                  </span>
                  <Cursor cursorColor='' />
                </h1>
                <span className="bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 bg-clip-text h2  text-transparent">Software Engineer</span>
                <p className="text-white mt-2 body-2 font-light pt-3 lg:pt-6 max-w-2xl">I'm originally from Vietnam and have been studying in Finland for the past three years. During my time here, I have gained valuable knowledge and experience from LUT University, which greatly improves my communication skills, self-learning and adaptability. </p>
                <p className="text-white body-2 font-light pt-1 lg:pt-3 max-w-2xl">My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue Competitive Programming at a very beginning of my high school. Through the years, I developed a solid foundation for coding and logical thinking, which later helps me to adapt well and thrive quickly in the University years.</p> 
                <p className="text-white body-2 font-light pt-1 lg:pt-3 max-w-2xl"></p>In the future, I want to continue exploring more about the coding world or specifically more about full-stack technologies, cloud computing, artificial intelligence and getting Grandmaster ranking on Codeforces.
              </div>
            </div>
          </div>
        </div>
        <Stats />
      </Section>
    );
}

export default Mainpage;