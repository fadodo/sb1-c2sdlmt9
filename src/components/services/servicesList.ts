import { 
  BarChart, 
  Database, 
  Brain, 
  Users 
} from 'lucide-react';

export const servicesList = [
  {
    Icon: BarChart,
    title: "Analyse de Données",
    description: "Transformez vos données brutes en insights stratégiques pour une prise de décision éclairée.",
    features: [
      "Business Intelligence et tableaux de bord",
      "Analyse statistique avancée",
      "Machine Learning et modèles prédictifs",
      "Data Mining et extraction de patterns"
    ],
    path: "/services/data-analysis"
  },
  {
    Icon: Database,
    title: "Données Géospatiales",
    description: "Solutions complètes d'acquisition et d'analyse de données géographiques pour une compréhension approfondie du territoire.",
    features: [
      "Analyse spatiale et géostatistique",
      "Imagerie satellite et télédétection",
      "Cartographie interactive avancée",
      "Modélisation 3D du territoire"
    ],
    path: "/services/geospatial-data"
  },
  {
    Icon: Brain,
    title: "Intelligence Artificielle",
    description: "Solutions IA innovantes pour automatiser et optimiser vos processus métier.",
    features: [
      "Computer Vision et traitement d'images",
      "IA pour l'analyse géospatiale",
      "Deep Learning et réseaux de neurones"
      
    ],
    path: "/services/artificial-intelligence"
  },
  {
    Icon: Users,
    title: "Consulting Data",
    description: "Accompagnement stratégique pour valoriser votre patrimoine data et réussir votre transformation digitale.",
    features: [
      "Stratégie et gouvernance data",
      "Formation et montée en compétences",
      "Audit et optimisation des processus"
    ],
    path: "/services/data-consulting"
  }
];