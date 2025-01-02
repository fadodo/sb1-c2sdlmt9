import React from 'react';
import { useTranslation } from 'react-i18next';
import { History } from 'lucide-react';

export function HistorySection() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-100 rounded-lg">
          <History className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">
          {t('about.history.title')}
        </h3>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          {t('about.history.intro')}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="EGEOD History"
            className="rounded-lg object-cover w-full h-64"
          />
          <div className="space-y-4">
            <div className="relative pl-8 border-l-2 border-blue-100">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900">2025</h4>
              <p className="text-gray-600">{t('about.history.milestone1')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}