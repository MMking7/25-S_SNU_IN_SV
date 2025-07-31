import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  const features = [
    {
      icon: "��",
      title: "AI-Powered Hyper-Personalization",
      description: "Analyzes your personality and current mood to recommend activities that perfectly match your preferences.",
      details: ["Personality Analysis", "Mood-Based Recommendations", "Personalized Curation"]
    },
    {
      icon: "📅",
      title: "Calendar-Integrated Suggestions",
      description: "Suggests activities at optimal times that fit your schedule seamlessly.",
      details: ["Smart Scheduling", "Automatic Reminders", "Time Optimization"]
    },
    {
      icon: "📍",
      title: "Local-Based Activity Curation",
      description: "Finds the best activities around you and recommends them based on your location.",
      details: ["Nearby Place Recommendations", "Transportation Info", "Local Specialty Activities"]
    },
    {
      icon: "👥",
      title: "Community Connection Features",
      description: "Connect with people who share your interests and enjoy activities together.",
      details: ["Group Activity Matching", "Social Networking", "Shared Enjoyment"]
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2>FineMate's Core Features</h2>
        <p className="section-subtitle">
          Discover the unique features of FineMate, built with cutting-edge AI technology and user-centered design
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <ul className="feature-details">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection; 