import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-between pt-32 lg:pt-40 pb-16 lg:pb-32 gap-12"
        >
          <motion.div variants={itemVariants} className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Field Data into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Social Impact
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Empower your organization with our open-source platform for seamless field data collection, management, and analysis in healthcare and governance projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#explore"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
              >
                Explore Avni
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-50 transition-all duration-300 flex items-center justify-center"
              >
                Watch Demo
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
                alt="Healthcare worker using Avni in the field"
                className="w-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200 rounded-full opacity-20"></div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-gray-600"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-teal-600">200+</p>
            <p className="text-sm">Organizations</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-teal-600">21</p>
            <p className="text-sm">Countries</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-teal-600">1M+</p>
            <p className="text-sm">Data Points</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;