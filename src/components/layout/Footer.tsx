import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ArrowRight,
  Globe 
} from 'lucide-react';

export function Footer() {
  const navigation = {
    solutions: [
      { name: 'Analyse de Données', href: '/services#data-analysis' },
      { name: 'Données Géospatiales', href: '/services#geospatial' },
      { name: 'Intelligence Artificielle', href: '/services#ai' },
      { name: 'Consulting Data', href: '/services#consulting' },
    ],
    company: [
      { name: 'À propos', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Expertise', href: '/expertise' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Blog', href: '/news#blog' },
      { name: 'Webinaires', href: '/news#webinars' },
      { name: 'Ressources gratuites', href: '/news#resources' },
    ],
    social: [
      { name: 'Facebook', icon: Facebook, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
    ],
  };

  return (
    <footer className="bg-white border-t shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>4 Rue Hubertine Auclert<br />31400 Toulouse, France</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <a href="tel:+33758011183" className="hover:text-blue-600 transition-colors">
                  +33 7 58 01 11 83
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <a href="mailto:contact@egeod.com" className="hover:text-blue-600 transition-colors">
                  contact@egeod.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <a href="https://www.egeod.com" className="hover:text-blue-600 transition-colors">
                  www.egeod.com
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Ressources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} EGEOD. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}