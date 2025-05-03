import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About Avni</h3>
            <p className="text-gray-400 mb-4">
              An open-source platform empowering organizations to collect and manage field data for healthcare and governance projects.
            </p>
            <div className="flex space-x-4">
              <a href="#github" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#linkedin" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#mail" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#docs" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#tutorials" className="text-gray-400 hover:text-white transition-colors">Tutorials</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#github" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              </li>
              <li>
                <a href="#slack" className="text-gray-400 hover:text-white transition-colors">Slack Channel</a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#contribute" className="text-gray-400 hover:text-white transition-colors">Contribute</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-white transition-colors">Support</a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Avni. All rights reserved.
            </p>
            <p className="text-gray-400">
              Built with ❤️ by <a href="#samanvay" className="text-teal-400 hover:text-teal-300 transition-colors">Samanvay Foundation</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;