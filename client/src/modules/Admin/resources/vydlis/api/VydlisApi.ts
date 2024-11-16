import { DataProvider, fetchUtils } from 'react-admin';

import simpleRestDataProvider from 'ra-data-simple-rest';

const endpoint = import.meta.env.VITE_API;
const baseDataProvider = simpleRestDataProvider(endpoint);

export const vydlisApi: DataProvider = {
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
};
