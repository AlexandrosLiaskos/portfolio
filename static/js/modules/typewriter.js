export function initTypewriter(element, options = {}) {
    if (!element) {
        console.error('No element provided to typewriter');
        return;
    }

    console.log('Typewriter init started for:', element);
    
    const defaults = {
        delay: 40,
        cursorStyle: 'block',
        cursorColor: '#00ffea',
        startDelay: 500,
        deleteDelay: 2000,
        deleteSpeed: 30,
        loop: false
    };
    
    const config = { ...defaults, ...options };
    const text = element.getAttribute('data-text') || element.textContent;
    
    if (!text) {
        console.error('No text content or data-text attribute found');
        return;
    }
    
    console.log('Text to type:', text);
    
    // Clear any existing content
    element.textContent = '';
    
    // Create cursor
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.style.backgroundColor = config.cursorColor;
    element.parentNode.insertBefore(cursor, element.nextSibling);
    
    // Add styles only once
    if (!document.getElementById('typewriter-styles')) {
        const style = document.createElement('style');
        style.id = 'typewriter-styles';
        style.textContent = `
            .typing-cursor {
                display: inline-block;
                width: 3px;
                height: 1.2em;
                background-color: ${config.cursorColor};
                animation: cursor-blink 1s infinite;
                margin-left: 4px;
                vertical-align: baseline;
            }
            
            @keyframes cursor-blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Type the text
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            requestAnimationFrame(() => setTimeout(type, Math.random() * 20 + config.delay));
        }
    }
    
    // Start typing after delay
    setTimeout(type, config.startDelay);
}
