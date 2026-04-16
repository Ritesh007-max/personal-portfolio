import React from 'react';
import ExternalButton from './ExternalButton';

const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ritesh-gabale-59a2b5365/' },
    { label: 'GitHub', href: 'https://github.com/Ritesh007-max' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/Riteshgabale/' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCvUx30QhPrjk0KUu4M0ILvA' },
    { label: 'Email', href: 'mailto:riteshworking247@gmail.com' }
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer container">
            <div className="footer-content">
                <p className="copyright-text">(c) {currentYear} Ritesh Gabale - Built with React</p>
                <div className="social-links">
                    {socialLinks.map((link) => (
                        <ExternalButton
                            key={link.label}
                            href={link.href}
                            className="social-icon"
                            ariaLabel={link.label}
                            target={link.label === 'Email' ? '_self' : '_blank'}
                            rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                        >
                            {link.label}
                        </ExternalButton>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
