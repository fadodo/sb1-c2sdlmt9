import React from 'react';

export function ContactMap() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Notre localisation</h3>
      <div className="aspect-video rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.3794992661344!2d1.4663533!3d43.5725498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb7e8eeaaaab%3A0x1d4ddf7e02b8c89f!2s4%20Rue%20Hubertine%20Auclert%2C%2031400%20Toulouse!5e0!3m2!1sfr!2sfr!4v1647874587201!5m2!1sfr!2sfr"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="EGEOD Toulouse"
        ></iframe>
      </div>
    </div>
  );
}