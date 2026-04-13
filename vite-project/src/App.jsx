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
import Seo from './components/Seo';
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

const RoutePage = ({ title, description, children, direction = 'up', delay = 0 }) => (
  <>
    <Seo title={title} description={description} />
    <PageLayout>
      <SectionRoute direction={direction} delay={delay}>
        {children}
      </SectionRoute>
    </PageLayout>
  </>
);

const HomePageSeo = () => (
  <Seo
    title="Ritesh Gabale | Portfolio"
    description="Ritesh Gabale's portfolio featuring web projects, hackathon work, certifications, skills, and contact details."
  />
);

const HomePage = () => (
  <>
    <HomePageSeo />
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
            <RoutePage
              title="About | Ritesh Gabale Portfolio"
              description="Learn more about Ritesh Gabale, a MERN stack developer focused on responsive web interfaces, full-stack growth, and collaborative work."
              direction="left"
            >
              <About />
            </RoutePage>
          }
        />
        <Route
          path="/skills"
          element={
            <RoutePage
              title="Skills | Ritesh Gabale Portfolio"
              description="Explore Ritesh Gabale's front-end, back-end, deployment, design, and problem-solving skills."
              direction="right"
            >
              <Skills />
            </RoutePage>
          }
        />
        <Route
          path="/projects"
          element={
            <RoutePage
              title="Projects | Ritesh Gabale Portfolio"
              description="Browse Ritesh Gabale's personal projects and hackathon projects, including clones, dashboards, and web apps."
              direction="left"
            >
              <Projects />
            </RoutePage>
          }
        />
        <Route
          path="/certifications"
          element={
            <RoutePage
              title="Certifications | Ritesh Gabale Portfolio"
              description="View Ritesh Gabale's learning certifications and hackathon achievements."
              direction="right"
            >
              <Certifications />
            </RoutePage>
          }
        />
        <Route
          path="/contact"
          element={
            <RoutePage
              title="Contact | Ritesh Gabale Portfolio"
              description="Get in touch with Ritesh Gabale through the contact form for collaboration, freelance work, or project discussions."
              direction="up"
            >
              <Contact />
            </RoutePage>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
