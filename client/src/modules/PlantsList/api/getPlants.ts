import axios from 'axios';

import { Plant } from '../types/Plant';

export const getPlants = async () => {
  return (await axios.get<Plant[]>(`${import.meta.env.VITE_API}/plants`)).data;
};
