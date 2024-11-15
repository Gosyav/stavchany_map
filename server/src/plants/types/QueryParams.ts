import { Plant } from '@prisma/client';

export type QueryParams = {
  sort: keyof Plant;
  order: 'ASC' | 'DESC';
  page: string;
  perPage: string;
  q: string;
};
