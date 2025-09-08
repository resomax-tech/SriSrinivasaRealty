// src/pages/HomePage.tsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import LocationSection from "../components/LocationSection";
import HighlightsSection from "../components/HighlightsSection";
import LocationHighlights from "../components/LocationHighlightsSection";
import AmenitiesSection from "../components/AmenitiesSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Enquirebtn from "../components/Enquirebtn";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      // wait for sections to mount
      requestAnimationFrame(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        // drop state so back/forward doesn’t re-trigger scroll
        navigate(location.pathname, { replace: true, state: {} });
      });
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-24">
        <HeroSection />
        <AboutSection />
        <LocationSection />
        <StatsSection />
        <AmenitiesSection />
        <HighlightsSection />
        <LocationHighlights />
        <ContactForm />
      </main>
      <Footer />
      <Enquirebtn />
      <ScrollToTop />
    </div>
  );
}
