import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
    const [count, setCount] = useState(3);
    const [message, setMessage] = useState("Initializing AI Core...");
    const [fadeAway, setFadeAway] = useState(false);

    useEffect(() => {
        const countdownTimer = setInterval(() => {
            setCount(prevCount => {
                if (prevCount === 1) {
                    clearInterval(countdownTimer);
                    setMessage("Loading Portfolio Data...");
                    setTimeout(() => {
                        setFadeAway(true);
                        setTimeout(onComplete, 1000);
                    }, 500);
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);

        return () => clearInterval(countdownTimer);
    }, [onComplete]);

    return (
        <div className={`loading-screen ${fadeAway ? 'fade-away' : ''}`}>
            <div className="loading-count pulse-animation">
                {count > 0 ? count : ''}
            </div>
            <p className="loading-message">
                {message}
            </p>
        </div>
    );
};

export default LoadingScreen;
