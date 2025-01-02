import React from 'react';
import { Brain, LineChart, Target } from 'lucide-react';

export function SmartWorld() {
  const capabilities = [
    {
      icon: <Brain className="h-5 w-5 text-purple-600" />,
      text: "Intelligence artificielle pour l'analyse géospatiale"
    },
    {
      icon: <LineChart className="h-5 w-5 text-blue-600" />,
      text: "Analyses prédictives pour la prise de décision"
    },
    {
      icon: <Target className="h-5 w-5 text-green-600" />,
      text: "Solutions sur mesure pour chaque secteur d'activité"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h4 className="text-xl font-semibold text-gray-900 mb-4">Innovation intelligente</h4>
      <ul className="space-y-4">
        {capabilities.map((capability, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="p-1 bg-gray-50 rounded">{capability.icon}</div>
            <span className="text-gray-600">{capability.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}