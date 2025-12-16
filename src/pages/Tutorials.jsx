import { Link } from 'react-router-dom';
import { useContentstackGlobal } from '../hooks/useContentstack';
import { CONTENT_TYPES } from '../config/contentTypes';
import { getFieldValue } from '../utils/contentHelpers';
import './Tutorials.css';

const Tutorials = () => {
  // Fetch tutorials page content from Contentstack
  const { data: tutorialsData, loading, error } = useContentstackGlobal(CONTENT_TYPES.TUTORIALS_PAGE);

  // Default tutorial categories
  const defaultCategories = [
    {
      category_title: 'Front-End Testing Automation',
      tutorials: [
        { name: 'Selenium', description: 'Learn Selenium WebDriver automation', icon: '🔷' },
        { name: 'Cypress', description: 'Modern end-to-end testing framework', icon: '⚡' },
        { name: 'Protractor', description: 'End-to-end testing for Angular', icon: '🎯' },
        { name: 'TestProject', description: 'Open-source test automation platform', icon: '📊' },
        { name: 'Katalon Studio', description: 'Comprehensive test automation solution', icon: '🔧' },
      ]
    },
    {
      category_title: 'Back-End Testing Automation',
      tutorials: [
        { name: 'Rest Assured', description: 'API testing with Java', icon: '🔶' },
        { name: 'Postman', description: 'API development and testing', icon: '📮' },
        { name: 'SOAPUI', description: 'SOAP and REST API testing', icon: '🧪' },
      ]
    },
    {
      category_title: 'Mobile Testing Automation',
      tutorials: [
        { name: 'Appium Studio', description: 'Mobile app automation testing', icon: '📱' },
      ]
    },
    {
      category_title: 'Frameworks & Libraries',
      tutorials: [
        { name: 'Cucumber', description: 'BDD testing framework', icon: '🥒' },
        { name: 'TestNG', description: 'Testing framework for Java', icon: '🧪' },
        { name: 'JUnit', description: 'Unit testing framework', icon: '⚙️' },
      ]
    },
    {
      category_title: 'DevOps Tools',
      tutorials: [
        { name: 'Maven', description: 'Build automation tool', icon: '📦' },
        { name: 'Git', description: 'Version control system', icon: '🔀' },
        { name: 'Docker', description: 'Containerization platform', icon: '🐳' },
      ]
    },
    {
      category_title: 'QA Practices',
      tutorials: [
        { name: 'ISTQB', description: 'ISTQB certification preparation', icon: '📚' },
        { name: 'Software Testing', description: 'Fundamentals of software testing', icon: '✅' },
        { name: 'Agile & Scrum', description: 'Agile methodologies and Scrum', icon: '🔄' },
      ]
    },
  ];

  // Get values from Contentstack or use defaults
  const pageTitle = tutorialsData ? getFieldValue(tutorialsData, 'page_title') : 'Tutorials';
  const pageDescription = tutorialsData ? getFieldValue(tutorialsData, 'page_description') : 'Comprehensive tutorials on various testing tools and methodologies';
  const tutorialCategories = tutorialsData ? (getFieldValue(tutorialsData, 'tutorial_categories') || defaultCategories) : defaultCategories;

  // Helper function to generate tutorial link
  const getTutorialLink = (tutorial) => {
    if (tutorial.link) return tutorial.link;
    return `/tutorials/${tutorial.name.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <div className="tutorials-page">
      <div className="page-header">
        <div className="container">
          <h1>{pageTitle}</h1>
          <p>{pageDescription}</p>
        </div>
      </div>

      <div className="container">
        {tutorialCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="tutorial-category">
            <h2 className="category-title">{category.category_title || category.title}</h2>
            <div className="tutorials-list">
              {(category.tutorials || []).map((tutorial, tutorialIndex) => (
                <Link
                  key={tutorialIndex}
                  to={getTutorialLink(tutorial)}
                  className="tutorial-item"
                >
                  <div className="tutorial-icon">{tutorial.icon}</div>
                  <div className="tutorial-info">
                    <h3>{tutorial.name}</h3>
                    <p>{tutorial.description}</p>
                  </div>
                  <span className="tutorial-arrow">→</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
