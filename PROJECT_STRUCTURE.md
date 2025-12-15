# BecomeQA Project Structure

## Complete Folder Structure

```
becomeqa/
│
├── public/                          # Public static assets
│   └── vite.svg
│
├── src/                             # Source code
│   │
│   ├── components/                  # Reusable React components
│   │   └── layout/                  # Layout components
│   │       ├── Header.jsx           # Main navigation header
│   │       ├── Header.css           # Header styles
│   │       ├── Footer.jsx           # Site footer with links
│   │       ├── Footer.css           # Footer styles
│   │       ├── Layout.jsx           # Main layout wrapper
│   │       └── Layout.css           # Layout styles
│   │
│   ├── pages/                       # Page components (routes)
│   │   ├── Home.jsx                 # Homepage component
│   │   ├── Home.css                 # Homepage styles
│   │   ├── Tutorials.jsx            # Tutorials listing page
│   │   ├── Tutorials.css            # Tutorials page styles
│   │   ├── Training.jsx             # Training program page
│   │   ├── Training.css             # Training page styles
│   │   ├── Demo.jsx                 # Demo site page
│   │   ├── Demo.css                 # Demo page styles
│   │   ├── About.jsx                # About page
│   │   └── About.css                # About page styles
│   │
│   ├── assets/                      # Static assets (images, icons)
│   │   └── react.svg
│   │
│   ├── App.jsx                      # Main app component with routing
│   ├── App.css                      # App-level styles
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles and CSS variables
│
├── index.html                       # HTML template
├── package.json                     # Dependencies and npm scripts
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint configuration
├── README.md                        # Project documentation
└── PROJECT_STRUCTURE.md             # This file

```

## Component Hierarchy

```
App
└── Router
    └── Layout
        ├── Header
        │   └── Navigation Links
        ├── Main Content (Routes)
        │   ├── Home
        │   │   ├── Hero Section
        │   │   ├── Training Section
        │   │   ├── Tutorials Grid
        │   │   ├── Articles Section
        │   │   ├── Testimonials
        │   │   └── Newsletter
        │   ├── Tutorials
        │   │   └── Tutorial Categories
        │   ├── Training
        │   │   ├── Enrollment Section
        │   │   ├── Features
        │   │   ├── Course Modules
        │   │   └── Testimonials
        │   ├── Demo
        │   │   ├── Demo Intro
        │   │   ├── Features
        │   │   └── Benefits
        │   └── About
        │       ├── Mission & Vision
        │       ├── Values
        │       └── Stats
        └── Footer
            ├── Site Links
            ├── Popular Tutorials
            └── Contact Info
```

## File Organization Principles

### 1. **Components Folder**
- Contains reusable UI components
- Organized by feature/type (layout, common, etc.)
- Each component has its own CSS file

### 2. **Pages Folder**
- Contains route-level components
- Each page is self-contained with its own styles
- Pages handle their own data and state

### 3. **Layout Components**
- Shared across all pages
- Header and Footer are consistent throughout
- Layout wrapper provides consistent structure

### 4. **Styling Approach**
- Component-scoped CSS files
- Global styles in `index.css`
- CSS variables for theming
- Responsive design with media queries

## Routing Structure

```
/                    → Home page
/tutorials           → Tutorials listing
/tutorials/:name     → Individual tutorial (future)
/training            → Training program
/demo                → Demo site info
/about               → About page
```

## Key Features by File

### `src/App.jsx`
- Sets up React Router
- Defines all routes
- Wraps pages in Layout component

### `src/components/layout/Header.jsx`
- Navigation menu
- Logo/branding
- Responsive mobile menu (can be enhanced)

### `src/components/layout/Footer.jsx`
- Site links
- Social media links
- Copyright information

### `src/pages/Home.jsx`
- Hero section with CTA
- Featured tutorials grid
- Latest articles
- Testimonials
- Newsletter signup

### `src/pages/Tutorials.jsx`
- Categorized tutorial listings
- Organized by testing type
- Links to individual tutorials

### `src/pages/Training.jsx`
- Training program details
- Course modules
- Enrollment CTA
- Student testimonials

## CSS Architecture

- **Global Styles**: `index.css` with CSS variables
- **Component Styles**: Co-located with components
- **Responsive Design**: Mobile-first approach
- **Color Scheme**: Defined in CSS variables for easy theming

## Future Expansion Points

1. **Add `src/utils/`**: For helper functions, constants
2. **Add `src/hooks/`**: For custom React hooks
3. **Add `src/context/`**: For global state management
4. **Add `src/services/`**: For API calls
5. **Add `src/data/`**: For static data/config files

