import React, { useState } from 'react';
import fccImage from '../assets/FCCImg_.png';
import coffeeImage from '../assets/FellowCoffeClone_.png';
import cryptoImage from '../assets/CryptozombiesClone_.png';
import keyboardImage from '../assets/KeyChroneClone_.png';
import rareImage from '../assets/SuperRareClone_.png';
import resumeParserThumb from '../assets/hackathon-resume-parser.png';
import cropPilotThumb from '../assets/Crop_Poilet.png';
import ExternalButton from './ExternalButton';

const Projects = () => {
    const [activeSection, setActiveSection] = useState('personal');
    const [showAllProjects, setShowAllProjects] = useState(false);

    const personalProjects = [
        {
            title: 'FreeCodeCamp Clone',
            tech: 'HTML, CSS',
            image: fccImage,
            summary: 'A responsive FreeCodeCamp-inspired landing page built to practice layout structure, spacing, and responsive UI patterns.',
            live: 'https://freecodecampcloneritesh.netlify.app',
            youtube: 'https://youtu.be/duv6nKuZg90?si=zjhBF4xjmxFAb7lb',
            github: 'https://github.com/Ritesh007-max/myProjects/tree/main/FreeCodeCampClone'
        },
        {
            title: 'Fellow Coffee Clone',
            tech: 'HTML, CSS',
            image: coffeeImage,
            summary: 'A polished coffee-brand clone focused on hero design, product storytelling, and responsive section composition.',
            live: 'https://fellowcoffeeclone.netlify.app',
            youtube: 'https://youtu.be/832OW7iiAFM?si=E8WRszEh3b4U6_ha',
            github: 'https://github.com/Ritesh007-max/myProjects/tree/main/fellowCoffeeClone'
        },
        {
            title: 'Crypto Zombies Clone',
            tech: 'HTML, CSS',
            image: cryptoImage,
            summary: 'A dark themed clone inspired by CryptoZombies that reinforces structured content sections and visual hierarchy.',
            live: 'https://cryptozombiesclone.netlify.app',
            youtube: 'https://youtu.be/GC7L55bbaWA?si=2-YH-U_O8hUt4f48',
            github: 'https://github.com/Ritesh007-max/myProjects/tree/main/CryptoZombiesClone'
        },
        {
            title: 'KeyChrone Clone',
            tech: 'HTML, CSS',
            image: keyboardImage,
            summary: 'A keyboard showcase clone centered on modular card design and desktop-first presentation.',
            live: 'https://keychroneclone.netlify.app',
            youtube: 'https://youtu.be/f8st0ZfKWW4?si=rNTCPACOemNtDnD7',
            github: 'https://github.com/Ritesh007-max/myProjects/tree/main/KeyChrone.conClone'
        },
        {
            title: 'Project Euler Clone',
            tech: 'HTML, CSS',
            image: fccImage,
            summary: 'A clean challenge-style landing page built to present problem-solving content with simple calls to action.',
            live: 'https://projecteulerclone.netlify.app'
        },
        {
            title: 'SuperRare Clone',
            tech: 'HTML, CSS',
            image: rareImage,
            summary: 'An NFT marketplace clone that emphasizes cards, visual balance, and high-contrast branding.',
            live: 'https://superrareclone.netlify.app',
            youtube: 'https://youtu.be/4ECe2bWKeG0?si=inmLWtfN7xX3uLA0',
            github: 'https://github.com/Ritesh007-max/myProjects/tree/main/SuperRareClone'
        }
    ];

    const hackathonProjects = [
        {
            title: 'IISC Hack Resume Parser',
            tech: 'Resume parsing, structured extraction',
            image: resumeParserThumb,
            summary: 'A resume parsing prototype that extracts key candidate details and turns them into structured information for faster review.',
            live: 'https://iisc-hack.vercel.app/',
            github: 'https://github.com/Ritesh007-max/IISC_Hack_ResumeParser'
        },
        {
            title: 'SU Hack Crop Pilot',
            tech: 'Crop support, decision workflow',
            image: cropPilotThumb,
            summary: 'A crop guidance concept built around a simple digital workflow for exploring practical agricultural information.',
            live: 'https://croppilot-su.vercel.app/',
            github: 'https://github.com/Ritesh007-max/SU_HACK_CropPiolet'
        }
    ];

    const activeProjects = activeSection === 'personal' ? personalProjects : hackathonProjects;
    const visibleProjects = showAllProjects ? activeProjects : activeProjects.slice(0, 2);
    const canViewAll = activeProjects.length > 2;

    return (
        <section id="projects" className="section container projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="cert-toggle" role="tablist" aria-label="Project categories">
                <button
                    type="button"
                    className={`cert-toggle-btn ${activeSection === 'personal' ? 'active' : ''}`}
                    onClick={() => {
                        setActiveSection('personal');
                        setShowAllProjects(false);
                    }}
                    aria-pressed={activeSection === 'personal'}
                >
                    Personal Projects
                </button>
                <button
                    type="button"
                    className={`cert-toggle-btn ${activeSection === 'hackathon' ? 'active' : ''}`}
                    onClick={() => {
                        setActiveSection('hackathon');
                        setShowAllProjects(false);
                    }}
                    aria-pressed={activeSection === 'hackathon'}
                >
                    Hackathon Projects
                </button>
            </div>

            <div className="cert-section-label">
                {activeSection === 'personal' ? 'Personal Projects' : 'Hackathon Projects'}
            </div>

            <div className="cert-grid">
                {visibleProjects.map((project) => (
                    <article key={project.title} className="cert-card glass project-card-tab">
                        <div className="project-media" tabIndex={0} aria-label={`${project.title} summary`}>
                            <img
                                src={project.image}
                                alt={`${project.title} thumbnail`}
                                className="project-thumb"
                                loading="lazy"
                            />
                            <div className="project-summary-overlay">
                                <span className="project-hover-kicker">Project summary</span>
                                <p className="project-summary">{project.summary}</p>
                            </div>
                        </div>
                        <div className="cert-info project-info">
                            <span className="project-badge">
                                {activeSection === 'hackathon' ? 'Hackathon Project' : 'Personal Project'}
                            </span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-tech">{project.tech}</p>
                            <div className="project-links">
                                {project.live && (
                                    <ExternalButton href={project.live} className="live-link" ariaLabel={`${project.title} live demo`}>
                                        Live
                                    </ExternalButton>
                                )}
                                {project.youtube && (
                                    <ExternalButton href={project.youtube} className="code-link" ariaLabel={`${project.title} YouTube video`}>
                                        YouTube
                                    </ExternalButton>
                                )}
                                {project.github && (
                                    <ExternalButton href={project.github} className="code-link" ariaLabel={`${project.title} GitHub repository`}>
                                        GitHub
                                    </ExternalButton>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {canViewAll && (
                <div className="projects-actions">
                    <button
                        type="button"
                        className="glow-btn projects-view-all-btn"
                        onClick={() => setShowAllProjects((prev) => !prev)}
                    >
                        {showAllProjects ? 'Show Less' : 'View All'}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;
