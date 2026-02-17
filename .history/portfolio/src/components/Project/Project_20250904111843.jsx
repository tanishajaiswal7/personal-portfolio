import React from 'react';
import './Project.css';
import pro1 from '../../assets/assets/pro1.jpg';
import pro3 from '../../assets/assets/pro3.jpg';
import pro2 from '../../assets/assets/pro2.png';
import pro4 from '../../assets/assets/pro4.jpg'; // add a new image for JobVerse

const projectData = [
  {
    title: "ProScout",
    image: pro1,
    description: "A smart online interview platform designed to streamline the hiring process. It enables recruiters to schedule, conduct, and evaluate interviews efficiently with integrated video calls and real-time candidate assessments.",
  },
  {
    title: "Hospital Management System",
    image: pro3,
    description: "A full-stack hospital management system built with React, Node.js, and MongoDB. It allows doctors, patients, and administrators to manage appointments, patient records, prescriptions, and billing all in one secure platform.",
  },
  {
    title: "VisioGen",
    image: pro2,
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
