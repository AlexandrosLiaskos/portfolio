// Portfolio Data
const portfolioProjects = [
    {
        title: "Chilling Vibes",
        stars: "35",
        tech: "Python",
        category: "tools",
        description: "Automation tool bridging RooCode with Google AI Studio using PyAutoGUI.",
        repo: "https://github.com/AlexandrosLiaskos/Chilling-Vibes",
        image: "https://opengraph.githubassets.com/1/AlexandrosLiaskos/Chilling-Vibes"
    },
    {
        title: "Awesome Wallpapers",
        stars: "4",
        tech: "Vue.js",
        category: "web",
        description: "Vue/TailwindCSS web app for browsing and downloading wallpapers.",
        demo: "https://alexandrosliaskos.github.io/Awesome_Wallpapers/",
        repo: "https://github.com/AlexandrosLiaskos/Awesome_Wallpapers",
        image: "https://opengraph.githubassets.com/1/AlexandrosLiaskos/Awesome_Wallpapers"
    },
    {
        title: "CVIc Web Platform",
        stars: "Research",
        tech: "React/TypeScript",
        category: "research",
        description: "Web platform automating Coastal Vulnerability Index calculations.",
        demo: "https://alexandrosliaskos.github.io/CVIc/",
        repo: "https://github.com/AlexandrosLiaskos/CVIc",
        image: "https://opengraph.githubassets.com/1/AlexandrosLiaskos/CVIc"
    },
    {
        title: "LazyLS",
        stars: "3",
        tech: "Go",
        category: "tools",
        description: "Lazy-loaded terminal file browser built with Go and Gocui.",
        repo: "https://github.com/AlexandrosLiaskos/lazyls",
        image: "https://opengraph.githubassets.com/1/AlexandrosLiaskos/lazyls"
    },
    {
        title: "Obsidian Web Scraper",
        stars: "5",
        tech: "JavaScript",
        category: "tools",
        description: "NPM/MCP tools for web content scraping via Readability & Turndown.",
        repo: "https://github.com/AlexandrosLiaskos/obsidian-scraper",
        image: "https://opengraph.githubassets.com/1/AlexandrosLiaskos/obsidian-scraper"
    },
    {
        title: "PyBoost",
        stars: "3",
        tech: "Python",
        category: "tools",
        description: "Comprehensive toolkit for cleaning and optimizing Python code.",
        repo: "https://github.com/AlexandrosLiaskos/pyboost",
        image: "https://opengraph.githubassets.com/1/AlexandrosLiaskos/pyboost"
    },
    {
        title: "PyTutor",
        stars: "1",
        tech: "Python",
        category: "tools",
        description: "Interactive TUI application for teaching Python fundamentals.",
        repo: "https://github.com/AlexandrosLiaskos/PyTutor",
        image: "https://opengraph.githubassets.com/1/AlexandrosLiaskos/PyTutor"
    },
    {
        title: "SatShor",
        stars: "Research",
        tech: "Python",
        category: "research",
        description: "Satellite-derived shoreline extraction from S2L2AB08 imagery.",
        repo: "https://github.com/AlexandrosLiaskos/SatShor",
        image: "https://opengraph.githubassets.com/1/AlexandrosLiaskos/SatShor"
    }
];

// Command Palette Commands
const commands = [
    { title: "About", desc: "View about section", action: () => switchTab('about') },
    { title: "Services", desc: "View services offered", action: () => switchTab('services') },
    { title: "Portfolio", desc: "View portfolio projects", action: () => switchTab('portfolio') },
    { title: "Stack", desc: "View technical stack", action: () => switchTab('stack') },
    { title: "Contact", desc: "Get in touch", action: () => switchTab('contact') },
    { title: "GitHub", desc: "Open GitHub profile", action: () => window.open('https://github.com/AlexandrosLiaskos', '_blank') },
    { title: "LinkedIn", desc: "Open LinkedIn profile", action: () => window.open('https://www.linkedin.com/in/alexandros-liaskos-a92a46254/', '_blank') },
    { title: "Email", desc: "Send an email", action: () => window.location.href = 'mailto:alexliaskos@geol.uoa.gr' }
];

