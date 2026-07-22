import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import BlogCard from '../components/BlogCard';
import { blogsData } from '../data/blogs';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredBlogs = blogsData.filter((blog) => {
    // 1. Filter by search term
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));

    // 2. Filter by category
    const matchesCategory = activeFilter === 'all' || blog.category === activeFilter;

    return matchesSearch && matchesCategory;
  });

  // Calculate counts dynamically
  const totalCount = blogsData.length;
  const aiCount = blogsData.filter(b => b.category === 'ai').length;
  const wso2Count = blogsData.filter(b => b.category === 'wso2').length;
  const programmingCount = blogsData.filter(b => b.category === 'programming').length;
  const researchCount = blogsData.filter(b => b.category === 'research').length;
  const studyCount = blogsData.filter(b => b.category === 'study').length;

  const categories = [
    { id: 'all', label: 'All Posts', count: totalCount },
    { id: 'ai', label: 'Artificial Inteligance', count: aiCount },
    { id: 'wso2', label: 'WSO2', count: wso2Count },
    { id: 'programming', label: 'Programming', count: programmingCount },
    { id: 'research', label: 'Research', count: researchCount },
    { id: 'study', label: 'Study', count: studyCount }
  ];

  const popularPosts = blogsData.slice(0, 4); // Show top 4 posts as popular

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="chapter-label">Chapter V — The Writings</p>
          <ScrollReveal>
            <span className="section-tag">Blog & Essays</span>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="section-title" style={{ marginTop: '0.4rem' }}>Technical Writings</h1>
          </ScrollReveal>
          <ScrollReveal>
            <div className="chapter-divider"><span className="ornament">✦</span></div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="section-subtitle">
              Tutorials, research essays, opinions, and deep dives into the world of AI and machine learning.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <section style={{ padding: '2rem 2rem 6rem' }}>
        <div className="container">
          {/* Search */}
          <ScrollReveal className="search-wrap">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search posts, topics, or keywords…" 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </ScrollReveal>

          <div className="blog-layout">
            {/* Main Blog Feed */}
            <main id="blog-feed">
              {/* Filter row */}
              <ScrollReveal className="filter-row">
                <button 
                  className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('all')}
                >
                  All Posts
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('ai')}
                >
                  Artificial Inteligance
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'wso2' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('wso2')}
                >
                  WSO2
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'programming' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('programming')}
                >
                  Programming
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'research' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('research')}
                >
                  Research
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'study' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('study')}
                >
                  Study
                </button>
              </ScrollReveal>

              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog, idx) => (
                  <BlogCard 
                    key={blog.id} 
                    blog={blog} 
                    delayClass={`reveal-delay-${(idx % 3) + 1}`}
                  />
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                  No posts found matching your search.
                </div>
              )}
            </main>

            {/* Blog Sidebar */}
            <aside className="blog-sidebar">
              {/* About the author */}
              <ScrollReveal className="card sidebar-card">
                <div className="sidebar-title">✍️ The Author</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--gradient-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', border: '1px solid var(--border-color)', flexShrink: 0, overflow: 'hidden' }}>
                    <img src="/images/photo.jpg" alt="Sashini Sewwandi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Sashini Sewwandi</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Research Engineer · AI/ML</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                  Writing about AI research, practical ML engineering, and the intersection of technology and science.
                </p>
              </ScrollReveal>

              {/* Categories filter list */}
              <ScrollReveal className="card sidebar-card" delayClass="reveal-delay-1">
                <div className="sidebar-title">📂 Categories</div>
                <div className="category-filter">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`cat-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                      onClick={() => handleFilterClick(cat.id)}
                    >
                      {cat.label} <span className="cat-filter-count">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </ScrollReveal>

              {/* Popular posts */}
              <ScrollReveal className="card sidebar-card" delayClass="reveal-delay-2">
                <div className="sidebar-title">🔥 Popular Posts</div>
                {popularPosts.map((post) => (
                  <a 
                    key={post.id} 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="sidebar-post-item"
                  >
                    <div className="sidebar-post-title">{post.title}</div>
                    <div className="sidebar-post-date">{post.date}</div>
                  </a>
                ))}
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
