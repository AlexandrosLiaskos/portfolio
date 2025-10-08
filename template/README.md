# Business SPA - UI Component Library

A complete set of reusable UI components with dark theme, responsive design, and cross-platform support.

## 🎨 What's Included

This is a **component library**, not a template. It contains all the reusable UI pieces you can copy into your projects.

### Core Components

1. **Central Modal** - Responsive modal container with cross-platform viewport handling
2. **Tab Navigation** - Desktop horizontal tabs + mobile dropdown alternative
3. **Status Bar** - Bottom fixed bar with language toggle and links
4. **Service Cards** - Minimal service display with modal details
5. **Portfolio Cards** - Project showcase with images and links
6. **Service Modal** - Full-screen modal for detailed content
7. **Command Palette** - Quick navigation (Cmd/Ctrl + K)
8. **Buttons** - CTA buttons and filter buttons
9. **Contact Methods** - Styled contact links
10. **Tech Stack Items** - Technology badges/pills
11. **Color System** - CSS custom properties
12. **Typography** - Font system with Dancing Script + Space Grotesk

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `< 768px` - Full-width, mobile dropdown navigation
- **Tablet**: `768px - 1024px` - Adjusted spacing and sizing
- **Desktop**: `> 1024px` - Max-width 800px, horizontal tabs

### Cross-Platform Features
- `100dvh` for proper mobile viewport height
- Apple mobile web app support
- Touch-friendly tap targets (min 44px)
- No horizontal scroll on mobile
- Smooth scrolling and transitions

## 🎨 Theme System

### CSS Variables

```css
:root {
    --bg-primary: #0a0e27;      /* Main background */
    --bg-secondary: #151932;    /* Secondary background */
    --bg-modal: #1a1f3a;        /* Modal/card background */
    --accent-teal: #64ffda;     /* Primary accent color */
    --text-primary: #e6f1ff;    /* Primary text */
    --text-secondary: #8892b0;  /* Secondary/muted text */
    --border-color: #2d3561;    /* Borders and dividers */
}
```

### Customizing Colors

Change any color by overriding the CSS variable:

```css
:root {
    --accent-teal: #ff6b6b;  /* Change to red accent */
}
```

## 📦 Component Usage

### 1. Central Modal

The main container for your content:

```html
<div class="container">
    <div class="modal">
        <div class="modal-header">
            <!-- Navigation goes here -->
        </div>
        <div class="modal-body">
            <!-- Your content goes here -->
        </div>
    </div>
</div>
```

**Features:**
- Centered on desktop (max-width: 800px)
- Full-width on mobile
- Smooth shadow and border-radius
- Scrollable body area

### 2. Tab Navigation

Desktop tabs + mobile dropdown:

```html
<!-- Desktop Tabs -->
<div class="tabs">
    <button class="tab active" data-tab="home">Home</button>
    <button class="tab" data-tab="about">About</button>
</div>

<!-- Mobile Dropdown -->
<div class="mobile-tab-selector">
    <button class="mobile-tab-button" id="mobileTabButton">
        <span id="currentTabName">Home</span>
        <svg><!-- Chevron icon --></svg>
    </button>
    <div class="mobile-tab-dropdown" id="mobileTabDropdown">
        <button class="mobile-tab-option active" data-tab="home">Home</button>
        <button class="mobile-tab-option" data-tab="about">About</button>
    </div>
</div>
```

**JavaScript:**
```javascript
switchTab('about');  // Switch to a tab programmatically
```

### 3. Status Bar

Bottom fixed bar:

```html
<div class="status-bar">
    <div class="status-left">
        <span class="status-item">Your App Name</span>
    </div>
    <div class="status-right">
        <button class="lang-toggle">EN</button>
        <a href="#" class="status-item status-link">Link</a>
    </div>
</div>
```

### 4. Service Cards

```html
<div class="services-minimal">
    <div class="service-item" onclick="openServiceModal()">
        <div class="service-code">CODE</div>
        <div class="service-content">
            <h3 class="service-name">Service Name</h3>
            <p class="service-desc">Description</p>
        </div>
        <div class="service-price">€XX+</div>
    </div>
</div>
```

