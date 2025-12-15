# BecomeQA - QA Learning Platform

A modern React.js application replicating the ToolsQA website structure, designed as a comprehensive platform for QA professionals to learn and enhance their testing skills.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and Vite for optimal performance
- **Responsive Design**: Mobile-first approach with beautiful, modern UI
- **Comprehensive Content**: Tutorials, training programs, and resources
- **Clean Folder Structure**: Well-organized codebase for easy maintenance
- **React Router**: Seamless navigation between pages
- **Component-Based**: Reusable components for scalability
- **Contentstack CMS Integration**: Manage all content through Contentstack CMS
- **Headless CMS**: Decoupled content management for easy updates

## 📁 Project Structure

```
becomeqa/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   └── layout/        # Layout components
│   │       ├── Header.jsx # Navigation header
│   │       ├── Header.css
│   │       ├── Footer.jsx # Site footer
│   │       ├── Footer.css
│   │       ├── Layout.jsx # Main layout wrapper
│   │       └── Layout.css
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Homepage with hero, tutorials, articles
│   │   ├── Home.css
│   │   ├── Tutorials.jsx # Tutorials listing page
│   │   ├── Tutorials.css
│   │   ├── Training.jsx  # Training program page
│   │   ├── Training.css
│   │   ├── Demo.jsx      # Demo site information
│   │   ├── Demo.css
│   │   ├── About.jsx     # About page
│   │   └── About.css
│   ├── App.jsx           # Main app component with routing
│   ├── App.css           # App-level styles
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and CSS variables
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🛠️ Technologies Used

- **React 19**: Latest React version for modern UI development
- **React Router DOM**: Client-side routing
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with CSS variables and responsive design

## 📦 Installation

1. Navigate to the project directory:
```bash
cd becomeqa
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
The application will start on `http://localhost:5173` (or the next available port)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📄 Available Pages

- **Home** (`/`): Landing page with hero section, featured tutorials, latest articles, and testimonials
- **Tutorials** (`/tutorials`): Comprehensive list of tutorials organized by categories
- **Training** (`/training`): Selenium training program details and enrollment
- **Demo Site** (`/demo`): Information about the demo site for practice
- **About** (`/about`): About page with mission, vision, and values
- **Enrollment** (`/enrollment`): Training enrollment form
- **Contentstack Example** (`/contentstack-example`): Example page demonstrating Contentstack integration

## 🎨 Design Features

- **Modern Gradient Backgrounds**: Eye-catching hero sections
- **Card-Based Layout**: Clean, organized content presentation
- **Responsive Grid**: Adapts to all screen sizes
- **Smooth Animations**: Hover effects and transitions
- **Consistent Color Scheme**: Professional blue and purple theme

## 🔧 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
  /* ... */
}
```

### Content
- Update page content in respective `.jsx` files in `src/pages/`
- Modify navigation links in `src/components/layout/Header.jsx`
- Update footer links in `src/components/layout/Footer.jsx`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📦 Contentstack CMS Integration

The application is integrated with Contentstack CMS for content management.

### Setup

1. **Environment Variables**: See `ENV_SETUP.md` for configuration
2. **Content Types**: Create content types in Contentstack dashboard
3. **Usage**: See `CONTENTSTACK_INTEGRATION.md` for detailed documentation

### Quick Start

```jsx
import { useContentstackEntries } from '../hooks/useContentstack';
import { CONTENT_TYPES } from '../config/contentTypes';

const MyComponent = () => {
  const { data, loading, error } = useContentstackEntries(CONTENT_TYPES.TUTORIAL);
  // Use data, loading, error states
};
```

Visit `/contentstack-example` to see a working example.

## 🚀 Future Enhancements

Potential features to add:
- Individual tutorial detail pages
- Search functionality
- User authentication
- Course enrollment system
- Blog/article detail pages
- Contact form
- Newsletter integration
- Dark mode toggle
- Content caching for better performance

## 📝 License

This project is created for educational purposes.

## 👨‍💻 Development

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add corresponding CSS file
3. Add route in `src/App.jsx`
4. Add navigation link in `src/components/layout/Header.jsx`

### Adding New Components

1. Create component in appropriate folder under `src/components/`
2. Follow the existing naming conventions
3. Import and use in relevant pages

## 🤝 Contributing

This is a template project. Feel free to customize and extend it according to your needs.

---

**Built with ❤️ using React and Vite**
