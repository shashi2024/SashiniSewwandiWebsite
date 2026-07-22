import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="chapter-label">Chapter I — The Author</p>
          <ScrollReveal>
            <span className="section-tag">Who I Am</span>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="section-title" style={{ marginTop: '0.4rem' }}>About Me</h1>
          </ScrollReveal>
          <ScrollReveal>
            <div className="chapter-divider"><span className="ornament">✦</span></div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="section-subtitle">Passionate researcher building AI systems that matter.</p>
          </ScrollReveal>
        </div>
      </div>

      <section style={{ padding: '2rem 2rem 6rem' }}>
        <div className="container">
          <div className="about-grid">
            <ScrollReveal className="about-visual">
              <div className="about-avatar" style={{ animation: 'float 5s ease-in-out infinite' }}>
                <img src="/images/photo.jpg" alt="Sashini Sewwandi" />
              </div>
              <div className="experience-badge">
                <div className="num">4+</div>
                <div className="lbl">Years Exp.</div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="about-content" delayClass="reveal-delay-2">
              <h2>Research Engineer &<br/><span className="gradient-text">AI Enthusiast</span></h2>
              <p>I'm a Research Engineer specializing in the design and deployment of intelligent systems. My work spans machine learning, computer vision, audio AI, and NLP — always with a focus on real-world impact.</p>
              <p>Whether building a fake call detector or a mental health companion app, I strive to make technology meaningful and accessible. My research has been published in peer-reviewed journals and presented at international conferences.</p>
              <p>When not training models, I write technical essays, contribute to open-source projects, and mentor aspiring ML engineers.</p>
              <div className="about-info">
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">Colombo, Sri Lanka</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Focus</span>
                  <span className="info-value">AI / ML Research</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Languages</span>
                  <span className="info-value">Python, Dart, JS</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Status</span>
                  <span className="info-value" style={{ color: 'var(--accent-teal-light)' }}>● Open to Work</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Publications</span>
                  <span className="info-value">1 Paper</span>
                </div>
              </div>
              <div className="hero-actions" style={{ justifyContent: 'flex-start', marginTop: '1.5rem' }}>
                <a href="/contact" className="btn btn-primary" id="about-contact-btn">Get In Touch</a>
                <a href="/publications" className="btn btn-outline" id="about-pubs-btn">My Publications</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionHeader chapter="Chapter II" title="Experience" />
          
          <ScrollReveal className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-period">January, 2025 – Present</div>
              <div className="timeline-role">Associate Quality Assurance Engineer</div>
              <div className="timeline-org">Zincat Technology Pvt Ltd</div>
              <p className="timeline-desc">As an Associate Quality Assurance Engineer, I contributed to delivering reliable and high-quality software solutions through manual and automated testing practices. I implemented automated tests to improve efficiency and test coverage while conducting load and performance testing using JMeter to evaluate system stability and responsiveness. My responsibilities included API testing, User Acceptance Testing (UAT), client coordination, and project proposal preparation. I also delivered product demonstrations and training sessions for clients and internal teams to ensure smooth system adoption. By coordinating project activities and collaborating with cross-functional teams, I consistently supported timely delivery while maintaining quality standards and enhancing the overall user experience.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-period">December, 2021 – February, 2024</div>
              <div className="timeline-role">Sales Assistant</div>
              <div className="timeline-org">Marlbo Trading Company</div>
              <p className="timeline-desc">As a Sales Assistant, I played a key role in ensuring smooth and efficient business operations by managing customer support, follow-ups, invoicing, quotations, deliveries, and stock management. I was committed to providing exceptional customer service by promptly addressing client inquiries and resolving concerns to enhance customer satisfaction. My role required strong organizational and time management skills to handle multiple responsibilities while meeting deadlines and maintaining operational accuracy. Through effective communication, problem-solving, and a customer-focused approach, I consistently met performance expectations and contributed to achieving sales targets while fostering positive and lasting client relationships.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-period">2019 – 2021</div>
              <div className="timeline-role">Director and Project Leader</div>
              <div className="timeline-org">Leo Club of Royal Achievers</div>
              <p className="timeline-desc">As a project leader, I successfully led and coordinated multiple award-winning community service initiatives, demonstrating strong leadership, organizational, and teamwork skills. These projects included *The Winner*, which provided free online educational support for students, *Miyuru Handewa*, a music program designed to inspire and engage young learners, and *Raktha Jeewa*, a blood donation campaign promoting community well-being. My responsibilities involved project planning, budgeting, volunteer management, stakeholder coordination, and event execution to ensure successful outcomes. Through effective collaboration and strategic planning, I contributed to creating meaningful social impact while achieving project goals within established timelines and resources.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-period">2014 – 2018</div>
              <div className="timeline-role">Head Prefect and Junior Prefect</div>
              <div className="timeline-org">Kalutara Balica National School</div>
              <p className="timeline-desc">Through leading large-scale student community service projects, I developed strong planning, time management, and multitasking abilities while effectively managing diverse teams of volunteers and participants. Coordinating multiple activities simultaneously strengthened my problem-solving and decision-making skills, enabling me to deliver projects efficiently within deadlines. Managing large groups of students enhanced my communication, leadership, and interpersonal skills, helping me foster collaboration and maintain team motivation. These experiences significantly contributed to my personal and professional growth, improving my confidence, adaptability, and ability to lead teams effectively while creating meaningful and positive impacts within the community.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tools & Tech */}
      <section>
        <div className="container">
          <SectionHeader chapter="Chapter III" title="Tools & Technologies" />
          
          <div className="skills-grid">
            <ScrollReveal className="card skill-card" delayClass="reveal-delay-1">
              <div className="skill-icon">🐍</div>
              <div className="skill-name">Python Ecosystem</div>
              <p className="skill-desc">PyTorch, TensorFlow, scikit-learn, NumPy, Pandas, Librosa, OpenCV, Hugging Face.</p>
            </ScrollReveal>
            <ScrollReveal className="card skill-card" delayClass="reveal-delay-2">
              <div className="skill-icon">🚀</div>
              <div className="skill-name">Deployment & DevOps</div>
              <p className="skill-desc">FastAPI, Docker, AWS EC2, S3, Lambda, GitHub Actions, NGINX.</p>
            </ScrollReveal>
            <ScrollReveal className="card skill-card" delayClass="reveal-delay-3">
              <div className="skill-icon">📱</div>
              <div className="skill-name">Mobile & Frontend</div>
              <p className="skill-desc">Flutter, Dart, HTML, CSS, JavaScript, REST API integration.</p>
            </ScrollReveal>
            <ScrollReveal className="card skill-card" delayClass="reveal-delay-4">
              <div className="skill-icon">🗄️</div>
              <div className="skill-name">Databases & Tools</div>
              <p className="skill-desc">PostgreSQL, MongoDB, Firebase, Git, Jupyter, Weights & Biases.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
