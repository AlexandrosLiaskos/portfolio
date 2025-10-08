# Business SPA - Alexandros Liaskos

A luxury, minimalist Single Page Application built with vanilla HTML, CSS, and JavaScript featuring a unique UI with deep blue-green gradient theme.

## ✨ Features

### 🎨 Design
- **Luxury Deep Blue-Green Gradient Theme** - Sophisticated color palette with teal accents
- **Super Minimalist UI** - Clean, clutter-free interface
- **Mobile-Friendly** - Fully responsive design for all devices
- **Central Compact Modal** - Focused content presentation
- **Smooth Animations** - Subtle transitions and hover effects
- **Glassmorphism Effects** - Modern backdrop blur and transparency

### 🚀 Functionality
- **Tab Navigation** - Seamless switching between sections (About, Services, Portfolio, Stack, Contact)
- **VS Code-like Status Bar** - Real-time clock and current tab indicator
- **Command Palette** - Quick navigation with `Cmd/Ctrl + K`
- **Portfolio Showcase** - Dynamic rendering of projects with images and links
- **Interactive Cards** - Hover effects on all interactive elements
- **Keyboard Shortcuts** - Full keyboard navigation support

### 📱 Sections

#### About
- Professional introduction
- Key statistics (GitHub stars, projects, pricing)
- Call-to-action buttons

#### Services
- Serverless Websites
- Web Applications
- Website Rescue & Improvement
- Cloud & DevOps

#### Portfolio
- Featured projects with live demos and GitHub links
- Project cards with images, descriptions, and metadata
- Technologies used in each project

#### Stack
- Frontend: Next.js, React, TypeScript, Tailwind CSS, Vue.js
- Backend: Node.js, Nest.js, Python, Go
- Database: PostgreSQL, SQLite, Prisma
- DevOps: Docker, GitHub Actions, Dokploy, Hostinger

#### Contact
- Email, LinkedIn, GitHub links
- Pricing information
- Investment details

## 🎮 Keyboard Shortcuts

- `Cmd/Ctrl + K` - Open/Close Command Palette
- `Escape` - Close Command Palette
- `Arrow Up/Down` - Navigate command palette
- `Enter` - Execute selected command

## 🎯 Command Palette Commands

- **About** - Navigate to About section
- **Services** - Navigate to Services section
- **Portfolio** - Navigate to Portfolio section
- **Stack** - Navigate to Stack section
- **Contact** - Navigate to Contact section
- **GitHub** - Open GitHub profile in new tab
- **LinkedIn** - Open LinkedIn profile in new tab
- **Email** - Open email client

## 🛠️ Technical Details

### Built With
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks or libraries
- **SVG Icons** - Scalable social media icons

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- No external dependencies
- Minimal HTTP requests
- Optimized animations
- Lazy loading for images

## 📂 File Structure

```
business-spa/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # Documentation
```

## 🚀 Usage

Simply open `index.html` in a web browser. No build process or server required!

### Local Development
```bash
# Option 1: Open directly
open index.html

# Option 2: Use a simple HTTP server
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Use VS Code Live Server extension
# Right-click index.html and select "Open with Live Server"
```

## 🎨 Color Palette

```css
--gradient-start: #0a192f    /* Deep Navy */
--gradient-mid: #0d3b4f      /* Ocean Blue */
--gradient-end: #0f5257      /* Teal Green */
--accent-teal: #64ffda       /* Bright Teal */
--accent-cyan: #00d9ff       /* Cyan */
--text-primary: #e6f1ff      /* Light Blue White */
--text-secondary: #8892b0    /* Muted Blue */
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 🔧 Customization

### Update Portfolio Projects
Edit the `portfolioProjects` array in `script.js`:

```javascript
const portfolioProjects = [
    {
        title: "Project Name",
        stars: "10",
        tech: "Technology",
        description: "Project description",
        demo: "https://demo-url.com",
        repo: "https://github.com/username/repo",
        image: "https://image-url.com/image.png"
    }
];
```

### Update Services
Edit the services grid in `index.html` under the Services tab section.

### Update Contact Information
Edit the contact section in `index.html` and update social links in the header.

## 📄 License

This is a personal portfolio website. Feel free to use as inspiration for your own projects.

## 👤 Author

**Alexandros Liaskos**
- Email: alexliaskos@geol.uoa.gr
- GitHub: [@AlexandrosLiaskos](https://github.com/AlexandrosLiaskos)
- LinkedIn: [Alexandros Liaskos](https://www.linkedin.com/in/alexandros-liaskos-a92a46254/)

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript

