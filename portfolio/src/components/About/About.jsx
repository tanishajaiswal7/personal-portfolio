import React from 'react';
import './About.css';
import { 
  FaServer, 
  FaDatabase, 
  FaDocker, 
  FaAws, 
  FaGitAlt, 
  FaLinux 
} from 'react-icons/fa';
import { 
  SiNodedotjs, 
  SiExpress, 
  SiSpringboot, 
  SiPython, 
  SiGraphql, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiRedis, 
  SiKubernetes, 
  SiJenkins, 
  SiNginx 
} from 'react-icons/si';

const About = () => {
  const fullText = "Hi, I'm Tanisha Jaiswal, a dedicated Backend Developer & API Architect.";

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left side - 60% */}
        <div className="about-left">
          <h2>About Me</h2>
          <p>{fullText}</p> {/* Display the full text directly without animation */}
          <p>
            I specialize in building scalable server-side applications, designing robust RESTful APIs, and architecting efficient database solutions. With expertise in Node.js, Express, MongoDB, and MySql I focus on creating high-performance backend systems that power modern applications. My experience includes implementing secure authentication systems, optimizing database queries, and deploying microservices architectures.
          </p>
          <p>
            I've engineered backend solutions for real-world projects including a real-time complaint management system with WebSocket integration, a scalable interview platform with video streaming capabilities, and RESTful APIs serving thousands of requests. I'm passionate about clean code architecture, system design, and continuously exploring new backend technologies.
          </p>
          <p>
            Currently seeking backend development opportunities where I can contribute to building distributed systems, optimize application performance, and solve complex server-side challenges.
          </p>
        </div>

        {/* Right side - 40% */}
        <div className="about-cards">
          <div className="card">
            <div className="card-header">
              <FaServer className="card-icon" />
              <h3>Server-Side Technologies</h3>
            </div>
            <div className="tech-icons">
              <div className="tech-item">
                <SiNodedotjs className="tech-icon" title="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <SiExpress className="tech-icon" title="Express.js" />
                <span>Express</span>
              </div>
              
              
            </div>
            <p className="tech-description">REST APIs, Microservices Architecture</p>
          </div>
          <div className="card">
            <div className="card-header">
              <FaDatabase className="card-icon" />
              <h3>Database & Caching</h3>
            </div>
            <div className="tech-icons">
              <div className="tech-item">
                <SiMongodb className="tech-icon" title="MongoDB" />
                <span>MongoDB</span>
              </div>
              
              <div className="tech-item">
                <SiMysql className="tech-icon" title="MySQL" />
                <span>MySQL</span>
              </div>
              
            </div>
            <p className="tech-description">Database Design, Query Optimization, Indexing</p>
          </div>
          <div className="card">
            <div className="card-header">
              <FaDocker className="card-icon" />
              <h3>DevOps & Infrastructure</h3>
            </div>
            <div className="tech-icons">
              <div className="tech-item">
                <FaDocker className="tech-icon" title="Docker" />
                <span>Docker</span>
              </div>
              <div className="tech-item">
                <SiKubernetes className="tech-icon" title="Kubernetes" />
                <span>K8s</span>
              </div>
              <div className="tech-item">
                <FaAws className="tech-icon" title="AWS" />
                <span>AWS</span>
              </div>
              
              <div className="tech-item">
                <SiNginx className="tech-icon" title="Nginx" />
                <span>Nginx</span>
              </div>
              
              <div className="tech-item">
                <FaGitAlt className="tech-icon" title="Git" />
                <span>Git</span>
              </div>
            </div>
            <p className="tech-description">CI/CD, Deployment Automation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;