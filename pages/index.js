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
      image: '',
      github: 'https://github.com/RaheemSiddiqui527/real-chat-app',
      live: 'https://my-real-chat.vercel.app/'
    },
    {
      title: 'Restaurant Ordering System',
      description: 'A modern web-based restaurant ordering platform that allows customers to browse menus, place orders, and track their status in real-time. The system supports collaborative kitchen and service staff coordination through live updates, enhancing efficiency and customer experience. Built with a sleek UI and seamless real-time communication features.',
      tech: ['HTML',  'CSS', 'JS'],
      image: '',
      github: 'https://github.com/RaheemSiddiqui527/restaurant-website-1',
      live: 'https://my-restaurant-website-1.vercel.app/'
    },
    {
      title: 'Quiz App',
      description: 'A full-stack quiz application built with the MERN stack, designed to deliver dynamic quizzes with customizable categories, difficulty levels, and instant scoring. Users can take quizzes, view results in real-time, and track their performance. The backend handles user data and quiz logic, while the frontend offers an intuitive and responsive interface.',
      tech: ['MongoDB ', 'Express.js', 'React', 'Node.js'],
      image: '',
      github: 'https://github.com/RaheemSiddiqui527/quizz-aap',
      live: 'https://raheem-quizz-app.vercel.app/'
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
];



  return (
    <>
      <Head>
        <title>M.A.Raheem Siddiqui - Full Stack Developer</title>
        <meta name="description" content="Professional portfolio of a full stack developer specializing in React, Next.js, and modern web technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
                        src="/profile-photo.jpg" // You'll need to add your photo with this name to the public folder
                        alt="M.A.Raheem Siddiqui"
                        width={256}
                        height={256}
                        className="w-full h-full object-cover rounded-full"
                        priority
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
                  <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🚀</div>
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
