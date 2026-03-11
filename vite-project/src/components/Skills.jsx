import React, { useState } from 'react';

const Skills = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const categories = [
        {
            title: 'Frontend Skills',
            icon: '🖥️',
            desc: 'Building responsive and interactive user interfaces.',
            techs: [
                { name: 'HTML5', rating: 9 },
                { name: 'CSS3', rating: 9 },
                { name: 'JavaScript', rating: 9 },
                { name: 'React', rating: 8 },
                { name: 'Next.js', rating: 7 },
                { name: 'Tailwind', rating: 9 },
                { name: 'TypeScript', rating: 8 }
            ]
        },
        {
            title: 'Backend Skills',
            icon: '⚙️',
            desc: 'Server-side logic, databases, and APIs integration.',
            techs: [
                { name: 'Node.js', rating: 8 },
                { name: 'Express', rating: 8 },
                { name: 'MongoDB', rating: 7 },
                { name: 'PostgreSQL', rating: 7 },
                { name: 'REST API', rating: 9 },
                { name: 'Firebase', rating: 8 }
            ]
        },
        {
            title: 'Deployment Tools',
            icon: '🚀',
            desc: 'Hosting, CI/CD, and production workflows.',
            techs: [
                { name: 'Vite', rating: 9 },
                { name: 'Vercel', rating: 9 },
                { name: 'Netlify', rating: 8 },
                { name: 'GitHub Pages', rating: 9 },
                { name: 'Docker', rating: 6 },
                { name: 'Firebase Hosting', rating: 8 }
            ]
        },
        {
            title: 'Extra Tools',
            icon: '🛠️',
            desc: 'Version control, design, and development utilities.',
            techs: [
                { name: 'Git', rating: 9 },
                { name: 'GitHub', rating: 9 },
                { name: 'Figma', rating: 8 },
                { name: 'Postman', rating: 8 },
                { name: 'VS Code', rating: 9 },
                { name: 'Chrome DevTools', rating: 9 }
            ]
        },
        {
            title: 'Problem Solving',
            icon: '💻',
            desc: 'Competitive programming and algorithmic challenges.',
            techs: [
                { name: 'Data Structures', rating: 8 },
                { name: 'Algorithms', rating: 8 },
                { name: 'LeetCode', rating: 7 },
                { name: 'Logic Building', rating: 9 }
            ]
        }
    ];

    const renderStars = (rating) => {
        return (
            <div className="stars-wrapper">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className={`star-item ${i < rating ? 'active' : ''}`}>
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <section id="skills" className="section container skills-cyber-section">
            <div className="cyber-bg-elements">
                <div className="code-fragment f1">const code = "clean";</div>
                <div className="code-fragment f2">map(item =&gt; item)</div>
                <div className="code-fragment f3">useEffect(() =&gt; { })</div>
                <div className="code-fragment f4">Promise.resolve()</div>
                <div className="binary-stream">0101 1010 0011 1101</div>
            </div>

            <h2 className="section-title">Skills</h2>

            <div className={`skills-container ${expandedIndex !== null ? 'expanded' : ''}`}>
                {categories.map((cat, index) => (
                    <div
                        key={cat.title}
                        className={`skill-cyber-card glass ${expandedIndex === index ? 'active' : ''} ${expandedIndex !== null && expandedIndex !== index ? 'fade-out' : ''}`}
                        onClick={() => expandedIndex === null && setExpandedIndex(index)}
                    >
                        {expandedIndex !== index ? (
                            <div className="card-content-default animate-fade-in">
                                <div className="skill-icon-cyber">{cat.icon}</div>
                                <h3 className="skill-title-cyber">{cat.title}</h3>
                                <p className="skill-desc-cyber">{cat.desc}</p>
                                <div className="corner-accent top-left"></div>
                                <div className="corner-accent bottom-right"></div>
                            </div>
                        ) : (
                            <div className="card-content-expanded animate-scale-up">
                                <div className="expanded-header">
                                    <div className="expanded-title-group">
                                        <div className="skill-icon-cyber large">{cat.icon}</div>
                                        <h3 className="skill-title-cyber large">{cat.title}</h3>
                                    </div>
                                    <button
                                        className="close-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setExpandedIndex(null);
                                        }}
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div className="tech-details-grid">
                                    {cat.techs.map((tech, i) => (
                                        <div
                                            key={tech.name}
                                            className="tech-item-cyber"
                                            style={{ animationDelay: `${i * 0.1}s` }}
                                        >
                                            <span className="tech-name-label">{tech.name}</span>
                                            <div className="tech-rating-box">
                                                {renderStars(tech.rating)}
                                                <span className="rating-numeric">{tech.rating}/10</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="glow-line"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
