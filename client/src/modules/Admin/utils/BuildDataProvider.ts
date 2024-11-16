import { combineDataProviders } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

import { plantApi } from '../resources/plants';

export const buildDataProvider = async () => {
  const restDataProvider = jsonServerProvider(import.meta.env.VITE_API);

  const dataProvider = combineDataProviders((resource) => {
    switch (resource) {
      case 'plants': {
        return plantApi;
      }

      default: {
        return restDataProvider;
      }
    }
  });

  return dataProvider;
};
