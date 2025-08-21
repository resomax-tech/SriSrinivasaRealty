import React from 'react';
import { TrendingUp, Calculator, MapPin, Star } from 'lucide-react';

const FutureValueSection = () => {
  const plotCategories = [
    {
      size: '300-350 Sq. Yds',
      type: 'Compact Villas',
      features: ['2-3 BHK', 'Garden space', 'Car parking'],
      ideal: 'Small families',
      price: 'Starting from ₹75L',
      growth: '+15% annually'
    },
    {
      size: '400-450 Sq. Yds',
      type: 'Premium Villas',
      features: ['3-4 BHK', 'Spacious layout', '2 car parking'],
      ideal: 'Growing families',
      price: 'Starting from ₹95L',
      growth: '+18% annually',
      popular: true
    },
    {
      size: '500+ Sq. Yds',
      type: 'Luxury Villas',
      features: ['4-5 BHK', 'Premium amenities', 'Large garden'],
      ideal: 'Luxury seekers',
      price: 'Starting from ₹1.2Cr',
      growth: '+20% annually'
    }
  ];

  return (
    <section className="py-5 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">The Future is Here</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Invest in the next high-growth corridor and watch your property value appreciate. 
            Choose from our range of plot sizes designed for different lifestyles.
          </p>
          
          {/* Investment Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">High Appreciation</h3>
              <p className="text-sm text-gray-600">15-20% annual growth expected</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Calculator className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Easy EMI Options</h3>
              <p className="text-sm text-gray-600">Flexible payment plans available</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Prime Location</h3>
              <p className="text-sm text-gray-600">Infrastructure development ongoing</p>
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
};

// Import CheckCircle from lucide-react
import { CheckCircle } from 'lucide-react';

export default FutureValueSection;