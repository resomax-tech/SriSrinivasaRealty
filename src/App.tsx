import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import LocationSection from "./components/LocationSection";
import HighlightsSection from "./components/HighlightsSection";
import LocationHighlights from "./components/LocationHighlightsSection";
import AmenitiesSection from "./components/AmenitiesSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Enquirebtn from "./components/Enquirebtn";
import { TermsPage } from "./pages/terms";
import { DisclaimerPage } from "./pages/disclaimer";
function App() {
  return (
    <Router>
      <Routes>
        {/* Main Website */}
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Header />
              <HeroSection />
              <AboutSection />
              <LocationSection />
              <StatsSection />
              <AmenitiesSection />
              <HighlightsSection />
              <LocationHighlights />
              <ContactForm />
              <Footer />
              <Enquirebtn />
              <ScrollToTop />
            </div>
          }
        />

        {/* Terms & Conditions Page */}
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
