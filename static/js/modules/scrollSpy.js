export function initScrollSpy() {
    // Get all section elements and nav cards
    const sections = document.querySelectorAll('section');
    const navCards = document.querySelectorAll('.nav-card');
    
    // Configure the Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -75% 0px', // Adjusted margins for better triggering
        threshold: [0, 0.25, 0.5, 0.75, 1] // Multiple thresholds for smoother transitions
    };
    
    // Create observer to track active section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Find the corresponding nav card for this section
            const targetId = entry.target.id;
            const activeCard = targetId ? document.querySelector(`a[href="#${targetId}"]`) : null;
            
            if (entry.intersectionRatio > 0.5) {
                // Remove active class from all nav cards
                navCards.forEach(card => {
                    card.classList.remove('active');
                    card.style.transform = '';
                    card.style.backgroundColor = '';
                    card.style.color = '';
                });
                
                // Highlight the corresponding nav card if it exists
                if (activeCard) {
                    activeCard.classList.add('active');
                    activeCard.style.transform = 'translate3d(8px, 0, 0)';
                    activeCard.style.backgroundColor = 'rgba(0, 255, 234, 0.05)';
                    activeCard.style.color = 'rgb(0, 255, 234)';
                }
            }
        });
    }, observerOptions);
    
    // Set up scroll snap and observe sections
    sections.forEach((section, index) => {
        // Add scroll snap to all sections
        section.style.scrollSnapAlign = 'start';
        section.style.scrollSnapStop = 'always';
        section.style.scrollMargin = '65px'; // Account for navbar height
        
        // If it's not the hero section (first section), ensure it has full height
        if (index > 0) {
            section.style.minHeight = 'calc(100vh - 65px)';
        }
        
        // Observe all sections
        observer.observe(section);
    });
    
    // Add scroll snap container styles to main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.scrollSnapType = 'y mandatory';
        mainContent.style.overflowY = 'scroll';
        mainContent.style.height = 'calc(100vh - 65px)';
        mainContent.style.scrollBehavior = 'smooth';
        mainContent.style.webkitOverflowScrolling = 'touch';
    }
    
    // Clean up function
    return () => {
        sections.forEach(section => observer.unobserve(section));
        observer.disconnect();
    };
}
