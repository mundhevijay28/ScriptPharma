import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './About.css';

function About() {
  const email = 'scriptpharma02@gmail.com';
  const whatsappNumber = '919405275697'; // Without the '+' for WhatsApp links

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h1>About ScriptPharma Solutions</h1>
        <p>
          At <span className="highlight-text">ScriptPharma Solutions</span>, we specialize in providing top-notch content writing services for individuals in the pharmacy, academic, and professional fields.
          Our goal is to help our clients achieve excellence through precision, clarity, and impactful writing.
        </p>

        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            We strive to support the academic and professional growth of our clients by delivering exceptional writing services, always ensuring quality and originality.
          </p>
        </div>

        <div className="about-why-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Experienced writers with deep expertise in pharmacy and academic fields.</li>
            <li>Comprehensive services to meet diverse needs, including research papers, essays, and professional reports.</li>
            <li>Commitment to delivering plagiarism-free, top-quality content that meets your exact requirements.</li>
          </ul>
        </div>

        <div className="about-team">
          <h2>Meet Our Team</h2>
          <p>
            Our team is made up of experienced writers, editors, and subject matter experts who are passionate about helping our clients succeed academically and professionally.
            We work collaboratively to ensure every piece of content meets the highest standards.
          </p>
        </div>

        <div className="cta-section">
          <h3>Ready to Get Started?</h3>
          <p>Contact us today to discuss how we can help you achieve your goals with expert writing services.</p>
          <div className="contact-options">
            <button
              className="contact-option-btn email-btn"
              onClick={() => window.location.href = `mailto:${email}`}
            >
              <FaEnvelope size={20} /> Contact by Email
            </button>
            <button
              className="contact-option-btn whatsapp-btn"
              onClick={() => window.location.href = `https://wa.me/${whatsappNumber}`}
            >
              <FaWhatsapp size={20} /> Contact via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
