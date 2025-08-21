import React from 'react';
import { MapPin, Car, GraduationCap, Heart, Plane, Leaf } from 'lucide-react';

const LocationSection = () => {
  const locationFeatures = [
    {
      icon: Car,
      title: 'Excellent Connectivity',
      description: 'Connected to major roads & ORR for easy commute.',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: GraduationCap,
      title: 'Educational Hub',
      description: 'Popular schools and colleges nearby (e.g., Chirec International, Meridian, Narayana).',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: Heart,
      title: 'Healthcare Facilities',
      description: 'Close to hospitals and shopping areas.',
      color: 'bg-red-100 text-red-700'
    },
    {
      icon: Leaf,
      title: 'Weekend Getaways',
      description: 'Green and natural surroundings for healthy living.',
      color: 'bg-green-100 text-green-700'
    }
  ];

  return (
    <section id="whyNagole" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Nagole?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nestled amidst greenery, offering a serene environment with refreshing air and peaceful surroundings, while keeping you close to city conveniences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {locationFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="location-card fade-in">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${feature.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LocationSection;