import { FC, memo } from 'react';
import { Marker, Popup } from 'react-leaflet';

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '../../../../components/ui/table';
import { PlantsWithCoordinates } from '../../types/PlantWithCoordinates';
import { columns } from '../Columns/Columns';

type Props = {
  plant: PlantsWithCoordinates;
};

export const VydlisList: FC<Props> = memo(({ plant }) => {
  const {
    vydlis,
    forest_elem,
    composition,
    age,
    age_group,
    forest_type,
    h,
    d,
  } = plant;

  const tableData = [
    {
      forest_elem,
      composition,
      age,
      age_group,
      forest_type,
      h,
      d,
    },
  ];

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return vydlis?.coordinates.map(({ longitude, latitude }, index) => (
    <Marker
      key={`${longitude}/${latitude}/${index}`}
      position={[+longitude, +latitude]}
    >
      <Popup>
        <Table className="min-w-full border-collapse">
          <TableBody>
            {table.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header, headerIndex) => (
                <TableRow
                  key={header.id}
                  className={`${
                    headerIndex % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
                  } hover:bg-gray-300`}
                >
                  <TableCell className="px-4 py-2 font-semibold border-b border-gray-400 text-gray-900">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableCell>

                  {table.getRowModel().rows.map((row) => (
                    <TableCell
                      key={row.id}
                      className="px-4 py-2 border-b border-gray-400 text-gray-900"
                    >
                      {flexRender(
                        row.getVisibleCells()[headerIndex].column.columnDef
                          .cell,
                        row.getVisibleCells()[headerIndex].getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              )),
            )}
          </TableBody>
        </Table>
      </Popup>
    </Marker>
  ));
});
