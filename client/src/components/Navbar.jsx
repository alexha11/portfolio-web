import { useLocation } from 'react-router-dom';
import { navigation } from '../constants';
const Navbar = () => {
  const pathname = useLocation();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="w-[12rem] xl:mr-8 flex justify-center items-center" href="#main">
          <img src="./cv.svg" width={50} height={50} alt="Duong Ha" className='inline-block'/>
          <p className='inline-block text-2xl uppercase text-white font-bold font-serif'>Duong Ha</p>
        </a>
        <nav className="hidden fixed  top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col imtems-center justify-center m-auto lg:flex-row"> 
            {navigation.map((item) => (
            <a  key={item.id} 
                href={item.url} 
                className={`block relative text-2xl uppercase text-n-3 transition-colors hover:text-n-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg-text-n-1/50'}`}
                >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <a href="#Hire" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'> 
            <button className='hidden lg:flex' href="#login">Hire me</button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;