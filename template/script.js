// REPLACE: Portfolio Data - Add your projects here
const portfolioProjects = [
    {
        title: "Project 1",
        stars: "10",
        tech: "Technology",
        category: "web",
        description: "Project description",
        demo: "https://example.com",
        repo: "https://github.com/username/repo",
        image: "https://via.placeholder.com/600x400"
    }
];

// REPLACE: Command Palette Actions
const commands = [
    { title: "About", desc: "View about section", action: () => switchTab('about') },
    { title: "Services", desc: "View services", action: () => switchTab('services') },
    { title: "Portfolio", desc: "View portfolio", action: () => switchTab('portfolio') },
    { title: "Contact", desc: "Get in touch", action: () => switchTab('contact') },
    { title: "GitHub", desc: "Open GitHub profile", action: () => window.open('https://github.com/yourusername', '_blank') },
    { title: "Email", desc: "Send an email", action: () => window.location.href = 'mailto:your@email.com' }
];

// Tab Switching
function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');

    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.getElementById(tabName)?.classList.add('active');

    document.querySelectorAll('.mobile-tab-option').forEach(option => {
        option.classList.remove('active');
    });
    document.querySelector(`.mobile-tab-option[data-tab="${tabName}"]`)?.classList.add('active');

    const currentTabName = document.getElementById('currentTabName');
    if (currentTabName) {
        currentTabName.textContent = t(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
    }

    closeMobileDropdown();
}

document.querySelectorAll('.tab, .mobile-tab-option').forEach(tab => {
    tab.addEventListener('click', (e) => {
        if (!tab.classList.contains('tab-lang') && !tab.classList.contains('mobile-lang-option')) {
            const tabName = tab.getAttribute('data-tab');
            if (tabName) switchTab(tabName);
        }
    });
});

// Mobile Dropdown
const mobileTabButton = document.getElementById('mobileTabButton');
const mobileTabDropdown = document.getElementById('mobileTabDropdown');

mobileTabButton?.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileTabDropdown.classList.toggle('show');
});

function closeMobileDropdown() {
    mobileTabDropdown?.classList.remove('show');
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-tab-selector')) {
        closeMobileDropdown();
    }
});

// Portfolio Filtering
let currentFilter = 'all';

function renderPortfolio(filter = 'all') {
    currentFilter = filter;
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    const filtered = filter === 'all' 
        ? portfolioProjects 
        : portfolioProjects.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(project => `
        <div class="portfolio-card">
            <img src="${project.image}" alt="${project.title}" class="portfolio-image">
            <div class="portfolio-info">
                <div class="portfolio-header">
                    <h3 class="portfolio-title">${project.title}</h3>
                    <span class="portfolio-stars">⭐ ${project.stars}</span>
                </div>
                <p class="portfolio-tech">${project.tech}</p>
                <p class="portfolio-desc">${project.description}</p>
                <div class="portfolio-links">
                    ${project.demo ? `<a href="${project.demo}" target="_blank" class="portfolio-link">Demo</a>` : ''}
                    ${project.repo ? `<a href="${project.repo}" target="_blank" class="portfolio-link">Code</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPortfolio(btn.getAttribute('data-filter'));
    });
});

// Service Modal
// REPLACE: Service Details - Add your service information
const serviceDetailsEN = {
    SERVICE1: {
        title: 'Service Name',
        subtitle: 'Service subtitle',
        price: '€XX+',
        sections: [
            {
                heading: 'What You Get',
                items: [
                    'Feature 1',
                    'Feature 2',
                    'Feature 3'
                ]
            }
        ]
    }
};

const serviceDetailsGR = {
    SERVICE1: {
        title: 'Όνομα Υπηρεσίας',
        subtitle: 'Υπότιτλος υπηρεσίας',
        price: '€XX+',
        sections: [
            {
                heading: 'Τι Περιλαμβάνεται',
                items: [
                    'Χαρακτηριστικό 1',
                    'Χαρακτηριστικό 2',
                    'Χαρακτηριστικό 3'
                ]
            }
        ]
    }
};

