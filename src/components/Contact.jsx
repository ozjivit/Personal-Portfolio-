import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon to discuss your design project.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>I'm always excited to work on new creative projects and bring your vision to life. Let's create something amazing together!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's Create Together</h2>
          <p>Whether you need a stunning logo, eye-catching social media graphics, or a complete brand identity, I'm here to help bring your creative vision to reality!</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>zainmalikethcalhacker@gmail.com</p>
              </div>
            </div>i
            
            <div className="contact-method">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+974 779 354 09</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Doha Qatar</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow My Work</h3>
            <div className="social-icons">
              <a href="#" className="social-link">
                <span>📸</span> Instagram
              </a>
              <a href="#" className="social-link">
                <span>🎨</span> Behance
              </a>
              <a href="#" className="social-link">
                <span>💼</span> LinkedIn
              </a>
              <a href="#" className="social-link">
                <span>🐦</span> Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Start Your Project</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Project Type</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Logo design, social media graphics, etc."
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Details *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project, brand, and vision. What are you looking to achieve?"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 