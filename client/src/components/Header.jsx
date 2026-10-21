import { useEffect, useRef, useState } from "react";

import { navigation, profile } from "../constants";
import useActiveSection from "../hooks/useActiveSection";
import useMediaQuery from "../hooks/useMediaQuery";
import ThemeToggle from "./ThemeToggle";
import { CloseIcon, MenuIcon } from "./icons";

const sectionIds = ["home", ...navigation.map((item) => item.url.slice(1))];

const Header = () => {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  // While the mobile menu is open: lock page scroll, keep focus out of the page behind it, and let Escape close it
  useEffect(() => {
    if (!open) return;
    const content = document.getElementById("content");
    content?.setAttribute("inert", "");
    document.documentElement.style.overflow = "hidden";
    navRef.current.querySelector("a")?.focus();

    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      content?.removeAttribute("inert");
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // The mobile menu doesn't exist on wide screens, so close it after a resize
  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  return (
    <header className="sticky top-0 z-40 border-b border-line">
      {/* The translucent blur lives on its own layer: a backdrop-filter on the header itself would
          trap the fixed mobile menu inside the header's 64px box */}
      <div className="absolute inset-0 -z-10 bg-canvas/85 backdrop-blur" aria-hidden="true" />
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#home" className="font-serif text-xl font-semibold text-fg">
          {profile.name}
        </a>
        <div className="flex items-center gap-1">
          <nav
            id="site-nav"
            ref={navRef}
            aria-label="Main"
            className={`${open ? "flex" : "hidden"} fixed inset-x-0 bottom-0 top-16 flex-col bg-canvas px-4 py-6 md:static md:flex md:flex-row md:items-center md:bg-transparent md:p-0`}
          >
            {navigation.map(({ title, url }) => {
              const isActive = url === `#${activeId}`;
              return (
                <a
                  key={url}
                  href={url}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-md px-3 py-3 text-lg transition-colors md:py-2 md:text-sm ${isActive ? "text-fg" : "text-muted hover:text-fg"}`}
                >
                  {title}
                </a>
              );
            })}
          </nav>
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-md text-fg hover:bg-surface md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
