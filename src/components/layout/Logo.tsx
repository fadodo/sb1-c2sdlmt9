import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  return (
    <Link 
      to="/" 
      className={`flex items-center gap-3 group ${className}`}
    >
      <div className="relative">
        <img 
          src="/src/logoEGEOD1.png" 
          alt="EGEOD Logo" 
          className={`${sizes[size]} w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-md`}
        />
        <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-gray-900">EGEOD</span>
          <span className="text-xs text-gray-600">Expert of Geospatial Data</span>
        </div>
      )}
    </Link>
  );
}