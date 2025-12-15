/**
 * Header Content Type Definition
 * This defines the structure for the header content type in Contentstack
 */

export const HEADER_CONTENT_TYPE = {
  content_type: {
    title: 'Header',
    uid: 'header',
    schema: [
      {
        display_name: 'Site Logo',
        uid: 'site_logo',
        field_metadata: {
          _default: true,
        },
        mandatory: false,
        unique: false,
        field_type: 'text',
        multiple: false,
        non_localizable: false,
      },
      {
        display_name: 'Site Title',
        uid: 'site_title',
        field_metadata: {
          _default: true,
        },
        mandatory: true,
        unique: false,
        field_type: 'text',
        multiple: false,
        non_localizable: false,
      },
      {
        display_name: 'Navigation Links',
        uid: 'navigation_links',
        field_metadata: {
          _default: true,
        },
        mandatory: false,
        unique: false,
        field_type: 'group',
        multiple: true,
        non_localizable: false,
        schema: [
          {
            display_name: 'Link Text',
            uid: 'link_text',
            field_metadata: {
              _default: true,
            },
            mandatory: true,
            unique: false,
            field_type: 'text',
            multiple: false,
            non_localizable: false,
          },
          {
            display_name: 'Link URL',
            uid: 'link_url',
            field_metadata: {
              _default: true,
            },
            mandatory: true,
            unique: false,
            field_type: 'text',
            multiple: false,
            non_localizable: false,
          },
          {
            display_name: 'Is External Link',
            uid: 'is_external',
            field_metadata: {
              _default: true,
            },
            mandatory: false,
            unique: false,
            field_type: 'boolean',
            multiple: false,
            non_localizable: false,
          },
        ],
      },
    ],
    options: {
      is_page: false,
      singleton: true,
      title: 'site_title',
      sub_title: [],
      url_pattern: '/',
      url_prefix: '/',
    },
    last_activity: {},
    maintain_revisions: true,
    uid: 'header',
    created_by: 'system',
    updated_by: 'system',
  },
};

/**
 * Default Header Entry Data
 */
export const DEFAULT_HEADER_ENTRY = {
  entry: {
    locale: 'en-us',
    uid: 'header_entry',
    ACL: {},
    _version: 1,
    created_by: 'system',
    updated_by: 'system',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    site_title: 'BecomeQA',
    site_logo: '',
    navigation_links: [
      {
        link_text: 'Home',
        link_url: '/',
        is_external: false,
      },
      {
        link_text: 'Tutorials',
        link_url: '/tutorials',
        is_external: false,
      },
      {
        link_text: 'Training',
        link_url: '/training',
        is_external: false,
      },
      {
        link_text: 'Demo Site',
        link_url: '/demo',
        is_external: false,
      },
      {
        link_text: 'About',
        link_url: '/about',
        is_external: false,
      },
    ],
  },
};


