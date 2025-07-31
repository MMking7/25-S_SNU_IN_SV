import React from 'react';
import './ValuePropositionSection.css';

function ValuePropositionSection() {
  return (
    <section id="value-proposition" className="value-proposition-section">
      <div className="container">
        <div className="problem-section">
          <h2>Why FineMate?</h2>
          <div className="problem-content">
            <h3>The Problem</h3>
            <p>
              Endless work, repetitive routines... Have you forgotten what you truly enjoy? 
              Feeling overwhelmed by endless options and not knowing where to start?
            </p>
            <ul className="problem-list">
              <li>Energy depletion from burnout</li>
              <li>Difficulty finding new hobbies</li>
              <li>Concerns about time and cost</li>
              <li>Activities hard to start alone</li>
            </ul>
          </div>
        </div>
        
        <div className="solution-section">
          <h3>FineMate Solution</h3>
          <p>
            FineMate analyzes your personality, current energy level, and interests to find 
            activities that are truly meant for you. Stop searching and scrolling—receive only 
            the best, handpicked options from FineMate.
          </p>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <h4>Exciting Weekends Every Week</h4>
              <p>With FineMate, you can look forward to an exciting weekend, every week!</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🌟</div>
              <h4>Rediscover Yourself</h4>
              <p>Rediscover yourself and find new energy through new hobbies.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">😊</div>
              <h4>Less Stress, More Happiness</h4>
              <p>Experience less stress and more happiness in your daily life.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuePropositionSection; 