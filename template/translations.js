// REPLACE: Add your translations here
const translations = {
    en: {
        // Navigation
        tabAbout: "About",
        tabServices: "Services",
        tabPortfolio: "Portfolio",
        tabContact: "Contact",
        
        // Home/About
        name: "Your Name",
        title: "Your Title / Tagline",
        ctaButton: "Get Started",
        
        // Status Bar
        statusName: "Your Name",
        
        // Services
        // Add your service translations here
        
        // Portfolio
        filterAll: "All",
        
        // Contact
        // Add your contact translations here
    },
    
    gr: {
        // Navigation
        tabAbout: "Σχετικά",
        tabServices: "Υπηρεσίες",
        tabPortfolio: "Portfolio",
        tabContact: "Επικοινωνία",
        
        // Home/About
        name: "Το Όνομά Σας",
        title: "Ο Τίτλος Σας",
        ctaButton: "Ξεκινήστε",
        
        // Status Bar
        statusName: "Το Όνομά Σας",
        
        // Services
        // Add your service translations here
        
        // Portfolio
        filterAll: "Όλα",
        
        // Contact
        // Add your contact translations here
    }
};

// Language state object (using object so it's shared by reference)
const langState = {
    current: 'en'
};

// Backward compatibility
let currentLang = 'en';

// Get translation
function t(key) {
    const keys = key.split('.');
    let value = translations[langState.current];
    
    for (const k of keys) {
        value = value?.[k];
    }
    
    return value || key;
}

// Set language (updates both langState and currentLang for compatibility)
function setCurrentLang(lang) {
    langState.current = lang;
    currentLang = lang;
}

