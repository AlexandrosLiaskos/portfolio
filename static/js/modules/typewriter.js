export function initTypewriter(element, options = {}) {
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
    const text = element.getAttribute('data-text');
    element.textContent = '';
    
    // Create wrapper with proper styling
    const wrapper = document.createElement('div');
    wrapper.className = 'inline-flex items-center';
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
    
    // Create cursor
    const cursor = document.createElement('span');
    cursor.className = `typing-cursor ${config.cursorStyle} ml-1`;
    wrapper.appendChild(cursor);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .typing-cursor {
            display: inline-block;
            width: 3px;
            height: 1.2em;
            background-color: ${config.cursorColor};
            animation: cursor-blink 1s infinite;
        }
        
        .typing-cursor.block {
            width: 0.6em;
        }
        
        @keyframes cursor-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Typing function with promise
    const typeText = () => {
        return new Promise((resolve) => {
            let index = 0;
            
            const type = () => {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, Math.random() * 20 + config.delay);
                } else {
                    resolve();
                }
            };
            
            setTimeout(type, config.startDelay);
        });
    };
    
    // Delete function with promise
    const deleteText = () => {
        return new Promise((resolve) => {
            let text = element.textContent;
            
            const deleteChar = () => {
                if (text.length > 0) {
                    text = text.slice(0, -1);
                    element.textContent = text;
                    setTimeout(deleteChar, config.deleteSpeed);
                } else {
                    resolve();
                }
            };
            
            setTimeout(deleteChar, config.deleteDelay);
        });
    };
    
    // Start animation
    const animate = async () => {
        await typeText();
        if (config.loop) {
            await deleteText();
            animate();
        }
    };
    
    animate();
}
