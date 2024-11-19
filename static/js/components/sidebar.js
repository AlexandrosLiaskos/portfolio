export function initializeSidebar() {
    // DOM Elements
    const desktopSidebar = document.getElementById('desktopSidebar');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const menuButton = document.getElementById('menuButton');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const experienceSection = document.getElementById('experience');
    const mainContent = document.querySelector('.main-content');
    
    if (!desktopSidebar) {
        console.error('Desktop sidebar element not found');
        return;
    }
    
    // Animation state management
    let isAnimating = false;
    let animationTimeout = null;
    
    // Initially hide sidebar
    desktopSidebar.classList.add('-translate-x-full', 'invisible');
    
    // Enhanced animation helper
    const animateSidebar = (show, immediate = false) => {
        if (isAnimating && !immediate) return;
        isAnimating = true;
        
        if (animationTimeout) {
            clearTimeout(animationTimeout);
        }
        
        const profile = desktopSidebar.querySelector('.profile-section');
        const navItems = desktopSidebar.querySelectorAll('.nav-item');
        const socialLinks = desktopSidebar.querySelectorAll('.social-link');
        
        if (show) {
            // Show animation sequence
            desktopSidebar.classList.remove('invisible', 'pointer-events-none');
            
            requestAnimationFrame(() => {
                desktopSidebar.classList.remove('-translate-x-full');
                desktopSidebar.classList.add('visible', 'animate-slide-in-sidebar');
                
                // Profile animation
                if (profile) {
                    setTimeout(() => {
                        profile.style.transform = `translate3d(0, -30px, 0) scale(0.95)`;
                        profile.style.opacity = '0';
                        
                        requestAnimationFrame(() => {
                            profile.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-out';
                            profile.style.transform = 'translate3d(0, 0, 0) scale(1)';
                            profile.style.opacity = '1';
                        });
                    }, 200);
                }
                
                // Nav items animation
                navItems.forEach((item, index) => {
                    const delay = 300 + (index * 60);
                    const xOffset = -40 + (index * -5);
                    
                    setTimeout(() => {
                        item.style.transform = `translate3d(${xOffset}px, 0, 0) scale(0.95)`;
                        item.style.opacity = '0';
                        
                        requestAnimationFrame(() => {
                            item.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out';
                            item.style.transform = 'translate3d(0, 0, 0) scale(1)';
                            item.style.opacity = '1';
                        });
                    }, delay);
                });
                
                // Social links animation
                socialLinks.forEach((link, index) => {
                    setTimeout(() => {
                        link.style.transform = 'translate3d(0, 20px, 0) scale(0.9)';
                        link.style.opacity = '0';
                        
                        requestAnimationFrame(() => {
                            link.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out';
                            link.style.transform = 'translate3d(0, 0, 0) scale(1)';
                            link.style.opacity = '1';
                        });
                    }, 600 + (index * 100));
                });
                
                mainContent?.classList.add('sidebar-visible');
                
                animationTimeout = setTimeout(() => {
                    isAnimating = false;
                }, 1200);
            });
        } else {
            // Hide animation sequence
            const totalItems = navItems.length;
            
            navItems.forEach((item, index) => {
                const delay = (totalItems - index - 1) * 50;
                const xOffset = -40 + ((totalItems - index - 1) * -5);
                
                setTimeout(() => {
                    item.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in';
                    item.style.transform = `translate3d(${xOffset}px, 0, 0) scale(0.95)`;
                    item.style.opacity = '0';
                }, delay);
            });
            
            socialLinks.forEach((link, index) => {
                setTimeout(() => {
                    link.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in';
                    link.style.transform = 'translate3d(0, 20px, 0) scale(0.9)';
                    link.style.opacity = '0';
                }, index * 50);
            });
            
            if (profile) {
                setTimeout(() => {
                    profile.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in';
                    profile.style.transform = 'translate3d(0, -20px, 0) scale(0.95)';
                    profile.style.opacity = '0';
                }, 100);
            }
            
            setTimeout(() => {
                desktopSidebar.classList.remove('visible', 'animate-slide-in-sidebar');
                desktopSidebar.classList.add('-translate-x-full');
                
                const resetElements = [...navItems, ...socialLinks];
                if (profile) resetElements.push(profile);
                
                resetElements.forEach(el => {
                    el.style.transition = '';
                    el.style.transform = '';
                    el.style.opacity = '';
                });
                
                mainContent?.classList.remove('sidebar-visible');
                
                setTimeout(() => {
                    desktopSidebar.classList.add('invisible', 'pointer-events-none');
                    isAnimating = false;
                }, 400);
            }, 300);
        }
    };
    
    // Scroll handling
    const handleScroll = () => {
        if (!experienceSection || window.innerWidth <= 767) return; // Skip for mobile
        
        const heroSection = document.querySelector('section:first-of-type');
        const lastSection = document.querySelector('section:last-of-type');
        const isCurrentlyVisible = desktopSidebar.classList.contains('visible');
        
        const isPastHero = heroSection && window.scrollY > heroSection.offsetHeight / 2;
        const isBeforeEnd = lastSection && 
                           (lastSection.offsetTop + lastSection.offsetHeight - window.innerHeight > window.scrollY);
        
        if (isPastHero && !isCurrentlyVisible) {
            animateSidebar(true);
        } else if (!isPastHero && isCurrentlyVisible) {
            animateSidebar(false);
        }
    };
    
    // Toggle mobile menu
    const toggleMobileMenu = () => {
        if (!mobileMenu || !mobileOverlay) return;
        
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        
        if (!isOpen) {
            // Opening
            mobileMenu.classList.remove('translate-x-full');
            mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
            document.body.style.overflow = 'hidden';
        } else {
            // Closing
            mobileMenu.classList.add('translate-x-full');
            mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
            document.body.style.overflow = '';
        }
    };

    // Event listeners for mobile menu
    menuButton?.addEventListener('click', toggleMobileMenu);
    closeMobileMenu?.addEventListener('click', toggleMobileMenu);
    mobileOverlay?.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking navigation items
    const mobileNavItems = mobileMenu?.querySelectorAll('a[href^="#"]');
    mobileNavItems?.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                toggleMobileMenu(); // Close menu
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300); // Wait for menu close animation
            }
        });
    });
    
    // Window resize handling
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 767) {
            // Always hide desktop sidebar on mobile
            desktopSidebar.classList.add('-translate-x-full', 'invisible');
            desktopSidebar.classList.remove('visible', 'translate-x-0');
            mainContent?.classList.remove('sidebar-visible');
        } else if (window.innerWidth > 767 && 
                  experienceSection && 
                  experienceSection.getBoundingClientRect().top <= 0) {
            // Show desktop sidebar on desktop if past hero section
            animateSidebar(true);
        }
    });
    
    // Initialize scroll handling
    if (experienceSection) {
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
} 