import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

// socket.io lives in this chunk, so it no longer delays the first paint
const Chat = lazy(() => import("./components/Chatbox"));

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-200 selection:text-cyan-900">
      <div className="relative w-full h-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] z-0"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] z-0"></div>
        <div id="stars" className="z-0"></div>
        <div id="stars2" className="z-0"></div>
        <div id="stars3" className="z-0"></div>
        <div id="stars4" className="z-0"></div>
        <Navbar />
        <main id="content">
          <Mainpage />
          <Resume />
          <Project />
          <Contact />
        </main>
        <Footer />
        {/* A chat failure must never take the rest of the page down with it */}
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Chat />
          </Suspense>
        </ErrorBoundary>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
