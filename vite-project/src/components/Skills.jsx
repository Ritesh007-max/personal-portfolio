import React, { useState } from 'react';
import { FaChrome, FaCode, FaCodeBranch, FaCogs, FaDocker, FaGithub, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaProjectDiagram, FaPuzzlePiece, FaReact } from 'react-icons/fa';
import { SiExpress, SiFigma, SiFirebase, SiLeetcode, SiMongodb, SiNetlify, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPostman, SiReact, SiTailwindcss, SiTypescript, SiVercel, SiVite } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const categories = [
        {
            title: 'Frontend Skills',
            icon: SiReact,
            desc: 'Building responsive and interactive user interfaces.',
            techs: [
                { name: 'HTML5', icon: FaHtml5 },
                { name: 'CSS3', icon: FaCss3Alt },
                { name: 'JavaScript', icon: FaJsSquare },
                { name: 'React', icon: FaReact },
                { name: 'Next.js', icon: SiNextdotjs },
                { name: 'Tailwind', icon: SiTailwindcss },
                { name: 'TypeScript', icon: SiTypescript }
            ]
        },
        {
            title: 'Backend Skills',
            icon: SiNodedotjs,
            desc: 'Server-side logic, databases, and APIs integration.',
            techs: [
                { name: 'Node.js', icon: SiNodedotjs },
                { name: 'Express', icon: SiExpress },
                { name: 'MongoDB', icon: SiMongodb },
                { name: 'PostgreSQL', icon: SiPostgresql },
                { name: 'REST API', icon: TbApi },
                { name: 'Firebase', icon: SiFirebase }
            ]
        },
        {
            title: 'Deployment Tools',
            icon: SiVercel,
            desc: 'Hosting, CI/CD, and production workflows.',
            techs: [
                { name: 'Vite', icon: SiVite },
                { name: 'Vercel', icon: SiVercel },
                { name: 'Netlify', icon: SiNetlify },
                { name: 'GitHub Pages', icon: FaGithub },
                { name: 'Docker', icon: FaDocker },
                { name: 'Firebase Hosting', icon: SiFirebase }
            ]
        },
        {
            title: 'Extra Tools',
            icon: FaCogs,
            desc: 'Version control, design, and development utilities.',
            techs: [
                { name: 'Git', icon: FaGitAlt },
                { name: 'GitHub', icon: FaGithub },
                { name: 'Figma', icon: SiFigma },
                { name: 'Postman', icon: SiPostman },
                { name: 'VS Code', icon: VscCode },
                { name: 'Chrome DevTools', icon: FaChrome }
            ]
        },
        {
            title: 'Problem Solving',
            icon: FaCode,
            desc: 'Competitive programming and algorithmic challenges.',
            techs: [
                { name: 'Data Structures', icon: FaProjectDiagram },
                { name: 'Algorithms', icon: FaCodeBranch },
                { name: 'LeetCode', icon: SiLeetcode },
                { name: 'Logic Building', icon: FaPuzzlePiece }
            ]
        }
    ];

    return (
        <section id="skills" className="section container skills-cyber-section">
            <div className="cyber-bg-elements">
                <div className="code-fragment f1">const code = "clean";</div>
                <div className="code-fragment f2">map(item =&gt; item)</div>
                <div className="code-fragment f3">useEffect(() =&gt; {'{ }'})</div>
                <div className="code-fragment f4">Promise.resolve()</div>
                <div className="binary-stream">0101 1010 0011 1101</div>
            </div>

            <h2 className="section-title">Skills</h2>

            <div className={`skills-container ${expandedIndex !== null ? 'expanded' : ''}`}>
                {categories.map((cat, index) => {
                    const CategoryIcon = cat.icon;

                    return (
                        <div
                            key={cat.title}
                            className={`skill-cyber-card glass ${expandedIndex === index ? 'active' : ''} ${expandedIndex !== null && expandedIndex !== index ? 'fade-out' : ''}`}
                            onClick={() => expandedIndex === null && setExpandedIndex(index)}
                        >
                            {expandedIndex !== index ? (
                                <div className="card-content-default animate-fade-in">
                                    <div className="skill-icon-cyber">
                                        <CategoryIcon aria-hidden="true" />
                                    </div>
                                    <h3 className="skill-title-cyber">{cat.title}</h3>
                                    <p className="skill-desc-cyber">{cat.desc}</p>
                                    <div className="corner-accent top-left"></div>
                                    <div className="corner-accent bottom-right"></div>
                                </div>
                            ) : (
                                <div className="card-content-expanded animate-scale-up">
                                    <div className="expanded-header">
                                        <div className="expanded-title-group">
                                            <div className="skill-icon-cyber large">
                                                <CategoryIcon aria-hidden="true" />
                                            </div>
                                            <h3 className="skill-title-cyber large">{cat.title}</h3>
                                        </div>
                                        <button
                                            className="close-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setExpandedIndex(null);
                                            }}
                                        >
                                            x
                                        </button>
                                    </div>
                                    <div className="tech-details-grid">
                                        {cat.techs.map((tech, i) => {
                                            const TechIcon = tech.icon;

                                            return (
                                                <div
                                                    key={tech.name}
                                                    className="tech-item-cyber"
                                                    style={{ animationDelay: `${i * 0.1}s` }}
                                                    title={tech.name}
                                                    aria-label={tech.name}
                                                >
                                                    <TechIcon className="tech-icon-cyber" aria-hidden="true" />
                                                    <span className="sr-only">{tech.name}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="glow-line"></div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
