// Contentstack Configuration
// IMPORTANT: Set these values in your .env file, never commit credentials!
export const CONTENTSTACK_CONFIG = {
  apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY || '',
  managementToken: import.meta.env.VITE_CONTENTSTACK_MANAGEMENT_TOKEN || '',
  deliveryToken: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN || '',
  environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT || 'development',
  apiUrl: import.meta.env.VITE_CONTENTSTACK_API_URL || 'https://cdn.contentstack.io/v3',
};

// Helper to get headers for Contentstack Management API
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
    'access_token': CONTENTSTACK_CONFIG.deliveryToken,
    'Content-Type': 'application/json',
  };
};


