import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Maryam Babar</h2>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#vision">Vision</a></li>
          <li><a href="#contact" className="contact-btn">Contact Me</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm <span className="highlight">Maryam Babar</span></h1>
        <h3>Full-Stack Web Developer & AI Enthusiast</h3>
        
        <p className="description">
          6th Semester Computer Science Student at University of Gujrat (UOG). 
          Mandi Bahauddin Sub-Campus. Passionate about building reactive web 
          interfaces, modern UI design, and mastering Cloud & Generative AI 
          technologies.
        </p>

        <div className="info-tags">
          <span>📍 Mandi Bahauddin, Punjab, Pakistan</span>
          <span>🎓 CGPA: 3.32 / 4.00</span>
        </div>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Get In Touch</a>
          <a href="https://linkedin.com" target="_blank" className="btn-secondary">LinkedIn Profile</a>
        </div>
      </section>
    </div>
  )
}

export default App
