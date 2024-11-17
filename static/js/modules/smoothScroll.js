export function initSmoothScroll() {
    // Get all links that have a hash
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Use native smooth scrolling with scroll-margin support
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
            
            // Update active state of nav cards
            const navCards = document.querySelectorAll('.nav-card');
            navCards.forEach(card => {
                if (card === link) {
                    card.classList.add('active');
                    card.style.transform = 'translate3d(8px, 0, 0)';
                    card.style.backgroundColor = 'rgba(0, 255, 234, 0.05)';
                    card.style.color = 'rgb(0, 255, 234)';
                } else {
                    card.classList.remove('active');
                    card.style.transform = '';
                    card.style.backgroundColor = '';
                    card.style.color = '';
                }
            });
        });
    });
}
