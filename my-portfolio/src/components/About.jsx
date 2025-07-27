import React from 'react';
import { useInView } from '../hooks/useInView'; // Import the custom hook

const About = () => {
    const [ref, isVisible] = useInView({ threshold: 0.1 });
    return (
        <section id="about" ref={ref} className={`about-section animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
            <div className="container">
                <h2 className="about-title">About Me</h2>
                <div className="about-content md-flex-row">
                    <div className="about-image-wrapper md-w-1-3 md-mb-0">
                        {/* Remember to replace this with your actual photo */}
                        <img src="https://placehold.co/400x400/FF0000/FFFFFF?text=Gino" alt="Gino James" className="about-image" />
                    </div>
                    <div className="about-text-content md-w-2-3">
                        <p>
                            Hi, I'm Gino — a dynamic tech enthusiast driven by curiosity and a passion for solving real-world problems through code and intelligence.
                        </p>
                        <p>
                            With a strong foundation in Data Science, I specialize in extracting insights from data and transforming them into actionable solutions. As a Web Developer, I craft responsive and user-centric websites, and through Flutter, I bring seamless cross-platform mobile apps to life.
                        </p>
                        <p>
                             My deep interest in Artificial Intelligence and Machine Learning keeps me on the cutting edge of innovation, always exploring smarter, faster, and more efficient ways to build the future.
                        </p>
                        <p>
                            Whether it’s building intelligent systems, designing beautiful interfaces, or developing scalable solutions, I bring creativity, precision, and purpose to every project I take on.
                        </p>
                        <p>
                            Let’s shape dreams into design, and code them into the future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
