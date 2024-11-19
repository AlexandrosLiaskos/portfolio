export function initializeNavigation() {
    const desktopSidebar = document.getElementById('desktopSidebar');
    const mainContent = document.querySelector('main');
    
    // Update content margin when sidebar visibility changes
    const updateContentMargin = () => {
        if (desktopSidebar?.classList.contains('visible')) {
            mainContent?.classList.add('sidebar-visible');
        } else {
            mainContent?.classList.remove('sidebar-visible');
        }
    };

    // Initial check
    updateContentMargin();

    // Watch for sidebar visibility changes
    if (desktopSidebar) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    updateContentMargin();
                }
            });
        });

        observer.observe(desktopSidebar, {
            attributes: true
        });
    }

    // Active section tracking
    const updateActiveSection = () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-item').forEach(item => {
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        });
    };

    // Intersection Observer for sections (for nav highlighting)
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add fade-in animation
                entry.target.classList.add('motion-safe:animate-fadeIn');
                
                // Update active nav state
                const id = entry.target.id;
                document.querySelectorAll(`a[href="#${id}"]`).forEach(link => {
                    link.classList.add('text-primary', 'bg-primary/10');
                });
            } else {
                // Remove active state from nav
                const id = entry.target.id;
                document.querySelectorAll(`a[href="#${id}"]`).forEach(link => {
                    link.classList.remove('text-primary', 'bg-primary/10');
                });
            }
        });
    }, {
        root: null,
        threshold: 0.2,
        rootMargin: '-100px'
    });

    // Observe all sections for nav highlighting
    document.querySelectorAll('section[id]').forEach(section => {
        navObserver.observe(section);
    });

    // Add scroll listener for active section
    window.addEventListener('scroll', () => {
        if (window.scrollTimeout) {
            window.cancelAnimationFrame(window.scrollTimeout);
        }
        window.scrollTimeout = window.requestAnimationFrame(() => {
            updateActiveSection();
        });
    }, { passive: true });
} 