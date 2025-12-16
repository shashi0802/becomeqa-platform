import { Link } from 'react-router-dom';
import { useContentstackGlobal } from '../hooks/useContentstack';
import { CONTENT_TYPES } from '../config/contentTypes';
import { getFieldValue } from '../utils/contentHelpers';
import './Home.css';

const Home = () => {
  // Fetch homepage content from Contentstack
  const { data: homeData, loading, error } = useContentstackGlobal(CONTENT_TYPES.HOMEPAGE);

  // Default values
  const defaultTutorials = [
    { name: 'Selenium', link: '/tutorials/selenium', icon: '🔷' },
    { name: 'Rest Assured', link: '/tutorials/rest-assured', icon: '🔶' },
    { name: 'Postman', link: '/tutorials/postman', icon: '📮' },
    { name: 'Cucumber', link: '/tutorials/cucumber', icon: '🥒' },
    { name: 'TestNG', link: '/tutorials/testng', icon: '🧪' },
    { name: 'Git', link: '/tutorials/git', icon: '📦' },
    { name: 'Protractor', link: '/tutorials/protractor', icon: '⚡' },
    { name: 'ISTQB', link: '/tutorials/istqb', icon: '📚' },
  ];

  const defaultArticles = [
    { title: 'Selenium 4: Features and Examples', description: 'Learn the insights of Selenium 4 - the latest version bringing groundbreaking changes.', category: 'Selenium' },
    { title: 'Top Cross Browser Testing Tools For 2024', description: 'What are the top cross browser testing tools aligned with their popularity and strength.', category: 'Testing Tools' },
    { title: 'Introduction to the Playwright Framework', description: 'What is Playwright framework and why does it exist today? Explore scenarios where Playwright works.', category: 'Frameworks' },
    { title: 'AI in Software Testing', description: 'Enhancing Test Automation with AI integrations and modern approaches.', category: 'AI & Testing' }
  ];

  const defaultTestimonials = [
    { quote: 'It was an excellent training. The trainer had very in-depth knowledge and was able to handle any of the questions asked spontaneously.', author_name: 'Raveesh Rai', author_details: 'India (Exp- 8Yrs)' },
    { quote: 'I am Completely satisfied with the training provided. This course allowed me to learn Selenium Webdriver from scratch.', author_name: 'Serghei Mardar', author_details: 'Canada (Exp- 3Yrs)' },
    { quote: 'This class has been a great foundation in Selenium concepts. It has prepared me well for our companies roll out of automated testing.', author_name: 'Jeremy T Springfield', author_details: 'USA (Exp -2Yrs)' }
  ];

  // Get values from Contentstack or use defaults
  const heroTitle = homeData ? getFieldValue(homeData, 'hero_title') : 'BecomeQA';
  const heroSubtitle = homeData ? getFieldValue(homeData, 'hero_subtitle') : 'Destination for QA professionals';
  const heroPrimaryBtnText = homeData ? getFieldValue(homeData, 'hero_primary_btn_text') : 'Enroll Yourself';
  const heroPrimaryBtnLink = homeData ? getFieldValue(homeData, 'hero_primary_btn_link') : '/enrollment';
  const heroSecondaryBtnText = homeData ? getFieldValue(homeData, 'hero_secondary_btn_text') : 'Read More';
  const heroSecondaryBtnLink = homeData ? getFieldValue(homeData, 'hero_secondary_btn_link') : '/tutorials';
  
  const trainingTitle = homeData ? getFieldValue(homeData, 'training_title') : 'Selenium Online Trainings';
  const trainingBatchDate = homeData ? getFieldValue(homeData, 'training_batch_date') : 'Training Batch starts from 04-Feb-2025';
  const trainingDescription = homeData ? getFieldValue(homeData, 'training_description') : 'We are the leaders in providing quality trainings of Selenium Webdriver to Corporates and individuals';
  
  const tutorials = homeData ? (getFieldValue(homeData, 'tutorials') || defaultTutorials) : defaultTutorials;
  const latestArticles = homeData ? (getFieldValue(homeData, 'latest_articles') || defaultArticles) : defaultArticles;
  const testimonials = homeData ? (getFieldValue(homeData, 'testimonials') || defaultTestimonials) : defaultTestimonials;
  
  const newsletterTitle = homeData ? getFieldValue(homeData, 'newsletter_title') : 'Keep yourself up to date';
  const newsletterSubtitle = homeData ? getFieldValue(homeData, 'newsletter_subtitle') : 'Subscribe to our newsletter for the latest updates';

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{heroTitle}</h1>
            <p className="hero-subtitle">{heroSubtitle}</p>
            <div className="hero-cta">
              <Link to={heroPrimaryBtnLink} className="btn btn-primary">{heroPrimaryBtnText}</Link>
              <Link to={heroSecondaryBtnLink} className="btn btn-secondary">{heroSecondaryBtnText}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="training-section">
        <div className="container">
          <div className="section-header">
            <h2>{trainingTitle}</h2>
            <p className="section-subtitle">{trainingBatchDate}</p>
            <p>{trainingDescription}</p>
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
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.quote}"</p>
                </div>
                <div className="testimonial-author">
                  <strong>{testimonial.author_name}</strong> – {testimonial.author_details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <h2>{newsletterTitle}</h2>
          <p>{newsletterSubtitle}</p>
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
