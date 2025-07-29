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
            Full-Stack Developer & Creative Problem Solver
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
      
      <div className="features-section">
        <h2>What I Do</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Web Development</h3>
            <p>Creating responsive and modern web applications using the latest technologies.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Apps</h3>
            <p>Building cross-platform mobile applications with React Native and Flutter.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Designing beautiful and intuitive user interfaces that enhance user experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 