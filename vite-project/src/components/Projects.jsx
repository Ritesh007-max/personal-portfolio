import React from 'react';
import fccImage from '../assets/FCCImg_.png';
import coffeeImage from '../assets/FellowCoffeClone_.png';
import cryptoImage from '../assets/CryptozombiesClone_.png';
import keyboardImage from '../assets/KeyChroneClone_.png';
import rareImage from '../assets/SuperRareClone_.png';

const Projects = () => {
    const projectList = [
        {
            title: 'FreeCodeCamp Clone',
            tech: 'HTML, CSS',
            image: fccImage,
            live: 'https://freecodecampcloneritesh.netlify.app'
        },
        {
            title: 'Fellow Coffee Clone',
            tech: 'HTML, CSS',
            image: coffeeImage,
            live: 'https://fellowcoffeeclone.netlify.app'
        },
        {
            title: 'Crypto Zombies Clone',
            tech: 'HTML, CSS',
            image: cryptoImage,
            live: 'https://cryptozombiesclone.netlify.app'
        },
        {
            title: 'KeyChrone Clone',
            tech: 'HTML, CSS',
            image: keyboardImage,
            live: 'https://keychroneclone.netlify.app'
        },
        {
            title: 'Project Euler Clone',
            tech: 'HTML, CSS',
            image: fccImage,
            live: 'https://projecteulerclone.netlify.app'
        },
        {
            title: 'SuperRare Clone',
            tech: 'HTML, CSS',
            image: rareImage,
            live: 'https://superrareclone.netlify.app'
        }
    ];

    return (
        <section id="projects" className="section container projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card glass">
                        <div className="project-img-container">
                            <img src={project.image} alt={project.title} className="project-img" />
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-tech">{project.tech}</p>
                            <div className="project-links">
                                <a href={project.live} className="live-link" target="_blank" rel="noreferrer">Live</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
