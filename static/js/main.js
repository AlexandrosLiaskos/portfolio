// Make sure navItems are set before Alpine loads
document.addEventListener('alpine:init', () => {
    console.log('Alpine initialized');
    if (!window.navItems) {
        console.error('navItems not set before Alpine init!');
    }
});

import { initializeSidebar } from './components/sidebar.js';
import { initializeNavigation } from './components/navigation.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    console.log('navItems available:', window.navItems);
    
    try {
        console.log('Initializing sidebar...');
        initializeSidebar();
        console.log('Sidebar initialized');
        
        console.log('Initializing navigation...');
        initializeNavigation();
        console.log('Navigation initialized');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});