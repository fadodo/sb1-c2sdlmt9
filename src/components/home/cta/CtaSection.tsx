import React from 'react';
import { Section } from '../../ui/Section';
import { Button } from '../../ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CtaSection() {
  return (
    <Section id="cta" className="bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Prêt à transformer vos données en valeur ?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Nos experts sont là pour vous accompagner dans votre transformation data-driven.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" variant="primary" className="bg-[#9b87f5] hover:bg-[#8670f4]">
              Contactez-nous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Découvrir nos services
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}