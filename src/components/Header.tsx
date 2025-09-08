// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Building, MapPin, Star, Phone } from 'lucide-react';
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About Project', href: '#about', icon: Building },
    { name: 'Project Highlights', href: '#whyNagole', icon: Star },
    { name: 'Location', href: '#location', icon: MapPin }
  ];

  const scrollToSection = (href: string) => {
    const go = () => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    };

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: href } });
    } else {
      go();
    }
  };

  return (
    <nav className={`navbar-custom fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between gap-8 items-center">
          <div className="flex items-center space-x-2">
            <img src={'/images/logo3.png'} alt="logo" fetchPriority='high' loading='eager' decoding='async' className='h-16' />
          </div>

          <div className="hidden lg:flex items-center gap-6 space-x-10">
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 hover:scale-95 transition-transform ease-in-out duration-500 font-medium"
              >
                <span>{item.name}</span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary-custom flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Enquire Now</span>
            </button>
          </div>

          <button
            className="lg:hidden overflow-hidden transition-all duration-500 ease-in-out"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-green-600">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-3 hover:text-green-200 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-green-700"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary-custom mt-4 flex items-center justify-center space-x-2 bg-white text-green-700 hover:bg-gray-100"
              >
                <Phone className="h-4 w-4" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
