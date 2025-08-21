import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Home, Maximize, Building2 } from 'lucide-react';

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: MapPin,
      number: 400,
      label: 'Acres of Land',
    },
    {
      icon: Home,
      number: 'Premium Flats',
      label: "2,3,4 BHK",
    },
    {
      icon: Maximize,
      number: "Plots",
      label: '500-2000 sq.yds',
    },
    {
      icon: Building2,
      number: "Villas",
      label: 'Premium',
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Project Overview</h2>
          <p className="text-xl text-gray-600">
            Key statistics that define our premium development
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center px-0 sm:px-36">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="stats-card w-full max-w-[220px] text-center bg-white shadow-md rounded-xl"
              >
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-green-700" />
                </div>
                <h2 className="counter-animation text-lg md:text-3xl font-bold break-words">
                  {stat.number}
                </h2>                  
                <h3 className="text-sm md:text-base font-semibold mt-2 text-black">
                  {stat.label}
                </h3>
              </div>
            );
          })}
        </div>


      </div>
    </section>

  );
};

export default StatsSection;