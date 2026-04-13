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
            alt="Ritesh.R.Gabale"
            className="profile-image"
          />
        </div>
        <div className="about-details">
          <h1 className="about-name">Ritesh.R.Gabale</h1>
          <p className="about-title gradient-text">
            Full Stack MERN Developer
          </p>
          <p className="about-text">
            I'm a <span className="highlight-text">front-end developer</span>{" "}
            and final-year student at Coding Site, Ahmedabad, specializing in
            building responsive web interfaces. Currently expanding into
            full-stack development with Node and Express. I am proficient in
            Git, GitHub, and Figma. I am a collaborative team player and
            effective communicator dedicated to building impactful digital
            solutions.
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
              <span className="stat-number gradient-text">Regular</span>
              <p className="stat-label">On LeetCode</p>
            </ExternalButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
