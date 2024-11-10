import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useMapStore } from '../../modules/Map';
import { Input } from '../ui/input';

export const Navbar: FC = () => {
  const links = [
    {
      id: 1,
      to: '/map',
      name: 'Мапа',
    },
    {
      id: 2,
      to: '/list',
      name: 'Список Флори і Фауни',
    },
  ];

  const { pathname } = useLocation();
  const searchValue = useMapStore((state) => state.searchValue);
  const setSearchValue = useMapStore((state) => state.setSearchValue);

  return (
    <div
      className={`
        flex
        flex-col
        gap-8
        md:grid
        ${
          pathname === '/map'
            ? 'md:grid-cols-[min-content_200px_1fr_64px]'
            : 'md:grid-cols-[min-content_1fr_64px]'
        }
        items-center
        md:gap-x-10
        justify-center
        p-2
        py-4
        md:p-4
        bg-gray-900
        text-white
      `}
    >
      <Link to="/" className="hidden md:flex items-center">
        <h1 className="text-4xl text-center font-bold">Ver.GIS</h1>
      </Link>

      {pathname === '/map' && (
        <Input
          placeholder="Введіть назву рослини..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      )}

      <ul className="flex items-center gap-8 justify-center">
        {links.map((link) => {
          const { id, to, name } = link;

          return (
            <li key={id} className="flex items-center">
              <Link to={to}>
                <span className="text-xl text-nowrap">{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="hidden md:block">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Nulp_logo_ukr.svg"
          alt="Логотип Львівської політехніки"
        />
      </div>
    </div>
  );
};
