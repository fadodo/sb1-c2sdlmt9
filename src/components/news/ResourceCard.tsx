import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '../ui/Button';

interface ResourceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

export function ResourceCard({ Icon, title, description, buttonText, onClick }: ResourceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="outline" onClick={onClick} className="w-full">
        {buttonText}
      </Button>
    </div>
  );
}