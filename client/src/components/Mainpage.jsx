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
    <Section id="main" labelledBy="hero-heading">
      <div className="container mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center">
            {/* Without WebGL the avatar is left out and the rest of the hero still renders */}
            <ErrorBoundary>
              {/* Fixed height reserves the space while the 3D chunk loads (the canvas used to collapse to 150px on phones) */}
              <div ref={avatarView.ref} className="w-full h-80 md:h-[26rem]">
                <Suspense fallback={<CanvasPlaceholder />}>
                  <HeroAvatar active={avatarView.inView} interactive={!isTouch} />
                </Suspense>
              </div>
            </ErrorBoundary>
            <div className="mt-15 flex items-center">
              <a
                href="/Duong%20Ha%20-%20CV.pdf"
                download="Duong Ha - CV.pdf"
                className="button bg-gradient-to-r from-indigo-600 via-slate-500 to-purple-700 text-white px-4 py-3 rounded-md hover:brightness-110"
              >
                Download CV
              </a>
              <ul className="ml-10 flex space-x-5">
                {socials.map(({ label, href, icon, className }) => (
                  <li key={label}>
                    <HoverButton>
                      <a href={href}>
                        <img src={icon} alt={label} width={48} height={48} className={`w-12 h-12 ${className}`} />
                      </a>
                    </HoverButton>
                  </li>
                ))}
              </ul>
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
