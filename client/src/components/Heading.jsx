const Heading = ({ className = "", id, title, text }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-8 lg:mb-12 text-center`}
    >

      {title && <h2 id={id} className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-3">{text}</p>}
    </div>
  );
};

export default Heading;
