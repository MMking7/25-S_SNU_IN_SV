import React from 'react';
import './HeroSection.css';
import backgroundImage from '../assets/pet-hero-bg.jpg';

function HeroSection() {
  return (
    <section id="home" className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Feeling Burnt Out? FineMate Finds Your Lost Joy</h1>
          <p className="hero-subtitle">
            Our AI curates activities perfectly suited to your personality and current mood, 
            breathing new life into your tired routine
          </p>
          <button className="hero-button">Start Your Personalized Journey</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;