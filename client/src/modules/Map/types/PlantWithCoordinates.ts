import { Plant } from '../../PlantsList';
import { Vydlis } from './Vydlis';

export type PlantsWithCoordinates = Plant & {
  vydlis: Vydlis | null;
};
