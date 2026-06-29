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
    const whatsappNumber = '919321926162'
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

  // ✅ FIXED: Removed duplicate DevNotes entry
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "A scalable real-time messaging platform featuring instant communication, secure authentication, responsive UI, and Socket.io-powered live messaging.",
      tech: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/RaheemSiddiqui527/real-chat-app",
      live: "https://my-real-chat.vercel.app/"
    },
    {
      title: "Restaurant Ordering Platform",
      description: "A modern restaurant web application that allows customers to explore menus, place food orders, and enjoy a seamless online ordering experience with a responsive interface.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/RaheemSiddiqui527/restaurant-website-1",
      live: "https://my-restaurant-website-1.vercel.app/"
    },
    {
      title: "MERN Quiz Application",
      description: "A full-stack quiz platform built with the MERN stack, featuring multiple quiz categories, difficulty levels, instant scoring, and performance tracking.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/RaheemSiddiqui527/quizz-aap",
      live: "https://raheem-quizz-app.vercel.app/"
    },
    {
      title: "DevNotes – Developer Learning Hub",
      description: "A comprehensive developer resource platform featuring 43+ programming language cheat sheets, coding references, development resources, and a powerful note management system to help developers learn, organize, and boost productivity.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/RaheemSiddiqui527/DevNotes",
      live: "https://dev-notes-site.vercel.app/"
    },
    {
      title: "Student Helper Platform",
      description: "A student support platform designed to simplify academic collaboration by enabling users to create, manage, and respond to educational help requests.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/RaheemSiddiqui527/Student-Helper-user",
      live: "https://student-helper-vwn3.vercel.app/"
    },
    {
      title: "Hospital Management System",
      description: "A comprehensive hospital management solution for efficiently managing patients, appointments, medical records, and administrative workflows through a centralized dashboard.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/RaheemSiddiqui527/HMS_Frontend",
      live: "https://sunnidawateislami-health.vercel.app/"
    }
  ]

  const navItems = ['Home', 'About', 'Education', 'Projects', 'Experience', 'Contact']

  return (
    <>
      <Head>
        <title>M.A. Raheem Siddiqui — Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in React, Next.js, and modern web technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
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
          --gray-200: #cbd5e1;
          --gray-300: #94a3b8;
          --gray-400: #94a3b8;
          --gray-500: #64748b;
          --gray-700: #334155;
          --text: #0f172a;
          --font-display: 'DM Serif Display', Georgia, serif;
          --font-body: 'DM Sans', system-ui, sans-serif;
          --transition: 0.22s cubic-bezier(0.4, 0, 0.2, 1);
          --shadow-sm: 0 1px 3px rgba(15,37,87,0.08), 0 1px 2px rgba(15,37,87,0.04);
          --shadow-md: 0 4px 16px rgba(15,37,87,0.10), 0 2px 4px rgba(15,37,87,0.05);
          --shadow-lg: 0 10px 40px rgba(15,37,87,0.13);
          --nav-h: 68px;
        }

        html { scroll-behavior: smooth; }
        body {
          font-family: var(--font-body);
          background: var(--white);
          color: var(--text);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        /* ── NAV ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid transparent;
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        .nav.scrolled {
          border-bottom-color: var(--gray-100);
          box-shadow: var(--shadow-sm);
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 2.5rem;
          height: var(--nav-h); display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: var(--font-display); font-size: 1.15rem; color: var(--navy);
          cursor: pointer; letter-spacing: -0.01em; user-select: none;
        }
        .nav-links { display: flex; gap: 0.25rem; }
        .nav-link {
          font-size: 0.875rem; font-weight: 500; padding: 0.4rem 0.85rem;
          border-radius: 6px; color: var(--gray-500); background: none; border: none;
          cursor: pointer; transition: color var(--transition), background var(--transition);
          font-family: var(--font-body);
        }
        .nav-link:hover { color: var(--navy); background: var(--gray-50); }
        .nav-link.active { color: var(--accent); background: rgba(29,78,216,0.07); }

        .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; }
        .hamburger-line {
          display: block; width: 22px; height: 1.5px; background: var(--navy);
          margin: 5px 0; transition: var(--transition); border-radius: 2px;
        }
        .mobile-menu { display: none; background: var(--white); border-top: 1px solid var(--gray-100); padding: 1rem 2rem; }
        .mobile-link {
          display: block; padding: 0.65rem 0; font-size: 0.9rem; font-weight: 500;
          color: var(--gray-700); cursor: pointer; border-bottom: 1px solid var(--gray-100);
          text-align: left; background: none; border-left: none; border-right: none;
          width: 100%; font-family: var(--font-body);
        }
        .mobile-link:last-child { border-bottom: none; }
        .mobile-link.active { color: var(--accent); }

        /* ── SECTIONS ── */
        section { padding: 7rem 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 2.5rem; }
        .section-label {
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem;
        }
        .section-title {
          font-family: var(--font-display); font-size: clamp(2rem, 4vw, 2.85rem);
          color: var(--navy); line-height: 1.18; margin-bottom: 1.25rem;
        }
        .section-subtitle {
          font-size: 1.05rem; color: var(--gray-500); max-width: 560px; line-height: 1.8;
        }

        /* ── HERO ── */
        #home {
          padding: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: var(--white);
          position: relative;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background: linear-gradient(140deg, #eef2ff 0%, #f0f4ff 35%, #ffffff 70%);
        }
        .hero-dot-grid {
          position: absolute; inset: 0; opacity: 0.3;
          background-image: radial-gradient(circle, #1d4ed8 1px, transparent 1px);
          background-size: 30px 30px;
        }
        /* ✅ FIXED: Properly centered hero content with nav offset */
        .hero-content {
          position: relative; z-index: 2;
          width: 100%; max-width: 1200px;
          margin: 0 auto;
          padding: calc(var(--nav-h) + 4rem) 2.5rem 5rem;
        }
        /* ✅ FIXED: Removed Tailwind mt-5, using pure CSS margin-bottom */
        .hero-tag {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(29,78,216,0.08); border: 1px solid rgba(29,78,216,0.16);
          border-radius: 100px; padding: 0.38rem 1.1rem;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.09em;
          color: var(--accent); text-transform: uppercase;
          margin-bottom: 2rem;  /* ✅ was mt-5 before — now fixed */
        }
        .hero-tag::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); animation: pulse 2s infinite;
        }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7.5vw, 6rem);
          line-height: 1.03; color: var(--navy); margin-bottom: 0.6rem;
          letter-spacing: -0.01em;
        }
        .hero-name em { font-style: italic; color: var(--accent); }
        .hero-role {
          font-size: clamp(1rem, 2.2vw, 1.2rem); color: var(--gray-400);
          font-weight: 400; margin-bottom: 1.5rem; letter-spacing: 0.01em;
        }
        .hero-desc {
          font-size: 1.05rem; color: var(--gray-500);
          max-width: 540px; line-height: 1.82; margin-bottom: 2.75rem;
        }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--navy); color: var(--white); padding: 0.8rem 1.9rem;
          border-radius: 8px; font-size: 0.9rem; font-weight: 500;
          cursor: pointer; border: none;
          transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
          text-decoration: none; font-family: var(--font-body);
        }
        .btn-primary:hover { background: var(--navy-light); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(15,37,87,0.18); }
        .btn-outline {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: transparent; color: var(--navy); border: 1.5px solid rgba(15,37,87,0.3);
          padding: 0.8rem 1.9rem; border-radius: 8px; font-size: 0.9rem; font-weight: 500;
          cursor: pointer; transition: all var(--transition); text-decoration: none;
          font-family: var(--font-body);
        }
        .btn-outline:hover { background: var(--navy); color: var(--white); border-color: var(--navy); }

        .hero-stat-row {
          display: flex; gap: 3.5rem; margin-top: 4.5rem;
          padding-top: 2.25rem; border-top: 1px solid var(--gray-100); flex-wrap: wrap;
        }
        .hero-stat-num {
          font-family: var(--font-display); font-size: 2.1rem;
          color: var(--navy); line-height: 1;
        }
        .hero-stat-label { font-size: 0.78rem; color: var(--gray-400); margin-top: 0.3rem; letter-spacing: 0.02em; }

        /* ── ABOUT ── */
        #about { background: var(--off-white); }
        .about-grid {
          display: grid; grid-template-columns: 280px 1fr;
          gap: 5rem; align-items: start;
        }
        .about-photo-wrap { position: relative; }
        .about-photo-inner {
          width: 260px; height: 310px; border-radius: 16px;
          overflow: hidden; background: var(--gray-100);
          border: 1px solid var(--gray-100); box-shadow: var(--shadow-md); position: relative;
        }
        .about-photo-badge {
          position: absolute; bottom: -1rem; right: -1rem;
          background: var(--navy); color: var(--white); border-radius: 12px;
          padding: 0.75rem 1rem; font-size: 0.75rem; font-weight: 600;
          box-shadow: var(--shadow-md); line-height: 1.3;
        }
        .about-photo-badge span { font-family: var(--font-display); font-size: 1.4rem; display: block; }
        .about-text .section-subtitle { max-width: 100%; margin-bottom: 2rem; }

        .skills-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
        .skill-tag {
          font-size: 0.8rem; font-weight: 500; padding: 0.35rem 0.9rem;
          border-radius: 6px; background: var(--white); border: 1px solid var(--gray-100);
          color: var(--gray-700); transition: all var(--transition); cursor: default;
        }
        .skill-tag:hover { border-color: var(--accent); color: var(--accent); background: rgba(29,78,216,0.04); }

        .social-row { display: flex; gap: 0.75rem; margin-top: 2rem; flex-wrap: wrap; }
        .social-link {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.82rem; font-weight: 500; color: var(--gray-500);
          padding: 0.4rem 1rem; border: 1px solid var(--gray-100); border-radius: 6px;
          text-decoration: none; transition: all var(--transition); background: var(--white);
        }
        .social-link:hover { color: var(--accent); border-color: var(--accent); background: rgba(29,78,216,0.04); }
        .social-link svg { width: 14px; height: 14px; flex-shrink: 0; }

        /* ── SHARED CARD ── */
        .card {
          background: var(--white); border: 1px solid var(--gray-100); border-radius: 14px;
          padding: 1.75rem;
          transition: box-shadow var(--transition), transform var(--transition), border-color var(--transition);
        }
        .card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); border-color: var(--gray-200); }

        /* ── EDUCATION ── */
        #education { background: var(--white); }
        .edu-list { display: flex; flex-direction: column; gap: 1.5rem; max-width: 820px; }
        .edu-card { display: flex; gap: 1.5rem; }
        .edu-icon {
          width: 44px; height: 44px; border-radius: 10px;
          background: rgba(29,78,216,0.08); display: flex; align-items: center;
          justify-content: center; flex-shrink: 0; border: 1px solid rgba(29,78,216,0.12);
        }
        .edu-icon svg { width: 20px; height: 20px; color: var(--accent); }
        .edu-duration {
          font-size: 0.73rem; font-weight: 600; color: var(--accent);
          letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 0.35rem;
        }
        .edu-degree { font-size: 1.05rem; font-weight: 600; color: var(--navy); margin-bottom: 0.25rem; }
        .edu-inst { font-size: 0.88rem; color: var(--gray-500); margin-bottom: 0.75rem; }
        .edu-desc { font-size: 0.88rem; color: var(--gray-500); line-height: 1.65; margin-bottom: 1rem; }
        .edu-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .edu-tag {
          font-size: 0.73rem; padding: 0.25rem 0.7rem; border-radius: 5px;
          background: var(--gray-50); color: var(--gray-700); border: 1px solid var(--gray-100);
        }
        .divider { height: 1px; background: var(--gray-100); margin: 2rem 0; }

        /* ── PROJECTS ── */
        #projects { background: var(--off-white); }
        .projects-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem;
        }
        .project-card { display: flex; flex-direction: column; }
        .project-num {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em;
          color: var(--gray-300); text-transform: uppercase; margin-bottom: 0.9rem;
        }
        .project-title { font-size: 1.05rem; font-weight: 600; color: var(--navy); margin-bottom: 0.6rem; }
        .project-desc { font-size: 0.85rem; color: var(--gray-500); line-height: 1.65; flex: 1; margin-bottom: 1.25rem; }
        .project-tech { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.25rem; }
        .tech-pill {
          font-size: 0.71rem; font-weight: 500; padding: 0.22rem 0.62rem; border-radius: 4px;
          background: rgba(15,37,87,0.06); color: var(--navy-light);
        }
        .project-links { display: flex; gap: 1.25rem; margin-top: auto; }
        .project-link {
          font-size: 0.8rem; font-weight: 500; color: var(--accent);
          text-decoration: none; display: flex; align-items: center; gap: 0.3rem;
          transition: color var(--transition);
        }
        .project-link:hover { color: var(--navy); }
        .project-link::after { content: '↗'; font-size: 0.72rem; }

        /* ── EXPERIENCE ── */
        #experience { background: var(--white); }
        .exp-card { max-width: 820px; }
        .exp-header {
          display: flex; justify-content: space-between; align-items: flex-start;
          margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;
        }
        .exp-role { font-size: 1.1rem; font-weight: 600; color: var(--navy); }
        .exp-duration {
          font-size: 0.76rem; font-weight: 600; letter-spacing: 0.05em; color: var(--accent);
          text-transform: uppercase; background: rgba(29,78,216,0.07); padding: 0.25rem 0.75rem;
          border-radius: 5px;
        }
        .exp-company { font-size: 0.9rem; color: var(--gray-500); margin-bottom: 0.85rem; }
        .exp-desc { font-size: 0.9rem; color: var(--gray-500); line-height: 1.75; }

        /* ── CONTACT ── */
        #contact { background: var(--off-white); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; align-items: start; }
        .contact-info .section-subtitle { margin-bottom: 2.5rem; }
        .contact-item { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem; }
        .contact-icon {
          width: 42px; height: 42px; background: var(--white); border: 1px solid var(--gray-100);
          border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .contact-icon svg { width: 16px; height: 16px; color: var(--accent); }
        .contact-item-label {
          font-size: 0.72rem; font-weight: 600; color: var(--gray-400);
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .contact-item-val { font-size: 0.88rem; color: var(--gray-700); }

        .form-card {
          background: var(--white); border: 1px solid var(--gray-100);
          border-radius: 16px; padding: 2.25rem; box-shadow: var(--shadow-sm);
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
        .form-group { margin-bottom: 1rem; }
        label {
          display: block; font-size: 0.8rem; font-weight: 600; color: var(--gray-700);
          margin-bottom: 0.45rem; letter-spacing: 0.02em;
        }
        input, textarea {
          width: 100%; padding: 0.7rem 1rem; border-radius: 8px;
          border: 1px solid var(--gray-100); font-family: var(--font-body);
          font-size: 0.88rem; color: var(--text); background: var(--off-white);
          transition: border-color var(--transition), box-shadow var(--transition); outline: none;
        }
        input:focus, textarea:focus {
          border-color: var(--accent); box-shadow: 0 0 0 3px rgba(29,78,216,0.1);
          background: var(--white);
        }
        input::placeholder, textarea::placeholder { color: var(--gray-300); }
        textarea { resize: vertical; min-height: 130px; }
        .submit-btn {
          width: 100%; background: var(--navy); color: var(--white); border: none;
          border-radius: 8px; padding: 0.85rem; font-family: var(--font-body);
          font-size: 0.9rem; font-weight: 500; cursor: pointer;
          transition: background var(--transition), box-shadow var(--transition); margin-top: 0.5rem;
        }
        .submit-btn:hover:not(:disabled) { background: var(--navy-light); box-shadow: 0 4px 14px rgba(15,37,87,0.2); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .success-msg {
          background: rgba(29,78,216,0.07); border: 1px solid rgba(29,78,216,0.15);
          border-radius: 8px; padding: 0.85rem 1rem; font-size: 0.85rem;
          color: var(--accent); margin-bottom: 1.25rem;
        }

        /* ── FOOTER ── */
        footer {
          background: var(--navy); color: rgba(255,255,255,0.5);
          text-align: center; padding: 2.5rem; font-size: 0.82rem;
        }
        footer span { color: rgba(255,255,255,0.85); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
          .about-photo-inner { width: 200px; height: 240px; }
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
        @media (max-width: 640px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .mobile-menu.open { display: block; }
          section { padding: 4.5rem 0; }
          .container { padding: 0 1.25rem; }
          .nav-inner { padding: 0 1.25rem; }
          .hero-content { padding: calc(var(--nav-h) + 2.5rem) 1.25rem 4rem; }
          .projects-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .hero-stat-row { gap: 2rem; }
          .hero-actions { flex-direction: column; max-width: 320px; }
          .btn-primary, .btn-outline { justify-content: center; }
          .about-photo-wrap { display: flex; justify-content: center; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>M.A. Raheem Siddiqui</div>
          <div className="nav-links">
            {navItems.map(item => (
              <button
                key={item}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            <span className="hamburger-line" style={isMenuOpen ? { transform: 'rotate(45deg) translate(4px, 4px)' } : {}} />
            <span className="hamburger-line" style={isMenuOpen ? { opacity: 0 } : {}} />
            <span className="hamburger-line" style={isMenuOpen ? { transform: 'rotate(-45deg) translate(4px, -4px)' } : {}} />
          </button>
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <button
              key={item}
              className={`mobile-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="home">
        <div className="hero-bg" />
        <div className="hero-dot-grid" />
        <div className="hero-content">
          <div className="hero-tag">Available for Work</div>
          <h1 className="hero-name">M.A. <em>Raheem</em><br />Siddiqui</h1>
          <p className="hero-role">Full Stack Developer · MERN Stack · AI/ML</p>
          <p className="hero-desc">Building scalable, intelligent web applications with clean code and a focus on performance, usability, and real-world impact.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>View Projects</button>
            <button className="btn-outline" onClick={() => scrollToSection('contact')}>Get In Touch</button>
          </div>
          <div className="hero-stat-row">
            <div>
              <div className="hero-stat-num">6+</div>
              <div className="hero-stat-label">Projects Shipped</div>
            </div>
            <div>
              <div className="hero-stat-num">MERN</div>
              <div className="hero-stat-label">Core Stack</div>
            </div>
            <div>
              <div className="hero-stat-num">AI/ML</div>
              <div className="hero-stat-label">Diploma Focus</div>
            </div>
            <div>
              <div className="hero-stat-num">2025</div>
              <div className="hero-stat-label">Currently Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-photo-wrap">
              <div className="about-photo-inner">
                <Image
                  src="/profile.jpg"
                  alt="M.A. Raheem Siddiqui"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  // ✅ FIXED: onError uses proper Next.js pattern
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
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
                <a href="https://instagram.com/codewithraheem" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
                <a href="https://wa.me/919321926162" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
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

      {/* ── EDUCATION ── */}
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  <div>
                    <div className="edu-duration">{edu.duration}</div>
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-inst">{edu.inst}</div>
                    <div className="edu-desc">{edu.desc}</div>
                    <div className="edu-tags">{edu.tags.map(t => <span key={t} className="edu-tag">{t}</span>)}</div>
                  </div>
                </div>
                {i < 1 && <div className="divider" style={{ marginLeft: '60px' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <div className="container">
          <p className="section-label">Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>A selection of projects that showcase my skills across the full stack.</p>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={`${p.title}-${i}`} className="card project-card">
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

      {/* ── EXPERIENCE ── */}
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

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <p className="section-label">Contact</p>
              <h2 className="section-title">Let's work<br />together.</h2>
              <p className="section-subtitle">Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.</p>
              <div style={{ marginTop: '2rem' }}>
                {[
                  {
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                    label: 'Email', val: 'siddiquiraheem02@gmail.com'
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>,
                    label: 'GitHub', val: 'RaheemSiddiqui527'
                  },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/></svg>,
                    label: 'LinkedIn', val: 'codewithraheem'
                  },
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
                    <div>
                      <label>Name</label>
                      <input type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div>
                      <label>Email</label>
                      <input type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Project discussion" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Tell me about your project..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required />
                  </div>
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Opening WhatsApp...' : '💬 Send via WhatsApp'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        © 2026 <span>M.A. Raheem Siddiqui</span>. Crafted with Next.js and love for code.
      </footer>
    </>
  )
}