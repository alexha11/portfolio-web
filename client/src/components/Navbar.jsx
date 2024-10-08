import { useLocation } from 'react-router-dom';
import { navigation } from '../constants';
import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Navbar = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const handleClick = () => {
    if (!showMenu) return;
    enablePageScroll();
    setShowMenu(false);
    setIsClosed(!isClosed);
  };

  const toggleMenu = () => {
    if (showMenu) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
    setShowMenu(!showMenu);
    setIsClosed(!isClosed); 
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 ${showMenu ? 'bg-slate-950' : 'bg-slate-950 backdrop:blur-sm'}`}>
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
      <a className="lg:w-[12rem] w-[8rem]  xl:mr-8 flex justify-center items-center" href="#main">
        <img 
          src="./DuongHa-Logo.png" 
          width={100} 
          height={100} 
          alt="Duong Ha" 
          className="inline-block mr-2" 
        />
      </a>
        <nav className={`${showMenu ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-slate-950 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative text-2xl uppercase text-n-3 transition-colors hover:text-n-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg-text-n-1/50'}`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <a href="#contact" className="hidden mr-8 lg:block">
          <button className="hidden lg:flex btn button px-[40px] py-[15px]" href="#login">Hire me</button>
        </a>
        <button
          onClick={toggleMenu}
          className="button-4 button flex items-center justify-center lg:hidden lg:ml-auto"
        >
          <span className={`burger burger-4 ${isClosed ? 'is-closed' : ''}`}></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
