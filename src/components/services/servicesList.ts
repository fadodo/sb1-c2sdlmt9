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
      "Machine Learning et modèles prédictifs",
      "Business Intelligence et tableaux de bord",
      "Analyse statistique avancée",
      "Data Mining et extraction de patterns"
    ],
    path: "/services/data-analysis"
  },
  {
    Icon: Database,
    title: "Données Géospatiales",
    description: "Solutions complètes d'acquisition et d'analyse de données géographiques pour une compréhension approfondie du territoire.",
    features: [
      "Imagerie satellite et télédétection",
      "Cartographie interactive avancée",
      "Modélisation 3D du territoire",
      "Analyse spatiale et géostatistique"
    ],
    path: "/services/geospatial-data"
  },
  {
    Icon: Brain,
    title: "Intelligence Artificielle",
    description: "Solutions IA innovantes pour automatiser et optimiser vos processus métier.",
    features: [
      "Deep Learning et réseaux de neurones",
      "Computer Vision et traitement d'images",
      "NLP et analyse textuelle",
      "IA pour l'analyse géospatiale"
    ],
    path: "/services/artificial-intelligence"
  },
  {
    Icon: Users,
    title: "Consulting Data",
    description: "Accompagnement stratégique pour valoriser votre patrimoine data et réussir votre transformation digitale.",
    features: [
      "Stratégie et gouvernance data",
      "Architecture et infrastructure",
      "Formation et montée en compétences",
      "Audit et optimisation des processus"
    ],
    path: "/services/data-consulting"
  }
];