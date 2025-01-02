import React from 'react';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { ConsultingFeatures } from '../../components/services/consulting/ConsultingFeatures';
import { ConsultingIntro } from '../../components/services/consulting/ConsultingIntro';
import { ConsultingMethodology } from '../../components/services/consulting/ConsultingMethodology';
import { ConsultingBenefits } from '../../components/services/consulting/ConsultingBenefits';

export default function DataConsultingPage() {
  return (
    <main className="pt-16">
      <Section id="data-consulting" className="bg-white">
        <SectionTitle 
          title="Consulting Data" 
          subtitle="Accompagnement stratégique pour valoriser votre patrimoine data" 
        />
        <ConsultingIntro />
        <ConsultingFeatures />
        <ConsultingMethodology />
        <ConsultingBenefits />
      </Section>
    </main>
  );
}