import React from 'react';
import { Globe } from 'lucide-react';

export function VisionIntro() {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-blue-100 rounded-lg">
        <Globe className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Notre Vision</h3>
        <p className="text-gray-600">
          Notre mission est de transformer le monde grâce à la puissance des données géospatiales. 
          En combinant expertise technique et innovation, nous créons des solutions qui répondent 
          aux défis environnementaux et sociétaux d'aujourd'hui et de demain.
        </p>
      </div>
    </div>
  );
}