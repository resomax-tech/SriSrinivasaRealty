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
import { Helmet } from "react-helmet-async";


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
    <>
    <Helmet>
  <title>Residential Plots in Hyderabad | Vanasthali Hills | Nagole</title>

  <meta
    name="description"
    content="Discover premium residential plots at Vanasthali Hills, Nagole. Perfect for your dream home in Hyderabad’s prime location. Book a site visit today!"
  />

  <link rel="canonical" href="https://www.vanasthali9.com/" />

  {/* OpenGraph */}
  <meta property="og:url" content="https://www.vanasthali9.com/" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Residential Plots in Hyderabad | Vanasthali Hills | Nagole"
  />
  <meta
    property="og:description"
    content="Discover premium residential plots at Vanasthali Hills, Nagole. Perfect for your dream home in Hyderabad’s prime location. Book a site visit today!"
  />
  <meta
    property="og:image"
    content="https://www.vanasthali9.com/images/gallery3.avif"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="vanasthali9.com" />
  <meta property="twitter:url" content="https://www.vanasthali9.com/" />
  <meta
    name="twitter:title"
    content="Residential Plots in Hyderabad | Vanasthali Hills | Nagole"
  />
  <meta
    name="twitter:description"
    content="Discover premium residential plots at Vanasthali Hills, Nagole. Perfect for your dream home in Hyderabad’s prime location. Book a site visit today!"
  />
  <meta
    name="twitter:image"
    content="https://www.vanasthali9.com/images/gallery3.avif"
  />

  {/* JSON-LD Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.vanasthali9.com/",
          name: "Residential Plots in Hyderabad | Vanasthali Hills | Nagole",
          url: "https://www.vanasthali9.com/",
          description:
            "Discover premium residential plots at Vanasthali Hills, Nagole. Perfect for your dream home in Hyderabad’s prime location. Book a site visit today!",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://www.vanasthali9.com/#website",
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.vanasthali9.com/",
              },
            ],
          },
        },
        {
          "@type": "WebSite",
          "@id": "https://www.vanasthali9.com/#website",
          name: "Vanasthali Hills - Residential Plots in Hyderabad",
          url: "https://www.vanasthali9.com/",
          publisher: {
            "@type": "Organization",
            name: "Sri Srinivasa Realty",
          },
        },
        {
          "@type": "RealEstateProject",
          "@id": "https://www.vanasthali9.com/#project",
          name: "Vanasthali Hills",
          description:
            "Premium residential plots located in Nagole, Hyderabad. Ideal for building luxury, eco-friendly, and vastu-compliant homes in a prime growth zone.",
          url: "https://www.vanasthali9.com/",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nagole",
            addressRegion: "Hyderabad",
            addressCountry: "IN",
          },
          developer: {
            "@type": "Organization",
            name: "Sri Srinivasa Realty",
          },
          amenityFeature: [
            {
              "@type": "LocationFeatureSpecification",
              name: "Gated Community",
              value: "true",
            },
            {
              "@type": "LocationFeatureSpecification",
              name: "24/7 Security",
              value: "true",
            },
            {
              "@type": "LocationFeatureSpecification",
              name: "Green Open Spaces",
              value: "true",
            },
            {
              "@type": "LocationFeatureSpecification",
              name: "Prime Connectivity",
              value: "true",
            },
          ],
          image: ["https://www.vanasthali9.com/images/logo3.png"],
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://www.vanasthali9.com/#business",
          name: "Sri Srinivasa Realty",
          url: "https://www.vanasthali9.com/",
          description:
            "Real estate developer offering premium residential plots at Vanasthali Hills, Nagole, Hyderabad.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nagole",
            addressRegion: "Hyderabad",
            addressCountry: "IN",
          },
          areaServed: "Hyderabad",
          priceRange: "₹₹₹",
          telephone: "+91-7729922244",
        },
      ],
    })}
  </script>

    </Helmet>
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
    </>
  );
}
