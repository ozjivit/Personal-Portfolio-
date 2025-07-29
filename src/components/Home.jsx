import React from 'react';
import zainImage from '../assets/zain.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to My Portfolio
          </h1>
          <p className="hero-subtitle">
            Creative Graphics Designer & App Developer
          </p>
          <p className="hero-description">
            With over 5 years of experience in both design and development, I bridge the gap between creativity and technology. 
            From stunning visual designs to functional mobile applications, I bring ideas to life through both artistic vision and technical expertise.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Contact Me</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <img src={zainImage} alt="Zain" className="profile-photo" />
          </div>
        </div>
      </div>
      
      <div className="journey-section">
        <h2>My Journey</h2>
        <div className="journey-timeline">
          <div className="journey-item">
            <div className="journey-year">2019</div>
            <div className="journey-content">
              <h3>Started My Creative Journey</h3>
              <p>Began exploring graphic design with Adobe Creative Suite, creating logos and brand identities for local businesses.</p>
            </div>
          </div>
          <div className="journey-item">
            <div className="journey-year">2021</div>
            <div className="journey-content">
              <h3>Ventured into App Development</h3>
              <p>Discovered my passion for mobile app development, learning React Native and Flutter to create cross-platform applications.</p>
            </div>
          </div>
          <div className="journey-item">
            <div className="journey-year">2023</div>
            <div className="journey-content">
              <h3>Combined Design & Development</h3>
              <p>Started creating apps with custom UI/UX designs, ensuring both functionality and visual appeal work seamlessly together.</p>
            </div>
          </div>
          <div className="journey-item">
            <div className="journey-year">2024</div>
            <div className="journey-content">
              <h3>Full-Stack Creative Solutions</h3>
              <p>Now offering complete solutions from concept to deployment, handling both design and development aspects of projects.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <h2>What I Do</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Logo Design</h3>
            <p>Creating unique and memorable brand identities that capture the essence of your business and leave a lasting impression.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile App Development</h3>
            <p>Building cross-platform mobile applications with React Native and Flutter, combining functionality with beautiful design.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🖼️</div>
            <h3>Print Design</h3>
            <p>Designing beautiful brochures, business cards, posters, and other print materials that effectively communicate your message.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Web Development</h3>
            <p>Creating responsive websites and web applications with modern technologies like React, ensuring both performance and aesthetics.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>UI/UX Design</h3>
            <p>Designing intuitive user interfaces and user experiences that enhance user engagement and satisfaction.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Full-Stack Solutions</h3>
            <p>Providing end-to-end solutions from design concept to final deployment, handling both creative and technical aspects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 