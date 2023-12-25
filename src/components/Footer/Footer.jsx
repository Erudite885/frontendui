import React from 'react';

import { footerLinks } from '../../constants';
import './footer.scss';  // Import your SCSS file

const Footer = () => (
  <section className="footer-section">
    <div className="footer-content">
      

      <div className="footer-links">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className="footer-link-group">
            <h4 className="link-group-title">{footerLink.title}</h4>
            <ul className="link-list">
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`link-item ${index !== footerLink.links.length - 1 ? 'mb-4' : ''}`}>{link.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    
  </section>
);

export default Footer;
