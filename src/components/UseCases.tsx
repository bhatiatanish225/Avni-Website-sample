import React from 'react';
import { Heart, Settings as Lungs, Droplet, School } from 'lucide-react';

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 py-6 px-6 flex justify-center">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: <Heart size={36} />,
      title: "Maternal Health Monitoring",
      description: "Track prenatal care, monitor high-risk pregnancies, and ensure proper postnatal follow-ups for mothers and newborns."
    },
    {
      icon: <Lungs size={36} />,
      title: "TB Tracking & Treatment",
      description: "Monitor tuberculosis cases, track treatment adherence, and manage follow-up visits for patients in remote areas."
    },
    {
      icon: <Droplet size={36} />,
      title: "Water Sanitation Programs",
      description: "Collect water quality data, track access to clean water, and monitor sanitation infrastructure in communities."
    },
    {
      icon: <School size={36} />,
      title: "Education Outreach",
      description: "Track student enrollment, monitor attendance, and assess educational outcomes in underserved communities."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="use-cases">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Use Case Highlights
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover how organizations are using Avni to make a difference in communities around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard 
              key={index} 
              icon={useCase.icon} 
              title={useCase.title} 
              description={useCase.description} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#more-cases" 
            className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
          >
            View more use cases
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UseCases;