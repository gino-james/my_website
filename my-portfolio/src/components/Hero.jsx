import React, { useState, useEffect } from 'react';
//import { useInView } from '../hooks/useInView.js'; // Corrected import path

const Hero = () => {
    const [headlineVisible, setHeadlineVisible] = useState(false);
    const [ginoVisible, setGinoVisible] = useState(false);
    const [jamesVisible, setJamesVisible] = useState(false);
    const [subheadlineVisible, setSubheadlineVisible] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);

    useEffect(() => {
        // "Hello, I'm" fades in
        const timer1 = setTimeout(() => setHeadlineVisible(true), 200);

        // "Gino" fades in after a delay
        const timerGino = setTimeout(() => setGinoVisible(true), 1000);

        // "James" fades in after "Gino"
        const timerJames = setTimeout(() => setJamesVisible(true), 1300);

        // Subheadline fades in after "James"
        const timerSubheadline = setTimeout(() => setSubheadlineVisible(true), 1800);

        // Button fades in after subheadline
        const timerButton = setTimeout(() => setButtonVisible(true), 2400);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timerGino);
            clearTimeout(timerJames);
            clearTimeout(timerSubheadline);
            clearTimeout(timerButton);
        };
    }, []);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-gradient-overlay"></div>
            <div className="hero-content">
                <h1 className={`hero-headline animate-fade-in-up ${headlineVisible ? 'is-visible' : ''}`}>
                    Hello, I'm <span className="text-custom-red">
                        <span className={`animated-word ${ginoVisible ? 'is-visible' : ''}`}>Gino</span>{' '}
                        <span className={`animated-word ${jamesVisible ? 'is-visible' : ''}`}>James</span>
                    </span>
                </h1>
                <p className={`hero-subheadline animate-fade-in-up ${subheadlineVisible ? 'is-visible' : ''}`}>
                    An innovative <span className="text-custom-red">Data Scientist</span>, <span className="text-custom-red">Web Developer</span>, <span className="text-custom-red">Flutter Developer</span>, and <span className="text-custom-red">AI/ML Enthusiast</span>.
                </p>
                <a href="#contact" className={`hero-button animate-fade-in-up ${buttonVisible ? 'is-visible' : ''}`}>
                    Get in Touch
                </a>
            </div>
        </section>
    );
};

export default Hero;
