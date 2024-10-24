import WebApp from '../utils/telegramWebApp';

export const logToTelegram = async (logType, message) => {
  try {
    const formattedMessage = `${logType.toUpperCase()}\n${message}`;

    console.log(`[${logType}] ${message}`); // This will show up in the browser console

    WebApp.sendData(JSON.stringify({
      type: 'log',
      logType: logType,
      message: formattedMessage
    }));
  } catch (error) {
    console.error('Error sending log to Telegram:', error);
  }
};

export const checkWebAppInitialization = () => {
  if (!WebApp || !WebApp.initDataUnsafe || !WebApp.initDataUnsafe.query_id) {
    throw new Error('Telegram Web App not properly initialized');
  }
};