import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Earth from space"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Vos données géospatiales,<br />notre expertise
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Nous transformons vos données en informations stratégiques pour vous aider à prendre les meilleures décisions.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#contact"
              className="bg-[#9b87f5] hover:bg-[#8670f4]"
              
            >
              Contactez nos experts
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="text-lg font-semibold leading-6 text-white hover:text-gray-300 transition-colors"
            >
              Découvrir nos solutions <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}