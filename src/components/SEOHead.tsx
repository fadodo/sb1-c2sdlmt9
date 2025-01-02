import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
}

export function SEOHead({ title, description, path }: SEOHeadProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const baseUrl = 'https://www.egeod.com'; // Replace with your domain

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* hreflang tags */}
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr${path}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${path}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${baseUrl}/${currentLang}${path}`} />
      <meta property="og:locale" content={currentLang} />
      
      {/* Current language */}
      <html lang={currentLang} />
    </Helmet>
  );
}