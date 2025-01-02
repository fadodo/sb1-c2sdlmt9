import React from 'react';
import { Leaf, Droplet, ThermometerSun } from 'lucide-react';

export function SustainableWorld() {
  const initiatives = [
    {
      icon: <Leaf className="h-5 w-5 text-green-600" />,
      text: "Surveillance environnementale et gestion intelligente des ressources"
    },
    {
      icon: <Droplet className="h-5 w-5 text-blue-600" />,
      text: "Solutions prédictives pour la protection de l'environnement"
    },
    {
      icon: <ThermometerSun className="h-5 w-5 text-orange-600" />,
      text: "Outils d'adaptation et de résilience climatique"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h4 className="text-xl font-semibold text-gray-900 mb-4">Durabilité par les données</h4>
      <ul className="space-y-4">
        {initiatives.map((initiative, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="p-1 bg-gray-50 rounded">{initiative.icon}</div>
            <span className="text-gray-600">{initiative.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}