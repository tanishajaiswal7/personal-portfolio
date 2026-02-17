import React from 'react';
import './Project.css';
import pro1 from '../../assets/assets/pro1.png';
import pro2 from '../../assets/assets/pro2.jpg';
import pro3 from '../../assets/assets/pro3.png';
import pro4 from '../../assets/assets/pro4.png';
import pro5 from '../../assets/assets/pro5.png';

const projectData = [
  {
    id: 1,
    title: "PrepEdge",
    image: pro2,
    description:
      "Backend API for an interview platform with JWT authentication, video streaming integration, and real-time WebSocket connections for live assessments.",
    link: "https://proscout-7l2x.vercel.app/login",
    technologies: ["Node.js ", "Express ", "MongoDB ", "O Auth 2.0 ","WebSocket "]
  },
  {
    id: 2,
    title: "ResolveX",
    image: pro5,
    description:
      "RESTful API handling complaint management with CRUD operations, role-based access control, real-time notifications, and comprehensive logging system.",
    link: "https://cms-beta-one.vercel.app/",
    technologies: ["Express ", "MongoDB ", "JWT"]
  },
  {
    id: 3,
    title: "Snippet",
    image: pro1,
    description:
      "Code-sharing API with user authentication, snippet versioning, and PostgreSQL database with optimized queries for fast retrieval.",
    link: "https://github.com/your-username/snippet",
    technologies: ["Node.js ", "Mongodb"]
  },
  {
    id: 4,
    title: "VisioGen",
    image: pro3,
    description:
      "Backend service integrating AI image generation APIs with request queuing, rate limiting, and S3 bucket storage for generated assets.",
    link: "https://your-visiogen-link.com",
    technologies: ["Open AI API ","JWT "]
  },
  {
    id: 5,
    title: "JobVerse",
    image: pro4,
    description:
      "Microservices-based job recommendation engine with GraphQL API, ElasticSearch integration, and automated data aggregation pipelines.",
    link: "https://your-jobverse-link.com",
    technologies: ["Node.js ","Mongodb"]
  },
];

const Project = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Backend Projects</h2>

      <div className="projects-slider">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-name-link"
            >
              <h3 className="project-name">{project.title}</h3>
            </a>

            <p className="project-description">{project.description}</p>
            
            {project.technologies && (
              <div className="project-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
