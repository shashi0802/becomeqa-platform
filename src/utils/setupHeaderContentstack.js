import contentstackManagementService from '../services/contentstackManagementService';
import { HEADER_CONTENT_TYPE, DEFAULT_HEADER_ENTRY } from './headerContentType';

/**
 * Setup Header Content Type and Entry in Contentstack
 * This function creates the header content type and a default entry
 * 
 * Usage: Call this function to set up header content in Contentstack
 * Note: This should be run once to initialize the content type and entry
 */
export const setupHeaderContentstack = async () => {
  const results = {
    contentTypeCreated: false,
    contentTypeExists: false,
    entryCreated: false,
    entryPublished: false,
    errors: [],
  };

  try {
    // Step 1: Check if content type exists
    console.log('Checking if header content type exists...');
    try {
      const existingContentType = await contentstackManagementService.getContentType('header');
      console.log('Header content type already exists');
      results.contentTypeExists = true;
    } catch (error) {
      // Content type doesn't exist, create it
      console.log('Creating header content type...');
      try {
        const contentTypeResponse = await contentstackManagementService.createContentType(
          HEADER_CONTENT_TYPE
        );
        console.log('Header content type created successfully:', contentTypeResponse);
        results.contentTypeCreated = true;
      } catch (createError) {
        console.error('Error creating content type:', createError);
        results.errors.push({
          step: 'createContentType',
          error: createError.response?.data || createError.message,
        });
        throw createError;
      }
    }

    // Step 2: Create header entry
    console.log('Creating header entry...');
    try {
      const entryResponse = await contentstackManagementService.createEntry(
        'header',
        DEFAULT_HEADER_ENTRY
      );
      console.log('Header entry created successfully:', entryResponse);
      results.entryCreated = true;

      // Step 3: Publish the entry
      console.log('Publishing header entry...');
      try {
        const publishResponse = await contentstackManagementService.publishEntry(
          'header',
          entryResponse.entry?.uid || 'header_entry',
          {
            environments: ['production'],
            locales: ['en-us'],
          }
        );
        console.log('Header entry published successfully:', publishResponse);
        results.entryPublished = true;
      } catch (publishError) {
        console.error('Error publishing entry:', publishError);
        results.errors.push({
          step: 'publishEntry',
          error: publishError.response?.data || publishError.message,
        });
        // Don't throw - entry is created even if publish fails
      }
    } catch (entryError) {
      console.error('Error creating entry:', entryError);
      results.errors.push({
        step: 'createEntry',
        error: entryError.response?.data || entryError.message,
      });
      // Check if entry already exists
      if (entryError.response?.status === 422) {
        console.log('Entry might already exist. You can update it manually in Contentstack.');
      }
    }

    return results;
  } catch (error) {
    console.error('Setup failed:', error);
    results.errors.push({
      step: 'general',
      error: error.message,
    });
    return results;
  }
};

/**
 * Manual setup instructions
 */
export const getHeaderSetupInstructions = () => {
  return {
    manual: {
      contentType: {
        title: 'Create Header Content Type Manually',
        steps: [
          '1. Go to your Contentstack dashboard',
          '2. Navigate to Content Types',
          '3. Click "Create New"',
          '4. Set Title: "Header"',
          '5. Set UID: "header"',
          '6. Enable "Singleton" option (since there\'s only one header)',
          '7. Add the following fields:',
          '   - site_title (Text, Required)',
          '   - site_logo (Text, Optional)',
          '   - navigation_links (Group, Multiple)',
          '     - link_text (Text, Required)',
          '     - link_url (Text, Required)',
          '     - is_external (Boolean, Optional)',
          '8. Save the content type',
        ],
      },
      entry: {
        title: 'Create Header Entry Manually',
        steps: [
          '1. Go to Entries in Contentstack',
          '2. Select "Header" content type',
          '3. Create a new entry',
          '4. Fill in the fields:',
          '   - Site Title: "BecomeQA"',
          '   - Navigation Links:',
          '     * Home: /',
          '     * Tutorials: /tutorials',
          '     * Training: /training',
          '     * Demo Site: /demo',
          '     * About: /about',
          '5. Save and Publish the entry',
        ],
      },
    },
  };
};


