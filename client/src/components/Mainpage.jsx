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
              <span className="bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 bg-clip-text text-transparent">Software Engineer & Researcher</span>
            </p>
            <p className="text-white mt-2 body-2 font-light pt-3 lg:pt-6 max-w-2xl">I&apos;m from Vietnam, currently based in Finland, pursuing my M.Sc. in Computer Science at Aalto University. I graduated with distinction (GPA 4.72/5) from LUT University and am now also working as a Research Assistant on my Master&apos;s Thesis — building a multimodal AI pipeline for automatic tagging of construction-site images using Vision-Language Models.</p>
            <p className="text-white body-2 font-light pt-1 lg:pt-3 max-w-2xl">My journey started with competitive programming in high school, which gave me a strong foundation in algorithms and problem-solving. Over the years, I&apos;ve evolved into a full-stack engineer — working at Munchi on real-time order management and POS systems processing 1000+ daily transactions, and at Triplan building secure backend services with Python and Docker.</p>
            <p className="text-white body-2 font-light pt-1 lg:pt-3 max-w-2xl">I&apos;m passionate about cloud systems, AI/ML, and scalable software architecture. Looking ahead, I aim to deepen my expertise in these areas while continuing to contribute to impactful research and engineering projects.</p>
          </div>
        </div>
      </div>
      <Stats />
    </Section>
  );
};

export default Mainpage;
