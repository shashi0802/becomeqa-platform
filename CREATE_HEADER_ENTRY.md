# How to Create Header Entry in Contentstack

Since you can see the Header content type in your Contentstack application, follow these steps to create the entry:

## Step-by-Step Instructions

### Step 1: Navigate to Entries

1. In your Contentstack dashboard, click on **"Entries"** in the left sidebar
2. You should see **"Header"** in the list of content types
3. Click on **"Header"**

### Step 2: Create New Entry

1. Click the **"Create New Entry"** button (usually at the top right)
2. You'll see a form with the fields you defined in the content type

### Step 3: Fill in the Entry Data

Fill in the following information:

#### Site Title
- **Field**: `Site Title` (or `site_title`)
- **Value**: `BecomeQA`
- **Required**: Yes

#### Site Logo (Optional)
- **Field**: `Site Logo` (or `site_logo`)
- **Value**: Leave empty or add a logo URL if you have one
- **Required**: No

#### Navigation Links

Click **"Add Item"** or the **"+"** button to add navigation links. Add the following links:

**Link 1:**
- **Link Text**: `Home`
- **Link URL**: `/`
- **Is External Link**: `No` (unchecked)

**Link 2:**
- **Link Text**: `Tutorials`
- **Link URL**: `/tutorials`
- **Is External Link**: `No` (unchecked)

**Link 3:**
- **Link Text**: `Training`
- **Link URL**: `/training`
- **Is External Link**: `No` (unchecked)

**Link 4:**
- **Link Text**: `Demo Site`
- **Link URL**: `/demo`
- **Is External Link**: `No` (unchecked)

**Link 5:**
- **Link Text**: `About`
- **Link URL**: `/about`
- **Is External Link**: `No` (unchecked)

### Step 4: Save the Entry

1. Review all the information you entered
2. Click **"Save"** button
3. You'll see a confirmation message

### Step 5: Publish the Entry

**Important**: The entry must be published for it to be available via the API!

1. After saving, click the **"Publish"** button
2. Select the environment: **"production"** (or your default environment)
3. Select the locale: **"en-us"** (or your default locale)
4. Click **"Publish"**
5. Wait for the confirmation message

## Visual Guide

```
Entries > Header > Create New Entry

┌─────────────────────────────────────┐
│ Site Title: [BecomeQA          ]   │
│ Site Logo:  [                    ]   │
│                                     │
│ Navigation Links:                   │
│ ┌─────────────────────────────────┐ │
│ │ Link Text: [Home          ]    │ │
│ │ Link URL:  [/             ]    │ │
│ │ External:  [ ] No              │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ Link Text: [Tutorials     ]    │ │
│ │ Link URL:  [/tutorials     ]    │ │
│ │ External:  [ ] No              │ │
│ └─────────────────────────────────┘ │
│ ... (add more links)                │
│                                     │
│ [Save] [Publish]                    │
└─────────────────────────────────────┘
```

## Verify Entry is Created

After creating and publishing:

1. Go back to **Entries > Header**
2. You should see your header entry listed
3. The entry should show as **"Published"** status
4. Click on the entry to edit it anytime

## Testing

After publishing:

1. Go to your React application
2. The Header component should now fetch content from Contentstack
3. Check the browser console for any errors
4. The header should display "BecomeQA" as the title
5. Navigation links should match what you entered

## Troubleshooting

### Entry Not Showing in App

- ✅ Verify entry is **Published** (not just saved)
- ✅ Check the environment matches (production/staging)
- ✅ Verify locale matches (en-us)
- ✅ Check browser console for API errors
- ✅ Verify API credentials in your config

### Navigation Links Not Appearing

- ✅ Ensure `navigation_links` is a Group field
- ✅ Verify "Multiple" is enabled for the group
- ✅ Check field UIDs match: `link_text`, `link_url`, `is_external`
- ✅ Make sure you added items to the group (not just the group field)

### API Errors

- ✅ Check API key and management token are correct
- ✅ Verify content type UID is exactly `header`
- ✅ Ensure entry is published to the correct environment
- ✅ Check network tab in browser DevTools for API response

## Quick Checklist

- [ ] Content type "Header" exists in Contentstack
- [ ] Created new entry in Header content type
- [ ] Filled in Site Title: "BecomeQA"
- [ ] Added all 5 navigation links
- [ ] Saved the entry
- [ ] Published the entry to production environment
- [ ] Verified entry shows as "Published" in Contentstack
- [ ] Tested in React app - header loads from Contentstack

## Next Steps

Once the entry is created and published:

1. ✅ Your Header component will automatically fetch from Contentstack
2. ✅ You can edit the header anytime in Contentstack
3. ✅ Changes will reflect after republishing
4. ✅ No code changes needed - it's all managed in Contentstack!

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify API credentials in `src/config/contentstack.js`
3. Check Contentstack API documentation
4. Review the setup page at `/setup-contentstack` for automated creation


