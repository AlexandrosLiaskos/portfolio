// Language Translations
const translations = {
    en: {
        // Status Bar
        statusName: "Alexandros Liaskos",
        statusGitHub: "GitHub",
        
        // Tabs
        tabAbout: "About",
        tabServices: "Services",
        tabSpecial: "Special",
        tabPortfolio: "Portfolio",
        tabStack: "Stack",
        tabRequest: "Request",
        tabContact: "Contact",
        
        // Home/About
        name: "Alexandros Liaskos",
        title: "SOFTWARE ENGINEER",
        services: ["Websites", "Web Apps", "DevOps", "AI"],
        consulting: "Consulting",
        ctaButton: "REQUEST A SERVICE",
        
        // Services Tab
        servicesTitle: "Services",
        serviceWeb: {
            code: "WEB",
            name: "Websites",
            desc: "Professional websites that look great and load fast"
        },
        serviceFix: {
            code: "FIX",
            name: "Bug Fixes & Optimization",
            desc: "Fix and improve existing projects"
        },
        serviceQA: {
            code: "QA",
            name: "Code Review & QA",
            desc: "Expert assessment of quality and security"
        },
        serviceCons: {
            code: "CONS",
            name: "Consulting & Strategy",
            desc: "Turn your idea into an executable plan"
        },
        
        // Special Services
        specialTitle: "Special Services",
        serviceApp: {
            code: "APP",
            name: "Web Applications",
            desc: "Custom platforms built for your business needs"
        },
        serviceOps: {
            code: "OPS",
            name: "Cloud & DevOps",
            desc: "Automated deployments and infrastructure"
        },
        serviceAI: {
            code: "AI",
            name: "AI Automations",
            desc: "Intelligent automation solutions powered by AI"
        },
        serviceI2P: {
            code: "I2P",
            name: "Idea to Project",
            desc: "Transform your raw idea into a complete project"
        },
        
        // Portfolio
        portfolioTitle: "Portfolio",
        filterAll: "All Projects",
        filterWeb: "Web Apps",
        filterTools: "Tools",
        filterResearch: "Research",
        viewDemo: "View Demo",
        viewRepo: "View Repo",
        stars: "stars",
        
        // Stack
        stackTitle: "Tech Stack",
        stackFrontend: "Frontend",
        stackBackend: "Backend",
        stackDevOps: "DevOps & Cloud",
        stackTools: "Tools & Other",
        
        // Contact
        contactTitle: "Contact",
        contactEmail: "Email",
        contactSocial: "Social",
        
        // Request Workflow
        requestTitle: "How It Works",
        step1Title: "1. Tell Me What You Need",
        step1Desc: "Share your project idea or problem",
        step2Title: "2. I'll Review & Respond",
        step2Desc: "Get a detailed proposal within 24-48 hours",
        step3Title: "3. We Build Together",
        step3Desc: "Collaborative development with regular updates",
        startButton: "Start a Request",
        
        // Request Form
        formTitle: "Request a Service",
        formName: "Your Name",
        formEmail: "Your Email",
        formService: "Service Type",
        formServicePlaceholder: "Select a service",
        formDetails: "Project Details",
        formDetailsPlaceholder: "Tell me about your project...",
        formSubmit: "Send Request",
        formCancel: "Cancel",
        
        // Email Selector
        emailTitle: "Choose Email App",
        emailGmail: "Gmail",
        emailCopy: "Copy to Clipboard",
        emailCopied: "✓ Copied!",
        
        // Service Modal Details
        serviceDetails: {
            WEB: {
                title: "Professional Websites",
                features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Modern UI/UX"],
                description: "Beautiful, fast, and professional websites tailored to your needs."
            },
            FIX: {
                title: "Bug Fixes & Optimization",
                features: ["Debug Issues", "Performance Tuning", "Code Refactoring", "Security Patches"],
                description: "Fix bugs and optimize your existing codebase for better performance."
            },
            QA: {
                title: "Code Review & Quality Assurance",
                features: ["Code Analysis", "Security Audit", "Best Practices", "Documentation Review"],
                description: "Expert review of your code quality, security, and architecture."
            },
            PLAN: {
                title: "Consulting & Strategy",
                features: ["Technical Planning", "Architecture Design", "Technology Selection", "Roadmap Creation"],
                description: "Strategic guidance to turn your ideas into actionable development plans."
            },
            APP: {
                title: "Web Applications",
                features: ["Custom Development", "Database Design", "API Integration", "User Authentication"],
                description: "Full-featured web applications built with modern technologies."
            },
            OPS: {
                title: "Cloud & DevOps",
                features: ["CI/CD Pipelines", "Cloud Deployment", "Infrastructure as Code", "Monitoring"],
                description: "Automated deployment pipelines and cloud infrastructure management."
            },
            AI: {
                title: "AI Automations",
                features: ["AI Integration", "Workflow Automation", "Data Processing", "Smart Solutions"],
                description: "Leverage AI to automate tasks and enhance your applications."
            },
            I2P: {
                title: "Idea to Project",
                features: ["Full Development", "From Concept to Launch", "End-to-End Solution", "Ongoing Support"],
                description: "Complete project development from initial idea to production deployment."
            }
        }
    },
    gr: {
        // Status Bar
        statusName: "Αλέξανδρος Λιάσκος",
        statusGitHub: "GitHub",
        
        // Tabs
        tabAbout: "Σχετικά",
        tabServices: "Υπηρεσίες",
        tabSpecial: "Ειδικές",
        tabPortfolio: "Έργα",
        tabStack: "Τεχνολογίες",
        tabRequest: "Αίτημα",
        tabContact: "Επικοινωνία",
        
        // Home/About
        name: "Αλέξανδρος Λιάσκος",
        title: "ΜΗΧΑΝΙΚΟΣ ΛΟΓΙΣΜΙΚΟΥ",
        services: ["Ιστοσελίδες", "Εφαρμογές", "DevOps", "AI"],
        consulting: "Συμβουλευτική",
        ctaButton: "ΑΙΤΗΣΗ ΥΠΗΡΕΣΙΑΣ",
        
        // Services Tab
        servicesTitle: "Υπηρεσίες",
        serviceWeb: {
            code: "WEB",
            name: "Ιστοσελίδες",
            desc: "Επαγγελματικές ιστοσελίδες με εξαιρετική εμφάνιση και ταχύτητα"
        },
        serviceFix: {
            code: "FIX",
            name: "Διορθώσεις & Βελτιστοποίηση",
            desc: "Επιδιόρθωση και βελτίωση υπαρχόντων έργων"
        },
        serviceQA: {
            code: "QA",
            name: "Έλεγχος Κώδικα & Ποιότητα",
            desc: "Εξειδικευμένη αξιολόγηση ποιότητας και ασφάλειας"
        },
        serviceCons: {
            code: "CONS",
            name: "Συμβουλευτική & Στρατηγική",
            desc: "Μετατρέψτε την ιδέα σας σε εκτελέσιμο σχέδιο"
        },
        
        // Special Services
        specialTitle: "Ειδικές Υπηρεσίες",
        serviceApp: {
            code: "APP",
            name: "Διαδικτυακές Εφαρμογές",
            desc: "Προσαρμοσμένες πλατφόρμες για τις ανάγκες της επιχείρησής σας"
        },
        serviceOps: {
            code: "OPS",
            name: "Cloud & DevOps",
            desc: "Αυτοματοποιημένες αναπτύξεις και υποδομή"
        },
        serviceAI: {
            code: "AI",
            name: "Αυτοματισμοί AI",
            desc: "Έξυπνες λύσεις αυτοματισμού με τεχνητή νοημοσύνη"
        },
        serviceI2P: {
            code: "I2P",
            name: "Από Ιδέα σε Έργο",
            desc: "Μετατρέψτε την ιδέα σας σε ολοκληρωμένο έργο"
        },
        
        // Portfolio
        portfolioTitle: "Χαρτοφυλάκιο",
        filterAll: "Όλα τα Έργα",
        filterWeb: "Εφαρμογές",
        filterTools: "Εργαλεία",
        filterResearch: "Έρευνα",
        viewDemo: "Προβολή Demo",
        viewRepo: "Προβολή Κώδικα",
        stars: "αστέρια",
        
        // Stack
        stackTitle: "Τεχνολογίες",
        stackFrontend: "Frontend",
        stackBackend: "Backend",
        stackDevOps: "DevOps & Cloud",
        stackTools: "Εργαλεία & Άλλα",
        
        // Contact
        contactTitle: "Επικοινωνία",
        contactEmail: "Email",
        contactSocial: "Κοινωνικά Δίκτυα",
        
        // Request Workflow
        requestTitle: "Πώς Λειτουργεί",
        step1Title: "1. Πείτε μου τι Χρειάζεστε",
        step1Desc: "Μοιραστείτε την ιδέα ή το πρόβλημά σας",
        step2Title: "2. Θα Εξετάσω & Απαντήσω",
        step2Desc: "Λάβετε λεπτομερή πρόταση εντός 24-48 ωρών",
        step3Title: "3. Δημιουργούμε Μαζί",
        step3Desc: "Συνεργατική ανάπτυξη με τακτικές ενημερώσεις",
        startButton: "Ξεκινήστε Αίτημα",
        
        // Request Form
        formTitle: "Αίτηση Υπηρεσίας",
        formName: "Το Όνομά σας",
        formEmail: "Το Email σας",
        formService: "Τύπος Υπηρεσίας",
        formServicePlaceholder: "Επιλέξτε υπηρεσία",
        formDetails: "Λεπτομέρειες Έργου",
        formDetailsPlaceholder: "Πείτε μου για το έργο σας...",
        formSubmit: "Αποστολή Αιτήματος",
        formCancel: "Ακύρωση",
        
        // Email Selector
        emailTitle: "Επιλέξτε Εφαρμογή Email",
        emailGmail: "Gmail",
        emailCopy: "Αντιγραφή",
        emailCopied: "✓ Αντιγράφηκε!",
        
        // Service Modal Details
        serviceDetails: {
            WEB: {
                title: "Επαγγελματικές Ιστοσελίδες",
                features: ["Responsive Σχεδιασμός", "Γρήγορη Φόρτωση", "SEO Βελτιστοποίηση", "Σύγχρονο UI/UX"],
                description: "Όμορφες, γρήγορες και επαγγελματικές ιστοσελίδες προσαρμοσμένες στις ανάγκες σας."
            },
            FIX: {
                title: "Διορθώσεις & Βελτιστοποίηση",
                features: ["Εντοπισμός Σφαλμάτων", "Βελτίωση Απόδοσης", "Αναδιοργάνωση Κώδικα", "Ενημερώσεις Ασφαλείας"],
                description: "Διορθώστε σφάλματα και βελτιστοποιήστε τον υπάρχοντα κώδικά σας για καλύτερη απόδοση."
            },
            QA: {
                title: "Έλεγχος Κώδικα & Διασφάλιση Ποιότητας",
                features: ["Ανάλυση Κώδικα", "Έλεγχος Ασφαλείας", "Βέλτιστες Πρακτικές", "Έλεγχος Τεκμηρίωσης"],
                description: "Εξειδικευμένος έλεγχος της ποιότητας, ασφάλειας και αρχιτεκτονικής του κώδικά σας."
            },
            PLAN: {
                title: "Συμβουλευτική & Στρατηγική",
                features: ["Τεχνικός Σχεδιασμός", "Σχεδιασμός Αρχιτεκτονικής", "Επιλογή Τεχνολογιών", "Δημιουργία Χάρτη Πορείας"],
                description: "Στρατηγική καθοδήγηση για να μετατρέψετε τις ιδέες σας σε εκτελέσιμα σχέδια ανάπτυξης."
            },
            APP: {
                title: "Διαδικτυακές Εφαρμογές",
                features: ["Προσαρμοσμένη Ανάπτυξη", "Σχεδιασμός Βάσης Δεδομένων", "Ενσωμάτωση API", "Πιστοποίηση Χρηστών"],
                description: "Πλήρεις διαδικτυακές εφαρμογές με σύγχρονες τεχνολογίες."
            },
            OPS: {
                title: "Cloud & DevOps",
                features: ["CI/CD Pipelines", "Ανάπτυξη στο Cloud", "Infrastructure as Code", "Παρακολούθηση"],
                description: "Αυτοματοποιημένα pipelines ανάπτυξης και διαχείριση υποδομής cloud."
            },
            AI: {
                title: "Αυτοματισμοί AI",
                features: ["Ενσωμάτωση AI", "Αυτοματισμός Ροών Εργασίας", "Επεξεργασία Δεδομένων", "Έξυπνες Λύσεις"],
                description: "Αξιοποιήστε την τεχνητή νοημοσύνη για αυτοματισμό εργασιών και βελτίωση των εφαρμογών σας."
            },
            I2P: {
                title: "Από Ιδέα σε Έργο",
                features: ["Πλήρης Ανάπτυξη", "Από την Ιδέα στην Κυκλοφορία", "Ολοκληρωμένη Λύση", "Συνεχής Υποστήριξη"],
                description: "Πλήρης ανάπτυξη έργου από την αρχική ιδέα έως την παραγωγική ανάπτυξη."
            }
        }
    }
};

// Current language (default: English)
let currentLang = 'en';

// Get translation
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
        value = value?.[k];
    }
    
    return value || key;
}

