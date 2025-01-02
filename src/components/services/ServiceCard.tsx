import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  path?: string;
}

export function ServiceCard({ Icon, title, description, features, path }: ServiceCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant="outline" 
        className="w-full"
        onClick={handleClick}
      >
        En savoir plus
      </Button>
    </div>
  );
}