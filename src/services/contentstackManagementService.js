import axios from 'axios';
import { CONTENTSTACK_CONFIG, getContentstackHeaders } from '../config/contentstack';

const API_BASE_URL = CONTENTSTACK_CONFIG.apiUrl;

/**
 * Contentstack Management API Service
 * Handles content type creation and entry management
 */
class ContentstackManagementService {
  /**
   * Create a content type
   * @param {object} contentTypeData - Content type definition
   * @returns {Promise} - Response data
   */
  async createContentType(contentTypeData) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/content_types`,
        contentTypeData,
        {
          headers: getContentstackHeaders(),
        }
      );

      return response.data;
    } catch (error) {
      console.error('Error creating content type:', error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Create an entry
   * @param {string} contentTypeUid - Content type UID
   * @param {object} entryData - Entry data
   * @returns {Promise} - Response data
   */
  async createEntry(contentTypeUid, entryData) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/content_types/${contentTypeUid}/entries`,
        entryData,
        {
          headers: getContentstackHeaders(),
        }
      );

      return response.data;
    } catch (error) {
      console.error(`Error creating entry for ${contentTypeUid}:`, error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Update an entry
   * @param {string} contentTypeUid - Content type UID
   * @param {string} entryUid - Entry UID
   * @param {object} entryData - Updated entry data
   * @returns {Promise} - Response data
   */
  async updateEntry(contentTypeUid, entryUid, entryData) {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/content_types/${contentTypeUid}/entries/${entryUid}`,
        entryData,
        {
          headers: getContentstackHeaders(),
        }
      );

      return response.data;
    } catch (error) {
      console.error(`Error updating entry ${entryUid}:`, error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Publish an entry
   * @param {string} contentTypeUid - Content type UID
   * @param {string} entryUid - Entry UID
   * @param {object} publishData - Publish data (locales, environments)
   * @returns {Promise} - Response data
   */
  async publishEntry(contentTypeUid, entryUid, publishData = {}) {
    try {
      const payload = {
        entry: {
          environments: publishData.environments || ['production'],
          locales: publishData.locales || ['en-us'],
        },
      };

      const response = await axios.post(
        `${API_BASE_URL}/content_types/${contentTypeUid}/entries/${entryUid}/publish`,
        payload,
        {
          headers: getContentstackHeaders(),
        }
      );

      return response.data;
    } catch (error) {
      console.error(`Error publishing entry ${entryUid}:`, error.response?.data || error.message);
      throw error;
    }
  }

  /**
   * Get content type by UID
   * @param {string} contentTypeUid - Content type UID
   * @returns {Promise} - Response data
   */
  async getContentType(contentTypeUid) {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/content_types/${contentTypeUid}`,
        {
          headers: getContentstackHeaders(),
        }
      );

      return response.data;
    } catch (error) {
      console.error(`Error fetching content type ${contentTypeUid}:`, error.response?.data || error.message);
      throw error;
    }
  }
}

// Export singleton instance
export default new ContentstackManagementService();


