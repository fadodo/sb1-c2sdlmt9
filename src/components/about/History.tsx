import React from 'react';
import { Globe2, Users, Award, Target } from 'lucide-react';

export function History() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div className="prose prose-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Notre histoire</h3>
        <p className="text-gray-600 mb-6">
          EGEOD (Expert of Geospatial and Earth Observation Data) est née de la passion pour les technologies 
          de pointe et le potentiel qu'offrent les données géospatiales pour transformer le monde.
        </p>
        <p className="text-gray-600 mb-6">
          L'entreprise a été fondée avec une vision claire : mettre à disposition des outils et des solutions 
          innovantes capables de relever les défis environnementaux, économiques et sociaux. Notre parcours 
          a commencé par la conviction que l'observation de la Terre et l'analyse des données géospatiales 
          pouvaient offrir des réponses précises et impactantes dans un monde de plus en plus connecté et complexe.
        </p>
        <p className="text-gray-600">
          Depuis ses débuts, EGEOD s'est forgée une réputation d'excellence grâce à une expertise technique 
          pointue et une écoute attentive des besoins de ses clients. Notre équipe, composée de spécialistes 
          en géoinformatique, analyse de données et cartographie, travaille en étroite collaboration avec des 
          entreprises privées, des collectivités publiques, des ONG, des laboratoires et des universités.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <Globe2 className="h-8 w-8 text-blue-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Notre vision</h4>
          <p className="text-gray-600">
            Transformer les données géospatiales en solutions concrètes pour un monde plus durable.
          </p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <Users className="h-8 w-8 text-blue-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Notre équipe</h4>
          <p className="text-gray-600">
            Des experts passionnés en géoinformatique, analyse de données et cartographie.
          </p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <Award className="h-8 w-8 text-blue-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Notre excellence</h4>
          <p className="text-gray-600">
            Une réputation bâtie sur l'expertise technique et l'écoute client.
          </p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <Target className="h-8 w-8 text-blue-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Notre impact</h4>
          <p className="text-gray-600">
            Des solutions innovantes pour les défis environnementaux et sociaux.
          </p>
        </div>
      </div>
    </div>
  );
}