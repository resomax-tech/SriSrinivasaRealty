import React from 'react';
import { Home, Award, MapPin, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title">Your Dream Home for the Future</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury living in our thoughtfully designed flats and villas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="fade-in">
            <div className="relative">
              <img
                src={"/images/bg2.png"}
                alt="Luxury Flat/Villa"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Designed for contemporary lifestyle</h3>
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
                    Spacious flats and villas ranging from 500-2000 sq. yds,
                     eco-friendly features for sustainable living.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">
                    Built with premium materials and international standards, 
                    ensuring durability and aesthetics that stand the test of time.
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
                    to educational institutions, and healthcare facilities.
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