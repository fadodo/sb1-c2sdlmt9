import React from 'react';
import { Section } from '../components/ui/Section';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ResourceCard } from '../components/news/ResourceCard';
import { BookOpen, Video, FileDown } from 'lucide-react';

export default function NewsPage() {
  const resources = [
    {
      Icon: BookOpen,
      title: "Blog",
      description: "Découvrez nos articles sur les dernières tendances en matière de géomatique, data science et intelligence artificielle. Études de cas, tutoriels et bonnes pratiques.",
      buttonText: "Accéder au blog",
      onClick: () => console.log("Blog clicked")
    },
    {
      Icon: Video,
      title: "Webinaires",
      description: "Participez à nos sessions en direct pour approfondir vos connaissances, découvrir nos solutions et échanger avec nos experts.",
      buttonText: "Voir les webinaires",
      onClick: () => console.log("Webinars clicked")
    },
    {
      Icon: FileDown,
      title: "Ressources gratuites",
      description: "Téléchargez nos guides pratiques, fiches techniques et livres blancs pour enrichir vos connaissances et améliorer vos pratiques.",
      buttonText: "Télécharger les ressources",
      onClick: () => console.log("Resources clicked")
    }
  ];

  return (
    <main className="pt-16">
      <Section id="news" className="bg-white">
        <SectionTitle 
          title="Actualités & Ressources" 
          subtitle="Restez informé et développez vos compétences avec nos contenus exclusifs" 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </Section>
    </main>
  );
}