import { Link } from 'react-router-dom';
import { useContentstackGlobal } from '../../hooks/useContentstack';
import { CONTENT_TYPES } from '../../config/contentTypes';
import { getFieldValue } from '../../utils/contentHelpers';
import './Footer.css';

const Footer = () => {
  // Fetch footer content from Contentstack
  const { data: footerData, loading, error } = useContentstackGlobal(CONTENT_TYPES.FOOTER);

  // Get values from Contentstack or use defaults
  const siteName = footerData ? getFieldValue(footerData, 'site_name') : 'BecomeQA';
  const siteTagline = footerData ? getFieldValue(footerData, 'site_tagline') : 'Your destination for QA professionals';
  const siteLinks = footerData ? getFieldValue(footerData, 'site_links') : [
    { link_text: 'Tutorials', link_url: '/tutorials' },
    { link_text: 'Training', link_url: '/training' },
    { link_text: 'Demo Website', link_url: '/demo' },
    { link_text: 'About', link_url: '/about' },
  ];
  const popularTutorials = footerData ? getFieldValue(footerData, 'popular_tutorials') : [
    { tutorial_name: 'Selenium', tutorial_url: '/tutorials/selenium' },
    { tutorial_name: 'Rest Assured', tutorial_url: '/tutorials/rest-assured' },
    { tutorial_name: 'Postman', tutorial_url: '/tutorials/postman' },
    { tutorial_name: 'Cucumber', tutorial_url: '/tutorials/cucumber' },
  ];
  const contactEmail = footerData ? getFieldValue(footerData, 'contact_email') : 'contact@becomeqa.com';
  const socialLinks = footerData ? getFieldValue(footerData, 'social_links') : [
    { platform_name: 'Facebook', platform_url: '#' },
    { platform_name: 'Twitter', platform_url: '#' },
    { platform_name: 'LinkedIn', platform_url: '#' },
    { platform_name: 'YouTube', platform_url: '#' },
  ];
  const copyrightText = footerData ? getFieldValue(footerData, 'copyright_text') : '© 2025 BecomeQA.com | All rights reserved';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{siteName}</h3>
            <p>{siteTagline}</p>
          </div>
          <div className="footer-section">
            <h4>Site Links</h4>
            <ul>
              {siteLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.link_url}>{link.link_text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Popular Tutorials</h4>
            <ul>
              {popularTutorials.map((tutorial, index) => (
                <li key={index}>
                  <Link to={tutorial.tutorial_url}>{tutorial.tutorial_name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: {contactEmail}</p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.platform_url} 
                  aria-label={social.platform_name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.platform_name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
