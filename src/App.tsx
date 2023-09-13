import '@/styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
