import MainLayout from '@/layouts/MainLayout';
import ProjectsLayout from '@/layouts/ProjectsLayout';
import { projectRoutes, routes } from '@/routes/routes';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route element={<MainLayout />}>
          {routes.map(({ path, component }, index) => (
            <Route key={index} path={path} Component={component} />
          ))}
        </Route>

        <Route element={<ProjectsLayout />}>
          {projectRoutes.map(({ path, component }, index) => (
            <Route key={index} path={path} Component={component} />
          ))}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
