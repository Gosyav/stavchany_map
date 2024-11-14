import { FC } from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card';

export const ReserveSection: FC = () => (
  <section className="w-full max-w-full text-center py-8 bg-indigo-50">
    <h2 className="text-3xl font-bold mb-6 text-indigo-900">
      Наші заповідники
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      {/* Заповідник "Розточчя" */}
      <Card className="shadow-md bg-indigo-700 p-4 text-left text-white">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Roztocca1.jpg"
          alt="Заповідник Розточчя"
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
        <CardHeader>
          <CardTitle>Заповідник "Розточчя"</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Розточчя — це біосферний заповідник в Україні, відомий своєю багатою
            флорою та фауною. Заповідник є частиною екосистеми, що займається
            охороною та збереженням природного середовища.
          </p>
        </CardContent>
      </Card>

      {/* Інший заповідник */}
      <Card className="shadow-md bg-indigo-700 p-4 text-left text-white">
        <img
          src="https://yavorpark.in.ua/wp-content/uploads/2024/01/5-600x300.jpg"
          alt="Екологічний Центр"
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
        <CardHeader>
          <CardTitle>Яворівський Національний Природний Парк</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Метою створення парку є збереження, відтворення та раціональне
            використання типових і унікальних лісостепових ландшафтів та інших
            природних комплексів у межах Головного Європейського вододілу, які
            мають важливе природоохоронне, естетичне та рекреаційне значення.
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);
