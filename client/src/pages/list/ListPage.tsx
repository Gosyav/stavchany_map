import { FC } from 'react';

import { DataTable } from '../../modules/PlantsList';

export const ListPage: FC = () => {
  return (
    <div className="h-full">
      <DataTable />
    </div>
  );
};
