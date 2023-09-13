import { RoutePaths } from '@/routes/routes';
import { Link, useLocation } from 'react-router-dom';

const DesktopMenu = () => {
  const { pathname } = useLocation();
  const isHome = pathname === RoutePaths.Home;

  const renderDesignMenuItem = () => {
    return isHome ? (
      <a href="#projects" className="text-xs leading-3 tracking-wide font-normal hover:text-black transition-colors">
        DESIGNS
      </a>
    ) : (
      <Link to="/" className="text-xs leading-3 tracking-wide font-normal hover:text-black transition-colors">
        DESIGNS
      </Link>
    );
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center justify-end gap-[100px]">
        <li>{renderDesignMenuItem()}</li>
        <li>
          <Link to="/about" className="text-xs leading-3 tracking-wide font-normal hover:text-black transition-colors">
            ABOUT
          </Link>
        </li>
        <li>
          <a
            href="/Achuta Anekal A resume.pdf"
            target="_blank"
            rel="nooper noreferrer"
            className="text-xs leading-3 tracking-wide font-normal hover:text-black transition-colors"
          >
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
