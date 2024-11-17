export function initAnimations() {
    const sections = document.querySelectorAll('.section');
    const sidebar = document.querySelector('.sidebar');
    const contentSections = document.querySelector('.content-sections');
    const footer = document.querySelector('footer');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    let lastScrollY = window.scrollY;
    let isAnimating = false;
    let animationFrame = null;
    
    // Remove preload class after initial load
    window.addEventListener('load', () => {
        document.body.classList.remove('preload');
    });
    
    // Intersection Observer for sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Update active sidebar link
                const id = entry.target.getAttribute('id');
                sidebarLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-5% 0px -5% 0px'
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    function resetSidebarItems() {
        sidebarItems.forEach(item => {
            item.style.transform = 'translate3d(-20px, 0, 0)';
            item.style.opacity = '0';
        });
    }

    async function animateSidebarItems(isMobile = false) {
        if (isAnimating) return;
        isAnimating = true;

        // First, ensure sidebar is visible
        if (!isMobile) {
            sidebar.style.opacity = '1';
            sidebar.style.visibility = 'visible';
            sidebar.style.transform = 'translate3d(0, 0, 0)';
        }

        // Staggered animation for items
        const stagger = isMobile ? 60 : 40;
        const initialDelay = isMobile ? 100 : 50;

        for (let i = 0; i < sidebarItems.length; i++) {
            const item = sidebarItems[i];
            await new Promise(resolve => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translate3d(0, 0, 0)';
                    resolve();
                }, initialDelay + (i * stagger));
            });
        }

        // Cleanup
        setTimeout(() => {
            isAnimating = false;
        }, 300);
    }

    function handleScroll() {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }

        animationFrame = requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            const heroHeight = document.querySelector('.hero').offsetHeight;
            const isMobile = window.innerWidth <= 768;
            
            if (!isAnimating) {
                if (currentScrollY > heroHeight * 0.8) {
                    if (!sidebar.classList.contains('visible')) {
                        resetSidebarItems();
                        sidebar.classList.add('visible');
                        contentSections.classList.add('with-sidebar');
                        footer.classList.add('with-sidebar');
                        animateSidebarItems(isMobile);
                    }
                } else {
                    if (sidebar.classList.contains('visible')) {
                        sidebar.classList.remove('visible');
                        contentSections.classList.remove('with-sidebar');
                        footer.classList.remove('with-sidebar');
                        resetSidebarItems();
                    }
                }
            }
            
            lastScrollY = currentScrollY;
            animationFrame = null;
        });
    }

    const debouncedScroll = debounce(handleScroll, 16);
    window.addEventListener('scroll', debouncedScroll, { passive: true });

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const menuButton = document.getElementById('menuButton');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const darkOverlay = document.getElementById('darkOverlay');
    
    if (menuButton && mobileSidebar) {
        menuButton.addEventListener('click', () => {
            if (isAnimating) return;
            
            const isVisible = mobileSidebar.classList.contains('visible');
            
            if (!isVisible) {
                resetSidebarItems();
                mobileSidebar.classList.add('visible');
                darkOverlay.classList.add('active');
                requestAnimationFrame(() => {
                    mobileSidebar.style.transform = 'translate3d(0, 0, 0)';
                    animateSidebarItems(true);
                });
            } else {
                mobileSidebar.style.transform = 'translate3d(100%, 0, 0)';
                darkOverlay.classList.remove('active');
                
                setTimeout(() => {
                    mobileSidebar.classList.remove('visible');
                    resetSidebarItems();
                }, 300);
            }
        });

        darkOverlay.addEventListener('click', () => {
            mobileSidebar.style.transform = 'translate3d(100%, 0, 0)';
            darkOverlay.classList.remove('active');
            
            setTimeout(() => {
                mobileSidebar.classList.remove('visible');
                resetSidebarItems();
            }, 300);
        });
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offset = 80;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                if (mobileSidebar && mobileSidebar.classList.contains('visible')) {
                    mobileSidebar.style.transform = 'translate3d(100%, 0, 0)';
                    darkOverlay.classList.remove('active');
                    
                    setTimeout(() => {
                        mobileSidebar.classList.remove('visible');
                        resetSidebarItems();
                    }, 300);
                }
            }
        });
    });

    // Initial load animations
    setTimeout(() => {
        const isMobile = window.innerWidth <= 768;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= -100 && rect.bottom <= window.innerHeight + 100) {
                section.classList.add('visible');
            }
        });

        const currentScrollY = window.scrollY;
        const heroHeight = document.querySelector('.hero').offsetHeight;
        if (currentScrollY > heroHeight * 0.8) {
            sidebar.classList.add('visible');
            contentSections.classList.add('with-sidebar');
            footer.classList.add('with-sidebar');
            requestAnimationFrame(() => {
                animateSidebarItems(isMobile);
            });
        }
    }, 100);

    // Optimized resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        
        resizeTimeout = setTimeout(() => {
            if (isAnimating) return;
            
            const isMobile = window.innerWidth <= 768;
            if (sidebar.classList.contains('visible')) {
                resetSidebarItems();
                requestAnimationFrame(() => {
                    animateSidebarItems(isMobile);
                });
            }
        }, 250);
    }, { passive: true });
}
