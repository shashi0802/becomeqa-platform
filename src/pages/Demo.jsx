import { useContentstackGlobal } from '../hooks/useContentstack';
import { CONTENT_TYPES } from '../config/contentTypes';
import { getFieldValue } from '../utils/contentHelpers';
import './Demo.css';

const Demo = () => {
  // Fetch demo page content from Contentstack
  const { data: demoData, loading, error } = useContentstackGlobal(CONTENT_TYPES.DEMO_PAGE);

  // Default values
  const defaultFeatures = [
    { title: 'Contact Forms', description: 'Practice automating form submissions and validations', icon: '📝' },
    { title: 'Interactive Elements', description: 'Test buttons, links, and other UI components', icon: '🖱️' },
    { title: 'Dynamic Content', description: 'Handle dynamic elements and AJAX content', icon: '⚡' },
    { title: 'Web Tables', description: 'Practice working with tables and data extraction', icon: '📊' },
    { title: 'File Upload', description: 'Test file upload functionality', icon: '📤' },
    { title: 'Alerts & Modals', description: 'Handle JavaScript alerts and modal dialogs', icon: '⚠️' },
  ];

  const defaultBenefits = [
    { title: 'Safe Learning Environment', description: 'Practice without worrying about breaking anything' },
    { title: 'Real-World Scenarios', description: 'Test cases that mirror actual web applications' },
    { title: 'Multiple Test Cases', description: 'Various elements and interactions to automate' },
    { title: 'Always Available', description: 'Access the demo site anytime for practice' },
  ];

  // Get values from Contentstack or use defaults
  const pageTitle = demoData ? getFieldValue(demoData, 'page_title') : 'Demo Site';
  const pageDescription = demoData ? getFieldValue(demoData, 'page_description') : 'Practice your automation skills in a controlled environment';
  
  const introTitle = demoData ? getFieldValue(demoData, 'intro_title') : 'Welcome to BecomeQA Demo Site';
  const introDescription = demoData ? getFieldValue(demoData, 'intro_description') : 'Our demo site provides a safe and controlled environment for practicing your automation testing skills. Whether you\'re learning Selenium, Cypress, or any other automation tool, this site offers various scenarios to test.';
  const demoSiteUrl = demoData ? getFieldValue(demoData, 'demo_site_url') : 'https://demoqa.com';
  const demoSiteBtnText = demoData ? getFieldValue(demoData, 'demo_site_btn_text') : 'Visit Demo Site →';
  
  const featuresTitle = demoData ? getFieldValue(demoData, 'features_title') : 'What You Can Practice';
  const demoFeatures = demoData ? (getFieldValue(demoData, 'demo_features') || defaultFeatures) : defaultFeatures;
  
  const benefitsTitle = demoData ? getFieldValue(demoData, 'benefits_title') : 'Benefits of Using Our Demo Site';
  const benefits = demoData ? (getFieldValue(demoData, 'benefits') || defaultBenefits) : defaultBenefits;

  return (
    <div className="demo-page">
      <div className="page-header">
        <div className="container">
          <h1>{pageTitle}</h1>
          <p>{pageDescription}</p>
        </div>
      </div>

      <div className="container">
        <section className="demo-intro">
          <div className="demo-card">
            <h2>{introTitle}</h2>
            <p>{introDescription}</p>
            <a 
              href={demoSiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              {demoSiteBtnText}
            </a>
          </div>
        </section>

        <section className="demo-features">
          <h2 className="section-title">{featuresTitle}</h2>
          <div className="features-grid">
            {demoFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="demo-benefits">
          <h2 className="section-title">{benefitsTitle}</h2>
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-icon">✓</span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;
