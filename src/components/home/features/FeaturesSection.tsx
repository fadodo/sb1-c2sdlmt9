import React from 'react';
import { Section } from '../../ui/Section';
import { SectionTitle } from '../../ui/SectionTitle';
import { FeatureCard } from './FeatureCard';
import { Brain, LineChart, Globe2, Users } from 'lucide-react';

export function FeaturesSection() {
  const features = [
   {
      Icon: Globe2,
      title: "Données Géospatiales",
      description: "Exploitez la puissance des données géographiques pour optimiser vos opérations."
    },
    {
      Icon: Brain,
      title: "Intelligence Artificielle",
      description: "Solutions IA sur mesure pour automatiser vos processus et prédire les tendances."
    },
    {
      Icon: LineChart,
      title: "Analyse Prédictive",
      description: "Anticipez les évolutions et prenez des décisions éclairées grâce au machine learning."
    },
    {
      Icon: Users,
      title: "Expertise Métier",
      description: "Une équipe pluridisciplinaire pour répondre à vos enjeux sectoriels spécifiques."
    }
  ];

  return (
    <Section id="features" className="bg-gray-50">
      <SectionTitle
        title="Nos solutions data"
        subtitle="Des solutions innovantes pour transformer vos données en avantage compétitif"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
}