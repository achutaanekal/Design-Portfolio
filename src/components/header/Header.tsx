import { RoutePaths } from '@/routes/routes';
import { useLocation } from 'react-router-dom';
import DesktopMenu from './DesktopMenu';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { pathname } = useLocation();
  const isAbout = pathname === RoutePaths.About;
  const padding = isAbout ? 'min-[1740px]:px-0' : '';

  return (
    <header>
      <div className={`container h-full px-[16px] lg:px-[40px] max-w:[1512px] ${padding}`}>
        <div className="flex items-center justify-between text-text-main h-full border-b border-b-border-main py-[14px] lg:py-[20px] z-50">
          <Logo />
          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
