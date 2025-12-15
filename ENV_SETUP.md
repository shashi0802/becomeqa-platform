# Environment Variables Setup

Since `.env` files are gitignored, you need to set up environment variables manually.

## Option 1: Create .env file manually

Create a `.env` file in the root directory (`becomeqa/.env`) with:

```env
VITE_CONTENTSTACK_API_KEY=blt40b71ea54ec5498b
VITE_CONTENTSTACK_MANAGEMENT_TOKEN=cs35d6b09d42194c1b7c4cf541
VITE_CONTENTSTACK_API_URL=https://api.contentstack.io/v3
```

## Option 2: Use default values

The application has default values configured in `src/config/contentstack.js`, so it will work without environment variables. However, it's recommended to use environment variables for production.

## Option 3: Update config directly

You can directly update the values in `src/config/contentstack.js`:

```javascript
export const CONTENTSTACK_CONFIG = {
  apiKey: 'blt40b71ea54ec5498b',
  managementToken: 'cs35d6b09d42194c1b7c4cf541',
  apiUrl: 'https://api.contentstack.io/v3',
};
```

## For Production

Set these as environment variables in your hosting platform:
- Vercel: Add in Project Settings > Environment Variables
- Netlify: Add in Site Settings > Environment Variables
- Other platforms: Check their documentation for environment variable setup


