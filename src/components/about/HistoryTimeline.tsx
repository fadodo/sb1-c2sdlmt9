import React from 'react';
import { Milestone } from './Milestone';

export function HistoryTimeline() {
  const milestones = [
    {
      title: "Notre expertise",
      content: "Une équipe pluridisciplinaire alliant compétences en géospatial, data science et intelligence artificielle."
    },
    {
      title: "Notre engagement",
      content: "Un accompagnement sur mesure pour transformer vos données en avantage stratégique."
    },
    {
      title: "Notre ambition",
      content: "Devenir le partenaire de référence en solutions data pour un monde plus durable et intelligent."
    }
  ];

  return (
    <div className="space-y-8">
      {milestones.map((milestone, index) => (
        <Milestone 
          key={milestone.title}
          title={milestone.title}
          content={milestone.content}
          isLast={index === milestones.length - 1}
        />
      ))}
    </div>
  );
}