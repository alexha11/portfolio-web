import React from "react";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";

const App = () => {
  return (
    <div>
    <div className="relative size-full bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
    </div>

      <Navbar />

    </div>
     
  );
    
}

export default App;
