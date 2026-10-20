import { useEffect, useState } from "react";

// Id of the section crossing the middle of the viewport (scroll-spy for the navbar).
// Pass a stable array (e.g. defined at module level) so the observer isn't recreated.
const useActiveSection = (ids) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};

export default useActiveSection;
