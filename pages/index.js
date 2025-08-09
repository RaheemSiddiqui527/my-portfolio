import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1000)
  }

  const skills = [
    'JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'TypeScript',
    'MongoDB',  'AWS', 'Docker', 'Git', 'Figma'
  ]

  const projects = [
    {
      title: 'Real-time Chat App',
      description: 'A full-featured real-time chat app built using Next.js, Socket.io, and Node.js, designed for seamless and secure communication.',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      image: '/chat-app.svg',
      github: 'https://github.com/RaheemSiddiqui527/real-chat-app',
      live: 'https://my-real-chat.vercel.app/'
    },
    {
      title: 'Restaurant Ordering System',
      description: 'A modern web-based restaurant ordering platform that allows customers to browse menus, place orders, and track their status in real-time. The system supports collaborative kitchen and service staff coordination through live updates, enhancing efficiency and customer experience. Built with a sleek UI and seamless real-time communication features.',
      tech: ['HTML',  'CSS', 'JS'],
      image: '/restaurant-app.svg',
      github: 'https://github.com/RaheemSiddiqui527/restaurant-website-1',
      live: 'https://my-restaurant-website-1.vercel.app/'
    },
    {
      title: 'Quiz App',
      description: 'A full-stack quiz application built with the MERN stack, designed to deliver dynamic quizzes with customizable categories, difficulty levels, and instant scoring. Users can take quizzes, view results in real-time, and track their performance. The backend handles user data and quiz logic, while the frontend offers an intuitive and responsive interface.',
      tech: ['MongoDB ', 'Express.js', 'React', 'Node.js'],
      image: '/quiz-app.svg',
      github: 'https://github.com/RaheemSiddiqui527/quizz-aap',
      live: 'https://raheem-quizz-app.vercel.app/'
    },
    {
      title: 'Task Management App',
      description: 'A full-stack task management application designed to help users efficiently organize, track, and manage their daily tasks and projects. The app offers a clean and responsive UI, with features that enhance productivity and collaboration.',
      tech: ['MongoDB ', 'Express.js', 'React', 'Node.js'],
      image: '/task-app.svg',
      github: 'https://github.com/RaheemSiddiqui527/Task-Mangement-App',
      live: 'https://raheem-task-mangement.vercel.app/'
    },
    {
      title: 'Notepad',
      description: 'A full-stack note-taking application built with the MERN stack, designed to help users create, edit, and manage personal notes with ease. The app features a minimalist and responsive UI, real-time updates, and persistent storage, making it ideal for everyday use.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      image: '/Notepad-app.svg',
      github: 'https://github.com/RaheemSiddiqui527/Notepad-App',
      live: 'https://raheem-Notepad.vercel.app/'
    },
    {
      title: 'Tailwind Dashboard',
      description: 'A full-stack task management dashboard built with the MERN stack and styled using Tailwind CSS. This application allows users to create, update, delete, and manage tasks with a modern and intuitive user interface. Features include user authentication, task filtering by status, responsive design, and real-time updates for a seamless experience.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
      image: '/dashboard-app.svg',
      github: 'https://github.com/RaheemSiddiqui527/tailwind-dashboard',
      live: 'https://raheem-tailwind-dashboard.vercel.app/'
    }
  ]

  const experience = [
    {
      role: 'Junior Software Developer',
      company: 'Nexcore Alliance.',
      duration: '2025 - Present',
      description: 'Contributing to the development of enterprise-level web applications with a focus on frontend using React. Collaborating with cross-functional teams, implementing modern UI practices, and actively learning and applying best coding standards in real-world projects.'
    }
  ]

  const education = [
    {
      degree: 'Diploma in Artificial Intelligence & Machine Learning',
      institution: "Anjuman-I-Islam's Abdul Razzak Kalsekar Polytechnic, Panvel (MSBTE)",
      duration: '2021 - 2025',
      description:
        'Focused on core areas of AI and ML including machine learning algorithms, deep learning, neural networks, and data science. Gained hands-on experience with Python, TensorFlow, and real-world AI/ML projects.',
      achievements: [
        'Machine Learning & Deep Learning',
        'Python Programming & TensorFlow',
        'Data Analytics & Visualization',
        'AI-Based Project Development',
      ],
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Local High School',
      duration: '2020 - 2021',
      description:
        'Completed SSC with a focus on mathematics and science, laying a solid foundation for a future in technology and engineering.',
      achievements: [
        'Strong Foundation in Math & Science',
        'Basic Computer Literacy',
        'Problem-Solving & Logical Thinking',
        'Academic Achievement',
      ],
    },
  ]

  return (
    <>
      <Head>
        <title>M.A.Raheem Siddiqui - Full Stack Developer</title>
        <meta name="description" content="Professional portfolio of a full stack developer specializing in React, Next.js, and modern web technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile-placeholder.svg" />
      </Head>

      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
                onClick={() => scrollToSection('home')}
              >
                M.A.Raheem Siddiqui
              </motion.div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Education', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`hover:text-purple-300 transition-colors duration-200 relative group ${
                      activeSection === item.toLowerCase() ? 'text-purple-300' : 'text-white'
                    }`}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-purple-400 transition-all duration-200 ${
                      activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden mt-4 pb-4"
              >
                <div className="flex flex-col space-y-4">
                  {['Home', 'About', 'Education', 'Projects', 'Experience', 'Contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-left hover:text-purple-300 transition-colors duration-200 ${
                        activeSection === item.toLowerCase() ? 'text-purple-300' : 'text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                 Full Stack Developer
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Crafting intelligent and scalable digital experiences using modern web technologies like React, Node.js, and MongoDB — with a passion for clean code, performance, and problem-solving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors"
            >
              <div className="w-1 h-3 bg-white/30 rounded-full mt-2"></div>
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Passionate AI/ML-focused Full stack developer with hands-on experience in building scalable web applications.
                I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have a strong foundation in Artificial Intelligence and Machine Learning, backed by a diploma in AIML. I enjoy turning complex problems into clean, efficient solutions with a focus on performance, usability, and real-world impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 items-center">
              {/* Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center md:justify-start"
              >
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                    <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
                      <Image
                        src="/profile.jpg"
                        alt="M.A.Raheem Siddiqui - Full Stack Developer"
                        width={256}
                        height={256}
                        className="w-full h-full object-cover rounded-full"
                        priority
                        onError={(e) => {
                          e.target.src = "/profile-placeholder.svg";
                        }}
                      />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
                </div>
              </motion.div>

              {/* Skills & Technologies */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-purple-300">Skills & Technologies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/20 transition-all duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* What I Do */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-purple-300 mb-4">What I Do</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>Frontend Development with React & Next.js</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>Backend Development with Node.js, Express.js  & Python</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>Database Design & Management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>Cloud Services & DevOps</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <h3 className="text-3xl font-bold text-purple-300 mb-8">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                {/* GitHub */}
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/RaheemSiddiqui527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <svg className="w-8 h-8 text-purple-400 group-hover:text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/codewithraheem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <svg className="w-8 h-8 text-purple-400 group-hover:text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>

                {/* Twitter */}
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://twitter.com/codewithraheem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <svg className="w-8 h-8 text-purple-400 group-hover:text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </motion.a>

                {/* Email */}
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:siddiquiraheem02@gmail.com"
                  className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <svg className="w-8 h-8 text-purple-400 group-hover:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.a>

               
                {/* Instagram */}
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://instagram.com/codewithraheem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <svg className="w-8 h-8 text-purple-400 group-hover:text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
              </div>
              
              {/* Social Media Labels */}
              <div className="flex justify-center space-x-6 mt-4">
                <span className="text-sm text-gray-400">GitHub</span>
                <span className="text-sm text-gray-400">LinkedIn</span>
                <span className="text-sm text-gray-400">Twitter</span>
                <span className="text-sm text-gray-400">Email</span>
                <span className="text-sm text-gray-400">Instagram</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Education
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                My educational journey and continuous learning path in technology and development
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="mb-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-purple-300">{edu.degree}</h3>
                    <span className="text-pink-300 font-semibold">{edu.duration}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">{edu.institution}</h4>
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <span
                        key={achievementIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Here are some of my recent projects that showcase my skills and creativity
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-6xl opacity-50">🚀</div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-purple-300">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-pink-300 transition-colors duration-200"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                My professional journey and key achievements
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="mb-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-purple-300">{exp.role}</h3>
                    <span className="text-pink-300 font-semibold">{exp.duration}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">{exp.company}</h4>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Ready to start your next project? Let's work together to create something amazing.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-200">
                    {submitMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors duration-200"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors duration-200"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors duration-200"
                      placeholder="Project Discussion"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors duration-200"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/40 py-8 border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">
              © 2025 M.A.Raheem Siddiqui.  Crafted with Next.js and love for code.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
