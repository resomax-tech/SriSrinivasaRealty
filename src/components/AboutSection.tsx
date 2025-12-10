import React from 'react';
import { Home, MapPin, Droplets } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title">Your Dream Home for the Future</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury living in our thoughtfully designed plots, flats and villas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="fade-in">
            <div className="relative">
            <ImageWithFallback 
              avif={"/images/gallery3.avif"} 
              webp={"/images/gallery3.webp"} 
              fallback={"/images/gallery3.png"} 
              fetchpriority="high"
              loading='eager'
              decoding="async"
              alt="vastu compliant villas in hyderabad" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />

              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2 text_shadow">Crafting tomorrow's communities with today's greenest building practices.</h3>
              </div>
            </div>

          </div>

          {/* Content */}
          <div className="fade-in">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Home className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Living Spaces</h3>
                  <p className="text-gray-600">
                    Spacious Plots, Flats and Villas ranging from 500, 1000, 2000 sq.yds,
                    eco-friendly features for sustainable living.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Droplets className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Green Lifestyle</h3>
                  <p className="text-gray-600">
                    Lush greenery, rainwater harvesting, and ample open spaces for a healthier environment.
                  </p>
                </div>
              </div>



              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Location</h3>
                  <p className="text-gray-600">
                    Located in the emerging growth corridor with excellent connectivity
                    to metro stations, ORR, educational institutions, and healthcare facilities.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;