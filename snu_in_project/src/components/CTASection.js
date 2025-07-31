import React, { useState } from 'react';
import './CTASection.css';

function CTASection() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      question: "How does FineMate provide personalized recommendations?",
      answer: "FineMate uses AI technology to analyze your personality, interests, current mood, and past activity data. Based on this analysis, we recommend activities that are most suitable for you."
    },
    {
      question: "Is it free to use?",
      answer: "Yes! FineMate offers basic features for free. If you want premium features, you can access more personalization options and advanced features through a monthly subscription."
    },
    {
      question: "What types of activities can I get recommended?",
      answer: "FineMate recommends activities across various categories: outdoor activities, creative activities, sports, cooking, arts, games, reading, music, and more. Recommendations are tailored based on your interests."
    },
    {
      question: "How does location-based recommendation work?",
      answer: "We use your location information to find the best activities around you. You'll receive recommendations considering transportation, distance, and local specialties."
    },
    {
      question: "How do I use the community features?",
      answer: "Connect with people who share your interests and enjoy activities together. Experience group activity matching, social networking, and shared enjoyment."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Start Your Journey with FineMate Today</h2>
          <p className="cta-subtitle">
            Begin your journey to escape burnout and discover new joy. 
            FineMate will be your perfect companion.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-button primary">Start Free</button>
            <button className="cta-button secondary">Watch Demo</button>
          </div>
          
          <div className="cta-features">
            <div className="cta-feature">
              <span className="feature-icon">⚡</span>
              <span>Sign up in 30 seconds</span>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">🔒</span>
              <span>Privacy Protected</span>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">📱</span>
              <span>All devices supported</span>
            </div>
          </div>
        </div>
        
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${activeFAQ === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-icon">{activeFAQ === index ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${activeFAQ === index ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="final-cta">
          <h3>Don't Wait Any Longer</h3>
          <p>Over 10,000 users have already discovered new joy with FineMate.</p>
          <button className="final-cta-button">Get Started Now</button>
        </div>
      </div>
    </section>
  );
}

export default CTASection; 