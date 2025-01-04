import React from 'react';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Brain, BarChart, Cog, Zap, LineChart, Database } from 'lucide-react';

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

export default function DataAnalysisPage() {
  const features = [
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Tableaux de bord interactifs et rapports dynamiques pour une visualisation claire de vos KPIs."
    },
    {
      icon: Database,
      title: "Data Mining",
      description: "Extraction de patterns et insights cachés dans vos données grâce à des algorithmes sophistiqués."
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Modèles prédictifs avancés, classification automatique et détection d'anomalies pour anticiper les tendances."
    },
    {
      icon: Zap,
      title: "Automatisation",
      description: "Automatisation des processus d'analyse pour un gain de temps et une réduction des erreurs."
    },
    {
      icon: LineChart,
      title: "Analyse Statistique",
      description: "Analyses statistiques approfondies pour des décisions basées sur des données probantes."
    },
    {
      icon: Cog,
      title: "Intégration",
      description: "Solutions d'intégration sur mesure pour connecter vos sources de données et systèmes existants."
    }
  ];

  return (
    <main className="pt-16">
      <Section id="data-analysis" className="bg-white">
        <SectionTitle 
          title="Analyse de Données" 
          subtitle="Transformez vos données brutes en insights stratégiques pour une prise de décision éclairée" 
        />
        
        <div className="mb-12 prose prose-lg mx-auto">
          <p className="text-gray-600">
            Notre expertise en analyse de données vous permet d'exploiter pleinement le potentiel de vos données. 
            Nous combinons des techniques avancées de machine learning, de statistiques et de visualisation pour 
            vous fournir des insights actionnables et vous accompagner dans votre transformation digitale.
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