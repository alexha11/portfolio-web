// A page section: the title sits in a narrow left column on wide screens and above the content on small ones.
// The title also names the section for screen readers; scroll-mt-16 keeps anchors clear of the sticky header.
const Section = ({ id, title, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 border-t border-line">
    <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-[10rem_1fr] md:gap-12 md:py-20">
      <h2 id={`${id}-title`} className="font-serif text-3xl font-medium leading-tight text-fg">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </div>
  </section>
);

export default Section;
