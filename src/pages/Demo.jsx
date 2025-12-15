import './Demo.css';

const Demo = () => {
  const demoFeatures = [
    {
      title: 'Contact Forms',
      description: 'Practice automating form submissions and validations',
      icon: '📝'
    },
    {
      title: 'Interactive Elements',
      description: 'Test buttons, links, and other UI components',
      icon: '🖱️'
    },
    {
      title: 'Dynamic Content',
      description: 'Handle dynamic elements and AJAX content',
      icon: '⚡'
    },
    {
      title: 'Web Tables',
      description: 'Practice working with tables and data extraction',
      icon: '📊'
    },
    {
      title: 'File Upload',
      description: 'Test file upload functionality',
      icon: '📤'
    },
    {
      title: 'Alerts & Modals',
      description: 'Handle JavaScript alerts and modal dialogs',
      icon: '⚠️'
    },
  ];

  return (
    <div className="demo-page">
      <div className="page-header">
        <div className="container">
          <h1>Demo Site</h1>
          <p>Practice your automation skills in a controlled environment</p>
        </div>
      </div>

      <div className="container">
        <section className="demo-intro">
          <div className="demo-card">
            <h2>Welcome to BecomeQA Demo Site</h2>
            <p>
              Our demo site provides a safe and controlled environment for practicing 
              your automation testing skills. Whether you're learning Selenium, Cypress, 
              or any other automation tool, this site offers various scenarios to test.
            </p>
            <a 
              href="https://demoqa.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Visit Demo Site →
            </a>
          </div>
        </section>

        <section className="demo-features">
          <h2 className="section-title">What You Can Practice</h2>
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
          <h2 className="section-title">Benefits of Using Our Demo Site</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <div>
                <h3>Safe Learning Environment</h3>
                <p>Practice without worrying about breaking anything</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <div>
                <h3>Real-World Scenarios</h3>
                <p>Test cases that mirror actual web applications</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <div>
                <h3>Multiple Test Cases</h3>
                <p>Various elements and interactions to automate</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✓</span>
              <div>
                <h3>Always Available</h3>
                <p>Access the demo site anytime for practice</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;


