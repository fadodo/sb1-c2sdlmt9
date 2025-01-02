import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users } from 'lucide-react';
import { TeamMemberCard } from '../TeamMemberCard';
import { teamMembers } from '../data/teamMembers';

export function TeamSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Users className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">
          {t('about.team.title')}
        </h3>
      </div>

      <p className="text-gray-600 mb-8">
        {t('about.team.description')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}