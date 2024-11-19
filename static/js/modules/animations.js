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
    
    // Add progress bar to sidebar
    const progressBar = document.createElement('div');
    progressBar.className = 'absolute top-0 left-0 w-1 h-full bg-white/5';
    const progressIndicator = document.createElement('div');
    progressIndicator.className = 'w-full bg-primary transition-all duration-300';
    progressBar.appendChild(progressIndicator);
    sidebar?.insertBefore(progressBar, sidebar.firstChild);

    // Update scroll progress
    function updateProgress() {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressIndicator) {
            progressIndicator.style.height = `${scrolled}%`;
        }
    }

    // Enhanced resetSidebarItems with animation
    function resetSidebarItems() {
        sidebarItems.forEach((item, index) => {
            item.style.transform = 'translate3d(-20px, 0, 0)';
            item.style.opacity = '0';
            item.style.transitionDelay = `${index * 50}ms`;
        });
    }

    // Enhanced animateSidebarItems with staggered reveal
    async function animateSidebarItems(isMobile = false) {
        if (isAnimating) return;
        isAnimating = true;

        if (!isMobile) {
            sidebar.style.opacity = '1';
            sidebar.style.visibility = 'visible';
            sidebar.style.transform = 'translate3d(0, 0, 0)';
        }

        const stagger = isMobile ? 60 : 40;
        const initialDelay = isMobile ? 100 : 50;

        for (let i = 0; i < sidebarItems.length; i++) {
            const item = sidebarItems[i];
            await new Promise(resolve => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translate3d(0, 0, 0)';
                    item.style.transitionDelay = `${i * stagger}ms`;
                    resolve();
                }, initialDelay + (i * stagger));
            });
        }

        setTimeout(() => {
            isAnimating = false;
        }, 300);
    }

    // Enhanced handleScroll with progress update
    function handleScroll() {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }

        animationFrame = requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            const heroHeight = document.querySelector('.hero').offsetHeight;
            const isMobile = window.innerWidth <= 768;
            
            updateProgress();

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

                // Update active section
                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        const id = section.id;
                        sidebarLinks.forEach(link => {
                            const linkHref = link.getAttribute('href').substring(1);
                            if (linkHref === id) {
                                link.classList.add('active');
                                link.style.transform = 'translate3d(8px, 0, 0)';
                                link.style.backgroundColor = 'rgba(0, 255, 234, 0.1)';
                                link.style.color = 'rgb(0, 255, 234)';
                            } else {
                                link.classList.remove('active');
                                link.style.transform = '';
                                link.style.backgroundColor = '';
                                link.style.color = '';
                            }
                        });
                    }
                });
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
