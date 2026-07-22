import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function PubCard({ pub, delayClass = "" }) {
  const getPubTypeClass = (type) => {
    switch (type) {
      case 'journal':
        return 'pub-type-journal';
      case 'conference':
        return 'pub-type-conf';
      case 'preprint':
        return 'pub-type-preprint';
      case 'book':
        return 'pub-type-book';
      default:
        return 'pub-type-conf';
    }
  };

  const pdfSvg = (
    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  );

  return (
    <ScrollReveal delayClass={delayClass}>
      <div className="card pub-card">
        <span className={`pub-type ${getPubTypeClass(pub.type)}`}>
          {pub.typeLabel}
        </span>
        <h3 className="pub-title">{pub.title}</h3>
        <div className="pub-authors">
          {/* Note: Sashini Sithara is highlighted */}
          <span dangerouslySetInnerHTML={{ __html: pub.authors.replace('Sashini Sithara', '<strong>Sashini Sithara</strong>') }}></span>
        </div>
        <div className="pub-venue">
          {pub.venue}
          {pub.yearSuffix && <span>{pub.yearSuffix}</span>}
        </div>
        <p className="pub-abstract">{pub.abstract}</p>
        <div className="pub-links">
          {pub.pdfUrl && (
            <a href={pub.pdfUrl} className="pub-link primary">
              {pdfSvg} PDF
            </a>
          )}
          {pub.doiUrl && <a href={pub.doiUrl} className="pub-link">DOI</a>}
          {pub.arxivUrl && <a href={pub.arxivUrl} className="pub-link">arXiv</a>}
          {pub.codeUrl && <a href={pub.codeUrl} className="pub-link">Code</a>}
        </div>
      </div>
    </ScrollReveal>
  );
}
