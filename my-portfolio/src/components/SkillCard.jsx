import React from 'react';
import { useInView } from '../hooks/useInView.js'; 

const SkillCard = ({ category, index }) => {
    const [ref, isVisible] = useInView({ threshold: 0.1, delay: index * 100 });

    return (
        <div key={index} ref={ref} className={`skill-card animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
            <h3>{category.title}</h3>
            <ul>
                {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
