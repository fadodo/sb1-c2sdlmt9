import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-earth-seen-from-space-4069-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Experts en Data & Géospatial
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Transformez vos données en avantage stratégique. De l'analyse prédictive aux solutions 
            géospatiales, nous vous accompagnons dans votre transformation data-driven.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/services">
              <Button
                size="lg"
                variant="primary"
                className="bg-[#9b87f5] hover:bg-[#8670f4]"
              >
                Découvrez nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Parlez à un expert 
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}