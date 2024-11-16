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

export const CoordinatesList: FC = () => {
  return (
    <List
      title="plants"
      filters={[
        <SearchInput source="q" key={1} placeholder="Шукати по vydlisId" />,
      ]}
      actions={
        <TopToolbar>
          <FilterButton />
          <CreateButton />
        </TopToolbar>
      }
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="longitude" label="Довгота" />
        <TextField source="latitude" label="Широта" />
        <TextField source="vydlisId" />

        <EditButton />
      </Datagrid>
    </List>
  );
};
