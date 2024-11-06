import { FC } from 'react';

export const Error: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Помилка завантаження даних
        </h1>

        <p className="text-gray-700">Будь ласка, спробуйте ще раз пізніше.</p>
      </div>
    </div>
  );
};
