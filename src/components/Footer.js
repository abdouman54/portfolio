import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Abderrahmane Allal. Tous droits réservés.</p>
      <div className="social-links">
        <a href="https://github.com/abdouman54" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/abderrahmane-allal/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
