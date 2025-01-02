import React from 'react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { ContactMap } from './ContactMap';

export function ContactSection() {
  return (
    <Section id="contact" className="bg-gray-50">
      <SectionTitle 
        title="Contactez-nous" 
        subtitle="Notre équipe est à votre écoute pour répondre à vos besoins spécifiques" 
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <ContactForm />
        </div>
        <div className="space-y-8">
          <ContactInfo />
          <ContactMap />
        </div>
      </div>
    </Section>
  );
}