import React from 'react';
import { HistoryTimeline } from './HistoryTimeline';
import { HistoryIntro } from './HistoryIntro';

export function CompanyHistory() {
  return (
    <div className="space-y-8">
      <HistoryIntro />
      <HistoryTimeline />
    </div>
  );
}