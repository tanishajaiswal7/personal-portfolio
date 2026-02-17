import React from 'react';
import './Project.css';
import pro1 from '../../assets/assets/pro1.jpg';
import pro2 from '../../assets/assets/pro2.jpg';
import pro3 from '../../assets/assets/pro3.png';
import pro4 from '../../assets/assets/pro4.jpg'; 

const projectData = [
  {
    title: "ProScout",
    image: pro2,
    description: "A smart online interview platform designed to streamline the hiring process. It enables recruiters to schedule, conduct, and evaluate interviews efficiently with integrated video calls and real-time candidate assessments.",
  },
  {
    title: "Snippet",
    image: pro1,
    description: "A collaborative code-sharing platform where developers can create, save, and share code snippets with syntax highlighting. Built with React and Node.js, it helps programmers reuse solutions and speed up development.",
  },
  {
    title: "VisioGen",
    image: pro3,
    description: "An AI-powered project that transforms text or voice input into images using advanced generative models. It simplifies creative workflows for designers, educators, and content creators by producing visuals instantly.",
  },
  {
    title: "JobVerse",
    image: pro4,
    description: "A career-focused platform built for students and job seekers. It provides AI-driven job recommendations, resume-building tools, and personalized interview preparation to help candidates land their dream jobs.",
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
