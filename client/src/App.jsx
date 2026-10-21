import { lazy, Suspense } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Education from "./components/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

// socket.io lives in this chunk, so it doesn't delay the first paint
const Chat = lazy(() => import("./components/Chatbox"));

const App = () => (
  <>
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
    >
      Skip to content
    </a>
    <Header />
    <main id="content">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Education />
      <Contact />
    </main>
    <Footer />
    {/* A chat failure must never take the rest of the page down with it */}
    <ErrorBoundary>
      <Suspense fallback={null}>
        <Chat />
      </Suspense>
    </ErrorBoundary>
  </>
);

export default App;