### 5. Portfolio Cards

```html
<div class="portfolio-grid">
    <div class="portfolio-card">
        <img src="image.jpg" class="portfolio-image">
        <div class="portfolio-info">
            <div class="portfolio-header">
                <h3 class="portfolio-title">Project</h3>
                <span class="portfolio-stars">⭐ 42</span>
            </div>
            <p class="portfolio-tech">Tech Stack</p>
            <p class="portfolio-desc">Description</p>
            <div class="portfolio-links">
                <a href="#" class="portfolio-link">Demo</a>
                <a href="#" class="portfolio-link">Code</a>
            </div>
        </div>
    </div>
</div>
```

### 6. Service Modal

```html
<div id="serviceModal" class="service-modal">
    <div class="service-modal-content">
        <button class="service-modal-close" onclick="closeServiceModal()">&times;</button>
        <div id="serviceModalBody">
            <!-- Your modal content -->
        </div>
    </div>
</div>
```

**JavaScript:**
```javascript
openServiceModal();   // Open modal
closeServiceModal();  // Close modal
```

### 7. Command Palette

```html
<div id="commandPalette" class="command-palette hidden">
    <div class="command-palette-content">
        <input type="text" id="commandInput" placeholder="Type a command...">
        <div id="commandResults" class="command-results">
            <!-- Command items -->
        </div>
    </div>
</div>
```

**Keyboard Shortcut:** `Cmd+K` (Mac) or `Ctrl+K` (Windows)

### 8. Buttons

```html
<button class="cta-button">Call to Action</button>
<button class="filter-btn active">Active Filter</button>
<button class="filter-btn">Inactive Filter</button>
```

### 9. Contact Methods

```html
<div class="contact-methods">
    <a href="mailto:hello@example.com" class="contact-method">
        <span class="contact-icon">✉️</span>
        <span>hello@example.com</span>
    </a>
</div>
```

### 10. Tech Stack Items

```html
<div class="stack-group">
    <h3>Frontend</h3>
    <div class="stack-items">
        <span class="stack-item">React</span>
        <span class="stack-item">TypeScript</span>
    </div>
</div>
```

## 🚀 Quick Start

1. **Copy the files:**
   ```
   template/
   ├── index.html    # Component showcase
   ├── styles.css    # All component styles
   ├── script.js     # Component interactions
   └── README.md     # This file
   ```

2. **Include in your project:**
   ```html
   <link rel="stylesheet" href="styles.css">
   <script src="script.js"></script>
   ```

3. **Copy components you need** from `index.html`

4. **Customize colors** via CSS variables

## 📐 Layout System

### Container Structure

```
.container (full viewport)
  └── .modal (centered, max-width 800px)
      ├── .modal-header (fixed height, navigation)
      └── .modal-body (scrollable content)
```

### Spacing

- **Padding**: 20px on mobile, 30px on desktop
- **Gaps**: 15px between items, 30px between sections
- **Border radius**: 12px for cards, 8px for buttons

## 🎯 JavaScript Functions

### Tab Navigation
```javascript
switchTab(tabName)           // Switch to a specific tab
closeMobileDropdown()        // Close mobile dropdown
```

### Modals
```javascript
openServiceModal()           // Open service modal
closeServiceModal()          // Close service modal
```

### Command Palette
- Opens with `Cmd/Ctrl + K`
- Closes with `Escape` or click outside

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ iOS Safari
- ✅ Chrome Mobile

## 📝 Notes

- All components use **vanilla JavaScript** (no frameworks)
- **Mobile-first** responsive design
- **Accessible** with keyboard navigation
- **Performant** with CSS transforms and transitions
- **Cross-platform** with proper viewport handling

## 🎨 Typography

- **Headings**: Space Grotesk (Google Fonts)
- **Signature/Names**: Dancing Script (Google Fonts)
- **Body**: System font stack

## 💡 Tips

1. **Customize colors** by changing CSS variables
2. **Add new components** following the existing patterns
3. **Test on mobile** - use Chrome DevTools device mode
4. **Use the showcase** - Open `index.html` to see all components

---

**Made with ❤️ using vanilla JavaScript, CSS, and HTML**

