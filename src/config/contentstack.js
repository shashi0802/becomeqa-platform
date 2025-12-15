// Contentstack Configuration
// IMPORTANT: Set these values in your .env file, never commit credentials!
export const CONTENTSTACK_CONFIG = {
  apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY || '',
  managementToken: import.meta.env.VITE_CONTENTSTACK_MANAGEMENT_TOKEN || '',
  apiUrl: import.meta.env.VITE_CONTENTSTACK_API_URL || 'https://api.contentstack.io/v3',
};

// Helper to get headers for Contentstack API
export const getContentstackHeaders = () => {
  return {
    'api_key': CONTENTSTACK_CONFIG.apiKey,
    'authorization': CONTENTSTACK_CONFIG.managementToken,
    'Content-Type': 'application/json',
  };
};

// Helper to get delivery API headers (for fetching published content)
export const getDeliveryHeaders = () => {
  return {
    'api_key': CONTENTSTACK_CONFIG.apiKey,
    'access_token': CONTENTSTACK_CONFIG.managementToken, // For delivery API, this might be different
    'Content-Type': 'application/json',
  };
};


