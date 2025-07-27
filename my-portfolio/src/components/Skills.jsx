import React from 'react';
import SkillCard from './SkillCard.jsx'; // Import the new SkillCard component

const Skills = () => {
    const skillCategories = [
        {
            title: "Data Science",
            skills: [
                "Python (Pandas, NumPy, Scikit-learn, TensorFlow)",
                "Statistical Modeling",
                "Data Visualization (Matplotlib, Seaborn)",
                "SQL,R , Data Warehousing ,  Big Data (Spark, Hadoop)",
                "Excel,  Tableau ,Git/GitHub"
            ]
        },
        {
            title: "Web Development",
            skills: [
                "HTML5, CSS3, JavaScript (ES6+)",
                "React, tailwind css,Bootstrap",
                "Node.js, Express.js",
                "RESTful APIs",
                "Database Management (MongoDB, PostgreSQL)"
            ]
        },
        {
            title: "Flutter Development",
            skills: [
                "Dart Programming Language",
                "UI/UX Design for Mobile , figma",
                "State Management (Provider, BLoC)",
                "Firebase Integration",
                "Cross-platform Deployment"
            ]
        },
        {
            title: "AI/ML Development",
            skills: [
                "Machine Learning Algorithms",
                "Deep Learning (TensorFlow, PyTorch)",
                "Natural Language Processing (NLP)",
                "Computer Vision",
                "Model Deployment (e.g. Docker)"
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="skills-title">My Skills</h2>
                <div className="skills-grid md-grid-cols-2 lg-grid-cols-4">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
