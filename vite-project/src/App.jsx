import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionReveal from './components/SectionReveal';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      <CustomCursor />
      <Navbar />
      <main>
        <SectionReveal direction="up">
          <Hero />
        </SectionReveal>
        <SectionReveal delay={0.05} direction="left">
          <About />
        </SectionReveal>
        <SectionReveal delay={0.1} direction="right">
          <Skills />
        </SectionReveal>
        <SectionReveal delay={0.15} direction="left">
          <Projects />
        </SectionReveal>
        <SectionReveal delay={0.2} direction="right">
          <Certifications />
        </SectionReveal>
        <SectionReveal delay={0.25} direction="up">
          <Contact />
        </SectionReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
