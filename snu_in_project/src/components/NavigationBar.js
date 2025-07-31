import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">FineMate</div>
      <ul className="navbar-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#value-proposition">Value</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#trust">Reviews</a></li>
        <li><a href="#cta">Get Started</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;