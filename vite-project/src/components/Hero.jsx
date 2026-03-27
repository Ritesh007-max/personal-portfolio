import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import resumeFile from '../assets/Resume.pdf';

const Hero = () => {
    const socialLinks = [
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ritesh-gabale-59a2b5365/',
            icon: FaLinkedinIn
        },
        {
            label: 'LeetCode',
            href: 'https://leetcode.com/u/Riteshgabale/',
            icon: SiLeetcode
        },
        {
            label: 'YouTube',
            href: 'https://www.youtube.com/channel/UCvUx30QhPrjk0KUu4M0ILvA',
            icon: FaYoutube
        },
        {
            label: 'GitHub',
            href: 'https://github.com/Ritesh007-max',
            icon: FaGithub
        }
    ];

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
                    <a href={resumeFile} target="_blank" rel="noreferrer" className="hero-btn-outline">Download Resume</a>
                </div>
                <div className="hero-social-links" aria-label="Social links">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="hero-social-icon"
                            target="_blank"
                            rel="noreferrer"
                            aria-label={link.label}
                            title={link.label}
                        >
                            <link.icon aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
            <div className="hero-scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default Hero;
