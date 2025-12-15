import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BecomeQA</h3>
            <p>Your destination for QA professionals</p>
          </div>
          <div className="footer-section">
            <h4>Site Links</h4>
            <ul>
              <li><Link to="/tutorials">Tutorials</Link></li>
              <li><Link to="/training">Training</Link></li>
              <li><Link to="/demo">Demo Website</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Popular Tutorials</h4>
            <ul>
              <li><Link to="/tutorials/selenium">Selenium</Link></li>
              <li><Link to="/tutorials/rest-assured">Rest Assured</Link></li>
              <li><Link to="/tutorials/postman">Postman</Link></li>
              <li><Link to="/tutorials/cucumber">Cucumber</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: contact@becomeqa.com</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="YouTube">YouTube</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 BecomeQA.com | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


