import React from 'react';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Satellite, Map, Ruler, Mountain, Eye, Database } from 'lucide-react';

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

export default function GeospatialDataPage() {
  const features = [
    {
      icon: Satellite,
      title: "Imagerie Satellite",
      description: "Acquisition et traitement d'images satellites haute résolution pour la surveillance et l'analyse du territoire."
    },
    {
      icon: Map,
      title: "Cartographie Avancée",
      description: "Création de cartes interactives et analyses spatiales pour visualiser et comprendre les données géographiques."
    },
    {
      icon: Ruler,
      title: "Données LiDAR",
      description: "Acquisition et traitement de données LiDAR pour la modélisation 3D précise du terrain et des infrastructures."
    },
    {
      icon: Mountain,
      title: "Modélisation 3D",
      description: "Création de modèles 3D détaillés pour la planification urbaine et l'analyse environnementale."
    },
    {
      icon: Eye,
      title: "Surveillance Environnementale",
      description: "Suivi en temps réel des changements environnementaux et détection précoce des anomalies."
    },
    {
      icon: Database,
      title: "Gestion de Données",
      description: "Solutions complètes de gestion et d'analyse des données géospatiales avec des outils SIG avancés."
    }
  ];

  return (
    <main className="pt-16">
      <Section id="geospatial-data" className="bg-white">
        <SectionTitle 
          title="Données Géospatiales" 
          subtitle="Solutions complètes d'acquisition et d'analyse de données géographiques pour une compréhension approfondie du territoire" 
        />
        
        <div className="mb-12 prose prose-lg mx-auto">
          <p className="text-gray-600">
            Notre expertise en données géospatiales vous permet d'exploiter pleinement le potentiel de 
            l'information géographique. Nous utilisons les technologies les plus avancées pour collecter, 
            analyser et visualiser les données territoriales, vous permettant de prendre des décisions 
            éclairées pour vos projets d'aménagement et de surveillance environnementale.
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