// Tab Switching
function switchTab(tabName) {
    // Update tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Update content
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

// Tab Click Handlers
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        switchTab(tabName);

        // Update mobile dropdown if it exists
        const currentTabName = document.getElementById('currentTabName');
        const mobileOptions = document.querySelectorAll('.mobile-tab-option');
        if (currentTabName) {
            currentTabName.textContent = tab.textContent;
        }
        if (mobileOptions.length > 0) {
            mobileOptions.forEach(opt => {
                opt.classList.toggle('active', opt.dataset.tab === tabName);
            });
        }
    });
});

// Render Portfolio
let currentFilter = 'all';

function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolioGrid');
    const filtered = filter === 'all'
        ? portfolioProjects
        : portfolioProjects.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(project => `
        <div class="portfolio-card" data-category="${project.category}">
            <div class="portfolio-content">
                <div class="portfolio-header">
                    <div>
                        <h3>${project.title}</h3>
                        <div class="portfolio-meta">${project.stars} ${project.stars === 'Research' ? '' : '⭐'} | ${project.tech}</div>
                    </div>
                </div>
                <p>${project.description}</p>
                <div class="portfolio-links">
                    ${project.demo ? `<a href="${project.demo}" target="_blank" class="portfolio-link">${t('viewDemo')} →</a>` : ''}
                    ${project.repo ? `<a href="${project.repo}" target="_blank" class="portfolio-link">${t('viewRepo')} →</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Portfolio Filter
function setupPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            currentFilter = filter;
            renderPortfolio(filter);
        });
    });
}

// Command Palette
const commandPalette = document.getElementById('commandPalette');
const commandInput = document.getElementById('commandInput');
const commandResults = document.getElementById('commandResults');
let selectedCommandIndex = 0;
let filteredCommands = [];

function openCommandPalette() {
    commandPalette.classList.remove('hidden');
    commandInput.value = '';
    commandInput.focus();
    renderCommands(commands);
}

function closeCommandPalette() {
    commandPalette.classList.add('hidden');
    selectedCommandIndex = 0;
}

