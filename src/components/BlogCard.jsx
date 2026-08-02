import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function BlogCard({ blog, delayClass = "" }) {
  const getCatClass = (category) => {
    switch (category) {
      case 'wso2':
        return 'cat-tutorial';
      case 'programming':
        return 'cat-ml';
      case 'study':
        return 'cat-opinion';
      case 'research':
        return 'cat-research';
      case 'ai':
        return 'cat-review';
      default:
        return 'cat-tutorial';
    }
  };

  const isFeatured = blog.type === 'Featured Essay' || blog.type === 'Featured Post';

  return (
    <ScrollReveal delayClass={delayClass}>
      <div className={`card blog-card ${isFeatured ? 'blog-card-featured' : ''}`}>
        <div className="blog-card-inner">
          {isFeatured && <div className="blog-featured-label">✦ {blog.type}</div>}
          <div className="blog-meta">
            <span className={`blog-category ${getCatClass(blog.category)}`}>
              {blog.categoryLabel}
            </span>
            <span className="blog-date">{blog.date}</span>
          </div>
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-excerpt">{blog.excerpt}</p>
          <div className="blog-tags">
            {blog.tags && blog.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
          <div className="blog-footer">
            <div className="blog-author">By <strong>Sashini Sewwandi</strong></div>
            <a href={blog.url} className="blog-read-link" target="_blank" rel="noopener noreferrer">
              {blog.readLinkText || 'Read Article →'}
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
