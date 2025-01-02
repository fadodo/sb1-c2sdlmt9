import React from 'react';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Brain, Eye, MessageSquare, Network, Cpu, Cog } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
      <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function ArtificialIntelligencePage() {
  const features = [
    {
      icon: Brain,
      title: "Deep Learning",
      description: "Réseaux de neurones avancés pour l'analyse d'images, la reconnaissance de formes et l'apprentissage complexe."
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Analyse automatique d'images et de vidéos pour la détection d'objets, la segmentation et la reconnaissance faciale."
    },
    {
      icon: MessageSquare,
      title: "Traitement du Langage Naturel",
      description: "Analyse de textes, chatbots intelligents et systèmes de compréhension automatique du langage."
    },
    {
      icon: Network,
      title: "Systèmes de Recommandation",
      description: "Algorithmes personnalisés pour prédire les préférences et suggérer des contenus pertinents."
    },
    {
      icon: Cpu,
      title: "IA pour l'Analyse Géospatiale",
      description: "Combinaison de l'IA et des données géospatiales pour une analyse territoriale avancée."
    },
    {
      icon: Cog,
      title: "Automatisation Intelligente",
      description: "Solutions d'automatisation basées sur l'IA pour optimiser les processus métier."
    }
  ];

  return (
    <main className="pt-16">
      <Section id="artificial-intelligence" className="bg-white">
        <SectionTitle 
          title="Intelligence Artificielle" 
          subtitle="Solutions IA innovantes pour automatiser et optimiser vos processus métier" 
        />
        
        <div className="mb-12 prose prose-lg mx-auto">
          <p className="text-gray-600">
            Notre expertise en Intelligence Artificielle vous permet d'exploiter les technologies les plus 
            avancées pour transformer vos données en solutions intelligentes. Nous développons des systèmes 
            IA sur mesure qui s'adaptent à vos besoins spécifiques et vous donnent un avantage concurrentiel 
            dans votre secteur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>
    </main>
  );
}