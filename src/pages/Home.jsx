import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import PubCard from '../components/PubCard';
import BlogCard from '../components/BlogCard';
import { personalProjects } from '../data/projects';
import { publicationsData } from '../data/publications';
import { blogsData } from '../data/blogs';

// Custom hook for numeric stats counting
function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;
    if (start === end) return;

    let totalMiliseconds = duration;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export default function Home() {
  // Typing Effect State
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    'Machine Learning Engineer',
    'AI Researcher',
    'Deep Learning Enthusiast',
    'Computer Vision Expert',
    'NLP Practitioner',
    'Audio AI Researcher'
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(30);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullText) {
        // Wait before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Stats Counters
  const countPapers = useCounter(12);
  const countExp = useCounter(5);
  const countProjects = useCounter(20);
  const countCitations = useCounter(850);

  // Top items for preview
  const featuredProjects = personalProjects.slice(0, 3);
  const recentPubs = publicationsData.slice(0, 1);
  const topBlogs = blogsData.slice(0, 3);

  return (
    <div>
      {/* ═══ HERO — Book Cover ═══ */}
      <section className="hero">
        <div>
          <div className="hero-badge">
            <span className="dot"></span>
            Available for Research Collaborations
          </div>

          <p className="hero-eyebrow">Chapter I — Introduction</p>

          <h1 className="hero-title">
            Building the Future<br/>with <span className="gradient-text">Intelligent Systems</span>
          </h1>

          <p className="hero-subtitle">
            <span className="hero-typing">{text}</span><span className="cursor"></span>
          </p>
          <p className="hero-subtitle" style={{ marginTop: '-0.5rem' }}>
            Turning complex data into impactful research — from audio AI to computer vision and beyond.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary" id="hero-view-projects">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                <polyline points="13 2 13 9 20 9"/>
              </svg>
              View Projects
            </Link>
            <Link to="/publications" className="btn btn-outline" id="hero-publications">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              Publications
            </Link>
            <Link to="/about" className="btn btn-outline" id="hero-about-me">About Me</Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">Research Papers</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">4 yrs</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{countProjects}+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-divider"></div>
            {/* <div className="stat-item">
              <div className="stat-number">{countCitations}+</div>
              <div className="stat-label">Citations</div>
            </div> */}
          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionHeader 
            chapter="Chapter II" 
            title="Core Skill Areas" 
            subtitle="Specialized in research-driven AI development across multiple domains."
          />

          <div className="skills-grid">
            <ScrollReveal className="card skill-card" delayClass="reveal-delay-1">
              <div className="skill-icon">🧠</div>
              <div className="skill-name">Machine Learning</div>
              <p class="skill-desc">Designing and training supervised, unsupervised, and reinforcement learning models for real-world applications.</p>
              <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: '92%' }}></div></div>
            </ScrollReveal>

            <ScrollReveal className="card skill-card" delayClass="reveal-delay-2">
              <div className="skill-icon">👁️</div>
              <div className="skill-name">Computer Vision</div>
              <p class="skill-desc">Object detection, image segmentation, and visual feature extraction using CNNs and vision transformers.</p>
              <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: '88%' }}></div></div>
            </ScrollReveal>

            <ScrollReveal className="card skill-card" delayClass="reveal-delay-3">
              <div className="skill-icon">🗣️</div>
              <div className="skill-name">Natural Language Processing</div>
              <p class="skill-desc">Transformer-based models for text classification, sentiment analysis, and language generation tasks.</p>
              <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: '80%' }}></div></div>
            </ScrollReveal>

            <ScrollReveal className="card skill-card" delayClass="reveal-delay-4">
              <div className="skill-icon">🔊</div>
              <div className="skill-name">Audio & Speech AI</div>
              <p class="skill-desc">CNN-LSTM hybrid architectures for audio classification, fake call detection, and speech processing.</p>
              <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: '85%' }}></div></div>
            </ScrollReveal>

            <ScrollReveal className="card skill-card" delayClass="reveal-delay-1">
              <div className="skill-icon">☁️</div>
              <div className="skill-name">MLOps & Cloud</div>
              <p class="skill-desc">Deploying ML pipelines on AWS, building REST APIs with FastAPI, and managing containerized services.</p>
              <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: '75%' }}></div></div>
            </ScrollReveal>

            <ScrollReveal className="card skill-card" delayClass="reveal-delay-2">
              <div className="skill-icon">📊</div>
              <div className="skill-name">Data Science</div>
              <p class="skill-desc">Exploratory data analysis, feature engineering, statistical modeling, and data visualization with Python.</p>
              <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: '90%' }}></div></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PROJECTS ═══ */}
      <section id="featured-projects">
        <div className="container">
          <SectionHeader 
            chapter="Chapter III" 
            title="Featured Projects" 
            subtitle="A selection of research and engineering projects I've built."
          />

          <div className="projects-grid">
            {featuredProjects.map((project, idx) => (
              <ProjectCard 
                key={idx} 
                project={project} 
                delayClass={`reveal-delay-${idx + 1}`}
              />
            ))}
          </div>

          <ScrollReveal style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/projects" className="btn btn-outline" id="all-projects-btn">View All Projects →</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ RECENT PUBLICATIONS PREVIEW ═══ */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionHeader 
            chapter="Chapter IV" 
            title="Recent Publications" 
            subtitle="Peer-reviewed research contributions and technical writings."
          />

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {recentPubs.map((pub, idx) => (
              <PubCard 
                key={idx} 
                pub={pub} 
                delayClass={`reveal-delay-${idx + 1}`}
              />
            ))}
          </div>

          <ScrollReveal style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/publications" className="btn btn-outline" id="all-pubs-btn">All Publications →</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ LATEST FROM BLOG ═══ */}
      <section>
        <div className="container">
          <SectionHeader 
            chapter="Chapter V" 
            title="From the Blog" 
            subtitle="Technical writings, research notes, and reflections."
          />

          <div className="projects-grid">
            {topBlogs.map((blog, idx) => (
              <BlogCard 
                key={idx} 
                blog={blog} 
                delayClass={`reveal-delay-${idx + 1}`}
              />
            ))}
          </div>

          <ScrollReveal style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/blog" className="btn btn-outline" id="all-blogs-btn">All Posts & Writings →</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section style={{ background: 'var(--bg-secondary)', padding: '5rem 2rem' }}>
        <div className="container">
          <ScrollReveal className="cta-card-upgraded">
            <div className="cta-badge">✦ Epilogue ✦</div>
            <h2 className="cta-title">
              Let's Write the Next<br/><span className="gradient-text">Chapter Together</span>
            </h2>
            <p className="cta-desc">
              Open to research collaborations, freelance AI projects, and full-time research engineering roles.
            </p>
            <Link to="/contact" className="btn btn-primary btn-cta-glow" id="cta-contact-btn">
              Get In Touch 
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
