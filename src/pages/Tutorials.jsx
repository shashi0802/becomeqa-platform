import { Link } from 'react-router-dom';
import './Tutorials.css';

const Tutorials = () => {
  const tutorialCategories = [
    {
      title: 'Front-End Testing Automation',
      tutorials: [
        { name: 'Selenium', description: 'Learn Selenium WebDriver automation', icon: '🔷' },
        { name: 'Cypress', description: 'Modern end-to-end testing framework', icon: '⚡' },
        { name: 'Protractor', description: 'End-to-end testing for Angular', icon: '🎯' },
        { name: 'TestProject', description: 'Open-source test automation platform', icon: '📊' },
        { name: 'Katalon Studio', description: 'Comprehensive test automation solution', icon: '🔧' },
      ]
    },
    {
      title: 'Back-End Testing Automation',
      tutorials: [
        { name: 'Rest Assured', description: 'API testing with Java', icon: '🔶' },
        { name: 'Postman', description: 'API development and testing', icon: '📮' },
        { name: 'SOAPUI', description: 'SOAP and REST API testing', icon: '🧪' },
      ]
    },
    {
      title: 'Mobile Testing Automation',
      tutorials: [
        { name: 'Appium Studio', description: 'Mobile app automation testing', icon: '📱' },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      tutorials: [
        { name: 'Cucumber', description: 'BDD testing framework', icon: '🥒' },
        { name: 'TestNG', description: 'Testing framework for Java', icon: '🧪' },
        { name: 'JUnit', description: 'Unit testing framework', icon: '⚙️' },
      ]
    },
    {
      title: 'DevOps Tools',
      tutorials: [
        { name: 'Maven', description: 'Build automation tool', icon: '📦' },
        { name: 'Git', description: 'Version control system', icon: '🔀' },
        { name: 'Docker', description: 'Containerization platform', icon: '🐳' },
      ]
    },
    {
      title: 'QA Practices',
      tutorials: [
        { name: 'ISTQB', description: 'ISTQB certification preparation', icon: '📚' },
        { name: 'Software Testing', description: 'Fundamentals of software testing', icon: '✅' },
        { name: 'Agile & Scrum', description: 'Agile methodologies and Scrum', icon: '🔄' },
      ]
    },
  ];

  return (
    <div className="tutorials-page">
      <div className="page-header">
        <div className="container">
          <h1>Tutorials</h1>
          <p>Comprehensive tutorials on various testing tools and methodologies</p>
        </div>
      </div>

      <div className="container">
        {tutorialCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="tutorial-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="tutorials-list">
              {category.tutorials.map((tutorial, tutorialIndex) => (
                <Link
                  key={tutorialIndex}
                  to={`/tutorials/${tutorial.name.toLowerCase().replace(/\s+/g, '-')}`}
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


