import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DestinationsSection from './components/DestinationsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <ServicesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default HomePage;  