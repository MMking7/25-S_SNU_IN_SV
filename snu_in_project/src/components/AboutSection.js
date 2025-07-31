import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section id="personality" className="personality-section">
      <h2>My Pet's Personality</h2>
      <div className="personality-card">
        <h3>Enjoyment Type</h3>
        <p className="enjoyment-type-text">Sensation + Flow</p>
        <div className="tags-container">
          <span className="tag-item">🎣 #Fishing</span>
          <span className="tag-item">🎵 #Music</span>
          <span className="tag-item">🎨 #Art</span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;