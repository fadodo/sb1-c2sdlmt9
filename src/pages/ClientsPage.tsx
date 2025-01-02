import React from 'react';
import { Section } from '../components/ui/Section';
import { SectionTitle } from '../components/ui/SectionTitle';

export default function ClientsPage() {
  return (
    <main className="pt-16">
      <Section id="clients" className="bg-white">
        <SectionTitle 
          title="Nos Clients" 
          subtitle="Ils nous font confiance pour leurs projets data" 
        />
        <div className="text-center text-gray-600">
          Section en cours de développement
        </div>
      </Section>
    </main>
  );
}