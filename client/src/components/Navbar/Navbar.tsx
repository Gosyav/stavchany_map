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
      name: 'Список рослин',
    },
  ];

  return (
    <div className="p-2 md:p-8 order-2 md:order-[0] md:h-screen bg-gray-900 text-white flex flex-col justify-between">
      <div className="h-full">
        <Link to="/">
          <h1 className="hidden md:block text-4xl text-center font-bold mb-6">
            Ver.GIS
          </h1>
        </Link>

        <ul className="h-full flex items-center justify-center gap-8 md:flex-col md:justify-start">
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
      </div>

      <div className="hidden md:block">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Nulp_logo_ukr.svg"
          alt="Логотип Львівської політехніки"
        />
      </div>
    </div>
  );
};
