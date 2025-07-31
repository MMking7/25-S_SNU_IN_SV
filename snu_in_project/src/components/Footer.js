import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FineMate</h3>
            <p>
              An AI-powered personalized hobby recommendation service that helps you escape burnout 
              and discover new joy.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘 Facebook</a>
              <a href="#" className="social-link">📷 Instagram</a>
              <a href="#" className="social-link">🐦 Twitter</a>
              <a href="#" className="social-link">💼 LinkedIn</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Product</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#trust">Reviews</a></li>
              <li><a href="#cta">Pricing</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#cta">FAQ</a></li>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">User Guide</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p>📧 hello@finemate.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Innovation St, Tech City, TC 12345</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 FineMate. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 