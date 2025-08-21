import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import LocationSection from './components/LocationSection';
import HighlightsSection from './components/HighlightsSection';
import FutureValueSection from './components/FutureValueSection';
import LocationHighlights from './components/LocationHighlightsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Enquirebtn from './components/Enquirebtn';

function App() {
  return (
    <div className="min-h-screen">

    <div>
      <img src="" alt="" />
    </div>

      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Location Highlights */}
      <LocationSection />

      {/* Key Stats Section */}
      <StatsSection />

      {/* Project Highlights */}
      <HighlightsSection />

      {/* Future Value Section */}
      <FutureValueSection />

     {/* Location Highlights */}
      <LocationHighlights />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />

      <Enquirebtn/>

      <ScrollToTop/>


    </div>
  );
}

export default App;