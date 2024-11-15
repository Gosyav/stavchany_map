import { DataProvider, fetchUtils } from 'react-admin';

import simpleRestDataProvider from 'ra-data-simple-rest';

import { Plant } from '../../../../PlantsList';

const endpoint = import.meta.env.VITE_API;
const baseDataProvider = simpleRestDataProvider(endpoint);

export const plantApi: DataProvider = {
  ...baseDataProvider,
  getList: async (resource, params) => {
    console.log(params);
    const { pagination, sort, filter } = params;
    const { key = 'q' } = filter;

    const normalizedSortField = sort?.field === 'id' ? 'ogc_fid' : sort?.field;

    const { json, headers } = await fetchUtils.fetchJson(
      `${endpoint}/${resource}?sort=${normalizedSortField}&order=${sort?.order}&page=${pagination?.page}&perPage=${pagination?.perPage}&${key}=${filter[key] || ''}`,
    );

    return {
      data: json.map((resource: Plant) => ({
        ...resource,
        id: resource.ogc_fid,
      })),
      total: parseInt(headers.get('x-total-count') || '', 10),
    };
  },
};
