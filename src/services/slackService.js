/**
 * Slack Notification Service
 * Sends notifications to Slack channel when events occur
 */

const SLACK_WEBHOOK_URL = import.meta.env.VITE_SLACK_WEBHOOK_URL;
const SLACK_CHANNEL_ID = 'C0A4NN019Q8';

/**
 * Send a message to Slack
 * @param {object} messageData - Message payload
 * @returns {Promise} - Response from Slack
 */
export const sendSlackNotification = async (messageData) => {
  if (!SLACK_WEBHOOK_URL) {
    console.warn('Slack webhook URL not configured. Skipping notification.');
    return { success: false, reason: 'No webhook URL' };
  }

  try {
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    });

    if (response.ok) {
      console.log('Slack notification sent successfully');
      return { success: true };
    } else {
      console.error('Failed to send Slack notification:', response.statusText);
      return { success: false, reason: response.statusText };
    }
  } catch (error) {
    // CORS errors are expected when calling Slack directly from browser
    console.warn('Slack notification failed (CORS expected):', error.message);
    return { success: false, reason: error.message };
  }
};

/**
 * Send enrollment notification to Slack
 * @param {object} enrollmentData - Enrollment form data
 * @returns {Promise}
 */
export const notifyNewEnrollment = async (enrollmentData) => {
  const message = {
    channel: SLACK_CHANNEL_ID,
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '🎓 New Course Enrollment!',
          emoji: true,
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Name:*\n${enrollmentData.firstName} ${enrollmentData.lastName}`,
          },
          {
            type: 'mrkdwn',
            text: `*Email:*\n${enrollmentData.email}`,
          },
          {
            type: 'mrkdwn',
            text: `*Phone:*\n${enrollmentData.phone}`,
          },
          {
            type: 'mrkdwn',
            text: `*Experience:*\n${enrollmentData.experience}`,
          },
          {
            type: 'mrkdwn',
            text: `*Training Type:*\n${enrollmentData.trainingType}`,
          },
          {
            type: 'mrkdwn',
            text: `*Batch Date:*\n${enrollmentData.batchDate}`,
          },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: enrollmentData.message 
            ? `*Message:*\n${enrollmentData.message}` 
            : '_No additional message provided_',
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `📅 Enrolled on: ${new Date().toLocaleString()}`,
          },
        ],
      },
      {
        type: 'divider',
      },
    ],
  };

  return sendSlackNotification(message);
};

/**
 * Send content update notification to Slack
 * @param {string} contentType - Type of content updated
 * @param {string} entryTitle - Title of the entry
 * @param {string} action - Action performed (created, updated, published)
 * @returns {Promise}
 */
export const notifyContentUpdate = async (contentType, entryTitle, action = 'updated') => {
  const actionEmoji = {
    created: '✨',
    updated: '📝',
    published: '🚀',
    deleted: '🗑️',
  };

  const message = {
    channel: SLACK_CHANNEL_ID,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${actionEmoji[action] || '📢'} *Content ${action.charAt(0).toUpperCase() + action.slice(1)}*`,
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Content Type:*\n${contentType}`,
          },
          {
            type: 'mrkdwn',
            text: `*Entry:*\n${entryTitle}`,
          },
        ],
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `🕐 ${new Date().toLocaleString()}`,
          },
        ],
      },
    ],
  };

  return sendSlackNotification(message);
};

export default {
  sendSlackNotification,
  notifyNewEnrollment,
  notifyContentUpdate,
};

