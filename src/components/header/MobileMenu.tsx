import { RoutePaths } from '@/routes/routes';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const MobileMenu = () => {
  // State
  const [openMenu, setOpenMenu] = useState(false);

  const { pathname } = useLocation();
  const isHome = pathname === RoutePaths.Home;

  // Effects
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [openMenu]);

  // Handlers
  const handleToggleMenu = () => {
    setOpenMenu(prevState => !prevState);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  // Renders
  const renderDesignMenuItem = () => {
    return isHome ? (
      <a
        href="#projects"
        className="flex items-center justify-center text-[20px] leading-[20px] tracking-wide font-normal w-full py-[20px] border-b border-border-main"
        onClick={handleCloseMenu}
      >
        DESIGNS
      </a>
    ) : (
      <Link
        to={RoutePaths.Home}
        className="flex items-center justify-center text-[20px] leading-[20px] tracking-wide font-normal w-full py-[20px] border-b border-border-main"
        onClick={handleCloseMenu}
      >
        DESIGNS
      </Link>
    );
  };

  return (
    <div className="block md:hidden">
      <nav
        className={`absolute left-0 w-screen h-screen bg-background-main transition-all duration-500 z-50 ${
          openMenu ? 'top-[58px]' : '-top-[2000px]'
        }`}
      >
        <ul className="flex flex-col items-center px-[16px]">
          <li className="w-full">{renderDesignMenuItem()}</li>
          <li className="w-full">
            <Link
              to="/about"
              className="flex items-center justify-center text-[20px] leading-[20px] tracking-wide font-normal w-full py-[20px] border-b border-border-main"
              onClick={handleCloseMenu}
            >
              ABOUT
            </Link>
          </li>
          <li className="w-full">
            <a
              href="/Achuta Anekal resume.pdf"
              target="_blank"
              rel="nooper noreferrer"
              className="flex items-center justify-center text-[20px] leading-[20px] tracking-wide w-full font-normal py-[20px] border-b border-border-main"
              onClick={handleCloseMenu}
            >
              RESUME
            </a>
          </li>
        </ul>
      </nav>
      <button onClick={handleToggleMenu}>
        {openMenu ? (
          <AiOutlineClose size={24} className="text-text-main hover:text-black" />
        ) : (
          <AiOutlineMenu size={24} className="text-text-main hover:text-black" />
        )}
      </button>
    </div>
  );
};

export default MobileMenu;
