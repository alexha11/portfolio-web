import { useCallback, useSyncExternalStore } from "react";

// Live result of a CSS media query, e.g. useMediaQuery("(pointer: coarse)")
const useMediaQuery = (query) => {
  const subscribe = useCallback(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query]
  );
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches);
};

export default useMediaQuery;
