import React from 'react';
import { useInView } from '../hooks/useInView.js'; // Import the custom hook

const ProjectCategoryCard = ({ domain, index, onSelectDomain }) => {
    const [ref, isVisible] = useInView({ threshold: 0.1, delay: index * 100 });

    return (
        <div
            key={index}
            ref={ref}
            className={`project-category-card animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}
            onClick={() => onSelectDomain(domain)}
        >
            <h3>{domain} Projects</h3>
            <p>Explore my work in {domain}.</p>
        </div>
    );
};

export default ProjectCategoryCard;
