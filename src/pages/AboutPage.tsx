import React from 'react';
import { Section } from '../components/ui/Section';
import { SectionTitle } from '../components/ui/SectionTitle';
import { HistorySection } from '../components/about/sections/HistorySection';
import { TeamSection } from '../components/about/sections/TeamSection';
import { ValuesSection } from '../components/about/sections/ValuesSection';
import { VisionSection } from '../components/about/sections/VisionSection';

export default function AboutPage() {
  return (
    <main className="pt-16">
      <Section id="about" className="bg-gray-50">
        <SectionTitle 
          title="Qui sommes-nous ?" 
          subtitle="Découvrez l'histoire et les valeurs d'EGEOD, expert en données géospatiales" 
        />
        
        <div className="space-y-8">
          <HistorySection />
          <TeamSection />
          <ValuesSection />
          <VisionSection />
        </div>
      </Section>
    </main>
  );
}