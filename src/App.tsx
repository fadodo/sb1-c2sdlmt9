import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ExpertisePage from './pages/ExpertisePage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import DataAnalysisPage from './pages/services/DataAnalysisPage';
import GeospatialDataPage from './pages/services/GeospatialDataPage';
import ArtificialIntelligencePage from './pages/services/ArtificialIntelligencePage';
import DataConsultingPage from './pages/services/DataConsultingPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/data-analysis" element={<DataAnalysisPage />} />
            <Route path="/services/geospatial-data" element={<GeospatialDataPage />} />
            <Route path="/services/artificial-intelligence" element={<ArtificialIntelligencePage />} />
            <Route path="/services/data-consulting" element={<DataConsultingPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}