import React from 'react';
import img1 from '../../assets/assets/img1.jpg';
import img2 from '../../assets/assets/img2.jpg';
import img3 from '../../assets/assets/img3.png';
import img4 from '../../assets/assets/img4.jpg';
import './Services.css'; 

const services = [
  {
    id: 1,
    image: img1,
    title: "API Development",
    description: "Building secure and scalable RESTful APIs and GraphQL endpoints with proper authentication, rate limiting, and comprehensive documentation."
  },
  {
    id: 2,
    image: img2,
    title: "Database Architecture",
    description: "Designing optimized database schemas, implementing efficient indexing strategies, and ensuring data integrity across relational and NoSQL databases."
  },
  {
    id: 3,
    image: img3,
    title: "Microservices",
    description: "Architecting distributed microservices systems with Docker and Kubernetes, implementing service discovery, and ensuring high availability."
  },
  {
    id: 4,
    image: img4,
    title: "Performance Optimization",
    description: "Implementing caching strategies with Redis, optimizing database queries, and reducing API response times for enhanced system performance."
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Backend Development Services</h2>
      <div className="services-wrapper">
        {services.map((service) => (
          <div key={service.id} className="service-box">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;