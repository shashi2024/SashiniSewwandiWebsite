import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { personalProjects, companyProjects } from '../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'research', label: 'Research' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'dl', label: 'Deep Learning' },
    { id: 'web', label: 'Web Development' },
    { id: 'app', label: 'App Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? personalProjects 
    : personalProjects.filter(project => project.category === activeFilter);

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="chapter-label">Chapter III — The Work</p>
          <ScrollReveal>
            <span className="section-tag">Portfolio</span>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="section-title" style={{ marginTop: '0.4rem' }}>All Projects</h1>
          </ScrollReveal>
          <ScrollReveal>
            <div className="chapter-divider"><span className="ornament">✦</span></div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="section-subtitle">Research, engineering, and open-source work across AI domains.</p>
          </ScrollReveal>
        </div>
      </div>

      <section style={{ padding: '2rem 2rem 6rem' }}>
        <div className="container">
          {/* Category Filter Buttons */}
          <ScrollReveal className="filter-row">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <ProjectCard 
                key={project.title + idx} 
                project={project} 
              />
            ))}
          </div>

          {/* Company/Professional Projects */}
          <div style={{ marginTop: '4rem' }}>
            <SectionHeader 
              chapter="" 
              title="Professional Projects (Company Projects)" 
              subtitle="Jan 2025 - Present"
            />
            
            <div className="reveal visible" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {companyProjects.map((project, idx) => (
                <ScrollReveal key={idx} className="card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-text)' }}>{project.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)' }}>{project.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
