import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { RoutePaths } from '@/routes/routes';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {pathname !== RoutePaths.About && <Footer />}
    </>
  );
};

export default MainLayout;
