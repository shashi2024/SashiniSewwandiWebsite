# Static Website – Research Engineer Portfolio

A clean, modern, fully static HTML/CSS/JS portfolio website with no dependencies or build step required.

## Folder Structure

```
static-website/
├── index.html          ← Home page
├── about.html          ← About / Experience page
├── projects.html       ← All projects with filter
├── contact.html        ← Contact form + social links
├── .gitignore
├── README.md
└── assets/
    ├── css/
    │   ├── style.css       ← Design system, components, animations
    │   └── responsive.css  ← Mobile / tablet breakpoints
    └── js/
        └── main.js         ← Nav, typing effect, scroll reveal, form
```

## How to Run

### Option 1 – Just open the file (simplest)
Double-click `index.html` — it opens directly in your browser. No server needed.

### Option 2 – VS Code Live Server (recommended)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Auto-reloads on save ✅

### Option 3 – Python HTTP Server
```bash
cd static-website
python -m http.server 3000
```
Then open http://localhost:3000

### Option 4 – Node serve
```bash
npx serve static-website
```

## Features
- 🌙 Dark theme with glassmorphism cards
- ✨ Scroll reveal animations
- ⌨️ Typing effect on homepage
- 📊 Animated skill bars & counters
- 🔍 Project category filter
- 📱 Fully responsive (mobile, tablet, desktop)
- 📬 Contact form with success state
- ♿ Semantic HTML & accessible IDs

## Customisation
- Edit personal info in each `.html` file
- Swap emoji avatars for real images via `<img>` tags
- Update social links in `contact.html`
- Add/remove projects in `projects.html`
