import { Coordinates } from '@prisma/client';

export type QueryParams = {
  sort: keyof Coordinates;
  order: 'ASC' | 'DESC';
  page: string;
  perPage: string;
  q: string;
};
