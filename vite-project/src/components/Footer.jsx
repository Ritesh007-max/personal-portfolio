import React from 'react';
import ExternalButton from './ExternalButton';

const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ritesh-gabale-59a2b5365/' },
    { label: 'GitHub', href: 'https://github.com/Ritesh007-max' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/Riteshgabale/' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCvUx30QhPrjk0KUu4M0ILvA' },
    { label: 'Email', href: 'https://mail.google.com/mail/u/0/#inbox' }
];

const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer-content">
                <p className="copyright-text">(c) 2024 Ritesh Gabale - Built with React</p>
                <div className="social-links">
                    {socialLinks.map((link) => (
                        <ExternalButton
                            key={link.label}
                            href={link.href}
                            className="social-icon"
                            ariaLabel={link.label}
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
