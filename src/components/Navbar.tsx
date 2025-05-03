import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              <span className="text-teal-600">Avni</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About</a>
            <a href="#use-cases" className="text-gray-700 hover:text-teal-600 transition-colors">Use Cases</a>
            <a href="#docs" className="text-gray-700 hover:text-teal-600 transition-colors">Docs</a>
            <a href="#blog" className="text-gray-700 hover:text-teal-600 transition-colors">Blog</a>
            <a 
              href="https://github.com/avniproject" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-1"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
            <a 
              href="#get-started" 
              className="bg-teal-600 text-white px-5 py-2 rounded-md hover:bg-teal-700 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-gray-700 hover:text-teal-600 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#use-cases" 
            className="text-gray-700 hover:text-teal-600 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Use Cases
          </a>
          <a 
            href="#docs" 
            className="text-gray-700 hover:text-teal-600 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Docs
          </a>
          <a 
            href="#blog" 
            className="text-gray-700 hover:text-teal-600 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </a>
          <a 
            href="https://github.com/avniproject" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 hover:text-teal-600 transition-colors py-2 flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-teal-600 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a 
            href="#get-started" 
            className="bg-teal-600 text-white px-5 py-3 rounded-md hover:bg-teal-700 transition-colors text-center mt-2"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;