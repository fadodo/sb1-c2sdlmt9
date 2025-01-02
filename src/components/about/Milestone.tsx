import React from 'react';

interface MilestoneProps {
  title: string;
  content: string;
  isLast: boolean;
}

export function Milestone({ title, content, isLast }: MilestoneProps) {
  return (
    <div className="relative pl-8">
      {!isLast && (
        <div className="absolute left-3 top-3 -bottom-8 w-px bg-blue-200" />
      )}
      <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-2 border-blue-500 bg-white" />
      <div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}