import { initializeSidebar } from './components/sidebar.js';
import { initializeNavigation } from './components/navigation.js';
import { initTypewriter } from './modules/typewriter.js';

// Initialize typewriter when DOM is ready
function initializeTypewriter() {
    const nameElement = document.getElementById('name-typewriter');
    console.log('Looking for name element:', nameElement);
    
    if (nameElement) {
        console.log('Found name element, initializing typewriter');
        // Increased start delay to ensure everything is ready
        initTypewriter(nameElement, {
            delay: 50,
            cursorColor: '#00ffea',
            startDelay: 1000,
            loop: false
        });
    } else {
        console.error('Name element not found');
    }
}

// Wait for window load to ensure everything is ready
window.addEventListener('load', () => {
    console.log('Window loaded');
    try {
        initializeSidebar();
        initializeNavigation();
        initializeTypewriter();
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Alpine init listener (if needed)
document.addEventListener('alpine:init', () => {
    console.log('Alpine initialized');
});