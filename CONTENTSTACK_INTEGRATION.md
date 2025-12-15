# Contentstack Integration Guide

This document explains how to use Contentstack CMS with the BecomeQA application.

## Overview

The application is integrated with Contentstack CMS, allowing you to manage all content through the Contentstack dashboard instead of hardcoding it in the React components.

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_CONTENTSTACK_API_KEY=blt40b71ea54ec5498b
VITE_CONTENTSTACK_MANAGEMENT_TOKEN=cs35d6b09d42194c1b7c4cf541
VITE_CONTENTSTACK_API_URL=https://api.contentstack.io/v3
```

**Note:** The `.env` file is gitignored. For production, set these as environment variables in your hosting platform.

### Current Configuration

The application is pre-configured with:
- **API Key**: `blt40b71ea54ec5498b`
- **Management Token**: `cs35d6b09d42194c1b7c4cf541`
- **API URL**: `https://api.contentstack.io/v3`

## Project Structure

```
src/
├── config/
│   ├── contentstack.js      # Contentstack API configuration
│   └── contentTypes.js       # Content type UIDs and helpers
├── services/
│   └── contentstackService.js # API service layer
├── hooks/
│   └── useContentstack.js    # React hooks for fetching content
├── utils/
│   └── contentHelpers.js     # Helper functions for content processing
└── components/
    ├── contentstack/         # Contentstack-specific components
    │   ├── ContentstackLoader.jsx
    │   └── ContentstackError.jsx
    └── examples/              # Example implementations
        └── TutorialsFromContentstack.jsx
```

## Usage

### 1. Using React Hooks

The easiest way to fetch content is using the custom hooks:

```jsx
import { useContentstackEntries } from '../hooks/useContentstack';
import { CONTENT_TYPES } from '../config/contentTypes';

const MyComponent = () => {
  const { data, loading, error } = useContentstackEntries(CONTENT_TYPES.TUTORIAL, {
    queryParams: {
      limit: 10,
      environment: 'production',
      locale: 'en-us',
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const tutorials = data?.entries || [];
  
  return (
    <div>
      {tutorials.map(tutorial => (
        <div key={tutorial.uid}>
          <h3>{tutorial.fields?.title || tutorial.title}</h3>
        </div>
      ))}
    </div>
  );
};
```

### 2. Available Hooks

#### `useContentstackEntries(contentType, options)`
Fetches multiple entries from a content type.

**Parameters:**
- `contentType` (string): Content type UID
- `options` (object): 
  - `queryParams`: Query parameters for the API
  - `dependencies`: Array of dependencies for useEffect

**Returns:**
- `data`: Response data from Contentstack
- `loading`: Boolean indicating loading state
- `error`: Error object if request failed

#### `useContentstackEntry(contentType, entryUid, options)`
Fetches a single entry by UID.

#### `useContentstackGlobal(contentType, options)`
Fetches singleton/global content (first entry).

### 3. Using the Service Directly

For more control, use the service directly:

```jsx
import { useEffect, useState } from 'react';
import contentstackService from '../services/contentstackService';
import { CONTENT_TYPES } from '../config/contentTypes';

const MyComponent = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await contentstackService.getEntries(
          CONTENT_TYPES.TUTORIAL,
          { limit: 10 }
        );
        setTutorials(response.entries || []);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorials();
  }, []);

  // Render tutorials...
};
```

## Content Types

Define your content types in `src/config/contentTypes.js`:

```javascript
export const CONTENT_TYPES = {
  TUTORIAL: 'tutorial',
  ARTICLE: 'article',
  TESTIMONIAL: 'testimonial',
  // Add more as needed
};
```

## Helper Functions

Use utility functions from `src/utils/contentHelpers.js`:

```jsx
import { getFieldValue, getImageUrl, formatDate } from '../utils/contentHelpers';

// Get nested field value
const title = getFieldValue(entry, 'title');

// Get image URL from asset reference
const imageUrl = getImageUrl(entry.fields?.image);

// Format date
const formattedDate = formatDate(entry.created_at, 'long');
```

## Setting Up Content in Contentstack

### 1. Create Content Types

In your Contentstack dashboard:
1. Go to **Content Types**
2. Create a new content type (e.g., "Tutorial")
3. Add fields:
   - Title (Single Line Textbox)
   - Description (Multi-line Textbox)
   - Icon (Single Line Textbox) or Image (File)
   - Slug (Single Line Textbox)
   - Category (Select)
   - etc.

### 2. Create Entries

1. Go to **Entries**
2. Select your content type
3. Create entries with your content
4. Publish entries to make them available via API

### 3. Set Up Environments

1. Go to **Environments**
2. Create environments (development, staging, production)
3. Publish content to the appropriate environment

## Example: Fetching Tutorials

```jsx
import { useContentstackEntries } from '../hooks/useContentstack';
import { CONTENT_TYPES } from '../config/contentTypes';
import ContentstackLoader from '../components/contentstack/ContentstackLoader';
import ContentstackError from '../components/contentstack/ContentstackError';
import { getFieldValue } from '../utils/contentHelpers';

const TutorialsList = () => {
  const { data, loading, error } = useContentstackEntries(CONTENT_TYPES.TUTORIAL);

  if (loading) return <ContentstackLoader />;
  if (error) return <ContentstackError error={error} />;

  const tutorials = data?.entries || [];

  return (
    <div>
      {tutorials.map(tutorial => {
        const title = getFieldValue(tutorial, 'title');
        const description = getFieldValue(tutorial, 'description');
        
        return (
          <div key={tutorial.uid}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};
```

## API Methods

The `contentstackService` provides these methods:

- `getEntries(contentType, queryParams)` - Get multiple entries
- `getEntry(contentType, entryUid, queryParams)` - Get single entry
- `getContentTypes()` - Get all content types
- `getAssets(queryParams)` - Get assets
- `searchEntries(contentType, query, queryParams)` - Search entries
- `getGlobalContent(contentType, queryParams)` - Get singleton content

## Error Handling

Always handle loading and error states:

```jsx
const { data, loading, error } = useContentstackEntries(CONTENT_TYPES.TUTORIAL);

if (loading) {
  return <ContentstackLoader message="Loading tutorials..." />;
}

if (error) {
  return <ContentstackError error={error} message="Failed to load tutorials" />;
}

// Render content
```

## Best Practices

1. **Use Content Types Config**: Always reference content types from `CONTENT_TYPES` constant
2. **Handle Loading States**: Show loading indicators while fetching
3. **Handle Errors**: Display user-friendly error messages
4. **Cache Content**: Consider implementing caching for better performance
5. **Environment Variables**: Never commit API keys to version control
6. **Type Safety**: Consider adding TypeScript for better type safety

## Troubleshooting

### Content Not Loading

1. Check API credentials in `.env` file
2. Verify content is published in Contentstack
3. Check browser console for errors
4. Verify content type UID matches Contentstack
5. Check network tab for API request/response

### Authentication Errors

- Verify API key and management token are correct
- Check if token has proper permissions
- Ensure environment is set correctly

### Empty Results

- Verify entries are published
- Check environment setting (production/staging)
- Verify locale setting matches content locale

## Next Steps

1. Set up your content types in Contentstack
2. Create and publish content
3. Update components to use Contentstack hooks
4. Test with different environments
5. Implement caching if needed
6. Add error boundaries for better error handling

## Resources

- [Contentstack API Documentation](https://www.contentstack.com/docs/developers/apis/content-delivery-api/)
- [Contentstack JavaScript SDK](https://www.contentstack.com/docs/developers/create-apps/javascript/)
- [Contentstack Developer Hub](https://www.contentstack.com/docs/)


