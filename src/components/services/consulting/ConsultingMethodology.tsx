import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function ConsultingMethodology() {
  const steps = [
    {
      title: "Audit et diagnostic",
      description: "Évaluation complète de votre maturité data et identification des opportunités"
    },
    {
      title: "Définition de la stratégie",
      description: "Élaboration d'une feuille de route adaptée à vos objectifs"
    },
    {
      title: "Mise en œuvre",
      description: "Accompagnement dans l'implémentation des solutions recommandées"
    },
    {
      title: "Formation et transfert",
      description: "Montée en compétences de vos équipes et transfert de connaissances"
    }
  ];

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Notre méthodologie</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={step.title} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-100" />
            )}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 rounded-full p-4 mb-4">
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}