export function initIntroAnimation() {
    const introSection = document.querySelector('.min-h-screen.w-full.flex.items-center.justify-center.relative');
    const content = document.querySelector('.animate-slide-up');
    
    if (!introSection || !content) return;

    // Function to trigger animations
    function animateIntro() {
        content.classList.add('animate-slide-up');
    }

    // Use Intersection Observer to trigger animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateIntro();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(introSection);
}
