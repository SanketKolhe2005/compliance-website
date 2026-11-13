
import { useState } from 'react'
import './App.css'

const A = '/assets/'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="website">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          <img src={`${A}Logo.png`} alt="Company Logo" />
        </a>

        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#services" onClick={closeMenu}>Our Services</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          ☎ Contact Us
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <img src={`${A}Menu.png`} alt="" />
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">

        <div className="hero-content">
          <h1>
            Simplifying <br />
            <span>Compliance</span> For <br />
            Research Analysts
          </h1>

          <p className="hero-description">
            Stay Focused On Your Insights—We'll Handle The Compliance.
            Our Expert Solutions Ensure Your Research Practices Meet
            Every Regulatory Requirement With Confidence And Ease.
          </p>

          <ul className="hero-list">
            <li>End-To-End Compliance Support</li>
            <li>Regulatory Filings Made Simple</li>
            <li>Tailored Solutions For Independent Analysts & Firms</li>
          </ul>

          <div className="hero-buttons">
            <a href="#services" className="primary-btn">
              Get Started
            </a>
            <a href="#contact" className="secondary-btn">
              Book A Consultation
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={`${A}Banner Image.png`}
            alt="Compliance research analyst illustration"
          />
        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="about section" id="about">

        <div className="about-content">
          <h2>About Us</h2>

          <p>
            Simplifying compliance for research analysts with expert
            support and reliable solutions.
          </p>
        </div>

        <div className="about-image">
          <img
            src={`${A}Section2-Image.png`}
            alt="Research analyst working with compliance data"
          />
        </div>

      </section>

      {/* SERVICES SECTION */}
      <section className="services section" id="services">

        <h2>Our Services</h2>

        <div className="service-grid">

          <div className="service-card">
            <img
              src={`${A}Hassle-Free Filings Clarity.png`}
              alt="Hassle-Free Filings"
            />
            <h3>Hassle-Free Filings</h3>
            <p>Simple and efficient regulatory filing support.</p>
          </div>

          <div className="service-card">
            <img
              src={`${A}Regulatory Clarity.png`}
              alt="Regulatory Clarity"
            />
            <h3>Regulatory Clarity</h3>
            <p>Understand regulatory requirements with confidence.</p>
          </div>

          <div className="service-card">
            <img
              src={`${A}Risk Protection.png`}
              alt="Risk Protection"
            />
            <h3>Risk Protection</h3>
            <p>Get support to manage compliance-related risks.</p>
          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="pricing section" id="pricing">

        <div className="section-heading">
          <img src={`${A}Pricing.png`} alt="" />
          <h2>Our Pricing</h2>
          <p>
            Explore compliance solutions designed around your requirements.
          </p>
        </div>

        <div className="pricing-content">
          <div className="pricing-card">
            <h3>Customized Solutions</h3>
            <p>
              Get compliance assistance tailored to your business needs.
            </p>
            <a href="#contact" className="primary-btn">
              Contact Us
            </a>
          </div>
        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="faq section" id="faq">

        <div className="section-heading">
          <img src={`${A}FAQ.png`} alt="" />
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our services.</p>
        </div>

        <div className="faq-content">

          <details>
            <summary>What services do you provide?</summary>
            <p>
              We provide compliance support and regulatory filing assistance
              for research analysts.
            </p>
          </details>

          <details>
            <summary>Who can use your services?</summary>
            <p>
              Our solutions are designed for independent research analysts
              and research firms.
            </p>
          </details>

          <details>
            <summary>How can I get started?</summary>
            <p>
              Contact our team to discuss your compliance requirements.
            </p>
          </details>

          <details>
            <summary>How can I book a consultation?</summary>
            <p>
              Use the contact section to enquire about a consultation.
            </p>
          </details>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact section" id="contact">

        <div className="section-heading">
          <img src={`${A}Contact.png`} alt="" />
          <h2>Contact Us</h2>
          <p>
            Have questions about compliance? Get in touch with our team.
          </p>
        </div>

        <div className="contact-content">
          <a href="#home" className="primary-btn">
            Back To Home
          </a>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        <img src={`${A}Logo.png`} alt="Company Logo" />
        <p>Compliance Support For Research Analysts</p>
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App
