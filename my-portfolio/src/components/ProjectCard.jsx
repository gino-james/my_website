import React from 'react';
import { useInView } from '../hooks/useInView.js'; // Import the custom hook

const ProjectCard = ({ project, index }) => {
    const [ref, isVisible] = useInView({ threshold: 0.1, delay: index * 100 });

    return (
        <div key={index} ref={ref} className={`project-card animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project &rarr;</a>
            </div>
        </div>
    );
};

export default ProjectCard;