function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('serviceModalBody');
    
    const serviceDetails = langState.current === 'gr' ? serviceDetailsGR : serviceDetailsEN;
    const service = serviceDetails[serviceId];

    if (!service) return;

    let html = `
        <div class="service-modal-header">
            <h2 class="service-modal-title">${service.title}</h2>
            ${service.price ? `<div class="service-modal-price">${service.price}</div>` : ''}
        </div>
        <p class="service-modal-subtitle">${service.subtitle}</p>
    `;

    service.sections.forEach(section => {
        html += `
            <div class="service-modal-section">
                <h3 class="service-modal-section-title">${section.heading}</h3>
                <ul class="service-modal-list">
                    ${section.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    modalBody.innerHTML = html;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.getElementById('serviceModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'serviceModal') {
        closeServiceModal();
    }
});

// Command Palette
const commandPalette = document.getElementById('commandPalette');
const commandInput = document.getElementById('commandInput');
const commandResults = document.getElementById('commandResults');

document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        commandPalette.style.display = 'flex';
        commandInput.focus();
    }
    if (e.key === 'Escape') {
        commandPalette.style.display = 'none';
        commandInput.value = '';
    }
});

commandPalette?.addEventListener('click', (e) => {
    if (e.target === commandPalette) {
        commandPalette.style.display = 'none';
        commandInput.value = '';
    }
});

commandInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = commands.filter(cmd => 
        cmd.title.toLowerCase().includes(query) || 
        cmd.desc.toLowerCase().includes(query)
    );

    commandResults.innerHTML = filtered.map(cmd => `
        <div class="command-item" onclick="executeCommand('${cmd.title}')">
            <div class="command-title">${cmd.title}</div>
            <div class="command-desc">${cmd.desc}</div>
        </div>
    `).join('');
});

function executeCommand(title) {
    const cmd = commands.find(c => c.title === title);
    if (cmd) {
        cmd.action();
        commandPalette.style.display = 'none';
        commandInput.value = '';
    }
}

// Language Management
function toggleLanguage() {
    const newLang = langState.current === 'en' ? 'gr' : 'en';
    setLanguage(newLang);
}

function setLanguage(lang) {
    setCurrentLang(lang);
    localStorage.setItem('preferredLanguage', lang);
    updatePageLanguage();
}

function updatePageLanguage() {
    const langText = langState.current === 'en' ? 'EN' : 'ΕΛ';
    const langToggle = document.getElementById('langText');
    const navLangToggle = document.getElementById('navLangText');
    const mobileLangToggle = document.getElementById('mobileLangText');
    if (langToggle) langToggle.textContent = langText;
    if (navLangToggle) navLangToggle.textContent = langText;
    if (mobileLangToggle) mobileLangToggle.textContent = `${langText === 'EN' ? 'ΕΛ' : 'EN'} / ${langText}`;

    document.getElementById('statusName').textContent = t('statusName');

    const tabs = document.querySelectorAll('.tab:not(.tab-lang)');
    const tabKeys = ['tabAbout', 'tabServices', 'tabPortfolio', 'tabContact'];
    tabs.forEach((tab, index) => {
        if (index < tabKeys.length) {
            tab.textContent = t(tabKeys[index]);
        }
    });

    const mobileOptions = document.querySelectorAll('.mobile-tab-option:not(.mobile-lang-option)');
    mobileOptions.forEach((option, index) => {
        if (index < tabKeys.length) {
            option.textContent = t(tabKeys[index]);
        }
    });

    const currentTabName = document.getElementById('currentTabName');
    const activeTab = document.querySelector('.tab.active:not(.tab-lang)');
    if (activeTab && currentTabName) {
        const activeIndex = Array.from(tabs).indexOf(activeTab);
        if (activeIndex >= 0 && activeIndex < tabKeys.length) {
            currentTabName.textContent = t(tabKeys[activeIndex]);
        }
    }

    // Update page content
    const nameEl = document.getElementById('homeName');
    const titleEl = document.getElementById('homeTitle');
    const ctaBtn = document.getElementById('homeCTA');
    if (nameEl) nameEl.textContent = t('name');
    if (titleEl) titleEl.textContent = t('title');
    if (ctaBtn) ctaBtn.textContent = t('ctaButton');

    renderPortfolio(currentFilter);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    const initialLang = savedLang || 'en';

    if (initialLang !== 'en') {
        setCurrentLang(initialLang);
    }

    renderPortfolio();
    updatePageLanguage();
});

