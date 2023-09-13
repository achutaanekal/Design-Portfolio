import Footer from '@/components/footer/Footer';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const ProjectsLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer isProjects />
    </>
  );
};

export default ProjectsLayout;
