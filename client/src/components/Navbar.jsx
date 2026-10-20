import { useEffect, useRef, useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { navigation } from '../constants';
import useActiveSection from '../hooks/useActiveSection';
import useMediaQuery from '../hooks/useMediaQuery';

const sectionIds = navigation.map((item) => item.url.slice(1));

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  // While the mobile menu is open: lock page scroll, keep focus out of the content
  // behind it, and let Escape close it.
  useEffect(() => {
    if (!showMenu) return;
    const content = document.getElementById('content');
    disablePageScroll();
    content?.setAttribute('inert', '');
    navRef.current.querySelector('a')?.focus();

    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      setShowMenu(false);
      toggleRef.current.focus();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      enablePageScroll();
      content?.removeAttribute('inert');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [showMenu]);

  // The mobile menu doesn't exist on desktop, so don't leave the page locked after a resize
  useEffect(() => {
    if (isDesktop) setShowMenu(false);
  }, [isDesktop]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-n-6 bg-slate-950">
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="lg:w-[12rem] w-[8rem] xl:mr-8 flex justify-center items-center" href="#main">
          <img
            src="/DuongHa-Logo.png"
            width={100}
            height={55}
            alt="Duong Ha"
            className="inline-block mr-2"
          />
        </a>
        <nav
          id="primary-navigation"
          ref={navRef}
          aria-label="Main"
          className={`${showMenu ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-slate-950 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => {
              const isActive = item.url === `#${activeId}`;
              return (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={() => setShowMenu(false)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`block relative text-2xl uppercase text-n-3 transition-colors hover:text-n-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${isActive ? 'lg:text-n-1' : 'lg:text-n-1/50'}`}
                >
                  {item.title}
                </a>
              );
            })}
          </div>
        </nav>
        <a href="#contact" className="hidden mr-8 lg:flex btn button px-[40px] py-[15px]">Hire me</a>
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setShowMenu((open) => !open)}
          aria-expanded={showMenu}
          aria-controls="primary-navigation"
          aria-label={showMenu ? 'Close menu' : 'Open menu'}
          className="button-4 button flex items-center justify-center lg:hidden lg:ml-auto"
        >
          <span className={`burger burger-4 ${showMenu ? 'is-closed' : ''}`} aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
