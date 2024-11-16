import { DataProvider, fetchUtils } from 'react-admin';

import axios from 'axios';
import simpleRestDataProvider from 'ra-data-simple-rest';

import { Coordiantes } from '../../../../Map/types/Coordinates';

const endpoint = import.meta.env.VITE_API;
const baseDataProvider = simpleRestDataProvider(endpoint);

export const coordinatesApi: DataProvider = {
  ...baseDataProvider,
  getList: async (resource, params) => {
    const { pagination, sort, filter } = params;
    const { key = 'q' } = filter;

    const { json, headers } = await fetchUtils.fetchJson(
      `${endpoint}/${resource}?sort=${sort?.field}&order=${sort?.order}&page=${pagination?.page}&perPage=${pagination?.perPage}&${key}=${filter[key] || ''}`,
    );

    return {
      data: json,
      total: parseInt(headers.get('x-total-count') || '', 10),
    };
  },

  // @ts-expect-error unnecessary ts error
  create: async (resource, params) => {
    const { ogc_fid, ...data } = params.data;

    return await axios
      .post<Coordiantes>(`${endpoint}/${resource}`, data)
      .then(({ data: createdVydlis }) => ({
        data: createdVydlis,
      }));
  },
};
