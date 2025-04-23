import React from 'react';
import '../styles/call-to-action.css';

function CallToAction() {
  return (
    <section className="custom-cta-section">
      <div className="cta-floating-container">
        <button className="cta-tag">GET MOLLIE NOW</button>
        <h2 className="cta-title">Join over 2 million designers<br />creating with Mollie</h2>
        
        <form className="cta-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <button type="submit" className="cta-submit">→</button>
        </form>

        {/* Floating shapes */}
        <div className="floating-shape-c shape-1-2"></div>
        <div className="floating-shape-c shape-2-3"></div>
        <div className="floating-shape-c shape-3-4"></div>
      </div>
    </section>
  );
}

export default CallToAction;
