export function initializeSidebar() {
    // DOM Elements
    const desktopSidebar = document.getElementById('desktopSidebar');
    if (!desktopSidebar) {
        console.error('Desktop sidebar element not found');
        return;
    }
    
    const experienceSection = document.getElementById('experience');
    if (!experienceSection) {
        console.warn('Experience section not found');
    }
    
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    
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
        
        const mainContent = document.querySelector('.main-content');
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
        if (!experienceSection) return;
        
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
    
    // Mobile menu handling
    const toggleMenu = () => {
        const isOpen = mobileMenu.classList.contains('translate-x-0');
        
        mobileMenu.classList.toggle('translate-x-0');
        mobileMenu.classList.toggle('translate-x-full');
        overlay.classList.toggle('opacity-0');
        overlay.classList.toggle('pointer-events-none');
        
        document.body.style.overflow = isOpen ? '' : 'hidden';
        menuButton.innerHTML = isOpen ? 
            '<i class="fas fa-bars"></i>' : 
            '<i class="fas fa-times"></i>';
    };
    
    // Event listeners
    menuButton?.addEventListener('click', toggleMenu);
    overlay?.addEventListener('click', toggleMenu);
    
    document.querySelectorAll('#mobileMenu a[href^="#"]').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
    
    // Window resize handling
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            desktopSidebar.classList.add('-translate-x-full');
            desktopSidebar.classList.remove('translate-x-0');
        } else if (window.innerWidth >= 768 && 
                  experienceSection && 
                  experienceSection.getBoundingClientRect().top <= 0) {
            desktopSidebar.classList.remove('-translate-x-full');
            desktopSidebar.classList.add('translate-x-0');
        }
    });
    
    // Initialize scroll handling
    if (experienceSection) {
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
} 