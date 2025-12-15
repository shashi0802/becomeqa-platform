// Contentstack Configuration
export const CONTENTSTACK_CONFIG = {
  apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY || 'blt40b71ea54ec5498b',
  managementToken: import.meta.env.VITE_CONTENTSTACK_MANAGEMENT_TOKEN || 'cs35d6b09d42194c1b7c4cf541',
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


