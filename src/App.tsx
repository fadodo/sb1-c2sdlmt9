import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useLanguageRedirect } from './hooks/useLanguageRedirect';
import Header from './components/Header';
import { Footer } from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ExpertisePage from './pages/ExpertisePage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

function AppContent() {
  useLanguageRedirect();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/:lang" element={<HomePage />} />
          <Route path="/:lang/about" element={<AboutPage />} />
          <Route path="/:lang/services" element={<ServicesPage />} />
          <Route path="/:lang/expertise" element={<ExpertisePage />} />
          <Route path="/:lang/news" element={<NewsPage />} />
          <Route path="/:lang/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/fr" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;