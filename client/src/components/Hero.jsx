import { lazy, Suspense } from "react";

import ErrorBoundary from "./ErrorBoundary";
import SocialLinks from "./SocialLinks";
import CanvasPlaceholder from "./3DImage/CanvasPlaceholder";
import { MapPinIcon } from "./icons";
import { profile } from "../constants";
import useInView from "../hooks/useInView";
import useMediaQuery from "../hooks/useMediaQuery";

const HeroAvatar = lazy(() => import("./3DImage/HeroAvatar"));

const Hero = () => {
  const avatarView = useInView();
  const isTouch = useMediaQuery("(pointer: coarse)");

  return (
    <section id="home" aria-labelledby="home-title" className="scroll-mt-16">
      <div className="mx-auto grid max-w-5xl items-center gap-6 px-6 pb-16 pt-12 md:grid-cols-[1.2fr_1fr] md:gap-10 md:pb-20 md:pt-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{profile.role}</p>
          <h1 id="home-title" className="mt-4 font-serif text-5xl font-medium tracking-tight text-fg sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.summary}</p>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted">
            <MapPinIcon className="h-4 w-4" />
            {profile.location}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-md bg-fg px-5 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-90">
              Get in touch
            </a>
            <a href="#projects" className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface">
              View projects
            </a>
            <SocialLinks className="sm:ml-2" />
          </div>
        </div>
        {/* Without WebGL the avatar is left out and the rest of the page still renders */}
        <ErrorBoundary>
          <div ref={avatarView.ref} className="relative mx-auto aspect-square w-full max-w-[18rem] md:max-w-[22rem]">
            <div className="absolute inset-[10%] rounded-full bg-gradient-to-b from-accent/15 to-accent/0" aria-hidden="true" />
            <Suspense fallback={<CanvasPlaceholder />}>
              <HeroAvatar active={avatarView.inView} interactive={!isTouch} />
            </Suspense>
          </div>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default Hero;
