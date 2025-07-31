import React from 'react';
import './TrustSection.css';

function TrustSection() {
  const testimonials = [
    {
      name: "Michael Kim",
      role: "Software Engineer",
      avatar: "👨‍💻",
      content: "Thanks to FineMate, I discover new hobbies every week. I've completely escaped burnout!",
      rating: 5
    },
    {
      name: "Sarah Lee",
      role: "Marketing Manager",
      avatar: "👩‍💼",
      content: "The AI really understands my personality and recommends perfect activities. I can't wait for weekends now!",
      rating: 5
    },
    {
      name: "David Park",
      role: "Graduate Student",
      avatar: "👨‍🎓",
      content: "When I was exhausted from research, FineMate recommended pottery classes which were truly healing. Highly recommended!",
      rating: 5
    }
  ];

  const awards = [
    { icon: "🏆", title: "Best AI App 2024", description: "TechCrunch Disrupt" },
    { icon: "⭐", title: "User Satisfaction #1", description: "App Store" },
    { icon: "🎯", title: "Innovation Award", description: "AI Summit 2024" }
  ];

  return (
    <section id="trust" className="trust-section">
      <div className="container">
        <h2>What Users Say About FineMate</h2>
        <p className="section-subtitle">
          Discover the true value of FineMate through authentic reviews from real users
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="user-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
        
        <div className="awards-section">
          <h3>Awards & Recognition</h3>
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="award-item">
                <div className="award-icon">{award.icon}</div>
                <h4>{award.title}</h4>
                <p>{award.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Recommended Activities</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
        
        <div className="partners-section">
          <h3>Partnerships</h3>
          <p>We provide the best service with trusted partners</p>
          <div className="partners-grid">
            <div className="partner-item">🏢 Google Cloud</div>
            <div className="partner-item">🔒 AWS</div>
            <div className="partner-item">📱 Apple</div>
            <div className="partner-item">🤖 OpenAI</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection; 