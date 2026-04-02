import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'about', 'education', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 120
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const { name, email, subject, message } = formData
    const whatsappNumber = '9321926162' // 🔴 Replace with your WhatsApp number (91 = India code, no + sign)
    const text = `👋 *New Portfolio Contact*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n\n*Message:*\n${message}`
    const encodedText = encodeURIComponent(text)
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`

    setTimeout(() => {
      setSubmitMessage("Opening WhatsApp... I'll get back to you soon! ✅")
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
      window.open(whatsappURL, '_blank')
      setTimeout(() => setSubmitMessage(''), 6000)
    }, 800)
  }

  const skills = ['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'AWS', 'Docker', 'Git', 'Figma']

  const projects = [
    {
      title: 'Real-time Chat App',
      description: 'Full-featured real-time chat app built using Next.js, Socket.io, and Node.js for seamless, secure communication.',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/RaheemSiddiqui527/real-chat-app',
      live: 'https://my-real-chat.vercel.app/'
    },
    {
      title: 'Restaurant Ordering System',
      description: 'Modern web-based restaurant platform — browse menus, place orders, track status in real-time with live kitchen coordination.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/RaheemSiddiqui527/restaurant-website-1',
      live: 'https://my-restaurant-website-1.vercel.app/'
    },
    {
      title: 'Quiz App',
      description: 'Full-stack MERN quiz application with custom categories, difficulty levels, instant scoring, and performance tracking.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/RaheemSiddiqui527/quizz-aap',
      live: 'https://raheem-quizz-app.vercel.app/'
    },
    {
      title: 'Task Management App',
      description: 'Full-stack task management app to efficiently organize, track, and manage daily tasks and projects.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/RaheemSiddiqui527/Task-Mangement-App',
      live: 'https://raheem-task-mangement.vercel.app/'
    },
    {
      title: 'Notepad',
      description: 'MERN note-taking app with minimalist UI, real-time updates, and persistent storage for everyday personal use.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/RaheemSiddiqui527/Notepad-App',
      live: 'https://raheem-Notepad.vercel.app/'
    },
    {
      title: 'Tailwind Dashboard',
      description: 'Full-stack MERN task dashboard with user authentication, task filtering, responsive design, and real-time updates.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com/RaheemSiddiqui527/tailwind-dashboard',
      live: 'https://raheem-tailwind-dashboard.vercel.app/'
    }
  ]

  const navItems = ['Home', 'About', 'Education', 'Projects', 'Experience', 'Contact']

  return (
    <>
      <Head>
        <title>M.A. Raheem Siddiqui — Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in React, Next.js, and modern web technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile-placeholder.svg" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --navy: #0f2557;
          --navy-mid: #1a3a7a;
          --navy-light: #2b5299;
          --accent: #1d4ed8;
          --accent-hover: #1e40af;
          --white: #ffffff;
          --off-white: #f8f9fc;
          --gray-50: #f1f5f9;
          --gray-100: #e2e8f0;
          --gray-300: #94a3b8;
          --gray-500: #64748b;
          --gray-700: #334155;
          --text: #0f172a;
          --font-display: 'DM Serif Display', Georgia, serif;
          --font-body: 'DM Sans', system-ui, sans-serif;
          --transition: 0.22s cubic-bezier(0.4, 0, 0.2, 1);
          --shadow-sm: 0 1px 3px rgba(15,37,87,0.08), 0 1px 2px rgba(15,37,87,0.04);
          --shadow-md: 0 4px 16px rgba(15,37,87,0.10), 0 2px 4px rgba(15,37,87,0.05);
          --shadow-lg: 0 10px 40px rgba(15,37,87,0.13);
        }
        html { scroll-behavior: smooth; }
        body { font-family: var(--font-body); background: var(--white); color: var(--text); line-height: 1.7; -webkit-font-smoothing: antialiased; }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        .nav.scrolled { border-bottom-color: var(--gray-100); box-shadow: var(--shadow-sm); }
        .nav-inner { max-width: 1100px; margin: 0 auto; padding: 0 2rem; height: 68px; display: flex; align-items: center; justify-content: space-between; }
        .nav-logo { font-family: var(--font-display); font-size: 1.15rem; color: var(--navy); cursor: pointer; letter-spacing: -0.01em; }
        .nav-links { display: flex; gap: 0.25rem; }
        .nav-link {
          font-size: 0.875rem; font-weight: 500; padding: 0.4rem 0.75rem; border-radius: 6px;
          color: var(--gray-500); background: none; border: none; cursor: pointer;
          transition: color var(--transition), background var(--transition);
        }
        .nav-link:hover { color: var(--navy); background: var(--gray-50); }
        .nav-link.active { color: var(--accent); background: rgba(29,78,216,0.07); }
        .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; }
        .hamburger-line { display: block; width: 22px; height: 1.5px; background: var(--navy); margin: 5px 0; transition: var(--transition); border-radius: 2px; }
        .mobile-menu { display: none; background: var(--white); border-top: 1px solid var(--gray-100); padding: 1rem 2rem; }
        .mobile-link { display: block; padding: 0.6rem 0; font-size: 0.9rem; font-weight: 500; color: var(--gray-700); cursor: pointer; border-bottom: 1px solid var(--gray-100); text-align: left; background: none; border-left: none; border-right: none; width: 100%; }
        .mobile-link:last-child { border-bottom: none; }
        .mobile-link.active { color: var(--accent); }

        /* SECTIONS */
        section { padding: 6rem 0; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
        .section-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem; }
        .section-title { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 2.75rem); color: var(--navy); line-height: 1.2; margin-bottom: 1.5rem; }
        .section-subtitle { font-size: 1.05rem; color: var(--gray-500); max-width: 540px; line-height: 1.75; }

        /* HERO */
        #home { padding: 0; min-height: 100vh; display: flex; align-items: center; background: var(--white); position: relative; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; background: linear-gradient(135deg, #f0f4ff 0%, #ffffff 60%); }
        .hero-dot-grid {
          position: absolute; inset: 0; opacity: 0.35;
          background-image: radial-gradient(circle, #1d4ed8 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .hero-content { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; padding: 0 2rem; padding-top: 68px; }
        .hero-tag { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(29,78,216,0.08); border: 1px solid rgba(29,78,216,0.15); border-radius: 100px; padding: 0.35rem 1rem; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em; color: var(--accent); text-transform: uppercase; margin-bottom: 2rem; }
        .hero-tag::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .hero-name { font-family: var(--font-display); font-size: clamp(2.8rem, 7vw, 5.5rem); line-height: 1.05; color: var(--navy); margin-bottom: 0.5rem; }
        .hero-name em { font-style: italic; color: var(--accent); }
        .hero-role { font-size: clamp(1rem, 2.5vw, 1.3rem); color: var(--gray-500); font-weight: 400; margin-bottom: 1.5rem; }
        .hero-desc { font-size: 1.05rem; color: var(--gray-500); max-width: 520px; line-height: 1.8; margin-bottom: 2.5rem; }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--navy); color: var(--white); padding: 0.75rem 1.75rem; border-radius: 8px; font-size: 0.9rem; font-weight: 500; cursor: pointer; border: none; transition: background var(--transition), transform var(--transition); text-decoration: none; }
        .btn-primary:hover { background: var(--navy-light); transform: translateY(-1px); }
        .btn-outline { display: inline-flex; align-items: center; gap: 0.5rem; background: transparent; color: var(--navy); border: 1.5px solid var(--navy); padding: 0.75rem 1.75rem; border-radius: 8px; font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: all var(--transition); text-decoration: none; }
        .btn-outline:hover { background: var(--navy); color: var(--white); }
        .hero-stat-row { display: flex; gap: 3rem; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--gray-100); flex-wrap: wrap; }
        .hero-stat { }
        .hero-stat-num { font-family: var(--font-display); font-size: 2rem; color: var(--navy); line-height: 1; }
        .hero-stat-label { font-size: 0.8rem; color: var(--gray-400); margin-top: 0.25rem; }

        /* ABOUT */
        #about { background: var(--off-white); }
        .about-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 5rem; align-items: start; }
        .about-photo-wrap { position: relative; }
        .about-photo-inner { width: 260px; height: 300px; border-radius: 16px; overflow: hidden; background: var(--gray-100); border: 1px solid var(--gray-100); box-shadow: var(--shadow-md); position: relative; }
        .about-photo-badge { position: absolute; bottom: -1rem; right: -1rem; background: var(--navy); color: var(--white); border-radius: 12px; padding: 0.75rem 1rem; font-size: 0.75rem; font-weight: 600; box-shadow: var(--shadow-md); }
        .about-photo-badge span { font-family: var(--font-display); font-size: 1.3rem; display: block; }
        .about-text .section-subtitle { max-width: 100%; margin-bottom: 2.5rem; }
        .skills-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
        .skill-tag { font-size: 0.8rem; font-weight: 500; padding: 0.35rem 0.85rem; border-radius: 6px; background: var(--white); border: 1px solid var(--gray-100); color: var(--gray-700); transition: all var(--transition); }
        .skill-tag:hover { border-color: var(--accent); color: var(--accent); background: rgba(29,78,216,0.04); }
        .social-row { display: flex; gap: 0.75rem; margin-top: 2rem; flex-wrap: wrap; }
        .social-link { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.82rem; font-weight: 500; color: var(--gray-500); padding: 0.4rem 0.9rem; border: 1px solid var(--gray-100); border-radius: 6px; text-decoration: none; transition: all var(--transition); background: var(--white); }
        .social-link:hover { color: var(--accent); border-color: var(--accent); background: rgba(29,78,216,0.04); }
        .social-link svg { width: 14px; height: 14px; flex-shrink: 0; }

        /* CARDS: shared */
        .card { background: var(--white); border: 1px solid var(--gray-100); border-radius: 14px; padding: 1.75rem; transition: box-shadow var(--transition), transform var(--transition), border-color var(--transition); }
        .card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); border-color: var(--gray-200); }

        /* EDUCATION */
        #education { background: var(--white); }
        .edu-list { display: flex; flex-direction: column; gap: 1.5rem; max-width: 780px; }
        .edu-card { display: flex; gap: 1.5rem; }
        .edu-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(29,78,216,0.08); display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid rgba(29,78,216,0.12); }
        .edu-icon svg { width: 20px; height: 20px; color: var(--accent); }
        .edu-body { }
        .edu-duration { font-size: 0.75rem; font-weight: 600; color: var(--accent); letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 0.35rem; }
        .edu-degree { font-size: 1.05rem; font-weight: 600; color: var(--navy); margin-bottom: 0.25rem; }
        .edu-inst { font-size: 0.88rem; color: var(--gray-500); margin-bottom: 0.75rem; }
        .edu-desc { font-size: 0.88rem; color: var(--gray-500); line-height: 1.65; margin-bottom: 1rem; }
        .edu-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .edu-tag { font-size: 0.75rem; padding: 0.25rem 0.7rem; border-radius: 5px; background: var(--gray-50); color: var(--gray-700); border: 1px solid var(--gray-100); }
        .divider { height: 1px; background: var(--gray-100); margin: 2rem 0; }

        /* PROJECTS */
        #projects { background: var(--off-white); }
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .project-card { display: flex; flex-direction: column; }
        .project-num { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; color: var(--gray-300); text-transform: uppercase; margin-bottom: 1rem; }
        .project-title { font-size: 1.05rem; font-weight: 600; color: var(--navy); margin-bottom: 0.6rem; }
        .project-desc { font-size: 0.85rem; color: var(--gray-500); line-height: 1.65; flex: 1; margin-bottom: 1.25rem; }
        .project-tech { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.25rem; }
        .tech-pill { font-size: 0.72rem; font-weight: 500; padding: 0.2rem 0.6rem; border-radius: 4px; background: rgba(15,37,87,0.06); color: var(--navy-light); }
        .project-links { display: flex; gap: 1rem; margin-top: auto; }
        .project-link { font-size: 0.8rem; font-weight: 500; color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 0.3rem; transition: color var(--transition); }
        .project-link:hover { color: var(--navy); }
        .project-link::after { content: '↗'; font-size: 0.75rem; }

        /* EXPERIENCE */
        #experience { background: var(--white); }
        .exp-card { max-width: 780px; }
        .exp-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem; }
        .exp-role { font-size: 1.1rem; font-weight: 600; color: var(--navy); }
        .exp-duration { font-size: 0.78rem; font-weight: 600; letter-spacing: 0.05em; color: var(--accent); text-transform: uppercase; background: rgba(29,78,216,0.07); padding: 0.25rem 0.7rem; border-radius: 5px; }
        .exp-company { font-size: 0.9rem; color: var(--gray-500); margin-bottom: 0.85rem; }
        .exp-desc { font-size: 0.9rem; color: var(--gray-500); line-height: 1.7; }

        /* CONTACT */
        #contact { background: var(--off-white); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; align-items: start; }
        .contact-info .section-subtitle { margin-bottom: 2.5rem; }
        .contact-item { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem; }
        .contact-icon { width: 42px; height: 42px; background: var(--white); border: 1px solid var(--gray-100); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .contact-icon svg { width: 16px; height: 16px; color: var(--accent); }
        .contact-item-label { font-size: 0.75rem; font-weight: 600; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.05em; }
        .contact-item-val { font-size: 0.88rem; color: var(--gray-700); }
        .form-card { background: var(--white); border: 1px solid var(--gray-100); border-radius: 16px; padding: 2.25rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
        .form-group { margin-bottom: 1rem; }
        label { display: block; font-size: 0.8rem; font-weight: 600; color: var(--gray-700); margin-bottom: 0.45rem; letter-spacing: 0.02em; }
        input, textarea {
          width: 100%; padding: 0.65rem 0.9rem; border-radius: 8px; border: 1px solid var(--gray-100);
          font-family: var(--font-body); font-size: 0.88rem; color: var(--text); background: var(--off-white);
          transition: border-color var(--transition), box-shadow var(--transition); outline: none;
        }
        input:focus, textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(29,78,216,0.1); background: var(--white); }
        input::placeholder, textarea::placeholder { color: var(--gray-300); }
        textarea { resize: vertical; min-height: 120px; }
        .submit-btn { width: 100%; background: var(--navy); color: var(--white); border: none; border-radius: 8px; padding: 0.8rem; font-family: var(--font-body); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: background var(--transition); margin-top: 0.5rem; }
        .submit-btn:hover:not(:disabled) { background: var(--navy-light); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .success-msg { background: rgba(29,78,216,0.07); border: 1px solid rgba(29,78,216,0.15); border-radius: 8px; padding: 0.85rem 1rem; font-size: 0.85rem; color: var(--accent); margin-bottom: 1.25rem; }

        /* FOOTER */
        footer { background: var(--navy); color: rgba(255,255,255,0.5); text-align: center; padding: 2.5rem; font-size: 0.82rem; }
        footer span { color: rgba(255,255,255,0.85); }

        /* SCROLL INDICATOR */
        .scroll-indicator { position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.5rem; cursor: pointer; }
        .scroll-mouse { width: 22px; height: 34px; border: 1.5px solid rgba(15,37,87,0.3); border-radius: 11px; position: relative; }
        .scroll-mouse::after { content: ''; position: absolute; top: 5px; left: 50%; transform: translateX(-50%); width: 3px; height: 6px; background: var(--accent); border-radius: 2px; animation: scrollDown 1.8s infinite; }
        @keyframes scrollDown { 0% { opacity: 1; top: 5px; } 100% { opacity: 0; top: 16px; } }
        .scroll-text { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gray-400); }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .about-photo-inner { width: 200px; height: 230px; }
          .about-photo-badge { bottom: -0.75rem; right: -0.75rem; }
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
        @media (max-width: 640px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .mobile-menu.open { display: block; }
          section { padding: 4rem 0; }
          .projects-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .hero-stat-row { gap: 2rem; }
          .hero-actions { flex-direction: column; }
          .btn-primary, .btn-outline { justify-content: center; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>M.A. Raheem Siddiqui</div>
          <div className="nav-links">
            {navItems.map(item => (
              <button key={item} className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`} onClick={() => scrollToSection(item.toLowerCase())}>{item}</button>
            ))}
          </div>
          <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            <span className="hamburger-line" style={isMenuOpen ? { transform: 'rotate(45deg) translate(4px, 4px)' } : {}}></span>
            <span className="hamburger-line" style={isMenuOpen ? { opacity: 0 } : {}}></span>
            <span className="hamburger-line" style={isMenuOpen ? { transform: 'rotate(-45deg) translate(4px, -4px)' } : {}}></span>
          </button>
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <button key={item} className={`mobile-link ${activeSection === item.toLowerCase() ? 'active' : ''}`} onClick={() => scrollToSection(item.toLowerCase())}>{item}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home">
        <div className="hero-bg"></div>
        <div className="hero-dot-grid"></div>
        <div className="hero-content">
          <div className="hero-tag mt-5">Available for Work</div>
          <h1 className="hero-name">M.A. <em>Raheem</em><br />Siddiqui</h1>
          <p className="hero-role">Full Stack Developer · MERN Stack · AI/ML</p>
          <p className="hero-desc">Building scalable, intelligent web applications with clean code and a focus on performance, usability, and real-world impact.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>View Projects</button>
            <button className="btn-outline" onClick={() => scrollToSection('contact')}>Get In Touch</button>
          </div>
          <div className="hero-stat-row">
            <div className="hero-stat">
              <div className="hero-stat-num">6+</div>
              <div className="hero-stat-label">Projects Shipped</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">MERN</div>
              <div className="hero-stat-label">Core Stack</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">AI/ML</div>
              <div className="hero-stat-label">Diploma Focus</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">2025</div>
              <div className="hero-stat-label">Currently Active</div>
            </div>
          </div>
        </div>
        {/* <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <div className="scroll-mouse"></div>
          <span className="scroll-text">Scroll</span>
        </div> */}
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-photo-wrap">
              <div className="about-photo-inner">
                <Image src="/profile.jpg" alt="M.A. Raheem Siddiqui" fill style={{ objectFit: 'cover' }} priority onError={e => { e.target.src = '/profile-placeholder.svg' }} />
              </div>
              <div className="about-photo-badge">
                <span>1+</span>Year Experience
              </div>
            </div>
            <div className="about-text">
              <p className="section-label">About Me</p>
              <h2 className="section-title">Passionate developer,<br />problem solver.</h2>
              <p className="section-subtitle">AI/ML-focused Full Stack Developer with hands-on experience building scalable web applications using the MERN stack. I enjoy turning complex problems into clean, efficient solutions with a focus on performance, usability, and real-world impact.</p>
              <div className="skills-grid">
                {skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
              <div className="social-row">
                <a href="https://github.com/RaheemSiddiqui527" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/codewithraheem" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/></svg>
                  LinkedIn
                </a>
                <a href="https://twitter.com/codewithraheem" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.95 4.57a10 10 0 01-2.82.77 4.96 4.96 0 002.16-2.72c-.95.56-2 .96-3.13 1.19a4.92 4.92 0 00-8.38 4.48C7.69 8.1 4.07 6.13 1.64 3.16a4.82 4.82 0 00-.67 2.48c0 1.71.87 3.21 2.19 4.1a4.9 4.9 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.83 5 5 0 01-2.21.08 4.94 4.94 0 004.6 3.42 9.87 9.87 0 01-6.1 2.1c-.4 0-.79-.02-1.17-.07a13.9 13.9 0 007.56 2.21c9.05 0 14-7.5 14-13.99 0-.21 0-.42-.02-.63A9.94 9.94 0 0024 4.59l-.05-.02z"/></svg>
                  Twitter
                </a>
                <a href="mailto:siddiquiraheem02@gmail.com" className="social-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="container">
          <p className="section-label">Background</p>
          <h2 className="section-title">Education</h2>
          <div className="edu-list">
            {[
              {
                degree: 'Diploma in Artificial Intelligence & Machine Learning',
                inst: "Anjuman-I-Islam's ARKP, Panvel (MSBTE)",
                duration: '2021 – 2025',
                desc: 'Focused on ML algorithms, deep learning, neural networks, and data science. Hands-on experience with Python, TensorFlow, and real-world AI/ML projects.',
                tags: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'Data Analytics']
              },
              {
                degree: 'Secondary School Certificate (SSC)',
                inst: 'Local High School',
                duration: '2020 – 2021',
                desc: 'Completed SSC with a focus on mathematics and science, building a solid foundation for technology and engineering.',
                tags: ['Mathematics', 'Science', 'Problem Solving', 'Computer Basics']
              }
            ].map((edu, i) => (
              <div key={i}>
                <div className="edu-card">
                  <div className="edu-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  </div>
                  <div className="edu-body">
                    <div className="edu-duration">{edu.duration}</div>
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-inst">{edu.inst}</div>
                    <div className="edu-desc">{edu.desc}</div>
                    <div className="edu-tags">{edu.tags.map(t => <span key={t} className="edu-tag">{t}</span>)}</div>
                  </div>
                </div>
                {i < 1 && <div className="divider" style={{ marginLeft: '60px' }}></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <p className="section-label">Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>A selection of projects that showcase my skills across the full stack.</p>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={p.title} className="card project-card">
                <div className="project-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.description}</div>
                <div className="project-tech">{p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}</div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="container">
          <p className="section-label">Career</p>
          <h2 className="section-title">Experience</h2>
          <div className="card exp-card">
            <div className="exp-header">
              <div className="exp-role">Senior Software Developer</div>
              <span className="exp-duration">2025 – Present</span>
            </div>
            <div className="exp-company">Nexcore Alliance LLP</div>
            <div className="exp-desc">Contributing to enterprise-level web applications with a focus on frontend development using React. Collaborating with cross-functional teams, implementing modern UI practices, and actively applying best coding standards in real-world projects.</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <p className="section-label">Contact</p>
              <h2 className="section-title">Let's work<br />together.</h2>
              <p className="section-subtitle">Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.</p>
              <div style={{ marginTop: '2rem' }}>
                {[
                  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: 'Email', val: 'siddiquiraheem02@gmail.com' },
                  { icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>, label: 'GitHub', val: 'RaheemSiddiqui527' },
                  { icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/></svg>, label: 'LinkedIn', val: 'codewithraheem' },
                ].map(item => (
                  <div key={item.label} className="contact-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-val">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="form-card">
                {submitMessage && <div className="success-msg">{submitMessage}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div><label>Name</label><input type="text" name="name" placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required /></div>
                    <div><label>Email</label><input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required /></div>
                  </div>
                  <div className="form-group"><label>Subject</label><input type="text" name="subject" placeholder="Project discussion" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} required /></div>
                  <div className="form-group"><label>Message</label><textarea name="message" placeholder="Tell me about your project..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required></textarea></div>
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>{isSubmitting ? 'Opening WhatsApp...' : '💬 Send via WhatsApp'}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
         © 2026 M.A.Raheem Siddiqui.  Crafted with Next.js and love for code.
      </footer>
    </>
  )
}