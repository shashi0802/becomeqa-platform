import { useContentstackEntries } from '../../hooks/useContentstack';
import ContentstackLoader from '../contentstack/ContentstackLoader';
import ContentstackError from '../contentstack/ContentstackError';
import { CONTENT_TYPES } from '../../config/contentTypes';
import { getFieldValue, getImageUrl } from '../../utils/contentHelpers';
import './TutorialsFromContentstack.css';

/**
 * Example component showing how to fetch and display tutorials from Contentstack
 * This is a reference implementation - customize based on your content structure
 */
const TutorialsFromContentstack = () => {
  const { data, loading, error } = useContentstackEntries(CONTENT_TYPES.TUTORIAL, {
    queryParams: {
      limit: 10,
    },
  });

  if (loading) {
    return <ContentstackLoader message="Loading tutorials from Contentstack..." />;
  }

  if (error) {
    return <ContentstackError error={error} message="Failed to load tutorials" />;
  }

  // Extract entries from Contentstack response
  const tutorials = data?.entries || [];

  if (tutorials.length === 0) {
    return (
      <div className="no-content">
        <p>No tutorials found in Contentstack. Please add content in your Contentstack space.</p>
      </div>
    );
  }

  return (
    <div className="tutorials-contentstack">
      <h2>Tutorials from Contentstack</h2>
      <div className="tutorials-grid">
        {tutorials.map((tutorial) => {
          const title = getFieldValue(tutorial, 'title') || tutorial.title || 'Untitled';
          const description = getFieldValue(tutorial, 'description') || tutorial.description || '';
          const icon = getFieldValue(tutorial, 'icon') || '📚';
          const image = getFieldValue(tutorial, 'image');
          const imageUrl = image ? getImageUrl(image) : null;
          const slug = getFieldValue(tutorial, 'slug') || tutorial.uid;

          return (
            <div key={tutorial.uid} className="tutorial-card">
              {imageUrl && (
                <div className="tutorial-image">
                  <img src={imageUrl} alt={title} />
                </div>
              )}
              <div className="tutorial-icon">{icon}</div>
              <h3>{title}</h3>
              {description && <p>{description}</p>}
              <a href={`/tutorials/${slug}`} className="tutorial-link">
                Learn More →
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TutorialsFromContentstack;


