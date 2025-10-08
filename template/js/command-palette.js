/**
 * COMMAND PALETTE COMPONENT
 * 
 * Quick navigation with Cmd/Ctrl + K keyboard shortcut.
 * 
 * Usage:
 *   Opens with Cmd/Ctrl + K
 *   Closes with Escape or click outside
 */

const commandPalette = document.getElementById('commandPalette');
const commandInput = document.getElementById('commandInput');

// Open/close with Cmd+K or Ctrl+K
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (commandPalette) {
            commandPalette.classList.toggle('hidden');
            if (!commandPalette.classList.contains('hidden')) {
                commandInput.focus();
            }
        }
    }
    if (e.key === 'Escape') {
        if (commandPalette) {
            commandPalette.classList.add('hidden');
            if (commandInput) commandInput.value = '';
        }
    }
});

// Close when clicking outside
if (commandPalette) {
    commandPalette.addEventListener('click', (e) => {
        if (e.target === commandPalette) {
            commandPalette.classList.add('hidden');
            if (commandInput) commandInput.value = '';
        }
    });
}

