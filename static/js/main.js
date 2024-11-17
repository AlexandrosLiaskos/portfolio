import { initSmoothScroll } from './modules/smoothScroll.js';
import { initScrollSpy } from './modules/scrollSpy.js';

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const darkOverlay = document.getElementById('darkOverlay');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const desktopSidebar = document.getElementById('desktopSidebar');
    let isMenuOpen = false;

    // Initialize smooth scrolling and scroll spy
    initSmoothScroll();
    initScrollSpy();

    // Add CSS variables for scroll behavior
    document.documentElement.style.setProperty('--navbar-height', '65px');
    
    // Remove any existing styles that might conflict
    const existingStyle = document.getElementById('dynamic-styles');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Add styles for sections and sidebar
    const style = document.createElement('style');
    style.id = 'dynamic-styles';
    style.textContent = `
        section {
            min-height: calc(100vh - var(--navbar-height));
            scroll-margin-top: var(--navbar-height);
            scroll-snap-align: start;
            scroll-snap-stop: always;
        }
        
        .nav-card.active {
            transform: translate3d(8px, 0, 0);
            background-color: rgba(0, 255, 234, 0.05);
            color: rgb(0, 255, 234);
        }

        .main-content {
            height: calc(100vh - var(--navbar-height));
            overflow-y: scroll;
            scroll-snap-type: y mandatory;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            padding-left: 250px;
        }

        @media (max-width: 768px) {
            .main-content {
                padding-left: 0;
            }
        }

        #desktopSidebar {
            display: block;
            position: fixed;
            top: var(--navbar-height);
            left: 0;
            width: 250px;
            height: calc(100vh - var(--navbar-height));
            padding: 1rem 2rem;
            z-index: 30;
            overflow-y: auto;
            transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
                        opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
                        visibility 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform: translate3d(-20px, 0, 0);
            opacity: 0;
            visibility: hidden;
        }

        #desktopSidebar.visible {
            transform: translate3d(0, 0, 0);
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        @media (max-width: 768px) {
            #desktopSidebar {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);

    // Ensure the desktop sidebar is properly initialized
    if (desktopSidebar && window.innerWidth > 768) {
        desktopSidebar.classList.add('visible');
        void desktopSidebar.offsetWidth;
    }

    // Mobile menu functionality
    const closeMenu = () => {
        isMenuOpen = false;
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        darkOverlay?.classList.remove('active');
        mobileSidebar?.classList.remove('visible');
        document.body.style.overflow = '';
    };

    const openMenu = () => {
        isMenuOpen = true;
        menuButton.innerHTML = '<i class="fas fa-times"></i>';
        darkOverlay?.classList.add('active');
        mobileSidebar?.classList.add('visible');
        document.body.style.overflow = 'hidden';
    };

    menuButton?.addEventListener('click', () => {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    darkOverlay?.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-sidebar a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Desktop sidebar visibility
    const handleDesktopSidebar = () => {
        if (!desktopSidebar || window.innerWidth <= 768) return;
        
        // Always show sidebar in desktop mode
        requestAnimationFrame(() => {
            desktopSidebar.classList.add('visible');
        });
    };

    // Throttled scroll handler
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(() => {
                handleDesktopSidebar();
                isScrolling = false;
            });
        }
    }, { passive: true });

    // Throttled resize handler
    let isResizing = false;
    window.addEventListener('resize', () => {
        if (!isResizing) {
            isResizing = true;
            requestAnimationFrame(() => {
                if (window.innerWidth > 768) {
                    closeMenu();
                    handleDesktopSidebar();
                }
                isResizing = false;
            });
        }
    });

    // Initial setup
    if (window.innerWidth > 768) {
        handleDesktopSidebar();
    }

    // Remove preload class after initial load
    requestAnimationFrame(() => {
        document.body.classList.remove('preload');
    });
});
