import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Waves, TreePine, Dumbbell, Users, Car, Shield, Wifi, Gamepad2 } from 'lucide-react';
// import {} from '../assets/pngs'

const AmenitiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const amenities = [
    {
      title: 'Swimming Pool',
      icon: Waves,
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Olympic-size swimming pool with separate kids pool'
    },
    {
      title: 'Landscaped Gardens',
      icon: TreePine,
      image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful gardens with walking trails and seating areas'
    },
    {
      title: 'Fitness Center',
      icon: Dumbbell,
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art gym with modern equipment'
    },
    {
      title: 'Clubhouse',
      icon: Users,
      image: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Community clubhouse for events and gatherings'
    },
    {
      title: 'Parking Area',
      icon: Car,
      image: 'https://images.pexels.com/photos/753876/pexels-photo-753876.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Covered parking with EV charging stations'
    },
    {
      title: '24/7 Security',
      icon: Shield,
      image: 'https://images.pexels.com/photos/8829562/pexels-photo-8829562.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Round-the-clock security with CCTV monitoring'
    }
  ];

  const facilitiesGrid = [
    { icon: Wifi, title: 'High-Speed Internet', description: 'Fiber optic connectivity' },
    { icon: Gamepad2, title: 'Kids Play Area', description: 'Safe playground equipment' },
    { icon: TreePine, title: 'Jogging Track', description: '1.5km dedicated track' },
    { icon: Users, title: 'Community Hall', description: 'Multi-purpose event space' },
    { icon: Car, title: 'Visitor Parking', description: 'Dedicated guest parking' },
    { icon: Shield, title: 'Intercom System', description: 'Video door phone facility' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % amenities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + amenities.length) % amenities.length);
  };

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">World-Class Amenities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury living with our comprehensive range of amenities designed 
            for comfort, recreation, and community living.
          </p>
        </div>

        {/* Amenities Carousel */}
        <div className="relative mb-16 max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <div key={index} className="min-w-full relative">
                    <div className="aspect-w-16 aspect-h-9 relative h-96">
                      <img
                        src={amenity.image}
                        alt={amenity.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="flex items-center mb-4">
                          <div className="bg-green-600 p-3 rounded-full mr-4">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <h3 className="text-3xl font-bold">{amenity.title}</h3>
                        </div>
                        <p className="text-lg text-gray-200">{amenity.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {amenities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>        
      </div>
    </section>
  );
};

export default AmenitiesSection;