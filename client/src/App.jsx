import React from "react";

import {default as Navbar} from "./components/Navbar";
import {default as Mainpage} from "./components/Mainpage";
import {default as Project} from "./components/Project";
import {default as Resume} from "./components/Resume";
import {default as Chat} from "./components/Chatbox";
import {default as Contact} from "./components/Contact/Contact";
import {default as Footer} from "./components/Footer";
import { Loader } from "@react-three/drei";

const App = () => {
  console.log(import.meta.env.VITE_SERVICE_ID);
  return (
    <>
    <Loader />
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-200 selection:text-cyan-900">
        <div className="relative w-full h-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] z-0"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] z-0"></div>
              <div id="stars" className="z-0"></div>
              <div id="stars2" className="z-0"></div>
              <div id="stars3" className="z-0"></div>
              <div id="stars4" className="z-0"></div>
              <Navbar />
              <Mainpage />
              <Resume />
              <Project />
              <Chat />
              <Contact />
              <Footer />
        </div>
      </div>
    </>
  );  
};

export default App;
