import React from 'react';
import './Project.css'; // Ensure you have a Project.css file for styling
import pro1 from '../../assets/assets/pro1.jpg';
import pro3 from '../../assets/assets/pro3.jpg';
import pro2 from '../../assets/assets/pro2.png';

const projectData = [
  {
    title: "Amazon UI Clone",
    image: pro1, 
    description: "A clone of Amazon's UI using HTML and CSS.",
  },
  {
    title: "Hospital Management System",
    image: pro3, 
    description: "A hospital management system built with React, Node JS, and MongoDB.",
  },
  {
    title: "Zentellect-AI",
    image: pro2, 
    description: "An AI-powered project for efficient text to image generation.",
  },
];

const Project = () => {
  return (
    <div className="projects-section">

      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" data-aos="fade-up" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;