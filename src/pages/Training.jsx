import { Link } from 'react-router-dom';
import { useContentstackGlobal } from '../hooks/useContentstack';
import { CONTENT_TYPES } from '../config/contentTypes';
import { getFieldValue } from '../utils/contentHelpers';
import './Training.css';

const Training = () => {
  // Fetch training page content from Contentstack
  const { data: trainingData, loading, error } = useContentstackGlobal(CONTENT_TYPES.TRAINING_PAGE);

  // Default values
  const defaultFeatures = [
    { title: 'Comprehensive Curriculum', description: 'Cover all aspects of Selenium WebDriver from basics to advanced framework design', icon: '📚' },
    { title: 'Hands-on Practice', description: 'Real-world assignments and projects to build practical skills', icon: '💻' },
    { title: 'Expert Instructors', description: 'Learn from industry experts with years of experience', icon: '👨‍🏫' },
    { title: 'Flexible Learning', description: 'Online sessions with recorded videos for self-paced learning', icon: '⏰' },
    { title: 'Framework Design', description: 'Learn Page Object Model, TestNG, Data Access, and Logger implementation', icon: '🏗️' },
    { title: 'Corporate Training', description: 'Specialized training programs for corporate teams', icon: '🏢' },
  ];

  const defaultModules = [
    { module_name: 'Introduction to Selenium WebDriver' },
    { module_name: 'WebDriver Basics and Locators' },
    { module_name: 'Handling Web Elements' },
    { module_name: 'Synchronization and Waits' },
    { module_name: 'Page Object Model (POM)' },
    { module_name: 'TestNG Framework Integration' },
    { module_name: 'Data-Driven Testing' },
    { module_name: 'Framework Design Patterns' },
    { module_name: 'Reporting and Logging' },
    { module_name: 'CI/CD Integration' },
  ];

  const defaultTestimonials = [
    { quote: 'Excellent training with in-depth knowledge. The trainer was able to handle any questions spontaneously.', author_name: 'Raveesh Rai', author_details: 'India (8 Years Exp)' },
    { quote: 'Completely satisfied with the training. I can now build frameworks using POM, TestNG, and Data Access.', author_name: 'Serghei Mardar', author_details: 'Canada (3 Years Exp)' },
    { quote: 'Great foundation in Selenium concepts. Prepared me well for our company\'s automation rollout.', author_name: 'Jeremy T Springfield', author_details: 'USA (2 Years Exp)' },
  ];

  // Get values from Contentstack or use defaults
  const pageTitle = trainingData ? getFieldValue(trainingData, 'page_title') : 'Selenium Online Training';
  const batchDate = trainingData ? getFieldValue(trainingData, 'batch_date') : 'Training Batch starts from 04-Feb-2025';
  const pageDescription = trainingData ? getFieldValue(trainingData, 'page_description') : 'We are the leaders in providing quality trainings of Selenium Webdriver to Corporates and individuals';
  
  const enrollmentTitle = trainingData ? getFieldValue(trainingData, 'enrollment_title') : 'Ready to Start Your Journey?';
  const enrollmentSubtitle = trainingData ? getFieldValue(trainingData, 'enrollment_subtitle') : 'Join our next batch and transform your QA career';
  const enrollmentBtnText = trainingData ? getFieldValue(trainingData, 'enrollment_btn_text') : 'Enroll Now';
  const enrollmentBtnLink = trainingData ? getFieldValue(trainingData, 'enrollment_btn_link') : '/enrollment';
  
  const featuresTitle = trainingData ? getFieldValue(trainingData, 'features_title') : 'Why Choose Our Training?';
  const trainingFeatures = trainingData ? (getFieldValue(trainingData, 'training_features') || defaultFeatures) : defaultFeatures;
  
  const modulesTitle = trainingData ? getFieldValue(trainingData, 'modules_title') : 'Course Modules';
  const courseModules = trainingData ? (getFieldValue(trainingData, 'course_modules') || defaultModules) : defaultModules;
  
  const testimonialsTitle = trainingData ? getFieldValue(trainingData, 'testimonials_title') : 'What Our Students Say';
  const testimonials = trainingData ? (getFieldValue(trainingData, 'testimonials') || defaultTestimonials) : defaultTestimonials;

  return (
    <div className="training-page">
      <div className="page-header">
        <div className="container">
          <h1>{pageTitle}</h1>
          <p className="training-subtitle">{batchDate}</p>
          <p>{pageDescription}</p>
        </div>
      </div>

      <div className="container">
        {/* Enrollment CTA */}
        <section className="enrollment-section">
          <div className="enrollment-card">
            <h2>{enrollmentTitle}</h2>
            <p>{enrollmentSubtitle}</p>
            <Link to={enrollmentBtnLink} className="btn btn-primary btn-large">{enrollmentBtnText}</Link>
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <h2 className="section-title">{featuresTitle}</h2>
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
          <h2 className="section-title">{modulesTitle}</h2>
          <div className="modules-list">
            {courseModules.map((module, index) => (
              <div key={index} className="module-item">
                <span className="module-number">{index + 1}</span>
                <span className="module-name">{module.module_name || module}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="training-testimonials">
          <h2 className="section-title">{testimonialsTitle}</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p>"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author_name}</strong> – {testimonial.author_details}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Training;
