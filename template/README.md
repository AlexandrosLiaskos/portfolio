# Business SPA Template

A modern, professional single-page application template with dark theme, responsive design, and bilingual support.

## ✨ Features

- 🎨 **Dark Theme** - Professional dark color scheme with teal accents
- 📱 **Fully Responsive** - Mobile-first design with tablet and desktop breakpoints
- 🌍 **Bilingual Support** - Built-in English/Greek translation system (easily adaptable)
- ⚡ **Fast & Lightweight** - Pure vanilla JavaScript, no frameworks required
- 🎯 **Tab Navigation** - Desktop horizontal tabs + mobile dropdown menu
- 🔍 **Command Palette** - Quick navigation with Cmd+K (Mac) or Ctrl+K (Windows)
- 📊 **Portfolio Grid** - Filterable project showcase
- 💼 **Service Cards** - Clean service presentation with modal details
- 📧 **Contact Integration** - Email form with multiple email client support
- 🎭 **Modal System** - Smooth animations and transitions

## 🚀 Quick Start

1. **Clone or download** this template folder
2. **Customize content** (see below)
3. **Test locally** - Open `index.html` in your browser
4. **Deploy** - Upload to GitHub Pages, Netlify, Vercel, or any static host

## 📝 Customization Guide

### 1. Personal Information

**Search and replace** these placeholders:

| Placeholder | Replace With |
|------------|--------------|
| `Your Name` | Your actual name |
| `Your Business Name` | Your business/brand name |
| `Professional Services` | Your title/tagline |
| `hello@yourbusiness.com` | Your email address |
| `https://github.com/yourusername` | Your GitHub URL |
| `https://linkedin.com/in/yourprofile` | Your LinkedIn URL |
| `https://instagram.com/yourprofile` | Your Instagram URL |

### 2. Services

Edit services in `index.html`:
- **Services tab** (`#services`) - Regular services
- **Special tab** (`#special`) - Premium/special services

Edit service modal content in `script.js`:
- `serviceDetailsEN` - English service descriptions
- `serviceDetailsGR` - Greek service descriptions

### 3. Portfolio Projects

Edit the `portfolioProjects` array in `script.js`:

```javascript
const portfolioProjects = [
    {
        title: "Your Project",
        stars: "42",
        tech: "Technology Stack",
        category: "web", // or "tools", "research"
        description: "Project description",
        demo: "https://demo-url.com", // optional
        repo: "https://github.com/you/repo",
        image: "https://your-image-url.com/image.png"
    }
];
```

### 4. Tech Stack

Edit the stack section in `index.html` (around line 280):

```html
<div class="stack-group">
    <h3>Frontend</h3>
    <div class="stack-items">
        <span class="stack-item">Your Tech</span>
    </div>
</div>
```

### 5. Translations

Edit `translations.js` to update all text in both languages:

```javascript
const translations = {
    en: {
        name: "Your Name",
        title: "Your Title",
        // ... add your translations
    },
    gr: {
        name: "Το Όνομά Σας",
        title: "Ο Τίτλος Σας",
        // ... add your translations
    }
};
```

### 6. Theme Colors (Optional)

Customize colors in `styles.css`:

```css
:root {
    --bg-primary: #0a0e27;      /* Main background */
    --bg-secondary: #151932;    /* Secondary background */
    --bg-modal: #1a1f3a;        /* Modal background */
    --accent-teal: #64ffda;     /* Accent color */
    --text-primary: #e6f1ff;    /* Primary text */
    --text-secondary: #8892b0;  /* Secondary text */
}
```

## 📁 File Structure

```
template/
├── index.html          # Main HTML structure
├── styles.css          # All styling (no changes needed)
├── script.js           # Core functionality
├── translations.js     # Bilingual content
└── README.md          # This file
```

## 🎨 Design System

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Typography
- **Headings**: Space Grotesk
- **Signature/Name**: Dancing Script
- **Body**: System fonts

### Components
- Tab navigation (desktop + mobile)
- Service cards with modals
- Portfolio grid with filters
- Contact form
- Status bar
- Command palette

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder
4. Your site will be live at `https://username.github.io/repo`

### Netlify
1. Drag and drop the template folder
2. Site is live instantly

### Vercel
1. Import from GitHub
2. Deploy with one click

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Advanced Customization

### Adding New Tabs
1. Add tab button in `index.html` (desktop + mobile)
2. Add tab pane with content
3. Add translation keys in `translations.js`
4. Update `updatePageLanguage()` in `script.js`

### Removing Bilingual Support
1. Remove language toggle buttons
2. Remove `translations.js` script tag
3. Replace all `t('key')` calls with hardcoded text
4. Remove language-related functions from `script.js`

### Adding More Languages
1. Add new language object in `translations.js`
2. Update language toggle to cycle through languages
3. Add language codes to `setCurrentLang()` function

## 📄 License

This template is free to use for personal and commercial projects.

## 🤝 Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ using vanilla JavaScript**

