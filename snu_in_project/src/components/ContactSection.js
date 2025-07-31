import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section id="interact" className="interact-section">
      <h2>Interact With Your Pet</h2>
      <p>궁금한 것을 물어보거나, 오늘 있었던 일을 이야기해주세요.</p>
      <div className="interact-form">
        <textarea placeholder="Type your message here..."></textarea>
        <button type="submit" className="submit-button">Send</button>
      </div>
    </section>
  );
}

export default ContactSection;