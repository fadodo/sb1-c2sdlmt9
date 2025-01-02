import React from 'react';
import { useTranslation } from 'react-i18next';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  const { t } = useTranslation();
  
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
        <h4 className="text-xl font-semibold text-gray-900">
          {t(title)}
        </h4>
      </div>
      <p className="text-gray-600">
        {t(description)}
      </p>
    </div>
  );
}