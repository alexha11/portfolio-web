import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Arrow } from '../../../assets';

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rotate-180 hover:scale-125 transition-transform duration-300" onClick={() => onClick()} style={{ left: "0" }}>
      <Arrow/>
    </button>
  );
}

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hover:scale-125 transition-transform duration-300" onClick={() => onClick()} style={{ right: "0" }}>
      <Arrow/>
    </button>
  );
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const MultiCarousel = ( {techList, title} ) => {
  return (
    <div className="container relative">
      <div>
        <h3 className="h6 my-6">{title}</h3>
      </div>
      <Carousel  

        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        
        >
        
          {techList.map((tech, index) => {
            return (
              
              <div key={index} className="px-10">
                <img src={tech.icon} alt={tech.name} className="rounded-md w-28 h-9" />
              </div>
            );
          })}
      </Carousel>
    </div>
  )
}

export default MultiCarousel;