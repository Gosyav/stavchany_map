import { FC } from 'react';
import {
  AutocompleteInput,
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from 'react-admin';

export const CoordinatesCreate: FC = () => {
  return (
    <Create redirect="list" title="Створити Видліс">
      <SimpleForm>
        <TextInput source="longitude" validate={[required()]} label="Довгота" />
        <TextInput source="latitude" validate={[required()]} label="Широта" />

        <ReferenceInput source="vydlisId" reference="vydlis">
          <AutocompleteInput
            validate={[required()]}
            label="Виберіть Id видлісу"
          />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
