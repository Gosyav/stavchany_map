import { Vydlis } from '@prisma/client';

export type QueryParams = {
  sort: keyof Vydlis;
  order: 'ASC' | 'DESC';
  page: string;
  perPage: string;
  q: string;
};
