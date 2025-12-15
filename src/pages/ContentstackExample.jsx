import { useContentstackEntries, useContentstackGlobal } from '../hooks/useContentstack';
import { CONTENT_TYPES } from '../config/contentTypes';
import ContentstackLoader from '../components/contentstack/ContentstackLoader';
import ContentstackError from '../components/contentstack/ContentstackError';
import { getFieldValue, getImageUrl } from '../utils/contentHelpers';
import './ContentstackExample.css';

/**
 * Example page demonstrating Contentstack integration
 * This page shows how to fetch and display content from Contentstack
 */
const ContentstackExample = () => {
  // Example 1: Fetching multiple entries
  const { 
    data: tutorialsData, 
    loading: tutorialsLoading, 
    error: tutorialsError 
  } = useContentstackEntries(CONTENT_TYPES.TUTORIAL, {
    queryParams: {
      limit: 8,
    },
  });

  // Example 2: Fetching global/singleton content
  const { 
    data: siteSettings, 
    loading: settingsLoading, 
    error: settingsError 
  } = useContentstackGlobal(CONTENT_TYPES.SITE_SETTINGS);

  return (
    <div className="contentstack-example-page">
      <div className="page-header">
        <div className="container">
          <h1>Contentstack Integration Example</h1>
          <p>This page demonstrates how to fetch and display content from Contentstack CMS</p>
        </div>
      </div>

      <div className="container">
        {/* Site Settings Example */}
        <section className="example-section">
          <h2>Site Settings (Global Content)</h2>
          {settingsLoading && <ContentstackLoader message="Loading site settings..." />}
          {settingsError && <ContentstackError error={settingsError} message="Failed to load site settings" />}
          {siteSettings && (
            <div className="settings-card">
              <h3>Site Information</h3>
              <p><strong>Title:</strong> {getFieldValue(siteSettings, 'site_title') || 'N/A'}</p>
              <p><strong>Description:</strong> {getFieldValue(siteSettings, 'description') || 'N/A'}</p>
              <p><strong>Contact Email:</strong> {getFieldValue(siteSettings, 'contact_email') || 'N/A'}</p>
              <pre className="json-preview">
                {JSON.stringify(siteSettings, null, 2)}
              </pre>
            </div>
          )}
          {!siteSettings && !settingsLoading && !settingsError && (
            <p className="no-content">No site settings found. Create a "site_settings" content type in Contentstack.</p>
          )}
        </section>

        {/* Tutorials Example */}
        <section className="example-section">
          <h2>Tutorials from Contentstack</h2>
          {tutorialsLoading && <ContentstackLoader message="Loading tutorials..." />}
          {tutorialsError && <ContentstackError error={tutorialsError} message="Failed to load tutorials" />}
          
          {tutorialsData && tutorialsData.entries && tutorialsData.entries.length > 0 ? (
            <div className="tutorials-grid">
              {tutorialsData.entries.map((tutorial) => {
                const title = getFieldValue(tutorial, 'title') || tutorial.title || 'Untitled';
                const description = getFieldValue(tutorial, 'description') || tutorial.description || '';
                const icon = getFieldValue(tutorial, 'icon') || '📚';
                const image = getFieldValue(tutorial, 'image');
                const imageUrl = image ? getImageUrl(image) : null;
                const category = getFieldValue(tutorial, 'category') || 'General';

                return (
                  <div key={tutorial.uid} className="tutorial-card">
                    {imageUrl && (
                      <div className="tutorial-image">
                        <img src={imageUrl} alt={title} />
                      </div>
                    )}
                    <div className="tutorial-icon">{icon}</div>
                    <div className="tutorial-category">{category}</div>
                    <h3>{title}</h3>
                    {description && <p>{description}</p>}
                    <div className="tutorial-meta">
                      <small>UID: {tutorial.uid}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            !tutorialsLoading && !tutorialsError && (
              <div className="no-content">
                <p>No tutorials found in Contentstack.</p>
                <p>To see content here:</p>
                <ol>
                  <li>Create a "tutorial" content type in Contentstack</li>
                  <li>Add fields: title, description, icon, category</li>
                  <li>Create and publish some tutorial entries</li>
                  <li>Refresh this page</li>
                </ol>
              </div>
            )
          )}
        </section>

        {/* API Response Preview */}
        {tutorialsData && (
          <section className="example-section">
            <h2>Raw API Response</h2>
            <details className="api-response">
              <summary>Click to view raw API response</summary>
              <pre className="json-preview">
                {JSON.stringify(tutorialsData, null, 2)}
              </pre>
            </details>
          </section>
        )}

        {/* Instructions */}
        <section className="example-section instructions">
          <h2>How to Use Contentstack</h2>
          <div className="instructions-content">
            <h3>1. Set Up Content Types</h3>
            <p>In your Contentstack dashboard, create content types for your content:</p>
            <ul>
              <li><strong>tutorial</strong> - For tutorials</li>
              <li><strong>article</strong> - For blog articles</li>
              <li><strong>testimonial</strong> - For testimonials</li>
              <li><strong>site_settings</strong> - For global site settings</li>
            </ul>

            <h3>2. Create Entries</h3>
            <p>Create entries in Contentstack and publish them to make them available via API.</p>

            <h3>3. Use in Components</h3>
            <pre className="code-example">
{`import { useContentstackEntries } from '../hooks/useContentstack';
import { CONTENT_TYPES } from '../config/contentTypes';

const MyComponent = () => {
  const { data, loading, error } = useContentstackEntries(
    CONTENT_TYPES.TUTORIAL
  );
  
  // Handle loading, error, and render data
};`}
            </pre>

            <h3>4. Check Configuration</h3>
            <p>Verify your API credentials in <code>src/config/contentstack.js</code> or environment variables.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContentstackExample;


