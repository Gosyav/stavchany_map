import { FC, useEffect, useState } from 'react';
import { Admin, CustomRoutes, DataProvider, Resource } from 'react-admin';
import { Navigate, Route } from 'react-router-dom';

import {
  PlantsCreate,
  PlantsList,
  PlantsUpdate,
  authProvider,
} from '../../modules/Admin';
import { buildDataProvider } from '../../modules/Admin/utils/BuildDataProvider';

export const AdminPage: FC = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);

  useEffect(() => {
    buildDataProvider().then((provider) => setDataProvider(provider));
  }, []);

  if (!dataProvider) {
    return <div>Loading...</div>;
  }

  return (
    <Admin
      dataProvider={dataProvider}
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
