import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const designSkills = [
    { name: 'Adobe Photoshop', level: 95 },
    { name: 'Adobe Illustrator', level: 90 },
    { name: 'Adobe InDesign', level: 85 },
    { name: 'Canva', level: 90 },
    { name: 'Typography', level: 88 },
    { name: 'Color Theory', level: 92 }
  ];

  const developmentSkills = [
    { name: 'React Native', level: 88 },
    { name: 'Flutter', level: 85 },
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 92 },
    { name: 'UI/UX Design', level: 87 },
    { name: 'Mobile Development', level: 89 }
  ];

  return (
    <div className="about-me">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="about-intro">
          I'm a passionate creative professional who bridges the gap between design and development. 
          With expertise in both graphics design and app development, I create solutions that are not only 
          visually stunning but also functionally excellent.
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>My Story</h2>
          <p>
            My journey began in 2019 when I discovered my passion for graphic design. I started creating logos, 
            brand identities, and marketing materials for local businesses, learning the fundamentals of visual 
            communication and design principles.
          </p>
          <p>
            In 2021, I ventured into the world of app development, learning React Native and Flutter. 
            This opened up a whole new dimension of creativity - the ability to not just design beautiful 
            interfaces, but to actually build them into functional applications.
          </p>
          <p>
            Today, I offer a unique combination of skills that allows me to handle projects from concept 
            to deployment. Whether it's designing a brand identity, creating a mobile app, or developing 
            a website, I ensure that both the visual design and technical implementation work harmoniously together.
          </p>
        </div>

        <div className="about-section">
          <h2>Design Skills & Tools</h2>
          <div className="skills-container">
            {designSkills.map((skill, index) => (
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
          <h2>Development Skills & Technologies</h2>
          <div className="skills-container">
            {developmentSkills.map((skill, index) => (
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
            <h3>Bachelor of Graphic Design</h3>
            <p>G.H.S.S Hathian</p>
            <span>2022  </span>
          </div>
          <div className="education-item">
            <h3>Mobile App Development Certification</h3>
            <p>React Native & Flutter</p>
            <span>2022</span>
          </div>
          <div className="education-item">
            <h3>Adobe Creative Suite Certification</h3>
            <p>Adobe Certified Professional</p>
            <span>2023</span>
          </div>
        </div>

        <div className="about-section">
          <h2>What Makes Me Different</h2>
          <div className="unique-qualities">
            <div className="quality-item">
              <span>🎨</span>
              <h3>Design-First Approach</h3>
              <p>Every project starts with thoughtful design, ensuring visual appeal and user experience are prioritized.</p>
            </div>
            <div className="quality-item">
              <span>💻</span>
              <h3>Technical Excellence</h3>
              <p>Strong development skills ensure that beautiful designs are implemented with clean, efficient code.</p>
            </div>
            <div className="quality-item">
              <span>🚀</span>
              <h3>End-to-End Solutions</h3>
              <p>From concept to deployment, I handle every aspect of your project, ensuring consistency and quality.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Interests</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <span>🎨</span>
              <p>Digital Art</p>
            </div>
            <div className="interest-item">
              <span>📱</span>
              <p>Mobile Apps</p>
            </div>
            <div className="interest-item">
              <span>🌍</span>
              <p>Brand Identity</p>
            </div>
            <div className="interest-item">
              <span>🎯</span>
              <p>Creative Direction</p>
            </div>
            <div className="interest-item">
              <span>💻</span>
              <p>Web Development</p>
            </div>
            <div className="interest-item">
              <span>🚀</span>
              <p>Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 