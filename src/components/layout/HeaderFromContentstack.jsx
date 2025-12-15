import { Link } from 'react-router-dom';
import { useContentstackGlobal } from '../../hooks/useContentstack';
import { CONTENT_TYPES } from '../../config/contentTypes';
import { getFieldValue } from '../../utils/contentHelpers';
import ContentstackLoader from '../contentstack/ContentstackLoader';
import ContentstackError from '../contentstack/ContentstackError';
import './Header.css';

/**
 * Header component that fetches content from Contentstack
 * This is an alternative to the static Header component
 */
const HeaderFromContentstack = () => {
  const { data: headerData, loading, error } = useContentstackGlobal(CONTENT_TYPES.HEADER);

  // Fallback to default values if Contentstack is not available
  const siteTitle = headerData 
    ? (getFieldValue(headerData, 'site_title') || getFieldValue(headerData, 'title') || 'BecomeQA')
    : 'BecomeQA';

  const navigationLinks = headerData 
    ? (getFieldValue(headerData, 'navigation_links') || [])
    : [
        { link_text: 'Home', link_url: '/', is_external: false },
        { link_text: 'Tutorials', link_url: '/tutorials', is_external: false },
        { link_text: 'Training', link_url: '/training', is_external: false },
        { link_text: 'Demo Site', link_url: '/demo', is_external: false },
        { link_text: 'About', link_url: '/about', is_external: false },
      ];

  // Show loading state (optional - you might want to show default header instead)
  if (loading) {
    return (
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <h1>{siteTitle}</h1>
            </Link>
            <nav className="nav">
              {navigationLinks.map((link, index) => (
                <Link key={index} to={link.link_url} className="nav-link">
                  {link.link_text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    );
  }

  // Show error state with fallback
  if (error) {
    console.warn('Failed to load header from Contentstack, using default:', error);
    // Fall through to render default header
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>{siteTitle}</h1>
          </Link>
          <nav className="nav">
            {navigationLinks.map((link, index) => {
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
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderFromContentstack;


