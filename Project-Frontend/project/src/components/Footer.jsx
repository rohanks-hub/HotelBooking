import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Phone: +91 9985653378</p>
          <p>Email: travelluxe@gmail.com</p>
          <p>Address: sector 88, New Delhi, India</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/hotels">Rooms & Rates</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Travelluxe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
