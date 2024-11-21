export function initTracingBeam() {
    const beam = document.createElement('div');
    beam.className = 'spotlight';
    beam.innerHTML = '<div class="beam"></div>';
    document.body.appendChild(beam);
}

export function initLensEffect() {
    const elements = document.querySelectorAll('.lens-effect');
    
    elements.forEach(element => {
        const updateLensPosition = (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            element.style.setProperty('--mouse-x', `${x}px`);
            element.style.setProperty('--mouse-y', `${y}px`);
            element.classList.add('lens-active');
        };
        
        const handleMouseLeave = () => {
            element.classList.remove('lens-active');
        };
        
        element.addEventListener('mousemove', updateLensPosition);
        element.addEventListener('mouseleave', handleMouseLeave);
    });
}

export function initBackgroundGrid() {
    const wrapper = document.createElement('div');
    wrapper.className = 'pointer-events-none fixed inset-0 -z-10';
    
    const grid = document.createElement('div');
    grid.className = 'h-full w-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]';
    grid.style.background = `
        linear-gradient(transparent 40%, rgba(0, 255, 234, 0.05)),
        radial-gradient(circle at 50% 50%, rgba(0, 255, 234, 0.05) 1px, transparent 1px)
    `;
    grid.style.backgroundSize = '50px 50px';
    
    wrapper.appendChild(grid);
    document.body.appendChild(wrapper);
}

export function initTextGradient() {
    const elements = document.querySelectorAll('.gradient-border');
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('animate-gradient-flow');
        });
        
        element.addEventListener('mouseleave', () => {
            element.classList.remove('animate-gradient-flow');
        });
    });
}

export function initSpotlightEffect() {
    const spotlightElements = document.querySelectorAll('.spotlight-text');
    
    spotlightElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            element.style.setProperty('--mouse-x', `${x}%`);
            element.style.setProperty('--mouse-y', `${y}%`);
        });
    });
}

export function initFocusCards() {} 