import { combineDataProviders } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

import { coordinatesApi } from '../resources/coordinates';
import { plantApi } from '../resources/plants';
import { vydlisApi } from '../resources/vydlis';

export const buildDataProvider = async () => {
  const restDataProvider = jsonServerProvider(import.meta.env.VITE_API);

  const dataProvider = combineDataProviders((resource) => {
    switch (resource) {
      case 'plants': {
        return plantApi;
      }

      case 'vydlis': {
        return vydlisApi;
      }

      case 'coordinates': {
        return coordinatesApi;
      }

      default: {
        return restDataProvider;
      }
    }
  });

  return dataProvider;
};
