import { ColumnDef } from '@tanstack/react-table';

import { PlantInfoColumns } from '../../types/PlantInfoColumns';

export const columns: ColumnDef<PlantInfoColumns>[] = [
  {
    accessorKey: 'forest_elem',
    header: 'Лісовий елемент',
  },
  {
    accessorKey: 'composition',
    header: 'Склад',
  },
  {
    accessorKey: 'age',
    header: 'Вік',
  },
  {
    accessorKey: 'age_group',
    header: 'Вікова група',
  },
  {
    accessorKey: 'forest_type',
    header: 'Тип лісу',
  },
  {
    accessorKey: 'h',
    header: 'Висота (h)',
  },
  {
    accessorKey: 'd',
    header: 'Діаметр (d)',
  },
];
