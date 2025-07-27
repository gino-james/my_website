import React, { useState } from 'react';
import './App.css'; // Import the main CSS file

// Import all individual components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectCategories from './components/ProjectCategories';
import DomainProjects from './components/DomainProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen'; // <-- CHANGE THIS LINE

// Main App Component
const App = () => {
    const [currentView, setCurrentView] = useState('home');
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigateToDomainProjects = (domain) => {
        setSelectedDomain(domain);
        setCurrentView('domain-projects');
    };

    const navigateToProjectsOverview = () => {
        setSelectedDomain(null);
        setCurrentView('home');
    };

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <div className="app-container">
            {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

            {!isLoading && (
                <>
                    <Navbar navigateToProjectsOverview={navigateToProjectsOverview} />
                    {currentView === 'home' ? (
                        <>
                            <Hero />
                            <About />
                            <Skills />
                            <ProjectCategories onSelectDomain={navigateToDomainProjects} />
                            <Contact />
                        </>
                    ) : (
                        <DomainProjects domain={selectedDomain} onBack={navigateToProjectsOverview} />
                    )}
                    <Footer />
                </>
            )}
        </div>
    );
};

export default App;
