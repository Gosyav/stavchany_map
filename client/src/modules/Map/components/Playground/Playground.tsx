import { FC, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import { useQuery } from '@tanstack/react-query';

import { Error } from '../../../../ui/Error/Error';
import { Loader } from '../../../../ui/Loader/Loader';
import { getPlantsWithCoordinates } from '../../api/getPlantsWithCoordinates';
import { useMapStore } from '../../store/MapStore';
import { VydlisList } from '../VydlisList/VydlisList';

export const Playground: FC = () => {
  const { data: plantsWithCoordinates, isLoading } = useQuery({
    queryFn: () => getPlantsWithCoordinates(),
    queryKey: ['plantsWithCoordinates'],
  });

  const searchValue = useMapStore((state) => state.searchValue);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (isLoading) return <Loader />;
  if (!plantsWithCoordinates) return <Error />;

  return (
    <section className="h-full">
      <MapContainer
        center={[49.92164, 23.744852]}
        zoom={13}
        scrollWheelZoom={true}
        maxBounds={[
          [50.042693, 23.88923],
          [49.828218, 23.530434],
        ]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* @ts-ignore */}
        <MarkerClusterGroup>
          {plantsWithCoordinates
            .filter(
              (plant) =>
                !!plant.vydlis &&
                plant.forestry_name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()),
            )
            .map((plant) => (
              <VydlisList key={plant.ogc_fid} plant={plant} />
            ))}
        </MarkerClusterGroup>
      </MapContainer>
    </section>
  );
};
