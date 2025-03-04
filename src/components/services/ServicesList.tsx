import React from 'react';
import { ServiceCard } from './ServiceCard';
import { servicesList } from './servicesList';

export function ServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {servicesList.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}