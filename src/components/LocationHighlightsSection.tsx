import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const highlights = [
  {
    title: "Major Land Marks",
    content: [
      "Nagole - 5Km",
      "Nagole Metro - 6Km",
      "LB Nagar Metro - 7Km",
      "Dilsukhnagar - 7Km",
    ],
  },
  {
    title: "Education",
    content: [
      "Unicent School",
      "Indu International School",
      "Jhonson Grammar High School",
      "Shreyas Engineering College",
      "Pallavi Engineering College",
    ],
  },
  {
    title: "Hospitals",
    content: [
      "Kamineni Hospital",
      "Supraja Hospital",
      "OMNI Hospital",
      "SLMS Hospital",
      "Sunrays Hospital"
    ],
  },
  {
    title: "Connectivity",
    content: [
      "Outer & Inner Ring Road",
      "Seamless access to Educational Institutions",
      "Smooth connectivity to Shopping & Entertainment Zones"
    ],
  }
];

const LocationHighlights = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Accordion */}
        <div>
          <div className="text-center mb-16">
            <h2 className="section-title">Location Highlights</h2>
            <p className="text-lg text-gray-600">
              When it comes to land, location is everything. Our villa community is
              located in one of Hyderabad's fastest-growing hubs, offering
              unmatched connectivity and lifestyle advantages.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg bg-white shadow-sm overflow-hidden border-l-4 border-green-900"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-100"
                >
                  {item.title}
                  {openIndex === index ? (
                    <Minus size={20} className="text-green-600" />
                  ) : (
                    <Plus size={20} className="text-green-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-sm text-gray-600 space-y-2">
                    {item.content.map((point, i) => (
                      <p key={i}>• {point}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Map Image */}
        <div className="relative flex justify-center l-map">
          <iframe className="rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15231.600998833821!2d78.60432913596652!3d17.36853226570289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9fa0f847120d%3A0xf54fa3d3d147a153!2sVanasthali%20hills%2C%20Hyderabad%2C%20Telangana%20500068!5e0!3m2!1sen!2sin!4v1755774292134!5m2!1sen!2sin" width="600" height="450"></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationHighlights;
