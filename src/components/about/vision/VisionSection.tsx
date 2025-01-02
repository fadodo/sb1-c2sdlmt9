import React from 'react';
import { Leaf, Brain, Target, Rocket } from 'lucide-react';
import { VisionCard } from './VisionCard';

export function VisionSection() {
  const visionCards = [
    {
      Icon: Leaf,
      title: "Un monde plus durable",
      description: "Nous utilisons les données géospatiales pour protéger les ressources naturelles, réduire l'impact environnemental et favoriser l'adaptation au changement climatique."
    },
    {
      Icon: Brain,
      title: "Un monde plus intelligent",
      description: "Nous transformons des données complexes en insights exploitables pour guider des stratégies efficaces et accompagner la transition numérique de nos clients."
    },
    {
      Icon: Target,
      title: "Notre impact",
      description: "De l'aménagement du territoire à l'agriculture de précision, nous rendons l'intelligence géospatiale accessible pour répondre aux enjeux du XXIe siècle."
    },
    {
      Icon: Rocket,
      title: "Notre ambition",
      description: "Démocratiser l'accès aux données géospatiales pour un monde où chaque décision est guidée par des informations fiables et respectueuses de notre planète."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="prose prose-lg mb-8">
        <p className="text-gray-600">
          Chez EGEOD, nous croyons fermement que les données géospatiales et l'observation de la Terre 
          ont le pouvoir de transformer le monde. Notre vision est de bâtir un avenir plus durable et 
          plus intelligent en mettant ces technologies au service de tous les secteurs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visionCards.map((card) => (
          <VisionCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}