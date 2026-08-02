/* ============================================
   MAIN JAVASCRIPT — Book Portfolio
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Navbar scroll effect ────────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    // Always start with scrolled style so font looks consistent on all pages
    navbar.classList.add('scrolled');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ─── Hamburger / Mobile Menu ─────────────────
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Active nav link highlight ────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ─── Typing Effect ───────────────────────────
  const typingEl = document.querySelector('.hero-typing');
  if (typingEl) {
    const phrases = [
      'Machine Learning Engineer',
      'AI Researcher',
      'Deep Learning Enthusiast',
      'Computer Vision Expert',
      'NLP Practitioner',
      'Audio AI Researcher'
    ];
    let phraseIdx = 0, charIdx = 0, deleting = false;

    function type() {
      const current = phrases[phraseIdx];
      if (!deleting) {
        typingEl.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) {
          deleting = true;
          return setTimeout(type, 2200);
        }
      } else {
        typingEl.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }
      setTimeout(type, deleting ? 45 : 85);
    }
    type();
  }

  // ─── Scroll Reveal ───────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }

  // ─── Skill Bar Animation ─────────────────────
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (skillBars.length) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute('data-width');
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    skillBars.forEach(bar => barObserver.observe(bar));
  }

  // ─── Counter Animation ────────────────────────
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          let current  = 0;
          const step   = Math.ceil(target / 60);
          const timer  = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current + suffix;
            if (current >= target) clearInterval(timer);
          }, 20);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

  // ─── Copy Email Functionality ─────────────────
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'sashinisithara20@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        copyEmailBtn.classList.add('copied');
        const span = copyEmailBtn.querySelector('span');
        if (span) span.textContent = 'Copied! ✓';
        setTimeout(() => {
          copyEmailBtn.classList.remove('copied');
          if (span) span.textContent = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy email:', err);
      });
    });
  }

  // ─── Contact Form ────────────────────────────
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn  = contactForm.querySelector('[type="submit"]');
      const succ = document.getElementById('form-success') || document.querySelector('.form-success');
      const origText = btn.innerHTML;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      const nameVal = document.getElementById('name')?.value || '';
      const emailVal = document.getElementById('email')?.value || '';
      const subjectVal = document.getElementById('subject')?.value || '';
      const messageVal = document.getElementById('message')?.value || '';

      try {
        const response = await fetch('https://formsubmit.co/ajax/sashinisithara20@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: nameVal,
            email: emailVal,
            _subject: subjectVal || `Portfolio Contact from ${nameVal}`,
            message: messageVal
          })
        });

        if (response.ok) {
          contactForm.reset();
          btn.style.display = 'none';
          if (succ) {
            succ.innerHTML = '✅ Message sent! I\'ll get back to you within 24 hours.';
            succ.style.display = 'block';
          }
        } else {
          throw new Error('FormSubmit response not ok');
        }
      } catch (err) {
        // Fallback to mailto if API request fails
        const mailtoSubject = encodeURIComponent(subjectVal || `Portfolio Inquiry from ${nameVal}`);
        const mailtoBody = encodeURIComponent(`Name: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}`);
        window.location.href = `mailto:sashinisithara20@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        
        contactForm.reset();
        btn.innerHTML = origText;
        btn.disabled = false;
        if (succ) {
          succ.innerHTML = '📬 Opening your email client to send message! You can also email directly to <a href="mailto:sashinisithara20@gmail.com" style="color:var(--accent-teal-light); text-decoration:underline;">sashinisithara20@gmail.com</a>';
          succ.style.display = 'block';
        }
      }
    });
  }

  // ─── Smooth scroll for anchor links ──────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── Project filter (projects page) ──────────
  const filterBtns   = document.querySelectorAll('.filter-btn[data-filter]');
  const projectCards = document.querySelectorAll('.project-card-wrapper');
  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
          const cat  = card.getAttribute('data-category');
          const show = filter === 'all' || cat === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // ─── Publications: filter by type ────────────
  const pubFilterBtns = document.querySelectorAll('.filter-btn[data-pub-filter]');
  const pubCards      = document.querySelectorAll('.pub-card[data-pub-type]');

  if (pubFilterBtns.length && pubCards.length) {
    pubFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        pubFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-pub-filter');
        pubCards.forEach(card => {
          const type = card.getAttribute('data-pub-type');
          card.style.display = (filter === 'all' || type === filter) ? '' : 'none';
        });
        updatePubYearHeaders();
      });
    });
  }

  function updatePubYearHeaders() {
    document.querySelectorAll('.pub-year-header').forEach(header => {
      let next = header.nextElementSibling;
      let hasVisible = false;
      while (next && !next.classList.contains('pub-year-header')) {
        if (next.classList.contains('pub-card') && next.style.display !== 'none') {
          hasVisible = true; break;
        }
        next = next.nextElementSibling;
      }
      header.style.display = hasVisible ? '' : 'none';
    });
  }

  const pubSearch = document.getElementById('pub-search');
  if (pubSearch && pubCards.length) {
    pubSearch.addEventListener('input', () => {
      const q = pubSearch.value.toLowerCase().trim();
      pubCards.forEach(card => {
        const text = (card.getAttribute('data-pub-text') || '') + ' ' + card.textContent.toLowerCase();
        card.style.display = (!q || text.includes(q)) ? '' : 'none';
      });
      updatePubYearHeaders();
    });
  }

  // ─── Blog: filter + search + sidebar sync ────
  const blogFilterBtns = document.querySelectorAll('.filter-btn[data-blog-filter]');
  const blogCards      = document.querySelectorAll('.blog-card[data-blog-cat]');
  const noResultsEl    = document.getElementById('blog-no-results');

  function applyBlogFilter(cat) {
    let count = 0;
    blogCards.forEach(card => {
      const show = cat === 'all' || card.getAttribute('data-blog-cat') === cat;
      card.style.display = show ? '' : 'none';
      if (show) count++;
    });
    if (noResultsEl) noResultsEl.style.display = count === 0 ? 'block' : 'none';
    blogFilterBtns.forEach(b =>
      b.classList.toggle('active', b.getAttribute('data-blog-filter') === cat)
    );
    document.querySelectorAll('.cat-filter-btn[data-cat]').forEach(b =>
      b.classList.toggle('active', b.getAttribute('data-cat') === cat)
    );
  }

  blogFilterBtns.forEach(btn =>
    btn.addEventListener('click', () => applyBlogFilter(btn.getAttribute('data-blog-filter')))
  );

  document.querySelectorAll('.cat-filter-btn[data-cat]').forEach(btn =>
    btn.addEventListener('click', () => applyBlogFilter(btn.getAttribute('data-cat')))
  );

  const blogSearch = document.getElementById('blog-search');
  if (blogSearch && blogCards.length) {
    blogSearch.addEventListener('input', () => {
      const q = blogSearch.value.toLowerCase().trim();
      let count = 0;
      blogCards.forEach(card => {
        const text = (card.getAttribute('data-blog-text') || '') + ' ' + card.textContent.toLowerCase();
        const show = !q || text.includes(q);
        card.style.display = show ? '' : 'none';
        if (show) count++;
      });
      if (noResultsEl) noResultsEl.style.display = count === 0 ? 'block' : 'none';
    });
  }

  // ─── Subscribe button ────────────────────────
  const subscribeBtn = document.getElementById('subscribe-btn');
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
      const input = subscribeBtn.previousElementSibling;
      if (input && input.value && input.value.includes('@')) {
        subscribeBtn.textContent = '✓ Subscribed!';
        subscribeBtn.style.opacity = '0.75';
        subscribeBtn.disabled = true;
        input.value = '';
      } else if (input) {
        input.style.borderColor = 'var(--accent-crimson)';
        input.placeholder = 'Please enter a valid email';
        setTimeout(() => {
          input.style.borderColor = '';
          input.placeholder = 'your@email.com';
        }, 2000);
      }
    });
  }

  // ─── Keyword click-to-search (publications) ──
  document.querySelectorAll('.pub-keyword').forEach(kw => {
    kw.addEventListener('click', () => {
      const el = document.getElementById('pub-search');
      if (el) {
        el.value = kw.textContent;
        el.dispatchEvent(new Event('input'));
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // ─── Card mouse-tracking glow ─────────────────
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width  * 100) + '%');
      card.style.setProperty('--mouse-y', ((e.clientY - rect.top)  / rect.height * 100) + '%');
    });
  });

  // ─── Page load fade-in ───────────────────────
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.35s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });

});
