import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="chapter-label">Chapter II — Career Journey</p>
          <ScrollReveal>
            <span className="section-tag">Career & Leadership</span>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="section-title" style={{ marginTop: '0.4rem' }}>Work Experience</h1>
          </ScrollReveal>
          <ScrollReveal>
            <div className="chapter-divider"><span className="ornament">✦</span></div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="section-subtitle">A chronicle of software quality engineering, business management, and community leadership.</p>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Experience Timeline */}
      <section style={{ padding: '3rem 2rem 6rem' }}>
        <div className="container">
          <SectionHeader 
            chapter="Milestones" 
            title="Career & Leadership Timeline" 
            subtitle="Detailed overview of my professional roles, responsibilities, and key achievements."
          />
          
          <ScrollReveal className="timeline" style={{ marginTop: '3rem' }}>
            {experienceData.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-role">{item.role}</div>
                <div className="timeline-org">{item.org}</div>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Competencies Summary Section */}
      <section style={{ background: 'var(--bg-secondary)', padding: '4rem 2rem 6rem' }}>
        <div className="container">
          <SectionHeader 
            chapter="Highlights" 
            title="Core Professional Skills" 
            subtitle="Skills developed through years of QA engineering, client relations, and team management."
          />

          <div className="skills-grid" style={{ marginTop: '2.5rem' }}>
            <ScrollReveal className="card skill-card" delayClass="reveal-delay-1">
              <div className="skill-icon">🧪</div>
              <div className="skill-name">QA & Test Automation</div>
              <p className="skill-desc">Manual and automated testing, JMeter load testing, API testing, and User Acceptance Testing (UAT).</p>
            </ScrollReveal>

            <ScrollReveal className="card skill-card" delayClass="reveal-delay-2">
              <div className="skill-icon">💼</div>
              <div className="skill-name">Client & Operations</div>
              <p className="skill-desc">Product demos, client coordination, project proposals, sales operations, and customer support management.</p>
            </ScrollReveal>

            <ScrollReveal className="card skill-card" delayClass="reveal-delay-3">
              <div className="skill-icon">🤝</div>
              <div className="skill-name">Leadership & Governance</div>
              <p className="skill-desc">Director & project leader for award-winning initiatives, volunteer coordination, and stakeholder management.</p>
            </ScrollReveal>

            <ScrollReveal className="card skill-card" delayClass="reveal-delay-4">
              <div className="skill-icon">⚡</div>
              <div className="skill-name">Execution & Delivery</div>
              <p className="skill-desc">Budgeting, event execution, time management, and maintaining quality standards under tight deadlines.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>
              Get In Touch
            </Link>
            <Link to="/projects" className="btn btn-outline">
              View Projects →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
