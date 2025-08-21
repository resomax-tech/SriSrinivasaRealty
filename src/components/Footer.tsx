import React from 'react';
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Project', href: '#about' },
    { name: 'Project Highlights', href: '#whyNagole' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  const projectInfo = [
    'RERA Registration: TG/RERA/PROJ/2024/001234',
    'Clear Title Properties',
    '100% Vastu Compliant',
    'DTCP Approved Layouts',
    'Bank Loan Facility Available'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-custom text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Building className="h-8 w-8" />
              <h3 className="text-2xl font-bold">Sri Srinivas Reality</h3>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              Building dreams with premium flats and villas in the heart of the emerging 
              high-growth corridor. Experience luxury living with world-class amenities.
            </p>
            <div className="flex space-x-4">
              <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                <Youtube className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white transform transition-all hover:scale-105 duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Information */}
          

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                <div className="text-white">
                  <p>Plot No. 123, Road No. 45</p>
                  <p>Hyderabad, Telangana - 500032</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white" />
                <div className="text-white">
                  <p>+91 7729922244</p>
                  <p>+91 8008800778</p>
                  <p>+91 7729822244</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white" />
                <div className="text-white">
                  <p>info@srisrinivasrealty.com</p>
                  <p>sales@srisrinivasrealty.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white text-sm">
                © 2025 Sri Srinivas Reality. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white transform transition-all hover:scale-105 duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white transform transition-all hover:scale-105 duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="text-white transform transition-all hover:scale-105 duration-300">
                Disclaimer
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-white-600">
            <p className="text-white text-xs leading-relaxed">
              <strong>Disclaimer:</strong> This website is for providing information only and does not constitute 
              an offer or solicitation to sell or buy any real estate project. All images, layouts, and other 
              materials shown on this website are artistic impressions only and are not to scale. The developer 
              reserves the right to make changes in elevation, specifications, and prices without prior notice. 
              All dimensions mentioned are approximate. For more details, please contact our sales team.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;