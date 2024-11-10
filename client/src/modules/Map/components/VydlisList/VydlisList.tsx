import { FC } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { Vydlis } from '../../types/Vydlis';

type Props = {
  vydlis: Vydlis;
  forest_elem: string;
};

export const VydlisList: FC<Props> = ({ vydlis, forest_elem }) => {
  return vydlis.coordinates.map(({ longitude, latitude }, index) => (
    <Marker
      key={`${longitude}/${latitude}/${index}`}
      position={[+longitude, +latitude]}
    >
      <Popup className="w-96">{forest_elem}</Popup>
    </Marker>
  ));
};
