import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WifiOff, Layers, Languages, ShieldCheck, Smartphone, Link2 } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-2xl mb-6 w-14 h-14 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <WifiOff size={24} />,
      title: "Offline Support",
      description: "Seamlessly collect data without internet access. Automatic sync when connection is restored, ensuring no data loss in remote areas."
    },
    {
      icon: <Layers size={24} />,
      title: "Modular Configuration",
      description: "Build custom forms and workflows without coding. Flexible architecture adapts to your unique program needs."
    },
    {
      icon: <Languages size={24} />,
      title: "Multilingual Interface",
      description: "Break language barriers with support for multiple languages. Reach diverse communities effectively."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Role-Based Access",
      description: "Ensure data security with granular permissions. Control access levels for different team roles and responsibilities."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Web + Android Support",
      description: "Access your data anywhere. Unified experience across web browsers and Android devices for maximum flexibility."
    },
    {
      icon: <Link2 size={24} />,
      title: "Integration Friendly",
      description: "Connect seamlessly with other systems. RESTful APIs and flexible data exchange workflows for ecosystem integration."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Powerful Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Field Data Collection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Avni combines flexibility, ease of use, and powerful capabilities to support your data collection needs in any environment.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default Features;