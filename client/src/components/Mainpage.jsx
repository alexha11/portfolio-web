import { lazy, Suspense } from "react";

import Section from "./Section";
import Stats from "./Stats";
import HoverButton from "./Animation";
import ErrorBoundary from "./ErrorBoundary";
import TypewriterName from "./TypewriterName";
import CanvasPlaceholder from "./3DImage/CanvasPlaceholder";
import useInView from "../hooks/useInView";
import useMediaQuery from "../hooks/useMediaQuery";
import { githubLogo, linkedinLogo, codeForcesLogo } from "../assets/";

const HeroAvatar = lazy(() => import("./3DImage/HeroAvatar"));

const socials = [
  { label: "GitHub", href: "https://github.com/alexha11", icon: githubLogo, className: "" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/duong-ha-55524a246", icon: linkedinLogo, className: "rounded-full" },
  { label: "Codeforces", href: "https://codeforces.com/profile/alexha11", icon: codeForcesLogo, className: "object-contain rounded-full bg-white" },
];

const Mainpage = () => {
  const avatarView = useInView();
  const isTouch = useMediaQuery("(pointer: coarse)");

  
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
                      <a href={href}>
                        <img src={icon} alt={label} width={48} height={48} className={`w-12 h-12 ${className}`} />
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
          <div>
            <h1 id="hero-heading" className="pb-4 lg:pb-6">
              <span className="gradient-text font-light tracking-widest text-5xl md:text-6xl xl:text-8xl">
                <TypewriterName />
              </span>
            </h1>
            <p className="h2">
              <span className="bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 bg-clip-text text-transparent">Software Engineer</span>
            </p>
            <p className="text-white mt-2 body-2 font-light pt-3 lg:pt-6 max-w-2xl">I&apos;m originally from Vietnam and have been studying in Finland for the past three years. During my time here, I have gained valuable knowledge and experience from LUT University, which greatly improves my communication skills, self-learning and adaptability.</p>
            <p className="text-white body-2 font-light pt-1 lg:pt-3 max-w-2xl">My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue Competitive Programming at a very beginning of my high school. Through the years, I developed a solid foundation for coding and logical thinking, which later helps me to adapt well and thrive quickly in the University years.</p>
            <p className="text-white body-2 font-light pt-1 lg:pt-3 max-w-2xl">In the future, I want to continue exploring more about the coding world or specifically more about full-stack technologies, cloud computing, artificial intelligence and getting Grandmaster ranking on Codeforces.</p>
          </div>
        </div>
      </div>
      <Stats />
    </Section>
  );
};

export default Mainpage;
