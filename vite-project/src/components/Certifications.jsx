import React from 'react';
import responsiveWebImg from '../assets/Responsive Web desigm.png';
import scientificPythonImg from '../assets/Scientific Computing With Python.png';

const Certifications = () => {
    const certifications = [
        {
            title: 'Responsive Web Design using HTML, CSS',
            issuer: 'FreeCodeCamp',
            date: 'Jan 2023',
            image: responsiveWebImg,
            link: 'https://www.freecodecamp.org/certification/riteshgabale/responsive-web-design'
        },
        {
            title: 'Scientific Computing with Python',
            issuer: 'FreeCodeCamp',
            date: 'Jan 2023',
            image: scientificPythonImg,
            link: 'https://www.freecodecamp.org/certification/riteshgabale/scientific-computing-with-python-v7'
        }
    ];

    return (
        <section id="certifications" className="section container certifications-section">
            <h2 className="section-title">Certifications</h2>
            <div className="cert-grid">
                {certifications.map((cert, index) => (
                    <div key={index} className="cert-card glass">
                        <div className="cert-img-container">
                            <img src={cert.image} alt={cert.title} className="cert-img" />
                        </div>
                        <div className="cert-info">
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-date">{cert.date}</p>
                            <a href={cert.link} className="glow-btn cert-btn" target="_blank" rel="noreferrer">View Credential</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
