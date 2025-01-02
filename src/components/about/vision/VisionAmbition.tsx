import React from 'react';
import { Rocket } from 'lucide-react';

export function VisionAmbition() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-gray-50 rounded">
          <Rocket className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Notre engagement</h4>
          <p className="text-gray-600">
            Nous nous engageons à démocratiser l'accès aux données géospatiales et à 
            développer des solutions innovantes qui contribuent à un avenir plus durable 
            et intelligent pour tous.
          </p>
        </div>
      </div>
    </div>
  );
}