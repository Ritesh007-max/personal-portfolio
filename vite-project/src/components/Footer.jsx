import React from 'react';

const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ritesh-gabale-59a2b5365/' },
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
                        <a key={link.label} href={link.href} className="social-icon" target="_blank" rel="noreferrer">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
