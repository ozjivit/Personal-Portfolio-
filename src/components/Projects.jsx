import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      image: "📋",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather conditions and forecasts using OpenWeatherMap API.",
      technologies: ["React", "CSS3", "OpenWeatherMap API", "Chart.js"],
      image: "🌤️",
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and styled with CSS. Features smooth animations and clean design.",
      technologies: ["React", "CSS3", "React Router", "Framer Motion"],
      image: "💼",
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat application with user authentication, message history, and file sharing capabilities.",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      image: "💬",
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "A comprehensive fitness tracking application with workout logging, progress charts, and goal setting features.",
      technologies: ["React Native", "Firebase", "Chart.js", "AsyncStorage"],
      image: "💪",
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.</p>
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
                  <span>📁</span> GitHub
                </a>
                <a href={project.live} className="project-link live">
                  <span>🌐</span> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <h2>Want to see more?</h2>
        <p>I'm always working on new projects and learning new technologies. Feel free to reach out if you'd like to collaborate or have a project in mind!</p>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
    </div>
  );
};

export default Projects; 