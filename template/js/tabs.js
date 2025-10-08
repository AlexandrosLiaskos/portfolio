/**
 * TAB NAVIGATION COMPONENT
 * 
 * Handles switching between tabs on desktop and mobile.
 * 
 * Usage:
 *   switchTab('tabname') - Switch to a specific tab
 *   closeMobileDropdown() - Close the mobile dropdown
 */

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

function closeMobileDropdown() {
    const dropdown = document.getElementById('mobileTabDropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

// Initialize tab click handlers
document.addEventListener('DOMContentLoaded', () => {
    // Desktop and mobile tab clicks
    document.querySelectorAll('.tab, .mobile-tab-option').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            if (tabName) switchTab(tabName);
        });
    });

    // Mobile dropdown toggle
    const mobileTabButton = document.getElementById('mobileTabButton');
    const mobileTabDropdown = document.getElementById('mobileTabDropdown');
    
    if (mobileTabButton) {
        mobileTabButton.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileTabDropdown.classList.toggle('show');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-tab-selector')) {
            closeMobileDropdown();
        }
    });
});

