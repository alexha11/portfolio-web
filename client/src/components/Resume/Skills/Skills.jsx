import MultiCarousel from "./Carousel";
import { technologies } from "../../../constants";

const Skills = () => {
  return (
    <div className="overflow-y-scroll max-h-[32rem]">
      <h2 className="h4">Programming Languages</h2>
      <MultiCarousel techList={technologies.programmingLanguages}/>
      <h2 className="h4 mt-5">Front End</h2>
      <MultiCarousel techList={technologies.frontEnd[0].frameworks} title={technologies.frontEnd[0].category}/>

      <h2 className="h4 mt-5">Back End</h2>
      <MultiCarousel techList={technologies.backEnd[0].frameworks} title={technologies.backEnd[0].category}/>
      <MultiCarousel techList={technologies.backEnd[1].Databases} title={technologies.backEnd[1].category}/>
      <MultiCarousel techList={technologies.backEnd[2].Others} title={technologies.backEnd[2].category}/>
    </div>
  )

}

export default Skills;