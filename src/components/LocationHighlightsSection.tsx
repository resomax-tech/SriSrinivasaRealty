import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const highlights = [
  {
    title: "Major Land Marks",
    content: [
      "Nagole - 5Km",
      "Nagole Metro - 7Km",
      "LB Nagar Metro - 8Km",
      "Dilsukhnagar - 8Km",
    ],
  },
  {
    title: "Education",
    content: [
      "Unicent School",
      "Indu International School",
      "Shreyas Engineering College",
      "Pallavi Engineering College",
    ],
  },
  {
    title: "Hospitals",
    content: [
      "Kamineni Hospital",
      "Supraja Hospitals",
    ],
  },
  {
    title: "Connectivity",
    content: [
      "Outer Ring Road",
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
          <img
            src="/images/route-map.jpg"
            alt="Location Map"
            className="rounded-lg shadow-lg border"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationHighlights;
