import { useState, useEffect } from 'react';
import contentstackService from '../services/contentstackService';

/**
 * Custom hook to fetch entries from Contentstack
 * @param {string} contentType - Content type UID
 * @param {object} options - Options for fetching (queryParams, dependencies, etc.)
 * @returns {object} - { data, loading, error }
 */
export const useContentstackEntries = (contentType, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!contentType) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await contentstackService.getEntries(
          contentType,
          options.queryParams || {}
        );
        setData(response);
      } catch (err) {
        console.error('Error fetching entries:', err);
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contentType, JSON.stringify(options.queryParams || {}), ...(options.dependencies || [])]);

  return { data, loading, error };
};

/**
 * Custom hook to fetch a single entry from Contentstack
 * @param {string} contentType - Content type UID
 * @param {string} entryUid - Entry UID
 * @param {object} options - Options for fetching
 * @returns {object} - { data, loading, error }
 */
export const useContentstackEntry = (contentType, entryUid, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!contentType || !entryUid) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await contentstackService.getEntry(
          contentType,
          entryUid,
          options.queryParams || {}
        );
        setData(response);
      } catch (err) {
        console.error('Error fetching entry:', err);
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contentType, entryUid, JSON.stringify(options.queryParams || {}), ...(options.dependencies || [])]);

  return { data, loading, error };
};

/**
 * Custom hook to fetch global/singleton content from Contentstack
 * @param {string} contentType - Content type UID
 * @param {object} options - Options for fetching
 * @returns {object} - { data, loading, error }
 */
export const useContentstackGlobal = (contentType, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!contentType) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await contentstackService.getGlobalContent(
          contentType,
          options.queryParams || {}
        );
        setData(response);
      } catch (err) {
        console.error('Error fetching global content:', err);
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contentType, JSON.stringify(options.queryParams || {}), ...(options.dependencies || [])]);

  return { data, loading, error };
};


