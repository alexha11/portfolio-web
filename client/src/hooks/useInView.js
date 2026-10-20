import { useEffect, useRef, useState } from "react";

// `inView`: the element is within `rootMargin` of the viewport right now.
// `seen`: it has been at least once (use it to mount heavy content lazily).
const useInView = (rootMargin = "200px") => {
  const ref = useRef(null);
  const [state, setState] = useState({ inView: false, seen: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        setState((prev) => ({
          inView: entry.isIntersecting,
          seen: prev.seen || entry.isIntersecting,
        })),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, ...state };
};

export default useInView;
