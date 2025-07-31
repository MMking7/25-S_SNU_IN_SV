import React from 'react';
import './PortfolioSection.css';

function PortfolioSection() {
  return (
    <section id="history" className="history-section">
      <h2>Activity History</h2>
      <div className="history-content">
        <div className="history-card">
          <h3>Emotion & Reflection History</h3>
          <div className="chart-placeholder">
            Emotion chart will be displayed here.
          </div>
        </div>
        <div className="history-log">
          <h4>Recent Activities</h4>
          <ul>
            <li><span>July 31</span> - Listened to calming music together.</li>
            <li><span>July 30</span> - Talked about space exploration.</li>
            <li><span>July 29</span> - Watched a movie about friendship.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;