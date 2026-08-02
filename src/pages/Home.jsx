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
import { experienceData } from '../data/experience';

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
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const countProjects = useCounter(20);

  // 1 Example per section for clean, mobile-friendly scannability
  const topExp = experienceData[0]; // 1 Experience example
  const featuredProj = personalProjects[0]; // 1 Featured Project example
  const recentPub = publicationsData[0]; // 1 Publication example
  const latestBlog = blogsData[0]; // 1 Blog example

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
            <Link to="/about" className="btn btn-primary" id="hero-about-me">About Me</Link>
            <Link to="/experience" className="btn btn-outline" id="hero-experience">Experience</Link>
            <Link to="/projects" className="btn btn-outline" id="hero-view-projects">Projects</Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">Research Paper</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">4+ yrs</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{countProjects}+</div>
              <div className="stat-label">Projects Built</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 1: ABOUT ME (1 Spotlight Summary) ═══ */}
      <section style={{ padding: '4rem 2rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionHeader 
            chapter="Chapter II" 
            title="About Me" 
            subtitle="Passionate Research Engineer creating reliable AI & software systems."
          />

          <ScrollReveal className="card" style={{ padding: '2rem', marginTop: '2rem', maxWidth: '850px', margin: '2rem auto 0' }}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flexShrink: 0, margin: '0 auto' }}>
                <img 
                  src="/images/photo.jpg" 
                  alt="Sashini Sewwandi" 
                  style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-gold)' }} 
                />
              </div>
              <div style={{ flex: 1, minWidth: '260px' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Sashini Sewwandi — <span className="gradient-text">Research & QA Engineer</span>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
                  Specializing in machine learning, computer vision, audio AI, and quality assurance. Dedicated to building accessible, ethical, and high-impact technology.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-teal-light)', background: 'rgba(10, 106, 71, 0.15)', padding: '0.3rem 0.75rem', borderRadius: '20px', fontWeight: '500' }}>
                    ● Open to Collaborations & Roles
                  </span>
                  <Link to="/about" style={{ color: 'var(--accent-gold)', fontSize: '0.88rem', fontWeight: '600', textDecoration: 'none' }}>
                    Read Full Bio →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 2: EXPERIENCE (1 Spotlight Role) ═══ */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <SectionHeader 
            chapter="Chapter III" 
            title="Work Experience" 
            subtitle="Highlights from software quality engineering and business operations."
          />

          <ScrollReveal className="timeline" style={{ marginTop: '2rem', maxWidth: '850px', margin: '2rem auto 0' }}>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-period">{topExp.period}</div>
              <div className="timeline-role">{topExp.role}</div>
              <div className="timeline-org">{topExp.org}</div>
              <p className="timeline-desc">{topExp.desc}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/experience" className="btn btn-outline" id="all-exp-btn">
              View Full Experience Timeline →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 3: CORE SKILLS (Overview Grid) ═══ */}
      <section style={{ padding: '4rem 2rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionHeader 
            chapter="Chapter IV" 
            title="Skill Domains" 
            subtitle="Core technical strengths across AI research and engineering."
          />

          <div className="skills-grid" style={{ marginTop: '2rem' }}>
            <ScrollReveal className="card skill-card">
              <div className="skill-icon">🧠</div>
              <div className="skill-name">Machine Learning</div>
              <p className="skill-desc">Supervised/unsupervised models, PyTorch, TensorFlow & scikit-learn.</p>
            </ScrollReveal>

            <ScrollReveal className="card skill-card">
              <div className="skill-icon">👁️</div>
              <div className="skill-name">Computer Vision & Audio AI</div>
              <p className="skill-desc">CNNs, vision transformers, Librosa, OpenCV & audio fake call detection.</p>
            </ScrollReveal>

            <ScrollReveal className="card skill-card">
              <div className="skill-icon">🧪</div>
              <div className="skill-name">QA & Test Automation</div>
              <p className="skill-desc">Automated testing, JMeter load testing, API testing, and UAT.</p>
            </ScrollReveal>

            <ScrollReveal className="card skill-card">
              <div className="skill-icon">☁️</div>
              <div className="skill-name">Deployment & Tools</div>
              <p className="skill-desc">FastAPI, Docker, AWS S3/EC2, Git, Python, Dart & JavaScript.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: FEATURED PROJECT (1 Spotlight Project) ═══ */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <SectionHeader 
            chapter="Chapter V" 
            title="Featured Project" 
            subtitle="Highlighting key engineering and research innovations."
          />

          <div style={{ maxWidth: '850px', margin: '2rem auto 0' }}>
            <ProjectCard project={featuredProj} delayClass="reveal" />
          </div>

          <ScrollReveal style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/projects" className="btn btn-outline" id="all-projects-btn">
              View All Projects →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 5: PUBLICATIONS (1 Spotlight Paper) ═══ */}
      <section style={{ padding: '4rem 2rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionHeader 
            chapter="Chapter VI" 
            title="Research Publication" 
            subtitle="Peer-reviewed scientific contributions."
          />

          <div style={{ maxWidth: '850px', margin: '2rem auto 0' }}>
            <PubCard pub={recentPub} delayClass="reveal" />
          </div>

          <ScrollReveal style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/publications" className="btn btn-outline" id="all-pubs-btn">
              All Publications →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 6: BLOG (1 Spotlight Article) ═══ */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <SectionHeader 
            chapter="Chapter VII" 
            title="Featured Article" 
            subtitle="Technical writings, research essays, and thoughts on AI."
          />

          <div style={{ maxWidth: '850px', margin: '2rem auto 0' }}>
            <BlogCard blog={latestBlog} delayClass="reveal" />
          </div>

          <ScrollReveal style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/blog" className="btn btn-outline" id="all-blogs-btn">
              Read All Articles →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SECTION 7: CTA BANNER ═══ */}
      <section style={{ background: 'var(--bg-secondary)', padding: '5rem 2rem' }}>
        <div className="container">
          <ScrollReveal className="cta-card-upgraded">
            <div className="cta-badge">✦ Epilogue ✦</div>
            <h2 className="cta-title">
              Let's Write the Next<br/><span className="gradient-text">Chapter Together</span>
            </h2>
            <p className="cta-desc">
              Open to research collaborations, freelance AI projects, and full-time engineering roles.
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
