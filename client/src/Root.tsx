import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { App } from './App';
import { HomePage, ListPage, MapPage } from './pages';

export const Root: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="map" element={<MapPage />} />
        <Route path="list" element={<ListPage />} />
      </Route>
    </Routes>
  );
};
