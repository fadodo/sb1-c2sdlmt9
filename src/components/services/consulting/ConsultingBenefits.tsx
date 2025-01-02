import React from 'react';
import { TrendingUp, Shield, Users, Zap } from 'lucide-react';

export function ConsultingBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Performance accrue",
      description: "Optimisation de vos processus et amélioration de la prise de décision"
    },
    {
      icon: Shield,
      title: "Conformité assurée",
      description: "Respect des normes et réglementations en vigueur"
    },
    {
      icon: Users,
      title: "Équipes autonomes",
      description: "Développement des compétences et de l'autonomie de vos équipes"
    },
    {
      icon: Zap,
      title: "Innovation facilitée",
      description: "Accélération de vos projets d'innovation data"
    }
  ];

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Les bénéfices</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-4">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}