import React, { useState } from 'react';
import { ZoomIn, Download, MapPin, Home, TreePine, Car } from 'lucide-react';

const MasterPlanSection = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const masterPlanFeatures = [
    {
      icon: Home,
      title: 'Residential Plots',
      description: '200+ villa plots ranging from 300-500 sq. yds',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: TreePine,
      title: 'Green Spaces',
      description: '40% of total area dedicated to landscaping',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: Car,
      title: 'Road Network',
      description: '30ft & 40ft wide internal roads with street lighting',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: MapPin,
      title: 'Central Amenities',
      description: 'Clubhouse, parks, and recreational facilities',
      color: 'bg-orange-100 text-orange-700'
    }
  ];

  const phases = [
    {
      phase: 'Phase 1',
      plots: '80 Plots',
      status: 'Ready for Possession',
      completion: '100%'
    },
    {
      phase: 'Phase 2',
      plots: '75 Plots',
      status: 'Under Development',
      completion: '60%'
    },
    {
      phase: 'Phase 3',
      plots: '65 Plots',
      status: 'Launching Soon',
      completion: '20%'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Master Plan Overview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our thoughtfully designed master plan that balances modern living 
            with natural landscapes and optimal space utilization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Master Plan Image */}
          <div className="fade-in">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Master Plan Layout"
                className={`w-full h-96 object-cover transition-transform duration-300 ${
                  isZoomed ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Overlay Controls */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300"
                >
                  <ZoomIn className="h-5 w-5 text-gray-700" />
                </button>
                <button className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300">
                  <Download className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              {/* Master Plan Title */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-2">Sri Srinivas Reality Layout</h3>
                <p className="text-gray-200">50+ Acres • 200+ Plots • Premium Amenities</p>
              </div>
            </div>

            {/* Download Master Plan */}
            <div className="mt-6 text-center">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary-custom flex items-center space-x-2 mx-auto"
              >
                <Download className="h-4 w-4" />
                <span>Download Master Plan</span>
              </button>
            </div>
          </div>

          {/* Master Plan Details */}
          <div className="fade-in space-y-8">
            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">Master Plan Highlights</h3>
              <div className="space-y-6">
                {masterPlanFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${feature.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-black">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Development Phases */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">Development Phases</h3>
              <div className="space-y-4">
                {phases.map((phase, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg text-black">{phase.phase}</h4>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {phase.completion}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Total Plots:</span>
                        <span className="font-medium ml-2 text-black">{phase.plots}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Status:</span>
                        <span className="font-medium ml-2 text-black">{phase.status}</span>
                      </div>
                    </div>
                    <div className="mt-3 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: phase.completion }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-4 text-black">Project Specifications</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Total Area:</span>
                  <span className="font-medium ml-2 text-black">50+ Acres</span>
                </div>
                <div>
                  <span className="text-gray-600">Total Plots:</span>
                  <span className="font-medium ml-2 text-black">200+</span>
                </div>
                <div>
                  <span className="text-gray-600">Plot Sizes:</span>
                  <span className="font-medium ml-2 text-black">300-500 Sq.Yds</span>
                </div>
                <div>
                  <span className="text-gray-600">Green Area:</span>
                  <span className="font-medium ml-2 text-black">15 Acres</span>
                </div>
                <div>
                  <span className="text-gray-600">Road Width:</span>
                  <span className="font-medium ml-2 text-black">30ft - 40ft</span>
                </div>
                <div>
                  <span className="text-gray-600">Amenities:</span>
                  <span className="font-medium ml-2 text-black">5 Acres</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterPlanSection;