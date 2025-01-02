import React from 'react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { ExpertiseCard } from './ExpertiseCard';
import { expertiseList } from './expertiseList';

export function ExpertiseSection() {
  return (
    <Section id="expertise" className="bg-gray-50">
      <SectionTitle 
        title="Nos domaines d'expertise" 
        subtitle="Une expertise data transverse au service de tous les secteurs d'activité" 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {expertiseList.map((expertise) => (
          <ExpertiseCard key={expertise.title} {...expertise} />
        ))}
      </div>
    </Section>
  );
}