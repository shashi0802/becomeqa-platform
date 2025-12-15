import { Link } from 'react-router-dom';
import './Training.css';

const Training = () => {
  const trainingFeatures = [
    {
      title: 'Comprehensive Curriculum',
      description: 'Cover all aspects of Selenium WebDriver from basics to advanced framework design',
      icon: '📚'
    },
    {
      title: 'Hands-on Practice',
      description: 'Real-world assignments and projects to build practical skills',
      icon: '💻'
    },
    {
      title: 'Expert Instructors',
      description: 'Learn from industry experts with years of experience',
      icon: '👨‍🏫'
    },
    {
      title: 'Flexible Learning',
      description: 'Online sessions with recorded videos for self-paced learning',
      icon: '⏰'
    },
    {
      title: 'Framework Design',
      description: 'Learn Page Object Model, TestNG, Data Access, and Logger implementation',
      icon: '🏗️'
    },
    {
      title: 'Corporate Training',
      description: 'Specialized training programs for corporate teams',
      icon: '🏢'
    },
  ];

  const courseModules = [
    'Introduction to Selenium WebDriver',
    'WebDriver Basics and Locators',
    'Handling Web Elements',
    'Synchronization and Waits',
    'Page Object Model (POM)',
    'TestNG Framework Integration',
    'Data-Driven Testing',
    'Framework Design Patterns',
    'Reporting and Logging',
    'CI/CD Integration',
  ];

  return (
    <div className="training-page">
      <div className="page-header">
        <div className="container">
          <h1>Selenium Online Training</h1>
          <p className="training-subtitle">Training Batch starts from 04-Feb-2025</p>
          <p>We are the leaders in providing quality trainings of Selenium Webdriver to Corporates and individuals</p>
        </div>
      </div>

      <div className="container">
        {/* Enrollment CTA */}
        <section className="enrollment-section">
          <div className="enrollment-card">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join our next batch and transform your QA career</p>
            <Link to="/enrollment" className="btn btn-primary btn-large">Enroll Now</Link>
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <h2 className="section-title">Why Choose Our Training?</h2>
          <div className="features-grid">
            {trainingFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Course Modules */}
        <section className="modules-section">
          <h2 className="section-title">Course Modules</h2>
          <div className="modules-list">
            {courseModules.map((module, index) => (
              <div key={index} className="module-item">
                <span className="module-number">{index + 1}</span>
                <span className="module-name">{module}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="training-testimonials">
          <h2 className="section-title">What Our Students Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Excellent training with in-depth knowledge. The trainer was able to handle any questions spontaneously."</p>
              <div className="testimonial-author">
                <strong>Raveesh Rai</strong> – India (8 Years Exp)
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Completely satisfied with the training. I can now build frameworks using POM, TestNG, and Data Access."</p>
              <div className="testimonial-author">
                <strong>Serghei Mardar</strong> – Canada (3 Years Exp)
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Great foundation in Selenium concepts. Prepared me well for our company's automation rollout."</p>
              <div className="testimonial-author">
                <strong>Jeremy T Springfield</strong> – USA (2 Years Exp)
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Training;

