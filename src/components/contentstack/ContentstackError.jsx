import './ContentstackError.css';

/**
 * Error component for Contentstack content loading failures
 */
const ContentstackError = ({ error, message = 'Failed to load content' }) => {
  return (
    <div className="contentstack-error">
      <div className="error-icon">⚠️</div>
      <h3>{message}</h3>
      {error && (
        <p className="error-details">
          {error.message || 'An error occurred while fetching content from Contentstack.'}
        </p>
      )}
      <p className="error-note">
        Please check your Contentstack configuration or try again later.
      </p>
    </div>
  );
};

export default ContentstackError;


