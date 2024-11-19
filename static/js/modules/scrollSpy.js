export function initScrollSpy() {
    // Get all section elements and nav cards
    const sections = document.querySelectorAll('section');
    const navCards = document.querySelectorAll('.nav-card');
    const heroSection = document.querySelector('section#hero');
    
    // Configure the Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -80% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
    };
    
    // Track the currently active section
    let currentActive = null;
    
    // Create observer to track active section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const targetId = entry.target.id;
            const activeCard = targetId ? document.querySelector(`a[href="#${targetId}"]`) : null;
            
            // Handle hero section visibility
            if (targetId === 'hero') {
                if (entry.isIntersecting) {
                    document.body.classList.add('hero-active');
                } else {
                    document.body.classList.remove('hero-active');
                }
            }
            
            if (entry.intersectionRatio > 0.3) {
                // Only update if this is a different section
                if (currentActive !== targetId) {
                    // Remove active state from previous
                    if (currentActive) {
                        const prevCard = document.querySelector(`a[href="#${currentActive}"]`);
                        if (prevCard) {
                            prevCard.classList.remove('active');
                            prevCard.style.transform = '';
                            prevCard.style.backgroundColor = '';
                            prevCard.style.color = '';
                        }
                    }
                    
                    // Set new active state
                    if (activeCard) {
                        currentActive = targetId;
                        activeCard.classList.add('active');
                        activeCard.style.transform = 'translate3d(8px, 0, 0)';
                        activeCard.style.backgroundColor = 'rgba(0, 255, 234, 0.05)';
                        activeCard.style.color = 'rgb(0, 255, 234)';
                        
                        // Ensure active item is visible in sidebar
                        const sidebar = activeCard.closest('.sidebar');
                        if (sidebar) {
                            const cardRect = activeCard.getBoundingClientRect();
                            const sidebarRect = sidebar.getBoundingClientRect();
                            
                            if (cardRect.top < sidebarRect.top || cardRect.bottom > sidebarRect.bottom) {
                                activeCard.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'center'
                                });
                            }
                        }
                    }
                }
            }
        });
    }, observerOptions);
    
    // Set up sections
    sections.forEach((section, index) => {
        // Only apply scroll margin to account for navbar
        section.style.scrollMargin = '65px';
        
        // Ensure non-hero sections have appropriate height
        if (index > 0) {
            section.style.minHeight = 'calc(100vh - 65px - 65px)'; // Account for navbar and footer
        }
        
        // Observe all sections
        observer.observe(section);
    });
    
    // Configure main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        // Use smooth scroll behavior
        mainContent.style.scrollBehavior = 'smooth';
        mainContent.style.webkitOverflowScrolling = 'touch';
        
        // Calculate height accounting for navbar and footer
        const footerHeight = document.querySelector('footer')?.offsetHeight || 65;
        mainContent.style.minHeight = `calc(100vh - ${footerHeight}px)`;
        
        // Handle dynamic height adjustments
        const resizeObserver = new ResizeObserver(() => {
            const footerHeight = document.querySelector('footer')?.offsetHeight || 65;
            mainContent.style.minHeight = `calc(100vh - ${footerHeight}px)`;
        });
        
        resizeObserver.observe(mainContent);
    }
    
    // Clean up function
    return () => {
        sections.forEach(section => observer.unobserve(section));
        observer.disconnect();
        if (mainContent) {
            resizeObserver?.disconnect();
        }
    };
}
