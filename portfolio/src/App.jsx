import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Eager-loaded components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer'; 

// Lazy-loaded components
const About = lazy(() => import('./components/About/About'));
const Project = lazy(() => import('./components/Project/Project'));
const Services = lazy(() => import('./components/Services/Services'));
const Resume = lazy(() => import('./components/Resume/Resume'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Chatbot = lazy(() => import('./components/Chatbot/Chatbot'));


const App = () => {
 

 

  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <section id="home">
          <Hero />
        </section>

        

        <Suspense fallback={<div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>}>
          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Project />
          </section>

          <section id="services">
            <Services />
          </section>

          <section id="resume">
            <Resume />
          </section>

          <section id="contact">
            <Contact />
          </section>

          <Chatbot />
        </Suspense>

        {/* Footer */}
        <Footer />

        
      </div>
    </Router>
  );
};

export default App;
