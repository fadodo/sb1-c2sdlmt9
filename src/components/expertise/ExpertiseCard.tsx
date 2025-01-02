import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function ExpertiseCard({ Icon, title, description }: ExpertiseCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}