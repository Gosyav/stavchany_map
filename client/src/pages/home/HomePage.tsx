import { FC } from 'react';

import { CTASection, HeroSection, ReserveSection } from '../../modules/Home';

export const HomePage: FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <HeroSection />
      <ReserveSection />
      <CTASection />
    </div>
  );
};
