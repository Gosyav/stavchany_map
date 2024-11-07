import { FC, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Button } from '../../../../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../../../../components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../../../components/ui/dropdown-menu';
import { Input } from '../../../../components/ui/input';
import { ScrollArea } from '../../../../components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../components/ui/table';
import { Error } from '../../../../ui/Error/Error';
import { Loader } from '../../../../ui/Loader/Loader';
import { getPlants } from '../../api/getPlants';
import { Plant } from '../../types/Plant';
import { columns } from '../Columns/Columns';

export const DataTable: FC = () => {
  const { data: plants, isLoading } = useQuery({
    queryFn: () => getPlants(),
    queryKey: ['plants'],
  });

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const filterInputs = [
    {
      id: 1,
      name: 'forestry_code',
      placeholder: 'Фільтр за кодом лісництва...',
    },
    {
      id: 2,
      name: 'kv_no',
      placeholder: 'Фільтр за номером кварталу...',
    },
    {
      id: 3,
      name: 'vd_no',
      placeholder: 'Фільтр за номером виділу...',
    },
    {
      id: 4,
      name: 'area_ha',
      placeholder: 'Фільтр за площею (га)...',
    },
    {
      id: 5,
      name: 'yarus',
      placeholder: 'Фільтр за ярусом...',
    },
    {
      id: 6,
      name: 'composition',
      placeholder: 'Фільтр за складом...',
    },
    {
      id: 7,
      name: 'percent_1',
      placeholder: 'Фільтр за процентом 1...',
    },
    {
      id: 8,
      name: 'forest_elem',
      placeholder: 'Фільтр за елементом лісу...',
    },
    {
      id: 9,
      name: 'age',
      placeholder: 'Фільтр за віком...',
    },
    {
      id: 10,
      name: 'h',
      placeholder: 'Фільтр за висотою...',
    },
    {
      id: 11,
      name: 'd',
      placeholder: 'Фільтр за діаметром...',
    },
    {
      id: 12,
      name: 'age_group',
      placeholder: 'Фільтр за віковою групою...',
    },
    // {
    //   id: 13,
    //   name: 'forest_2_elem',
    //   placeholder: 'Фільтр за елементом лісу 2...',
    // },
    {
      id: 13,
      name: 'forest_3_elem',
      placeholder: 'Фільтр за елементом лісу 3...',
    },
  ];
  const table = useReactTable({
    data: plants as Plant[],
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    initialState: {
      pagination: {
        pageSize: 30,
      },
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!plants) {
    return <Error />;
  }

  return (
    <div className="p-4 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Доступні колонки</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <ScrollArea className="h-[200px] md:h-[500px]">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog>
            <DialogTrigger className="border px-4 py-2 rounded">
              Фільтри
            </DialogTrigger>

            <DialogContent className="w-fit md:w-full">
              <ScrollArea className="h-[500px] w-fit md:w-full px-2">
                {filterInputs.map((input) => {
                  const { id, name, placeholder } = input;

                  return (
                    <Input
                      key={id}
                      placeholder={placeholder}
                      value={
                        (table.getColumn(name)?.getFilterValue() as string) ??
                        ''
                      }
                      onChange={(event) =>
                        table
                          .getColumn(name)
                          ?.setFilterValue(event.target.value)
                      }
                      className="mt-4 max-w-sm md:max-w-full"
                    />
                  );
                })}
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-end gap-2 py-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Попередня сторінка
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Наступна сторінка
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-150px)] md:h-[calc(100vh-200px)] mt-4">
        <Table className="min-w-full border-collapse">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="text-nowrap">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="px-4 py-2 text-left border-b"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, rowIndex) => (
                <TableRow
                  key={row.id}
                  className={`text-nowrap ${
                    rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
                  } hover:bg-gray-300`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="px-4 py-2 border-b border-gray-400 text-gray-900 font-medium"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-nowrap bg-gray-100 hover:bg-gray-300"
                >
                  Немає результатів
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};
