import { FC } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="md:grid md:grid-cols-[min-content_1fr_64px] justify-center p-2 md:p-4 bg-gray-900 text-white">
      <Link to="/" className="flex items-center">
        <h1 className="hidden md:block text-4xl text-center font-bold">
          Ver.GIS
        </h1>
      </Link>

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
