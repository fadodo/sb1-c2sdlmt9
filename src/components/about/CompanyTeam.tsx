import React from 'react';
import { Users2, Brain, Target, MessageSquare } from 'lucide-react';

export function CompanyTeam() {
  const expertise = [
    {
      icon: <Users2 className="h-6 w-6 text-blue-600" />,
      title: "Experts Géomaticiens",
      description: "Spécialistes en systèmes d'information géographique"
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: "Data Scientists",
      description: "Experts en analyse et traitement de données"
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "Cartographes",
      description: "Professionnels de la représentation spatiale"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "Consultants",
      description: "Conseillers en solutions géospatiales"
    }
  ];

  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Notre Équipe</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {expertise.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              {item.icon}
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}