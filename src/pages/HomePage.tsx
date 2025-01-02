import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesSection } from '../components/home/features/FeaturesSection';
import { StatsSection } from '../components/home/stats/StatsSection';
import { ExpertiseSection } from '../components/expertise/ExpertiseSection';
import { CtaSection } from '../components/home/cta/CtaSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ExpertiseSection />
      <CtaSection />
    </main>
  );
}