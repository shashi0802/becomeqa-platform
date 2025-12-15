import './ContentstackLoader.css';

/**
 * Loading component for Contentstack content
 */
const ContentstackLoader = ({ message = 'Loading content...' }) => {
  return (
    <div className="contentstack-loader">
      <div className="loader-spinner"></div>
      <p>{message}</p>
    </div>
  );
};

export default ContentstackLoader;


