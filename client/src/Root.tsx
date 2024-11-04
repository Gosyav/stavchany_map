import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { App } from './App';
import { HomePage } from './pages/home/HomePage';

export const Root: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
