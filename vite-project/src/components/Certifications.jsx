import React from 'react';
import responsiveWebImg from '../assets/Responsive Web desigm.png';
import scientificPythonImg from '../assets/Scientific Computing With Python.png';
import sangamHackathonImg from '../assets/SU_Certificate.jpeg';
import mosipHackathonImg from '../assets/MOSIP Decoded.png';
import appianChallengeImg from '../assets/Appian.png';

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
        },
        {
            title: '3rd Position in a all-India Hackathon',
            issuer: 'Sangam University, Rajsthan',
            date: 'March 2026',
            image: sangamHackathonImg,
            link: sangamHackathonImg
        },
        {
            title: 'MOSIP Decode Hackathon',
            issuer: 'Unstop',
            date: 'Certificate',
            image: mosipHackathonImg,
            link: 'https://unstop.com/certificate-preview/3f6efc05-ffc4-47c0-b7f8-25c8f5d2744e'
        },
        {
            title: 'Appian AI Challenge',
            issuer: 'Unstop',
            date: 'Certificate',
            image: appianChallengeImg,
            link: 'https://unstop.com/certificate-preview/f3c457b8-dc89-4775-9371-11fb536ceba7'
        }
    ];

    return (
        <section id="certifications" className="section container certifications-section">
            <h2 className="section-title">Certifications</h2>
            <div className="cert-grid">
                {certifications.map((cert, index) => (
                    <div key={index} className="cert-card glass">
                        <div className="cert-img-container">
                            {cert.image ? (
                                <img src={cert.image} alt={cert.title} className="cert-img" />
                            ) : (
                                <div className="cert-preview">
                                    <span className="cert-preview-type">{cert.previewLabel || 'Certificate'}</span>
                                    <h3 className="cert-preview-title">{cert.title}</h3>
                                </div>
                            )}
                        </div>
                        <div className="cert-info">
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-date">{cert.date}</p>
                            <div className="cert-actions">
                                <a href={cert.link} className="glow-btn cert-btn" target="_blank" rel="noreferrer">View Credential</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
