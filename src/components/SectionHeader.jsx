import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function SectionHeader({ chapter, title, subtitle }) {
  return (
    <div className="section-header">
      <ScrollReveal>
        <span className="section-tag">{chapter}</span>
      </ScrollReveal>
      <ScrollReveal>
        <h2 className="section-title">{title}</h2>
      </ScrollReveal>
      <ScrollReveal>
        <div className="chapter-divider"><span className="ornament">✦</span></div>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal>
          <p className="section-subtitle">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  );
}
