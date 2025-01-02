import React from 'react';
import { MapPin, Phone, Mail, Calendar, FileDown } from 'lucide-react';
import { Button } from '../ui/Button';

export function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Informations de contact</h3>
      
      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-blue-600 mt-1" />
          <div>
            <p className="font-medium text-gray-900">Notre adresse</p>
            <p className="text-gray-600">4 Rue Hubertine Auclert<br />31400 Toulouse, France</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-medium text-gray-900">Téléphone</p>
            <a href="tel:+33758011183" className="text-gray-600 hover:text-blue-600">
              +33 7 58 01 11 83
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-medium text-gray-900">Email</p>
            <a href="mailto:contact@egeod.com" className="text-gray-600 hover:text-blue-600">
              contact@egeod.com
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Button variant="outline" className="w-full justify-start">
          <Calendar className="h-5 w-5 mr-2" />
          Prendre rendez-vous
        </Button>
        
        <Button variant="outline" className="w-full justify-start">
          <FileDown className="h-5 w-5 mr-2" />
          Télécharger notre brochure
        </Button>
      </div>
    </div>
  );
}