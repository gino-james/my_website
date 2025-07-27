import React from 'react';
// Removed: import { useInView } from '../hooks/useInView'; // This import is no longer needed here
import ProjectCard from './ProjectCard.jsx'; // Correctly import the ProjectCard component

// Project Data (moved here for this component's scope, or could be in a central data file)
const allProjectData = [
    {
        title: "telecom-churn-predictor",
        description: "Developed an end-to-end Telecom Churn Prediction web app using Streamlit, implementing advanced machine learning models to forecast customer churn based on service usage, contract type, and billing data. Delivered an interactive, user-friendly interface to demonstrate real-time predictions and showcase the complete data science workflow — from preprocessing to deployment.",
        imageUrl: "https://placehold.co/600x400/FF0000/FFFFFF?text=Data+Science+Project",
        link: "https://github.com/gino-james/telecom-churn-predictor",
        domain: "Data Science"
    },
    {
        title: "E-commerce Platform (in progress )",
        description: "Built a full-stack e-commerce application with user authentication, product management, and secure payment gateway integration.",
        imageUrl: "https://placehold.co/600x400/FF0000/FFFFFF?text=Web+Dev+Project",
        link: "#",
        domain: "Web Development"
    },
    {
        title: "Cross-Platform Productivity App(in progress)",
        description: "Designed and developed a mobile productivity application using Flutter, featuring task management, reminders, and cloud sync.",
        imageUrl: "https://placehold.co/600x400/FF0000/FFFFFF?text=Flutter+App",
        link: "#",
        domain: "Flutter Development"
    },
    {
        title: "Image Recognition System",
        description: "Implemented a deep learning model for real-time object detection and classification, deployed as a web service.",
        imageUrl: "https://placehold.co/600x400/FF0000/FFFFFF?text=AI+ML+Project",
        link: "#",
        domain: "AI/ML Development"
    },
    {
        title: "Interactive Data Visualization Tool",
        description: "Created a web-based tool to visualize complex datasets with interactive charts and graphs using D3.js.",
        imageUrl: "https://placehold.co/600x400/FF0000/FFFFFF?text=Web+App+2",
        link: "#",
        domain: "Web Development"
    },
    {
        title: "Natural Language Processing Chatbot(in progress)",
        description: "Developed an intelligent chatbot capable of understanding and responding to natural language queries.",
        imageUrl: "https://placehold.co/600x400/FF0000/FFFFFF?text=NLP+Project",
        link: "#",
        domain: "AI/ML Development"
    },
    {
        title: "Stock-Price-Prediction-Data Science projects",
        description: "Built an LSTM-based stock price prediction app leveraging deep learning to forecast future trends. Developed an interactive Streamlit interface for real-time predictions and dynamic user input. Integrated historical data visualization using Matplotlib, enabling users to explore trends across custom date ranges and gain actionable financial insights.",
        imageUrl: "https://placehold.co/600x400/FF0000/FFFFFF?text=Finance+Data",
        link: "https://github.com/gino-james/Stock-Price-Prediction-using-LSTM",
        domain: "Data Science"
    },
    {
        title: "Recipe Sharing Mobile App(in progress,updates in blog)",
        description: "A Flutter application allowing users to share, discover, and save recipes with Firebase backend.",
        imageUrl: "https://placehold.co/600x400/FF0000/FFFFFF?text=Recipe+App",
        link: "#",
        domain: "Flutter Development"
    }
];

const DomainProjects = ({ domain, onBack }) => {
    const filteredProjects = allProjectData.filter(project => project.domain === domain);

    return (
        <section id="domain-projects" className="domain-projects-section">
            <div className="container">
                <button
                    onClick={onBack}
                    className="domain-projects-back-button"
                >
                    &larr; Back to All Projects
                </button>
                <h2 className="projects-title">{domain} Projects</h2>

                {filteredProjects.length > 0 ? (
                    <div className="domain-projects-grid md-grid-cols-2 lg-grid-cols-3">
                        {filteredProjects.map((project, index) => (
                            // Render ProjectCard component for each project
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-xl text-gray-400">No projects found for {domain} yet. Check back soon!</p>
                )}
            </div>
        </section>
    );
};

export default DomainProjects;
