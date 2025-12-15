/**
 * Contentstack Content Type Configuration
 * Define your content type UIDs here for easy reference
 */

export const CONTENT_TYPES = {
  // Header
  HEADER: 'header',
  
  // Homepage content
  HOMEPAGE: 'homepage',
  HERO_SECTION: 'hero_section',
  
  // Tutorials
  TUTORIAL: 'tutorial',
  TUTORIAL_CATEGORY: 'tutorial_category',
  
  // Training
  TRAINING_PROGRAM: 'training_program',
  COURSE_MODULE: 'course_module',
  
  // Articles/Blog
  ARTICLE: 'article',
  BLOG_POST: 'blog_post',
  
  // Testimonials
  TESTIMONIAL: 'testimonial',
  
  // Global content
  SITE_SETTINGS: 'site_settings',
  NAVIGATION: 'navigation',
  FOOTER: 'footer',
  
  // Demo
  DEMO_FEATURE: 'demo_feature',
  
  // About
  ABOUT_PAGE: 'about_page',
  TEAM_MEMBER: 'team_member',
};

/**
 * Default query parameters for different environments
 */
export const DEFAULT_QUERY_PARAMS = {
  environment: 'production', // or 'development', 'staging'
  locale: 'en-us',
  include_count: true,
  include_global_field_schema: false,
};

/**
 * Helper to get content type UID
 * @param {string} type - Content type key
 * @returns {string} - Content type UID
 */
export const getContentType = (type) => {
  return CONTENT_TYPES[type] || type;
};