function renderCommands(cmds) {
    filteredCommands = cmds;
    commandResults.innerHTML = cmds.map((cmd, index) => `
        <div class="command-item ${index === selectedCommandIndex ? 'selected' : ''}" data-index="${index}">
            <div class="command-title">${cmd.title}</div>
            <div class="command-desc">${cmd.desc}</div>
        </div>
    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.command-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.getAttribute('data-index'));
            executeCommand(index);
        });
    });
}

function executeCommand(index) {
    if (filteredCommands[index]) {
        filteredCommands[index].action();
        closeCommandPalette();
    }
}

function filterCommands(query) {
    const filtered = commands.filter(cmd => 
        cmd.title.toLowerCase().includes(query.toLowerCase()) ||
        cmd.desc.toLowerCase().includes(query.toLowerCase())
    );
    selectedCommandIndex = 0;
    renderCommands(filtered);
}

// Command Palette Input Handler
commandInput.addEventListener('input', (e) => {
    filterCommands(e.target.value);
});

// Command Palette Keyboard Navigation
commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedCommandIndex = Math.min(selectedCommandIndex + 1, filteredCommands.length - 1);
        renderCommands(filteredCommands);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedCommandIndex = Math.max(selectedCommandIndex - 1, 0);
        renderCommands(filteredCommands);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        executeCommand(selectedCommandIndex);
    } else if (e.key === 'Escape') {
        closeCommandPalette();
    }
});

// Global Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K for command palette
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (commandPalette.classList.contains('hidden')) {
            openCommandPalette();
        } else {
            closeCommandPalette();
        }
    }
    
    // Escape to close command palette
    if (e.key === 'Escape' && !commandPalette.classList.contains('hidden')) {
        closeCommandPalette();
    }
});

// Click outside to close command palette
commandPalette.addEventListener('click', (e) => {
    if (e.target === commandPalette) {
        closeCommandPalette();
    }
});

// Update Local Time in Status Bar
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
    });
    document.getElementById('localTime').textContent = timeString;
}

// Mobile Tab Dropdown
function setupMobileTabDropdown() {
    const mobileButton = document.getElementById('mobileTabButton');
    const mobileDropdown = document.getElementById('mobileTabDropdown');
    const currentTabName = document.getElementById('currentTabName');
    const mobileOptions = document.querySelectorAll('.mobile-tab-option');

    if (!mobileButton || !mobileDropdown) return;

    // Toggle dropdown
    mobileButton.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileButton.classList.toggle('active');
        mobileDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileButton.contains(e.target) && !mobileDropdown.contains(e.target)) {
            mobileButton.classList.remove('active');
            mobileDropdown.classList.remove('active');
        }
    });

    // Handle mobile tab selection
    mobileOptions.forEach(option => {
        option.addEventListener('click', () => {
            const tabName = option.dataset.tab;

            // Update active states
            mobileOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            // Update button text
            currentTabName.textContent = option.textContent;

            // Switch tab
            switchTab(tabName);

            // Close dropdown
            mobileButton.classList.remove('active');
            mobileDropdown.classList.remove('active');
        });
    });
}

// Language Management
function detectLanguageFromURL() {
    const path = window.location.pathname;
    if (path.includes('/gr') || path.endsWith('/gr.html')) {
        return 'gr';
    }
    return 'en';
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'gr' : 'en';
    setLanguage(newLang);

    // Update URL
    if (newLang === 'gr') {
        window.history.pushState({}, '', '/gr');
    } else {
        window.history.pushState({}, '', '/');
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    updatePageLanguage();
}

function updatePageLanguage() {
    // Update language toggle buttons
    const langText = currentLang === 'en' ? 'EN' : 'ΕΛ';
    const langToggle = document.getElementById('langText');
    const navLangToggle = document.getElementById('navLangText');
    if (langToggle) langToggle.textContent = langText;
    if (navLangToggle) navLangToggle.textContent = langText;

    // Update status bar
    document.getElementById('statusName').textContent = t('statusName');

    // Update tabs
    const tabs = document.querySelectorAll('.tab');
    const tabKeys = ['tabAbout', 'tabServices', 'tabSpecial', 'tabPortfolio', 'tabStack', 'tabRequest', 'tabContact'];
    tabs.forEach((tab, index) => {
        tab.textContent = t(tabKeys[index]);
    });

    // Update mobile dropdown
    const mobileOptions = document.querySelectorAll('.mobile-tab-option');
    mobileOptions.forEach((option, index) => {
        option.textContent = t(tabKeys[index]);
    });

    // Update current tab name in mobile dropdown button
    const currentTabName = document.getElementById('currentTabName');
    const activeTab = document.querySelector('.tab.active');
    if (activeTab && currentTabName) {
        const activeIndex = Array.from(tabs).indexOf(activeTab);
        currentTabName.textContent = t(tabKeys[activeIndex]);
    }

    // Update home page
    updateHomePage();

    // Update services
    updateServicesPage();

    // Update special services
    updateSpecialServicesPage();

    // Update portfolio
    updatePortfolioPage();

    // Update stack
    updateStackPage();

    // Update contact
    updateContactPage();

    // Update request workflow
    updateRequestPage();
}

function updateHomePage() {
    const nameEl = document.getElementById('homeName');
    const titleEl = document.getElementById('homeTitle');
    const ctaBtn = document.getElementById('homeCTA');

    if (nameEl) nameEl.textContent = t('name');
    if (titleEl) titleEl.textContent = t('title');
    if (ctaBtn) ctaBtn.textContent = t('ctaButton');

    // Update service labels
    const services = t('services');
    for (let i = 1; i <= 5; i++) {
        const serviceEl = document.getElementById(`homeService${i}`);
        if (serviceEl && services[i-1]) {
            serviceEl.textContent = services[i-1];
        }
    }

    // Update consulting separately
    const consultingEl = document.getElementById('homeService5');
    if (consultingEl) consultingEl.textContent = t('consulting');
}

function updateServicesPage() {
    const serviceItems = document.querySelectorAll('#services .service-item');
    const serviceKeys = ['serviceWeb', 'serviceFix', 'serviceQA', 'serviceCons'];

    serviceItems.forEach((item, index) => {
        const codeEl = item.querySelector('.service-code');
        const nameEl = item.querySelector('.service-name');
        const descEl = item.querySelector('.service-desc');
        const service = t(serviceKeys[index]);

        if (codeEl) codeEl.textContent = service.code;
        if (nameEl) nameEl.textContent = service.name;
        if (descEl) descEl.textContent = service.desc;
    });
}

function updateSpecialServicesPage() {
    const serviceItems = document.querySelectorAll('#special .service-item');
    const serviceKeys = ['serviceApp', 'serviceOps', 'serviceAI', 'serviceI2P'];

    serviceItems.forEach((item, index) => {
        const codeEl = item.querySelector('.service-code');
        const nameEl = item.querySelector('.service-name');
        const descEl = item.querySelector('.service-desc');
        const service = t(serviceKeys[index]);

        if (codeEl) codeEl.textContent = service.code;
        if (nameEl) nameEl.textContent = service.name;
        if (descEl) descEl.textContent = service.desc;
    });
}

function updatePortfolioPage() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterKeys = ['filterAll', 'filterWeb', 'filterTools', 'filterResearch'];

    filterBtns.forEach((btn, index) => {
        btn.textContent = t(filterKeys[index]);
    });

    // Re-render portfolio with translations
    renderPortfolio(currentFilter);
}

function updateStackPage() {
    const stackGroups = document.querySelectorAll('.stack-group h3');
    const stackKeys = ['stackFrontend', 'stackBackend', 'stackDevOps', 'stackTools'];

    stackGroups.forEach((h3, index) => {
        h3.textContent = t(stackKeys[index]);
    });
}

function updateContactPage() {
    const sections = document.querySelectorAll('.contact-section-title');
    if (sections[0]) sections[0].textContent = t('contactEmail');
    if (sections[1]) sections[1].textContent = t('contactSocial');
}

function updateRequestPage() {
    // Update workflow steps
    for (let i = 1; i <= 6; i++) {
        const stepEl = document.getElementById(`workflowStep${i}`);
        if (stepEl) stepEl.textContent = t(`workflowStep${i}`);
    }

    // Update start button
    const startBtn = document.getElementById('requestStartBtn');
    if (startBtn) startBtn.textContent = t('startButton');

    // Update form elements
    updateFormTranslations();
}

function updateFormTranslations() {
    // Form title and subtitle
    const formTitle = document.getElementById('formTitle');
    const formSubtitle = document.getElementById('formSubtitle');
    if (formTitle) formTitle.textContent = t('formTitle');
    if (formSubtitle) formSubtitle.textContent = t('formSubtitle');

    // Form labels
    const labelName = document.getElementById('formLabelName');
    const labelOrg = document.getElementById('formLabelOrg');
    const labelEmail = document.getElementById('formLabelEmail');
    const labelService = document.getElementById('formLabelService');
    const labelDesc = document.getElementById('formLabelDesc');
    const optionalText = document.getElementById('formOptionalText');

    if (labelName) labelName.textContent = t('formName');
    if (labelOrg) labelOrg.textContent = t('formOrg');
    if (labelEmail) labelEmail.textContent = t('formEmail');
    if (labelService) labelService.textContent = t('formService');
    if (labelDesc) labelDesc.textContent = t('formDescription');
    if (optionalText) optionalText.textContent = t('formOptional');

    // Service select options
    const servicePlaceholder = document.getElementById('formServicePlaceholder');
    if (servicePlaceholder) servicePlaceholder.textContent = t('formServicePlaceholder');

    const serviceOptions = [
        'serviceOptWeb', 'serviceOptFix', 'serviceOptQA', 'serviceOptCons',
        'serviceOptApp', 'serviceOptOps', 'serviceOptAI', 'serviceOptI2P'
    ];
    const serviceKeys = [
        'serviceOptionWeb', 'serviceOptionFix', 'serviceOptionQA', 'serviceOptionCons',
        'serviceOptionApp', 'serviceOptionOps', 'serviceOptionAI', 'serviceOptionI2P'
    ];

    serviceOptions.forEach((optId, index) => {
        const optEl = document.getElementById(optId);
        if (optEl) optEl.textContent = t(serviceKeys[index]);
    });

    // Form buttons
    const copyBtn = document.getElementById('formCopyBtn');
    const sendBtn = document.getElementById('formSendBtn');
    if (copyBtn) copyBtn.textContent = t('formCopy');
    if (sendBtn) sendBtn.textContent = t('formSend');

    // Email selector
    const emailTitle = document.getElementById('emailSelectorTitle');
    const emailDefault = document.getElementById('emailDefaultText');
    const emailGmail = document.getElementById('emailGmailText');
    const emailCopy = document.getElementById('copyEmailText');

    if (emailTitle) emailTitle.textContent = t('emailTitle');
    if (emailDefault) emailDefault.textContent = t('emailDefault');
    if (emailGmail) emailGmail.textContent = t('emailGmail');
    if (emailCopy) emailCopy.textContent = t('emailCopy');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Detect language from URL or localStorage
    const urlLang = detectLanguageFromURL();
    const savedLang = localStorage.getItem('preferredLanguage');
    const initialLang = urlLang !== 'en' ? urlLang : (savedLang || 'en');

    if (initialLang !== 'en') {
        currentLang = initialLang;
    }

    renderPortfolio();
    setupPortfolioFilter();
    updateTime();
    setInterval(updateTime, 1000);
    setupMobileTabDropdown();

    // Apply language after DOM is ready
    updatePageLanguage();
});

// Smooth scroll for tab content
document.querySelectorAll('.tab-content').forEach(content => {
    content.style.scrollBehavior = 'smooth';
});

// Add subtle parallax effect to background
let ticking = false;
document.addEventListener('mousemove', (e) => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            document.body.style.backgroundPosition = `${50 + x * 5}% ${50 + y * 5}%`;
            ticking = false;
        });
        ticking = true;
    }
});

// Add keyboard shortcuts info to status bar on hover
const statusLeft = document.querySelector('.status-left');
statusLeft.addEventListener('mouseenter', () => {
    statusLeft.title = 'Press Cmd/Ctrl+K to open command palette';
});

// Service Modal Data
const serviceDetails = {
    WEB: {
        title: 'Websites',
        subtitle: 'Fast, scalable, low-cost websites on modern infrastructure',
        price: '€20+',
        sections: [
            {
                heading: 'Examples',
                items: [
                    'Marketing & Brochure Sites',
                    'Portfolios',
                    'Blogs',
                    'Documentation Sites'
                ]
            }
        ]
    },
    APP: {
        title: 'Web Applications',
        subtitle: 'Interactive platforms with custom functionality',
        price: '€100+',
        sections: [
            {
                heading: 'Examples',
                items: [
                    'E-commerce & Online Stores',
                    'Customer Portals & Membership Sites',
                    'Booking & Reservation Systems',
                    'SaaS Prototypes (MVPs)'
                ]
            }
        ]
    },
    FIX: {
        title: 'Bug Fixes & Optimization',
        subtitle: 'Fix and improve existing projects',
        price: '€15+',
        sections: [
            {
                heading: 'Examples',
                items: [
                    'Bug Fixing & Troubleshooting',
                    'Performance Optimization'
                ]
            }
        ]
    },
    CONS: {
        title: 'Consulting & Strategy',
        subtitle: 'Transform ideas into executable roadmaps',
        price: '€10+',
        sections: [
            {
                heading: 'Examples',
                items: [
                    'Idea-to-Plan Sessions',
                    'Technology Stack Recommendations'
                ]
            }
        ]
    },
    QA: {
        title: 'Code Review & Quality Assurance',
        subtitle: 'Benchmark code quality and security',
        price: '€15+',
        sections: [
            {
                heading: 'Examples',
                items: [
                    'Pre-launch Assessment',
                    'Scalability & Future-Proofing Analysis',
                    'Independent Code Audit',
                    'AI-generated Content Detection'
                ]
            }
        ]
    },
    OPS: {
        title: 'Cloud & DevOps',
        subtitle: 'Automate deployments and manage infrastructure',
        price: '€60+',
        sections: [
            {
                heading: 'Examples',
                items: [
                    'CI/CD Pipeline Setup',
                    'Infrastructure as Code (IaC)',
                    'Deployment',
                    'Database Management',
                    'API Development'
                ]
            }
        ]
    },
    AI: {
        title: 'AI Automations',
        subtitle: 'Intelligent automation solutions powered by artificial intelligence',
        price: '€50+',
        sections: [
            {
                heading: 'Examples',
                items: [
                    'Custom AI Workflows & Integrations',
                    'Chatbots & Virtual Assistants',
                    'Content Generation & Processing',
                    'Data Analysis & Insights',
                    'Process Automation with AI'
                ]
            }
        ]
    },
    I2P: {
        title: 'Idea to Project',
        subtitle: 'Full-service transformation from concept to reality',
        price: '€50+',
        sections: [
            {
                heading: 'What This Includes',
                items: [
                    'Deep discovery sessions to understand your vision',
                    'Market research and feasibility analysis',
                    'Complete technical planning and architecture',
                    'Design, development, and deployment',
                    'End-to-end project management',
                    'Launch support and handover'
                ]
            }
        ]
    }
};

// Open Service Modal
function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('serviceModalBody');
    const service = serviceDetails[serviceId];

    if (!service) return;

    let html = `
        <div class="service-modal-header">
            <h2 class="service-modal-title">${service.title}</h2>
            <div class="service-modal-price">${service.price}</div>
        </div>
        <p class="service-modal-subtitle">${service.subtitle}</p>
    `;

    service.sections.forEach(section => {
        html += `
            <div class="service-modal-section">
                <h4>${section.heading}</h4>
                <ul class="service-modal-list">
                    ${section.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Service Modal
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeServiceModal();
        closeRequestForm();
        closeEmailSelector();
    }
});

