import React from 'react';

const Navbar = ({ navigateToProjectsOverview }) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#hero" onClick={navigateToProjectsOverview} className="navbar-logo hover-scale-105">𝕲𝕵</a>
                <div className="navbar-links">
                    <a href="#about" className="hover-scale-105">About</a>
                    <a href="#skills" className="hover-scale-105">Skills</a>
                    <a href="#projects" onClick={navigateToProjectsOverview} className="hover-scale-105">Projects</a>
                    <a href="#contact" className="hover-scale-105">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
