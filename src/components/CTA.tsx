import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join 200+ organizations across 21 countries
        </h2>
        <p className="text-teal-100 max-w-2xl mx-auto mb-8 text-lg">
          Be part of a growing community making a difference through better data collection and management.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#documentation" 
            className="bg-white text-teal-700 px-6 py-3 rounded-md text-center font-medium hover:bg-teal-50 transition-colors"
          >
            View Documentation
          </a>
          <a 
            href="#community" 
            className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-md text-center font-medium hover:bg-teal-500 transition-colors"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;