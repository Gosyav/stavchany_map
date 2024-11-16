import { FC } from 'react';
import { Admin, CustomRoutes, Resource } from 'react-admin';
import { Navigate, Route } from 'react-router-dom';

import {
  PlantsCreate,
  PlantsList,
  PlantsUpdate,
  authProvider,
  plantApi,
} from '../../modules/Admin';

export const AdminPage: FC = () => {
  return (
    <Admin
      dataProvider={plantApi}
      authProvider={authProvider}
      basename="/admin"
    >
      <CustomRoutes>
        <Route path="/admin" element={<Navigate to="/admin/plants" />} />
      </CustomRoutes>

      <Resource
        name="plants"
        list={<PlantsList />}
        create={<PlantsCreate />}
        edit={<PlantsUpdate />}
      />
    </Admin>
  );
};
