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

export const VydlisList: FC = () => {
  return (
    <List
      title="vydlises"
      filters={[
        <SearchInput source="q" key={1} placeholder="Шукати по ogc_fid" />,
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
        <TextField source="ogc_fid" />

        <EditButton />
      </Datagrid>
    </List>
  );
};
