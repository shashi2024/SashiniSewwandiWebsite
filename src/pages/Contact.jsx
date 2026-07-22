import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:sashinisithara20@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="chapter-label">Epilogue — The Correspondence</p>
          <ScrollReveal>
            <span className="section-tag">Say Hello</span>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="section-title" style={{ marginTop: '0.4rem' }}>Get In Touch</h1>
          </ScrollReveal>
          <ScrollReveal>
            <div className="chapter-divider"><span className="ornament">✦</span></div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="section-subtitle">Open to research collaborations, freelance projects, and full-time roles.</p>
          </ScrollReveal>
        </div>
      </div>

      <section style={{ padding: '3rem 2rem 6rem' }}>
        <div className="container">
          <div className="contact-grid">

            <ScrollReveal className="contact-info">
              <h3>Let's <span className="gradient-text">Connect</span></h3>
              <p>Whether you have a project idea, a research question, or just want to talk AI — my inbox is always open. I typically respond within 24 hours.</p>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-item-text">
                  <div className="label">Email</div>
                  <a href="mailto:sashinisithara20@gmail.com" className="value" style={{ color: 'var(--accent-teal-light)', textDecoration: 'underline' }}>
                    sashinisithara20@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-item-text">
                  <div className="label">Location</div>
                  <div className="value">Kalutara, Sri Lanka</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-item-text">
                  <div className="label">Mobile Number</div>
                  <div className="value">+94 769981690</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⏱️</div>
                <div className="contact-item-text">
                  <div className="label">Response Time</div>
                  <div className="value">Within 24 hours</div>
                </div>
              </div>

              <div className="social-links">
                <a href="https://github.com/shashi2024" target="_blank" rel="noopener noreferrer" className="social-btn" id="social-github" title="GitHub" aria-label="GitHub">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" id="social-linkedin" title="LinkedIn" aria-label="LinkedIn">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn" id="social-twitter" title="Twitter/X" aria-label="Twitter">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="social-btn" id="social-scholar" title="Google Scholar" aria-label="Google Scholar">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z"/></svg>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal className="card contact-form" delayClass="reveal-delay-2">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="you@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Research collaboration, job offer…" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell me about your project or idea…" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" id="submit-form" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
                {submitted && (
                  <div className="form-success" style={{ display: 'block', marginTop: '1rem' }}>
                    ✅ Message sent! I'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}
