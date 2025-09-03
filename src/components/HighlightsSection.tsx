import React from 'react';
import { Leaf, Trees, Mountain, Sun} from 'lucide-react';

const HighlightsSection = () => {
  const highlights = [
    {
      icon: Trees,
      title: 'Prime Forest-Side Location',
      description: 'Nestled amidst lush greenery, offering a tranquil escape in the heart of nature.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Design with 100% Vastu',
      description: 'Sustainable construction with green building practices and aligned with vastu principles to promote harmony, health & prosperity'
    },
    {
      icon: Mountain,
      title: 'Panaromic Forest Views',
      description: 'Enjoy uninterrupted 360° views of dense forests and natural landscapes from every room.'
    },
    {
      icon: Sun,
      title: 'Natural Light & Ventilation',
      description: 'Windows and skylights allow abundant daylight and fresh air circulation.'
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Project Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes our flats and villas stand out from the rest.
            Every detail is crafted for your comfort and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="highlight-item group">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-2 rounded-full group-hover:bg-gray-200 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-black group-hover:text-green-700 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-black">Ready to Experience Premium Living?</h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of families who have already chosen Vansthali Hills & Estates for their dream home.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary-custom text-lg px-8 py-3"
            >
              Schedule a Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;