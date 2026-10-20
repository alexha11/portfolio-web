import MultiCarousel from "./Carousel";
import { technologies } from "../../../constants";

const Skills = () => (
  <div className="overflow-y-scroll max-h-[32rem] px-4 sm:px-6">
    <h3 className="text-xl sm:text-2xl font-semibold">Programming Languages</h3>
    <MultiCarousel techList={technologies.programmingLanguages} />

    <h3 className="text-xl sm:text-2xl font-semibold mt-5">Front End</h3>
    <MultiCarousel techList={technologies.frontEnd[0].frameworks} title={technologies.frontEnd[0].category} />

    <h3 className="text-xl sm:text-2xl font-semibold mt-5">Back End</h3>
    <MultiCarousel techList={technologies.backEnd[0].frameworks} title={technologies.backEnd[0].category} />
    <MultiCarousel techList={technologies.backEnd[1].Databases} title={technologies.backEnd[1].category} />
    <MultiCarousel techList={technologies.backEnd[2].Others} title={technologies.backEnd[2].category} />
  </div>
);

export default Skills;