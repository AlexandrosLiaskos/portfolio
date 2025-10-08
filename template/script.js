// ============================================
// TAB NAVIGATION COMPONENT
// ============================================

function switchTab(tabName) {
    // Update desktop tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) activeTab.classList.add('active');

    // Update tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    const activePane = document.getElementById(tabName);
    if (activePane) activePane.classList.add('active');

    // Update mobile dropdown
    document.querySelectorAll('.mobile-tab-option').forEach(option => {
        option.classList.remove('active');
    });
    const activeMobileOption = document.querySelector(`.mobile-tab-option[data-tab="${tabName}"]`);
    if (activeMobileOption) activeMobileOption.classList.add('active');

    // Update mobile button text
    const currentTabName = document.getElementById('currentTabName');
    if (currentTabName && activeTab) {
        currentTabName.textContent = activeTab.textContent;
    }

    closeMobileDropdown();
}

// Tab click handlers
document.querySelectorAll('.tab, .mobile-tab-option').forEach(tab => {
    tab.addEventListener('click', () => {
        if (!tab.classList.contains('tab-lang') && !tab.classList.contains('mobile-lang-option')) {
            const tabName = tab.getAttribute('data-tab');
            if (tabName) switchTab(tabName);
        }
    });
});

// ============================================
// MOBILE DROPDOWN COMPONENT
// ============================================

const mobileTabButton = document.getElementById('mobileTabButton');
const mobileTabDropdown = document.getElementById('mobileTabDropdown');

if (mobileTabButton) {
    mobileTabButton.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileTabDropdown.classList.toggle('show');
    });
}

function closeMobileDropdown() {
    if (mobileTabDropdown) {
        mobileTabDropdown.classList.remove('show');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-tab-selector')) {
        closeMobileDropdown();
    }
});

// ============================================
// SERVICE MODAL COMPONENT
// ============================================

function openServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
const serviceModal = document.getElementById('serviceModal');
if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
        if (e.target.id === 'serviceModal') {
            closeServiceModal();
        }
    });
}

// ============================================
// COMMAND PALETTE COMPONENT
// ============================================

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

// ============================================
// COMPONENT USAGE EXAMPLES
// ============================================

console.log(`
╔════════════════════════════════════════════════════════════╗
║         BUSINESS SPA - UI COMPONENT LIBRARY                ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  COMPONENTS INCLUDED:                                      ║
║  ✓ Central Modal (responsive, cross-platform)             ║
║  ✓ Tab Navigation (desktop + mobile dropdown)             ║
║  ✓ Status Bar (bottom fixed bar)                          ║
║  ✓ Service Cards (clickable with modals)                  ║
║  ✓ Portfolio Cards (project showcase)                     ║
║  ✓ Command Palette (Cmd/Ctrl + K)                         ║
║  ✓ Buttons (CTA, filters)                                 ║
║  ✓ Contact Methods                                        ║
║  ✓ Tech Stack Items                                       ║
║  ✓ Color System (CSS variables)                           ║
║  ✓ Typography System                                      ║
║                                                            ║
║  RESPONSIVE BREAKPOINTS:                                   ║
║  • Mobile: < 768px                                         ║
║  • Tablet: 768px - 1024px                                  ║
║  • Desktop: > 1024px                                       ║
║                                                            ║
║  THEME COLORS:                                             ║
║  • --bg-primary: #0a0e27                                   ║
║  • --bg-secondary: #151932                                 ║
║  • --bg-modal: #1a1f3a                                     ║
║  • --accent-teal: #64ffda                                  ║
║  • --text-primary: #e6f1ff                                 ║
║  • --text-secondary: #8892b0                               ║
║                                                            ║
║  USAGE:                                                    ║
║  1. Copy HTML structure from index.html                    ║
║  2. Include styles.css                                     ║
║  3. Include script.js for interactions                     ║
║  4. Customize colors via CSS variables                     ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
`);

