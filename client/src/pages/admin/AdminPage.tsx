import { FC } from 'react';
import { Admin, CustomRoutes, Resource } from 'react-admin';
import { Navigate, Route } from 'react-router-dom';

import jsonServerProvider from 'ra-data-json-server';

import { PlantsList } from '../../modules/Admin';

const dataProvider = jsonServerProvider(import.meta.env.VITE_API);

export const AdminPage: FC = () => {
  return (
    <Admin dataProvider={dataProvider} basename="/admin">
      <CustomRoutes>
        <Route path="/admin" element={<Navigate to="/admin/plants" />} />
      </CustomRoutes>

      <Resource name="plants" list={<PlantsList />} />
    </Admin>
  );
};
