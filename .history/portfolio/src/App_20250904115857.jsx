import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Eager-loaded components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer'; 

// Lazy-loaded components
const About = lazy(() => import('./components/About/About'));
const Project = lazy(() => import('./components/Project/Project'));
const Services = lazy(() => import('./components/Services/Services'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Chatbot = lazy(() => import('./components/Chatbot/Chatbot'));


const App = () => {
  // State for voice control
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true); // You can toggle this
  const [textToSpeak, setTextToSpeak] = useState("Welcome to my portfolio!");

  // Example function to change the text for the narrator
  const updateTextToSpeak = (newText) => {
    setTextToSpeak(newText);
  };

  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <section id="home">
          <Hero />
        </section>

        {/* Voice Narrator Component */}
        <VoiceNarrator text={textToSpeak} isVoiceEnabled={isVoiceEnabled} />

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

          <section id="contact">
            <Contact />
          </section>

          <Chatbot />
        </Suspense>

        {/* Footer */}
        <Footer />

        {/* Button to toggle voice narration */}
        <button onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}>
          {isVoiceEnabled ? "Disable Voice" : "Enable Voice"}
        </button>
      </div>
    </Router>
  );
};

export default App;
