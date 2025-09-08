import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Project', href: '#about' },
    { name: 'Project Highlights', href: '#whyNagole' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: href } });
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-custom text-white">
      <div className="container mx-auto px-4 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 md:gap-40 justify-between">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2">
              <img src={'/images/logo2.jpg'} alt="" className='h-40' />
            </div>
            <p className="text-white mb-6 leading-relaxed text-justify mt-4">
              Experience the true joy of living closer to nature, where every moment is filled with fresh air, serene landscapes, and the harmony of a greener lifestyle.
            </p>
            <div className="flex space-x-4">
              <a className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300 cursor-pointer" href='https://www.facebook.com/profile.php?id=61580284165873' target='_blank'>
                <Facebook className="h-5 w-5" />
              </a>

              <a className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300 cursor-pointer" href='https://www.instagram.com/srisrinivasa.realty' target='_blank'>
                <Instagram className="h-5 w-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className='grid grid-cols-2 gap-4 '>
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


            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">

                <div className="flex items-center space-x-3">
                  <div className="text-white flex flex-col gap-3">
                    <p>+91 7729922244</p>
                    <p>+91 8008800778</p>
                    <p>+91 7729822244</p>
                  </div>
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
                © 2025 Sri Srinivasa Realty. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-white transform transition-all hover:scale-105 duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white transform transition-all hover:scale-105 duration-300">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-white-600">
            <p className="text-white text-xs leading-relaxed text-justify">
              <strong>Disclaimer:</strong> The information, layouts, images, and specifications provided on this landing page are for general informational purposes only and are subject to change without prior notice.
              All project details, and visuals are indicative and for illustrative purposes only. They do not constitute a legal offer, contract, or warranty of any kind. Actual products, materials, dimensions, and
              specifications may vary. Prospective buyers are advised to verify all details, including approvals, plans, and project specifications, with the developer/authorized sales team before making any purchase or investment decision.
              The developer reserves the right to make modifications as deemed necessary.
            </p>
            <p className="text-white text-sm mb-4 md:mb-0 mt-6">
              © Developed by{" "}
              <a
                href="https://resomaxtech.com/"
                target="_blank"
                rel="noopener noreferrer" // security best practice
                className="text-white hover:underline"
              >
                ResoMax Technologies
              </a>
              .
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;