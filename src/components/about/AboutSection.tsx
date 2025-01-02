import React from 'react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { CompanyHistory } from './CompanyHistory';
import { CompanyTeam } from './CompanyTeam';
import { CompanyValues } from './CompanyValues';
import { VisionSection } from './vision/VisionSection';

export function AboutSection() {
  return (
    <Section id="about" className="bg-white">
      <SectionTitle 
        title="Qui sommes-nous ?" 
        subtitle="Découvrez l'histoire et les valeurs d'EGEOD, expert en données géospatiales" 
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <CompanyHistory />
        <CompanyTeam />
      </div>
      <div className="mt-12">
        <CompanyValues />
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Notre Vision</h3>
        <VisionSection />
      </div>
    </Section>
  );
}