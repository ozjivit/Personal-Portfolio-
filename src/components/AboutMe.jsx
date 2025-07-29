import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'CSS/SCSS', level: 90 },
    { name: 'Git', level: 85 }
  ];

  return (
    <div className="about-me">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="about-intro">
          I'm a passionate full-stack developer with a love for creating innovative solutions 
          and beautiful user experiences.
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>My Story</h2>
          <p>
            I started my journey in web development over 5 years ago, and since then, 
            I've worked on various projects ranging from small business websites to 
            complex enterprise applications. I believe in writing clean, maintainable 
            code and staying up-to-date with the latest technologies and best practices.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing 
            to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>

        <div className="about-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section">
          <h2>Education & Certifications</h2>
          <div className="education-item">
            <h3>Bachelor of Computer Science</h3>
            <p>University of Technology</p>
            <span>2020 - 2024</span>
          </div>
          <div className="education-item">
            <h3>Full Stack Web Development</h3>
            <p>Online Certification</p>
            <span>2023</span>
          </div>
        </div>

        <div className="about-section">
          <h2>Interests</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <span>🎯</span>
              <p>Problem Solving</p>
            </div>
            <div className="interest-item">
              <span>📚</span>
              <p>Learning New Tech</p>
            </div>
            <div className="interest-item">
              <span>🌍</span>
              <p>Open Source</p>
            </div>
            <div className="interest-item">
              <span>🎨</span>
              <p>UI/UX Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 