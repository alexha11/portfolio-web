import SectionSvg from "../assets/svg/SectionSvg";

// `labelledBy`: id of the section's heading, so it is announced as a named region.
// scroll-mt-20 keeps anchor links from landing under the fixed header.
const Section = ({
  className,
  id,
  labelledBy,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`
      relative scroll-mt-20
      ${
        customPaddings ||
        `py-8 lg:py-10 xl:py-12 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
};

export default Section;