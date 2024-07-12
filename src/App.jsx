import React from "react";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative w-full h-full bg-slate-950 z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" ></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" ></div>
      <div className="container mx-auto ">
        <Navbar />
        <Mainpage />
        <Resume />
        <Project  />
        
      </div>
      </div>
      </div>
  );
};

export default App;
