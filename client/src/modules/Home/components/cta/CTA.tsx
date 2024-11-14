import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

export const CTASection: FC = () => (
  <section className="w-full max-w-full text-center py-8 bg-indigo-800 text-white">
    <Card className="shadow-md max-w-4xl mx-auto p-8">
      <CardContent>
        <h2 className="text-3xl font-bold mb-4">Приєднуйтесь до нашої місії</h2>
        <p className="text-lg mb-6">
          Долучайтеся до нашої спільноти, щоб разом захищати та відновлювати
          екосистеми. Ми шукаємо партнерів, які підтримують нашу ініціативу.
        </p>
        <Button
          variant="default"
          className="bg-indigo-800 hover:bg-indigo-500"
          asChild
        >
          <Link to="/map">Стати партнером</Link>
        </Button>
      </CardContent>
    </Card>
  </section>
);
