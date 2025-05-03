import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Import fonts
import './index.css';

function App() {
  // Update the page title
  useEffect(() => {
    document.title = 'Avni | Powering Field Data for Social Impact';
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <UseCases />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;