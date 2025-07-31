import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import ValuePropositionSection from './components/ValuePropositionSection';
import FeaturesSection from './components/FeaturesSection';
import TrustSection from './components/TrustSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <FeaturesSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;