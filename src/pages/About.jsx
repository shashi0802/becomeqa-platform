import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About BecomeQA</h1>
          <p>Your destination for QA professionals</p>
        </div>
      </div>

      <div className="container">
        <section className="about-intro">
          <div className="about-content">
            <h2>Who We Are</h2>
            <p>
              BecomeQA is a comprehensive platform dedicated to providing resources and 
              training for quality assurance (QA) professionals, particularly in the realm 
              of test automation. We are committed to helping QA professionals enhance 
              their skills and advance their careers.
            </p>
            <p>
              Our mission is to make quality assurance education accessible, practical, 
              and effective. We believe in hands-on learning and real-world application 
              of testing concepts.
            </p>
          </div>
        </section>

        <section className="mission-vision">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To provide high-quality, practical training and resources that empower QA 
              professionals to excel in test automation and software quality assurance.
            </p>
          </div>
          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>
              To become the leading platform for QA education, recognized globally for 
              excellence in test automation training and resources.
            </p>
          </div>
        </section>

        <section className="values-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Quality First</h3>
              <p>We prioritize quality in everything we do, from content to training delivery.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community Focus</h3>
              <p>Building a supportive community of QA professionals learning together.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📚</div>
              <h3>Practical Learning</h3>
              <p>Emphasizing hands-on practice and real-world application of skills.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Staying updated with the latest tools, technologies, and best practices.</p>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <h2 className="section-title">Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Tutorials Available</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Countries Reached</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;


