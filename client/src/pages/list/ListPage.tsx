import { FC, useEffect } from 'react';

import { DataTable } from '../../modules/PlantsList';

export const ListPage: FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="h-full">
      <DataTable />
    </div>
  );
};
