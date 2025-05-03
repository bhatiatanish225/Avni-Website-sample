import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Database, BarChart, ArrowRight } from 'lucide-react';

interface WorkflowStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
  isLast?: boolean;
  index: number;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ icon, title, description, step, isLast = false, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12"
    >
      <div className="flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl blur-lg opacity-20"></div>
          <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg">
            {icon}
          </div>
        </motion.div>
        
        {!isLast && (
          <div className="hidden md:block w-24 h-1 bg-gradient-to-r from-teal-200 to-transparent mx-4"></div>
        )}
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <span className="inline-block text-sm font-semibold text-teal-600 mb-2">Step {step}</span>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Workflow: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workflowSteps = [
    {
      icon: <Smartphone size={28} />,
      title: "Field Data Collection",
      description: "Empower field workers with our intuitive mobile app featuring offline capabilities. Collect data seamlessly, even in areas with limited connectivity.",
      step: 1
    },
    {
      icon: <Database size={28} />,
      title: "Smart Data Processing",
      description: "Leverage our configurable backend to validate, process, and organize data. Custom workflows ensure data quality and program compliance.",
      step: 2
    },
    {
      icon: <BarChart size={28} />,
      title: "Actionable Insights",
      description: "Transform raw data into meaningful insights with powerful analytics and visualization tools. Make informed decisions that drive impact.",
      step: 3,
      isLast: true
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            How{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Avni Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From field collection to actionable insights, Avni streamlines your entire data workflow with powerful, yet easy-to-use tools.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={index}
              index={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={step.step}
              isLast={step.isLast}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            See Avni in Action
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default Workflow;