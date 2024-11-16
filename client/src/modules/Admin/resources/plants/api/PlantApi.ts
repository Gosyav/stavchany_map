import { DataProvider, fetchUtils } from 'react-admin';

import axios from 'axios';
import simpleRestDataProvider from 'ra-data-simple-rest';

import { Plant } from '../../../../PlantsList';

const endpoint = import.meta.env.VITE_API;
const baseDataProvider = simpleRestDataProvider(endpoint);

export const plantApi: DataProvider = {
  ...baseDataProvider,
  getList: async (resource, params) => {
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

  // @ts-expect-error unnecessary ts error
  getMany: async (resource, params) => {
    return await axios
      .get<Plant[]>(`${endpoint}/${resource}`)
      .then(({ data: plants }) => ({
        data: plants.map((plant) => ({ id: plant.ogc_fid, ...plant })),
      }));
  },

  // @ts-expect-error unnecessary ts error
  getOne: async (resource, params) => {
    return await axios
      .get<Plant>(`${endpoint}/${resource}/${params.id}`)
      .then(({ data: plant }) => ({
        data: { ...plant, id: plant.ogc_fid },
      }));
  },

  // @ts-expect-error unnecessary ts error
  create: async (resource, params) => {
    return await axios
      .post<Plant>(`${endpoint}/${resource}`, params.data)
      .then(({ data: createdPlant }) => ({
        data: { ...params.data, id: createdPlant.ogc_fid },
      }));
  },

  // @ts-expect-error unnecessary ts error
  update: async (resource, params) => {
    const { id, ...plantToUpdate } = params.data;

    return await axios
      .patch<Plant>(`${endpoint}/${resource}/${params.id}`, plantToUpdate)
      .then(({ data: updatedPlant }) => ({
        data: { ...updatedPlant, id: updatedPlant.ogc_fid },
      }));
  },
};
