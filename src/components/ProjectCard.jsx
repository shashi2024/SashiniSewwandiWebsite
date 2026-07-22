import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function ProjectCard({ project, delayClass = "" }) {
  const getBadgeClass = (category) => {
    switch (category) {
      case 'ml':
        return 'badge-ml';
      case 'research':
        return 'badge-ml';
      case 'dl':
        return 'badge-ml';
      case 'robotics':
        return 'badge-research';
      case 'web':
        return 'badge-research';
      case 'app':
        return 'badge-research';
      default:
        return 'badge-research';
    }
  };

  const githubSvg = (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );

  return (
    <ScrollReveal delayClass={delayClass}>
      <div className="card project-card">
        <span className={`project-badge ${getBadgeClass(project.category)}`}>
          {project.badge}
        </span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">
          {project.period && <React.Fragment>{project.period}<br/></React.Fragment>}
          {project.description}
        </p>
        <div className="project-tags">
          {project.tags && project.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
              {githubSvg} GitHub
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
