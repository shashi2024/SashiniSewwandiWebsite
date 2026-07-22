import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const logoSvg = (
    <svg className="logo-svg-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          {logoSvg} Sashini Sewwandi
        </div>
        <p className="footer-copy">© 2024 Research Engineer Portfolio. All rights reserved.</p>
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
