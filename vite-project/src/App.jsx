import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageLayout = ({ children }) => (
  <div className="portfolio-app">
    <CustomCursor />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

const HomePage = () => (
  <>
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
  </>
);

const SectionRoute = ({ children, direction = 'up', delay = 0 }) => (
  <SectionReveal direction={direction} delay={delay}>
    {children}
  </SectionReveal>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <HomePage />
            </PageLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PageLayout>
              <SectionRoute direction="left">
                <About />
              </SectionRoute>
            </PageLayout>
          }
        />
        <Route
          path="/skills"
          element={
            <PageLayout>
              <SectionRoute direction="right">
                <Skills />
              </SectionRoute>
            </PageLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <PageLayout>
              <SectionRoute direction="left">
                <Projects />
              </SectionRoute>
            </PageLayout>
          }
        />
        <Route
          path="/certifications"
          element={
            <PageLayout>
              <SectionRoute direction="right">
                <Certifications />
              </SectionRoute>
            </PageLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PageLayout>
              <SectionRoute direction="up">
                <Contact />
              </SectionRoute>
            </PageLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
