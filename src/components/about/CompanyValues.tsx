import React from 'react';
import { Lightbulb, Star, HeartHandshake, Gauge } from 'lucide-react';

export function CompanyValues() {
  const values = [
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-600" />,
      title: "Innovation",
      description: "Adoption continue des dernières technologies"
    },
    {
      icon: <Star className="h-6 w-6 text-blue-600" />,
      title: "Qualité",
      description: "Excellence dans chaque projet"
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-blue-600" />,
      title: "Proximité",
      description: "Relation de confiance avec nos clients"
    },
    {
      icon: <Gauge className="h-6 w-6 text-blue-600" />,
      title: "Performance",
      description: "Solutions optimisées et efficaces"
    }
  ];

  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Nos Valeurs</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {values.map((value) => (
          <div key={value.title} className="flex items-start gap-4">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              {value.icon}
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}