export function initTracingBeam() {
    const beam = document.createElement('div');
    beam.className = 'spotlight';
    beam.innerHTML = '<div class="beam"></div>';
    document.body.appendChild(beam);
}

export function init3DCards() {
    const cards = document.querySelectorAll(".card-3d");
    
    cards.forEach((card) => {
        function handleMouseMove(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation based on mouse position
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 20; // Increased rotation angle
            const rotateY = ((x - centerX) / centerX) * 20; // Increased rotation angle
            
            // Apply the 3D rotation
            card.style.transform = `
                perspective(1000px)
                rotateX(${-rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
            
            // Update the highlight gradient
            card.style.background = `
                radial-gradient(
                    800px circle at ${x}px ${y}px,
                    rgba(0, 255, 234, 0.1),
                    transparent 40%
                )
            `;
        }
        
        function handleMouseLeave() {
            // Reset transforms smoothly
            card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                scale3d(1, 1, 1)
            `;
            card.style.background = "rgba(0, 0, 0, 0.2)";
        }
        
        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);
    });
}

export function initLensEffect() {
    const elements = document.querySelectorAll('.lens-effect');
    
    elements.forEach(element => {
        const updateLensPosition = (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Update CSS variables for position
            element.style.setProperty('--mouse-x', `${x}px`);
            element.style.setProperty('--mouse-y', `${y}px`);
            
            // Add active class when mouse is over
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

export function initCodeWindow3D() {
    const codeWindows = document.querySelectorAll(".code-window");
    
    codeWindows.forEach((window) => {
        function handleMouseMove(e) {
            const rect = window.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation based on mouse position
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 10; // Reduced rotation for code windows
            const rotateY = ((x - centerX) / centerX) * 10;
            
            // Apply the 3D rotation
            window.style.transform = `
                perspective(1000px)
                rotateX(${-rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.02, 1.02, 1.02)
            `;
            
            // Update the highlight gradient
            window.style.background = `
                radial-gradient(
                    800px circle at ${x}px ${y}px,
                    rgba(0, 255, 234, 0.1),
                    transparent 40%
                )
            `;
        }
        
        function handleMouseLeave() {
            // Reset transforms smoothly
            window.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                scale3d(1, 1, 1)
            `;
            window.style.background = "rgba(0, 0, 0, 0.2)";
        }
        
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
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