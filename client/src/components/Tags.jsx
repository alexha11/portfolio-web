const Tags = ({ items, className = "" }) => (
  <ul className={`flex flex-wrap gap-2 ${className}`}>
    {items.map((item) => (
      <li key={item} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
        {item}
      </li>
    ))}
  </ul>
);

export default Tags;
