# Header Content Type Setup Guide

This guide explains how to create and manage the Header content type in Contentstack.

## Quick Setup

### Option 1: Automated Setup (Recommended)

1. Navigate to `/setup-contentstack` in your application
2. Click "Create Header Content Type & Entry"
3. The system will automatically:
   - Create the "Header" content type
   - Create a default header entry
   - Publish the entry

### Option 2: Manual Setup

Follow the steps below to create the header content type manually in Contentstack.

## Manual Setup Steps

### Step 1: Create Content Type

1. Log in to your Contentstack dashboard
2. Go to **Content Types** in the left sidebar
3. Click **"Create New"** button
4. Fill in the details:
   - **Title**: `Header`
   - **UID**: `header` (auto-generated, but verify)
   - **Description**: `Site header with navigation links` (optional)
5. **Enable "Singleton"** option (important - there's only one header)
6. Click **"Save"**

### Step 2: Add Fields

Add the following fields to your Header content type:

#### Field 1: Site Title
- **Display Name**: `Site Title`
- **UID**: `site_title`
- **Field Type**: `Single Line Textbox`
- **Required**: Yes
- **Unique**: No

#### Field 2: Site Logo (Optional)
- **Display Name**: `Site Logo`
- **UID**: `site_logo`
- **Field Type**: `Single Line Textbox` (or File for image upload)
- **Required**: No
- **Unique**: No

#### Field 3: Navigation Links
- **Display Name**: `Navigation Links`
- **UID**: `navigation_links`
- **Field Type**: `Group`
- **Multiple**: Yes (to allow multiple navigation items)
- **Required**: No

Then, add these sub-fields to the Group:

**Sub-field 1: Link Text**
- **Display Name**: `Link Text`
- **UID**: `link_text`
- **Field Type**: `Single Line Textbox`
- **Required**: Yes

**Sub-field 2: Link URL**
- **Display Name**: `Link URL`
- **UID**: `link_url`
- **Field Type**: `Single Line Textbox`
- **Required**: Yes

**Sub-field 3: Is External Link**
- **Display Name**: `Is External Link`
- **UID**: `is_external`
- **Field Type**: `Boolean`
- **Required**: No
- **Default Value**: `false`

### Step 3: Save Content Type

1. Review all fields
2. Click **"Save"** to save the content type
3. You'll see a confirmation message

### Step 4: Create Header Entry

1. Go to **Entries** in the left sidebar
2. Select **"Header"** content type
3. Click **"Create New Entry"**
4. Fill in the entry:

   **Site Title**: `BecomeQA`

   **Navigation Links**: Click "Add Item" and add:
   - **Item 1**:
     - Link Text: `Home`
     - Link URL: `/`
     - Is External Link: `No`
   - **Item 2**:
     - Link Text: `Tutorials`
     - Link URL: `/tutorials`
     - Is External Link: `No`
   - **Item 3**:
     - Link Text: `Training`
     - Link URL: `/training`
     - Is External Link: `No`
   - **Item 4**:
     - Link Text: `Demo Site`
     - Link URL: `/demo`
     - Is External Link: `No`
   - **Item 5**:
     - Link Text: `About`
     - Link URL: `/about`
     - Is External Link: `No`

5. Click **"Save"**

### Step 5: Publish Entry

1. After saving, click **"Publish"** button
2. Select environment: **"production"** (or your default environment)
3. Select locale: **"en-us"** (or your default locale)
4. Click **"Publish"**

## Content Type Structure

```
Header (Singleton)
├── site_title (Text, Required)
├── site_logo (Text, Optional)
└── navigation_links (Group, Multiple)
    ├── link_text (Text, Required)
    ├── link_url (Text, Required)
    └── is_external (Boolean, Optional)
```

## Using Header in Your Application

### Option 1: Use HeaderFromContentstack Component

Replace the default Header component with the Contentstack version:

```jsx
// In Layout.jsx
import HeaderFromContentstack from './HeaderFromContentstack';

// Instead of
// import Header from './Header';
```

### Option 2: Update Existing Header

Update your existing Header component to fetch from Contentstack:

```jsx
import { useContentstackGlobal } from '../../hooks/useContentstack';
import { CONTENT_TYPES } from '../../config/contentTypes';

const Header = () => {
  const { data: headerData } = useContentstackGlobal(CONTENT_TYPES.HEADER);
  const siteTitle = headerData?.fields?.site_title || 'BecomeQA';
  const navLinks = headerData?.fields?.navigation_links || [];
  
  // Render header with Contentstack data
};
```

## Managing Header Content

After setup, you can manage the header content directly from Contentstack:

1. Go to **Entries** > **Header**
2. Edit the entry to:
   - Change site title
   - Add/remove navigation links
   - Update link URLs
3. **Save** and **Publish** changes
4. Changes will reflect on your site immediately

## Troubleshooting

### Content Type Not Found
- Verify the content type UID is exactly `header`
- Check that the content type is published
- Verify API credentials in your config

### Entry Not Loading
- Ensure the entry is published to the correct environment
- Check that locale matches (default: `en-us`)
- Verify entry is not in draft state

### Navigation Links Not Showing
- Check that `navigation_links` field is a Group type
- Verify "Multiple" is enabled for the group
- Ensure sub-fields are correctly named: `link_text`, `link_url`, `is_external`

## API Response Structure

When fetched from Contentstack, the header entry will have this structure:

```json
{
  "uid": "header_entry",
  "fields": {
    "site_title": "BecomeQA",
    "site_logo": "",
    "navigation_links": [
      {
        "link_text": "Home",
        "link_url": "/",
        "is_external": false
      },
      {
        "link_text": "Tutorials",
        "link_url": "/tutorials",
        "is_external": false
      }
    ]
  }
}
```

## Next Steps

1. ✅ Create header content type
2. ✅ Create header entry
3. ✅ Publish entry
4. Update Header component to use Contentstack
5. Test header rendering
6. Customize navigation links as needed


