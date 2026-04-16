import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('nav-menu-open', isMenuOpen);

        return () => {
            document.body.classList.remove('nav-menu-open');
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handlePopState = () => {
            setIsMenuOpen(false);
        };

        const handleResize = () => {
            if (window.innerWidth > 968) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('popstate', handlePopState);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('resize', handleResize);
        };
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
        <nav className={`fixed-navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo" aria-label="Home">
                    <img src={logo} alt="Logo" />
                </Link>
                <button
                    type="button"
                    className="nav-menu-toggle"
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
                </button>
                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="primary-navigation">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            end={link.to === '/'}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `glow-btn nav-cta ${isActive ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Let's Talk
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
