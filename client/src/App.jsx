import React from "react";

import {default as Navbar} from "./components/Navbar";
import {default as Mainpage} from "./components/Mainpage";
import {default as Project} from "./components/Project";
import {default as Resume} from "./components/Resume";
import {default as Chat} from "./components/Chatbox";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative w-full h-full bg-slate-950 z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" ></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" ></div>
      <div className="container mx-auto ">
        <div className="">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div className="z-10">
          <Navbar />
          <Mainpage />
          <Resume />
          <Project  />
          <Chat />
        </div>
      </div>
      </div>
      </div>
  );
};

export default App;
