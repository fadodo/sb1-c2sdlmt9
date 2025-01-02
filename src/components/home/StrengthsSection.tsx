import React from 'react';
import { Globe2, Shield, Users } from 'lucide-react';
import { Section } from '../ui/Section';

interface StrengthCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function StrengthCard({ icon, title, description }: StrengthCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 bg-blue-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function StrengthsSection() {
  const strengths = [
    {
      icon: <Globe2 className="h-8 w-8 text-blue-600" />,
      title: "Expertise",
      description: "Plus de 10 ans d'expérience dans l'analyse et le traitement des données géospatiales"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Fiabilité",
      description: "Des solutions robustes et des méthodologies éprouvées pour des résultats fiables"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Engagement",
      description: "Un accompagnement personnalisé et un engagement total dans la réussite de vos projets"
    }
  ];

  return (
    <Section id="strengths" className="bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Nos Atouts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {strengths.map((strength) => (
          <StrengthCard key={strength.title} {...strength} />
        ))}
      </div>
    </Section>
  );
}