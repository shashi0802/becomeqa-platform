import { useContentstackGlobal } from '../hooks/useContentstack';
import { CONTENT_TYPES } from '../config/contentTypes';
import { getFieldValue } from '../utils/contentHelpers';
import './About.css';

const About = () => {
  // Fetch about page content from Contentstack
  const { data: aboutData, loading, error } = useContentstackGlobal(CONTENT_TYPES.ABOUT_PAGE);

  // Default values
  const defaultValues = [
    { icon: '🎯', title: 'Quality First', description: 'We prioritize quality in everything we do, from content to training delivery.' },
    { icon: '🤝', title: 'Community Focus', description: 'Building a supportive community of QA professionals learning together.' },
    { icon: '📚', title: 'Practical Learning', description: 'Emphasizing hands-on practice and real-world application of skills.' },
    { icon: '🚀', title: 'Innovation', description: 'Staying updated with the latest tools, technologies, and best practices.' },
  ];

  const defaultStats = [
    { number: '1000+', label: 'Students Trained' },
    { number: '50+', label: 'Tutorials Available' },
    { number: '20+', label: 'Countries Reached' },
    { number: '95%', label: 'Satisfaction Rate' },
  ];

  // Get values from Contentstack or use defaults
  const pageTitle = aboutData ? getFieldValue(aboutData, 'page_title') : 'About BecomeQA';
  const pageSubtitle = aboutData ? getFieldValue(aboutData, 'page_subtitle') : 'Your destination for QA professionals';
  
  const introTitle = aboutData ? getFieldValue(aboutData, 'intro_title') : 'Who We Are';
  const introParagraph1 = aboutData ? getFieldValue(aboutData, 'intro_paragraph_1') : 'BecomeQA is a comprehensive platform dedicated to providing resources and training for quality assurance (QA) professionals, particularly in the realm of test automation. We are committed to helping QA professionals enhance their skills and advance their careers.';
  const introParagraph2 = aboutData ? getFieldValue(aboutData, 'intro_paragraph_2') : 'Our mission is to make quality assurance education accessible, practical, and effective. We believe in hands-on learning and real-world application of testing concepts.';
  
  const missionTitle = aboutData ? getFieldValue(aboutData, 'mission_title') : 'Our Mission';
  const missionDescription = aboutData ? getFieldValue(aboutData, 'mission_description') : 'To provide high-quality, practical training and resources that empower QA professionals to excel in test automation and software quality assurance.';
  
  const visionTitle = aboutData ? getFieldValue(aboutData, 'vision_title') : 'Our Vision';
  const visionDescription = aboutData ? getFieldValue(aboutData, 'vision_description') : 'To become the leading platform for QA education, recognized globally for excellence in test automation training and resources.';
  
  const valuesTitle = aboutData ? getFieldValue(aboutData, 'values_title') : 'Our Values';
  const values = aboutData ? (getFieldValue(aboutData, 'values') || defaultValues) : defaultValues;
  
  const statsTitle = aboutData ? getFieldValue(aboutData, 'stats_title') : 'Our Impact';
  const stats = aboutData ? (getFieldValue(aboutData, 'stats') || defaultStats) : defaultStats;

  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>{pageTitle}</h1>
          <p>{pageSubtitle}</p>
        </div>
      </div>

      <div className="container">
        <section className="about-intro">
          <div className="about-content">
            <h2>{introTitle}</h2>
            <p>{introParagraph1}</p>
            <p>{introParagraph2}</p>
          </div>
        </section>

        <section className="mission-vision">
          <div className="mission-card">
            <h3>{missionTitle}</h3>
            <p>{missionDescription}</p>
          </div>
          <div className="vision-card">
            <h3>{visionTitle}</h3>
            <p>{visionDescription}</p>
          </div>
        </section>

        <section className="values-section">
          <h2 className="section-title">{valuesTitle}</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-section">
          <h2 className="section-title">{statsTitle}</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
