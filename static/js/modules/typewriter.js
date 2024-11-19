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
    
    // Create cursor element
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.color = settings.cursorColor;
    cursor.style.animation = 'blink 1s step-end infinite';
    
    setTimeout(() => {
        let i = 0;
        
        function type() {
            if (i < text.length) {
                // Remove cursor before adding next character
                if (cursor.parentNode === element) {
                    cursor.remove();
                }
                element.textContent += text.charAt(i);
                element.appendChild(cursor);
                i++;
                setTimeout(type, settings.delay);
            }
            // No else block needed - cursor is already appended
        }
        
        type();
    }, settings.startDelay);
}
