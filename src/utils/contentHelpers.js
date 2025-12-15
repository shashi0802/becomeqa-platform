/**
 * Content Helper Utilities
 * Functions to help process and format Contentstack content
 */

/**
 * Get rich text content as plain text
 * @param {object} richText - Rich text object from Contentstack
 * @returns {string} - Plain text
 */
export const getRichTextPlain = (richText) => {
  if (!richText) return '';
  if (typeof richText === 'string') return richText;
  
  // If it's a rich text object, extract text from nodes
  if (richText.children) {
    return richText.children
      .map(child => {
        if (typeof child === 'string') return child;
        if (child.text) return child.text;
        if (child.children) return getRichTextPlain(child);
        return '';
      })
      .join(' ');
  }
  
  return '';
};

/**
 * Get image URL from Contentstack asset reference
 * @param {object} asset - Asset object from Contentstack
 * @returns {string} - Image URL
 */
export const getImageUrl = (asset) => {
  if (!asset) return '';
  if (typeof asset === 'string') return asset;
  if (asset.url) return asset.url;
  if (asset.uid) {
    // If it's just a UID reference, you might need to fetch the asset
    // For now, return empty or construct URL if you know the pattern
    return '';
  }
  return '';
};

/**
 * Format date from Contentstack
 * @param {string} dateString - Date string from Contentstack
 * @param {string} format - Date format (optional)
 * @returns {string} - Formatted date
 */
export const formatDate = (dateString, format = 'long') => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const options = {
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    time: { hour: '2-digit', minute: '2-digit' },
  };
  
  return date.toLocaleDateString('en-US', options[format] || options.long);
};

/**
 * Get nested field value from Contentstack entry
 * @param {object} entry - Contentstack entry object
 * @param {string} fieldPath - Dot-separated field path (e.g., 'title' or 'author.name')
 * @returns {any} - Field value
 */
export const getFieldValue = (entry, fieldPath) => {
  if (!entry || !fieldPath) return null;
  
  const fields = entry.fields || entry;
  const pathParts = fieldPath.split('.');
  
  let value = fields;
  for (const part of pathParts) {
    if (value && typeof value === 'object' && part in value) {
      value = value[part];
    } else {
      return null;
    }
  }
  
  return value;
};

/**
 * Process Contentstack entry for display
 * @param {object} entry - Raw Contentstack entry
 * @returns {object} - Processed entry with common fields
 */
export const processEntry = (entry) => {
  if (!entry) return null;
  
  return {
    uid: entry.uid,
    title: entry.title || entry.fields?.title || '',
    description: entry.description || entry.fields?.description || '',
    content: entry.fields || entry,
    createdAt: entry.created_at,
    updatedAt: entry.updated_at,
  };
};

/**
 * Filter entries by field value
 * @param {array} entries - Array of entries
 * @param {string} field - Field name
 * @param {any} value - Value to match
 * @returns {array} - Filtered entries
 */
export const filterEntriesByField = (entries, field, value) => {
  if (!Array.isArray(entries)) return [];
  
  return entries.filter(entry => {
    const fieldValue = getFieldValue(entry, field);
    return fieldValue === value || 
           (typeof fieldValue === 'string' && fieldValue.toLowerCase() === value?.toLowerCase());
  });
};


