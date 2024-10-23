import WebApp, { initTelegramWebApp } from './telegramWebApp';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Initialize the Telegram Web App
initTelegramWebApp();

export const logError = async (error) => {
  try {
    const errorData = {
      message: error.message,
      stack: error.stack,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };

    console.error('Error:', error);

    // Send to backend
    const response = await fetch(`${BACKEND_URL}/log-error`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorData),
    });

    if (!response.ok) {
      console.error('Failed to send log to backend');
    }

    // Send to Telegram Web App
    WebApp.sendData(JSON.stringify({
      type: 'error',
      ...errorData
    }));
  } catch (logError) {
    console.error('Error while trying to log error:', logError);
  }
};

export const logToTelegram = async (logType, message, error = null) => {
  try {
    const logData = {
      type: logType,
      message: message,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      ...(error && { error: error.message, stack: error.stack }),
    };

    console.log(`[${logType}] ${message}`);

    // Send to backend
    const response = await fetch(`${BACKEND_URL}/log-error`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logData),
    });

    if (!response.ok) {
      console.error('Failed to send log to backend');
    }

    // Send to Telegram Web App
    WebApp.sendData(JSON.stringify(logData));
  } catch (logError) {
    console.error('Error sending log to Telegram:', logError);
  }
};

export const checkWebAppInitialization = () => {
  if (!WebApp.initDataUnsafe || !WebApp.initDataUnsafe.query_id) {
    throw new Error('Telegram Web App not properly initialized');
  }
};