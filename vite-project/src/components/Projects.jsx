import React, { useState } from 'react';
import fccImage from '../assets/FCCImg_.png';
import coffeeImage from '../assets/FellowCoffeClone_.png';
import cryptoImage from '../assets/CryptozombiesClone_.png';
import keyboardImage from '../assets/KeyChroneClone_.png';
import rareImage from '../assets/SuperRareClone_.png';
import resumeParserThumb from '../assets/hackathon-resume-parser.png';
import cropPilotThumb from '../assets/Crop_Poilet.png';
import fleetFlowThumb from '../assets/FleetFlow.jpeg';
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
            title: 'Keychron Clone',
            tech: 'HTML, CSS',
            image: keyboardImage,
            summary: 'A keyboard showcase clone centered on modular card design and desktop-first presentation.',
            live: 'https://keychroneclone.netlify.app',
            youtube: 'https://youtu.be/f8st0ZfKWW4?si=rNTCPACOemNtDnD7',
            github: 'https://github.com/Ritesh007-max/myProjects/tree/main/KeyChroneClone'
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
            contributors: ['Dhruv Ozha', 'Mahi Patel', 'Maharshi Patel'],
            live: 'https://iisc-hack.vercel.app/',
            github: 'https://github.com/Ritesh007-max/IISC_Hack_ResumeParser'
        },
        {
            title: 'SU Hack Crop Pilot',
            tech: 'Crop support, decision workflow',
            image: cropPilotThumb,
            summary: 'A crop guidance concept built around a simple digital workflow for exploring practical agricultural information.',
            contributors: ['Dhruv Ozha', 'Mahi Patel', 'Maharshi Patel'],
            live: 'https://croppilot-su.vercel.app/',
            github: 'https://github.com/Ritesh007-max/SU_HACK_CropPiolet'
        },
        {
            title: 'FleetFlow - Global Fleet Command & Intelligence',
            tech: 'React, Vite, Tailwind, dashboard analytics',
            image: fleetFlowThumb,
            summary: 'A modern fleet management dashboard for real-time transportation operations, with fleet utilization tracking, driver availability, dispatch control, expense analytics, maintenance logs, and a live manifest view.',
            contributors: ['Hemang Solanki', 'Mahi Patel', 'Maharshi Patel'],
            live: 'https://fleet-flow-coding-gita.netlify.app/',
            github: 'https://github.com/Ritesh007-max/Fleet_Flow',
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
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={`${project.title} thumbnail`}
                                    className="project-thumb"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="project-thumb project-thumb-fallback">
                                    <span className="project-fallback-label">
                                        {project.previewLabel || 'Project preview'}
                                    </span>
                                    <h3 className="project-fallback-title">{project.title}</h3>
                                    <div className="project-fallback-lines">
                                        {(project.previewLines || []).map((line) => (
                                            <span key={line} className="project-fallback-line">
                                                {line}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
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
                            {project.contributors && (
                                <div className="project-contributors">
                                    <span className="project-contributors-label">Contributors</span>
                                    <div className="project-contributors-list">
                                        {project.contributors.map((name) => (
                                            <span key={name} className="project-contributor-chip">
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="project-links">
                                {project.live && (
                                    <ExternalButton
                                        href={project.live}
                                        className="glow-btn project-link-btn project-link-primary"
                                        ariaLabel={`${project.title} live demo`}
                                    >
                                        Live
                                    </ExternalButton>
                                )}
                                {project.youtube && (
                                    <ExternalButton
                                        href={project.youtube}
                                        className="glow-btn project-link-btn project-link-secondary"
                                        ariaLabel={`${project.title} YouTube video`}
                                    >
                                        YouTube
                                    </ExternalButton>
                                )}
                                {project.github && (
                                    <ExternalButton
                                        href={project.github}
                                        className="glow-btn project-link-btn project-link-secondary"
                                        ariaLabel={`${project.title} GitHub repository`}
                                    >
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
