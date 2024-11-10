import axios from 'axios';

import { PlantsWithCoordinates } from '../types/PlantWithCoordinates';

export const getPlantsWithCoordinates = async () => {
  return (
    await axios.get<PlantsWithCoordinates[]>(
      `${import.meta.env.VITE_API}/plants/coordinates`,
    )
  ).data;
};
