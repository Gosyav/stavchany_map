import { FC } from 'react';
import {
  CreateButton,
  Datagrid,
  EditButton,
  FilterButton,
  List,
  SearchInput,
  TextField,
  TopToolbar,
} from 'react-admin';

export const PlantsList: FC = () => {
  return (
    <List
      title="plants"
      filters={[
        <SearchInput
          source="q"
          key={1}
          placeholder="Шукати за лісовим елементом"
        />,
      ]}
      actions={
        <TopToolbar>
          <FilterButton />
          <CreateButton />
        </TopToolbar>
      }
    >
      <Datagrid>
        <TextField source="ogc_fid" />
        <TextField source="forest_elem" label="Лісовий елемент" />
        <TextField source="composition" label="Склад" />
        <TextField source="age" label="Вік" />
        <TextField source="age_group" label="Вікова група" />
        <TextField source="forest_type" label="Тип лісу" />
        <TextField source="h" label="Висота (h)" />
        <TextField source="d" label="Діаметр (d)" />

        <EditButton />
      </Datagrid>
    </List>
  );
};
