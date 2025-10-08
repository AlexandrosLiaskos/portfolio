# Business SPA Template

This is a complete copy of the business-spa with all the layout, theme, and styling intact.

## What to Replace

### 1. **Personal Information** (Search & Replace)
- `Alexandros Liaskos` → Your name
- `alexliaskos@geol.uoa.gr` → Your email
- `https://github.com/AlexandrosLiaskos` → Your GitHub
- `https://www.linkedin.com/in/alexandros-liaskos-a92a46254/` → Your LinkedIn
- `https://www.instagram.com/alexandros_liaskos/` → Your Instagram

### 2. **Services** (in `index.html` and `script.js`)
Replace the service items in:
- Services tab (`#services`)
- Special Services tab (`#special`)
- Service modal data (`serviceDetailsEN` and `serviceDetailsGR` in `script.js`)
- Form dropdown options

### 3. **Portfolio Projects** (in `script.js`)
Replace the `portfolioProjects` array with your own projects.

### 4. **Translations** (in `translations.js`)
Update all text in both `en` and `gr` objects with your content.

### 5. **Tech Stack** (in `index.html`)
Update the stack section with your technologies.

### 6. **Meta Tags** (in `index.html`)
- Update `<title>` tag
- Add your own meta description, keywords, etc.

## What NOT to Change

- ✅ **styles.css** - Keep as-is (or only modify theme colors)
- ✅ **HTML structure** - Keep the layout intact
- ✅ **JavaScript functionality** - Keep the core functions

## Theme Colors (Optional Customization)

In `styles.css`, you can change:
```css
--bg-primary: #0a0e27
--bg-secondary: #151932
--bg-modal: #1a1f3a
--accent-teal: #64ffda
--text-primary: #e6f1ff
--text-secondary: #8892b0
```

## Quick Start

1. Copy this `template/` folder to your new project
2. Search for "Alexandros" and replace with your info
3. Update service data in `script.js`
4. Update portfolio projects in `script.js`
5. Update translations in `translations.js`
6. Test locally, then deploy!

## Features Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark theme with teal accents
- ✅ Tab navigation (desktop + mobile dropdown)
- ✅ Bilingual support (EN/GR)
- ✅ Service modals
- ✅ Portfolio grid with filtering
- ✅ Contact form with email integration
- ✅ Command palette (Cmd+K)
- ✅ Status bar with language toggle

