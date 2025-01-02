import React from 'react';
import { FeatureCard } from './FeatureCard';
import { consultingFeatures } from './consultingFeatures';

export function ConsultingFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {consultingFeatures.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}