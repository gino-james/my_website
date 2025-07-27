import { useState, useEffect, useRef, useCallback } from 'react';

// Custom Hook for "Scroll into View" Animation with optional delay
const useInView = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const { threshold = 0.1, delay = 0 } = options;

    const callback = useCallback((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setTimeout(() => {
                setIsVisible(true);
            }, delay);
        } else {
            // Optional: reset visibility if element scrolls out of view
            // setIsVisible(false);
        }
    }, [delay]);

    const observer = useRef(null);

    useEffect(() => {
        if (ref.current) {
            observer.current = new IntersectionObserver(callback, { threshold });
            observer.current.observe(ref.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [ref, threshold, callback]);

    return [ref, isVisible];
};

export { useInView };
