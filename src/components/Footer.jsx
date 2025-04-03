import React from 'react';
import '../style/Footer.css'; // Make sure to create a Footer.css file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <a href="#" className="footer-logo-link">PharmaNet</a>
          </div>
          <div className="footer-contact">
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <span className="contact-text">+91-6353084690</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span className="contact-text">shreympatel1712@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 PharmaNet. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
