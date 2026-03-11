import React, { useState, useEffect } from 'react';

const Hero = () => {
    const roles = [
        'MERN Stack Developer',
        'DSA Enthusiast',
        'Web Developer',
        'Figma Designer',
        'Open Source Contributor'
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = roles[currentRoleIndex];

            if (isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length - 1));
                setTypingSpeed(50);
            } else {
                setCurrentText(fullText.substring(0, currentText.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h3 className="hero-subheader gradient-text">
                    {currentText}
                    <span className="typing-cursor"></span>
                </h3>
                <h1 className="hero-title">Building <span className="gradient-text">Things That Matter!</span></h1>
                <div className="hero-buttons">
                    <a href="#projects" className="glow-btn hero-btn">View Projects</a>
                    <a href="#resume" className="hero-btn-outline">Download Resume</a>
                </div>
            </div>
            <div className="hero-scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default Hero;
