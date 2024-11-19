export function initTypewriter(element, options = {}) {
    const defaultOptions = {
        delay: 50,
        cursorColor: '#00ffea',
        startDelay: 0,
        loop: false
    };
    
    const settings = { ...defaultOptions, ...options };
    const text = element.getAttribute('data-text');
    
    if (!text) {
        console.error('No text provided for typewriter');
        return;
    }
    
    // Clear any existing content
    element.textContent = '';
    
    // Create cursor element with enhanced styling
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    cursor.style.background = settings.cursorColor;
    
    setTimeout(() => {
        let i = 0;
        
        function type() {
            if (i < text.length) {
                // Remove cursor before adding next character
                if (cursor.parentNode === element) {
                    cursor.remove();
                }
                
                // Add character with potential styling
                const char = document.createElement('span');
                char.textContent = text.charAt(i);
                char.style.opacity = '0';
                element.appendChild(char);
                
                // Fade in the character
                requestAnimationFrame(() => {
                    char.style.transition = 'opacity 0.1s ease-in';
                    char.style.opacity = '1';
                });
                
                element.appendChild(cursor);
                i++;
                setTimeout(type, settings.delay);
            }
        }
        
        type();
    }, settings.startDelay);
}
