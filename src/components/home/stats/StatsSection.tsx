import React from 'react';
import { Section } from '../../ui/Section';

export function StatsSection() {
  const stats = [
    { value: '10+', label: "Années d'expertise" },
    { value: '500+', label: 'Projets réalisés' },
    { value: '50+', label: 'Experts data' },
    { value: '98%', label: 'Clients satisfaits' }
  ];

  return (
    <Section id="stats" className="bg-blue-600">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}