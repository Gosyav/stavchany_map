import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';

export const App: FC = () => {
  return (
    <div className="grid grid-rows-[1fr_64px] md:grid-rows-none md:grid-cols-[1fr_6fr]">
      <Navbar />
      <Outlet />
    </div>
  );
};
