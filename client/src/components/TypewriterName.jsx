import { Cursor, useTypewriter } from "react-simple-typewriter";

import useMediaQuery from "../hooks/useMediaQuery";

const NAME = "Duong Ha";

// Owns the typewriter state, so each keystroke re-renders this text only,
// not the whole hero (which used to re-render the 3D canvas ~15 times per cycle).
const AnimatedName = () => {
  const [text] = useTypewriter({ words: [NAME], loop: 1 }); // type once, then keep the name readable
  return (
    <>
      {text}
      <Cursor />
    </>
  );
};

// Screen readers and crawlers get the full name; the animation is visual only.
const TypewriterName = () => {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  return (
    <>
      <span className="sr-only">{NAME}</span>
      <span aria-hidden="true">{reduceMotion ? NAME : <AnimatedName />}</span>
    </>
  );
};

export default TypewriterName;
