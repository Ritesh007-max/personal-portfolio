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
            live: 'https://freecodecampcloneritesh.netlify.app',
            youtube: 'https://youtu.be/duv6nKuZg90?si=zjhBF4xjmxFAb7lb',
            github: 'https://github.com/Ritesh007-max/myProjects/tree/main/FreeCodeCampClone'
        },
        {
            title: 'Fellow Coffee Clone',
            tech: 'HTML, CSS',
            image: coffeeImage,
            live: 'https://fellowcoffeeclone.netlify.app',
            youtube: 'https://youtu.be/832OW7iiAFM?si=E8WRszEh3b4U6_ha',
            github: 'https://github.com/Ritesh007-max/myProjects/tree/main/fellowCoffeeClone'
        },
        {
            title: 'Crypto Zombies Clone',
            tech: 'HTML, CSS',
            image: cryptoImage,
            live: 'https://cryptozombiesclone.netlify.app',
            youtube: 'https://youtu.be/GC7L55bbaWA?si=2-YH-U_O8hUt4f48',
            github: 'https://github.com/Ritesh007-max/myProjects/tree/main/CryptoZombiesClone'
        },
        {
            title: 'KeyChrone Clone',
            tech: 'HTML, CSS',
            image: keyboardImage,
            live: 'https://keychroneclone.netlify.app',
            youtube: 'https://youtu.be/f8st0ZfKWW4?si=rNTCPACOemNtDnD7',
            github: 'https://github.com/Ritesh007-max/myProjects/tree/main/KeyChrone.conClone'
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
            live: 'https://superrareclone.netlify.app',
            youtube: 'https://youtu.be/4ECe2bWKeG0?si=inmLWtfN7xX3uLA0',
            github: 'https://github.com/Ritesh007-max/myProjects/tree/main/SuperRareClone'
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
                                {project.live && (
                                    <a href={project.live} className="live-link" target="_blank" rel="noreferrer">Live</a>
                                )}
                                {project.youtube && (
                                    <a href={project.youtube} className="code-link" target="_blank" rel="noreferrer">YouTube</a>
                                )}
                                {project.github && (
                                    <a href={project.github} className="code-link" target="_blank" rel="noreferrer">GitHub</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
