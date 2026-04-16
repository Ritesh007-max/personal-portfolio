import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import resumeFile from '../assets/Resume.pdf';
import ExternalButton from './ExternalButton';

const roles = [
    'MERN Stack Developer',
    'DSA Enthusiast',
    'Web Developer',
    'Figma Designer',
    'Open Source Contributor'
];

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
            label: 'X',
            href: 'https://x.com/RiteshGabale007',
            icon: FaXTwitter
        },
        {
            label: 'GitHub',
            href: 'https://github.com/Ritesh007-max',
            icon: FaGithub
        }
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
    }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

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
                    <Link to="/projects" className="glow-btn hero-btn">View Projects</Link>
                    <ExternalButton href={resumeFile} className="glow-btn hero-btn-outline">
                        Download Resume
                    </ExternalButton>
                </div>
                <div className="hero-social-links" aria-label="Social links">
                    {socialLinks.map((link) => (
                        <ExternalButton
                            key={link.label}
                            className="hero-social-icon"
                            aria-label={link.label}
                            title={link.label}
                            href={link.href}
                        >
                            <link.icon aria-hidden="true" />
                        </ExternalButton>
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
