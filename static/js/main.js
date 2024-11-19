import { initializeSidebar } from './components/sidebar.js';
import { initializeNavigation } from './components/navigation.js';
import { initTypewriter } from './modules/typewriter.js';
import { 
    initTracingBeam, 
    init3DCards, 
    initLensEffect,
    initBackgroundGrid, 
    initTextGradient,
    initCodeWindow3D 
} from './modules/aceternity.js';

// Initialize typewriter when DOM is ready
function initializeTypewriter() {
    const nameElement = document.getElementById('name-typewriter');
    
    if (nameElement) {
        initTypewriter(nameElement, {
            delay: 50,
            cursorColor: '#00ffea',
            startDelay: 0,
            loop: false
        });
    }
}

// Wait for window load to ensure everything is ready
window.addEventListener('load', () => {
    console.log('Window loaded');
    try {
        initializeSidebar();
        initializeNavigation();
        initializeTypewriter();
        
        // Initialize Aceternity effects
        initTracingBeam();
        init3DCards();
        initLensEffect();
        initBackgroundGrid();
        initTextGradient();
        initCodeWindow3D();
        
        // Initialize hover card effect
        const cards = document.querySelectorAll('.hover-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Alpine init listener (if needed)
document.addEventListener('alpine:init', () => {
    console.log('Alpine initialized');
});