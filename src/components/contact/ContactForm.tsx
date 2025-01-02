import React, { useState } from 'react';
import { FileUp, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation d'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert('Message envoyé avec succès !');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nom"
          type="text"
          placeholder="Votre nom"
          required
        />
        <Input
          label="Entreprise"
          type="text"
          placeholder="Votre entreprise"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email"
          type="email"
          placeholder="votre@email.com"
          required
        />
        <Input
          label="Téléphone"
          type="tel"
          placeholder="Votre numéro"
        />
      </div>

      <Textarea
        label="Votre message"
        placeholder="Décrivez votre projet ou votre besoin..."
        rows={4}
        required
      />

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
          <FileUp className="h-5 w-5 text-gray-500" />
          <span className="text-sm text-gray-700">Joindre un fichier</span>
          <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
        </label>
        <span className="text-sm text-gray-500">PDF, DOC jusqu'à 10MB</span>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        <Send className="h-5 w-5 mr-2" />
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>
    </form>
  );
}