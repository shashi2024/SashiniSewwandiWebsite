import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import PubCard from '../components/PubCard';
import { publicationsData } from '../data/publications';

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredPublications = publicationsData.filter((pub) => {
    // 1. Filter by search term
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.venue.toLowerCase().includes(searchTerm.toLowerCase());

    // 2. Filter by type
    const matchesType = activeFilter === 'all' || pub.type === activeFilter;

    return matchesSearch && matchesType;
  });

  // Calculate dynamic metrics
  const totalPapers = publicationsData.length;
  const journalCount = publicationsData.filter(p => p.type === 'journal').length;
  const conferenceCount = publicationsData.filter(p => p.type === 'conference').length;
  const preprintCount = publicationsData.filter(p => p.type === 'preprint').length;
  const bookCount = publicationsData.filter(p => p.type === 'book').length;

  const researchAreas = [
    "Audio AI", "Deepfake Detection", "Computer Vision", "NLP", 
    "CNN-LSTM", "Transformers", "Federated Learning", 
    "Medical Imaging", "Mental Health AI", "MLOps", 
    "Speech Processing", "Biometrics"
  ];

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="chapter-label">Chapter IV — The Scholarship</p>
          <ScrollReveal>
            <span className="section-tag">Research Output</span>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="section-title" style={{ marginTop: '0.4rem' }}>Publications</h1>
          </ScrollReveal>
          <ScrollReveal>
            <div className="chapter-divider"><span className="ornament">✦</span></div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="section-subtitle">Peer-reviewed articles, conference papers, preprints, and book chapters.</p>
          </ScrollReveal>
        </div>
      </div>

      <section style={{ padding: '2rem 2rem 6rem' }}>
        <div className="container">
          {/* Search + Filter */}
          <ScrollReveal className="search-wrap">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search by title, author, or keyword…" 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </ScrollReveal>

          <ScrollReveal className="filter-row">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'journal' ? 'active' : ''}`}
              onClick={() => handleFilterClick('journal')}
            >
              Journal Articles
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'conference' ? 'active' : ''}`}
              onClick={() => handleFilterClick('conference')}
            >
              Conference Papers
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'preprint' ? 'active' : ''}`}
              onClick={() => handleFilterClick('preprint')}
            >
              Preprints
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'book' ? 'active' : ''}`}
              onClick={() => handleFilterClick('book')}
            >
              Book Chapters
            </button>
          </ScrollReveal>

          <div className="publications-layout">
            {/* Main Publication List */}
            <div className="publications-main" id="pub-list">
              {filteredPublications.length > 0 ? (
                <div>
                  {/* Grouped by Year or just sorted */}
                  <ScrollReveal className="pub-year-header" style={{ marginBottom: '1.5rem', marginTop: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '3px', textTransform: 'uppercase' }}>
                      — Publications —
                    </span>
                  </ScrollReveal>

                  {filteredPublications.map((pub, idx) => (
                    <PubCard 
                      key={pub.id} 
                      pub={pub} 
                      delayClass={`reveal-delay-${(idx % 4) + 1}`}
                    />
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                  No publications found matching your search.
                </div>
              )}
            </div>

            {/* Publications Sidebar */}
            <aside className="publications-sidebar">
              {/* Stats */}
              <ScrollReveal className="card pub-sidebar-card">
                <div className="pub-sidebar-title">📚 Research Metrics</div>
                <div className="pub-stat-row">
                  <span className="pub-stat-label">Total Papers</span>
                  <span className="pub-stat-value">{totalPapers}</span>
                </div>
                <div className="pub-stat-row">
                  <span className="pub-stat-label">Journal Articles</span>
                  <span className="pub-stat-value">{journalCount}</span>
                </div>
                <div className="pub-stat-row">
                  <span className="pub-stat-label">Conference Papers</span>
                  <span className="pub-stat-value">{conferenceCount}</span>
                </div>
                <div className="pub-stat-row">
                  <span className="pub-stat-label">Preprints</span>
                  <span className="pub-stat-value">{preprintCount}</span>
                </div>
                <div className="pub-stat-row">
                  <span className="pub-stat-label">Book Chapters</span>
                  <span className="pub-stat-value">{bookCount}</span>
                </div>
              </ScrollReveal>

              {/* Research Keywords */}
              <ScrollReveal className="card pub-sidebar-card" delayClass="reveal-delay-2">
                <div className="pub-sidebar-title">🏷️ Research Areas</div>
                <div className="pub-keyword-cloud">
                  {researchAreas.map((area, idx) => (
                    <span key={idx} className="pub-keyword">{area}</span>
                  ))}
                </div>
              </ScrollReveal>

              {/* Download CV */}
              <ScrollReveal className="card pub-sidebar-card" delayClass="reveal-delay-3" style={{ textAlign: 'center', background: 'var(--gradient-book)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📄</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, marginBottom: '0.4rem' }}>Download Full CV</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>
                  Includes full publication list, awards, and service record.
                </p>
                <a 
                  href="https://shashi2024.github.io/CV/" 
                  className="btn btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }} 
                  id="download-cv-btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download CV (PDF)
                </a>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
