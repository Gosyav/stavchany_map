import { FC } from 'react';

export const HeroSection: FC = () => (
  <section className="w-full max-w-full flex md:flex-row flex-col items-center py-8 bg-gradient-to-r from-indigo-800 to-indigo-600 text-white rounded-b-lg">
    <div className="flex-1 p-4">
      <h1 className="text-5xl font-bold mb-4">Ставчанське лісництво</h1>
      <p className="text-lg mb-6">
        Ставчанське лісництво розташоване в Україні та є частиною лісового
        господарства, яке займається управлінням та охороною лісових ресурсів.
        Вони забезпечують захист лісових масивів від пожеж, шкідників та хвороб,
        а також проводять екскурсії та освітні програми.
      </p>
    </div>
    <div className="flex-1 p-4">
      <img
        src="https://bilatserkvalis.org.ua/fileadmin/_processed_/a/9/csm_DSCF0117_73ce3fe00f.jpg"
        alt="Фото Ставчанського лісництва"
        className="w-full h-96 object-cover rounded-lg shadow-md"
      />
    </div>
  </section>
);
