import { Link } from 'react-router-dom';
import { useContentstackGlobal } from '../../hooks/useContentstack';
import { CONTENT_TYPES } from '../../config/contentTypes';
import { getFieldValue } from '../../utils/contentHelpers';
import './Header.css';

const Header = () => {
  // Fetch header content from Contentstack
  const { data: headerData, loading, error } = useContentstackGlobal(CONTENT_TYPES.HEADER);

  // Get site title from Contentstack or use default
  const siteTitle = headerData 
    ? (getFieldValue(headerData, 'site_title') || getFieldValue(headerData, 'title') || 'BecomeQA')
    : 'BecomeQA';

  // Get navigation links from Contentstack or use defaults
  const navigationLinks = headerData 
    ? (getFieldValue(headerData, 'navigation_links') || [])
    : [
        { link_text: 'Home', link_url: '/', is_external: false },
        { link_text: 'Tutorials', link_url: '/tutorials', is_external: false },
        { link_text: 'Training', link_url: '/training', is_external: false },
        { link_text: 'Demo Site', link_url: '/demo', is_external: false },
        { link_text: 'About', link_url: '/about', is_external: false },
      ];

  // Render navigation links
  const renderNavLinks = () => {
    return navigationLinks.map((link, index) => {
      const linkText = link.link_text || link.text || 'Link';
      const linkUrl = link.link_url || link.url || '/';
      const isExternal = link.is_external || link.external || false;

      if (isExternal) {
        return (
          <a
            key={index}
            href={linkUrl}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkText}
          </a>
        );
      }

      return (
        <Link key={index} to={linkUrl} className="nav-link">
          {linkText}
        </Link>
      );
    });
  };

  // Get logo from Contentstack or use default
  const siteLogo = headerData 
    ? (getFieldValue(headerData, 'site_logo') || '')
    : '';

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" title={siteTitle}>
            <img 
              src={siteLogo || "/BecomeQA.png"} 
              alt={siteTitle} 
              className="logo-image"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.src = "/BecomeQA.png";
              }}
            />
          </Link>
          <nav className="nav">
            {renderNavLinks()}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