// Request Form Functions
function openRequestForm() {
    const modal = document.getElementById('requestFormModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeRequestForm() {
    const modal = document.getElementById('requestFormModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function getRequestData() {
    const name = document.getElementById('requestName').value;
    const org = document.getElementById('requestOrg').value;
    const email = document.getElementById('requestEmail').value;
    const service = document.getElementById('requestService').value;
    const desc = document.getElementById('requestDesc').value;

    return { name, org, email, service, desc };
}

function formatRequestText() {
    const data = getRequestData();

    let text = `Name: ${data.name}\n`;
    if (data.org) {
        text += `Organization: ${data.org}\n`;
    }
    text += `Email: ${data.email}\n`;
    text += `Service: ${data.service}\n\n`;
    text += `Description:\n${data.desc}`;

    return text;
}

function copyRequest() {
    const form = document.getElementById('requestForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const text = formatRequestText();
    navigator.clipboard.writeText(text).then(() => {
        alert('Request copied to clipboard!');
    });
}

function openEmailSelector() {
    const form = document.getElementById('requestForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const modal = document.getElementById('emailSelectorModal');
    modal.classList.add('active');
}

function closeEmailSelector() {
    const modal = document.getElementById('emailSelectorModal');
    modal.classList.remove('active');
}

function sendViaEmail(type) {
    const data = getRequestData();
    const subject = encodeURIComponent(`${data.service} - ${data.name}`);
    const body = encodeURIComponent(formatRequestText());
    const recipient = 'alexliaskos@geol.uoa.gr';

    let url;
    if (type === 'gmail') {
        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    } else {
        url = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }

    window.open(url, '_blank');
    closeEmailSelector();
    closeRequestForm();
}

function copyEmailContent() {
    const text = formatRequestText();
    navigator.clipboard.writeText(text).then(() => {
        alert('Email content copied to clipboard!');
        closeEmailSelector();
    });
}
