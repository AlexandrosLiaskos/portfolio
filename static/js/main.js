import { initSmoothScroll } from './modules/smoothScroll.js';

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const darkOverlay = document.getElementById('darkOverlay');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const desktopSidebar = document.getElementById('desktopSidebar');
    let isMenuOpen = false;
    let rafId = null;

    // Initialize smooth scrolling
    initSmoothScroll();

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

    // Desktop sidebar scroll behavior with RAF
    const handleDesktopSidebar = () => {
        if (window.innerWidth <= 768) return;

        const scrollPosition = window.scrollY;
        const heroHeight = document.querySelector('.hero')?.offsetHeight || window.innerHeight;
        const shouldShowSidebar = scrollPosition > heroHeight * 0.3;

        if (shouldShowSidebar && !desktopSidebar?.classList.contains('visible')) {
            desktopSidebar?.classList.add('visible');
        } else if (!shouldShowSidebar && desktopSidebar?.classList.contains('visible')) {
            desktopSidebar?.classList.remove('visible');
        }
    };

    // Handle scroll with RAF
    const onScroll = () => {
        if (rafId) return;
        
        rafId = requestAnimationFrame(() => {
            handleDesktopSidebar();
            rafId = null;
        });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Handle window resize with RAF
    let resizeRafId = null;
    window.addEventListener('resize', () => {
        if (resizeRafId) return;
        
        resizeRafId = requestAnimationFrame(() => {
            if (window.innerWidth > 768) {
                closeMenu();
                handleDesktopSidebar();
            }
            resizeRafId = null;
        });
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
