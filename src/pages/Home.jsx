import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const tutorials = [
    { name: 'Selenium', link: '/tutorials/selenium', icon: '🔷' },
    { name: 'Rest Assured', link: '/tutorials/rest-assured', icon: '🔶' },
    { name: 'Postman', link: '/tutorials/postman', icon: '📮' },
    { name: 'Cucumber', link: '/tutorials/cucumber', icon: '🥒' },
    { name: 'TestNG', link: '/tutorials/testng', icon: '🧪' },
    { name: 'Git', link: '/tutorials/git', icon: '📦' },
    { name: 'Protractor', link: '/tutorials/protractor', icon: '⚡' },
    { name: 'ISTQB', link: '/tutorials/istqb', icon: '📚' },
  ];

  const latestArticles = [
    {
      title: 'Selenium 4: Features and Examples',
      description: 'Learn the insights of Selenium 4 - the latest version bringing groundbreaking changes.',
      category: 'Selenium'
    },
    {
      title: 'Top Cross Browser Testing Tools For 2024',
      description: 'What are the top cross browser testing tools aligned with their popularity and strength.',
      category: 'Testing Tools'
    },
    {
      title: 'Introduction to the Playwright Framework',
      description: 'What is Playwright framework and why does it exist today? Explore scenarios where Playwright works.',
      category: 'Frameworks'
    },
    {
      title: 'AI in Software Testing',
      description: 'Enhancing Test Automation with AI integrations and modern approaches.',
      category: 'AI & Testing'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">BecomeQA</h1>
            <p className="hero-subtitle">Destination for QA professionals</p>
            <div className="hero-cta">
              <Link to="/enrollment" className="btn btn-primary">Enroll Yourself</Link>
              <Link to="/tutorials" className="btn btn-secondary">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="training-section">
        <div className="container">
          <div className="section-header">
            <h2>Selenium Online Trainings</h2>
            <p className="section-subtitle">
              Training Batch starts from 04-Feb-2025
            </p>
            <p>
              We are the leaders in providing quality trainings of Selenium Webdriver 
              to Corporates and individuals
            </p>
            <div className="cta-buttons">
              <Link to="/enrollment" className="btn btn-primary">Enroll Yourself</Link>
              <Link to="/tutorials" className="btn btn-outline">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="tutorials-section">
        <div className="container">
          <h2 className="section-title">Start Learning</h2>
          <div className="tutorials-grid">
            {tutorials.map((tutorial, index) => (
              <Link key={index} to={tutorial.link} className="tutorial-card">
                <div className="tutorial-icon">{tutorial.icon}</div>
                <h3>{tutorial.name}</h3>
                <span className="tutorial-link">Start Learning →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="articles-section">
        <div className="container">
          <h2 className="section-title">Latest Articles</h2>
          <div className="articles-grid">
            {latestArticles.map((article, index) => (
              <div key={index} className="article-card">
                <div className="article-category">{article.category}</div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <Link to="/tutorials" className="article-link">Read More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Checkout what our Students say about us!</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"It was an excellent training. The trainer had very in-depth knowledge 
                and was able to handle any of the questions asked spontaneously."</p>
              </div>
              <div className="testimonial-author">
                <strong>Raveesh Rai</strong> – India (Exp- 8Yrs)
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I am Completely satisfied with the training provided. This course 
                allowed me to learn Selenium Webdriver from scratch."</p>
              </div>
              <div className="testimonial-author">
                <strong>Serghei Mardar</strong> – Canada (Exp- 3Yrs)
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"This class has been a great foundation in Selenium concepts. 
                It has prepared me well for our companies roll out of automated testing."</p>
              </div>
              <div className="testimonial-author">
                <strong>Jeremy T Springfield</strong> – USA (Exp -2Yrs)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <h2>Keep yourself up to date</h2>
          <p>Subscribe to our newsletter for the latest updates</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;

