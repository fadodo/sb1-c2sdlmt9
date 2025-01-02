import React from 'react';
import { Target } from 'lucide-react';

export function VisionImpact() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-gray-50 rounded">
          <Target className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Notre impact</h4>
          <p className="text-gray-600">
            Nos solutions transforment la manière dont les organisations utilisent les données 
            géospatiales, permettant une prise de décision plus éclairée et responsable dans 
            des domaines critiques comme l'urbanisme, l'agriculture et la gestion environnementale.
          </p>
        </div>
      </div>
    </div>
  );
}