import { useState } from 'react';
import { setupHeaderContentstack, getHeaderSetupInstructions } from '../utils/setupHeaderContentstack';
import './SetupContentstack.css';

/**
 * Setup Page for Contentstack Content Types
 * This page allows you to create content types and entries programmatically
 */
const SetupContentstack = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleSetupHeader = async () => {
    setLoading(true);
    setResults(null);

    try {
      const setupResults = await setupHeaderContentstack();
      setResults(setupResults);
    } catch (error) {
      setResults({
        errors: [{ step: 'general', error: error.message }],
      });
    } finally {
      setLoading(false);
    }
  };

  const instructions = getHeaderSetupInstructions();

  return (
    <div className="setup-contentstack-page">
      <div className="page-header">
        <div className="container">
          <h1>Contentstack Setup</h1>
          <p>Create content types and entries in Contentstack</p>
        </div>
      </div>

      <div className="container">
        <section className="setup-section">
          <h2>Header Content Type Setup</h2>
          <p>
            This will create a "Header" content type and a default header entry in your Contentstack space.
            The header content type includes site title, logo, and navigation links.
          </p>

          <div className="setup-actions">
            <button
              onClick={handleSetupHeader}
              disabled={loading}
              className="btn btn-primary btn-large"
            >
              {loading ? 'Setting up...' : 'Create Header Content Type & Entry'}
            </button>

            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="btn btn-secondary"
            >
              {showInstructions ? 'Hide' : 'Show'} Manual Instructions
            </button>
          </div>

          {loading && (
            <div className="loading-message">
              <div className="spinner"></div>
              <p>Creating content type and entry in Contentstack...</p>
            </div>
          )}

          {results && (
            <div className={`results ${results.errors.length > 0 ? 'has-errors' : 'success'}`}>
              <h3>Setup Results</h3>
              
              <div className="result-items">
                <div className="result-item">
                  <span className="result-label">Content Type Created:</span>
                  <span className={`result-value ${results.contentTypeCreated ? 'success' : results.contentTypeExists ? 'exists' : 'failed'}`}>
                    {results.contentTypeCreated ? '✓ Yes' : results.contentTypeExists ? '⚠ Already Exists' : '✗ No'}
                  </span>
                </div>
                
                <div className="result-item">
                  <span className="result-label">Entry Created:</span>
                  <span className={`result-value ${results.entryCreated ? 'success' : 'failed'}`}>
                    {results.entryCreated ? '✓ Yes' : '✗ No'}
                  </span>
                </div>
                
                <div className="result-item">
                  <span className="result-label">Entry Published:</span>
                  <span className={`result-value ${results.entryPublished ? 'success' : 'failed'}`}>
                    {results.entryPublished ? '✓ Yes' : '✗ No'}
                  </span>
                </div>
              </div>

              {results.errors.length > 0 && (
                <div className="errors">
                  <h4>Errors:</h4>
                  {results.errors.map((error, index) => (
                    <div key={index} className="error-item">
                      <strong>Step: {error.step}</strong>
                      <pre>{JSON.stringify(error.error, null, 2)}</pre>
                    </div>
                  ))}
                </div>
              )}

              {results.errors.length === 0 && (
                <div className="success-message">
                  <p>✓ Header content type and entry created successfully!</p>
                  <p>You can now manage the header content from your Contentstack dashboard.</p>
                </div>
              )}
            </div>
          )}

          {showInstructions && (
            <div className="instructions">
              <h3>Manual Setup Instructions</h3>
              
              <div className="instruction-section">
                <h4>{instructions.manual.contentType.title}</h4>
                <ol>
                  {instructions.manual.contentType.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="instruction-section">
                <h4>{instructions.manual.entry.title}</h4>
                <ol>
                  {instructions.manual.entry.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </section>

        <section className="info-section">
          <h2>What Gets Created?</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Content Type: Header</h3>
              <ul>
                <li><strong>UID:</strong> header</li>
                <li><strong>Type:</strong> Singleton (one entry only)</li>
                <li><strong>Fields:</strong></li>
                <li>  - site_title (Text)</li>
                <li>  - site_logo (Text)</li>
                <li>  - navigation_links (Group, Multiple)</li>
                <li>    • link_text</li>
                <li>    • link_url</li>
                <li>    • is_external</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Default Entry</h3>
              <ul>
                <li><strong>Site Title:</strong> BecomeQA</li>
                <li><strong>Navigation Links:</strong></li>
                <li>  - Home (/)</li>
                <li>  - Tutorials (/tutorials)</li>
                <li>  - Training (/training)</li>
                <li>  - Demo Site (/demo)</li>
                <li>  - About (/about)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="next-steps">
          <h2>Next Steps</h2>
          <ol>
            <li>After creating the content type and entry, go to your Contentstack dashboard</li>
            <li>Edit the header entry to customize navigation links</li>
            <li>Update your Header component to fetch content from Contentstack</li>
            <li>Test the integration by viewing the header on your site</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default SetupContentstack;


