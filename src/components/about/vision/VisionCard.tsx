import React from 'react';
import { LucideIcon } from 'lucide-react';

interface VisionCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function VisionCard({ Icon, title, description }: VisionCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}