import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Leaf, Brain } from 'lucide-react';

export function VisionSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Target className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">
          {t('about.vision.title')}
        </h3>
      </div>

      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-600">
          {t('about.vision.description')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="h-6 w-6 text-blue-600" />
            <h4 className="text-xl font-semibold text-gray-900">
              {t('about.vision.sustainable.title')}
            </h4>
          </div>
          <p className="text-gray-600">
            {t('about.vision.sustainable.description')}
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="h-6 w-6 text-blue-600" />
            <h4 className="text-xl font-semibold text-gray-900">
              {t('about.vision.smart.title')}
            </h4>
          </div>
          <p className="text-gray-600">
            {t('about.vision.smart.description')}
          </p>
        </div>
      </div>
    </div>
  );
}