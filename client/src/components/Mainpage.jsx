import { Canvas } from '@react-three/fiber';
import {
  ContactShadows,
  OrbitControls,
  Environment
} from "@react-three/drei";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useEffect } from 'react';

import Section from "./Section";
import Stats from "./Stats";
import HoverButton from "./Animation";
import  {Model as Avatar}  from "./3DImage/Avatar";
import { githubLogo, linkedinLogo, codeForcesLogo } from "../assets/";

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
               <Canvas camera={{
                position: [0, 4, 4],
               }}>
                <Environment preset="sunset" />
                <Avatar/>
                <OrbitControls />
                <ContactShadows opacity={0.7} />
              </Canvas>
                <div className="mt-15 flex items-center">
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
                <span className="bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 bg-clip-text h2  text-transparent">Software Engineer & Researcher</span>
                <p className="text-white mt-2 body-2 font-light pt-3 lg:pt-6 max-w-2xl">I'm from Vietnam, currently based in Finland, pursuing my M.Sc. in Computer Science at Aalto University. I graduated with distinction (GPA 4.72/5) from LUT University and am now also working as a Research Assistant on my Master's Thesis — building a multimodal AI pipeline for automatic tagging of construction-site images using Vision-Language Models.</p>
                <p className="text-white body-2 font-light pt-1 lg:pt-3 max-w-2xl">My journey started with competitive programming in high school, which gave me a strong foundation in algorithms and problem-solving. Over the years, I've evolved into a full-stack engineer — working at Munchi on real-time order management and POS systems processing 1000+ daily transactions, and at Triplan building secure backend services with Python and Docker.</p>
                <p className="text-white body-2 font-light pt-1 lg:pt-3 max-w-2xl">I'm passionate about cloud systems, AI/ML, and scalable software architecture. Looking ahead, I aim to deepen my expertise in these areas while continuing to contribute to impactful research and engineering projects.</p>
              </div>
            </div>
          </div>
        </div>
        <Stats />
      </Section>
    );
}

export default Mainpage;
