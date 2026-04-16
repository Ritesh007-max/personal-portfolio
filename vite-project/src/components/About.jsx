import React from "react";
import profileImg from "../assets/profile.jpg";
import ExternalButton from "./ExternalButton";

const About = () => {
  return (
    <section id="about" className="section container about-section">
      <h2 className="section-title">About</h2>
      <div className="about-wrapper">
        <div className="profile-image-container">
          <div className="profile-glow"></div>
          <img
            src={profileImg}
            alt="Ritesh R. Gabale"
            className="profile-image"
          />
        </div>
        <div className="about-details">
          <h1 className="about-name">Ritesh R. Gabale</h1>
          <p className="about-title gradient-text">
            MERN Stack Developer
          </p>
          <p className="about-text">
            I'm a <span className="highlight-text">front-end developer</span>{" "}
            and final-year student at Coding Site, Ahmedabad, focused on
            building responsive web interfaces with clean structure and sharp
            visual hierarchy. I am currently expanding deeper into full-stack
            development with Node and Express, and I work comfortably with Git,
            GitHub, and Figma. I bring a collaborative mindset, clear
            communication, and a strong bias toward shipping thoughtful digital
            experiences.
          </p>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number gradient-text">10+</span>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card">
              <span className="stat-number gradient-text">500+</span>
              <p className="stat-label">Code Commits</p>
            </div>
            <ExternalButton
              href="https://leetcode.com/u/Riteshgabale/"
              className="stat-card stat-card-link"
              ariaLabel="Open LeetCode profile"
            >
              <span className="stat-number gradient-text">3rd</span>
              <p className="stat-label">Sangam University Hackathon 2026</p>
            </ExternalButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
