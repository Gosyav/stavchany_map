import { FC } from 'react';
import { Create, FormTab, TabbedForm, TextInput, required } from 'react-admin';

import { Stack, Typography } from '@mui/material';

export const PlantsCreate: FC = () => {
  return (
    <Create redirect="list" title="Створити Рослину">
      <TabbedForm>
        <FormTab label="Основна інформація">
          <TextInput
            label="Назва лісгоспу"
            source="forestry_name"
            validate={[required()]}
            fullWidth
          />
          <TextInput
            label="Код лісгоспу"
            source="forestry_code"
            validate={[required()]}
            fullWidth
          />
          <TextInput
            label="№ Кварталу"
            source="kv_no"
            validate={[required()]}
          />
          <TextInput label="№ Виділу" source="vd_no" validate={[required()]} />
          <TextInput
            label="Площа (га)"
            source="area_ha"
            validate={[required()]}
          />
          <TextInput label="Ярус" source="yarus" validate={[required()]} />
        </FormTab>

        <FormTab label="Лісові характеристики">
          <TextInput
            label="Склад"
            source="composition"
            validate={[required()]}
            fullWidth
          />
          <TextInput
            label="Відсоток першого шару"
            source="percent_1"
            validate={[required()]}
          />
          <TextInput
            label="Елемент лісу"
            source="forest_elem"
            validate={[required()]}
          />
          <TextInput label="Вік" source="age" validate={[required()]} />
          <TextInput label="Висота (м)" source="h" validate={[required()]} />
          <TextInput label="Діаметр (см)" source="d" validate={[required()]} />
          <TextInput
            label="Група віку"
            source="age_group"
            validate={[required()]}
          />
          <TextInput label="Бонітет" source="bonitet" validate={[required()]} />
          <TextInput
            label="Тип лісу"
            source="forest_type"
            validate={[required()]}
          />
          <TextInput
            label="Повнота"
            source="fullness"
            validate={[required()]}
          />
          <TextInput
            label="Запас (м³/га)"
            source="zapas_ha"
            validate={[required()]}
            fullWidth
          />
        </FormTab>

        <FormTab label="Запас першого шару">
          <TextInput
            label="Запас першого шару"
            source="forest_1_zapas"
            validate={[required()]}
          />
          <TextInput
            label="Запас за пор."
            source="forest_1_zapas_za_por"
            validate={[required()]}
          />
          <TextInput
            label="Відсоток першого шару"
            source="forest_1_percent_dil"
            validate={[required()]}
          />
        </FormTab>

        <FormTab label="Інші шари лісу">
          {Array.from({ length: 4 }, (_, i) => (
            <Stack direction="row" gap={4} key={i + 2}>
              <Typography variant="subtitle1" gutterBottom textAlign="center">
                Характеристики шару {i + 2}
              </Typography>
              <TextInput
                label={`Відсоток шару ${i + 2}`}
                source={`forest_${i + 2}_percent`}
                validate={[required()]}
              />
              <TextInput
                label={`Елемент шару ${i + 2}`}
                source={`forest_${i + 2}_elem`}
                validate={[required()]}
              />
              <TextInput
                label={`Вік шару ${i + 2}`}
                source={`forest_${i + 2}_age`}
                validate={[required()]}
              />
              <TextInput
                label={`Висота шару ${i + 2} (м)`}
                source={`forest_${i + 2}_h`}
                validate={[required()]}
              />
              <TextInput
                label={`Діаметр шару ${i + 2} (см)`}
                source={`forest_${i + 2}_d`}
                validate={[required()]}
              />
            </Stack>
          ))}
        </FormTab>

        <FormTab label="Коефіцієнти">
          <TextInput
            label="Коеф. бука"
            source="fagsyl_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. сосни"
            source="pinsyl_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. дуба"
            source="querob_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. вільхи"
            source="alnglu_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. берези"
            source="betpen_coef"
            validate={[required()]}
          />
          <TextInput
            label="Темп. ZZZ"
            source="temp_zzz"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. дуба червоного"
            source="querub_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. грабу"
            source="carbet_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. клена"
            source="acepse_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. модрини"
            source="lardec_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. ялини"
            source="picabi_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. клена платанолистого"
            source="acepla_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. ясеня"
            source="fraexc_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. тополі"
            source="poptre_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. в'яза"
            source="ulmus_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. горобини"
            source="sorauc_coef"
            validate={[required()]}
          />
          <TextInput
            label="Коеф. верби"
            source="salcap_coef"
            validate={[required()]}
          />
        </FormTab>

        {/* Поле ID связи с Vydlis */}
        {/* <FormTab label="Інші">
          <TextInput label="ID Виділу (Vydlis)" source="vydlisId" fullWidth />
        </FormTab> */}
      </TabbedForm>
    </Create>
  );
};
