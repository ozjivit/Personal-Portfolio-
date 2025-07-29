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
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>I'm always interested in new opportunities and exciting projects. Let's work together!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>Feel free to reach out if you have any questions, want to collaborate on a project, or just want to say hello!</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>zainmalikethcalhacker@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+974 779 354 09 </p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Doha, Qatar</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="#" className="social-link">
                <span>💼</span> LinkedIn
              </a>
              <a href="#" className="social-link">
                <span>🐙</span> GitHub
              </a>
              <a href="#" className="social-link">
                <span>🐦</span> Twitter
              </a>
              <a href="#" className="social-link">
                <span>📸</span> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Me a Message</h2>
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
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project or just say hello!"
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