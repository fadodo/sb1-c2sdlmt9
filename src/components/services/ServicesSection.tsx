import React from 'react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { ServicesList } from './ServicesList';

export function ServicesSection() {
  return (
    <Section id="services" className="bg-white">
      <SectionTitle 
        title="Nos services" 
        subtitle="Des solutions complètes pour vos besoins en données et informations géospatiales" 
      />
      <ServicesList />
    </Section>
  );
}