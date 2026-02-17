import React from 'react';
import './Resume.css';

const resumeData = {
  featured: [
    {
      id: 1,
      name: "Snippy",
      technologies: "MERN Stack | JWT Authentication",
      duration: "Jun '24 – Jul '24",
      description: "Centralized platform for managing and sharing code snippets with secure CRUD operations, filtering, pagination, and ownership-based permissions."
    },
    {
      id: 2,
      name: "ResolveX",
      technologies: "MERN Stack | JWT | Twilio API",
      duration: "May '25",
      description: "Complaint management system with role-based access, real-time tracking, analytics dashboard, and WhatsApp notifications."
    },
    {
      id: 3,
      name: "PrepEdge",
      technologies: "MERN Stack | Socket.IO | PeerJS | Google OAuth",
      duration: "Jan '25",
      description: "Interview platform with real-time peer-to-peer audio/video calls, collaborative editors, and secure authentication."
    }
  ],
  education: {
    degree: "Data Structure and Algorithms Training",
    major: "Geeks for Geeks",
    school: "Edtech Company",
    duration: "Completed",
    cgpa: "Solved 200+ DSA problems"
  },
  certifications: [
    { name: "Full Stack Web Development | Apna College", link: "https://dummy-link1.com" },
    { name: "Data Structure and Algorithms | Apna College", link: "https://dummy-link2.com" },
    { name: "Server-Side JavaScript | Coursera", link: "https://dummy-link3.com" }
  ],
  achievements: [
    "Solved Data Structures & Algorithms problems covering Arrays, Linked Lists, Stacks, Queues, HashMap, Recursion, Searching and Sorting Algorithms",
    "Applied Time and Space Complexity Analysis (Big-O Notation) to optimize solutions, reducing execution time by up to 30%",
    "Developed an Online Banking System in Java using OOP principles (Encapsulation, Inheritance, Abstraction, Polymorphism)",
    "Strong problem-solving, time management, leadership, and adaptability skills"
  ],
  skills: {
    "Languages": ["Java", "JavaScript"],
    "Frontend": ["HTML", "CSS", "React.js"],
    "Backend": ["Node.js", "Express.js"],
    "Databases": ["MongoDB", "MySQL"],
    "Tools": ["Git", "GitHub"]
  }
};

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <h2 className="resume-title">Resume Highlights</h2>

      <div className="resume-container">
        {/* Featured Projects */}
        <div className="resume-card">
          <h3 className="resume-category">💼 Featured Projects</h3>
          {resumeData.featured.map((project) => (
            <div key={project.id} className="experience-item">
              <h4 className="position-title">{project.name}</h4>
              <p className="company-info">{project.technologies}</p>
              <p className="duration">{project.duration}</p>
              <p className="position-description">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="resume-card">
          <h3 className="resume-category">⭐ Key Achievements</h3>
          <ul className="achievements-list">
            {resumeData.achievements.map((achievement, idx) => (
              <li key={idx} className="position-description">{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="resume-card">
          <h3 className="resume-category">🏆 Top Certifications</h3>
          <ul className="achievements-list">
            {resumeData.certifications.map((cert, idx) => (
              <li key={idx} className="position-description">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">{cert.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="resume-card">
          <h3 className="resume-category">🛠️ Technical Skills</h3>
          {Object.entries(resumeData.skills).map(([category, skills], idx) => (
            <div key={idx} className="skill-category">
              <h4 className="position-title">{category}</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;