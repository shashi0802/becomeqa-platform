import axios from 'axios';
import { CONTENTSTACK_CONFIG, getContentstackHeaders, getDeliveryHeaders } from '../config/contentstack';

const API_BASE_URL = CONTENTSTACK_CONFIG.apiUrl;

/**
 * Contentstack Service
 * Handles all API interactions with Contentstack CMS
 */
class ContentstackService {
  /**
   * Get entries from a content type
   * @param {string} contentType - Content type UID
   * @param {object} queryParams - Query parameters (environment, locale, etc.)
   * @returns {Promise} - Response data
   */
  async getEntries(contentType, queryParams = {}) {
    try {
      const params = {
        environment: queryParams.environment || 'development',
        locale: queryParams.locale || 'en-us',
        ...queryParams,
      };

      const response = await axios.get(
        `${API_BASE_URL}/content_types/${contentType}/entries`,
        {
          headers: getDeliveryHeaders(),
          params,
        }
      );

      return response.data;
    } catch (error) {
      console.error(`Error fetching entries for ${contentType}:`, error);
      throw error;
    }
  }

  /**
   * Get a single entry by UID
   * @param {string} contentType - Content type UID
   * @param {string} entryUid - Entry UID
   * @param {object} queryParams - Query parameters
   * @returns {Promise} - Response data
   */
  async getEntry(contentType, entryUid, queryParams = {}) {
    try {
      const params = {
        environment: queryParams.environment || 'development',
        locale: queryParams.locale || 'en-us',
        ...queryParams,
      };

      const response = await axios.get(
        `${API_BASE_URL}/content_types/${contentType}/entries/${entryUid}`,
        {
          headers: getDeliveryHeaders(),
          params,
        }
      );

      return response.data;
    } catch (error) {
      console.error(`Error fetching entry ${entryUid} for ${contentType}:`, error);
      throw error;
    }
  }

  /**
   * Get all content types
   * @returns {Promise} - List of content types
   */
  async getContentTypes() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/content_types`,
        {
          headers: getContentstackHeaders(),
        }
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching content types:', error);
      throw error;
    }
  }

  /**
   * Get assets
   * @param {object} queryParams - Query parameters
   * @returns {Promise} - Response data
   */
  async getAssets(queryParams = {}) {
    try {
      const params = {
        environment: queryParams.environment || 'development',
        ...queryParams,
      };

      const response = await axios.get(
        `${API_BASE_URL}/assets`,
        {
          headers: getDeliveryHeaders(),
          params,
        }
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching assets:', error);
      throw error;
    }
  }

  /**
   * Search entries with query
   * @param {string} contentType - Content type UID
   * @param {object} query - Query object
   * @param {object} queryParams - Additional query parameters
   * @returns {Promise} - Response data
   */
  async searchEntries(contentType, query = {}, queryParams = {}) {
    try {
      const params = {
        environment: queryParams.environment || 'development',
        locale: queryParams.locale || 'en-us',
        query: JSON.stringify(query),
        ...queryParams,
      };

      const response = await axios.get(
        `${API_BASE_URL}/content_types/${contentType}/entries`,
        {
          headers: getDeliveryHeaders(),
          params,
        }
      );

      return response.data;
    } catch (error) {
      console.error(`Error searching entries for ${contentType}:`, error);
      throw error;
    }
  }

  /**
   * Get global content (singleton entries)
   * @param {string} contentType - Content type UID
   * @param {object} queryParams - Query parameters
   * @returns {Promise} - Response data
   */
  async getGlobalContent(contentType, queryParams = {}) {
    try {
      // For singleton content, we typically get the first entry
      const response = await this.getEntries(contentType, {
        limit: 1,
        ...queryParams,
      });

      return response.entries && response.entries.length > 0 
        ? response.entries[0] 
        : null;
    } catch (error) {
      console.error(`Error fetching global content for ${contentType}:`, error);
      throw error;
    }
  }
}

// Export singleton instance
export default new ContentstackService();


