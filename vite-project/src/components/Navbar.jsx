import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Skills', to: '/skills' },
        { name: 'Projects', to: '/projects' },
        { name: 'Certifications', to: '/certifications' },
        { name: 'Contact', to: '/contact' },
    ];

    return (
        <nav className={`fixed-navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo" aria-label="Home">
                    <img src={logo} alt="Logo" />
                </Link>
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            end={link.to === '/'}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `glow-btn nav-cta ${isActive ? 'active' : ''}`}
                    >
                        Let's Talk
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
