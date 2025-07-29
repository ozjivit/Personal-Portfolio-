import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Brand Identity Package",
      description: "Complete brand identity design including logo, business cards, letterhead, and brand guidelines for a tech startup. Created a modern, minimalist design that reflects innovation and professionalism.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Typography", "Color Theory"],
      image: "🎨",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Social Media Campaign",
      description: "Designed a comprehensive social media campaign with custom graphics, Instagram stories, and promotional materials for a fashion brand. Increased engagement by 150%.",
      technologies: ["Adobe Photoshop", "Canva", "Social Media Design", "Digital Marketing"],
      image: "📱",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Event Poster Series",
      description: "Created a series of eye-catching event posters for a music festival. Each poster featured unique typography and vibrant color schemes that captured the energy of different music genres.",
      technologies: ["Adobe InDesign", "Typography", "Print Design", "Color Psychology"],
      image: "🎵",
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Product Packaging Design",
      description: "Designed packaging for a premium skincare line, including boxes, labels, and promotional materials. Focused on luxury aesthetics and sustainable design principles.",
      technologies: ["Adobe Illustrator", "Package Design", "Sustainable Design", "Brand Strategy"],
      image: "📦",
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Digital Illustration Collection",
      description: "Created a series of digital illustrations for children's books and educational materials. Each illustration was designed to be engaging, educational, and visually appealing to young audiences.",
      technologies: ["Adobe Photoshop", "Digital Illustration", "Character Design", "Children's Art"],
      image: "📚",
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Website UI Design",
      description: "Designed user interface mockups and wireframes for an e-commerce website. Created a clean, modern design that prioritizes user experience and conversion optimization.",
      technologies: ["Figma", "UI/UX Design", "Wireframing", "User Research"],
      image: "💻",
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the design projects I've worked on. Each one represents a unique creative challenge and showcases different aspects of my design skills.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <span className="project-emoji">{project.image}</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link github">
                  <span>📁</span> Portfolio
                </a>
                <a href={project.live} className="project-link live">
                  <span>🌐</span> View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <h2>Ready to collaborate?</h2>
        <p>I'm always excited to work on new creative projects and bring your vision to life. Let's discuss how we can create something amazing together!</p>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
    </div>
  );
};

export default Projects; 