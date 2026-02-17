import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import profile from '../../assets/assets/image.png';

const Hero = () => {
  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (showNumber) {
        setShowNumber(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showNumber]);

  return (
    <motion.div 
      className='hero'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img 
        src={profile} 
        alt="Profile"
        className="hero-img"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      
      <h1><span>I am Tanisha Jaiswal,</span> backend developer based in India.</h1>
      <p>I specialize in building scalable server-side applications, designing robust RESTful APIs, and architecting efficient database solutions. With expertise in Node.js, Express, and MongoDB, I focus on creating high-performance backend systems that power modern applications. My experience includes implementing secure authentication systems, optimizing database queries, and deploying microservices architectures.</p>

      <motion.div 
        className='hero-action'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Link to Contact Section */}
        <a href="#contact" className='hero-connect'>
          <span>Connect With Me</span>
        </a>

        {/* Link to Resume PDF */}
        <a href="fullstack.pdf" target="_blank" className='hero-resume'>
          <span>My Resume</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;